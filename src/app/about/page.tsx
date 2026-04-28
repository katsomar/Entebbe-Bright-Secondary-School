"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { GraduationCap, BookOpen, Shield, Users, Trophy, Lightbulb } from "lucide-react";

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
  {
    name: "Ms. Brenda Atwine",
    role: "Director of Studies (DOS)",
    image: "/wwa/wwa1.png",
    quote: "Curriculum innovation and practical learning are at the heart of our academic strategy for the 21st century.",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-24 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero/h1.png"
          alt="About Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="down">
            <div className="flex items-center justify-center space-x-2 text-white/60 mb-4 font-mono text-xs tracking-widest uppercase">
              <span>Home</span>
              <span>/</span>
              <span className="text-gold-main">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our <span className="text-gold-main italic">Legacy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* History / Ethos */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-gold-lg">
                <Image
                  src="/wwa/wwa1.png"
                  alt="School Ethos"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <SectionLabel>OUR STORY</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                Established for <span className="text-gold-deep italic">Excellence</span>.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Founded in 1994, Entebbe Bright Secondary School began with a vision to revolutionize education in Uganda. What started as a small community initiative has grown into one of the country's most respected institutions.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Our ethos is rooted in the belief that every child is unique and has the capacity to lead. We combine traditional values with modern pedagogical approaches to create an environment where students thrive both academically and socially.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>LEADERSHIP</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
              Guided by <span className="text-gold-deep italic">Visionary Leaders</span>.
            </h2>
          </div>

          <div className="space-y-24">
            {leadership.map((leader, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
                  <div className="w-full lg:w-1/3 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-gold-light/20">
                    <Image src={leader.image} alt={leader.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
                    <span className="px-4 py-1 bg-gold-main text-charcoal rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-4">
                      {leader.role}
                    </span>
                    <h3 className="text-3xl font-heading font-bold text-charcoal mb-4">{leader.name}</h3>
                    <div className="w-16 h-1 bg-gold-main mb-6 rounded-full" />
                    <p className="text-2xl font-heading italic text-text-muted leading-relaxed relative">
                      <span className="text-6xl text-gold-main/20 absolute -top-8 -left-4 font-serif">"</span>
                      {leader.quote}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
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
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-gold-sm transition-all duration-500 group border border-gold-main/5 text-center">
                  <div className="w-16 h-16 bg-green-school/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-school transition-colors">
                    <value.icon className="text-green-school group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-4">{value.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
