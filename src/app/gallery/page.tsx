"use client";

import React, { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Sports", "Academics", "Events", "Arts", "Trips"];

const galleryImages = [
  { src: "/hero/h1.png", category: "Academics", title: "Students in Study Group" },
  { src: "/hero/h2.png", category: "Sports", title: "Inter-House Football Final" },
  { src: "/hero/h3.png", category: "Academics", title: "Chemistry Lab Session" },
  { src: "/wwa/wwa1.png", category: "Academics", title: "Research Project" },
  { src: "/hero/h1.png", category: "Sports", title: "Basketball Championship" },
  { src: "/hero/h2.png", category: "Events", title: "ICT Lab Opening" },
  { src: "/hero/h3.png", category: "Events", title: "Annual Science Fair" },
  { src: "/wwa/wwa1.png", category: "Trips", title: "Geographical Field Trip" },
  { src: "/hero/h1.png", category: "Arts", title: "Drama Performance" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white selection:bg-gold-main/30 flex flex-col min-h-screen">
      {/* Cinematic Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/h2.png"
            alt="Gallery Background"
            fill
            priority
            className="object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            {/* Elegant Letter Reveal Title */}
            <div className="overflow-hidden mb-6">
              <motion.h1 
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-8xl font-display font-bold text-white leading-none"
              >
                Capturing <span className="text-gold-main italic leading-tight">Greatness</span>
              </motion.h1>
            </div>
            
            {/* Redesigned Category Filters */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border ${
                    activeCategory === cat
                      ? "bg-gold-main border-gold-main text-charcoal shadow-gold-sm"
                      : "bg-white/5 border-white/10 text-white/60 hover:border-gold-main/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Subtle Bottom Border Detail */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg border-4 border-white"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-gold-main text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
                      {image.category}
                    </span>
                    <h4 className="text-white text-xl font-heading font-bold">{image.title}</h4>
                    <ZoomIn className="text-gold-main absolute top-8 right-8" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog.Root open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-[100] animate-in fade-in duration-300" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] w-[95vw] h-[90vh] flex flex-col items-center justify-center outline-none animate-in zoom-in-95 duration-300">
            <Dialog.Title className="sr-only">Image Gallery Preview</Dialog.Title>
            <Dialog.Description className="sr-only">Fullscreen view of selected gallery image</Dialog.Description>
            {selectedImage !== null && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <Dialog.Close className="absolute top-0 right-0 p-4 text-white hover:text-gold-main transition-colors z-[120]">
                  <X size={40} />
                </Dialog.Close>

                <div className="relative w-full h-[80vh]">
                  <Image
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].title}
                    fill
                    sizes="95vw"
                    className="object-contain"
                  />
                </div>

                <div className="mt-8 text-center text-white">
                  <span className="text-gold-main text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
                    {filteredImages[selectedImage].category}
                  </span>
                  <h3 className="text-3xl font-heading font-bold">{filteredImages[selectedImage].title}</h3>
                </div>

                {/* Navigation */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-main hover:text-charcoal transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
                  }}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-main hover:text-charcoal transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
                  }}
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default GalleryPage;
