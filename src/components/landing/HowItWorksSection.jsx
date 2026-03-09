import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageSquare, Scan, Brain, Bell, LayoutDashboard, ShieldAlert } from "lucide-react";
import { useLang } from "./LangContext";
import { useTheme } from "./ThemeContext";
import { t } from "./translations";

const icons = [MessageSquare, Scan, Brain, ShieldAlert, LayoutDashboard, Bell];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const { lang } = useLang();
  const { theme } = useTheme();
  const tx = t[lang].howItWorks;
  const isDark = theme === "dark";

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400 dark:text-white/30 font-light">{tx.label}</span>
          <h2 className="text-3xl md:text-5xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 hidden md:block" style={{ left: 31, width: 1 }}>
            <div className="absolute inset-0 bg-gray-300 dark:bg-white/8" />
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                background: isDark
                  ? "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
                  : "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.04))",
                originY: 0,
              }}
              animate={{ height: `${((activeStep + 1) / icons.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-600 dark:bg-white/60"
              style={{ boxShadow: isDark ? "0 0 8px rgba(255,255,255,0.6)" : "0 0 8px rgba(0,0,0,0.25)" }}
              animate={{ top: [`${(activeStep / icons.length) * 100}%`, `${((activeStep + 1) / icons.length) * 100}%`] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-5">
            {tx.steps.map((step, i) => {
              const Icon = icons[i];
              const isActive = i === activeStep;
              const isPast = i < activeStep;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex items-start gap-0 cursor-pointer"
                  onClick={() => setActiveStep(i)}
                >
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center relative z-10"
                    style={{ width: 64, paddingTop: 28, paddingBottom: 28 }}>
                    <motion.div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? "glass-highlight" : "glass"}`}
                      animate={{
                        scale: isActive ? 1.12 : 1,
                        boxShadow: isActive
                          ? isDark
                            ? "0 0 20px rgba(255,255,255,0.12), 0 0 40px rgba(255,255,255,0.04)"
                            : "0 0 20px rgba(0,0,0,0.08), 0 0 40px rgba(0,0,0,0.04)"
                          : "none",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className={`w-4 h-4 transition-all duration-500 ${isActive ? "text-gray-900 dark:text-white/90" : "text-gray-400 dark:text-white/25"}`} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <div className="flex-1 md:ml-6">
                    <motion.div
                      className={`glass-card rounded-2xl p-6 md:p-7 transition-all duration-500 relative overflow-hidden ${isActive ? "ring-1 ring-gray-300 dark:ring-white/12" : ""}`}
                    >
                      {isActive && (
                        <motion.div
                          className="absolute left-0 right-0 h-px"
                          style={{
                            background: isDark
                              ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
                              : "linear-gradient(90deg, transparent, rgba(0,0,0,0.12), transparent)",
                          }}
                          animate={{ top: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      )}

                      <div className="md:hidden mb-4">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? "glass-highlight" : "glass"}`}>
                          <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gray-900 dark:text-white/90" : "text-gray-400 dark:text-white/30"}`} strokeWidth={1.5} />
                        </div>
                      </div>

                      <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 dark:text-white/20 font-light">
                        {tx.stepLabel} {i + 1}
                      </span>

                      <h3 className={`text-lg font-light mt-1.5 transition-colors duration-500 ${isActive ? "text-gray-900 dark:text-white/90" : "text-gray-600 dark:text-white/50"}`}>
                        {step.title}
                      </h3>

                      <p className={`text-sm mt-2 font-light leading-relaxed transition-colors duration-500 ${isActive ? "text-gray-500 dark:text-white/40" : "text-gray-400 dark:text-white/20"}`}>
                        {step.description}
                      </p>

                      <motion.div
                        initial={false}
                        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 glass rounded-xl px-4 py-3 border-l-2 border-gray-200 dark:border-white/10">
                          <p className="text-xs text-gray-500 dark:text-white/30 font-mono leading-relaxed">{step.detail}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}