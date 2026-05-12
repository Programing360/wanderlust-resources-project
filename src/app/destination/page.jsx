import TravelCard from '@/component/destinationCard';
import { destinationData } from '@/lib/data';
import React from 'react';

const Destination =async () => {

    const destinationDatas = await destinationData()
    // console.log(destinationDatas);

    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-3xl font-bold'>Explore All Destinations</h1>
            <p>Find your perfect travel experience from our curated collection</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                {
                    destinationDatas.map(destinationCard => <TravelCard key={destinationCard._id} destinationCard={destinationCard}></TravelCard>)
                }
                
            </div>
        </div>
    );
};

export default Destination;