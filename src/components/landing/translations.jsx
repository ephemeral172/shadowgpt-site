export const t = {
  ru: {
    nav: {
      cta: "Начать аудит",
    },
    hero: {
      badge: "Защита от Shadow AI",
      subtitle: "Защита компании от утечек данных через нейросети.",
      desc: "Расширение для браузера + облачный дашборд. Установка за 10 минут. Не требует серверов, агентов или внедрения.",
      cta1: "Бесплатный 7-дневный аудит",
      cta2: "Узнать больше ↓",
    },
    stats: {
      label: "Проблема",
      title1: "Shadow AI — угроза",
      title2: "номер один",
      desc: "Сотрудники каждый день копируют конфиденциальную информацию в ChatGPT, Claude, Gemini — и никто этого не контролирует.",
      uploadsTitle: "Что сотрудники загружают в нейросети:",
      uploads: [
        "Исходный код", "Финансовые отчёты", "Юридические документы",
        "Клиентские базы", "Презентации", "Стратегии",
        "Аналитические таблицы", "HR-данные", "API-ключи",
        "Пароли", "Договоры", "Персональные данные"
      ],
      stats: [
        { value: 30, suffix: "×", label: "рост утечек через AI за 2025 год", source: "ГК «Солар»" },
        { value: 77, suffix: "%", label: "сотрудников копируют конфиденциальные данные в AI", source: "Breached.company" },
        { value: 670, suffix: "K", prefix: "$", label: "средний ущерб от Shadow AI-утечки", source: "WebProNews" },
        { value: 767, suffix: " млн", label: "записей ПДн россиян утекло в 2025", source: "ГК «Солар»" },
      ],
    },
    howItWorks: {
      label: "Процесс",
      title1: "Как это",
      title2: "работает",
      steps: [
        {
          title: "Сотрудник пишет в ChatGPT",
          description: "Вводит промпт с конфиденциальными данными: ИНН, паспортные данные, исходный код...",
          detail: "«Проверь правильность ИНН 7707083893 для договора с клиентом Иванов»",
        },
        {
          title: "Расширение перехватывает",
          description: "Chrome-расширение мгновенно фиксирует текст промпта перед отправкой в AI-сервис",
          detail: "Работает в ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity",
        },
        {
          title: "Классификация риска",
          description: "Гибридная система: 12 regex-паттернов + AI-модель определяют уровень угрозы",
          detail: "HIGH: ПДн, код, ключи • MEDIUM: бизнес-данные • LOW: обычный текст",
        },
        {
          title: "Применение правил",
          description: "В зависимости от настроек: пометить, предупредить или заблокировать отправку",
          detail: "Flag → тихий лог • Warn → жёлтый баннер • Block → красный баннер + блокировка",
        },
        {
          title: "Дашборд реального времени",
          description: "Администратор видит все события, аналитику по отделам и AI-инсайты",
          detail: "Лента событий, статус сотрудников, графики, фильтры",
        },
        {
          title: "Мгновенный алерт",
          description: "Telegram-уведомление приходит за 2 секунды после обнаружения HIGH-risk события",
          detail: "«Сотрудник Иванов отправил ПДн клиента в ChatGPT»",
        },
      ],
      stepLabel: "Шаг",
    },
    features: {
      label: "Возможности",
      title1: "Полный",
      title2: "контроль",
      features: [
        {
          title: "7 AI-сервисов",
          description: "Мониторинг ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek и Perplexity в реальном времени.",
          tags: ["Chrome", "Edge", "Яндекс.Браузер"],
        },
        {
          title: "Гибридная классификация",
          description: "12 regex-паттернов + LLM-модель. Три уровня риска: HIGH, MEDIUM, LOW с точным определением типа данных.",
          tags: ["Regex", "AI/LLM", "Авто-обновление"],
        },
        {
          title: "Flag / Warn / Block",
          description: "Гибкие правила реагирования. Тихий мониторинг, предупреждение сотруднику или полная блокировка отправки.",
          tags: ["Настраиваемый", "Гибкий", "Мгновенный"],
        },
        {
          title: "Дашборд реального времени",
          description: "Лента событий с фильтрами, статус сотрудников через heartbeat, аналитика по отделам и AI-инсайты.",
          tags: ["SSE", "Аналитика", "Фильтры"],
        },
        {
          title: "Генератор AI-политики",
          description: "Создание внутреннего регламента за 30 секунд. 9 юрисдикций, 11 отраслей, готовый документ.",
          tags: ["152-ФЗ", "GDPR", "Markdown"],
        },
        {
          title: "Telegram-алерты",
          description: "Мгновенные уведомления при обнаружении HIGH-risk событий прямо в Telegram администратора.",
          tags: ["2 секунды", "HIGH-risk", "Push"],
        },
      ],
    },
    comparison: {
      label: "Сравнение",
      title1: "Почему",
      title2: "ShadowGPT",
      cols: ["Решение", "Цена", "Установка", "Фокус на AI"],
    },
    audience: {
      label: "Для кого",
      title1: "Кому нужен",
      title2: "ShadowGPT",
      segments: [
        { title: "IT-компании", range: "10–200 человек", buyer: "CTO / IT-директор", pain: "Утечки кода, архитектуры, API-ключей", buyerLabel: "Покупатель" },
        { title: "Финансы и юридические", range: "10–500 человек", buyer: "Руководитель / безопасник", pain: "Утечки клиентских данных и договоров", buyerLabel: "Покупатель" },
        { title: "Маркетинг и агентства", range: "10–100 человек", buyer: "Директор", pain: "Утечки стратегий клиентов", buyerLabel: "Покупатель" },
        { title: "Любой B2B с ПДн", range: "10–500 человек", buyer: "CEO / DPO", pain: "Штрафы по 152-ФЗ", buyerLabel: "Покупатель" },
      ],
    },
    pricing: {
      label: "Тарифы",
      title1: "Простое",
      title2: "ценообразование",
      desc: "В 10–100 раз дешевле enterprise DLP-решений. Установка за 10 минут вместо месяцев внедрения.",
      popular: "Популярный",
      perMonth: "₽/мес",
      cta: "Начать пилот",
      plans: [
        {
          name: "Starter",
          limit: "до 15 человек",
          price: "4 990",
          features: ["Мониторинг 7 AI-сервисов", "Облачный дашборд", "Email-алерты", "Классификация рисков", "Базовая аналитика"],
        },
        {
          name: "Business",
          limit: "до 50 человек",
          price: "14 990",
          popular: true,
          features: ["Всё из Starter", "Telegram-алерты", "Экспорт данных", "Расширенная аналитика", "Приоритетная поддержка"],
        },
        {
          name: "Enterprise",
          limit: "50+ человек",
          price: "29 990+",
          features: ["Всё из Business", "Генератор AI-политик", "Обучение команды", "Блокировка отправки", "Кастомные правила"],
        },
      ],
    },
    cta: {
      title1: "Узнайте, что ваши сотрудники",
      title2: "отправляют в нейросети",
      desc: "Бесплатный 7-дневный аудит. Установка за 10 минут. Никаких обязательств.",
      btn: "Начать бесплатный аудит",
    },
  },

  en: {
    nav: {
      cta: "Start Audit",
    },
    hero: {
      badge: "Shadow AI Protection",
      subtitle: "Protect your company from data leaks through AI services.",
      desc: "Browser extension + cloud dashboard. Setup in 10 minutes. No servers, agents, or complex deployment required.",
      cta1: "Free 7-Day Audit",
      cta2: "Learn more ↓",
    },
    stats: {
      label: "The Problem",
      title1: "Shadow AI — threat",
      title2: "number one",
      desc: "Every day employees paste confidential data into ChatGPT, Claude, Gemini — and no one controls it.",
      uploadsTitle: "What employees upload to AI services:",
      uploads: [
        "Source Code", "Financial Reports", "Legal Documents",
        "Client Databases", "Presentations", "Strategies",
        "Analytical Sheets", "HR Data", "API Keys",
        "Passwords", "Contracts", "Personal Data"
      ],
      stats: [
        { value: 30, suffix: "×", label: "increase in AI data leaks in 2025", source: "Solar Group" },
        { value: 77, suffix: "%", label: "of employees paste confidential data into AI", source: "Breached.company" },
        { value: 670, suffix: "K", prefix: "$", label: "average cost of a Shadow AI data breach", source: "WebProNews" },
        { value: 767, suffix: "M", label: "personal records leaked in 2025", source: "Solar Group" },
      ],
    },
    howItWorks: {
      label: "Process",
      title1: "How it",
      title2: "works",
      steps: [
        {
          title: "Employee types in ChatGPT",
          description: "Enters a prompt with confidential data: TIN, passport details, source code...",
          detail: '"Check the TIN 7707083893 for the contract with client Johnson"',
        },
        {
          title: "Extension intercepts",
          description: "The Chrome extension instantly captures the prompt text before it's sent to the AI service",
          detail: "Works in ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek, Perplexity",
        },
        {
          title: "Risk classification",
          description: "Hybrid system: 12 regex patterns + AI model determine the threat level",
          detail: "HIGH: PII, code, keys • MEDIUM: business data • LOW: general text",
        },
        {
          title: "Policy enforcement",
          description: "Depending on settings: flag, warn, or block the submission",
          detail: "Flag → silent log • Warn → yellow banner • Block → red banner + block",
        },
        {
          title: "Real-time dashboard",
          description: "Admin sees all events, department analytics and AI insights",
          detail: "Event feed, employee status, charts, filters",
        },
        {
          title: "Instant alert",
          description: "Telegram notification arrives within 2 seconds of a HIGH-risk event",
          detail: '"Employee Johnson sent client PII to ChatGPT"',
        },
      ],
      stepLabel: "Step",
    },
    features: {
      label: "Features",
      title1: "Full",
      title2: "control",
      features: [
        {
          title: "7 AI Services",
          description: "Real-time monitoring of ChatGPT, Claude, Gemini, GigaChat, YandexGPT, DeepSeek and Perplexity.",
          tags: ["Chrome", "Edge", "Yandex Browser"],
        },
        {
          title: "Hybrid Classification",
          description: "12 regex patterns + LLM model. Three risk levels: HIGH, MEDIUM, LOW with precise data-type identification.",
          tags: ["Regex", "AI/LLM", "Auto-update"],
        },
        {
          title: "Flag / Warn / Block",
          description: "Flexible response policies. Silent monitoring, employee warnings, or full submission blocking.",
          tags: ["Configurable", "Flexible", "Instant"],
        },
        {
          title: "Real-Time Dashboard",
          description: "Event feed with filters, employee heartbeat status, department analytics and AI insights.",
          tags: ["SSE", "Analytics", "Filters"],
        },
        {
          title: "AI Policy Generator",
          description: "Generate internal AI usage policy in 30 seconds. 9 jurisdictions, 11 industries, ready-to-use document.",
          tags: ["GDPR", "CCPA", "Markdown"],
        },
        {
          title: "Telegram Alerts",
          description: "Instant notifications on HIGH-risk events delivered directly to the admin's Telegram.",
          tags: ["2 seconds", "HIGH-risk", "Push"],
        },
      ],
    },
    comparison: {
      label: "Comparison",
      title1: "Why",
      title2: "ShadowGPT",
      cols: ["Solution", "Price", "Setup", "AI Focus"],
    },
    audience: {
      label: "Who it's for",
      title1: "Who needs",
      title2: "ShadowGPT",
      segments: [
        { title: "IT Companies", range: "10–200 employees", buyer: "CTO / IT Director", pain: "Code, architecture, API key leaks", buyerLabel: "Buyer" },
        { title: "Finance & Legal", range: "10–500 employees", buyer: "Manager / Security Officer", pain: "Client data & contract leaks", buyerLabel: "Buyer" },
        { title: "Marketing & Agencies", range: "10–100 employees", buyer: "Director", pain: "Client strategy leaks", buyerLabel: "Buyer" },
        { title: "Any B2B with PII", range: "10–500 employees", buyer: "CEO / DPO", pain: "GDPR / regulatory fines", buyerLabel: "Buyer" },
      ],
    },
    pricing: {
      label: "Pricing",
      title1: "Simple",
      title2: "pricing",
      desc: "10–100× cheaper than enterprise DLP solutions. Setup in 10 minutes instead of months of deployment.",
      popular: "Popular",
      perMonth: "₽/mo",
      cta: "Start pilot",
      plans: [
        {
          name: "Starter",
          limit: "up to 15 users",
          price: "4 990",
          features: ["Monitor 7 AI services", "Cloud dashboard", "Email alerts", "Risk classification", "Basic analytics"],
        },
        {
          name: "Business",
          limit: "up to 50 users",
          price: "14 990",
          popular: true,
          features: ["Everything in Starter", "Telegram alerts", "Data export", "Advanced analytics", "Priority support"],
        },
        {
          name: "Enterprise",
          limit: "50+ users",
          price: "29 990+",
          features: ["Everything in Business", "AI Policy Generator", "Team training", "Submission blocking", "Custom rules"],
        },
      ],
    },
    cta: {
      title1: "Discover what your employees",
      title2: "are sending to AI services",
      desc: "Free 7-day audit. Setup in 10 minutes. No commitment.",
      btn: "Start free audit",
    },
  },
};