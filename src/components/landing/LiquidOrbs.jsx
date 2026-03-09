import { motion } from "framer-motion";

export default function LiquidOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large bright top-right orb */}
      <motion.div
        className="absolute rounded-full liquid-orb"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
          top: "-15%",
          right: "-15%",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-left orb */}
      <motion.div
        className="absolute rounded-full liquid-orb"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle at 60% 60%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, transparent 70%)",
          bottom: "-10%",
          left: "-10%",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -30, 40, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Center accent */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          top: "40%",
          left: "35%",
          filter: "blur(30px)",
        }}
        animate={{ scale: [1, 1.15, 0.9, 1], x: [0, 50, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small bright spot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "20%",
          filter: "blur(15px)",
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette edge darkening */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}