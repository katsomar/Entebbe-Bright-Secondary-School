import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
}

const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <span className="inline-block px-5 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full bg-orange-main/10 text-orange-main border border-orange-main/20">
      {children}
    </span>
  );
};

export default SectionLabel;
