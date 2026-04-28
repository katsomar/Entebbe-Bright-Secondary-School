import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-green-school/10 text-gold-deep border border-gold-main/20 font-mono">
      {children}
    </span>
  );
};

export default SectionLabel;
