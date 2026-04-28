import React from "react";

const GlowDivider = () => {
  return (
    <div className="relative w-full h-px bg-gradient-to-r from-transparent via-gold-main to-transparent my-8 opacity-50">
      <div className="absolute inset-0 bg-gold-main blur-sm opacity-30" />
    </div>
  );
};

export default GlowDivider;
