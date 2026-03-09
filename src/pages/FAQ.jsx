import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Частые вопросы",
    updated: "Обновлено: 2026",
    back: "На главную",
    terms: "Условия использования",
    privacy: "Политика конфиденциальности",
    items: [
      {
        q: "Как устроено ценообразование?",
        a: "Три тарифа: Starter (до 10 пользователей), Business (до 30), Enterprise (до 200). Оплата помесячно или годом. Бесплатный триал 14 дней на любом тарифе — без карты, с полным доступом к функциям выбранного плана.",
      },
      {
        q: "Сколько времени занимает внедрение?",
        a: "Установка занимает около 10 минут: сотрудники ставят расширение в браузер (Chrome, Edge, Яндекс.Браузер), вы создаёте организацию в дашборде и привязываете расширения по коду. Серверов, агентов и сложной инфраструктуры не требуется.",
      },
      {
        q: "С какими браузерами и AI-сервисами совместим ShadowGPT?",
        a: "Расширение поддерживает Chrome, Microsoft Edge и Яндекс.Браузер. Мониторится более 19 AI-сервисов (в т.ч. ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity), плюс можно добавлять кастомные источники из дашборда.",
      },
      {
        q: "Соответствует ли сервис 152-ФЗ и GDPR?",
        a: "Мы не храним содержимое персональных данных — только метаданные событий и уровень риска. Это снижает объём обрабатываемых ПДн. В тарифе Enterprise доступен генератор AI-политики с учётом 152-ФЗ, GDPR и других юрисдикций. Детали — в разделе «Безопасность и соответствие» и в Политике конфиденциальности.",
      },
      {
        q: "Можно ли отключить уведомления или изменить правила?",
        a: "Да. В дашборде настраиваются правила (Flag / Warn / Block), список получателей алертов (Telegram, Webhook, Email) и уровень риска, при котором отправляются уведомления. На Enterprise доступны кастомные правила и блокировка отправки.",
      },
      {
        q: "Где хранятся данные?",
        a: "Метаданные событий и результаты классификации хранятся в облачной инфраструктуре, используемой для дашборда. Текст промптов и содержимое файлов на наши серверы не передаются — анализ выполняется локально в расширении. Подробности — в Политике конфиденциальности и на странице «Безопасность».",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    updated: "Last updated: 2026",
    back: "Back to home",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    items: [
      {
        q: "How does pricing work?",
        a: "Three plans: Starter (up to 10 users), Business (up to 30), Enterprise (up to 200). Billing is monthly or annual. A 14-day free trial is available on any plan — no card required, with full access to the plan’s features.",
      },
      {
        q: "How long does deployment take?",
        a: "Setup takes about 10 minutes: employees install the browser extension (Chrome, Edge, Yandex Browser), you create an organization in the dashboard and link extensions via a code. No servers, agents, or complex infrastructure are required.",
      },
      {
        q: "Which browsers and AI services does ShadowGPT support?",
        a: "The extension supports Chrome, Microsoft Edge, and Yandex Browser. It monitors 19+ AI services (including ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity), and you can add custom sources from the dashboard.",
      },
      {
        q: "Is the service compliant with 152-FZ and GDPR?",
        a: "We do not store personal data content — only event metadata and risk level. That reduces the volume of processed PII. The Enterprise plan includes an AI policy generator aligned with 152-FZ, GDPR, and other jurisdictions. Details are in the Security & Compliance page and the Privacy Policy.",
      },
      {
        q: "Can I turn off notifications or change rules?",
        a: "Yes. In the dashboard you configure rules (Flag / Warn / Block), alert recipients (Telegram, Webhook, Email), and the risk level that triggers notifications. Enterprise adds custom rules and submission blocking.",
      },
      {
        q: "Where is data stored?",
        a: "Event metadata and classification results are stored in the cloud infrastructure that powers the dashboard. Prompt text and file content are not sent to our servers — analysis runs locally in the extension. See the Privacy Policy and Security page for more.",
      },
    ],
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function FAQ() {
  const lang = getLang();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-500 dark:text-white/40" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="text-sm font-light text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60">
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl font-light tracking-tight mb-2">{t.title}</h1>
        <p className="text-xs text-gray-400 dark:text-white/25 mb-10">{t.updated}</p>

        <div className="space-y-8">
          {t.items.map((item, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{item.q}</h2>
              <p className="text-sm text-gray-600 dark:text-white/45 font-light leading-relaxed">{item.a}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-500 dark:text-white/30 space-x-4">
          <Link to="/Terms" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.terms}</Link>
          <Link to="/Privacy" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
