import { Link } from "react-router-dom";
import { Shield, Calendar } from "lucide-react";
import { useLang } from "../components/landing/LangContext";
import { BLOG_POSTS } from "../data/blogPosts";

const LANG = { en: "en", ru: "ru", ko: "ko" };

const UI = {
  en: { title: "Blog", back: "Back to home", readMore: "Read more", date: "Date" },
  ru: { title: "Блог", back: "На главную", readMore: "Читать", date: "Дата" },
  ko: { title: "블로그", back: "홈으로", readMore: "더 읽기", date: "날짜" },
};

function formatDate(iso, lang) {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "ru" ? "ru-RU" : lang === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const { lang } = useLang();
  const l = LANG[lang] || "en";
  const t = UI[lang] || UI.en;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="text-sm font-light text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85">
            {t.back}
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{t.title}</h1>
        <p className="text-gray-600 dark:text-white/75 font-light mb-12">
          {lang === "en" && "Articles on Shadow AI, corporate data protection, and how ShadowGPT works."}
          {lang === "ru" && "Статьи о Shadow AI, защите корпоративных данных и работе ShadowGPT."}
          {lang === "ko" && "섀도우 AI, 기업 데이터 보호, ShadowGPT 활용에 대한 글."}
        </p>

        <ul className="space-y-8">
          {BLOG_POSTS.map((post) => {
            const content = post[l] || post.en;
            return (
              <li key={post.slug}>
                <article className="glass-card rounded-2xl p-6 md:p-8 border border-gray-200/80 dark:border-white/10">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Link to={`/Blog/${post.slug}`} className="block flex-shrink-0 w-full sm:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <time className="text-xs text-gray-500 dark:text-white/50 font-light flex items-center gap-1 mb-2">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                        {formatDate(post.date, lang)}
                      </time>
                      <h2 className="text-xl font-light text-gray-900 dark:text-white mb-2">
                        <Link to={`/Blog/${post.slug}`} className="hover:underline">
                          {content.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-white/75 font-light line-clamp-2 mb-4">
                        {content.description}
                      </p>
                      <Link
                        to={`/Blog/${post.slug}`}
                        className="text-sm font-light text-gray-700 dark:text-white/85 underline hover:no-underline"
                      >
                        {t.readMore}
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
