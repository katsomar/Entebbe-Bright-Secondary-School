"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageCard from "@/components/ui/ImageCard";
import GoldButton from "@/components/ui/GoldButton";

const campusLife = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
    alt: "Students in Classroom",
    category: "Academics",
    title: "Modern Learning Environments",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076",
    alt: "Sports Day",
    category: "Sports",
    title: "Athletic Excellence",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070",
    alt: "Science Lab",
    category: "Innovation",
    title: "Practical Discovery",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071",
    alt: "School Library",
    category: "Library",
    title: "Infinite Knowledge",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const LifeAtCampusSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="left">
              <SectionLabel>OUR WORLD</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                Discover the Vibrant <span className="text-gold-deep italic">Campus Life</span>.
              </h2>
              <p className="text-text-muted text-lg">
                Experience a world of opportunities beyond the classroom. From sports and arts to leadership and community service.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <GoldButton variant="outline">View Full Gallery →</GoldButton>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {campusLife.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={item.className}>
              <ImageCard
                src={item.src}
                alt={item.alt}
                category={item.category}
                title={item.title}
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtCampusSection;
