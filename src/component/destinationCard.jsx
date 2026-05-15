'use client'
import React from "react";
import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { destinationDataById } from "./Hook/destinationDataById";
import { authClient } from "@/lib/auth-client";

const TravelCard = ({ destinationCard }) => {
  const {data} = authClient.useSession()
  const userId = data?.user?.id;
  const { _id, image, title, country, rating, price, duration } =
    destinationCard;




  return (
    <div className=" group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 border border-gray-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image src={image} alt={title} width={600} height={40}></Image>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />{" "}
            {rating}
          </span>
          <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
            Featured
          </span>
        </div>

        {/* Bottom Glass Price Tag */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-3 rounded-2xl flex justify-between items-center text-white">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                Starting from
              </p>
              <p className="text-lg font-bold">${price}</p>
            </div>
            <Link href={`cartDetails/${_id}`}>
              <button className="bg-white text-gray-900 p-2 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 cursor-pointer">
                <ArrowUpRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-1 text-purple-600 mb-2">
          <MapPin size={14} strokeWidth={3} />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
            {country}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors cursor-pointer">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
          Experience the ultimate luxury getaway with private pools and
          breathtaking volcanic views in the heart of Ubud.
        </p>

        <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-gray-400" />
              <span className="text-xs font-medium text-gray-600">
                {duration}
              </span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="text-xs font-medium text-gray-600 italic underline decoration-purple-200">
              All Inclusive
            </div>
          </div>

          {/* Avatar Group */}
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
              >
                {/* <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" /> */}
              </div>
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-white bg-purple-50 text-[10px] flex items-center justify-center text-purple-600 font-bold">
              +12
            </div>
          </div>
        </div>
        {
          userId ? <Button
          onClick={() => destinationDataById(destinationCard, userId)}
          className={"w-full bg-purple-500 mt-4"}
        >
          Booking now
        </Button>: <Link href={'/login'}> 
          <Button
          onClick={() => destinationDataById(destinationCard, userId)}
          className={"w-full bg-purple-500 mt-4"}
        >
          Booking now
        </Button>
        </Link>
        }
        
      </div>
    </div>
  );
};

export default TravelCard;
