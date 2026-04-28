"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GoldButtonProps extends HTMLMotionProps<"button"> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const GoldButton = ({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: GoldButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none";
  
  const variants = {
    solid: "bg-gradient-gold text-charcoal shadow-gold-sm hover:shadow-gold-md hover:-translate-y-1 active:translate-y-0",
    outline: "bg-transparent border-2 border-gold-main text-gold-main hover:bg-gold-main hover:text-charcoal",
    ghost: "bg-transparent text-gold-main hover:bg-gold-light/20",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GoldButton;
