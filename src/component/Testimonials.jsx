"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const swiperRef = useRef(null);

 const reviews = [
    {
      id: 1,
      quote: "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences.",
      name: "Michael Chen",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    },
    {
      id: 2,
      quote: "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable.",
      name: "James Wilson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
    },
    {
      id: 3,
      quote: "Exploring the fjords of Norway was a dream come true. Everything from the logistics to the stay was handled with perfection.",
      name: "Erik Olsen",
      location: "Oslo, Norway",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
    },
    {
      id: 4,
      quote: "The Safari in Tanzania was beyond words. Seeing the Big Five in their natural habitat was an experience I will cherish forever.",
      name: "David Smith",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
    },
    {
      id: 5,
      quote: "Japan's cherry blossom season was stunning. Wanderlust made sure we got the best spots without the massive crowds.",
      name: "Kenji Sato",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1542178243-ed2003b5adfb?q=80&w=400",
    },
    {
      id: 6,
      quote: "A culinary tour through Italy! I never knew pasta could taste so diverse. The boutique hotels were the cherry on top.",
      name: "Marco Rossi",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400",
    },
]; 

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
      {/* Header with Custom Swiper Buttons */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2 tracking-tight">What Travelers Say</h2>
          <p className="text-gray-500 text-lg">Real experiences from our happy travelers</p>
        </div>
        
        {/* Navigation Buttons linked to Swiper instance */}
        <div className="flex gap-3">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-cyan-500 transition-all active:scale-90"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-cyan-500 transition-all active:scale-90"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          1024: { slidesPerView: 2 }, // ডেক্সটপে ২টি কার্ড দেখাবে
        }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="border border-gray-100 p-8 rounded-4xl flex flex-col md:flex-row gap-6 items-center md:items-start bg-white h-full shadow-sm hover:shadow-md transition-shadow">
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <p className="text-xl font-medium leading-relaxed text-gray-800 italic">
                  &quot;{review.quote}&quot;
                </p>
                
                <div className="pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-cyan-500"></span>
                    <h4 className="text-cyan-600 font-bold">{review.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm ml-8 font-medium">{review.location}</p>
                </div>
              </div>

              {/* Image Container */}
              <div className="w-full md:w-48 h-60 relative rounded-4xl flex-shrink-0 overflow-hidden">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;