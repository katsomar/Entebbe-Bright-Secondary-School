"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Book, Building, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react";

const feeData = {
  olevel: [
    { class: "Senior 1 - 2", tuition: "850,000", total: "850,000" },
    { class: "Senior 3 - 4", tuition: "950,000", total: "950,000" },
  ],
  alevel: [
    { class: "Senior 5 - 6 (Arts)", tuition: "1,100,000", total: "1,100,000" },
    { class: "Senior 5 - 6 (Sciences)", tuition: "1,250,000", total: "1,250,000" },
  ],
};

const TuitionPage = () => {
  return (
    <div className="bg-white selection:bg-gold-main/30 flex flex-col min-h-screen">
      {/* Cinematic Banner */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-charcoal pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/h1.png"
            alt="Tuition Hero"
            fill
            priority
            className="object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-display font-bold text-white leading-none"
              >
                Invest in <br />
                <span className="text-gold-main italic leading-tight text-4xl md:text-7xl">Their Future</span>
              </motion.h1>
            </div>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed">
              Transparent, affordable, and value-driven education for the next generation of global leaders.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      </section>

      {/* Fee Structure Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
            {/* Main Content: Tabs & Tables */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Tabs.Root defaultValue="olevel" className="w-full">
                  <Tabs.List className="flex space-x-2 bg-cream p-2 rounded-[2rem] border border-gold-main/10 mb-16 max-w-md">
                    {["olevel", "alevel"].map((tab) => (
                      <Tabs.Trigger
                        key={tab}
                        value={tab}
                        className="flex-1 px-8 py-3 rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.2em] transition-all data-[state=active]:bg-charcoal data-[state=active]:text-white text-charcoal/40 hover:text-charcoal"
                      >
                        {tab === "olevel" ? "O-Level" : "A-Level"}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  {Object.entries(feeData).map(([key, classes]) => (
                    <Tabs.Content key={key} value={key} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {classes.map((item, i) => (
                          <div key={i} className="bg-cream/40 rounded-[2.5rem] p-10 border border-gold-main/5 hover:border-gold-main/20 hover:shadow-gold-sm transition-all duration-500 group">
                            <div className="flex justify-between items-start mb-10">
                              <h3 className="text-3xl font-display font-bold text-charcoal">{item.class}</h3>
                              <span className="text-[10px] font-bold text-gold-main uppercase tracking-widest bg-gold-main/5 px-4 py-1.5 rounded-full border border-gold-main/10">Per Term</span>
                            </div>
                            
                            <div className="space-y-6 mb-12">
                              <div className="flex justify-between items-center py-4 border-b border-gold-main/10">
                                <span className="flex items-center text-charcoal/60 font-body"><Book size={20} className="mr-4 text-gold-main" /> Tuition Fee</span>
                                <span className="font-bold text-charcoal tracking-tight">UGX {item.tuition}</span>
                              </div>

                              <div className="flex justify-between items-center py-4 border-b border-gold-main/10">
                                <span className="flex items-center text-charcoal/60 font-body"><Building size={20} className="mr-4 text-gold-main" /> Development Fee</span>
                                <span className="font-bold text-gold-main text-xs uppercase tracking-widest">Included</span>
                              </div>
                            </div>

                            <div className="bg-charcoal p-8 rounded-[2rem] flex flex-col space-y-2 relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <CheckCircle2 size={100} className="text-white" />
                              </div>
                              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">Total Payable</span>
                              <span className="text-gold-main text-4xl font-bold font-display tracking-tight">UGX {item.total}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Tabs.Content>
                  ))}
                </Tabs.Root>
              </ScrollReveal>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-charcoal rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-main/10 rounded-full blur-3xl" />
                  <h4 className="text-2xl font-display font-bold mb-6 relative z-10">Admissions</h4>
                  <p className="text-white/50 text-sm mb-10 leading-relaxed relative z-10">
                    Need help with the payment process or have questions about scholarships?
                  </p>
                  <div className="space-y-6 mb-12 relative z-10">
                    <a href="tel:+256700000000" className="flex items-center space-x-4 text-gold-main hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-main transition-all">
                        <Phone size={18} className="group-hover:text-charcoal" />
                      </div>
                      <span className="text-sm font-bold tracking-tight">+256 700 000 000</span>
                    </a>
                    <a href="mailto:finance@ebss.ac.ug" className="flex items-center space-x-4 text-gold-main hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-main transition-all">
                        <Mail size={18} className="group-hover:text-charcoal" />
                      </div>
                      <span className="text-sm font-bold tracking-tight">finance@ebss.ac.ug</span>
                    </a>
                  </div>
                  <GoldButton className="w-full py-4 text-sm uppercase tracking-widest">Enquire Now</GoldButton>
                </div>

                <div className="bg-cream/40 rounded-[2.5rem] p-10 border border-gold-main/10 shadow-sm">
                  <h4 className="font-display font-bold text-charcoal mb-6 text-xl">Bank Details</h4>
                  <div className="space-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-charcoal/60">
                    <p><span className="text-gold-main block mb-1">Bank:</span> Stanbic Bank Uganda</p>
                    <p><span className="text-gold-main block mb-1">Acc Name:</span> Entebbe Bright School</p>
                    <p><span className="text-gold-main block mb-1">Acc Number:</span> 9030012345678</p>
                    <p><span className="text-gold-main block mb-1">Branch:</span> Entebbe Branch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TuitionPage;
