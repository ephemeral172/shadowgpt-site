import { useId } from "react";
import { motion } from "framer-motion";
import { Network, Building2, Lock, Share2 } from "lucide-react";
import { useLang } from "./LangContext";
import { t } from "./translations";

function MeshDiagram({ labels }) {
  const rawId = useId().replace(/:/g, "");
  const gidAmber = `mesh-amber-${rawId}`;
  const gidEmerald = `mesh-emerald-${rawId}`;
  const gidBg = `mesh-bg-${rawId}`;
  const gidViolet = `mesh-violet-${rawId}`;
  const fidGlow = `mesh-glow-${rawId}`;

  const orbitDelays = ["0s", "0.4s", "0.8s", "1.2s", "1.6s"];

  return (
    <div
      className="relative w-full max-w-[34rem] mx-auto aspect-[14/11.5] min-h-[280px] select-none"
      aria-hidden
    >
      <svg
        className="mesh-diagram-svg absolute inset-0 w-full h-full text-slate-400 dark:text-white/32"
        viewBox="0 0 560 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gidBg} cx="50%" cy="26%" r="68%">
            <stop offset="0%" stopColor="rgb(251 191 36)" stopOpacity="0.18" />
            <stop offset="38%" stopColor="rgb(167 139 250)" stopOpacity="0.07" />
            <stop offset="72%" stopColor="rgb(56 189 248)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={gidAmber} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(234 88 12)" stopOpacity="0.65" />
            <stop offset="45%" stopColor="rgb(245 158 11)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="rgb(253 230 138)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id={gidEmerald} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(13 148 136)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="rgb(45 212 191)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgb(110 231 183)" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id={gidViolet} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(139 92 246)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0.2" />
          </linearGradient>
          <filter id={fidGlow} x="-45%" y="-45%" width="190%" height="190%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse className="mesh-bg-ellipse" cx="280" cy="118" rx="220" ry="160" fill={`url(#${gidBg})`} />

        {[
          [280, 44],
          [338, 78],
          [352, 132],
          [222, 78],
          [208, 132],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3.5"
            className="fill-amber-500/90 dark:fill-amber-300/95 mesh-orbit-dot"
            style={{ animationDelay: orbitDelays[i] }}
          />
        ))}

        <path
          d="M 280 142 Q 200 178 162 220"
          className="stroke-[1.5] mesh-link-dash"
          stroke="currentColor"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 280 142 Q 360 178 398 220"
          className="stroke-[1.5] mesh-link-dash-delay"
          stroke="currentColor"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 176 242 Q 280 272 384 242"
          className="stroke-[1.15] mesh-link-bridge"
          stroke={`url(#${gidViolet})`}
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M 140 278 L 140 294"
          className="stroke-[2.5] mesh-link-emerald"
          stroke={`url(#${gidEmerald})`}
          strokeLinecap="round"
        />

        <path
          d="M 280 142 L 280 292"
          className="stroke-[1.25] mesh-link-amber-flow"
          stroke={`url(#${gidAmber})`}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 254 310 Q 212 272 172 252"
          className="stroke-[1.15] mesh-link-soft"
          stroke={`url(#${gidAmber})`}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 306 310 Q 348 272 388 252"
          className="stroke-[1.15] mesh-link-soft mesh-link-soft-delay"
          stroke={`url(#${gidAmber})`}
          strokeLinecap="round"
          fill="none"
        />

        <circle
          cx="280"
          cy="100"
          r="86"
          className="mesh-node-pulse-wide stroke-amber-400/25 dark:stroke-amber-300/20"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="280" cy="100" r="68" className="mesh-node-pulse-slow stroke-amber-500/35 dark:stroke-amber-400/30" strokeWidth="1.15" fill="none" />
        <circle cx="280" cy="100" r="54" className="mesh-node-pulse stroke-orange-400/40 dark:stroke-amber-300/35" strokeWidth="1.25" fill="none" />
        <circle
          cx="280"
          cy="100"
          r="42"
          className="mesh-hub-fill fill-amber-50 dark:fill-amber-950/55 stroke-amber-400/90 dark:stroke-amber-300/65"
          strokeWidth="1.4"
          filter={`url(#${fidGlow})`}
        />
        <circle
          cx="140"
          cy="242"
          r="34"
          className="mesh-node-org fill-sky-50/95 dark:fill-sky-950/40 stroke-sky-400/55 dark:stroke-sky-400/45"
          strokeWidth="1.35"
        />
        <circle
          cx="420"
          cy="242"
          r="34"
          className="mesh-node-org mesh-node-org-delay fill-sky-50/95 dark:fill-sky-950/40 stroke-sky-400/55 dark:stroke-sky-400/45"
          strokeWidth="1.35"
        />
        <circle
          cx="140"
          cy="322"
          r="30"
          className="mesh-node-local fill-teal-50/95 dark:fill-teal-950/45 stroke-teal-500/60 dark:stroke-teal-400/55"
          strokeWidth="1.45"
        />
        <circle
          cx="280"
          cy="322"
          r="32"
          className="mesh-node-global fill-orange-50/95 dark:fill-orange-950/35 stroke-orange-400/70 dark:stroke-amber-400/55"
          strokeWidth="1.45"
        />
      </svg>

      <div className="absolute inset-0 pointer-events-none text-[10px] sm:text-[11px] font-light tracking-wide text-gray-600 dark:text-neutral-200">
        <div className="absolute left-1/2 top-[21%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 text-center max-w-[11rem] px-1">
          <Network className="w-[1.05rem] h-[1.05rem] text-amber-600 dark:text-amber-200 mb-0.5 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" strokeWidth={1.35} />
          <span className="mesh-diagram-label-title leading-tight font-medium text-gray-800">{labels.hub}</span>
          <span className="mesh-diagram-label-sub text-[9px] text-gray-500 leading-tight">{labels.hubSub}</span>
        </div>
        <div className="absolute left-[25%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 text-center max-w-[7.5rem] px-0.5">
          <Building2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300/90" strokeWidth={1.25} />
          <span className="leading-tight">{labels.org}</span>
        </div>
        <div className="absolute left-[75%] top-[55.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 text-center max-w-[7.5rem] px-0.5">
          <Building2 className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300/90" strokeWidth={1.25} />
          <span className="leading-tight">{labels.org}</span>
        </div>
        <div className="absolute left-[25%] top-[76.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 text-center max-w-[8.5rem] px-0.5">
          <Lock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-300 drop-shadow-[0_0_8px_rgba(45,212,191,0.35)]" strokeWidth={1.25} />
          <span className="leading-tight text-teal-800 dark:text-teal-200/90">{labels.local}</span>
          <span className="text-[9px] text-teal-700/90 dark:text-teal-300/75 leading-tight font-medium">{labels.localSub}</span>
        </div>
        <div className="absolute left-1/2 top-[76.5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0.5 text-center max-w-[10rem] px-1">
          <Share2 className="w-3.5 h-3.5 text-orange-600 dark:text-amber-200 drop-shadow-[0_0_8px_rgba(0,0,0,0.45)]" strokeWidth={1.25} />
          <span className="mesh-diagram-label-title leading-tight font-medium text-gray-800">{labels.global}</span>
          <span className="mesh-diagram-label-sub text-[9px] text-orange-800/85 leading-tight">{labels.globalSub}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-amber-400/45 bg-gradient-to-r from-amber-500/15 to-orange-500/10 dark:from-amber-400/20 dark:to-orange-500/15 px-3 py-1 text-[10px] font-medium tracking-wide text-amber-950 dark:text-amber-50 shadow-sm shadow-amber-500/10">
          {labels.tagOptIn}
        </span>
        <span className="rounded-full border border-teal-400/45 bg-gradient-to-r from-teal-500/12 to-emerald-500/10 dark:from-teal-400/18 dark:to-emerald-500/14 px-3 py-1 text-[10px] font-medium tracking-wide text-teal-950 dark:text-teal-50 shadow-sm shadow-teal-500/10">
          {labels.tagRaw}
        </span>
      </div>
    </div>
  );
}

export default function NetworkDefenseSection() {
  const { lang } = useLang();
  const tx = t[lang].networkDefense;

  return (
    <section className="relative section-landing overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 dark:text-white/55 font-light">{tx.label}</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extralight mt-4 tracking-tight text-gray-900 dark:text-white">
            {tx.title1} <span className="font-semibold">{tx.title2}</span>
          </h2>
          <p className="text-gray-600 dark:text-white/60 font-light max-w-2xl mx-auto mt-4 text-sm leading-relaxed">{tx.intro}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 pb-12">
            <MeshDiagram labels={tx.diagram} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
