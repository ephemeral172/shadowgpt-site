import { BASE_URL } from "./documentMeta";

/**
 * English titles/descriptions for crawlers (canonical URLs match router paths).
 */
export const STATIC_PAGE_SEO = {
  "/": {
    title: "Shadow AI Protection | ShadowGPT — Monitor ChatGPT, Claude, Gemini",
    description:
      "Shadow AI protection: monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. No prompt or file content stored — metadata and risk only. Free 7-day audit.",
  },
  "/Privacy": {
    title: "Privacy Policy | ShadowGPT",
    description:
      "How ShadowGPT processes account data, event metadata, and risk classification. We do not store prompt text or file content by default — details in the full policy.",
  },
  "/Terms": {
    title: "Terms of Use | ShadowGPT",
    description: "Terms of use for the ShadowGPT browser extension and cloud dashboard for AI use monitoring.",
  },
  "/FAQ": {
    title: "FAQ | ShadowGPT",
    description:
      "Frequently asked questions about ShadowGPT: monitoring ChatGPT and other AI services, privacy, deployment, and compliance.",
  },
  "/Help": {
    title: "Help | ShadowGPT",
    description:
      "Install the ShadowGPT extension, link your organization, use the dashboard, notifications, and integrations.",
  },
  "/Security": {
    title: "Security & Compliance | ShadowGPT",
    description:
      "Security practices, data minimization, GDPR and 152-FZ context, and how ShadowGPT handles metadata without storing prompt content.",
  },
  "/Integrations": {
    title: "Integrations | ShadowGPT",
    description:
      "Telegram, webhooks, email alerts, CSV export, PDF audit reports, and employee risk scoring for ShadowGPT.",
  },
  "/Contact": {
    title: "Contact | ShadowGPT",
    description: "Contact ShadowGPT for demos, pilots, and enterprise AI visibility questions.",
  },
  "/Status": {
    title: "System Status | ShadowGPT",
    description: "ShadowGPT service status, uptime, and system health.",
  },
  "/Blog": {
    title: "Blog | ShadowGPT",
    description:
      "Articles on Shadow AI, employee AI use, ChatGPT monitoring, compliance, and reducing corporate data leaks.",
  },
};

export function canonicalUrlForPath(pathname) {
  if (!pathname || pathname === "/") return `${BASE_URL}/`;
  return `${BASE_URL}${pathname}`;
}
