import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../components/landing/LangContext";
import { BLOG_POSTS } from "../data/blogPosts";

const LANG = { en: "en", ru: "ru", ko: "ko", es: "es" };

const UI = {
  en: { title: "Blog", back: "Back to home", readMore: "Read more", date: "Date", minRead: "min read", featured: "Featured", all: "All" },
  ru: { title: "Блог", back: "На главную", readMore: "Читать", date: "Дата", minRead: "мин", featured: "Избранное", all: "Все" },
  ko: { title: "블로그", back: "홈으로", readMore: "더 읽기", date: "날짜", minRead: "분", featured: "추천", all: "전체" },
  es: { title: "Blog", back: "Volver al inicio", readMore: "Leer más", date: "Fecha", minRead: "min", featured: "Destacado", all: "Todos" },
};

const CATEGORY_KEYS = ["practice", "regulation", "risks", "comparisons", "short", "basics"];

const CATEGORY_LABELS = {
  en: { practice: "Practice", regulation: "Regulation", risks: "Risks & incidents", comparisons: "Comparisons & myths", short: "Short reads", basics: "Basics" },
  ru: { practice: "Практика", regulation: "Регуляция", risks: "Риски и инциденты", comparisons: "Сравнения и мифы", short: "Короткие", basics: "Основы" },
  ko: { practice: "실무", regulation: "규제", risks: "위험·사고", comparisons: "비교·미신", short: "짧은 글", basics: "기초" },
  es: { practice: "Práctica", regulation: "Regulación", risks: "Riesgos e incidentes", comparisons: "Comparaciones y mitos", short: "Lecturas cortas", basics: "Conceptos" },
};

const SLUG_TO_CATEGORY = {
  "shadow-ai-risk-2026": "risks",
  "audit-10-minutes": "practice",
  "privacy-no-prompt-storage": "practice",
  "eu-ai-act-2026-visibility": "regulation",
  "claude-chatgpt-breach-lessons-2026": "risks",
  "chatgpt-enterprise-vs-monitoring": "practice",
  "explain-ai-policy-to-employees": "practice",
  "checklist-ai-monitoring-week": "practice",
  "ai-banks-fintech-regulators-2026": "regulation",
  "ai-in-development-dont-leak-code": "practice",
  "healthcare-ai-hipaa-visibility": "regulation",
  "prompt-injection-corporate-chatbots": "risks",
  "data-leak-first-hours-runbook": "risks",
  "five-myths-shadow-ai": "comparisons",
  "ai-monitoring-vs-dlp": "comparisons",
  "case-two-weeks-ai-visibility": "short",
  "glossary-shadow-ai-prompt-risk": "basics",
};

