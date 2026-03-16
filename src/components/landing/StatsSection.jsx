import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useLang } from "./LangContext";
import { t } from "./translations";

function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setCount(0);
    setHasAnimated(false);
  }, [target]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = target / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  const { lang } = useLang();
  const tx = t[lang].stats;

  return (
    <section id="learn-more" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-white/55 font-light">{tx.label}</span>
          <h2 className="text-3xl md:text-5xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
          {tx.whatIs && (
            <p className="text-base md:text-lg text-gray-600 dark:text-white/70 mt-3 max-w-2xl mx-auto font-light" itemProp="description">
              {tx.whatIs}
            </p>
          )}
          <p className="text-gray-700 dark:text-white/80 mt-4 max-w-lg mx-auto font-light">{tx.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tx.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 cursor-default"
            >
              <div className="text-4xl md:text-5xl font-extralight text-gray-900 dark:text-white/90 mb-4 tracking-tight">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-sm text-gray-600 dark:text-white/70 font-light leading-relaxed mb-3">{stat.label}</p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white/20" />
                <span className="text-[10px] text-gray-500 dark:text-white/45 font-light">{stat.source}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-lg font-light text-gray-700 dark:text-white/80 mb-6">{tx.uploadsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {tx.uploads.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="glass rounded-full px-4 py-2 text-xs text-gray-600 dark:text-white/75 font-light hover:text-gray-800 dark:hover:text-white/90 hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}