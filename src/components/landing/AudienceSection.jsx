import { motion } from "framer-motion";
import { Code2, Landmark, Megaphone, ShieldCheck } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const icons = [Code2, Landmark, Megaphone, ShieldCheck];

export default function AudienceSection() {
  const { lang } = useLang();
  const tx = t[lang].audience;

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tx.segments.map((seg, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl p-8 group cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="glass-highlight rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-600 dark:text-white/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-gray-800 dark:text-white/80 mb-1">{seg.title}</h3>
                    <p className="text-xs text-gray-400 dark:text-white/20 font-light mb-3">{seg.range}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white/20" />
                        <span className="text-sm text-gray-500 dark:text-white/35 font-light">{seg.buyerLabel}: {seg.buyer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gray-500 dark:bg-white/30" />
                        <span className="text-sm text-gray-600 dark:text-white/45 font-light">{seg.pain}</span>
                      </div>
                    </div>
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