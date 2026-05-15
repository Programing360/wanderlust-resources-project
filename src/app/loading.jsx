"use client";
import React, { useEffect, useRef } from "react";
import { Compass, Palmtree, Globe } from "lucide-react";
import gsap from "gsap";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ১. মূল আইকনটিকে অনবরত ঘোরানো (Infinite Rotation)
      gsap.to(".spinning-icon", {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "linear",
      });

      // ২. টেক্সটের নিচে থাকা ডটগুলোর Staggered ওয়ান-বাই-ওয়ান অ্যানিমেশন
      gsap.to(".loading-dot", {
        y: -6,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      // ৩. ব্যাকগ্রাউন্ড গ্লো এবং টেক্সটের হালকা ফেইড-ইন ইফেক্ট
      gsap.from(".animate-pulse-soft", {
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4 overflow-hidden relative"
    >
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/20 blur-[100px] rounded-full -z-10 animate-pulse-soft"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-300/20 blur-[80px] rounded-full -z-10 animate-pulse-soft delay-75"></div>

      {/* Main Loader Core */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer Ripple Effect */}
        <div className="absolute w-24 h-24 border border-purple-500/20 rounded-full scale-125 animate-ping duration-1000"></div>
        
        {/* Glowing Background Ring */}
        <div className="absolute w-20 h-20 bg-purple-500/5 rounded-full blur-sm"></div>

        {/* Central Icon Container */}
        <div className="relative p-6 bg-white rounded-3xl shadow-xl shadow-purple-500/5 border border-gray-100/50 flex items-center justify-center">
          <div className="spinning-icon text-purple-600">
            <Compass size={44} className="stroke-[2]" />
          </div>
          
          {/* Small Decorative Planet Orbiting Look */}
          <div className="absolute -top-1 -right-1 text-cyan-500 animate-bounce">
            <Globe size={16} />
          </div>
        </div>
      </div>

      {/* Premium Loading Text & Typo */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-1.5 select-none">
          Preparing Your Journey
          {/* Animated Three Dots */}
          <span className="inline-flex gap-1 items-end h-5 pb-1">
            <span className="loading-dot w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
            <span className="loading-dot w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            <span className="loading-dot w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
          </span>
        </h3>
        
        <p className="text-gray-400 font-medium text-xs uppercase tracking-[0.25em] animate-pulse-soft">
          Finding the best experiences...
        </p>
      </div>

      {/* Subtle Bottom Travel Element */}
      <div className="absolute bottom-10 text-gray-300 flex items-center gap-2 text-xs font-semibold select-none">
        <Palmtree size={16} className="text-gray-400" />
        <span>Wanderlust Studio</span>
      </div>
    </div>
  );
};

export default Loading;