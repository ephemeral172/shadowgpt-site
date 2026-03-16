/**
 * Google Analytics 4 (gtag.js) integration.
 * Set VITE_GA_MEASUREMENT_ID in .env (e.g. G-XXXXXXXXXX) to enable.
 * Tracks page_view on init and on SPA route changes when used with useAnalyticsPageView().
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GA_SCRIPT_URL = "https://www.googletagmanager.com/gtag/js";

function loadGtagScript(id) {
  if (typeof window === "undefined" || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `${GA_SCRIPT_URL}?id=${id}`;
  document.head.appendChild(script);
}

/**
 * Initialize GA4. No-op if VITE_GA_MEASUREMENT_ID is not set.
 */
export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "") return;
  loadGtagScript(GA_MEASUREMENT_ID);
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false, // we send page_view ourselves on route change
  });
}

/**
 * Send a page_view event. Use from a component that has access to location/title.
 */
export function sendPageView(path, title = document?.title) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
  });
}

export function getMeasurementId() {
  return GA_MEASUREMENT_ID || null;
}
