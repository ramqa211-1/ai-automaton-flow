import { useEffect } from "react";

// Lightweight, dependency-free per-route SEO. On mount it overrides the document
// title + meta/canonical/OG tags (and optional JSON-LD), then restores the static
// index.html defaults on unmount. GitHub Pages does not SSR, but modern Googlebot
// renders JS, so client-set metadata + JSON-LD are indexed; the static <head> in
// index.html remains the crawl fallback.

interface SeoOptions {
  title: string;
  description: string;
  /** Absolute canonical / og:url for this route. */
  canonical: string;
  /** Optional JSON-LD object injected as a <script type="application/ld+json">. */
  jsonLd?: Record<string, unknown>;
}

/** Set or create a <meta name|property=...> and return a restore function. */
function setMeta(selector: string, attr: "name" | "property", key: string, value: string): () => void {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  const created = !el;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const prev = el.getAttribute("content");
  el.setAttribute("content", value);
  return () => {
    if (created) el?.remove();
    else if (prev !== null) el?.setAttribute("content", prev);
  };
}

export function useSeo({ title, description, canonical, jsonLd }: SeoOptions): void {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const restorers: Array<() => void> = [];

    restorers.push(
      setMeta('meta[name="description"]', "name", "description", description),
      setMeta('meta[property="og:title"]', "property", "og:title", title),
      setMeta('meta[property="og:description"]', "property", "og:description", description),
      setMeta('meta[property="og:url"]', "property", "og:url", canonical),
    );

    // Canonical link
    let linkEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const linkCreated = !linkEl;
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.setAttribute("rel", "canonical");
      document.head.appendChild(linkEl);
    }
    const prevHref = linkEl.getAttribute("href");
    linkEl.setAttribute("href", canonical);

    // JSON-LD structured data
    let ldEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldEl = document.createElement("script");
      ldEl.type = "application/ld+json";
      ldEl.setAttribute("data-seo-route", "");
      ldEl.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(ldEl);
    }

    return () => {
      document.title = prevTitle;
      restorers.forEach((restore) => restore());
      if (linkCreated) linkEl?.remove();
      else if (prevHref !== null) linkEl?.setAttribute("href", prevHref);
      ldEl?.remove();
    };
  }, [title, description, canonical, jsonLd]);
}
