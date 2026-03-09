import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Политика конфиденциальности",
    updated: "Обновлено: 2026",
    intro: "Мы не храним содержимое ваших данных. Ниже описано, какие данные мы обрабатываем и зачем.",
    sections: [
      {
        title: "1. Принцип минимальных данных",
        body: "ShadowGPT не хранит текст промптов, содержимое вложений (PDF, DOCX, код, изображения) и иные конфиденциальные данные пользователей. В облаке обрабатываются и хранятся только метаданные событий (источник, время, уровень риска, идентификатор пользователя/устройства) и результаты классификации рисков, необходимые для дашборда, отчётов и уведомлений.",
      },
      {
        title: "2. Данные, которые мы обрабатываем",
        body: "При использовании расширения и дашборда мы можем обрабатывать: данные учётной записи (email, имя организации); метаданные событий мониторинга (какой сервис, время, уровень риска, тип контента по классификации); технические данные (IP, User-Agent, идентификаторы для привязки расширения к организации). Извлечение признаков из текста и файлов выполняется локально в расширении; на сервер не передаётся содержимое промптов и файлов.",
      },
      {
        title: "3. Цели обработки",
        body: "Обеспечение работы сервиса (дашборд, алерты, отчёты), учёт и биллинг, улучшение качества классификации и продукта, соблюдение законодательства.",
      },
      {
        title: "4. Основания и сроки",
        body: "Обработка осуществляется на основании договора (использование сервиса), согласия пользователя где необходимо, и законного интереса. Метаданные событий хранятся в течение срока, необходимого для работы сервиса и отчётности; данные учётной записи — до удаления аккаунта или отзыва согласия с учётом требований закона.",
      },
      {
        title: "5. Передача данных",
        body: "Данные могут передаваться поставщикам облачной инфраструктуры и сервисов (хостинг, аналитика в обезличенном виде), только в объёме и с обязательствами, необходимыми для оказания сервиса. Мы не продаём персональные данные.",
      },
      {
        title: "6. Ваши права",
        body: "Оператор персональных данных: Axioma8. В соответствии с применимым законодательством (в т.ч. GDPR, 152-ФЗ) вы можете запросить доступ к вашим данным, исправление, удаление или ограничение обработки. Запросы можно направлять через контакты на сайте.",
      },
      {
        title: "7. Безопасность",
        body: "Мы применяем организационные и технические меры для защиты обрабатываемых данных от несанкционированного доступа, изменения и уничтожения.",
      },
    ],
    back: "На главную",
    terms: "Условия использования",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    intro: "We do not store your data content. Below we describe what data we process and why.",
    sections: [
      {
        title: "1. Minimal data principle",
        body: "ShadowGPT does not store prompt text, attachment content (PDF, DOCX, code, images), or other confidential user data. Only event metadata (source, time, risk level, user/device identifier) and risk classification results are processed and stored in the cloud, as needed for the dashboard, reports, and notifications.",
      },
      {
        title: "2. Data we process",
        body: "When you use the extension and dashboard we may process: account data (email, organization name); monitoring event metadata (which service, time, risk level, content type from classification); technical data (IP, User-Agent, identifiers linking the extension to the organization). Feature extraction from text and files is done locally in the extension; prompt and file content is not sent to the server.",
      },
      {
        title: "3. Purposes",
        body: "Providing the service (dashboard, alerts, reports), billing, improving classification and product quality, and legal compliance.",
      },
      {
        title: "4. Legal basis and retention",
        body: "Processing is based on contract (use of the service), consent where required, and legitimate interest. Event metadata is retained for as long as needed for the service and reporting; account data until account deletion or withdrawal of consent, subject to legal requirements.",
      },
      {
        title: "5. Sharing data",
        body: "Data may be shared with cloud and service providers (hosting, analytics in anonymized form) only to the extent and with commitments necessary to provide the service. We do not sell personal data.",
      },
      {
        title: "6. Your rights",
        body: "Data controller: Axioma8. Under applicable law (including GDPR and local data protection laws) you may request access, correction, deletion, or restriction of processing. Requests can be sent via the website contact details.",
      },
      {
        title: "7. Security",
        body: "We apply organizational and technical measures to protect processed data from unauthorized access, alteration, and destruction.",
      },
    ],
    back: "Back to home",
    terms: "Terms of Use",
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Privacy() {
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
          <Link to="/Terms" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.terms}</Link>
        </p>
      </div>
    </div>
  );
}
