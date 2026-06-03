#!/usr/bin/env node
// PostToolUse hook: fast TypeScript typecheck after Edit/Write/MultiEdit.
// Only runs `tsc --noEmit` when the edited file is a .ts/.tsx under <repo>/src.
// On type errors: prints compiler output to stderr and exits 2 so Claude Code
// feeds the errors back for self-correction. Otherwise exits 0 silently.
// Cross-platform (Node) to avoid PowerShell/bash divergence on Windows.

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve, relative, sep } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// .claude/hooks/typecheck.mjs -> repo root is two levels up.
const repoRoot = resolve(__dirname, "..", "..");

// Read the hook payload from stdin.
let raw = "";
try {
  const { readFileSync } = await import("node:fs");
  raw = readFileSync(0, "utf8");
} catch {
  raw = "";
}

let filePath = "";
try {
  const payload = JSON.parse(raw || "{}");
  filePath =
    payload?.tool_input?.file_path ||
    payload?.tool_input?.filePath ||
    "";
} catch {
  // Malformed/empty payload -> nothing to check.
  process.exit(0);
}

if (!filePath) process.exit(0);

const abs = resolve(filePath);
const rel = relative(repoRoot, abs);

// Skip anything outside src/ or not a TS source file.
const inSrc = rel === "src" || rel.startsWith("src" + sep);
const isTs = /\.tsx?$/.test(abs);
if (!inSrc || !isTs) process.exit(0);

const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["tsc", "-p", "tsconfig.app.json", "--noEmit"],
  { cwd: repoRoot, encoding: "utf8", shell: false }
);

if (result.status === 0) process.exit(0);

const out = `${result.stdout || ""}${result.stderr || ""}`.trim();
process.stderr.write(
  `TypeScript typecheck failed after editing ${rel}:\n${out}\n`
);
process.exit(2);
