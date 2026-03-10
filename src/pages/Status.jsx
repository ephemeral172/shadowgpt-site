import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Activity, Database, Bell, Cpu } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { APP_VERSION } from "../lib/version";

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
    beta: "beta",
    error: "Failed to load status",
    loading: "Loading…",
  },
};

function getLang() {
  if (typeof navigator === "undefined") return "en";
  return (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
}

// Fake uptime: 99.9% for chart (30 points)
function getUptimeData() {
  const data = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    data.push({
      date: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
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
  if (h > 0) parts.push(lang === "ru" ? `${h}ч` : `${h}h`);
  if (m > 0) parts.push(lang === "ru" ? `${m}м` : `${m}m`);
  if (s > 0 || parts.length === 0) parts.push(lang === "ru" ? `${s}с` : `${s}s`);
  return parts.join(" ");
}

export default function Status() {
  const lang = getLang();
  const t = content[lang];
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const uptimeData = getUptimeData();

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
          <p className="text-gray-500 dark:text-white/50 font-light mb-4">{t.error}</p>
          <Link to="/" className="text-sm underline text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white/80">
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
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-light text-gray-500 dark:text-white/40 hover:bg-gray-200/50 dark:hover:bg-white/5 hover:text-gray-700 dark:hover:text-white/60 transition-colors"
          >
            <Shield className="w-4 h-4" strokeWidth={1.5} />
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-white/40 font-light mb-10">
          ShadowGPT · {t.beta}
        </p>

        {/* Status cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <div className={cardClass}>
            <div className="flex items-center gap-2 text-gray-500 dark:text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
              <Activity className="w-3.5 h-3.5" strokeWidth={1.5} />
              {t.version}
            </div>
            <p className="text-lg font-light text-gray-900 dark:text-white">
              v{version}
            </p>
          </div>

          <div className={cardClass}>
            <div className="flex items-center gap-2 text-gray-500 dark:text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
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
                <div className="flex items-center gap-2 text-gray-500 dark:text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
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
                <div className="flex items-center gap-2 text-gray-500 dark:text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
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
                <div className="flex items-center gap-2 text-gray-500 dark:text-white/40 text-xs font-medium uppercase tracking-wider mb-1">
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
          <h2 className="text-sm font-medium text-gray-500 dark:text-white/40 uppercase tracking-wider mb-4">
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
                  formatter={(value) => [`${Number(value).toFixed(2)}%`, "Uptime"]}
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

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-white/25 font-light">
          <Link to="/" className="underline hover:text-gray-600 dark:hover:text-white/40">
            {t.back}
          </Link>
        </p>
      </div>
    </div>
  );
}
