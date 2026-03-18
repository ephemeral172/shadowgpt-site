import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Activity, Database, Bell, Cpu } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { APP_VERSION } from "../lib/version";
import { useLang } from "../components/landing/LangContext";

/** Same-origin to avoid CORS; proxied in dev (Vite) and prod (Netlify/Vercel). */
const STATUS_API_URL = "/api/status";

const content = {
  ru: {
    title: "Состояние системы",
    back: "На главную",
    version: "Версия",
    uptime: "Время работы",
    database: "База данных",
    alerts: "Алерты",
    aiService: "AI-сервис",
    operational: "Работает",
    enabled: "Включён",
    disabled: "Выключен",
    uptimeChart: "Доступность за 30 дней",
    tooltipUptime: "Доступность",
    beta: "beta",
    error: "Не удалось загрузить статус",
    loading: "Загрузка…",
  },
  en: {
    title: "System status",
    back: "Back to home",
    version: "Version",
    uptime: "Uptime",
    database: "Database",
    alerts: "Alerts",
    aiService: "AI service",
    operational: "Operational",
    enabled: "Enabled",
    disabled: "Disabled",
    uptimeChart: "Uptime last 30 days",
    tooltipUptime: "Uptime",
    beta: "beta",
    error: "Failed to load status",
    loading: "Loading…",
  },
  ko: {
    title: "시스템 상태",
    back: "홈으로",
    version: "버전",
    uptime: "가동 시간",
    database: "데이터베이스",
    alerts: "알림",
    aiService: "AI 서비스",
    operational: "정상",
    enabled: "활성화",
    disabled: "비활성화",
    uptimeChart: "최근 30일 가동률",
    tooltipUptime: "가동률",
    beta: "beta",
    error: "상태를 불러오지 못했습니다",
    loading: "로딩 중…",
  },
  es: {
    title: "Estado del sistema",
    back: "Volver al inicio",
    version: "Versión",
    uptime: "Tiempo activo",
    database: "Base de datos",
    alerts: "Alertas",
    aiService: "Servicio IA",
    operational: "Operativo",
    enabled: "Activado",
    disabled: "Desactivado",
    uptimeChart: "Disponibilidad últimos 30 días",
    tooltipUptime: "Disponibilidad",
    beta: "beta",
    error: "No se pudo cargar el estado",
    loading: "Cargando…",
  },
};

const LOCALE_MAP = { ru: "ru-RU", en: "en-US", ko: "ko-KR", es: "es" };

// Fake uptime: 99.9% for chart (30 points)
function getUptimeData(locale) {
  const data = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    data.push({
      date: d.toLocaleDateString(locale || "en-US", { month: "short", day: "numeric" }),
      uptime: 99.9 + Math.random() * 0.1,
      full: d.toISOString().slice(0, 10),
    });
  }
  return data;
}

function formatUptime(seconds, lang) {
  if (seconds == null || seconds < 0) return "—";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  const l = lang || "en";
  if (h > 0) parts.push(l === "ru" ? `${h}ч` : l === "ko" ? `${h}시` : l === "es" ? `${h}h` : `${h}h`);
  if (m > 0) parts.push(l === "ru" ? `${m}м` : l === "ko" ? `${m}분` : l === "es" ? `${m}min` : `${m}m`);
  if (s > 0 || parts.length === 0) parts.push(l === "ru" ? `${s}с` : l === "ko" ? `${s}초` : l === "es" ? `${s}s` : `${s}s`);
  return parts.join(" ");
}

