import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

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
  ko: {
    title: "도움말",
    updated: "최종 업데이트: 2026",
    back: "홈으로",
    integrations: "연동",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    sections: [
      { title: "확장 프로그램 설치", body: "ShadowGPT는 브라우저 확장 프로그램으로 동작합니다. Chrome, Microsoft Edge, Yandex Browser 지원. 설치 1–2분. 대시보드 로그인 후 조직을 만들고 '확장 프로그램' 섹션에서 설치 링크를 사용하거나 브라우저 스토어에서 ShadowGPT를 검색해 설치하세요. 설치 후 확장 프로그램을 열고 대시보드의 연결 코드를 입력하면 기기가 조직에 연결됩니다. 한 컴퓨터당 한 번 설치면 되며, 브라우저나 프로필을 바꾸면 다시 설치하고 코드를 입력해야 합니다." },
      { title: "연결 코드와 여러 사용자", body: "연결 코드(조직 키)는 대시보드의 확장 프로그램 설정에 표시됩니다. 각 직원이 확장 프로그램을 설치하고 같은 코드를 입력하면 모든 기기가 조직에 연결됩니다. 필요 시 대시보드에서 코드를 변경할 수 있으며, 변경 후에는 각 기기에서 새 코드를 다시 입력해야 합니다." },
      { title: "대시보드 개요", body: "클라우드 대시보드에서 모니터링 이벤트를 실시간으로 볼 수 있습니다: 사용한 AI 서비스, 시간, 위험 수준(HIGH/MEDIUM/LOW), 콘텐츠 유형. 날짜, 사용자, 서비스, 위험 수준별 필터 가능. 분석 섹션에는 요약, 히트맵, 지원 플랜의 경우 PDF 감사 보고서 및 직원 위험 점수가 있습니다. 규칙(Flag/Warn/Block) 및 알림 설정은 대시보드 해당 섹션에서 합니다." },
      { title: "알림 및 연동", body: "Business 이상 플랜에서 고위험 이벤트 알림을 설정할 수 있습니다: Telegram(봇 또는 채팅), Webhook(시스템 URL), Email. 대시보드의 연동 섹션에서 채널 유형을 선택하고 토큰 또는 URL을 추가해 저장하세요. 연동 전체 목록(Telegram, Webhook, Email, CSV 내보내기 등)은 '연동' 페이지에 있습니다." },
      { title: "확장 프로그램이 서비스를 인식하지 않을 때", body: "AI 서비스 페이지가 확장 프로그램이 설치된 탭에서 열려 있고 로그인되어 있는지 확인하세요. 사이트에 나열된 AI 서비스와 대시보드에 추가한 사용자 정의 소스만 지원됩니다. 사용자 정의 소스를 추가했다면 URL과 설정이 올바른지 확인하고, 문제가 계속되면 웹사이트를 통해 지원팀에 문의하세요." },
    ],
  },
  es: {
    title: "Ayuda",
    updated: "Última actualización: 2026",
    back: "Volver al inicio",
    integrations: "Integraciones",
    terms: "Términos",
    privacy: "Privacidad",
    sections: [
      { title: "Instalación de la extensión", body: "ShadowGPT funciona como extensión del navegador. Navegadores soportados: Chrome, Microsoft Edge y Yandex Browser. La instalación lleva 1–2 minutos. Tras iniciar sesión en el panel, cree una organización (si no existe), vaya a la sección «Extensión» y use el enlace de instalación o busque la extensión en la tienda por ShadowGPT. Instálela, ábrala e introduzca el código de vinculación del panel para asociar el dispositivo a su organización. Una instalación por equipo basta; si cambia de navegador o perfil, instale de nuevo e introduzca el código otra vez." },
      { title: "Código de vinculación y varios usuarios", body: "El código de vinculación («clave de organización») aparece en el panel en la configuración de la extensión. Cada empleado instala la extensión e introduce el mismo código para que todos los dispositivos queden en su organización. Puede cambiar el código en el panel si hace falta; tras el cambio, los enlaces antiguos dejan de funcionar y cada dispositivo debe introducir el nuevo código." },
      { title: "Vista general del panel", body: "El panel en la nube muestra los eventos de monitoreo en tiempo real: servicio de IA usado, hora, nivel de riesgo (HIGH/MEDIUM/LOW) y tipo de contenido. Puede filtrar por fecha, usuario, servicio y nivel de riesgo. En análisis hay resúmenes, heatmap y en planes compatibles el informe PDF y la puntuación de riesgo por empleado. Las reglas (Flag/Warn/Block) y las notificaciones se configuran en las secciones correspondientes del panel." },
      { title: "Notificaciones e integraciones", body: "En planes Business y superiores puede configurar notificaciones para eventos de alto riesgo: Telegram (bot o chat), Webhook (URL de su sistema) o Email. Configúrelas en el panel en integraciones: elija el tipo de canal, añada token o URL y guarde. La lista completa está en la página Integraciones." },
      { title: "Si la extensión no detecta un servicio", body: "Compruebe que la página del servicio de IA esté abierta en una pestaña donde está instalada la extensión y que haya iniciado sesión. Solo se soportan los servicios de IA listados en el sitio y las fuentes personalizadas añadidas en el panel. Si añadió una fuente personalizada, verifique que la URL y la configuración sean correctas. Si el problema continúa, contacte con soporte a través del sitio." },
    ],
  },
};

export default function Help() {
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
