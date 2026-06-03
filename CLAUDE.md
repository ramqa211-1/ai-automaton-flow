# ai-automaton-flow — Project Instructions

Vite + React + shadcn (TypeScript). Deploys to **GitHub Pages** under base path
`/ai-automaton-flow/` (see [vite.config.ts](vite.config.ts)) via
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) on push to `main`.

## Execution discipline — uninterrupted

Once a plan is approved, **execute end-to-end**. Do NOT pause mid-task to ask
clarifying questions or re-verify credentials. Use saved configuration and memory
(`~/.claude` settings, project memory, configured MCP servers, SSH to
`ramqa@10.100.102.111`). Front-load all questions during planning only.
**Interrupted execution with fixes left pending is a failure.** Validate your own
work (typecheck, build, live health check) and self-correct rather than handing back
a half-done task.

## Deployment / paths

- Never introduce absolute `/asset` paths in runtime TS/TSX — they 404 on GitHub
  Pages. Use `asset("images/x.png")` from [src/lib/asset.ts](src/lib/asset.ts) or
  `` `${import.meta.env.BASE_URL}...` ``.
- A `PostToolUse` hook runs `tsc --noEmit` after every `src/**` edit; keep edits
  type-clean. Run `npm run build` before pushing (full bundle gate).
- Use the **`deploy`** skill to audit paths, build, run parallel verification agents,
  and ship.

## n8n discipline

When modifying n8n workflows, ALWAYS fetch **live execution data first**
(`n8n_executions`, `n8n_get_workflow`) to map exact JSON field shapes — **never guess
field structure.** Prefer lightweight deterministic validation (Code / IF nodes) over
heavy LLM models like GPT-4o for routing and classification tasks. n8n is reachable at
`https://n8n.ramwalast.com` / `http://10.100.102.111:5678`.

## Localization — Hebrew-first

When Hebrew output or assets are requested (infographics, slides, layouts,
presentations, UI copy), model and generate **fully in Hebrew on the first pass** —
RTL layout, Hebrew copy, Hebrew labels. Do NOT draft in English and translate after.
Always include the business logo on presentations:
`c:\Users\RamWalastal\ai-automaton-flow\images-buis\logo.png` (see memory
`user_presentation_logo.md`).
