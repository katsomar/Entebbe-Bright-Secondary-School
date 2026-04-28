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
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  },
  olevel: {
    title: "O-Level (S1 - S4)",
    desc: "The Uganda National Curriculum designed to prepare students for the UCE examinations through diverse subject choices.",
    subjects: ["English", "Mathematics", "Biology", "Chemistry", "Physics", "History", "Geography", "ICT", "Entrepreneurship", "Art"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
  },
  alevel: {
    title: "A-Level (S5 - S6)",
    desc: "Advanced specialization in Arts or Sciences preparing students for University entrance and global opportunities.",
    subjects: ["General Paper", "Sub-Maths", "Biology", "Chemistry", "Physics", "Literature", "Economics", "History", "Divinity"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  }
};

const AcademicsPage = () => {
  return (
    <div className="pt-24 flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          alt="Academics Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Academic <span className="text-gold-main italic">Excellence</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {["S1 – S6", "National Curriculum", "UNEB Certified"].map((stat) => (
                <span key={stat} className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-mono uppercase tracking-widest">
                  {stat}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Curriculum Tabs */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel>OUR CURRICULUM</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
                Tailored Learning for <span className="text-gold-deep italic">Every Level</span>.
              </h2>
            </div>
          </ScrollReveal>

          <Tabs.Root defaultValue="olevel" className="w-full">
            <ScrollReveal>
              <Tabs.List className="flex justify-center space-x-4 mb-16 border-b border-gold-main/10">
                {["primary", "olevel", "alevel"].map((tab) => (
                  <Tabs.Trigger
                    key={tab}
                    value={tab}
                    className="px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all relative data-[state=active]:text-gold-deep group"
                  >
                    {tab === "olevel" ? "O-Level" : tab === "alevel" ? "A-Level" : "Primary"}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-deep scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
            </ScrollReveal>

            {Object.entries(curriculum).map(([key, data]) => (
              <Tabs.Content key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500 outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-gold-lg">
                    <Image src={data.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-heading font-bold text-charcoal mb-6">{data.title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed mb-10">{data.desc}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {data.subjects.map((subject) => (
                        <div key={subject} className="flex items-center space-x-3 text-text-muted bg-white p-4 rounded-2xl border border-gold-main/5 hover:border-gold-main/30 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-gold-main" />
                          <span className="text-sm font-bold">{subject}</span>
                        </div>
                      ))}
                    </div>
                    
                    <GoldButton className="w-full md:w-auto">
                      <Download size={18} className="mr-3" />
                      Download Curriculum PDF
                    </GoldButton>
                  </div>
                </div>
              </Tabs.Content>
            ))}
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
      </section>

      {/* Exam Results */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <Calculator size={400} className="text-gold-main absolute -right-20 -top-20 rotate-12" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <SectionLabel>OUR TRACK RECORD</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-16">
              Consistent <span className="text-gold-main italic">Academic Success</span>.
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { year: "2025", rate: "99.2%", label: "First Grade (O-Level)" },
              { year: "2024", rate: "98.5%", label: "University Entry (A-Level)" },
              { year: "2023", rate: "97.8%", label: "Overall Pass Rate" },
            ].map((res, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="relative">
                  <div className="flex justify-between items-center mb-4 font-mono uppercase tracking-widest text-xs text-white/60">
                    <span>Year {res.year} — {res.label}</span>
                    <span className="text-gold-main font-bold text-lg">{res.rate}</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: res.rate }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-gold rounded-full shadow-gold-glow"
                    />
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
