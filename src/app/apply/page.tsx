"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft, Send, Sparkles, GraduationCap, ShieldCheck, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ApplyPage = () => {
  const currentYear = new Date().getFullYear();
  const academicYear = currentYear + 1;

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    currentClass: "",
    previousSchool: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzdji0g0xLW6_1-fL9X1ZxzY0edoSFEu6beowKR-xFznu3zK_ZhKgeewucWUzCDWu3M/exec";
      
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "application",
          ...formData
        }),
      });

      setStatus("success");
      // Scroll to top of success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Application error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#fcf8f1] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#1a1a1a 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 -left-20 text-[20rem] font-display font-bold text-charcoal/[0.03] rotate-12 select-none">
          EXCELLENCE
        </div>
        <div className="absolute bottom-1/4 -right-20 text-[20rem] font-display font-bold text-charcoal/[0.03] -rotate-12 select-none">
          EBSS
        </div>
        
        {/* Abstract Geometric Lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full text-gold-main/[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100 0 L0 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <path d="M100 20 L20 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <path d="M100 40 L40 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <path d="M100 60 L60 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
          <path d="M100 80 L80 100" stroke="currentColor" strokeWidth="0.1" fill="none" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-1/3 h-1/2 text-charcoal/[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="100" r="80" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="0" cy="100" r="60" stroke="currentColor" strokeWidth="0.2" fill="none" />
          <circle cx="0" cy="100" r="40" stroke="currentColor" strokeWidth="0.2" fill="none" />
        </svg>
      </div>

      {/* Hero Header */}
      <section className="relative pt-40 pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/h3.png"
            alt="Apply Banner"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center text-gold-main text-xs font-bold uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors group"
            >
              <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Return to Portal
            </Link>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight">
              Apply <span className="text-gold-main">Online</span>.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Submit your application for the {currentYear} academic year. Please ensure all details are accurate before submission.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-none shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] p-16 text-center border-t-4 border-gold-main relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 text-charcoal/[0.02] select-none">
                    <CheckCircle size={200} />
                  </div>
                  <div className="w-16 h-16 bg-gold-main rounded-none flex items-center justify-center text-charcoal mx-auto mb-8">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="text-4xl font-display font-bold text-charcoal mb-4 uppercase tracking-tight">Submission Successful</h2>
                  <p className="text-neutral-500 text-lg mb-10 max-w-md mx-auto font-light">
                    Your application has been logged into our system. Our admissions registrar will contact you via the provided email within 48 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <Link href="/">
                      <GoldButton className="rounded-none px-10 py-4">Back to Home</GoldButton>
                    </Link>
                    <button 
                      onClick={() => { setStatus("idle"); setFormData({ studentName: "", parentName: "", email: "", phone: "", currentClass: "", previousSchool: "", message: "" }); }}
                      className="text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-charcoal transition-colors underline underline-offset-8"
                    >
                      New Application
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="bg-white rounded-none shadow-[0_50px_120px_-30px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col lg:flex-row relative"
                >
                  {/* Subtle Pattern on Form Card */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`, backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }} />

                  {/* Form Sidebar Info */}
                  <div className="lg:w-1/3 bg-charcoal p-12 text-white flex flex-col justify-between border-r border-white/5 relative z-10">
                    <div>
                      <div className="w-12 h-1 bg-gold-main mb-8" />
                      <h3 className="text-3xl font-display font-bold mb-8 tracking-tight uppercase">Admissions <br />Criteria</h3>
                      <div className="space-y-10">
                        {[
                          { icon: GraduationCap, title: "Academic Record", desc: "Original copies of previous school reports and UNEB results." },
                          { icon: ShieldCheck, title: "Character", desc: "A recommendation letter from the head of your previous institution." },
                          { icon: Clock, title: "Deadline", desc: `Applications for the first intake close on December 15th, ${currentYear}.` }
                        ].map((item, i) => (
                          <div key={i} className="flex items-start space-x-5">
                            <item.icon size={20} className="text-gold-main mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                              <p className="text-white/50 text-xs leading-relaxed font-light">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/10">
                      <p className="text-xs text-white/40 leading-relaxed font-light">
                        Entebbe Bright Secondary School is an equal opportunity institution. We do not discriminate based on background or belief.
                      </p>
                    </div>
                  </div>

                  {/* Actual Form */}
                  <div className="lg:w-2/3 p-12 md:p-16 relative z-10 bg-white/80 backdrop-blur-sm">
                    <div className="mb-12">
                      <div className="flex items-center space-x-6 mb-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src="/hero/logo.png"
                            alt="EBSS Logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-display font-bold text-charcoal uppercase tracking-tighter">Student Information</h3>
                          <div className="w-20 h-1 bg-gold-main/20" />
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Student Full Name</label>
                          <input
                            required
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            placeholder="Full Legal Name"
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium placeholder:text-neutral-300 placeholder:font-light"
                          />
                        </div>
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Parent/Guardian Name</label>
                          <input
                            required
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium placeholder:text-neutral-300 placeholder:font-light"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium placeholder:text-neutral-300 placeholder:font-light"
                          />
                        </div>
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Contact Phone</label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+256 ..."
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium placeholder:text-neutral-300 placeholder:font-light"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Application Class</label>
                          <div className="relative">
                            <select
                              required
                              name="currentClass"
                              value={formData.currentClass}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium appearance-none relative z-10"
                            >
                              <option value="">Select Level</option>
                              <option value="Senior 1">Senior 1</option>
                              <option value="Senior 2">Senior 2</option>
                              <option value="Senior 3">Senior 3</option>
                              <option value="Senior 4">Senior 4</option>
                              <option value="Senior 5">Senior 5</option>
                              <option value="Senior 6">Senior 6</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                          </div>
                        </div>
                        <div className="group space-y-3">
                          <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Previous Institution</label>
                          <input
                            required
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleChange}
                            placeholder="Name of School"
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium placeholder:text-neutral-300 placeholder:font-light"
                          />
                        </div>
                      </div>

                      <div className="group space-y-3">
                        <label className="text-[10px] font-black text-charcoal/40 uppercase tracking-[0.2em] ml-0.5">Additional Documentation / Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Briefly state any special considerations or questions..."
                          className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-gold-main transition-all outline-none text-charcoal font-medium resize-none placeholder:text-neutral-300 placeholder:font-light"
                        />
                      </div>

                      <div className="pt-8 flex flex-col items-end">
                        <GoldButton 
                          type="submit" 
                          className="w-auto px-12 py-4 rounded-none text-xs uppercase tracking-[0.2em] font-black"
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <div className="flex items-center">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                              Verifying...
                            </div>
                          ) : (
                            <div className="flex items-center">
                              Process Application
                              <Send size={14} className="ml-3" />
                            </div>
                          )}
                        </GoldButton>
                        <div className="flex items-center space-x-4 mt-6 text-neutral-400">
                          <span className="h-px w-8 bg-neutral-200" />
                          <p className="text-[9px] uppercase tracking-[0.3em] font-bold">Official Registry Form</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyPage;
