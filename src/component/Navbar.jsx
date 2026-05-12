'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, UserCircle } from 'lucide-react'; // Install lucide-react or use icons of your choice
import logoImage from '../../public/assets/Wanderlast.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destination', href: '/destination' },
        { name: 'My Booking', href: '/bookings' },
        { name: 'Admin', href: '/admin' },
    ];

    return (
        <nav className="relative bg-white border-b shadow-lg shadow-purple-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    {/* --- Desktop: Left Side (Nav Links) --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* --- Logo (Centered on Desktop, Left on Mobile) --- */}
                    <div className="flex-shrink-0 flex items-center">
                        <Image 
                            src={logoImage} 
                            alt="Wanderlast logo" 
                            width={140} 
                            height={35} 
                            className="object-contain"
                        />
                    </div>

                    {/* --- Desktop: Right Side (Auth) --- */}
                    <div className="hidden md:flex items-center space-x-5">
                        <button className="flex items-center gap-1 text-gray-600 hover:text-purple-600 font-medium transition-colors">
                            <UserCircle size={20} />
                            Profile
                        </button>
                        <button className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                            Login
                        </button>
                        <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all shadow-md shadow-purple-200">
                            Sign Up
                        </button>
                    </div>

                    {/* --- Mobile: Menu Button --- */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-purple-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Mobile & Tablet Sidebar/Menu --- */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-50 border-t">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                        <Link href="/profile" className="block px-3 py-2 text-gray-600">Profile</Link>
                        <div className="grid grid-cols-2 gap-4 px-3 pt-2">
                            <button className="w-full py-2 text-center text-purple-600 border border-purple-600 rounded-lg font-medium">
                                Login
                            </button>
                            <button className="w-full py-2 text-center bg-purple-600 text-white rounded-lg font-medium">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;