import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "../components/landing/LangContext";

const TALLY_FORM_URL = "https://tally.so/r/Bz1LE5?transparentBackground=1";

const content = {
  ru: { title: "Контакты", back: "На главную" },
  en: { title: "Contact", back: "Back to home" },
  ko: { title: "연락처", back: "홈으로" },
  es: { title: "Contacto", back: "Volver al inicio" },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang] || content.en;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#050505] dark:text-white flex flex-col">
      <div className="flex-shrink-0 px-6 py-6 border-b border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link to="/" className="glass rounded-lg p-2 inline-flex">
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
          </Link>
          <Link to="/" className="link-hover text-sm font-light text-gray-600 dark:text-white/65">
            {t.back}
          </Link>
          <h1 className="text-xl font-light tracking-tight text-gray-800 dark:text-white/80 ml-2">
            {t.title}
          </h1>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative">
        <iframe
          data-tally-src={TALLY_FORM_URL}
          src={TALLY_FORM_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
