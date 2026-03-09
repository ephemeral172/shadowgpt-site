import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Помощь",
    updated: "Обновлено: 2026",
    back: "На главную",
    integrations: "Интеграции",
    terms: "Условия",
    privacy: "Конфиденциальность",
    sections: [
      {
        title: "Установка расширения",
        body: "ShadowGPT работает как расширение для браузера. Поддерживаются Chrome, Microsoft Edge и Яндекс.Браузер. Установка занимает 1–2 минуты. После входа в личный кабинет создайте организацию (если ещё не создана), перейдите в раздел «Расширение» и скачайте установочную ссылку или найдите расширение в магазине браузера по названию ShadowGPT. Установите расширение, откройте его и введите код привязки из дашборда — так устройство будет связано с вашей организацией. На одном компьютере достаточно одной установки; при смене браузера или профиля расширение нужно установить заново и снова привязать кодом.",
      },
      {
        title: "Код привязки и несколько пользователей",
        body: "Код привязки (иногда называется «ключ организации») отображается в дашборде в разделе настройки расширения. Каждый сотрудник устанавливает расширение на свой браузер и вводит один и тот же код — так все устройства попадают в вашу организацию. Код можно при необходимости сменить в дашборде; после смены старые привязки перестают работать, потребуется повторный ввод нового кода на каждом устройстве.",
      },
      {
        title: "Дашборд: обзор",
        body: "В облачном дашборде отображаются события мониторинга в реальном времени: какой AI-сервис использовался, время, уровень риска (HIGH / MEDIUM / LOW), тип контента. Доступны фильтры по дате, пользователю, сервису и уровню риска. В разделе аналитики — сводки, heatmap и при наличии тарифа — PDF Audit Report и Employee Risk Score. Настройки правил (Flag / Warn / Block) и уведомлений находятся в соответствующих разделах дашборда.",
      },
      {
        title: "Уведомления и интеграции",
        body: "На тарифах Business и выше можно настроить уведомления при событиях с высоким риском: Telegram (бот или чат), Webhook (URL вашей системы), Email. Настройка выполняется в дашборде в разделе интеграций: укажите тип канала, добавьте токен или URL и сохраните. Подробный список интеграций (Telegram, Webhook, Email, экспорт CSV и др.) приведён на странице «Интеграции».",
      },
      {
        title: "Что делать, если расширение не видит сервис",
        body: "Убедитесь, что страница AI-сервиса открыта в той вкладке, где установлено расширение, и что вы вошли в аккаунт. Поддерживаются только перечисленные на сайте AI-сервисы и кастомные источники, добавленные в дашборде. Если сервис добавлен в кастомные источники, проверьте, что URL и настройки введены верно. При повторяющейся проблеме обратитесь в поддержку через контакты на сайте.",
      },
    ],
  },
  en: {
    title: "Help",
    updated: "Last updated: 2026",
    back: "Back to home",
    integrations: "Integrations",
    terms: "Terms",
    privacy: "Privacy",
    sections: [
      {
        title: "Installing the extension",
        body: "ShadowGPT runs as a browser extension. Supported browsers: Chrome, Microsoft Edge, and Yandex Browser. Installation takes 1–2 minutes. After logging into the dashboard, create an organization (if you haven’t already), go to the “Extension” section, and use the install link or find the extension in the browser store by searching for ShadowGPT. Install it, open the extension, and enter the linking code from the dashboard so the device is associated with your organization. One installation per machine is enough; if you switch browser or profile, install the extension again and re-enter the code.",
      },
      {
        title: "Linking code and multiple users",
        body: "The linking code (sometimes called “organization key”) is shown in the dashboard in the extension settings. Each employee installs the extension in their browser and enters the same code so all devices are linked to your organization. You can change the code in the dashboard if needed; after a change, old links stop working and each device must enter the new code again.",
      },
      {
        title: "Dashboard overview",
        body: "The cloud dashboard shows monitoring events in real time: which AI service was used, time, risk level (HIGH / MEDIUM / LOW), and content type. You can filter by date, user, service, and risk level. The analytics section includes summaries, heatmaps, and on supported plans — PDF Audit Report and Employee Risk Score. Rule settings (Flag / Warn / Block) and notification settings are in the corresponding dashboard sections.",
      },
      {
        title: "Notifications and integrations",
        body: "On Business and higher plans you can configure notifications for high-risk events: Telegram (bot or chat), Webhook (your system’s URL), or Email. Configure these in the dashboard under integrations: choose the channel type, add token or URL, and save. A full list of integrations (Telegram, Webhook, Email, CSV export, etc.) is on the Integrations page.",
      },
      {
        title: "What if the extension doesn’t detect a service?",
        body: "Make sure the AI service page is open in a tab where the extension is installed and you’re logged in. Only the AI services listed on the site and custom sources added in the dashboard are supported. If you added a custom source, check that the URL and settings are correct. If the issue continues, contact support via the website.",
      },
    ],
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Help() {
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
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-600 dark:text-white/45 font-light leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-500 dark:text-white/30 space-x-4">
          <Link to="/Integrations" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.integrations}</Link>
          <Link to="/Terms" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.terms}</Link>
          <Link to="/Privacy" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
