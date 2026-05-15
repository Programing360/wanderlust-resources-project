'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  Trash2, Plus, Minus, ArrowLeft, CreditCard, 
  ShieldCheck, Star, MapPin, Clock, Edit3, XCircle 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { UpdateDestinationCart } from './UpdateDestinationCart';
import gsap from 'gsap';

const DestinationCartDetails = ({ cartDetailsData }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = cartDetailsData.price * quantity;
  
  // Refs for GSAP
  const containerRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ১. হেডার অ্যানিমেশন (উপর থেকে নামবে)
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // ২. বাম পাশের কার্ড অ্যানিমেশন (বাম থেকে আসবে)
      gsap.from(leftSideRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power4.out"
      });

      // ৩. ডান পাশের সামারি বক্স (ডান থেকে আসবে)
      gsap.from(rightSideRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power4.out"
      });

      // ৪. টেক্সট এলিমেন্টগুলোর জন্য 'Stagger' অ্যানিমেশন
      gsap.from(".animate-text", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.6,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      console.log("Booking Cancelled");
    }
  };

  return (
    <div ref={containerRef} className="py-10 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-all border border-gray-100">
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Booking Details</h1>
          </div>
          <UpdateDestinationCart cartDetailsData={cartDetailsData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side */}
          <div ref={leftSideRef} className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Image */}
                <div className="relative w-full md:w-64 h-64 shrink-0 overflow-hidden rounded-[2rem] shadow-xl">
                  <Image 
                    src={cartDetailsData.image} 
                    alt={cartDetailsData.title} 
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 py-2">
                  <div className="animate-text flex items-center gap-2 text-purple-600 mb-2">
                    <MapPin size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cartDetailsData.country}</span>
                  </div>
                  
                  <h2 className="animate-text text-3xl font-bold text-gray-900 mb-3">{cartDetailsData.title}</h2>
                  
                  <div className="animate-text flex items-center gap-4 text-gray-500 mb-8">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <Clock size={16} /> {cartDetailsData.duration}
                    </div>
                    <span className="text-sm font-medium text-green-600">Free Cancellation</span>
                  </div>

                  {/* Quantity & Price */}
                  <div className="animate-text flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-5 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-purple-600 active:scale-90 transition-all"><Minus size={18} /></button>
                      <span className="text-lg font-black text-gray-800">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-purple-600 active:scale-90 transition-all"><Plus size={18} /></button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase">Base Price</p>
                      <p className="text-2xl font-black text-gray-900">${cartDetailsData.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection Box */}
            <div className="animate-text p-6 bg-purple-50 rounded-[2rem] border border-purple-100 flex items-start gap-4">
               <ShieldCheck size={24} className="text-purple-600" />
               <div>
                  <h4 className="font-bold text-purple-900">GSAP Protection Secured</h4>
                  <p className="text-sm text-purple-700/70">Enjoy smooth transitions and robust performance in your booking.</p>
               </div>
            </div>
          </div>

          {/* Right Side */}
          <div ref={rightSideRef} className="lg:col-span-4">
            <div className="bg-[#111] rounded-[2.5rem] p-8 text-white shadow-2xl sticky top-10">
              <h3 className="animate-text text-xl font-bold mb-8">Checkout Summary</h3>
              <div className="space-y-5 mb-8">
                <div className="animate-text flex justify-between text-gray-400 text-sm">
                  <span>Travelers</span> <span className="text-white font-bold">x {quantity}</span>
                </div>
                <div className="animate-text flex justify-between items-end">
                  <span className="text-gray-300 font-medium">Total Amount</span>
                  <span className="text-3xl font-black text-purple-400">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="animate-text flex flex-col gap-4">
                <button className="w-full bg-purple-600 hover:bg-purple-500 py-5 rounded-[1.5rem] font-bold text-lg transition-all active:scale-95 shadow-lg shadow-purple-600/20">
                  <CreditCard className="inline mr-2" size={20} /> Reserve Now
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-bold border border-white/10 transition-all">Modify</button>
                  <button onClick={handleCancel} className="py-3 bg-red-500/10 hover:bg-red-500/20 rounded-2xl text-red-400 text-sm font-bold border border-red-500/20 transition-all">Cancel</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationCartDetails;