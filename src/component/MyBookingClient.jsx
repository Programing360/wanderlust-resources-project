"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, DollarSign, Hash, ArrowRight, XCircle } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { useAxiosSecure } from "./Hook/useAxios";

const MyBookingClient = ({ booking }) => {
  // AOS ইনিশিয়েলাইজেশন
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  const useAxios = useAxiosSecure();
  const [bookingData, setBookingData] = useState(booking);

  const handleDeleteBooking = async (bookingId) => {

    const data = await useAxios.delete(`bookings/${bookingId}`);
    if (data.data.deletedCount > 0) {
      toast.success("Booking cancelled successfully");
      const remainingBooking = bookingData.filter(
        (item) => item._id !== bookingId,
      );

      setBookingData(remainingBooking); // পেজ রিফ্রেশ করে নতুন ডেটা লোড করা হচ্ছে
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Page Header with Animation */}
        <div className="mb-10" data-aos="fade-down">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
            My Bookings
          </h1>
          <p className="text-gray-500 font-medium">
            Manage and view your upcoming travel plans
          </p>
        </div>

        {/* Booking List Container */}
        <div className="space-y-6">
          {bookingData && bookingData.length > 0 ? (
            bookingData.map((item, index) => (
              <div
                key={item._id}
                data-aos="fade-up" // প্রফেশনাল লুকের জন্য fade-up ব্যবহার করা হয়েছে
                data-aos-delay={index * 100} // Staggered ইফেক্ট (একটির পর একটি আসবে)
                className="bg-white rounded-[2rem] border border-gray-100 p-5 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-xl hover:border-purple-100 transition-all duration-500"
              >
                {/* Left Side: Image & Content Group */}
                <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
                  {/* Image Section */}
                  <div className="relative w-full sm:w-44 h-36 shrink-0 overflow-hidden rounded-[1.5rem] shadow-md">
                    <Image
                      src={item.data.image}
                      alt={item.data.title || "Destination"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Info Section */}
                  <div className="space-y-2 w-full text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {item.data.title}
                    </h2>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-purple-500" />
                        <span>Duration: {item.data.duration}</span>
                      </div>
                      <div className="hidden sm:block w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="flex items-center gap-1.5">
                        <Hash size={16} className="text-cyan-500" />
                        <span>
                          ID:{" "}
                          <span className="font-mono text-gray-700">
                            {item.data.id ||
                              item._id.substring(0, 8).toUpperCase()}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Price tag */}
                    <div className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-xl text-sm font-black mt-2">
                      <DollarSign size={14} />
                      <span>{item.data.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Buttons (Cancel & View) */}
                <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0">
                  {/* Cancel Button */}
                  <button
                    onClick={() => handleDeleteBooking(item._id)}
                    className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <XCircle size={18} />
                    Cancel
                  </button>

                  {/* View Details Button */}
                  <Link
                    href={`/cartDetails/${item.data.id || item._id}`}
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-purple-600 font-bold text-sm shadow-md hover:shadow-purple-200 transition-all active:scale-95 group cursor-pointer">
                      View Plans
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div
              className="text-center py-20 bg-white rounded-[2.5rem] border border-gray-100"
              data-aos="fade-up"
            >
              <p className="text-gray-400 font-bold text-lg">
                No active bookings found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookingClient;
