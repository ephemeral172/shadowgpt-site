import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

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
        a: "Три тарифа: Starter (до 10 пользователей), Business (до 30), Enterprise (до 200). Оплата помесячно или годом. Бесплатный триал 7 дней на любом тарифе — без карты, с полным доступом к функциям выбранного плана.",
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
        a: "Three plans: Starter (up to 10 users), Business (up to 30), Enterprise (up to 200). Billing is monthly or annual. A 7-day free trial is available on any plan — no card required, with full access to the plan’s features.",
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
  ko: {
    title: "자주 묻는 질문",
    updated: "최종 업데이트: 2026",
    back: "홈으로",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    items: [
      { q: "요금제는 어떻게 되나요?", a: "Starter(최대 10명), Business(최대 30명), Enterprise(최대 200명). 월별 또는 연간 결제. 모든 플랜 7일 무료 체험(카드 불필요, 해당 플랜 기능 전체 이용)." },
      { q: "도입에 얼마나 걸리나요?", a: "설치 약 10분: 직원이 브라우저 확장 프로그램(Chrome, Edge, Yandex) 설치, 대시보드에서 조직 생성 후 코드로 확장 프로그램 연결. 서버·에이전트·복잡한 인프라 불필요." },
      { q: "ShadowGPT는 어떤 브라우저와 AI 서비스를 지원하나요?", a: "Chrome, Microsoft Edge, Yandex Browser 지원. 19개 이상 AI 서비스(ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity 등) 모니터링, 대시보드에서 사용자 정의 소스 추가 가능." },
      { q: "152-ФЗ 및 GDPR을 준수하나요?", a: "개인정보 내용은 저장하지 않으며 이벤트 메타데이터와 위험 수준만 저장합니다. Enterprise에는 152-ФЗ, GDPR 등 관할권을 반영한 AI 정책 생성기가 있습니다. 자세한 내용은 보안·준수 페이지와 개인정보처리방침을 참조하세요." },
      { q: "알림을 끄거나 규칙을 변경할 수 있나요?", a: "예. 대시보드에서 규칙(Flag/Warn/Block), 알림 수신자(Telegram, Webhook, Email), 알림을 보낼 위험 수준을 설정할 수 있습니다. Enterprise에서는 사용자 정의 규칙 및 전송 차단이 가능합니다." },
      { q: "데이터는 어디에 저장되나요?", a: "이벤트 메타데이터와 분류 결과는 대시보드용 클라우드에 저장됩니다. 프롬프트 텍스트와 파일 내용은 당사 서버로 전송되지 않으며, 분석은 확장 프로그램에서 로컬로 수행됩니다. 자세한 내용은 개인정보처리방침과 보안 페이지를 참조하세요." },
    ],
  },
  es: {
    title: "Preguntas frecuentes",
    updated: "Última actualización: 2026",
    back: "Volver al inicio",
    terms: "Términos de uso",
    privacy: "Política de privacidad",
    items: [
      { q: "¿Cómo funciona el precio?", a: "Tres planes: Starter (hasta 10 usuarios), Business (hasta 30), Enterprise (hasta 200). Facturación mensual o anual. Prueba gratuita de 7 días en cualquier plan, sin tarjeta, con acceso completo a las funciones del plan." },
      { q: "¿Cuánto tarda el despliegue?", a: "Configuración en unos 10 minutos: los empleados instalan la extensión (Chrome, Edge, Yandex Browser), usted crea la organización en el panel y vincula las extensiones con un código. No se requieren servidores ni infraestructura compleja." },
      { q: "¿Qué navegadores y servicios de IA soporta ShadowGPT?", a: "La extensión soporta Chrome, Microsoft Edge y Yandex Browser. Monitorea más de 19 servicios de IA (ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity, etc.) y puede añadir fuentes personalizadas desde el panel." },
      { q: "¿Cumple con 152-FZ y GDPR?", a: "No almacenamos el contenido de datos personales, solo metadatos de eventos y nivel de riesgo. El plan Enterprise incluye un generador de política de IA alineado con 152-FZ, GDPR y otras jurisdicciones. Detalles en la página Seguridad y cumplimiento y en la Política de privacidad." },
      { q: "¿Puedo desactivar notificaciones o cambiar reglas?", a: "Sí. En el panel se configuran reglas (Flag/Warn/Block), destinatarios de alertas (Telegram, Webhook, Email) y el nivel de riesgo que dispara las notificaciones. Enterprise añade reglas personalizadas y bloqueo de envío." },
      { q: "¿Dónde se almacenan los datos?", a: "Los metadatos de eventos y los resultados de clasificación se almacenan en la infraestructura en la nube del panel. El texto de prompts y el contenido de archivos no se envían a nuestros servidores; el análisis se ejecuta localmente en la extensión. Consulte la Política de privacidad y la página Seguridad." },
    ],
  },
};

export default function FAQ() {
  const { lang } = useLang();
  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="text-sm font-light text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/80">
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl font-light tracking-tight mb-2">{t.title}</h1>
        <p className="text-xs text-gray-500 dark:text-white/50 mb-10">{t.updated}</p>

        <div className="space-y-8">
          {t.items.map((item, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{item.q}</h2>
              <p className="text-sm text-gray-700 dark:text-white/75 font-light leading-relaxed">{item.a}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-600 dark:text-white/55 space-x-4">
          <Link to="/Terms" className="underline hover:text-gray-800 dark:hover:text-white/80">{t.terms}</Link>
          <Link to="/Privacy" className="underline hover:text-gray-800 dark:hover:text-white/80">{t.privacy}</Link>
        </p>
      </div>
    </div>
  );
}
