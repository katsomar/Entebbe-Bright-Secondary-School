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
  { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070", category: "Academics", title: "Students in Study Group" },
  { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076", category: "Sports", title: "Inter-House Football Final" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070", category: "Academics", title: "Chemistry Lab Session" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070", category: "Academics", title: "Research Project" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071", category: "Sports", title: "Basketball Championship" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070", category: "Events", title: "ICT Lab Opening" },
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070", category: "Events", title: "Annual Science Fair" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070", category: "Trips", title: "Geographical Field Trip" },
  { src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070", category: "Arts", title: "Drama Performance" },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24 flex flex-col min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-20 bg-charcoal text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="down">
            <SectionLabel>OUR WORLD IN PHOTOS</SectionLabel>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Capturing <span className="text-gold-main italic">Greatness</span>
            </h1>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-gold-main border-gold-main text-charcoal shadow-gold-glow"
                      : "bg-transparent border-white/20 text-white/60 hover:border-gold-main hover:text-gold-main"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
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
                    <span className="text-gold-main text-xs font-mono font-bold uppercase tracking-widest mb-2 block">
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
                  <span className="text-gold-main text-xs font-mono font-bold uppercase tracking-widest mb-2 block">
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
