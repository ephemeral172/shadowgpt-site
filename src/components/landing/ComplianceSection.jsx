import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

export default function ComplianceSection() {
  const { lang } = useLang();
  const tx = t[lang].compliance;

  return (
    <section className="relative section-landing">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-white/55 font-light">{tx.label}</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-gray-600 dark:text-white/65 font-light leading-relaxed max-w-2xl mx-auto">
            {tx.desc}
          </p>
          {tx.onPrem && (
            <p className="text-gray-600 dark:text-white/60 font-light leading-relaxed mt-4 mb-8 max-w-2xl mx-auto">
              {tx.onPrem}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {tx.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-medium tracking-wider uppercase text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-white/10 rounded-full px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>
          <Link
            to="/Security"
            className="link-hover inline-flex items-center gap-2 text-sm font-light text-gray-700 dark:text-white/80 group"
          >
            <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
            {tx.linkText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
