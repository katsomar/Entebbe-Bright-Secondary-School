"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldButton from "@/components/ui/GoldButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, ShieldCheck, GraduationCap } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with floating badges */}
          <div className="relative">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-gold-lg border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071"
                  alt="School Campus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gold-main/10" />
              </div>
            </ScrollReveal>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-charcoal p-6 rounded-2xl shadow-xl border border-gold-main z-20 hidden md:block"
            >
              <div className="text-gold-main font-display text-3xl font-bold">Est. 1994</div>
              <div className="text-white/60 text-xs font-mono tracking-widest uppercase">Legacy of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-gold-md z-20 flex items-center space-x-4 border border-gold-main/20 hidden md:flex"
            >
              <div className="w-12 h-12 bg-green-school/10 rounded-full flex items-center justify-center text-green-school">
                <ShieldCheck size={28} />
              </div>
              <div>
                <div className="text-charcoal font-bold">Top Performing School</div>
                <div className="text-gold-deep text-sm font-mono italic">UNEB Certified Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col items-start">
            <ScrollReveal direction="right">
              <SectionLabel>WHO WE ARE</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 leading-tight">
                A Tradition of <span className="text-gold-deep italic">Academic Excellence</span> and Character Building.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Entebbe Bright Secondary School is more than just an educational institution. It is a sanctuary of learning where we nurture young minds to become innovative thinkers, ethical leaders, and responsible global citizens.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 bg-gold-main/10 p-2 rounded-lg text-gold-deep group-hover:bg-gold-main group-hover:text-white transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Holistic Education</h4>
                    <p className="text-text-muted text-sm">We focus on intellectual, emotional, and social development through a balanced curriculum.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 bg-gold-main/10 p-2 rounded-lg text-gold-deep group-hover:bg-gold-main group-hover:text-white transition-colors">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Expert Faculty</h4>
                    <p className="text-text-muted text-sm">Our dedicated educators bring years of experience and passion to the classroom.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="mt-1 bg-gold-main/10 p-2 rounded-lg text-gold-deep group-hover:bg-gold-main group-hover:text-white transition-colors">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Modern Facilities</h4>
                    <p className="text-text-muted text-sm">Equipped with state-of-the-art labs, libraries, and sports complexes for a superior experience.</p>
                  </div>
                </div>
              </div>

              <GoldButton size="lg">Learn More About Us →</GoldButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
