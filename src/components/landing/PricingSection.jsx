import { motion } from "framer-motion";
import { Check, Zap, Building, Crown } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

const icons = [Zap, Building, Crown];

export default function PricingSection() {
  const { lang } = useLang();
  const tx = t[lang].pricing;

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
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-light">{tx.label}</span>
          <h2 className="text-3xl md:text-5xl font-extralight mt-4 tracking-tight">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
          <p className="text-white/30 mt-4 max-w-md mx-auto font-light text-sm">{tx.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tx.plans.map((plan, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-8 cursor-default ${plan.popular ? "glass-highlight ring-1 ring-white/15" : "glass-card"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="glass-strong text-[10px] tracking-[0.2em] uppercase text-white/70 px-4 py-1.5 rounded-full font-light">
                      {tx.popular}
                    </span>
                  </div>
                )}

                <div className="glass-highlight rounded-xl w-10 h-10 flex items-center justify-center mb-6">
                  <Icon className="w-4 h-4 text-white/60" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-light text-white/80">{plan.name}</h3>
                <p className="text-xs text-white/30 font-light mt-1">{plan.limit}</p>

                <div className="mt-6 mb-8">
                  <span className="text-4xl font-extralight text-white/90">{plan.price}</span>
                  <span className="text-sm text-white/30 font-light ml-1">{tx.perMonth}</span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <Check className="w-3.5 h-3.5 text-white/30 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-sm text-white/40 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="https://console.shadowgpt.app/login" target="_blank" rel="noopener noreferrer" className={`w-full mt-8 rounded-full py-3 text-sm font-light tracking-wide transition-all duration-500 block text-center ${
                  plan.popular ? "bg-white/10 text-white/80 hover:bg-white/15" : "glass hover:bg-white/5 text-white/50"
                }`}>
                  {tx.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}