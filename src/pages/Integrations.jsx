import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Интеграции",
    updated: "Обновлено: 2026",
    back: "На главную",
    intro: "Список способов подключения уведомлений и выгрузки данных в ShadowGPT.",
    help: "Помощь",
    terms: "Условия",
    privacy: "Конфиденциальность",
    items: [
      {
        name: "Telegram",
        desc: "Мгновенные уведомления в Telegram при событиях с высоким риском (HIGH). Настраивается в дашборде: создаёте бота через @BotFather, вставляете токен в настройки интеграции, указываете чат или группу для алертов. Уведомления приходят в течение нескольких секунд после срабатывания.",
      },
      {
        name: "Webhook",
        desc: "Отправка событий на произвольный URL вашей системы (внутренний мониторинг, SIEM, тикет-системы). В дашборде указываете URL и при необходимости заголовки; при HIGH-risk событии отправляется POST-запрос с метаданными (время, пользователь, сервис, уровень риска, тип контента). Формат payload описан в справке дашборда.",
      },
      {
        name: "Email",
        desc: "Алерты на почту одному или нескольким получателям. Настраивается в разделе интеграций дашборда: укажите адреса, выберите уровень риска (по умолчанию HIGH). Подходит для небольших команд и разовых уведомлений без настройки ботов или webhook.",
      },
      {
        name: "Экспорт CSV",
        desc: "Выгрузка событий мониторинга в CSV для отчётности и анализа в таблицах. Доступна на тарифах Business и выше. В дашборде выберите период и фильтры, нажмите экспорт — файл скачается с колонками: время, пользователь, AI-сервис, уровень риска, тип контента и др.",
      },
      {
        name: "PDF Audit Report",
        desc: "Готовый отчёт по аудиту использования AI за выбранный период: сводная статистика, разбивка по пользователям и сервисам, уровень рисков. Удобно для внутренних проверок и отчётности перед руководством. Доступен на тарифах с уведомлениями (Business и выше).",
      },
      {
        name: "Employee Risk Score",
        desc: "Рейтинг сотрудников по уровню риска на основе событий мониторинга. Отображается в дашборде и помогает выявлять пользователей, требующих дополнительного инструктажа или ужесточения правил. Входит в тариф Business и выше.",
      },
    ],
  },
  en: {
    title: "Integrations",
    updated: "Last updated: 2026",
    back: "Back to home",
    intro: "Ways to connect notifications and export data in ShadowGPT.",
    help: "Help",
    terms: "Terms",
    privacy: "Privacy",
    items: [
      {
        name: "Telegram",
        desc: "Instant Telegram notifications for high-risk (HIGH) events. Configure in the dashboard: create a bot via @BotFather, paste the token in the integration settings, and set the chat or group for alerts. Notifications arrive within seconds of an event.",
      },
      {
        name: "Webhook",
        desc: "Send events to your system’s URL (internal monitoring, SIEM, ticketing). In the dashboard you set the URL and optional headers; on HIGH-risk events a POST request is sent with metadata (time, user, service, risk level, content type). Payload format is described in the dashboard help.",
      },
      {
        name: "Email",
        desc: "Alerts to one or more email addresses. Configured in the dashboard integrations: add addresses and choose the risk level (default HIGH). Suitable for small teams and one-off notifications without setting up bots or webhooks.",
      },
      {
        name: "CSV export",
        desc: "Export monitoring events to CSV for reporting and spreadsheet analysis. Available on Business and higher plans. In the dashboard select the period and filters and click export to download a file with columns such as time, user, AI service, risk level, content type, etc.",
      },
      {
        name: "PDF Audit Report",
        desc: "Ready-made audit report of AI usage for a selected period: summary statistics, breakdown by users and services, risk levels. Useful for internal reviews and management reporting. Available on plans with notifications (Business and above).",
      },
      {
        name: "Employee Risk Score",
        desc: "Employee risk ranking based on monitoring events. Shown in the dashboard and helps identify users who may need additional training or stricter rules. Included in Business and higher plans.",
      },
    ],
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Integrations() {
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
        <p className="text-xs text-gray-400 dark:text-white/25 mb-4">{t.updated}</p>
        <p className="text-gray-600 dark:text-white/50 font-light mb-10">{t.intro}</p>

        <div className="space-y-8">
          {t.items.map((item, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{item.name}</h2>
              <p className="text-sm text-gray-600 dark:text-white/45 font-light leading-relaxed">{item.desc}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-500 dark:text-white/30 space-x-4">
          <Link to="/Help" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.help}</Link>
          <Link to="/Terms" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.terms}</Link>
          <Link to="/Privacy" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
