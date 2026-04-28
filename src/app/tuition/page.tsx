"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import * as Tabs from "@radix-ui/react-tabs";
import { Book, Coffee, Bed, Activity, CheckCircle2, AlertCircle, Phone, Mail } from "lucide-react";

const feeData = {
  primary: [
    { class: "Primary 1 - 3", tuition: "500,000", meals: "150,000", total: "650,000" },
    { class: "Primary 4 - 5", tuition: "600,000", meals: "150,000", total: "750,000" },
    { class: "Primary 6 - 7", tuition: "700,000", meals: "200,000", total: "900,000" },
  ],
  olevel: [
    { class: "Senior 1 - 2", tuition: "850,000", meals: "250,000", total: "1,100,000" },
    { class: "Senior 3 - 4", tuition: "950,000", meals: "250,000", total: "1,200,000" },
  ],
  alevel: [
    { class: "Senior 5 - 6 (Arts)", tuition: "1,100,000", meals: "300,000", total: "1,400,000" },
    { class: "Senior 5 - 6 (Sciences)", tuition: "1,250,000", meals: "300,000", total: "1,550,000" },
  ],
};

const TuitionPage = () => {
  return (
    <div className="pt-24 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071"
          alt="Tuition Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Invest in <span className="text-gold-main italic">Their Future</span>
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto font-body">
              Transparent, affordable, and value-driven education for the next generation of leaders.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content: Tabs & Tables */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <Tabs.Root defaultValue="olevel" className="w-full">
                  <Tabs.List className="flex space-x-2 bg-charcoal/5 p-1 rounded-full mb-12 max-w-md">
                    {["primary", "olevel", "alevel"].map((tab) => (
                      <Tabs.Trigger
                        key={tab}
                        value={tab}
                        className="flex-1 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all data-[state=active]:bg-gold-main data-[state=active]:text-charcoal text-text-muted hover:text-charcoal"
                      >
                        {tab === "olevel" ? "O-Level" : tab === "alevel" ? "A-Level" : "Primary"}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  {Object.entries(feeData).map(([key, classes]) => (
                    <Tabs.Content key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {classes.map((item, i) => (
                          <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gold-main/10 hover:shadow-gold-md hover:-translate-y-1 transition-all duration-300">
                            <h3 className="text-2xl font-heading font-bold text-charcoal mb-6 flex justify-between items-center">
                              {item.class}
                              <span className="text-xs bg-green-school/10 text-green-school px-3 py-1 rounded-full font-mono">Per Term</span>
                            </h3>
                            <div className="space-y-4 mb-8">
                              <div className="flex justify-between items-center py-3 border-b border-gold-light/20">
                                <span className="flex items-center text-text-muted"><Book size={18} className="mr-3 text-gold-main" /> Tuition Fee</span>
                                <span className="font-bold text-charcoal">UGX {item.tuition}</span>
                              </div>
                              <div className="flex justify-between items-center py-3 border-b border-gold-light/20">
                                <span className="flex items-center text-text-muted"><Coffee size={18} className="mr-3 text-gold-main" /> Meals & Snacks</span>
                                <span className="font-bold text-charcoal">UGX {item.meals}</span>
                              </div>
                              <div className="flex justify-between items-center py-3">
                                <span className="flex items-center text-text-muted"><Activity size={18} className="mr-3 text-gold-main" /> Activity Fee</span>
                                <span className="font-bold text-charcoal text-xs text-green-school">Included</span>
                              </div>
                            </div>
                            <div className="bg-charcoal p-6 rounded-2xl flex justify-between items-center">
                              <span className="text-white/60 font-mono text-sm uppercase">Total Payable</span>
                              <span className="text-gold-bright text-2xl font-bold font-display">UGX {item.total}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Tabs.Content>
                  ))}
                </Tabs.Root>
              </ScrollReveal>

              {/* Fee Notes */}
              <ScrollReveal delay={0.3}>
                <div className="mt-16 bg-green-school/5 border border-green-school/20 rounded-3xl p-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertCircle className="text-green-school" />
                    <h3 className="text-2xl font-heading font-bold text-charcoal">Important Fee Notes</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Boarding students pay an additional UGX 400,000 per term.",
                      "Bursaries are available for top-performing students.",
                      "Fees must be paid through the school's bank account.",
                      "Personal checks are not accepted for fee payment.",
                      "Uniforms and books are sold separately at the store.",
                      "Late payment fee of 5% applies after week 4.",
                    ].map((note, i) => (
                      <li key={i} className="flex items-start space-x-3 text-text-muted text-sm">
                        <CheckCircle2 size={16} className="text-gold-main shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-charcoal rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Book size={80} />
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-4 relative z-10">Admissions Office</h4>
                  <p className="text-white/60 text-sm mb-6 relative z-10">
                    Need help with the payment process or have questions about scholarships? Talk to our team.
                  </p>
                  <div className="space-y-4 mb-8 relative z-10">
                    <a href="tel:+256700000000" className="flex items-center space-x-3 text-gold-main hover:text-white transition-colors">
                      <Phone size={18} />
                      <span className="text-sm">+256 700 000 000</span>
                    </a>
                    <a href="mailto:finance@ebss.ac.ug" className="flex items-center space-x-3 text-gold-main hover:text-white transition-colors">
                      <Mail size={18} />
                      <span className="text-sm">finance@ebss.ac.ug</span>
                    </a>
                  </div>
                  <GoldButton className="w-full">Enquire Now</GoldButton>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gold-main/10 shadow-sm">
                  <h4 className="font-bold text-charcoal mb-4">Bank Details</h4>
                  <div className="space-y-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    <p><span className="text-gold-deep">Bank:</span> Stanbic Bank Uganda</p>
                    <p><span className="text-gold-deep">Acc Name:</span> Entebbe Bright School</p>
                    <p><span className="text-gold-deep">Acc Number:</span> 9030012345678</p>
                    <p><span className="text-gold-deep">Branch:</span> Entebbe Branch</p>
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
