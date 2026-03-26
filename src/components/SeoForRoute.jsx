import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { applySiteMeta, setRobots } from "@/lib/seo/documentMeta";
import { STATIC_PAGE_SEO, canonicalUrlForPath } from "@/lib/seo/staticRoutesSeo";

const STATIC_PATHS = new Set(Object.keys(STATIC_PAGE_SEO));

function isBlogPostPath(pathname) {
  const m = matchPath("/Blog/:slug", pathname);
  return Boolean(m?.params?.slug);
}

/**
 * Sets self-referencing canonical and meta for each static route so crawlers index pages separately.
 * Blog posts are handled by BlogPost.jsx (article OG + canonical).
 */
export default function SeoForRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isBlogPostPath(pathname)) {
      return undefined;
    }

    if (!STATIC_PATHS.has(pathname)) {
      const url = canonicalUrlForPath(pathname);
      setRobots("noindex, follow");
      applySiteMeta({
        canonicalUrl: url,
        title: "Page not found | ShadowGPT",
        description: "The requested page could not be found.",
      });
      return undefined;
    }

    setRobots("index, follow");
    const { title, description } = STATIC_PAGE_SEO[pathname];
    applySiteMeta({
      canonicalUrl: canonicalUrlForPath(pathname),
      title,
      description,
    });
    return undefined;
  }, [pathname]);

  return null;
}
