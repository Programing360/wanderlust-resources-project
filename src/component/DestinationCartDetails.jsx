'use client'
import React, { useState } from 'react';
import { 
  Trash2, Plus, Minus, ArrowLeft, CreditCard, 
  ShieldCheck, Star, MapPin, Clock, Edit3, XCircle 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { UpdateDestinationCart } from './UpdateDestinationCart';

const DestinationCartDetails = ({ cartDetailsData }) => {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = cartDetailsData.price * quantity;


  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      console.log("Booking Cancelled");
      // Add your delete/cancel logic here
    }
  };

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-all border border-gray-100">
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Booking Details</h1>
          </div>
          
          {/* Top Level Action Buttons */}
          <UpdateDestinationCart cartDetailsData={cartDetailsData}></UpdateDestinationCart>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Product Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Image Section */}
                <div className="relative w-full md:w-64 h-64 shrink-0">
                  <Image 
                    src={cartDetailsData.image} 
                    alt={cartDetailsData.title} 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover rounded-[2rem] shadow-lg"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-black text-gray-800">{cartDetailsData.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 py-2">
                  <div className="flex items-center gap-2 text-purple-600 mb-2">
                    <MapPin size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cartDetailsData.country}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{cartDetailsData.title}</h2>
                  
                  <div className="flex items-center gap-4 text-gray-500 mb-8">
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <Clock size={16} />
                      {cartDetailsData.duration}
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">Free Cancellation</span>
                  </div>

                  {/* Quantity & Price Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-5 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-purple-600 transition-all font-bold"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="text-lg font-black text-gray-800 w-4 text-center">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-purple-600 transition-all font-bold"
                      >
                        <Plus size={18} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Base Price</p>
                      <p className="text-2xl font-black text-gray-900">${cartDetailsData.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Protection Box */}
            <div className="mt-6 p-6 bg-purple-50 rounded-[2rem] border border-purple-100 flex items-start gap-4">
               <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                  <ShieldCheck size={24} />
               </div>
               <div>
                  <h4 className="font-bold text-purple-900">Wanderlust Protection Included</h4>
                  <p className="text-sm text-purple-700/70 leading-relaxed">Secure your trip against unexpected changes with our 24/7 support.</p>
               </div>
            </div>
          </div>

          {/* Right Side: Price Summary & Primary Actions */}
          <div className="lg:col-span-4">
            <div className="bg-[#111] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-purple-200/20 sticky top-10">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                Checkout Summary
              </h3>

              <div className="space-y-5 mb-8">
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Travelers</span>
                  <span className="text-white font-bold">x {quantity}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Service Charge</span>
                  <span className="text-green-400 font-bold">FREE</span>
                </div>
                <div className="h-[1px] bg-white/10 my-4"></div>
                <div className="flex justify-between items-end">
                  <span className="text-gray-300 font-medium">Total Amount</span>
                  <span className="text-3xl font-black text-purple-400">${totalPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <button className="w-full bg-purple-600 hover:bg-purple-500 py-5 rounded-[1.5rem] font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-purple-600/20 active:scale-95">
                  <CreditCard size={20} />
                  Reserve Now
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button 
                      // onClick={handleEdit}
                      className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-sm font-bold transition-all border border-white/10"
                    >
                      <Edit3 size={16} />
                      Modify
                    </button>
                    <button 
                      onClick={handleCancel}
                      className="flex items-center justify-center gap-2 py-3 bg-red-500/10 hover:bg-red-500/20 rounded-2xl text-red-400 text-sm font-bold transition-all border border-red-500/20"
                    >
                      <XCircle size={16} />
                      Cancel
                    </button>
                </div>
                
                <button className="w-full mt-2 py-2 text-gray-500 hover:text-red-400 transition-all flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-tighter">
                  <Trash2 size={14} />
                  Permanently Remove
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationCartDetails;