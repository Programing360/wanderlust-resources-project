"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import readyToSartImage from '../../public/assets/CTA.png';
import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReadyToStart = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // অ্যানিমেশন ১ সেকেন্ড ধরে চলবে
            once: true,     // শুধু একবার অ্যানিমেট হবে
        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 py-16 overflow-hidden'>
            <div 
                className='relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl'
                data-aos="zoom-in-up" // পুরো কন্টেইনারটি নিচ থেকে জুম হয়ে আসবে
            >
                
                {/* Background Image */}
                <div className='h-[400px] md:h-[500px] w-full relative'>
                    <Image 
                        src={readyToSartImage} 
                        alt='Ready to Start' 
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                        priority
                    />
                    <div className='absolute inset-0 bg-black/50' />
                </div>

                {/* Content Overlay */}
                <div className='absolute inset-0 flex flex-col items-center justify-center gap-6 text-center text-white px-6'>
                    
                    <div className='space-y-4'>
                        {/* Text Animations */}
                        <h2 
                            className='text-3xl md:text-6xl font-black tracking-tight'
                            data-aos="fade-down"
                            data-aos-delay="200" // ০.২ সেকেন্ড দেরিতে শুরু হবে
                        >
                            Ready to Start Your <span className='text-cyan-400'>Journey?</span>
                        </h2>
                        
                        <p 
                            className='text-sm md:text-xl text-gray-200 max-w-2xl mx-auto'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Join thousands of travelers who have discovered the world with us.
                        </p>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="600">
                        <Link href='/destination'>
                            <Button 
                                size="lg"
                                radius="full"
                                className="bg-white text-black font-bold px-8 py-7 hover:bg-cyan-400 hover:text-white transition-all group/btn"
                            >
                                Book Your Trip Today 
                                <ArrowRight className='ml-2 group-hover/btn:translate-x-2 transition-transform' size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;