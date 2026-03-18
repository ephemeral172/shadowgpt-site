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
              <Shield className="w-4 h-4 text-gray-600 dark:text-white/65" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-light text-gray-600 dark:text-white/65">ShadowGPT</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400/90">Beta</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 md:gap-8">
            <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.login}</a>
            <Link to="/FAQ" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.faq}</Link>
            <Link to="/Help" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.help}</Link>
            <Link to="/Security" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.security}</Link>
            <Link to="/Integrations" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.integrations}</Link>
            <Link to="/Contact" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.contact}</Link>
            <Link to="/Status" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.status}</Link>
            <Link to="/Blog" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.blog}</Link>
            <Link to="/Terms" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.terms}</Link>
            <Link to="/Privacy" className="link-hover text-xs text-gray-600 dark:text-white/65 font-light">{footer.privacy}</Link>
            <span className="text-xs text-gray-600 dark:text-white/65 font-light">{footer.poweredBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}