export default function Status() {
  const { lang } = useLang();
  const t = content[lang] || content.en;
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const locale = LOCALE_MAP[lang] || "en-US";
  const uptimeData = getUptimeData(locale);

  useEffect(() => {
    setMounted(true);
    const m = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(m.matches);
    const handler = () => setDark(m.matches);
    m.addEventListener("change", handler);
    return () => m.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(STATUS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setStatus(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || t.error);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 dark:border-white/20 border-t-gray-600 dark:border-t-white/60 rounded-full animate-spin" />
      </div>
    );
  }

  const isDark = dark;
  const cardClass = "rounded-2xl p-6 border border-gray-200/80 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl";
  const dotClass = "w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]";

  const version = status?.version ?? APP_VERSION;
  const uptimeDisplay = status != null ? formatUptime(status.uptime_seconds, lang) : (loading ? t.loading : "—");
  const databaseOk = status != null && status.database === "ok";
  const alertsOn = status != null && status.alerts_enabled === true;
  const aiOn = status != null && status.ai_enabled === true;

  if (error && !status) {
    return (
      <div className="min-h-screen bg-gray-50/80 dark:bg-[#050505] text-gray-900 dark:text-white px-4 py-10 flex items-center justify-center">
        <div className="max-w-md text-center">
          <p className="text-gray-600 dark:text-white/70 font-light mb-4">{t.error}</p>
          <Link to="/" className="link-hover text-sm underline text-gray-600 dark:text-white/60">
            {t.back}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/80 dark:bg-[#050505] text-gray-900 dark:text-white px-4 py-10 md:px-6 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-light text-gray-600 dark:text-white/65 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-800 dark:hover:text-white/80 transition-colors"
          >
            <Shield className="w-4 h-4" strokeWidth={1.5} />
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-white/65 font-light mb-10">
          ShadowGPT · {t.beta}
        </p>

        {/* Status cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className={cardClass}>
            <div className="flex items-center gap-2 text-gray-600 dark:text-white/65 text-xs font-medium uppercase tracking-wider mb-1">
              <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t.version}
            </div>
            <p className="text-lg font-light text-gray-900 dark:text-white">
              v{version}
            </p>
          </div>

          <div className={cardClass}>
            <div className="flex items-center gap-2 text-gray-600 dark:text-white/65 text-xs font-medium uppercase tracking-wider mb-1">
              <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t.uptime}
            </div>
            <p className="text-lg font-light text-gray-900 dark:text-white font-mono">
              {uptimeDisplay}
            </p>
          </div>

          <div className={cardClass}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/65 text-xs font-medium uppercase tracking-wider mb-1">
                  <Database className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {t.database}
                </div>
                <p className="text-lg font-light text-gray-900 dark:text-white">
                  {status == null ? "—" : databaseOk ? t.operational : (status.database ?? "—")}
                </p>
              </div>
              {databaseOk && <div className={dotClass} />}
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/65 text-xs font-medium uppercase tracking-wider mb-1">
                  <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {t.alerts}
                </div>
                <p className="text-lg font-light text-gray-900 dark:text-white">
                  {status == null ? "—" : alertsOn ? t.enabled : t.disabled}
                </p>
              </div>
              {alertsOn && <div className={dotClass} />}
            </div>
          </div>

          <div className={cardClass}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-white/65 text-xs font-medium uppercase tracking-wider mb-1">
                  <Cpu className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {t.aiService}
                </div>
                <p className="text-lg font-light text-gray-900 dark:text-white">
                  {status == null ? "—" : aiOn ? t.enabled : t.disabled}
                </p>
              </div>
              {aiOn && <div className={dotClass} />}
            </div>
          </div>
        </div>

        {/* Uptime chart */}
        <div className={cardClass}>
          <h2 className="text-sm font-medium text-gray-600 dark:text-white/65 uppercase tracking-wider mb-4">
            {t.uptimeChart}
          </h2>
          <div className="h-48 md:h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={uptimeData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={isDark ? "rgba(16,185,129,0.4)" : "rgba(16,185,129,0.3)"} />
                    <stop offset="100%" stopColor={isDark ? "rgba(16,185,129,0)" : "rgba(16,185,129,0.05)"} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10, fill: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[99, 100]}
                  tick={{ fontSize: 10, fill: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "rgba(20,20,20,0.95)" : "rgba(255,255,255,0.95)",
                    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  labelStyle={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.5)" }}
                  formatter={(value) => [`${Number(value).toFixed(2)}%`, t.tooltipUptime]}
                  labelFormatter={(_, payload) => (Array.isArray(payload) && payload[0]?.payload?.full) || ""}
                />
                <Area
                  type="monotone"
                  dataKey="uptime"
                  stroke="#10b981"
                  strokeWidth={1.5}
                  fill="url(#uptimeGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 dark:text-white/50 font-light">
          <Link to="/" className="link-hover underline">
            {t.back}
          </Link>
        </p>
      </div>
    </div>
  );
}
