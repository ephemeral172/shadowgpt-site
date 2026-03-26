/** Production site origin — keep in sync with index.html and sitemap. */
export const BASE_URL = "https://shadowgpt.app";

export function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function setMeta(attr, content, useProperty = false) {
  const key = useProperty ? "property" : "name";
  let el = document.querySelector(`meta[${key}="${attr}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, attr);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setRobots(content) {
  let el = document.querySelector('meta[name="robots"]');
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", "robots");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/** Default head state when leaving blog post (matches historical index.html defaults). */
export const DEFAULT_SITE_META = {
  canonical: `${BASE_URL}/`,
  title: "Shadow AI Protection | ShadowGPT — Monitor ChatGPT, Claude, Gemini",
  description:
    "Shadow AI protection: monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. No prompt or file content stored — metadata and risk only. Free 7-day audit.",
};

/**
 * Apply canonical, title, description, and default Open Graph / Twitter tags for marketing pages.
 */
export function applySiteMeta({ canonicalUrl, title, description }) {
  setCanonical(canonicalUrl);
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", description);

  setMeta("og:type", "website", true);
  setMeta("og:url", canonicalUrl, true);
  setMeta("og:title", title, true);
  setMeta("og:description", description, true);
  setMeta("og:image", DEFAULT_OG_IMAGE, true);
  setMeta("og:image:width", "1200", true);
  setMeta("og:image:height", "630", true);

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:url", canonicalUrl);
  setMeta("twitter:title", title);
  setMeta("twitter:description", description);
  setMeta("twitter:image", DEFAULT_OG_IMAGE);
}

export function restoreDefaultSiteMeta() {
  applySiteMeta({
    canonicalUrl: DEFAULT_SITE_META.canonical,
    title: DEFAULT_SITE_META.title,
    description: DEFAULT_SITE_META.description,
  });
}
