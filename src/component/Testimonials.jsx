"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
      name: "Michael Chen",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      id: 2,
      quote: "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
      {/* Header with Navigation Arrows */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-5xl font-serif text-gray-900 mb-2">What Travelers Say</h2>
          <p className="text-gray-500 text-lg">Real experiences from our happy travelers</p>
        </div>
        
        <div className="flex gap-3">
          <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-100 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start bg-white shadow-sm">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <p className="text-xl font-medium leading-relaxed text-gray-800 italic">
                &quot;{review.quote}&quot;
              </p>
              
              <div className="pt-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-cyan-500"></span>
                  <h4 className="text-cyan-600 font-semibold">{review.name}</h4>
                </div>
                <p className="text-gray-400 text-sm ml-8">{review.location}</p>
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-56 h-64 relative overflow-hidden">
               <img 
                 src={review.image} 
                 alt={review.name}
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;