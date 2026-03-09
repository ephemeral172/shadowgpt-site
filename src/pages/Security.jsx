import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const content = {
  ru: {
    title: "Безопасность и соответствие",
    updated: "Обновлено: 2026",
    back: "На главную",
    terms: "Условия",
    privacy: "Политика конфиденциальности",
    sections: [
      {
        title: "Принцип: мы не храним содержимое ваших данных",
        body: "ShadowGPT не сохраняет текст промптов, содержимое вложений (документы, код, изображения) и иные конфиденциальные данные пользователей. В облако передаются только метаданные событий (источник AI-сервиса, время, уровень риска, идентификатор устройства/пользователя в рамках организации) и результат классификации риска (HIGH / MEDIUM / LOW, тип контента по правилам). Извлечение признаков из текста и файлов выполняется локально в расширении; на сервер не отправляется сырой контент.",
      },
      {
        title: "Где хранятся метаданные",
        body: "Метаданные событий и данные учётных записей обрабатываются в облачной инфраструктуре, используемой для работы дашборда и уведомлений. Мы выбираем поставщиков с соблюдением требований к доступности и конфиденциальности данных. Детали передачи данных третьим лицам описаны в Политике конфиденциальности.",
      },
      {
        title: "152-ФЗ (персональные данные в РФ)",
        body: "Обработка персональных данных осуществляется с учётом требований 152-ФЗ. Объём обрабатываемых ПДн минимизирован: мы не храним содержимое переписок и файлов, только метаданные и классификацию. В тарифе Enterprise доступен генератор AI-политики с шаблонами с учётом 152-ФЗ. Оператор: Axioma8. Права субъектов ПДн и порядок запросов описаны в Политике конфиденциальности.",
      },
      {
        title: "GDPR и международное регулирование",
        body: "Для пользователей из ЕС и других юрисдикций мы учитываем требования GDPR: минимизация данных, ограничение целей обработки, права на доступ, исправление, удаление и ограничение обработки. Содержимое промптов и файлов не обрабатывается на нашей стороне. В Enterprise генератор политики поддерживает шаблоны под GDPR и другие юрисдикции. Правовые основания и сроки хранения указаны в Политике конфиденциальности.",
      },
      {
        title: "Технические и организационные меры",
        body: "Мы применяем меры защиты от несанкционированного доступа, искажения и уничтожения данных: ограничение доступа к системам, шифрование при передаче, мониторинг инцидентов, обновление процессов. Доступ к данным дашборда имеют только авторизованные пользователи организации и наш персонал в объёме, необходимом для оказания сервиса и поддержки.",
      },
    ],
  },
  en: {
    title: "Security & Compliance",
    updated: "Last updated: 2026",
    back: "Back to home",
    terms: "Terms",
    privacy: "Privacy Policy",
    sections: [
      {
        title: "Principle: we do not store your data content",
        body: "ShadowGPT does not store prompt text, attachment content (documents, code, images), or other confidential user data. Only event metadata (AI service source, time, risk level, device/user identifier within the organization) and risk classification results (HIGH / MEDIUM / LOW, content type by rules) are sent to the cloud. Feature extraction from text and files runs locally in the extension; raw content is not sent to the server.",
      },
      {
        title: "Where metadata is stored",
        body: "Event metadata and account data are processed in the cloud infrastructure used for the dashboard and notifications. We choose providers that meet requirements for availability and data confidentiality. Details on data sharing with third parties are in the Privacy Policy.",
      },
      {
        title: "152-FZ (personal data in Russia)",
        body: "Processing of personal data is carried out in line with 152-FZ. The volume of processed personal data is minimized: we do not store the content of conversations or files, only metadata and classification. The Enterprise plan includes an AI policy generator with templates aligned with 152-FZ. Data controller: Axioma8. Data subject rights and how to submit requests are described in the Privacy Policy.",
      },
      {
        title: "GDPR and international regulation",
        body: "For users in the EU and other jurisdictions we take into account GDPR requirements: data minimization, limited processing purposes, and rights of access, rectification, erasure, and restriction of processing. Prompt and file content is not processed on our side. The Enterprise policy generator supports templates for GDPR and other jurisdictions. Legal bases and retention periods are set out in the Privacy Policy.",
      },
      {
        title: "Technical and organizational measures",
        body: "We apply measures to protect data from unauthorized access, alteration, and destruction: restricted access to systems, encryption in transit, incident monitoring, and process updates. Only authorized users of the organization and our staff, to the extent necessary to provide the service and support, have access to dashboard data.",
      },
    ],
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

export default function Security() {
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
          <Link to="/Terms" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.terms}</Link>
          <Link to="/Privacy" className="underline hover:text-gray-700 dark:hover:text-white/50">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
