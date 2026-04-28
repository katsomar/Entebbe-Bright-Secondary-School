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
  const [mediaType, setMediaType] = useState<"photos" | "videos">("photos");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryVideos = [
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Sports Day Highlights", category: "Sports" },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Annual Science Fair", category: "Academics" },
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Drama Performance 2024", category: "Arts" },
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white selection:bg-gold-main/30 flex flex-col min-h-screen">
      {/* Cinematic Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/h2.png"
            alt="Gallery Background"
            fill
            priority
            className="object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/95 to-charcoal" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
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
            
            {/* Media Type Switcher */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                {["photos", "videos"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setMediaType(type as any)}
                    className={`px-10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                      mediaType === type 
                        ? "bg-gold-main text-charcoal shadow-gold-sm" 
                        : "text-white/40 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filters (Photos Only) */}
            <AnimatePresence mode="wait">
              {mediaType === "photos" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border ${
                        activeCategory === cat
                          ? "bg-white text-charcoal border-white"
                          : "bg-transparent border-white/10 text-white/40 hover:border-gold-main hover:text-gold-main"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
      </section>

      {/* Masonry Display Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {mediaType === "photos" ? (
              <motion.div 
                key="photos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              >
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.src}-${index}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-cream border border-gold-main/5 hover:border-gold-main/20 transition-all duration-700"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative aspect-auto">
                      <Image
                        src={image.src}
                        alt={image.title}
                        width={600}
                        height={800}
                        className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    {/* Architectural Museum Frame Overlay */}
                    <div className="absolute inset-0 border-[12px] border-transparent group-hover:border-white transition-all duration-700 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 z-20">
                      <span className="text-gold-main text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">{image.category}</span>
                      <h4 className="text-white text-xl font-display font-bold">{image.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="videos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {galleryVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl"
                  >
                    <iframe 
                      src={video.src}
                      className="absolute inset-0 w-full h-full pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/10 transition-colors duration-700 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-gold-main group-hover:border-gold-main transition-all duration-500 group-hover:scale-110">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-charcoal/90 to-transparent">
                      <h4 className="text-white font-display font-bold text-2xl">{video.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Immersive Lightbox */}
      <Dialog.Root open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-charcoal/98 backdrop-blur-2xl z-[100] animate-in fade-in duration-500" />
          <Dialog.Content className="fixed inset-0 z-[110] flex flex-col items-center justify-center outline-none p-4 md:p-12 animate-in zoom-in-95 duration-500">
            {selectedImage !== null && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <Dialog.Close className="absolute top-8 right-8 p-4 text-white/40 hover:text-gold-main transition-colors z-[120] bg-white/5 rounded-full backdrop-blur-md">
                  <X size={32} />
                </Dialog.Close>

                <div className="relative w-full max-w-6xl aspect-auto max-h-[75vh] group shadow-2xl rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-12 text-center text-white max-w-2xl">
                  <span className="text-gold-main text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                    {filteredImages[selectedImage].category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">{filteredImages[selectedImage].title}</h3>
                  
                  {/* Gallery Navigation Navigation */}
                  <div className="flex items-center justify-center space-x-6">
                    <button
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-main hover:text-charcoal transition-all"
                      onClick={() => setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null))}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <span className="text-white/40 font-body text-sm font-bold tracking-widest uppercase">
                      {selectedImage + 1} / {filteredImages.length}
                    </span>
                    <button
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold-main hover:text-charcoal transition-all"
                      onClick={() => setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null))}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default GalleryPage;
