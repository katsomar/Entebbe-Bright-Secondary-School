"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";

const newsItems = [
  {
    title: "Annual Science Fair 2026: Showcasing Young Innovators",
    category: "Academic",
    date: "May 15, 2026",
    image: "/hero/h1.png",
    excerpt: "Join us as our students present groundbreaking projects that solve real-world problems through science and technology.",
  },
  {
    title: "Regional Sports Championship: EBSS Takes Gold",
    category: "Sports",
    date: "April 20, 2026",
    image: "/hero/h2.png",
    excerpt: "Our basketball and soccer teams demonstrated exceptional skill and teamwork to bring home the regional trophies.",
  },
  {
    title: "New ICT Lab Commissioned by the Ministry",
    category: "Innovation",
    date: "March 10, 2026",
    image: "/hero/h3.png",
    excerpt: "We are proud to announce the opening of our state-of-the-art computer center, equipped with high-speed internet and AI tools.",
  },
];

const NewsSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="left">
              <SectionLabel>LATEST NEWS</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
                Stay Informed with <span className="text-gold-deep italic">Campus Updates</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="right">
            <GoldButton variant="ghost">View All News →</GoldButton>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-gold-md transition-all duration-500 group border border-gold-main/5">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gold-main text-charcoal px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-text-muted text-xs font-mono mb-4">
                    <Calendar size={14} className="mr-2 text-gold-deep" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4 group-hover:text-gold-deep transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-gold-deep font-bold text-sm group/link"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
