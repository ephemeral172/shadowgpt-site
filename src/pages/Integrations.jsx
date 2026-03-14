import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

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
  ko: {
    title: "연동",
    updated: "최종 업데이트: 2026",
    back: "홈으로",
    intro: "ShadowGPT에서 알림 연결 및 데이터 내보내기 방법 목록입니다.",
    help: "도움말",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    items: [
      { name: "Telegram", desc: "고위험(HIGH) 이벤트 시 Telegram으로 즉시 알림. 대시보드에서 설정: @BotFather로 봇 생성, 연동 설정에 토큰 입력, 알림용 채팅 또는 그룹 지정. 이벤트 발생 후 몇 초 내 알림 전달." },
      { name: "Webhook", desc: "이벤트를 시스템의 임의 URL로 전송(내부 모니터링, SIEM, 티켓 시스템). 대시보드에서 URL과 필요 시 헤더 지정; HIGH 위험 이벤트 시 메타데이터(시간, 사용자, 서비스, 위험 수준, 콘텐츠 유형)가 포함된 POST 요청 전송. 페이로드 형식은 대시보드 도움말에 있습니다." },
      { name: "Email", desc: "한 명 또는 여러 수신자에게 이메일 알림. 대시보드 연동 섹션에서 주소 지정, 위험 수준(기본 HIGH) 선택. 소규모 팀이나 봇/웹훅 없이 일회성 알림에 적합." },
      { name: "CSV 내보내기", desc: "모니터링 이벤트를 CSV로 내보내 보고 및 스프레드시트 분석. Business 이상 플랜에서 가능. 대시보드에서 기간과 필터 선택 후 내보내기 — 시간, 사용자, AI 서비스, 위험 수준, 콘텐츠 유형 등 컬럼이 포함된 파일 다운로드." },
      { name: "PDF 감사 보고서", desc: "선택 기간의 AI 사용 감사 보고서: 요약 통계, 사용자·서비스별 구분, 위험 수준. 내부 검토 및 경영 보고에 유용. 알림 포함 플랜(Business 이상)에서 제공." },
      { name: "직원 위험 점수", desc: "모니터링 이벤트 기반 직원 위험 순위. 대시보드에 표시되며 추가 교육이나 규칙 강화가 필요한 사용자 파악에 도움. Business 이상 플랜에 포함." },
    ],
  },
  es: {
    title: "Integraciones",
    updated: "Última actualización: 2026",
    back: "Volver al inicio",
    intro: "Formas de conectar notificaciones y exportar datos en ShadowGPT.",
    help: "Ayuda",
    terms: "Términos",
    privacy: "Privacidad",
    items: [
      { name: "Telegram", desc: "Notificaciones instantáneas por Telegram en eventos de alto riesgo (HIGH). Se configura en el panel: cree un bot con @BotFather, pegue el token en la configuración de integración y indique el chat o grupo para alertas. Las notificaciones llegan en segundos." },
      { name: "Webhook", desc: "Envío de eventos a una URL de su sistema (monitoreo interno, SIEM, ticketing). En el panel indique la URL y opcionalmente cabeceras; en eventos HIGH-risk se envía un POST con metadatos (hora, usuario, servicio, nivel de riesgo, tipo de contenido). El formato del payload se describe en la ayuda del panel." },
      { name: "Email", desc: "Alertas a una o varias direcciones de correo. Se configura en integraciones del panel: añada direcciones y elija el nivel de riesgo (por defecto HIGH). Adecuado para equipos pequeños y notificaciones puntuales sin configurar bots o webhooks." },
      { name: "Exportación CSV", desc: "Exportar eventos de monitoreo a CSV para informes y análisis en hojas de cálculo. Disponible en planes Business y superiores. En el panel seleccione período y filtros y pulse exportar para descargar el archivo con columnas como hora, usuario, servicio de IA, nivel de riesgo, tipo de contenido, etc." },
      { name: "Informe de auditoría PDF", desc: "Informe de auditoría de uso de IA para el período seleccionado: estadísticas resumidas, desglose por usuarios y servicios, niveles de riesgo. Útil para revisiones internas e informes a dirección. Disponible en planes con notificaciones (Business y superiores)." },
      { name: "Puntuación de riesgo por empleado", desc: "Ranking de riesgo de empleados según eventos de monitoreo. Se muestra en el panel y ayuda a identificar usuarios que requieren más formación o reglas más estrictas. Incluido en Business y superiores." },
    ],
  },
};

export default function Integrations() {
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
