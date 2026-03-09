import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

export default function CTASection() {
  const { lang } = useLang();
  const tx = t[lang].cta;

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex glass-strong rounded-2xl p-4 mb-8">
            <Shield className="w-8 h-8 text-white/60" strokeWidth={1.2} />
          </div>

          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight mb-6">
            {tx.title1}
            <br />
            <span className="font-semibold">{tx.title2}</span>
          </h2>

          <p className="text-white/30 font-light max-w-lg mx-auto mb-10 leading-relaxed">{tx.desc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://console.shadowgpt.app/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-highlight hover:bg-white/10 transition-all duration-500 rounded-full px-10 py-4 text-sm tracking-wide text-white/90 font-light flex items-center gap-3 group"
            >
              {tx.btn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          <p className="text-xs text-white/15 mt-8 font-light">shadowgpt.app</p>
        </motion.div>
      </div>
    </section>
  );
}