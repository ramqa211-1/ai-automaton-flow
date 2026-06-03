---
name: deploy
description: Audit and rewrite asset/navigation paths to be GitHub-Pages-safe (BASE_URL-relative), run the build, orchestrate parallel verification sub-agents, and ship to GitHub Pages / the Raspberry Pi. Use when the user asks to deploy, publish, push to Pages, or ship ai-automaton-flow.
---

# Deploy skill — friction-free, self-validating deploy

This app is served from GitHub Pages under the base path `/ai-automaton-flow/`
(`base` in [vite.config.ts](../../../vite.config.ts), production mode). The classic
failure is an absolute `/asset` path that resolves to the domain root and 404s in
production. This skill eliminates that class of bug and proves the deploy is live
before declaring success.

**Execution principle:** run end-to-end. Do not stop to ask questions or re-verify
credentials mid-run — use saved settings, memory, and configured MCP servers. A run
that stalls with fixes left pending is a failed run.

## Procedure

### 1. Audit absolute paths
Grep `src/**` and `index.html` for leading-slash references that Vite will NOT
rewrite at runtime:

```
src="/        href="/        url(/        fetch("/        fetch('/
new URL("/    new URL('/     from "/<non-alias>
```

Notes:
- Vite **does** rewrite `/`-prefixed paths inside `index.html` against `base`, so
  static markup there is usually fine — the real risk is **runtime string literals
  in `.ts`/`.tsx`** (image `src`, `fetch`/`new URL`, router basenames).
- **Never** flag the `@/` import alias (resolves to `src/`) or absolute `http(s)://`
  URLs — those are correct as-is.
- Router note: `react-router` should use `basename={import.meta.env.BASE_URL}` rather
  than hardcoded `/` paths if any are present.

### 2. Rewrite to BASE_URL
Wrap each offending runtime literal with the shared helper:

```ts
import { asset } from "@/lib/asset";   // src/lib/asset.ts
<img src={asset("images/foo.png")} />  // not "/images/foo.png"
```

Or inline `` `${import.meta.env.BASE_URL}images/foo.png` `` where importing the helper
is impractical. Strip the leading slash; `asset()` already normalizes it.

### 3. Verify locally (pre-push gate)
```powershell
npx tsc -p tsconfig.app.json --noEmit   # fast typecheck (also runs per-edit via hook)
npm run build                            # full bundle — catches asset/bundler errors
```
Both must pass before pushing. Do not push on a red build.

### 4. Orchestrate parallel verification (sub-agents)
Launch the three agents in Stage 5 **in a single message** (parallel Task calls).

### 5. Ship
```powershell
git add -A
git commit -m "deploy: <summary>"
git push        # push to main triggers .github/workflows/deploy.yml (GitHub Pages)
```
Then run the live health check (Agent 3). For Raspberry Pi targets, use the
`raspberry-pi` skill / saved SSH (`ramqa@10.100.102.111`) instead of Pages.

## Parallel verification blueprint

Launch all three together; collect results; apply fixes in-loop (never leave pending).

**Agent 1 — Path patcher**
- Scan `src/**` + `index.html` for the absolute-path patterns in step 1.
- Rewrite runtime literals to `asset()` / `import.meta.env.BASE_URL`.
- Re-run the grep and confirm **zero** remaining hits. Report the diff.

**Agent 2 — Compose validator (generic / discoverable)**
- Discover the `docker-compose.yml` in scope (do not assume a fixed path).
- Validate: service definitions; `depends_on` / startup ordering (e.g. **Temporal**
  and its DB up before workers that connect to it); all referenced env vars are
  defined (in `.env` / compose `environment`); DB **driver and connection string**
  match the engine (e.g. `postgres` driver vs a MySQL DSN is a defect).
- Report findings only — **does not deploy or mutate the stack.**

**Agent 3 — Live post-deploy validator**
- After push, poll until GitHub Pages returns **200 OK** (Pages can lag ~1-2 min):
  ```bash
  curl -s -o /dev/null -w "%{http_code}" https://ramqa211-1.github.io/ai-automaton-flow/
  ```
- Spot-check a known asset URL (e.g. the logo) — must be **200, not 404** — to prove
  the BASE_URL rewrite worked in production.
- For n8n-side changes, inspect **live** runs via the n8n MCP (`n8n_executions`,
  `n8n_health_check`) rather than guessing field shapes.
- Apply fixes in-loop; only report success once the live checks are green.

## Done criteria
- `tsc --noEmit` + `npm run build` green.
- Zero absolute runtime paths remain.
- Pages root + a sample asset both return 200.
- (If applicable) compose validation clean and n8n executions healthy.
