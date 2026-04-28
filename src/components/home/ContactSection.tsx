"use client";

import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoldButton from "@/components/ui/GoldButton";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info & Form */}
          <div>
            <ScrollReveal direction="left">
              <SectionLabel>GET IN TOUCH</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8">
                We'd Love to <span className="text-gold-deep italic">Hear From You</span>.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-main/10 rounded-2xl flex items-center justify-center text-gold-deep shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Location</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      P.O. Box 123, Entebbe Road,<br />Entebbe, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-main/10 rounded-2xl flex items-center justify-center text-gold-deep shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Phone</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      +256 700 000 000<br />+256 701 111 111
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-main/10 rounded-2xl flex items-center justify-center text-gold-deep shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Email</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      info@entebbebright.ac.ug<br />admissions@ebss.ac.ug
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-main/10 rounded-2xl flex items-center justify-center text-gold-deep shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">Office Hours</h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      Mon - Sat: 8:00 AM - 5:00 PM<br />Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-charcoal mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 rounded-2xl bg-cream border border-gold-main/10 focus:border-gold-main outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-widest text-charcoal mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-6 py-4 rounded-2xl bg-cream border border-gold-main/10 focus:border-gold-main outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-charcoal mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-cream border border-gold-main/10 focus:border-gold-main outline-none transition-all"
                    placeholder="Admissions Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-widest text-charcoal mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-cream border border-gold-main/10 focus:border-gold-main outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <GoldButton className="w-full py-4 group">
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </GoldButton>
              </form>
            </ScrollReveal>
          </div>

          {/* Right: Map */}
          <div className="relative min-h-[500px] h-full">
            <ScrollReveal direction="right" className="h-full">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-gold-lg border-4 border-white relative">
                {/* Map Placeholder - In a real app, use react-leaflet or google-maps */}
                <div 
                  className="absolute inset-0 bg-gold-light/20 flex flex-col items-center justify-center text-gold-deep p-12 text-center"
                  style={{
                    backgroundImage: 'url("/hero/h1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl mb-4 animate-bounce">
                      <MapPin size={32} className="text-gold-main" />
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                      <h4 className="font-bold text-charcoal mb-2">Entebbe Bright Secondary School</h4>
                      <p className="text-text-muted text-xs leading-relaxed">
                        Find us along Entebbe Road, near the botanical gardens.
                      </p>
                      <GoldButton size="sm" className="mt-4 w-full">Open in Maps</GoldButton>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
