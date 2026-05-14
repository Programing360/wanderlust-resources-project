"use client";
import { Separator } from "@heroui/react";
import { Search, MapPin, Calendar, CircleDollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => {
  // অ্যানিমেশন ভ্যারিয়েন্টস
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // প্রতিটি এলিমেন্ট ০.২ সেকেন্ড পর পর আসবে
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat"
        style={{ zIndex: -2 }}
      />
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -1 }} />

      {/* Main Content */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-20 pb-10 text-center flex flex-col items-center flex-1 justify-center"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6"
        >
          Discover Your <br /> 
          <span className="text-cyan-400">Next Adventure</span>
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium"
        >
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences tailored just for you.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="uppercase bg-cyan-500 hover:bg-cyan-600 px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-cyan-500/30 active:scale-95">
            Explore Now
          </button>
          <button className="uppercase bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-10 py-4 rounded-full font-bold transition-all active:scale-95">
            View Destinations
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Search Bar with Slide Up Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-6xl px-4 pb-12"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl md:rounded-full p-2 md:pl-10 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
          
          {/* Location */}
          <div className="flex items-center gap-4 w-full md:w-auto flex-1 p-3">
            <MapPin className="text-cyan-400 shrink-0" size={24} />
            <div className="w-full">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-1">Location</h3>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none outline-none text-base font-semibold placeholder:text-gray-400 w-full"
              />
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Date */}
          <div className="flex items-center gap-4 w-full md:w-auto flex-1 p-3">
            <Calendar className="text-cyan-400 shrink-0" size={24} />
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-1">Duration</h3>
              <p className="text-base font-semibold whitespace-nowrap">Anytime • 3 Days</p>
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Budget */}
          <div className="flex items-center gap-4 w-full md:w-auto flex-1 p-3">
            <CircleDollarSign className="text-cyan-400 shrink-0" size={24} />
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-1">Budget</h3>
              <p className="text-base font-semibold whitespace-nowrap">$0 - $3000</p>
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Guests */}
          <div className="flex items-center gap-4 w-full md:w-auto flex-1 p-3">
            <Users className="text-cyan-400 shrink-0" size={24} />
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/80 mb-1">People</h3>
              <p className="text-base font-semibold whitespace-nowrap">5-10 Guests</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-all w-full md:w-auto px-12 py-5 md:py-6 rounded-2xl md:rounded-full flex items-center justify-center gap-3 font-black shadow-lg shadow-cyan-500/40 active:scale-95">
            <Search size={22} />
            <span className="md:hidden">Find Experience</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;