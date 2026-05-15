"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Home, Compass, MapPin, AlertCircle } from "lucide-react";
import gsap from "gsap";

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ৪০৪ টেক্সট এবং কম্পাস আইকন অ্যানিমেশন
      gsap.from(".animate-404", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // টেক্সট এবং সাবটাইটেল অ্যানিমেশন
      gsap.from(".animate-content", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // বাটনগুলোর জন্য অ্যানিমেশন
      gsap.from(".animate-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
        ease: "power2.out",
      });

      // কম্পাস আইকনটিকে হালকা ফ্লোটিং (ভাসমান) ইফেক্ট দেওয়া
      gsap.to(".floating-compass", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-xl w-full text-center space-y-8 relative">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full -z-10"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-cyan-200/20 blur-3xl rounded-full -z-10"></div>

        {/* Big Animated 404 & Icon */}
        <div className="animate-404 relative inline-flex items-center justify-center">
          <h1 className="text-[10rem] sm:text-[13rem] font-black tracking-tighter text-gray-900 leading-none select-none">
            4
            <span className="inline-block mx-[-10px] sm:mx-[-20px] floating-compass text-purple-600">
              <Compass size={120} className="w-24 h-24 sm:w-32 sm:h-32 stroke-[2.5]" />
            </span>
            4
          </h1>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <div className="animate-content inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertCircle size={14} />
            Lost in Destination
          </div>
          
          <h2 className="animate-content text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Oops! You've Wandered Off.
          </h2>
          
          <p className="animate-content text-gray-500 max-w-md mx-auto font-medium text-sm sm:text-base leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="animate-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Go Back Home */}
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-black text-white hover:bg-purple-600 rounded-2xl font-bold text-sm shadow-lg shadow-gray-900/10 hover:shadow-purple-200 transition-all active:scale-95 cursor-pointer">
              <Home size={18} />
              Go Back Home
            </button>
          </Link>

          {/* Explore Other Destinations */}
          <Link href="/destinations" className="w-full sm:w-auto">
            <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-2xl font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer">
              <MapPin size={18} className="text-cyan-500" />
              Explore Trips
            </button>
          </Link>
          
        </div>

      </div>
    </div>
  );
};

export default NotFound;