import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

const content = {
  ru: {
    title: "Политика конфиденциальности",
    updated: "Обновлено: 2026",
    intro: "Мы не храним содержимое ваших данных. Ниже описано, какие данные мы обрабатываем и зачем.",
    briefTitle: "Кратко",
    briefList: [
      "Собираются данные для идентификации пользователя (имя, отдел, ID в рамках продукта).",
      "Собираются данные об использовании AI‑сервисов (какие сайты, когда).",
      "Собирается содержимое запросов к AI (промпты) в целях мониторинга и классификации рисков.",
      "Данные передаются только на инфраструктуру компании (ваш сервер/дашборд), не продаются и не передаются для рекламы или кредитования.",
    ],
    sections: [
      {
        title: "1. Принцип минимальных данных",
        body: "ShadowGPT не хранит текст промптов, содержимое вложений (PDF, DOCX, код, изображения) и иные конфиденциальные данные пользователей. В облаке обрабатываются и хранятся только метаданные событий (источник, время, уровень риска, идентификатор пользователя/устройства) и результаты классификации рисков, необходимые для дашборда, отчётов и уведомлений. Организация (администратор) сама решает, где выполнять анализ: локально в расширении или на сервере; при серверном режиме обработка и при необходимости хранение выполняются на нашей стороне.",
      },
      {
        title: "2. Данные, которые мы обрабатываем",
        body: "При использовании расширения и дашборда мы можем обрабатывать: данные учётной записи (email, имя организации); метаданные событий мониторинга (какой сервис, время, уровень риска, тип контента по классификации); технические данные (IP, User-Agent, идентификаторы для привязки расширения к организации). Организация (администратор) выбирает режим: при локальном — содержимое промптов и файлов на сервер не передаётся; при серверном контент может передаваться для классификации на нашей стороне.",
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
    briefTitle: "In brief",
    briefList: [
      "We collect data to identify users (name, department, in-product ID).",
      "We collect data on use of AI services (which sites, when).",
      "We collect the content of requests to AI (prompts) for monitoring and risk classification.",
      "Data is only transferred to your company infrastructure (your server/dashboard); it is not sold or shared for advertising or credit.",
    ],
    sections: [
      {
        title: "1. Minimal data principle",
        body: "ShadowGPT does not store prompt text, attachment content (PDF, DOCX, code, images), or other confidential user data. Only event metadata (source, time, risk level, user/device identifier) and risk classification results are processed and stored in the cloud, as needed for the dashboard, reports, and notifications. The organization (admin) decides where analysis runs: locally in the extension or on the server; in server mode, processing and storage may be performed on our side.",
      },
      {
        title: "2. Data we process",
        body: "When you use the extension and dashboard we may process: account data (email, organization name); monitoring event metadata (which service, time, risk level, content type from classification); technical data (IP, User-Agent, identifiers linking the extension to the organization). The organization (admin) chooses the mode: in local mode, prompt and file content is not sent to the server; in server mode, content may be sent for classification on our side.",
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
  ko: {
    title: "개인정보처리방침",
    updated: "최종 업데이트: 2026",
    intro: "당사는 귀하의 데이터 내용을 저장하지 않습니다. 아래에서 어떤 데이터를 처리하고 그 이유를 설명합니다.",
    briefTitle: "요약",
    briefList: [
      "사용자 식별을 위한 데이터(이름, 부서, 제품 내 ID)를 수집합니다.",
      "AI 서비스 이용 데이터(어떤 사이트, 언제)를 수집합니다.",
      "모니터링 및 위험 분류를 위해 AI 요청(프롬프트) 내용을 수집합니다.",
      "데이터는 회사 인프라(귀사 서버/대시보드)로만 전달되며, 광고나 신용 목적으로 판매·제공되지 않습니다.",
    ],
    sections: [
      { title: "1. 최소 데이터 원칙", body: "ShadowGPT는 프롬프트 텍스트, 첨부 파일 내용(PDF, DOCX, 코드, 이미지) 또는 기타 기밀 사용자 데이터를 저장하지 않습니다. 클라우드에서는 대시보드, 보고서 및 알림에 필요한 이벤트 메타데이터(출처, 시간, 위험 수준, 사용자/기기 식별자)와 위험 분류 결과만 처리 및 저장합니다. 조직(관리자)이 분석 방식을 선택합니다: 확장 프로그램에서 로컬로 또는 서버에서; 서버 모드에서는 당사 측에서 처리 및 저장이 이루어질 수 있습니다." },
      { title: "2. 처리하는 데이터", body: "확장 프로그램 및 대시보드 사용 시 계정 데이터(이메일, 조직명), 모니터링 이벤트 메타데이터(서비스, 시간, 위험 수준, 분류별 콘텐츠 유형), 기술 데이터(IP, User-Agent, 확장 프로그램과 조직 연결 식별자)를 처리할 수 있습니다. 조직(관리자)이 모드를 선택합니다: 로컬 모드에서는 프롬프트 및 파일 내용이 서버로 전송되지 않으며, 서버 모드에서는 분류를 위해 당사로 전송될 수 있습니다." },
      { title: "3. 처리 목적", body: "서비스 제공(대시보드, 알림, 보고서), 결제, 분류 및 제품 품질 개선, 법적 준수." },
      { title: "4. 법적 근거 및 보관", body: "처리는 계약(서비스 이용), 필요한 경우 동의, 정당한 이익에 기반합니다. 이벤트 메타데이터는 서비스 및 보고에 필요한 기간 동안, 계정 데이터는 계정 삭제 또는 동의 철회 시까지 보관하며 법적 요건을 따릅니다." },
      { title: "5. 데이터 공유", body: "데이터는 서비스 제공에 필요한 범위와 의무로만 클라우드 및 서비스 제공자(호스팅, 익명화된 분석)와 공유될 수 있습니다. 개인정보를 판매하지 않습니다." },
      { title: "6. 귀하의 권리", body: "데이터 관리자: Axioma8. 적용 법률(GDPR 및 현지 개인정보보호법 포함)에 따라 접근, 정정, 삭제 또는 처리 제한을 요청할 수 있습니다. 웹사이트 연락처로 요청하세요." },
      { title: "7. 보안", body: "당사는 무단 접근, 변경 및 파괴로부터 처리 데이터를 보호하기 위한 조직적·기술적 조치를 적용합니다." },
    ],
    back: "홈으로",
    terms: "이용약관",
  },
  es: {
    title: "Política de privacidad",
    updated: "Última actualización: 2026",
    intro: "No almacenamos el contenido de sus datos. A continuación describimos qué datos procesamos y por qué.",
    briefTitle: "En resumen",
    briefList: [
      "Se recogen datos para identificar al usuario (nombre, departamento, ID en el producto).",
      "Se recogen datos sobre el uso de servicios de IA (qué sitios, cuándo).",
      "Se recoge el contenido de las solicitudes a la IA (prompts) para supervisión y clasificación de riesgos.",
      "Los datos solo se transfieren a la infraestructura de la empresa (su servidor/panel); no se venden ni se ceden para publicidad o crédito.",
    ],
    sections: [
      { title: "1. Principio de datos mínimos", body: "ShadowGPT no almacena texto de prompts, contenido de adjuntos (PDF, DOCX, código, imágenes) ni otros datos confidenciales de usuarios. Solo se procesan y almacenan en la nube metadatos de eventos (origen, hora, nivel de riesgo, identificador de usuario/dispositivo) y resultados de clasificación de riesgo, según lo necesario para el panel, informes y notificaciones. La organización (el administrador) decide dónde se ejecuta el análisis: localmente en la extensión o en el servidor; en modo servidor el procesamiento y el almacenamiento pueden realizarse en nuestro lado." },
      { title: "2. Datos que procesamos", body: "Al usar la extensión y el panel podemos procesar: datos de cuenta (email, nombre de organización); metadatos de eventos (servicio, hora, nivel de riesgo, tipo de contenido); datos técnicos (IP, User-Agent, identificadores). La organización (el administrador) elige el modo: en modo local el contenido de prompts y archivos no se envía al servidor; en modo servidor el contenido puede enviarse para clasificación en nuestro lado." },
      { title: "3. Fines", body: "Prestación del servicio (panel, alertas, informes), facturación, mejora de la clasificación y del producto, cumplimiento legal." },
      { title: "4. Base legal y conservación", body: "El tratamiento se basa en contrato, consentimiento cuando proceda e interés legítimo. Los metadatos se conservan lo necesario para el servicio; los datos de cuenta hasta eliminación o revocación del consentimiento, con sujeción a la ley." },
      { title: "5. Cesión de datos", body: "Los datos pueden compartirse con proveedores de nube y servicios solo en la medida necesaria. No vendemos datos personales." },
      { title: "6. Sus derechos", body: "Responsable: Axioma8. Según la ley aplicable (incl. GDPR) puede solicitar acceso, rectificación, supresión o limitación. Solicitudes mediante los contactos del sitio." },
      { title: "7. Seguridad", body: "Aplicamos medidas técnicas y organizativas para proteger los datos frente a acceso, alteración y destrucción no autorizados." },
    ],
    back: "Volver al inicio",
    terms: "Términos de uso",
  },
};

export default function Privacy() {
  const { lang } = useLang();
  const t = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="link-hover text-sm font-light text-gray-600 dark:text-white/65">
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl font-light tracking-tight mb-2">{t.title}</h1>
        <p className="text-xs text-gray-500 dark:text-white/50 mb-10">{t.updated}</p>
        <p className="text-gray-700 dark:text-white/75 font-light mb-8">{t.intro}</p>

        {t.briefList && t.briefList.length > 0 && (
          <div className="glass-card rounded-xl p-6 mb-12 border border-gray-200/80 dark:border-white/10">
            <h2 className="text-base font-medium text-gray-800 dark:text-white/80 mb-4">{t.briefTitle}</h2>
            <ul className="space-y-2 list-none">
              {t.briefList.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-white/75 font-light leading-relaxed flex gap-2">
                  <span className="text-amber-600 dark:text-amber-400/90 mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-8">
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-700 dark:text-white/75 font-light leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 text-sm text-gray-600 dark:text-white/55">
          <Link to="/Terms" className="link-hover underline">{t.terms}</Link>
        </p>
      </div>
    </div>
  );
}