function formatDate(iso, lang) {
  const d = new Date(iso);
  const locale = lang === "ru" ? "ru-RU" : lang === "ko" ? "ko-KR" : lang === "es" ? "es-ES" : "en-US";
  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getReadingTimeMinutes(post) {
  const content = post.en?.body || [];
  const totalChars = content.reduce((acc, block) => acc + ((block.text || "").length), 0);
  const words = Math.max(1, Math.ceil(totalChars / 5));
  return Math.max(1, Math.ceil(words / 200));
}

export default function Blog() {
  const { lang } = useLang();
  const l = LANG[lang] || "en";
  const t = UI[lang] || UI.en;
  const labels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.en;

  const [filter, setFilter] = useState("all");

  const filteredPosts = useMemo(() => {
    if (filter === "all") return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => SLUG_TO_CATEGORY[post.slug] === filter);
  }, [filter]);

  const featuredPost = BLOG_POSTS[0];
  const restPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);
  const showFeatured = filter === "all" && featuredPost;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="link-hover text-sm font-light text-gray-600 dark:text-white/65">
            {t.back}
          </Link>
        </div>

        <motion.h1
          className="text-3xl md:text-4xl font-light tracking-tight mb-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t.title}
        </motion.h1>
        <motion.p
          className="text-gray-600 dark:text-white/75 font-light mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {lang === "en" && "Articles on Shadow AI, corporate data protection, and how ShadowGPT works."}
          {lang === "ru" && "Статьи о Shadow AI, защите корпоративных данных и работе ShadowGPT."}
          {lang === "ko" && "섀도우 AI, 기업 데이터 보호, ShadowGPT 활용에 대한 글."}
          {lang === "es" && "Artículos sobre Shadow AI, protección de datos corporativos y cómo funciona ShadowGPT."}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-light transition-all ${
              filter === "all"
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
            }`}
          >
            {t.all}
          </button>
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2 text-sm font-light transition-all ${
                filter === key
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20"
              }`}
            >
              {labels[key] || key}
            </button>
          ))}
        </motion.div>

        {showFeatured && (
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mb-12"
          >
            <Link
              to={`/Blog/${featuredPost.slug}`}
              className="block glass-card rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 group hover:border-gray-300 dark:hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 flex-shrink-0 aspect-[16/10] sm:aspect-auto sm:h-56 overflow-hidden bg-gray-100 dark:bg-white/5">
                  <img
                    src={featuredPost.image}
                    alt={(featuredPost[l] || featuredPost.en).title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 mb-3">
                    <Sparkles className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {t.featured}
                  </span>
                  <time className="text-xs text-gray-500 dark:text-white/50 font-light flex items-center gap-1 mb-2">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {formatDate(featuredPost.date, lang)}
                  </time>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white mb-2 group-hover:underline">
                    {(featuredPost[l] || featuredPost.en).title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-white/75 font-light line-clamp-2 mb-4">
                    {(featuredPost[l] || featuredPost.en).description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-light text-gray-700 dark:text-white/85">
                    {t.readMore}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        <ul className="space-y-8">
          <AnimatePresence mode="popLayout">
            {(showFeatured ? restPosts : filteredPosts).map((post, index) => {
              const content = post[l] || post.en;
              const category = SLUG_TO_CATEGORY[post.slug];
              const minutes = getReadingTimeMinutes(post);
              return (
                <motion.li
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="list-none"
                >
                  <motion.article
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card rounded-2xl p-6 md:p-8 border border-gray-200/80 dark:border-white/10 hover:border-gray-300/80 dark:hover:border-white/15 hover:shadow-lg hover:shadow-gray-900/5 dark:hover:shadow-black/20 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <Link to={`/Blog/${post.slug}`} className="block flex-shrink-0 w-full sm:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 group">
                        <img
                          src={post.image}
                          alt={(post[l] || post.en).title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                          {category && (
                            <span className="text-xs font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider">
                              {labels[category]}
                            </span>
                          )}
                          <span className="text-xs text-gray-400 dark:text-white/40">·</span>
                          <time className="text-xs text-gray-500 dark:text-white/50 font-light flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                            {formatDate(post.date, lang)}
                          </time>
                          <span className="text-xs text-gray-400 dark:text-white/40 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                            {minutes} {t.minRead}
                          </span>
                        </div>
                        <h2 className="text-xl font-light text-gray-900 dark:text-white mb-2">
                          <Link to={`/Blog/${post.slug}`} className="link-hover hover:underline">
                            {content.title}
                          </Link>
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-white/75 font-light line-clamp-2 mb-4">
                          {content.description}
                        </p>
                        <Link
                          to={`/Blog/${post.slug}`}
                          className="link-hover text-sm font-light text-gray-700 dark:text-white/85 underline hover:no-underline inline-flex items-center gap-1"
                        >
                          {t.readMore}
                          <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-white/50 font-light py-12"
          >
            {lang === "en" && "No posts in this category yet."}
            {lang === "ru" && "В этой категории пока нет постов."}
            {lang === "ko" && "이 카테고리에 아직 글이 없습니다."}
            {lang === "es" && "Aún no hay posts en esta categoría."}
          </motion.p>
        )}
      </div>
    </div>
  );
}
