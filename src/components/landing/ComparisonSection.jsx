import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

// Цены и сроки: по открытым данным (сайты вендоров, обзоры). Solar/Nightfall — ориентировочные оценки.
const competitors = [
  // Российские
  { name: "Solar webProxy", price: "от 500 000 ₽/год", setup: "Месяцы", priceEn: "from ~$50K/yr", setupEn: "Months" },
  { name: "InfoWatch", price: "от 2 млн ₽ (Enterprise)", setup: "Месяцы", priceEn: "from 2M ₽ (Enterprise)", setupEn: "Months" },
  { name: "SearchInform", price: "Enterprise, по запросу", setup: "Недели", priceEn: "Enterprise, on request", setupEn: "Weeks" },
  // США
  { name: "Nightfall AI", price: "от ~$5 000/мес", setup: "Дни", priceEn: "from ~$5K/mo", setupEn: "Days" },
  { name: "Tibo.ai", price: "Enterprise, по запросу", setup: "Недели", priceEn: "Enterprise, on request", setupEn: "Weeks" },
  { name: "Prompt Security", price: "Enterprise, по запросу", setup: "Дни", priceEn: "Enterprise, on request", setupEn: "Days" },
];

const shadowgpt = { name: "ShadowGPT", price: "от 4 990 ₽/мес", priceEn: "from $55/mo", setup: "10 минут", setupEn: "10 minutes" };

export default function ComparisonSection() {
  const { lang } = useLang();
  const tx = t[lang].comparison;

  return (
    <section className="relative section-landing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-white/55 font-light">{tx.label}</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200 dark:border-white/5 text-[11px] tracking-[0.15em] uppercase text-gray-600 dark:text-white/65 font-light">
            {tx.cols.map((col, i) => (
              <span key={i} className={i === 3 ? "text-center" : ""}>{col}</span>
            ))}
          </div>

          {competitors.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100 dark:border-white/3 items-center"
            >
              <span className="text-sm text-gray-700 dark:text-white/80 font-light">{comp.name}</span>
              <span className="text-sm text-gray-500 dark:text-white/45 font-light">{lang === "en" ? comp.priceEn : comp.price}</span>
              <span className="text-sm text-gray-500 dark:text-white/45 font-light">{lang === "en" ? comp.setupEn : comp.setup}</span>
              <div className="flex justify-center">
                <X className="w-4 h-4 text-gray-300 dark:text-white/15" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-4 gap-4 p-6 glass-highlight items-center"
          >
            <span className="text-sm text-gray-800 dark:text-white/80 font-medium">{shadowgpt.name}</span>
            <span className="text-sm text-gray-700 dark:text-white/80 font-light">{lang === "en" ? shadowgpt.priceEn : shadowgpt.price}</span>
            <span className="text-sm text-gray-700 dark:text-white/80 font-light">{lang === "en" ? shadowgpt.setupEn : shadowgpt.setup}</span>
            <div className="flex justify-center">
              <Check className="w-4 h-4 text-gray-700 dark:text-white/80" strokeWidth={1.5} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}