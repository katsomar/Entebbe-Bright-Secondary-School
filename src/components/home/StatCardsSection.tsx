"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Users, BookOpen, GraduationCap, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 2000, suffix: "+", label: "Students Enrolled" },
  { icon: GraduationCap, value: 150, suffix: "+", label: "Expert Faculty" },
  { icon: BookOpen, value: 30, suffix: "+", label: "Years of Excellence" },
  { icon: Trophy, value: 98, suffix: "%", label: "National Pass Rate" },
];

const StatCardsSection = () => {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.2) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const isLast = i === stats.length - 1;
            
            return (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <div className="glass-card p-8 rounded-3xl text-center border border-white/5 hover:border-gold-main/30 transition-all duration-500 group h-full flex flex-col justify-center">
                  {!isLast ? (
                    <>
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-main transition-colors duration-500">
                        <stat.icon size={32} className="text-gold-main group-hover:text-charcoal transition-colors duration-500" />
                      </div>
                      <div className="text-4xl md:text-5xl font-display font-bold text-gold-main mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                    </>
                  ) : (
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <svg className="w-full h-full transform -rotate-90 overflow-visible" viewBox="0 0 128 128">
                        <defs>
                          <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#B8860B" />
                            <stop offset="100%" stopColor="#FFD700" />
                          </linearGradient>
                          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        {/* Background Track */}
                        <circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="8"
                          fill="none"
                        />
                        {/* Glow Layer */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="url(#statGradient)"
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          className="opacity-20 blur-[4px]"
                          initial={{ strokeDasharray: "0 339" }}
                          whileInView={{ strokeDasharray: `${(stat.value / 100) * 339} 339` }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        {/* Main Progress Bar */}
                        <motion.circle
                          cx="64"
                          cy="64"
                          r="54"
                          stroke="url(#statGradient)"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 339" }}
                          whileInView={{ strokeDasharray: `${(stat.value / 100) * 339} 339` }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        {/* Glowing Gold Diamond Tip */}
                        <motion.rect
                          x="60"
                          y="6"
                          width="8"
                          height="8"
                          fill="#FFD700"
                          className="shadow-[0_0_15px_#FFD700]"
                          initial={{ rotate: 45, opacity: 0 }}
                          whileInView={{ 
                            rotate: [(stat.value / 100) * 360 + 45],
                            opacity: 1
                          }}
                          style={{ originX: "64px", originY: "64px" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-4xl font-display font-bold text-gold-main drop-shadow-gold">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="text-white/60 font-body text-sm font-semibold uppercase tracking-[0.2em] mt-auto">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatCardsSection;
