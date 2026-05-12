import { destinationData } from "@/lib/data";
import { Button } from "@heroui/react";
import { MoveRight } from "lucide-react";
import React from "react";
import DestinationSlider from "./DestinationSlider"; // Path to your slider file
import Link from "next/link";

const Destination = async () => {
  const destinationCart = await destinationData();

  return (
    <section className="bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-10 h-[2px] bg-purple-600"></span>
              <span className="text-purple-600 font-bold uppercase tracking-widest text-xs">
                Top Picks
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Featured Destinations
            </h1>
            <p className="text-gray-500 text-lg">
              Handpicked travel experiences for adventure seekers.
            </p>
          </div>

          <Link href={'/destination'}>
            <Button
              className="bg-white text-black border-2 border-gray-100 hover:border-purple-600 font-bold px-8 py-6 rounded-2xl transition-all"
              endContent={<MoveRight size={18} />}
            >
              VIEW ALL
            </Button>
          </Link>
        </div>

        {/* Swiper Slider Component */}
        <div className="mt-10">
          <DestinationSlider data={destinationCart} />
        </div>
      </div>
    </section>
  );
};

export default Destination;
