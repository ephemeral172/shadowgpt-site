import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

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
  ko: {
    title: "이용약관",
    updated: "최종 업데이트: 2026",
    intro: "ShadowGPT 서비스(shadowgpt.app)를 이용하시면 본 약관에 동의하는 것으로 간주됩니다.",
    sections: [
      { title: "1. 서비스", body: "ShadowGPT는 직원의 AI 서비스 사용 모니터링 및 제어 도구(브라우저 확장 프로그램 및 클라우드 대시보드)를 제공합니다. 서비스는 데이터 내용을 저장하지 않으며, 대시보드 및 알림 표시를 위한 메타데이터와 위험 분류만 처리합니다." },
      { title: "2. 사용", body: "적용 법률을 준수하고 제3자 권리를 침해하지 않도록 서비스를 이용해야 합니다. 불법 모니터링 또는 법률상 필요한 사용자 동의를 우회하는 사용은 금지됩니다." },
      { title: "3. 요금 및 결제", body: "웹사이트에 명시된 요금이 적용됩니다. 선택한 플랜(월별 또는 연간)에 따라 결제합니다. 무료 체험은 기간 및 기능이 제한될 수 있습니다." },
      { title: "4. 개인정보", body: "개인정보 처리에 관한 내용은 개인정보처리방침에 명시되어 있습니다. 사용자의 프롬프트 텍스트나 파일 내용은 저장하지 않으며, 이벤트 메타데이터와 위험 수준만 저장합니다." },
      { title: "5. 책임 제한", body: "서비스는 '있는 그대로' 제공됩니다. 적용 법률이 허용하는 범위 내에서 서비스 이용 또는 이용 불가로 인한 간접적 손해에 대해 책임지지 않습니다." },
      { title: "6. 변경", body: "당사는 본 약관을 변경할 수 있습니다. 중요한 변경은 사이트 게시 또는 사용자 통지 후 효력이 발생하며, 변경 후에도 이용을 계속하면 새 약관에 동의한 것으로 봅니다." },
      { title: "7. 연락처", body: "서비스 운영: Axioma8. 약관 관련 문의: 웹사이트 연락 폼 또는 제공된 연락처로 문의하세요." },
    ],
    back: "홈으로",
    privacy: "개인정보처리방침",
  },
  es: {
    title: "Términos de uso",
    updated: "Última actualización: 2026",
    intro: "Al utilizar el servicio ShadowGPT (shadowgpt.app), acepta estos términos.",
    sections: [
      { title: "1. Servicio", body: "ShadowGPT proporciona herramientas de monitoreo y control del uso de servicios de IA por parte de los empleados (extensión de navegador y panel en la nube). El servicio no almacena el contenido de sus datos; solo se procesan metadatos y clasificación de riesgo para el panel y las notificaciones." },
      { title: "2. Uso", body: "Usted se compromete a utilizar el servicio de conformidad con la ley aplicable y a no vulnerar derechos de terceros. Queda prohibido el uso para monitoreo ilegal o para eludir el consentimiento cuando la ley lo exija." },
      { title: "3. Precios y pago", body: "Aplican los precios indicados en el sitio web. El pago se realiza según el plan elegido (mensual o anual). La prueba gratuita puede tener límites de tiempo y funcionalidad." },
      { title: "4. Privacidad", body: "El tratamiento de datos personales se describe en la Política de privacidad. No almacenamos el texto de los prompts ni el contenido de archivos de los usuarios, solo metadatos de eventos y nivel de riesgo." },
      { title: "5. Limitación de responsabilidad", body: "El servicio se proporciona \"tal cual\". No somos responsables de daños indirectos derivados del uso o la imposibilidad de usar el servicio, en la medida permitida por la ley aplicable." },
      { title: "6. Cambios", body: "Podemos modificar estos términos. Los cambios sustanciales entran en vigor tras su publicación en el sitio o notificación a los usuarios. El uso continuado constituye la aceptación de los nuevos términos." },
      { title: "7. Contacto", body: "Operador del servicio: Axioma8. Para consultas sobre estos términos: a través del formulario de contacto del sitio o los datos de contacto indicados." },
    ],
    back: "Volver al inicio",
    privacy: "Política de privacidad",
  },
};

export default function Terms() {
  const { lang } = useLang();
  const t = content[lang] || content.en;

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
