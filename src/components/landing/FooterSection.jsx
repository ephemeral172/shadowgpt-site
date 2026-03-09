import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

export default function FooterSection() {
  const { lang } = useLang();
  const footer = t[lang].footer;

  return (
    <footer className="relative py-16 px-6 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="glass rounded-lg p-2">
              <Shield className="w-4 h-4 text-gray-500 dark:text-white/40" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-light text-gray-500 dark:text-white/40">ShadowGPT</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8">
            <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.login}</a>
            <Link to="/FAQ" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.faq}</Link>
            <Link to="/Help" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.help}</Link>
            <Link to="/Security" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.security}</Link>
            <Link to="/Integrations" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.integrations}</Link>
            <Link to="/Terms" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.terms}</Link>
            <Link to="/Privacy" className="text-xs text-gray-400 dark:text-white/15 font-light hover:text-gray-500 dark:hover:text-white/30">{footer.privacy}</Link>
            <span className="text-xs text-gray-400 dark:text-white/15 font-light">{footer.poweredBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}