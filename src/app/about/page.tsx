"use client";

import React, { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { GraduationCap, BookOpen, Shield, Users, Trophy, Lightbulb, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";

const leadership = [
  {
    name: "Dr. Richard Ssekandi",
    role: "Director",
    image: "/hero/h1.png",
    quote: "Our goal is to create a generation of thinkers who are not afraid to challenge the status quo and lead with integrity.",
  },
  {
    name: "Mrs. Alice Namutebi",
    role: "Principal",
    image: "/hero/h2.png",
    quote: "Academic excellence is the foundation, but character development is the soul of Entebbe Bright Secondary School.",
  },
  {
    name: "Mr. Joseph Okello",
    role: "Head Teacher",
    image: "/hero/h3.png",
    quote: "We believe in the potential of every student. Our role is to provide the spark that ignites their passion for discovery.",
  },
];

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white selection:bg-gold-main/30">
      {/* Cinematic Refined Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal pt-20">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero/h1.png"
            alt="Campus Overview"
            fill
            priority
            className="object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            {/* Elegant Letter Reveal Title */}
            <div className="overflow-hidden mb-4">
              <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-display font-bold text-white leading-none relative"
              >
                About <span className="text-gold-main italic">Us</span>
                
                {/* Nice Visual Effect: Sweep Over Light */}
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                />
              </motion.h1>
            </div>

            {/* Descriptive Subtext (As requested from Screen shot) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-white/70 text-lg md:text-xl font-body max-w-2xl mx-auto mt-8 leading-relaxed"
            >
              A legacy of excellence, a future of innovation. Welcome to Uganda's premier institution for character and academic brilliance.
            </motion.p>
          </ScrollReveal>
        </div>

        {/* Subtle Bottom Border Detail */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      </section>

      {/* Magazine Style History */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-40 -left-20 text-[40vw] font-display font-black text-charcoal leading-none">
            1994
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="left">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[15px] border-white">
                  <Image
                    src="/wwa/wwa1.png"
                    alt="School Building"
                    width={800}
                    height={1000}
                    className="object-cover"
                  />
                </div>
                {/* Decorative floating card */}
                <div className="absolute -bottom-10 -right-10 bg-gold-main p-10 rounded-[2rem] shadow-2xl hidden md:block max-w-[300px] z-20">
                  <h3 className="text-charcoal font-display font-bold text-3xl mb-4">30+ Years</h3>
                  <p className="text-charcoal/80 text-sm font-body font-medium leading-relaxed">
                    of dedication to nurturing the next generation of African leaders and innovators.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal direction="right">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="h-px w-12 bg-gold-main/40" />
                  <span className="text-gold-main font-body text-sm font-bold tracking-[0.3em] uppercase">Our Journey</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-charcoal mb-10 leading-[1.1]">
                  Building a Foundation of <span className="text-gold-main italic">Brilliance</span>.
                </h2>
                <p className="text-charcoal/60 text-xl font-body leading-relaxed mb-8">
                  Founded in the heart of Entebbe, our institution began with a simple yet powerful mission: to provide world-class education that balances academic rigor with moral integrity.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 p-6 rounded-3xl bg-cream/50 border border-gold-main/10 hover:border-gold-main/30 transition-all">
                    <div className="w-12 h-12 bg-gold-main rounded-2xl flex items-center justify-center text-white shrink-0 shadow-gold-sm">
                      <BookOpen size={24} />
                    </div>
                    <p className="text-charcoal/70 text-base leading-relaxed">
                      We pioneered integrated learning models that combine traditional Ugandan values with global technological standards.
                    </p>
                  </div>
                  <div className="flex items-start space-x-6 p-6 rounded-3xl bg-cream/50 border border-gold-main/10 hover:border-gold-main/30 transition-all">
                    <div className="w-12 h-12 bg-gold-main rounded-2xl flex items-center justify-center text-white shrink-0 shadow-gold-sm">
                      <GraduationCap size={24} />
                    </div>
                    <p className="text-charcoal/70 text-base leading-relaxed">
                      Over 10,000 alumni are now leading in various fields across the globe, from medicine and law to innovation and the arts.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Editorial */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-main/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <ScrollReveal>
              <span className="text-gold-main font-body text-sm font-bold tracking-[0.3em] uppercase mb-6 block">Our Visionaries</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Guided by <span className="text-gold-main italic">Expertise</span>.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {leadership.map((leader, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="group relative">
                  <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-white/10 group-hover:border-gold-main/30 transition-all duration-700">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-8 left-8 right-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-4 py-1.5 bg-gold-main text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 shadow-xl">
                        {leader.role}
                      </span>
                      <h4 className="text-white text-3xl font-display font-bold">{leader.name}</h4>
                    </div>
                  </div>
                  
                  <div className="relative p-8 rounded-[2rem] bg-white/5 border border-white/10 group-hover:bg-white transition-all duration-500">
                    <p className="text-white group-hover:text-charcoal font-body italic text-base leading-relaxed relative z-10">
                      "{leader.quote}"
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid - Refined */}
      <section className="py-32 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Integrity", text: "We uphold the highest ethical standards in all our actions." },
              { icon: Trophy, title: "Excellence", text: "We strive for perfection in everything we do." },
              { icon: Lightbulb, title: "Innovation", text: "We embrace new ideas and creative problem-solving." },
              { icon: Users, title: "Community", text: "We foster a sense of belonging and mutual support." },
              { icon: BookOpen, title: "Curiosity", text: "We encourage a lifelong love for learning and discovery." },
              { icon: GraduationCap, title: "Leadership", text: "We nurture the leaders of tomorrow." },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-gold-md transition-all duration-500 group border border-gold-main/5">
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold-main transition-all duration-500 shadow-sm group-hover:shadow-gold-sm">
                    <value.icon className="text-gold-main group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-charcoal mb-4">{value.title}</h4>
                  <p className="text-charcoal/60 text-base leading-relaxed font-body">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-charcoal rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-main/10 blur-[80px] rounded-full" />
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Become Part of Our <br />
                <span className="text-gold-main italic">Next Chapter</span>.
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto font-body">
                Admissions for the 2026/2027 academic year are now open. Secure your child's future today.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <GoldButton className="px-12 py-5 text-lg">Apply for Admission</GoldButton>
                <GoldButton variant="outline" className="px-12 py-5 text-lg border-white/20 text-white hover:bg-white hover:text-charcoal">Download Prospectus</GoldButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
