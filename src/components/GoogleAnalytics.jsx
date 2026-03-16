import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, sendPageView } from "@/lib/analytics";

/**
 * Renders nothing. Initializes GA4 and sends page_view on every route change.
 * Must be mounted inside Router.
 */
export default function GoogleAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const path = pathname || "/";
    const title = document.title || "ShadowGPT";
    sendPageView(path, title);
  }, [pathname]);

  return null;
}
