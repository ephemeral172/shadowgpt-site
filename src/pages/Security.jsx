import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

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
        body: "ShadowGPT не сохраняет текст промптов, содержимое вложений (документы, код, изображения) и иные конфиденциальные данные пользователей. В облако передаются только метаданные событий (источник AI-сервиса, время, уровень риска, идентификатор устройства/пользователя в рамках организации) и результат классификации риска (HIGH / MEDIUM / LOW, тип контента по правилам). Организация (администратор) сама решает, где выполнять классификацию: локально в расширении или на сервере. При локальном режиме сырой контент на сервер не отправляется; при серверном — обработка и при необходимости хранение выполняются на нашей стороне. Настраивается в дашборде.",
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
        body: "ShadowGPT does not store prompt text, attachment content (documents, code, images), or other confidential user data. Only event metadata (AI service source, time, risk level, device/user identifier within the organization) and risk classification results (HIGH / MEDIUM / LOW, content type by rules) are sent to the cloud. The organization (admin) decides where classification runs: locally in the extension or on the server. In local mode, raw content is not sent to the server; in server mode, processing and storage may be performed on our side. Configurable in the dashboard.",
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
  ko: {
    title: "보안 및 준수",
    updated: "최종 업데이트: 2026",
    back: "홈으로",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    sections: [
      { title: "원칙: 데이터 내용을 저장하지 않음", body: "ShadowGPT는 프롬프트 텍스트, 첨부 파일 내용(문서, 코드, 이미지) 또는 기타 기밀 사용자 데이터를 저장하지 않습니다. 클라우드에는 이벤트 메타데이터(AI 서비스 출처, 시간, 위험 수준, 조직 내 기기/사용자 식별자)와 위험 분류 결과(HIGH/MEDIUM/LOW, 규칙별 콘텐츠 유형)만 전송됩니다. 조직(관리자)이 분류 방식을 선택합니다: 확장 프로그램에서 로컬로 또는 서버에서. 로컬 모드에서는 원본 콘텐츠가 서버로 전송되지 않으며, 서버 모드에서는 당사 측에서 처리 및 저장이 이루어질 수 있습니다. 대시보드에서 설정합니다." },
      { title: "메타데이터 저장 위치", body: "이벤트 메타데이터와 계정 데이터는 대시보드 및 알림에 사용되는 클라우드 인프라에서 처리됩니다. 가용성 및 데이터 기밀 요건을 충족하는 제공자를 선택합니다. 제3자와의 데이터 공유 세부사항은 개인정보처리방침에 있습니다." },
      { title: "152-FZ(러시아 개인정보)", body: "개인정보 처리는 152-FZ에 맞춰 수행됩니다. 처리되는 개인정보 양을 최소화하며, 대화 및 파일 내용은 저장하지 않고 메타데이터와 분류만 저장합니다. Enterprise 플랜에는 152-FZ에 맞춘 AI 정책 생성기가 포함됩니다. 데이터 관리자: Axioma8. 권리 및 요청 방법은 개인정보처리방침에 있습니다." },
      { title: "GDPR 및 국제 규제", body: "EU 및 기타 관할권 사용자를 위해 GDPR 요건(데이터 최소화, 제한된 처리 목적, 접근·정정·삭제·처리 제한 권리)을 반영합니다. 프롬프트 및 파일 내용은 당사에서 처리하지 않습니다. Enterprise 정책 생성기는 GDPR 등 다른 관할권용 템플릿을 지원합니다. 법적 근거 및 보관 기간은 개인정보처리방침에 있습니다." },
      { title: "기술적·조직적 조치", body: "무단 접근, 변경 및 파괴로부터 데이터를 보호하기 위한 조치(시스템 접근 제한, 전송 암호화, 사고 모니터링, 프로세스 업데이트)를 적용합니다. 대시보드 데이터 접근은 조직의 권한 있는 사용자와 서비스·지원에 필요한 범위의 당사 직원만 가능합니다." },
    ],
  },
  es: {
    title: "Seguridad y cumplimiento",
    updated: "Última actualización: 2026",
    back: "Volver al inicio",
    terms: "Términos",
    privacy: "Política de privacidad",
    sections: [
      { title: "Principio: no almacenamos el contenido de sus datos", body: "ShadowGPT no almacena texto de prompts, contenido de adjuntos (documentos, código, imágenes) ni otros datos confidenciales. Solo se envían a la nube metadatos de eventos (origen del servicio de IA, hora, nivel de riesgo, identificador de dispositivo/usuario) y resultados de clasificación (HIGH/MEDIUM/LOW, tipo de contenido). La organización (el administrador) decide dónde se ejecuta la clasificación: localmente en la extensión o en el servidor. En modo local el contenido crudo no se envía al servidor; en modo servidor el procesamiento y el almacenamiento pueden realizarse en nuestro lado. Configurable en el panel." },
      { title: "Dónde se almacenan los metadatos", body: "Los metadatos de eventos y los datos de cuenta se procesan en la infraestructura en la nube del panel y las notificaciones. Elegimos proveedores que cumplen requisitos de disponibilidad y confidencialidad. Los detalles sobre cesión a terceros están en la Política de privacidad." },
      { title: "152-FZ (datos personales en Rusia)", body: "El tratamiento de datos personales se realiza conforme a 152-FZ. Minimizamos el volumen: no almacenamos el contenido de conversaciones ni archivos, solo metadatos y clasificación. El plan Enterprise incluye un generador de política de IA con plantillas alineadas con 152-FZ. Responsable: Axioma8. Derechos y solicitudes en la Política de privacidad." },
      { title: "GDPR y regulación internacional", body: "Para usuarios en la UE y otras jurisdicciones tenemos en cuenta el GDPR: minimización de datos, fines limitados, derechos de acceso, rectificación, supresión y limitación. El contenido de prompts y archivos no se procesa en nuestro lado. El generador de política en Enterprise soporta plantillas para GDPR y otras jurisdicciones. Bases legales y plazos en la Política de privacidad." },
      { title: "Medidas técnicas y organizativas", body: "Aplicamos medidas contra el acceso, la alteración y la destrucción no autorizados: restricción de acceso, cifrado en tránsito, supervisión de incidentes y actualización de procesos. Solo los usuarios autorizados de la organización y nuestro personal en la medida necesaria tienen acceso a los datos del panel." },
    ],
  },
};

export default function Security() {
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
          {t.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-medium text-gray-800 dark:text-white/80 mb-2">{section.title}</h2>
              <p className="text-sm text-gray-700 dark:text-white/75 font-light leading-relaxed">{section.body}</p>
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
