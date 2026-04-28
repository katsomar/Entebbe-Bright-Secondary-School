"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center font-bold text-charcoal text-3xl mb-8 shadow-gold-glow animate-pulse">
          EB
        </div>
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gold-main"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="mt-4 text-gold-main font-mono text-[10px] uppercase tracking-[0.3em] animate-pulse">
          Loading Excellence...
        </span>
      </motion.div>
    </div>
  );
}
