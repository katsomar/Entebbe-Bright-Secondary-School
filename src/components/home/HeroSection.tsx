"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import { ChevronDown } from "lucide-react";

const heroImages = [
  "/hero/h1.png",
  "/hero/h2.png",
  "/hero/h3.png",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const titleWords = "Shaping Tomorrow's Leaders, Today.".split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-wrap justify-center mb-6">
            {titleWords.map((word, i) => (
              <motion.h1
                key={i}
                variants={wordVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mr-4 last:mr-0 leading-tight"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.div
            variants={wordVariants}
            className="h-1 w-24 bg-gradient-gold mx-auto mb-8 rounded-full shadow-gold-glow"
          />

          <motion.p
            variants={wordVariants}
            className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering the next generation with cutting-edge education, values, and leadership skills for a brighter future.
          </motion.p>

          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <GoldButton size="lg" className="w-full sm:w-auto">
              Explore Our School
            </GoldButton>
            <GoldButton variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:border-white">
              Apply Now
            </GoldButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-charcoal/50 backdrop-blur-sm border-t border-white/10 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-12 px-12">
              <span className="text-gold-main font-mono text-sm tracking-widest flex items-center">
                <span className="w-2 h-2 bg-gold-main rounded-full mr-3 animate-pulse" />
                EXCELLENCE
              </span>
              <span className="text-gold-main font-mono text-sm tracking-widest flex items-center">
                <span className="w-2 h-2 bg-gold-main rounded-full mr-3 animate-pulse" />
                INNOVATION
              </span>
              <span className="text-gold-main font-mono text-sm tracking-widest flex items-center">
                <span className="w-2 h-2 bg-gold-main rounded-full mr-3 animate-pulse" />
                CHARACTER
              </span>
              <span className="text-gold-main font-mono text-sm tracking-widest flex items-center">
                <span className="w-2 h-2 bg-gold-main rounded-full mr-3 animate-pulse" />
                COMMUNITY
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-gold-main transition-colors"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative Particles */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-bright rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
