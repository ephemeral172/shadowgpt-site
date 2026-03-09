import { motion } from "framer-motion";
import { Shield, ArrowDown } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

export default function HeroSection() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 50%, transparent 70%)",
          boxShadow: "inset 0 0 120px rgba(255,255,255,0.03), 0 0 80px rgba(255,255,255,0.02)",
        }}
        animate={{ scale: [1, 1.03, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] md:w-[450px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", top: "35%" }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-white/60 pulse-glow" />
          <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-light">{tx.badge}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="mb-8"
        >
          <div className="inline-flex glass-strong rounded-2xl p-5">
            <Shield className="w-10 h-10 text-white/80" strokeWidth={1.2} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6"
        >
          <span className="shimmer-text">Shadow</span>
          <span className="font-bold text-white">GPT</span>
        </motion.h1>

        <motion.p
          key={lang + "sub"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed mb-4"
        >
          {tx.subtitle}
        </motion.p>
        <motion.p
          key={lang + "desc"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-white/25 font-light max-w-xl mx-auto leading-relaxed mb-12"
        >
          {tx.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className="glass-highlight hover:bg-white/10 transition-all duration-500 rounded-full px-8 py-3.5 text-sm tracking-wide text-white/90 font-light">
            {tx.cta1}
          </a>
          <button className="glass hover:bg-white/5 transition-all duration-500 rounded-full px-8 py-3.5 text-sm tracking-wide text-white/50 font-light">
            {tx.cta2}
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-white/15" />
      </motion.div>
    </section>
  );
}