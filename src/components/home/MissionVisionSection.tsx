"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Target, Eye, Gem, Award, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="py-24 bg-[#FFF8E7] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#B8860B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <SectionLabel>OUR PURPOSE</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-16 max-w-3xl mx-auto leading-tight">
            Guided by <span className="text-gold-deep">Vision</span>, Driven by <span className="text-orange-deep">Mission</span>.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Mission Card */}
          <ScrollReveal direction="left">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-charcoal p-10 rounded-3xl shadow-2xl relative border border-gold-main/20 text-left group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-gold-main" />
              </div>
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center text-charcoal mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-white font-heading text-3xl font-bold mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-gold-main mb-6 rounded-full" />
              <p className="text-white/70 text-lg leading-relaxed">
                To provide quality Education in a conducive enviroment that nurtures students into responsible citizens
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-gold-md relative border border-gold-main/10 text-left group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Eye size={120} className="text-gold-main" />
              </div>
              <div className="w-16 h-16 bg-green-school/10 rounded-2xl flex items-center justify-center text-green-school mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-charcoal font-heading text-3xl font-bold mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-green-school mb-6 rounded-full" />
              <p className="text-text-muted text-lg leading-relaxed">
                To be a leading Private Christian School in Uganda producing spiritually, disciplined, talented and self reliannt citizens who can fit in today's labour market.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Core Values with Animated Arrow Effect */}
        <div className="relative max-w-fit mx-auto px-12">
          {/* Subtle Path Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold-main/5 -translate-y-1/2 z-0" />
          
          {/* Moving Arrow */}
          <motion.div
            initial={{ left: "-5%", width: "0%", opacity: 0 }}
            whileInView={{
              left: ["-5%", "105%"],
              width: ["0%", "20%", "0%"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1.5
            }}
            className="absolute top-1/2 h-px bg-gradient-to-r from-transparent via-gold-main/50 to-gold-bright -translate-y-1/2 z-0"
          >
            {/* Arrow Head */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
              border-y-[3px] border-y-transparent 
              border-l-[6px] border-l-gold-bright
              shadow-[0_0_10px_rgba(255,215,0,0.8)]" 
            />
            {/* Glow Point */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full blur-[1px]" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {[
              { icon: Gem, label: "Integrity" },
              { icon: Award, label: "Excellence" },
              { icon: Lightbulb, label: "Innovation" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="relative group">
                  {/* Premium Energy Orb Trace */}
                  <div className="absolute -inset-[4px] pointer-events-none z-0">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Outer Glow Layer */}
                      <motion.rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        rx="50"
                        fill="none"
                        stroke="#FF8C00"
                        strokeWidth="12"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray="0 1"
                        className="opacity-40 blur-[4px]"
                        animate={{ strokeDashoffset: [0, -1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      {/* Secondary Glow */}
                      <motion.rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        rx="50"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="6"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray="0 1"
                        className="opacity-60 blur-[1px]"
                        animate={{ strokeDashoffset: [0, -1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      {/* Bright Core */}
                      <motion.rect
                        x="0"
                        y="0"
                        width="100"
                        height="100"
                        rx="50"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        pathLength={1}
                        strokeDasharray="0 1"
                        animate={{ strokeDashoffset: [0, -1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </svg>
                  </div>

                  <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-sm border border-gold-main/10 group-hover:shadow-gold-sm group-hover:-translate-y-1 transition-all duration-300 relative z-10">
                    <item.icon className="text-gold-main group-hover:scale-110 transition-transform" size={24} />
                    <span className="font-bold text-charcoal tracking-wide">{item.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
