"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoldButton from "@/components/ui/GoldButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF8E7] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 -skew-x-6 translate-x-24 z-0 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="h-px w-10 bg-gold-main/40" />
              <span className="text-gold-main font-body text-xs font-bold tracking-[0.3em] uppercase">
                Contact Us
              </span>
              <div className="h-px w-10 bg-gold-main/40" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-charcoal leading-tight">
              Let's Start a <span className="text-gold-main italic">Conversation</span>.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Form (7 columns) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gold-main border border-gold-main/10 group-hover:bg-gold-main group-hover:text-white transition-all duration-500 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-charcoal text-base mb-0.5">Our Campus</h4>
                    <p className="text-charcoal/60 text-xs leading-relaxed">
                      Nkumba Bufuulu Village, Entebbe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gold-main border border-gold-main/10 group-hover:bg-gold-main group-hover:text-white transition-all duration-500 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-charcoal text-base mb-0.5">Call Directly</h4>
                    <p className="text-charcoal/60 text-xs leading-relaxed font-semibold">
                      +256 700 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gold-main border border-gold-main/10 group-hover:bg-gold-main group-hover:text-white transition-all duration-500 shadow-sm">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-charcoal text-base mb-0.5">Email Inquiry</h4>
                    <p className="text-charcoal/60 text-xs leading-relaxed">
                      info@entebbebright.ac.ug
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gold-main border border-gold-main/10 group-hover:bg-gold-main group-hover:text-white transition-all duration-500 shadow-sm">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-charcoal text-base mb-0.5">Visiting Hours</h4>
                    <p className="text-charcoal/60 text-xs leading-relaxed">
                      Mon - Sat: 8 AM - 5 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Form with premium styling - tightened */}
              <div className="bg-white/60 backdrop-blur-sm p-6 md:p-10 rounded-[2.5rem] border border-gold-main/10 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gold-deep mb-2 block">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-charcoal/10 focus:border-gold-main outline-none py-2 text-charcoal font-medium transition-all text-sm"
                        placeholder="Your name..."
                      />
                    </div>
                    <div className="relative">
                      <label className="text-[9px] font-bold uppercase tracking-widest text-gold-deep mb-2 block">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-charcoal/10 focus:border-gold-main outline-none py-2 text-charcoal font-medium transition-all text-sm"
                        placeholder="Your email..."
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gold-deep mb-2 block">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-charcoal/10 focus:border-gold-main outline-none py-2 text-charcoal font-medium transition-all text-sm"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gold-deep mb-2 block">Message</label>
                    <textarea
                      rows={2}
                      className="w-full bg-transparent border-b border-charcoal/10 focus:border-gold-main outline-none py-2 text-charcoal font-medium transition-all resize-none text-sm"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <GoldButton className="w-full md:w-auto px-12 py-4 text-sm shadow-gold-sm">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </GoldButton>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Map (5 columns) */}
          <div className="lg:col-span-5 h-full min-h-[500px] flex flex-col">
            <ScrollReveal direction="right" className="h-full flex flex-col">
              <div className="flex-grow w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white relative group">
                {/* Real Google Maps Embed for Nkumba, Entebbe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.043743516627!2d32.4836066!3d0.0617349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d853e5b155555%3A0x6336e4f3a9e0f3a9!2sNkumba%2C%20Entebbe!5e0!3m2!1sen!2sug!4v1714320000000!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Overlay card for map */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-gold-main/10">
                  <h4 className="font-display font-bold text-charcoal text-lg mb-1">Entebbe Bright Secondary School</h4>
                  <p className="text-charcoal/60 text-xs leading-relaxed">
                    Nkumba Bufuulu Village, along Entebbe Road. <br />
                    A quiet, conducive environment for modern learning.
                  </p>
                  <a 
                    href="https://goo.gl/maps/..." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-gold-deep font-bold text-xs uppercase tracking-widest border-b border-gold-main pb-1 hover:text-gold-main transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Extra info under map */}
              <div className="mt-8 p-8 bg-gold-main/5 rounded-[2rem] border border-gold-main/10">
                <p className="text-charcoal/60 text-sm italic text-center">
                  "Educating the head, the heart, and the hands in the pearl of Africa."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
