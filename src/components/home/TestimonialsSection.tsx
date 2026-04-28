"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Nakato",
    role: "Parent, S.4 Student",
    image: "/wwa/wwa1.png",
    quote: "Entebbe Bright has transformed my daughter's approach to learning. The teachers are incredibly supportive and the environment is truly inspiring.",
  },
  {
    name: "James Okello",
    role: "Alumni, Class of 2020",
    image: "/hero/h2.png",
    quote: "The foundation I received here was pivotal for my success in University. The school taught me leadership and critical thinking skills I use every day.",
  },
  {
    name: "Dr. Mary Atwine",
    role: "Education Consultant",
    image: "/hero/h3.png",
    quote: "A school that truly understands the needs of the 21st-century learner. Their curriculum is forward-thinking and execution is flawless.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="py-24 bg-[#FFF8E7] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-16">
            Voices of Our <span className="text-gold-deep italic">Community</span>.
          </h2>
        </ScrollReveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <ScrollReveal delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-3xl shadow-gold-sm border border-gold-main/10 relative h-full flex flex-col items-center">
                    <Quote size={48} className="text-gold-main/20 absolute top-8 left-8" />
                    
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold-main mb-6 mt-4">
                      <Image src={t.image} alt={t.name} fill sizes="80px" className="object-cover" />
                    </div>

                    <div className="flex space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-gold-main text-gold-main" />
                      ))}
                    </div>

                    <p className="text-text-muted text-lg font-heading italic mb-8 flex-grow">
                      "{t.quote}"
                    </p>

                    <div>
                      <h4 className="text-charcoal font-bold text-lg">{t.name}</h4>
                      <p className="text-gold-deep font-mono text-xs uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
