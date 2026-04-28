"use client";

import React from "react";
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
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="glass-card p-8 rounded-3xl text-center border border-white/5 hover:border-gold-main/30 transition-all duration-500 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-main transition-colors duration-500">
                  <stat.icon size={32} className="text-gold-main group-hover:text-charcoal transition-colors duration-500" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-gold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 font-mono text-xs uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gold-main/30 mx-auto rounded-full transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCardsSection;
