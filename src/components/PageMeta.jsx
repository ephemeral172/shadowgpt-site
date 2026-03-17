import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_META = {
  "/": {
    title: "Shadow AI Protection | ShadowGPT — Monitor ChatGPT, Claude, Gemini",
    description: "Shadow AI protection: monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. No prompt content stored. Free 7-day audit.",
    keywords: "shadow AI, Shadow AI, ChatGPT monitoring, AI data leak, corporate AI security, employee AI use, DLP, enterprise AI monitoring, ChatGPT monitoring tool, AI compliance, 섀도우 AI, ChatGPT 모니터링, 기업 AI 보안, Shadow AI защита, мониторинг ChatGPT, утечка данных ИИ, контроль использования ИИ",
  },
  "/Terms": {
    title: "Terms of Use — ShadowGPT",
    description: "Terms of use for ShadowGPT service. Operator: Axioma8. Contact page for inquiries.",
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
  "/Blog": {
    title: "Shadow AI & Corporate AI Security Blog — ShadowGPT",
    description: "Shadow AI, ChatGPT monitoring, corporate data protection, DLP for AI. Articles in EN, RU, KO, ES. How to control employee AI use.",
    keywords: "shadow AI, Shadow AI blog, ChatGPT monitoring, corporate AI security, AI data leak, DLP, employee AI use, AI compliance, enterprise AI monitoring, prevent data leak ChatGPT, 섀도우 AI 블로그, ChatGPT 모니터링, 기업 AI 보안, Shadow AI блог, мониторинг ChatGPT, утечка данных ИИ, корпоративная защита ИИ",
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
    let kw = document.querySelector('meta[name="keywords"]');
    if (meta.keywords) {
      if (!kw) {
        kw = document.createElement("meta");
        kw.setAttribute("name", "keywords");
        document.head.appendChild(kw);
      }
      kw.setAttribute("content", meta.keywords);
    }
  }, [meta.title, meta.description, meta.keywords]);

  return null;
}
