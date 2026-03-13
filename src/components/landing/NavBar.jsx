import { motion } from "framer-motion";
import { Shield, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLang } from "./LangContext";
import { useTheme } from "./ThemeContext";
import { t } from "./translations";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const { theme, toggleTheme } = useTheme();

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
            <Shield className="w-4 h-4 text-gray-600 dark:text-white/60" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-light text-gray-600 dark:text-white/60 tracking-wide">ShadowGPT</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="glass rounded-full p-2 text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70 transition-all duration-300"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wide text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60 font-light transition-colors">
            {t[lang].nav.login}
          </a>
          <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="glass hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 rounded-full px-5 py-2 text-xs tracking-wide text-gray-600 dark:text-white/50 font-light">
            {t[lang].nav.cta}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}