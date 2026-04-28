"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { BookOpen, GraduationCap, Building, FlaskConical, Languages, Calculator, Palette, Microscope, Download } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";

const curriculum = {
  primary: {
    title: "Primary Education",
    desc: "A solid foundation focused on literacy, numeracy, and basic life skills in a nurturing environment.",
    subjects: ["English Language", "Mathematics", "Science", "Social Studies", "Religious Education", "Physical Education"],
    image: "/hero/h1.png"
  },
  olevel: {
    title: "O-Level (S1 - S4)",
    desc: "The Uganda National Curriculum designed to prepare students for the UCE examinations through diverse subject choices.",
    subjects: ["English", "Mathematics", "Biology", "Chemistry", "Physics", "History", "Geography", "ICT", "Entrepreneurship", "Art"],
    image: "/hero/h2.png"
  },
  alevel: {
    title: "A-Level (S5 - S6)",
    desc: "Advanced specialization in Arts or Sciences preparing students for University entrance and global opportunities.",
    subjects: ["General Paper", "Sub-Maths", "Biology", "Chemistry", "Physics", "Literature", "Economics", "History", "Divinity"],
    image: "/hero/h3.png"
  }
};

const AcademicsPage = () => {
  return (
    <div className="bg-white selection:bg-gold-main/30">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-charcoal pt-24">
        <Image
          src="/hero/h1.png"
          alt="Academics Hero"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            {/* Elegant Letter Reveal (Matching About Page Style) */}
            <div className="overflow-hidden mb-4">
              <motion.h1 
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-display font-bold text-white leading-none"
              >
                Academic <span className="text-gold-main italic">Excellence</span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              {["S1 – S6", "National Curriculum", "UNEB Certified"].map((stat) => (
                <span key={stat} className="px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                  {stat}
                </span>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>
        
        {/* Subtle Bottom Border Detail */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      </section>      {/* Curriculum Showcase */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Large Decorative Background Text */}
        <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-[0.03] select-none">
          <div className="text-[30vw] font-display font-black text-charcoal leading-none">
            ACADEMIA
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px w-12 bg-gold-main/40" />
                <span className="text-gold-main font-body text-sm font-bold tracking-[0.3em] uppercase">The Learning Path</span>
                <div className="h-px w-12 bg-gold-main/40" />
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-charcoal leading-tight">
                Our Academic <span className="text-gold-main italic">Curriculum</span>.
              </h2>
            </div>
          </ScrollReveal>

          <Tabs.Root defaultValue="olevel" className="w-full">
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Vertical Side Navigation */}
              <div className="lg:w-1/4">
                <ScrollReveal direction="left">
                  <Tabs.List className="flex flex-col space-y-4">
                    {[
                      { id: "primary", label: "Primary Education", sub: "Foundation Years" },
                      { id: "olevel", label: "O-Level (S1-S4)", sub: "Core Development" },
                      { id: "alevel", label: "A-Level (S5-S6)", sub: "Advanced Specialization" }
                    ].map((tab) => (
                      <Tabs.Trigger
                        key={tab.id}
                        value={tab.id}
                        className="flex flex-col items-start p-8 rounded-[2rem] text-left transition-all duration-500 group border border-transparent data-[state=active]:bg-charcoal data-[state=active]:border-gold-main/30 data-[state=active]:shadow-2xl"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-main mb-1 group-data-[state=active]:text-gold-main group-data-[state=inactive]:text-charcoal/40 transition-colors">
                          {tab.sub}
                        </span>
                        <span className="text-xl font-display font-bold group-data-[state=active]:text-white group-data-[state=inactive]:text-charcoal transition-colors">
                          {tab.label}
                        </span>
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                </ScrollReveal>
              </div>

              {/* Immersive Content Area */}
              <div className="lg:w-3/4">
                {Object.entries(curriculum).map(([key, data]) => (
                  <Tabs.Content key={key} value={key} className="animate-in fade-in slide-in-from-right-8 duration-700 outline-none">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                      <div className="xl:col-span-7">
                        <h3 className="text-4xl font-display font-bold text-charcoal mb-6">{data.title}</h3>
                        <p className="text-charcoal/60 text-lg leading-relaxed mb-12 max-w-2xl">
                          {data.desc}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {data.subjects.map((subject, idx) => (
                            <motion.div 
                              key={subject}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center space-x-4 p-5 rounded-2xl bg-cream/40 border border-gold-main/10 hover:border-gold-main/30 hover:bg-white hover:shadow-gold-sm transition-all group"
                            >
                              <div className="w-8 h-8 rounded-full bg-gold-main/10 flex items-center justify-center text-gold-main text-[10px] font-bold group-hover:bg-gold-main group-hover:text-white transition-all">
                                {idx + 1}
                              </div>
                              <span className="text-sm font-bold text-charcoal/80">{subject}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="mt-12">
                          <GoldButton className="px-10 py-5">
                            <Download size={20} className="mr-3" />
                            Full Prospectus PDF
                          </GoldButton>
                        </div>
                      </div>

                      <div className="xl:col-span-5 relative">
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                          <Image src={data.image} alt={data.title} fill className="object-cover" />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-main rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white rotate-12">
                          <GraduationCap size={40} />
                        </div>
                      </div>
                    </div>
                  </Tabs.Content>
                ))}
              </div>
            </div>
          </Tabs.Root>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: GraduationCap, title: "Expert Teachers", text: "Our educators are specialists in their fields, dedicated to student success." },
              { icon: Building, title: "Modern Facilities", text: "Equipped with state-of-the-art laboratories, libraries, and tech centers." },
              { icon: FlaskConical, title: "Practical Learning", text: "We emphasize hands-on experiments and real-world application of concepts." },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-3xl bg-cream border border-gold-main/5 hover:shadow-gold-sm transition-all duration-500 group text-center">
                  <div className="w-16 h-16 bg-gold-main/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-main transition-colors">
                    <feature.icon className="text-gold-deep group-hover:text-charcoal transition-colors" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">{feature.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>      {/* Exam Results - Circular Gallery */}
      <section className="py-32 bg-charcoal text-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-main/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ScrollReveal>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="h-px w-10 bg-gold-main/40" />
                <span className="text-gold-main font-body text-xs font-bold tracking-[0.3em] uppercase">Our Track Record</span>
                <div className="h-px w-10 bg-gold-main/40" />
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
                Consistent <span className="text-gold-main italic">Academic Success</span>.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { year: "2025", rate: 99.2, label: "First Grade", sub: "O-Level (UCE)" },
              { year: "2024", rate: 98.5, label: "University Entry", sub: "A-Level (UACE)" },
              { year: "2023", rate: 97.8, label: "Overall Pass Rate", sub: "National Rank" },
            ].map((res, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="flex flex-col items-center text-center group">
                  {/* Premium Circular Ring */}
                  <div className="relative w-56 h-56 mb-10 flex items-center justify-center">
                    <svg className="w-full h-full rotate-[-90deg]">
                      {/* Outer Track */}
                      <circle
                        cx="112"
                        cy="112"
                        r="100"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        className="text-white/5"
                      />
                      {/* Progress Track */}
                      <motion.circle
                        cx="112"
                        cy="112"
                        r="100"
                        stroke="url(#goldGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 100}
                        initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 100 * (1 - res.rate / 100) }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#C5A059" />
                          <stop offset="100%" stopColor="#D4AF37" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Glowing Diamond Tip */}
                    <motion.div
                      initial={{ opacity: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, rotate: (res.rate / 100) * 360 - 90 }}
                      transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-main rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                    </motion.div>

                    {/* Center Percentage */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-display font-bold text-white">{res.rate}</span>
                        <span className="text-gold-main font-display font-bold text-xl ml-0.5">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Label Group */}
                  <div className="space-y-2">
                    <span className="text-gold-main font-body text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">Year {res.year}</span>
                    <h4 className="text-2xl font-display font-bold text-white group-hover:text-gold-main transition-colors">{res.label}</h4>
                    <p className="text-white/40 text-sm font-body uppercase tracking-widest">{res.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
