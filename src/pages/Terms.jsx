import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Условия использования",
    updated: "Обновлено: 2026",
    intro: "Используя сервис ShadowGPT (shadowgpt.app), вы соглашаетесь с настоящими условиями.",
    sections: [
      {
        title: "1. Сервис",
        body: "ShadowGPT предоставляет средства мониторинга и контроля использования AI-сервисов сотрудниками (расширение для браузера и облачный дашборд). Сервис не хранит содержимое ваших данных — обрабатываются только метаданные и классификация рисков для отображения в дашборде и уведомлениях.",
      },
      {
        title: "2. Использование",
        body: "Вы обязуетесь использовать сервис в соответствии с применимым законодательством и не нарушать права третьих лиц. Запрещается использование для незаконного мониторинга или в обход согласия пользователей, где это требуется по закону.",
      },
      {
        title: "3. Тарифы и оплата",
        body: "Действуют тарифы, указанные на сайте. Оплата производится по выбранному плану (ежемесячно или ежегодно). Бесплатный пробный период может быть ограничен по времени и функциональности.",
      },
      {
        title: "4. Конфиденциальность",
        body: "Обработка персональных данных описывается в Политике конфиденциальности. Мы не храним текст промптов и содержимое файлов пользователей — только метаданные событий и уровень риска.",
      },
      {
        title: "5. Ограничение ответственности",
        body: "Сервис предоставляется «как есть». Мы не несём ответственности за косвенные убытки и ущерб, связанный с использованием или невозможностью использования сервиса, в пределах, допускаемых применимым правом.",
      },
      {
        title: "6. Изменения",
        body: "Мы вправе изменять условия. Существенные изменения вступают в силу после публикации на сайте или уведомления пользователей. Продолжение использования сервиса после изменений означает принятие новых условий.",
      },
      {
        title: "7. Контакты",
        body: "Оператор сервиса — Axioma8. По вопросам условий использования: через форму обратной связи на сайте или указанные контактные данные.",
      },
    ],
    back: "На главную",
    privacy: "Политика конфиденциальности",
  },
  en: {
    title: "Terms of Use",
    updated: "Last updated: 2026",
    intro: "By using the ShadowGPT service (shadowgpt.app), you agree to these terms.",
    sections: [
      {
        title: "1. Service",
        body: "ShadowGPT provides monitoring and control tools for employee use of AI services (browser extension and cloud dashboard). The service does not store your data content — only metadata and risk classification are processed for display in the dashboard and notifications.",
      },
      {
        title: "2. Use",
        body: "You agree to use the service in compliance with applicable law and not to violate third-party rights. Use for unlawful monitoring or to circumvent user consent where required by law is prohibited.",
      },
      {
        title: "3. Pricing and payment",
        body: "The pricing shown on the website applies. Payment is made according to the selected plan (monthly or annually). A free trial may be limited in time and functionality.",
      },
      {
        title: "4. Privacy",
        body: "Processing of personal data is described in the Privacy Policy. We do not store users' prompt text or file content — only event metadata and risk level.",
      },
      {
        title: "5. Limitation of liability",
        body: "The service is provided \"as is\". We are not liable for indirect damages arising from use or inability to use the service, to the extent permitted by applicable law.",
      },
      {
        title: "6. Changes",
        body: "We may change these terms. Material changes take effect after publication on the site or notice to users. Continued use after changes constitutes acceptance of the new terms.",
      },
      {
        title: "7. Contact",
        body: "Service operator: Axioma8. For questions about these terms: via the website contact form or the contact details provided.",
      },
    ],
    back: "Back to home",
    privacy: "Privacy Policy",
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Terms() {
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
        <p className="text-gray-600 dark:text-white/50 font-light mb-12">{t.intro}</p>

        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-600 dark:text-white/45 font-light leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-500 dark:text-white/30">
          <Link to="/Privacy" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
