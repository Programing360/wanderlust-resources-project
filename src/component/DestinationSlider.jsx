"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DestinationSlider = ({ data }) => {
  // কার্ডের জন্য অ্যানিমেশন ভ্যারিয়েন্টস
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // প্রতিটি কার্ড ১০ms পর পর আসবে
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={25}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ 
        delay: 4000,
        disableOnInteraction: false 
      }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="pb-16"
    >
      {data.map((item, index) => (
        <SwiperSlide key={item._id}>
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-white rounded-[2.5rem] border border-gray-100 p-4 shadow-sm hover:shadow-2xl transition-all duration-500 mb-5"
          >
            {/* Image Container with Zoom effect */}
            <div className="relative h-64 w-full overflow-hidden rounded-[2rem]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-gray-800">
                  {item.rating || "4.5"}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex items-center gap-1 text-purple-600 mb-2">
                <MapPin size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {item.country}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                {item.title}
              </h3>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">
                    Starting from
                  </p>
                  <p className="text-xl font-black text-gray-900">
                    ${item.price}
                  </p>
                </div>
                
                <Link href={`/cartDetails/${item._id}`}>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-black text-white p-3 rounded-2xl group-hover:bg-purple-600 transition-colors shadow-lg shadow-gray-200 group-hover:shadow-purple-200"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DestinationSlider;