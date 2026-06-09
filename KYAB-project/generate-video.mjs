#!/usr/bin/env node
// Higgsfield video generation CLI for KYAB-project.
//
// Two modes:
//   text-to-video : no --image. Soul (text->image) then DoP (image->video).
//   image-to-video: --image <path|url>. Local files are uploaded to the
//                   Higgsfield CDN first, then animated with DoP.
//
// Higgsfield has no single-call text-to-video endpoint, so text mode runs the
// documented Soul -> DoP pipeline.
//
// Usage:
//   node generate-video.mjs --prompt "neon city flythrough at night"
//   node generate-video.mjs --image media/agent_whatsapp/logo.png --prompt "subtle zoom, soft particles"
//
// Flags: see printHelp() below. Credentials are read from KYAB-project/.env
// (higgsfield_key_api_id + higgsfield_key_seceret).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  HiggsfieldClient,
  InputImage,
  DoPModel,
  SoulQuality,
  SoulSize,
  BatchSize,
} from '@higgsfield/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- aspect -> Soul size (only affects the text->image step) -----------------
const ASPECT_SIZES = {
  portrait: SoulSize.PORTRAIT_1152x2048, // 9:16-ish, default (matches mobile-view)
  landscape: SoulSize.LANDSCAPE_2048x1152,
  square: SoulSize.SQUARE_1536x1536,
};

const DOP_MODELS = {
  lite: DoPModel.LITE,
  turbo: DoPModel.TURBO,
  standard: DoPModel.STANDARD,
};

function printHelp() {
  console.log(`
Higgsfield video generator (KYAB-project)

Usage:
  node generate-video.mjs --prompt "<text>" [options]

Modes:
  text-to-video   (default)        Soul text->image, then DoP image->video
  image-to-video  --image <path|url>   animate an existing image with DoP

Options:
  --prompt <text>        Required. Scene / motion description.
  --image <path|url>     Source image. Local path is uploaded; https URL used as-is.
  --dop <lite|turbo|standard>   DoP quality/speed. Default: turbo.
  --aspect <portrait|landscape|square>   text-to-video framing. Default: portrait.
  --quality <720p|1080p> Soul image quality (text-to-video). Default: 1080p.
  --motion <name>        Optional named motion (looked up via getMotions()).
  --seed <n>             Optional seed (0-1000000) for reproducibility.
  --out <path>           Output mp4. Default: media/generated/<slug>-<ts>.mp4.
  --keep-image           Also save the intermediate Soul image (text-to-video).
  --help                 Show this help.

Note: each run consumes Higgsfield credits.
`);
}

// --- tiny arg parser ---------------------------------------------------------
function parseArgs(argv) {
  const args = {};
  const flags = new Set(['keep-image', 'help']);
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (flags.has(key)) {
      args[key] = true;
    } else {
      args[key] = argv[++i];
    }
  }
  return args;
}

// --- .env loader (no dotenv dep) --------------------------------------------
async function loadCredentials() {
  const envPath = path.join(__dirname, '.env');
  if (!existsSync(envPath)) {
    throw new Error(`.env not found at ${envPath}`);
  }
  const raw = await readFile(envPath, 'utf8');
  const env = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  // NOTE: upstream .env uses the misspelled key name "higgsfield_key_seceret".
  const apiKey = env.higgsfield_key_api_id;
  const apiSecret = env.higgsfield_key_seceret ?? env.higgsfield_key_secret;
  if (!apiKey || !apiSecret) {
    throw new Error(
      'Missing higgsfield_key_api_id or higgsfield_key_seceret in .env',
    );
  }
  return { apiKey, apiSecret };
}

// --- helpers -----------------------------------------------------------------
function slugify(s) {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'video'
  );
}

function resultUrl(jobSet) {
  const r = jobSet?.jobs?.[0]?.results;
  return r?.raw?.url || r?.min?.url || null;
}

function assertOk(jobSet, label) {
  if (jobSet?.isNsfw) throw new Error(`${label}: rejected as NSFW (credits refunded)`);
  if (jobSet?.isFailed) throw new Error(`${label}: generation failed (credits refunded)`);
  const url = resultUrl(jobSet);
  if (!url) {
    throw new Error(`${label}: completed but no result URL found in response`);
  }
  return url;
}

