"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const DestinationSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="pb-14"
    >
      {data.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="group bg-white rounded-[2.5rem] border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-500 mb-5">
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden rounded-[2rem]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-bold text-gray-800">{item.rating || "4.5"}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className="flex items-center gap-1 text-purple-600 mb-2">
                <MapPin size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.country}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                {item.title}
              </h3>
              
              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold">Starting from</p>
                  <p className="text-xl font-black text-gray-900">${item.price}</p>
                </div>
                <Link href={`/cartDetails/${item._id}`}>
                    <button className="bg-black text-white p-3 rounded-2xl group-hover:bg-purple-600 transition-colors">
                  <ArrowRight size={20} />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DestinationSlider;