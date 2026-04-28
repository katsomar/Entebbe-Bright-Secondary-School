"use client";

import React from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageCard from "@/components/ui/ImageCard";
import GoldButton from "@/components/ui/GoldButton";

const campusLife = [
  {
    src: "/hero/h1.png",
    alt: "Students in Classroom",
    category: "Academics",
    title: "Modern Learning Environments",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/hero/h2.png",
    alt: "Sports Day",
    category: "Sports",
    title: "Athletic Excellence",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/hero/h3.png",
    alt: "Science Lab",
    category: "Innovation",
    title: "Practical Discovery",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/wwa/wwa1.png",
    alt: "School Library",
    category: "Library",
    title: "Infinite Knowledge",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const LifeAtCampusSection = () => {
  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-[20vw] font-display font-black text-white select-none leading-none">
          CAMPUS
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-main/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* New Architectural Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <ScrollReveal>
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-px w-12 bg-gold-main/40" />
              <span className="text-gold-main font-body text-sm font-bold tracking-[0.3em] uppercase">
                Life at Entebbe Bright
              </span>
              <div className="h-px w-12 bg-gold-main/40" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 max-w-4xl leading-[1.1]">
              A Vibrant Community <br />
              <span className="text-gold-main italic">Beyond Academics</span>.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
              <p className="text-white/60 text-lg leading-relaxed md:text-left md:border-l border-gold-main/30 md:pl-8">
                Experience a world of opportunities where character is built, talents are discovered, and lifelong friendships are forged in a futuristic environment.
              </p>
              <GoldButton variant="outline" className="border-gold-main/30 text-white hover:bg-gold-main hover:text-charcoal flex-shrink-0">
                Full Gallery →
              </GoldButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Organized Benton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {campusLife.map((item, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.1} 
              className={
                i === 0 ? "md:col-span-8 md:row-span-2" :
                i === 1 ? "md:col-span-4 md:row-span-1" :
                i === 2 ? "md:col-span-4 md:row-span-1" :
                "md:col-span-12 md:row-span-1"
              }
            >
              <div className="relative h-full w-full rounded-3xl overflow-hidden group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-gold-main text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                    {item.category}
                  </span>
                  <h4 className="text-white text-2xl font-display font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtCampusSection;
