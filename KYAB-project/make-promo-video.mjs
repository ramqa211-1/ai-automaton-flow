#!/usr/bin/env node
// Creates a Ken Burns slideshow from the 3 WhatsApp agent images.
// No API credits needed — pure ffmpeg.
//
// Story order: logo → leads overview → agent detail
// Output: media/generated/whatsapp-promo-<timestamp>.mp4  (portrait 1080x1920)
//
// Usage: node make-promo-video.mjs [--out path.mp4] [--landscape] [--sec 5]

import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- parse args --------------------------------------------------------------
const argv = process.argv.slice(2);
function flag(name, def) {
  const i = argv.indexOf(`--${name}`);
  if (i === -1) return def;
  return argv[i + 1] ?? true;
}
const landscape = argv.includes('--landscape');
const secPerImg  = Number(flag('sec', 5));
const transitionSec = 1;

const [W, H] = landscape ? [1920, 1080] : [1080, 1920];
const FPS    = 25;
const FRAMES = secPerImg * FPS;

const IMAGES = [
  'media/agent_whatsapp/leadsAgent.png',
  'media/agent_whatsapp/leadAgent2.PNG',
  'media/agent_whatsapp/logo.png',
];

const customOut = flag('out', null);
const outFile = customOut
  ? (path.isAbsolute(customOut) ? customOut : path.join(__dirname, customOut))
  : path.join(__dirname, 'media', 'generated', `whatsapp-promo-${Date.now()}.mp4`);

// --- validate images --------------------------------------------------------
const absImages = IMAGES.map(f => path.join(__dirname, f));
for (const img of absImages) {
  if (!existsSync(img)) {
    process.stderr.write(`Error: image not found: ${img}\n`);
    process.exit(1);
  }
}

// --- build filter_complex ---------------------------------------------------
// Each image: scale to fit W×H with black letterbox, then Ken Burns zoom.
// Images alternate zoom-in / zoom-out for visual variety.
// Commas inside zoompan expressions must be escaped as \, for ffmpeg parser.

function scaleAndPad(i) {
  return `[${i}:v]scale=${W}:${H}:force_original_aspect_ratio=decrease,` +
    `pad=${W}:${H}:(ow-iw)/2:(oh-ih)/2:color=black`;
}

function zoomIn(i) {
  return `${scaleAndPad(i)},` +
    `zoompan=z='min(zoom+0.0008\\,1.10)':` +
    `x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':` +
    `d=${FRAMES}:s=${W}x${H}:fps=${FPS},setsar=1[v${i}]`;
}

function zoomOut(i) {
  return `${scaleAndPad(i)},` +
    `zoompan=z='if(eq(on\\,1)\\,1.10\\,max(1.0\\,zoom-0.0008))':` +
    `x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':` +
    `d=${FRAMES}:s=${W}x${H}:fps=${FPS},setsar=1[v${i}]`;
}

const offset1 = secPerImg - transitionSec;                     // 4
const offset2 = secPerImg * 2 - transitionSec * 2;            // 8

const fc = [
  zoomIn(0),
  zoomOut(1),
  zoomIn(2),
  `[v0][v1]xfade=transition=fade:duration=${transitionSec}:offset=${offset1}[v01]`,
  `[v01][v2]xfade=transition=fade:duration=${transitionSec}:offset=${offset2}[out]`,
].join(';');

// --- run ffmpeg -------------------------------------------------------------
await mkdir(path.dirname(outFile), { recursive: true });

const ffArgs = [
  // 3 looped still images, each long enough to cover their segment
  '-loop', '1', '-t', String(secPerImg + 2), '-i', absImages[0],
  '-loop', '1', '-t', String(secPerImg + 2), '-i', absImages[1],
  '-loop', '1', '-t', String(secPerImg + 2), '-i', absImages[2],
  '-filter_complex', fc,
  '-map', '[out]',
  '-c:v', 'libx264',
  '-preset', 'medium',
  '-crf', '22',
  '-r', String(FPS),
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  '-y',
  outFile,
];

process.stderr.write(`Building promo video (${W}×${H}, ${IMAGES.length} images × ${secPerImg}s)...\n`);
process.stderr.write(`Output: ${outFile}\n\n`);

await new Promise((resolve, reject) => {
  const ff = spawn('ffmpeg', ffArgs, { stdio: ['ignore', 'inherit', 'inherit'] });
  ff.on('close', code => {
    if (code === 0) resolve();
    else reject(new Error(`ffmpeg exited with code ${code}`));
  });
  ff.on('error', err => reject(new Error(`ffmpeg not found: ${err.message}`)));
});

console.log(outFile);
