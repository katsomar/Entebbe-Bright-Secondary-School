import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import GoldButton from "@/components/ui/GoldButton";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-gold-main/20 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-main/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/hero/logo.png"
                  alt="Entebbe Bright Secondary School Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white leading-none">
                  ENTEBBE BRIGHT
                </span>
                <span className="text-[10px] text-gold-main tracking-[0.2em] font-mono uppercase">
                  Secondary School
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering students with a holistic education that fosters innovation, character, and leadership excellence in a futuristic learning environment.
            </p>
            <div className="flex items-center space-x-4">
              {[FaFacebook, FaXTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-gold-main hover:text-charcoal hover:border-gold-main transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold-main font-heading text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About Us", "Academics", "Admissions", "Gallery", "Tuition & Fees", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-gold-bright text-sm transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gold-bright mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-gold-main font-heading text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60 text-sm">
                <MapPin className="text-gold-main flex-shrink-0" size={18} />
                <span>P.O. Box 123, Entebbe Road,<br />Entebbe, Uganda</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Phone className="text-gold-main flex-shrink-0" size={18} />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Mail className="text-gold-main flex-shrink-0" size={18} />
                <span>info@entebbebright.ac.ug</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Clock className="text-gold-main flex-shrink-0" size={18} />
                <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-gold-main font-heading text-xl font-bold mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-6">
              Subscribe to our newsletter for the latest news and campus updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-gold-main transition-colors"
              />
              <GoldButton className="w-full py-3">Subscribe</GoldButton>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Entebbe Bright Secondary School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold-main transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-main transition-colors">Terms of Service</Link>
          </div>
          <div className="mt-4 md:mt-0">
            Developed by{" "}
            <Link 
              href="https://skyrix-techologies.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-main hover:text-gold-bright transition-all duration-300 font-medium underline underline-offset-4 decoration-gold-main/30 inline-flex items-center group"
            >
              <div className="relative w-5 h-5 mr-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/hero/dark.png"
                  alt="Skyrix Logo"
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </div>
              Skyrix Technologies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
