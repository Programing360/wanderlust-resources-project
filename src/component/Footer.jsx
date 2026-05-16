'use client'
import { Mail, MapPin, Phone, Send, } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // ১. ব্র্যান্ড নেম-এর প্রতিটি অক্ষরের (Stagger Character) অ্যানিমেশন
      gsap.from(".brand-char", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // স্ক্রিনের ৮৫% এ ফুটার আসলেই অ্যানিমেশন শুরু হবে
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        rotateX: -90,
        stagger: 0.04,
        duration: 0.8,
        ease: "back.out(1.8)"
      });

      // ২. ডেসক্রিপশন এবং নিউজলেটার বক্স ফেইড-ইন
      gsap.from(".footer-top-fade", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // ৩. কলাম লিংকগুলোর লিংক বাই লিংক (Stagger Link) অ্যানিমেশন
      gsap.from(".footer-link-group", {
        scrollTrigger: {
          trigger: ".footer-grid-trigger",
          start: "top 85%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, footerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  // ব্র্যান্ডের নামটিকে অক্ষরে ভাগ করার জন্য হেল্পার
  const brandName = "Wanderlust";

  return (
    <footer 
      ref={footerRef} 
      className="bg-[#0a0a0a] text-gray-400 px-6 md:px-16 pt-20 pb-10 border-t border-white/5 mt-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Branding Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            {/* Split Text Animation Structure */}
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 flex items-center overflow-hidden h-[75px]">
              {brandName.split("").map((char, index) => (
                <span key={index} className="brand-char inline-block origin-bottom">
                  {char}
                </span>
              ))}
              <span className="text-purple-500 brand-char inline-block origin-bottom">.</span>
            </h1>
            
            <p className="footer-top-fade text-lg leading-relaxed text-gray-500">
              Crafting extraordinary journeys for the modern explorer. We bridge the gap between your dreams and the world's most breathtaking destinations.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="footer-top-fade w-full lg:w-auto min-w-[350px]">
            <h3 className="text-white font-bold mb-4 tracking-wider text-sm uppercase">Stay Inspired</h3>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-white placeholder:text-gray-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-500 text-white px-4 rounded-lg transition-all flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer">
                <span className="hidden sm:inline text-sm font-bold uppercase tracking-tighter">Join</span>
                <Send size={16} />
              </button>
            </div>
            <p className="mt-3 text-[11px] text-gray-600 italic">
              *By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-grid-trigger grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Quick Links */}
          <div className="footer-link-group">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 transition-all"></span> Home
              </li>
              <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 transition-all"></span> Destinations
              </li>
              <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 transition-all"></span> Experience
              </li>
              <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-purple-400 transition-all"></span> Booking
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-link-group">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Travel Safety</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">Privacy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-link-group col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Office</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-500 shrink-0" />
                <span>219 Design St, <br />Manhattan, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-500 shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-500 shrink-0" />
                <span>hello@wanderlust.com</span>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="footer-link-group">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-pointer group">
                <FaTwitter size={18} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-pointer group">
                {/* <Instagram  /> */}
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all cursor-pointer group">
                <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-gray-600">
            © {currentYear} Wanderlust Studio. Made with ❤️ for explorers.
          </p>
          <div className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;