import TravelCard from "@/component/destinationCard";
import { destinationData } from "@/lib/data";
import { Button } from "@heroui/react";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Destination = async () => {
  const destinationDatas = await destinationData();

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Explore All Destinations</h1>
          <p>Find your perfect travel experience from our curated collection</p>
        </div>
        <Link href={'/createDestination'}>
            <div className="hover:shadow-xl rounded-full">
            <Button><PlusIcon></PlusIcon> Create Destination</Button>
        </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {destinationDatas.map((destinationCard) => (
          <TravelCard
            key={destinationCard._id}
            destinationCard={destinationCard}
          ></TravelCard>
        ))}
      </div>
    </div>
  );
};

export default Destination;
