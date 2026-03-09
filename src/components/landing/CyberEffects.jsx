import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "01アイウエオ∇∆⌘⚡︎░▒▓█∑∏∫≡≠≤≥⊕⊗".split("");

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function DataStream({ x, delay }) {
  const [chars, setChars] = useState(() =>
    Array.from({ length: 12 }, () => randomChar())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setChars((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = randomChar();
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-0 flex flex-col gap-1 pointer-events-none select-none"
      style={{ left: `${x}%`, opacity: 0 }}
      animate={{
        y: ["-5%", "105%"],
        opacity: [0, 0.12, 0.12, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 6,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {chars.map((c, i) => (
        <span
          key={i}
          className="text-[10px] font-mono text-gray-400 dark:text-white leading-tight block"
          style={{ opacity: 1 - i * 0.07 }}
        >
          {c}
        </span>
      ))}
    </motion.div>
  );
}

const streams = [
  { x: 3, delay: 0 },
  { x: 8, delay: 2.5 },
  { x: 15, delay: 5 },
  { x: 22, delay: 1 },
  { x: 30, delay: 7 },
  { x: 38, delay: 3 },
  { x: 47, delay: 9 },
  { x: 55, delay: 4 },
  { x: 63, delay: 1.5 },
  { x: 72, delay: 6 },
  { x: 80, delay: 2 },
  { x: 88, delay: 8 },
  { x: 94, delay: 4.5 },
];

export default function CyberEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {streams.map((s, i) => (
        <DataStream key={i} x={s.x} delay={s.delay} />
      ))}
    </div>
  );
}