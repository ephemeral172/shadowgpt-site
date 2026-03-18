import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const AUDIT_BLOG_SLUG = "audit-10-minutes";

export default function ResourcesSection() {
  const { lang } = useLang();
  const tx = t[lang].resources;

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-white/55 font-light">{tx.label}</span>
          <h2 className="text-3xl md:text-4xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to={`/Blog/${AUDIT_BLOG_SLUG}`}
            className="block glass-card rounded-2xl p-8 md:p-10 group hover:border-gray-300/80 dark:hover:border-white/15 transition-all"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="glass-highlight rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-gray-600 dark:text-white/70" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-light text-gray-800 dark:text-white/80 mb-2 group-hover:underline">
                  {tx.cardTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/60 font-light leading-relaxed">
                  {tx.cardDesc}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-light text-gray-600 dark:text-white/65 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex-shrink-0">
                {tx.linkText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
