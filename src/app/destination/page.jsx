import TravelCard from "@/component/destinationCard";
import { destinationData } from "@/lib/data";
import { Button } from "@heroui/react";
import { PlusIcon, Compass } from "lucide-react";
import Link from "next/link";
import React from "react";

const Destination = async () => {
  // ডেটা ফেচিং
  const destinationDatas = await destinationData();

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 mb-10">
        <div className="container mx-auto px-4 py-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-purple-600 font-bold text-sm uppercase tracking-widest">
              <Compass size={16} />
              <span>Explore the World</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              All <span className="text-purple-600">Destinations</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl">
              Find your perfect travel experience from our curated collection of breathtaking places.
            </p>
          </div>

          <Link href={'/createDestination'}>
            <Button 
              color="secondary" 
              size="lg"
              radius="full"
              className="font-bold px-8 shadow-lg shadow-purple-200 hover:scale-105 transition-transform"
              startContent={<PlusIcon size={20} />}
            >
              Create Destination
            </Button>
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto px-4">
        {destinationDatas && destinationDatas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {destinationDatas.map((destinationCard) => (
              <div 
                key={destinationCard._id} 
                className="hover:-translate-y-2 transition-all duration-300"
              >
                <TravelCard destinationCard={destinationCard} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-100 p-6 rounded-full mb-4">
               <Compass size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700">No Destinations Found</h3>
            <p className="text-gray-500">Be the first one to create a magical destination!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destination;