import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_META = {
  "/": {
    title: "ShadowGPT — Corporate protection from AI data leaks",
    description: "Monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. Free 7-day audit.",
  },
  "/Terms": {
    title: "Terms of Use — ShadowGPT",
    description: "Terms of use for ShadowGPT service. Operator: Akulov Sergey Vladimirovich. Contact page for inquiries.",
  },
  "/Privacy": {
    title: "Privacy Policy — ShadowGPT",
    description: "ShadowGPT privacy policy. We do not store prompt or file content — only event metadata and risk level.",
  },
  "/FAQ": {
    title: "FAQ — ShadowGPT",
    description: "Frequently asked questions about ShadowGPT: pricing, deployment, browsers, GDPR, notifications, data storage.",
  },
  "/Help": {
    title: "Help — ShadowGPT",
    description: "How to install the extension, linking code, dashboard overview, notifications and integrations.",
  },
  "/Security": {
    title: "Security & Compliance — ShadowGPT",
    description: "ShadowGPT security: we do not store your data content. 152-FZ, GDPR, technical and organizational measures.",
  },
  "/Integrations": {
    title: "Integrations — ShadowGPT",
    description: "Telegram, Webhook, Email, CSV export, PDF Audit Report, Employee Risk Score. Connect notifications and export data.",
  },
  "/Contact": {
    title: "Contact — ShadowGPT",
    description: "Contact ShadowGPT. Send a message via the contact form.",
  },
  "/Status": {
    title: "System Status — ShadowGPT",
    description: "ShadowGPT system status: version, uptime, database, alerts, AI service availability.",
  },
};

const DEFAULT_TITLE = "ShadowGPT";
const DEFAULT_DESCRIPTION = "Corporate protection from AI data leaks. Monitor ChatGPT, Claude, Gemini use. Browser extension + cloud dashboard.";

export default function PageMeta() {
  const { pathname } = useLocation();
  const path = pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/";
  const meta = PAGE_META[path] || { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION };

  useEffect(() => {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);

  return null;
}
