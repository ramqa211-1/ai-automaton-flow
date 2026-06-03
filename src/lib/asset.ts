// Resolve a public asset against the Vite base path so links work on GitHub
// Pages (served under /ai-automaton-flow/). Use this for any runtime asset
// string literal instead of a leading-slash absolute path.
//
//   import { asset } from "@/lib/asset";
//   <img src={asset("images/brain-ram-logo.jpg")} />
//
// Note: absolute URLs (http/https) and the "@/" import alias are unaffected.
export const asset = (p: string): string =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;