const FORMAT_BY_EXT = { '.png': 'png', '.jpg': 'jpeg', '.jpeg': 'jpeg', '.webp': 'webp' };

async function resolveImageUrl(client, imageArg) {
  if (/^https?:\/\//i.test(imageArg)) return imageArg;
  const abs = path.isAbsolute(imageArg) ? imageArg : path.join(__dirname, imageArg);
  if (!existsSync(abs)) throw new Error(`image not found: ${abs}`);
  const ext = path.extname(abs).toLowerCase();
  const format = FORMAT_BY_EXT[ext];
  if (!format) throw new Error(`unsupported image type "${ext}" (use png/jpg/webp)`);
  const buf = await readFile(abs);
  process.stderr.write(`Uploading ${path.basename(abs)} to Higgsfield CDN...\n`);
  return client.uploadImage(buf, format);
}

async function download(url, outPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  return outPath;
}

async function resolveMotions(client, name) {
  if (!name) return undefined;
  const motions = await client.getMotions();
  const m = motions.find((x) => x.name?.toLowerCase() === name.toLowerCase());
  if (!m) {
    const names = motions.map((x) => x.name).join(', ');
    throw new Error(`motion "${name}" not found. Available: ${names}`);
  }
  return [{ id: m.id, strength: 1.0 }];
}

// --- main --------------------------------------------------------------------
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  if (!args.prompt) {
    printHelp();
    throw new Error('--prompt is required');
  }

  const dopModel = DOP_MODELS[(args.dop || 'turbo').toLowerCase()];
  if (!dopModel) throw new Error(`invalid --dop "${args.dop}" (lite|turbo|standard)`);

  const seed = args.seed != null ? Number(args.seed) : undefined;
  if (seed != null && (Number.isNaN(seed) || seed < 0 || seed > 1_000_000)) {
    throw new Error('--seed must be a number 0-1000000');
  }

  const { apiKey, apiSecret } = await loadCredentials();
  const client = new HiggsfieldClient({ apiKey, apiSecret });

  const outPath =
    args.out != null
      ? path.isAbsolute(args.out)
        ? args.out
        : path.join(__dirname, args.out)
      : path.join(
          __dirname,
          'media',
          'generated',
          `${slugify(args.prompt)}-${Date.now()}.mp4`,
        );

  // 1. Resolve the source image URL.
  let imageUrl;
  if (args.image) {
    imageUrl = await resolveImageUrl(client, args.image);
  } else {
    // text-to-video: generate a still with Soul first.
    const size = ASPECT_SIZES[(args.aspect || 'portrait').toLowerCase()];
    if (!size) throw new Error(`invalid --aspect "${args.aspect}" (portrait|landscape|square)`);
    const quality = (args.quality || '1080p') === '720p' ? SoulQuality.SD : SoulQuality.HD;
    process.stderr.write('Step 1/2: generating still image with Soul...\n');
    const soulJob = await client.generate(
      '/v1/text2image/soul',
      {
        prompt: args.prompt,
        width_and_height: size,
        quality,
        batch_size: BatchSize.SINGLE,
        ...(seed != null ? { seed } : {}),
      },
      { withPolling: true },
    );
    imageUrl = assertOk(soulJob, 'Soul');
    if (args['keep-image']) {
      const imgOut = outPath.replace(/\.mp4$/i, '.png');
      await download(imageUrl, imgOut);
      process.stderr.write(`  saved still: ${imgOut}\n`);
    }
  }

  // 2. Animate with DoP.
  const motions = await resolveMotions(client, args.motion);
  process.stderr.write(
    `${args.image ? 'Animating' : 'Step 2/2: animating'} image with DoP (${dopModel})...\n`,
  );
  const videoJob = await client.generate(
    '/v1/image2video/dop',
    {
      model: dopModel,
      prompt: args.prompt,
      input_images: [InputImage.fromUrl(imageUrl)],
      ...(motions ? { motions } : {}),
      ...(seed != null ? { seed } : {}),
    },
    { withPolling: true },
  );
  const videoUrl = assertOk(videoJob, 'DoP');

  // 3. Download.
  process.stderr.write('Downloading video...\n');
  const saved = await download(videoUrl, outPath);
  console.log(saved);
}

main().catch((err) => {
  process.stderr.write(`\nError: ${err?.message || err}\n`);
  process.exit(1);
});
