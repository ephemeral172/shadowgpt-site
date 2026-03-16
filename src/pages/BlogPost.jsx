import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Shield, Calendar } from "lucide-react";
import { useLang } from "../components/landing/LangContext";
import { getPostBySlug } from "../data/blogPosts";

const BASE_URL = "https://shadowgpt.app";

const DEFAULT_META = {
  canonical: BASE_URL + "/",
  ogType: "website",
  ogUrl: BASE_URL + "/",
  ogTitle: "ShadowGPT — Corporate protection from AI data leaks",
  ogDescription: "Monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. No prompt content stored. Free 7-day audit.",
  ogImage: BASE_URL + "/og-image.png",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  twitterCard: "summary_large_image",
  twitterUrl: BASE_URL + "/",
  twitterTitle: "ShadowGPT — Corporate protection from AI data leaks",
  twitterDescription: "Monitor and control what employees send to ChatGPT, Claude, Gemini. Browser extension + cloud dashboard. Free 7-day audit.",
  twitterImage: BASE_URL + "/og-image.png",
};

function setMeta(attr, content, useProperty = false) {
  const key = useProperty ? "property" : "name";
  let el = document.querySelector(`meta[${key}="${attr}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, attr);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function applyPostMeta(post, c) {
  const postUrl = `${BASE_URL}/Blog/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : BASE_URL + post.image;

  setCanonical(postUrl);
  setMeta("og:type", "article", true);
  setMeta("og:url", postUrl, true);
  setMeta("og:title", c.title, true);
  setMeta("og:description", c.description, true);
  setMeta("og:image", imageUrl, true);
  setMeta("og:image:width", "1200", true);
  setMeta("og:image:height", "630", true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:url", postUrl);
  setMeta("twitter:title", c.title);
  setMeta("twitter:description", c.description);
  setMeta("twitter:image", imageUrl);
}

function restoreDefaultMeta() {
  setCanonical(DEFAULT_META.canonical);
  setMeta("og:type", DEFAULT_META.ogType, true);
  setMeta("og:url", DEFAULT_META.ogUrl, true);
  setMeta("og:title", DEFAULT_META.ogTitle, true);
  setMeta("og:description", DEFAULT_META.ogDescription, true);
  setMeta("og:image", DEFAULT_META.ogImage, true);
  setMeta("og:image:width", DEFAULT_META.ogImageWidth, true);
  setMeta("og:image:height", DEFAULT_META.ogImageHeight, true);
  setMeta("twitter:card", DEFAULT_META.twitterCard);
  setMeta("twitter:url", DEFAULT_META.twitterUrl);
  setMeta("twitter:title", DEFAULT_META.twitterTitle);
  setMeta("twitter:description", DEFAULT_META.twitterDescription);
  setMeta("twitter:image", DEFAULT_META.twitterImage);
}

const LANG = { en: "en", ru: "ru", ko: "ko", es: "es" };

const UI = {
  en: { back: "Back to home", blog: "Blog", date: "Date" },
  ru: { back: "На главную", blog: "Блог", date: "Дата" },
  ko: { back: "홈으로", blog: "블로그", date: "날짜" },
  es: { back: "Volver al inicio", blog: "Blog", date: "Fecha" },
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

function ArticleSchema({ post, lang, baseUrl }) {
  const c = post[lang] || post.en;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "ShadowGPT" },
    publisher: { "@type": "Organization", name: "ShadowGPT", logo: { "@type": "ImageObject", url: `${baseUrl}/favicon.svg` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/Blog/${post.slug}` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();
  const l = LANG[lang] || "en";
  const t = UI[lang] || UI.en;

  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      navigate("/Blog", { replace: true });
      return;
    }
    const c = post[l] || post.en;
    document.title = `${c.title} — ShadowGPT`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", c.description);
    let kw = document.querySelector('meta[name="keywords"]');
    if (c.keywords) {
      if (!kw) {
        kw = document.createElement("meta");
        kw.setAttribute("name", "keywords");
        document.head.appendChild(kw);
      }
      kw.setAttribute("content", c.keywords);
    } else if (kw) kw.remove();

    applyPostMeta(post, c);
    return () => restoreDefaultMeta();
  }, [post, l, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 dark:border-white/20 border-t-gray-600 dark:border-t-white/60 rounded-full animate-spin" />
      </div>
    );
  }

  const content = post[l] || post.en;

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white px-6 py-16">
      <ArticleSchema post={post} lang={l} baseUrl={BASE_URL} />
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="text-sm font-light text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85">
            {t.back}
          </Link>
          <span className="text-gray-400 dark:text-white/40">/</span>
          <Link to="/Blog" className="text-sm font-light text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85">
            {t.blog}
          </Link>
        </div>

        <article>
          <header className="mb-10">
            <time className="text-xs text-gray-500 dark:text-white/50 font-light flex items-center gap-1 mb-4">
              <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
              {formatDate(post.date, lang)}
            </time>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-white/75 font-light">
              {content.description}
            </p>
          </header>

          <div className="relative rounded-2xl overflow-hidden mb-10 aspect-[2/1] max-h-[360px] bg-gray-100 dark:bg-white/5">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            {content.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-xl font-medium text-gray-900 dark:text-white mt-10 mb-4 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="text-lg font-medium text-gray-800 dark:text-white/90 mt-6 mb-3">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "img") {
                return (
                  <figure key={i} className="my-8">
                    <img src={block.src} alt={block.alt || ""} className="rounded-xl w-full" />
                  </figure>
                );
              }
              return (
                <p key={i} className="text-gray-700 dark:text-white/80 font-light leading-relaxed mb-4">
                  {block.text}
                </p>
              );
            })}
          </div>
        </article>

        <p className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <Link to="/Blog" className="text-sm text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85 underline">
            ← {t.blog}
          </Link>
        </p>
      </div>
    </div>
  );
}
