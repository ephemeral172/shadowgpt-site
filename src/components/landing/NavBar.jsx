import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLang } from "./LangContext";
import { useTheme } from "./ThemeContext";
import { t } from "./translations";
import { SUPPORTED_LANGS } from "./LangContext";

const LANG_LABELS = { en: "EN", ru: "RU", es: "ES", ko: "KO" };

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const displayLang = t[lang] ? lang : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong" : ""}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="glass rounded-lg p-1.5">
            <Shield className="w-4 h-4 text-gray-700 dark:text-white/80" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-light text-gray-700 dark:text-white/80 tracking-wide">ShadowGPT</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="glass rounded-full p-1 flex items-center gap-0.5">
            {SUPPORTED_LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-light tracking-wide transition-all duration-300 ${
                  displayLang === l
                    ? "glass-highlight text-gray-900 dark:text-white/90"
                    : "text-gray-500 dark:text-white/55 hover:text-gray-700 dark:hover:text-white/75"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="glass rounded-full p-2 text-gray-600 dark:text-white/70 hover:text-gray-800 dark:hover:text-white/90 transition-all duration-300"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link to="/Blog" className="text-xs tracking-wide text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85 font-light transition-colors">
            {t[displayLang].footer.blog}
          </Link>

          <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wide text-gray-600 dark:text-white/65 hover:text-gray-800 dark:hover:text-white/85 font-light transition-colors">
            {t[displayLang].nav.login}
          </a>
          <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="glass hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 rounded-full px-5 py-2 text-xs tracking-wide text-gray-700 dark:text-white/75 font-light">
            {t[displayLang].nav.cta}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}