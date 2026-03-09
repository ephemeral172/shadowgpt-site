import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="glass rounded-lg p-2">
              <Shield className="w-4 h-4 text-white/40" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-light text-white/40">ShadowGPT</span>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-xs text-white/15 font-light">shadowgpt.app</span>
            <span className="text-xs text-white/15 font-light">© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}