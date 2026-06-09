# KYAB video generator

Node CLI that turns a text prompt (and optionally an image) into an MP4 via the
[Higgsfield Cloud API](https://cloud.higgsfield.ai), using the official
`@higgsfield/client` SDK.

Higgsfield has **no single-call text-to-video** endpoint, so this tool runs the
documented two-step pipeline:

- **text-to-video** (default): Soul (`/v1/text2image/soul`) generates a still, then
  DoP (`/v1/image2video/dop`) animates it.
- **image-to-video** (`--image`): a local file is uploaded to the Higgsfield CDN
  (`uploadImage`), then animated with DoP. An `https://` image URL is used directly.

## Setup

```bash
cd KYAB-project
npm install
```

Credentials are read from `KYAB-project/.env` (already git-ignored):

```
higgsfield_key_api_id=...
higgsfield_key_seceret=...
```

> The key name `higgsfield_key_seceret` is the upstream spelling (a typo carried over
> from the dashboard); the CLI reads it as-is (and also accepts `higgsfield_key_secret`).

## Usage

```bash
# text-to-video (Soul -> DoP)
node generate-video.mjs --prompt "neon city flythrough at night"

# image-to-video (animate a local screenshot/logo)
node generate-video.mjs --image media/agent_whatsapp/logo.png --prompt "subtle zoom, soft particles"

# remote image, best quality, fixed seed
node generate-video.mjs --image https://example.com/a.png --prompt "slow orbit" --dop standard --seed 42
```

Output defaults to `media/generated/<slug>-<timestamp>.mp4` (git-ignored). Use
`--out <path>` to override. The final MP4 path is printed to stdout; progress goes to
stderr.

### Options

| Flag | Default | Notes |
|------|---------|-------|
| `--prompt <text>` | — | **Required.** Scene / motion description. |
| `--image <path\|url>` | — | Source image → image-to-video. Local path is uploaded. |
| `--dop <lite\|turbo\|standard>` | `turbo` | DoP speed/quality. |
| `--aspect <portrait\|landscape\|square>` | `portrait` | text-to-video framing (Soul step). |
| `--quality <720p\|1080p>` | `1080p` | Soul image quality (text-to-video). |
| `--motion <name>` | — | Named motion, looked up via `getMotions()`. |
| `--seed <n>` | random | 0–1,000,000, for reproducibility. |
| `--out <path>` | `media/generated/…` | Output MP4 path. |
| `--keep-image` | off | Also save the intermediate Soul still (text-to-video). |
| `--help` | — | Show help. |

> Each run consumes Higgsfield credits. `dop-lite` is cheapest/fastest for tests.
