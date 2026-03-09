import { motion } from "framer-motion";
import { Eye, Brain, ShieldCheck, Activity, FileText, FileSearch, Lock, Send } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const icons = [Eye, Brain, ShieldCheck, Activity, FileSearch, Lock, FileText, Send];

export default function FeaturesSection() {
  const { lang } = useLang();
  const tx = t[lang].features;

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 group cursor-default relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full dark:hidden" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }} />
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full hidden dark:block" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
                </div>
                <div className="relative z-10">
                  <div className="glass-highlight rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-shadow duration-500">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-white/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light text-gray-800 dark:text-white/80 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-white/30 font-light leading-relaxed mb-5">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider uppercase text-gray-400 dark:text-white/20 glass rounded-full px-3 py-1 font-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}