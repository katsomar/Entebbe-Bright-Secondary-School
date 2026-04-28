"use client";
 
import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Play, Camera } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";
import { motion, AnimatePresence } from "framer-motion";
 
const photoItems = [
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

const videoItems = [
  {
    title: "A Glimpse into the Future: 2026 Campus Tour",
    category: "Campus Life",
    date: "June 01, 2026",
    image: "/hero/h3.png",
    excerpt: "Take a virtual tour of our futuristic campus facilities and see where the magic of learning happens every day.",
  },
  {
    title: "Student Testimonials: The EBSS Experience",
    category: "Voices",
    date: "May 28, 2026",
    image: "/wwa/wwa1.png",
    excerpt: "Hear directly from our students about how Entebbe Bright is shaping their character and preparing them for the world.",
  },
  {
    title: "Highlight Reel: Sports Day Finals",
    category: "Events",
    date: "April 25, 2026",
    image: "/hero/h2.png",
    excerpt: "Watch the most exciting moments from our annual sports day, featuring record-breaking performances in track and field.",
  },
];

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("videos");
  const items = activeTab === "photos" ? photoItems : videoItems;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative detail */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-main/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <span className="text-gold-deep font-body text-sm font-bold tracking-[0.3em] uppercase mb-4">
                Latest from Campus
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-charcoal mb-10 leading-tight">
                Our Stories in <span className="text-gold-main italic">Motion & Detail</span>.
              </h2>
              
              {/* Premium Tab Switcher */}
              <div className="flex bg-charcoal/5 p-1.5 rounded-full border border-charcoal/10 relative">
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                    activeTab === "videos" ? "text-white" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  <Play size={16} />
                  Videos
                </button>
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
                    activeTab === "photos" ? "text-white" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  <Camera size={16} />
                  Photos
                </button>
                {/* Sliding Background */}
                <motion.div
                  className="absolute inset-y-1.5 bg-charcoal rounded-full z-0"
                  initial={false}
                  animate={{
                    left: activeTab === "videos" ? "6px" : "calc(50% - 0px)",
                    right: activeTab === "videos" ? "calc(50% - 0px)" : "6px",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {items.map((item, i) => (
              <div key={i} className="group flex flex-col h-full bg-white border border-charcoal/5 hover:border-gold-main/20 rounded-[2rem] overflow-hidden transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    {activeTab === "videos" && (
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                        <Play fill="white" size={32} />
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-charcoal text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  {activeTab === "videos" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-gold-main/80 flex items-center justify-center text-charcoal shadow-xl">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                  )}
                </div>
                
                {activeTab === "photos" && (
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-charcoal/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <Calendar size={12} className="mr-2 text-gold-main" />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-charcoal mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-charcoal font-bold text-sm group/link border-t border-charcoal/5 pt-6"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 text-center">
          <GoldButton variant="outline" className="px-12">
            Explore Full Archive →
          </GoldButton>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
