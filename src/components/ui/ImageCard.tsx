"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  className?: string;
}

const ImageCard = ({ src, alt, title, category, className }: ImageCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl group shadow-lg ${className}`}
    >
      <div className="aspect-[4/5] relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {(title || category) && (
          <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {category && (
              <span className="text-xs font-mono text-gold-bright uppercase tracking-widest mb-2 block">
                {category}
              </span>
            )}
            {title && (
              <h4 className="text-white text-xl font-heading font-semibold leading-tight">
                {title}
              </h4>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageCard;
