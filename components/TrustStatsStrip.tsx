'use client';

import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: "500+", label: "INSTALLATIONS" },
  { value: "25-Year", label: "WARRANTY" },
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "1,200+", label: "HAPPY CUSTOMERS" },
];

export default function TrustStatsStrip() {
  return (
    <section className="bg-[#050505] border-t border-b border-white/5 py-16 md:py-20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index }: { stat: typeof stats[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col items-center justify-center p-8 md:p-10 lg:p-12 group text-center"
    >
      <motion.span 
        className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-semibold md:font-bold text-zippy-gold mb-3 md:mb-4 lg:mb-5 leading-[1.1] whitespace-nowrap transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,193,7,0.3)]"
      >
        {stat.value}
      </motion.span>
      <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-medium md:font-semibold text-[#A0A0A0] uppercase tracking-[0.4em] lg:tracking-[0.55em] leading-tight">
        {stat.label}
      </span>
    </motion.div>
  );
}
