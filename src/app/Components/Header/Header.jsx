'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSquarePhone } from "react-icons/fa6";
import Link from 'next/link';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBottomNav, setShowBottomNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowBottomNav(false);
        } else {
            setShowBottomNav(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className="header-area-three relative">
            <div className="main-header">
                {/* Header Top */}
                <div className="header-top w-[84%] mx-auto py-2 border-b border-gray-200 hidden sm:block">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <Link href="/">
                                    <Image
                                        src="/logo.jpg"
                                        alt="logo"
                                        width={80}
                                        height={70}
                                        className="rounded-full"
                                    />
                                </Link>
                                <h1 className="p-2 font-extrabold text-3xl italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-blue-800 to-pink-950">
                                    REV RANGER
                                </h1>
                            </div>

                            <div className="flex items-center space-x-6">
                                <div className="w-24">
                                    <select
                                        name="country"
                                        id="country"
                                        className="w-full p-3 border border-gray-200 rounded-lg text-sm"
                                    >
                                        <option value="BD">🇧🇩 BD</option>
                                        <option value="US">🇺🇸 US</option>
                                        <option value="GB">🇬🇧 UK</option>
                                        <option value="IN">🇮🇳 IND</option>
                                        <option value="CA">🇨🇦 CD</option>
                                    </select>
                                </div>
                                <div className="h-7 w-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                <p>
                                    <Link href="/login" className="text-gray-900 hover:underline">
                                        Sign In
                                    </Link>
                                </p>
                                <Link
                                    href="/register"
                                    className="bg-[#EE262D] text-white py-2 px-4 rounded-full"
                                >
                                    Sign Up
                                </Link>
                                <Link href="/cart" className="relative">
                                    <FaShoppingCart
                                        size={30}
                                        className="text-gray-900 hover:text-blue-500"
                                    />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                        3
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Bottom */}
                <div
                    className={`header-bottom absolute z-50 w-full h-20 transition-transform duration-300 ${showBottomNav ? 'translate-y-0' : '-translate-y-full'}
                    `}
                >
                    <div className="container w-[84%] mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="mt-4 flex items-center justify-center gap-2  rounded-md">
                                <FaSquarePhone size={35} className="text-white" />
                                <div>
                                  
                                    <h4 className="text-lg font-semibold">
                                        <a href="#" className="text-white hover:underline">
                                            00 (888) +123456
                                        </a>
                                        
                                    </h4>
                                </div>
                            </div>

                            <nav className="hidden lg:flex text-gray-200 space-x-10 mt-4">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Places to Visit', path: '/places' },
                                    { name: 'How it Works', path: '/how-it-works' },
                                    { name: 'Tips', path: '/tips' },
                                    { name: 'News', path: '/news' },
                                    { name: 'Contact', path: '/contact' },
                                ].map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={
                                            pathname === item.path
                                                ? 'text-yellow-500'
                                                : 'text-white hover:text-blue-500'
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="lg:hidden flex items-center">
                                <button onClick={toggleMobileMenu}>
                                    <FiMenu size={30} className="text-gray-800" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden inset-0 bg-black bg-opacity-50 z-50">
                        <div className="flex justify-between items-center bg-white p-4">
                            <div>
                                <Link href="/">
                                    <Image
                                        src="/logo.jpg"
                                        alt="logo"
                                        width={80}
                                        height={70}
                                        className="rounded-full"
                                    />
                                </Link>
                            </div>
                            <button onClick={toggleMobileMenu}>
                                <IoClose size={30} className="text-gray-800" />
                            </button>
                        </div>
                        <nav className="flex flex-col items-center space-y-4 py-4 bg-white">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Places to Visit', path: '/places' },
                                { name: 'How it Works', path: '/how-it-works' },
                                { name: 'Tips', path: '/tips' },
                                { name: 'News', path: '/news' },
                                { name: 'Contact', path: '/contact' },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={toggleMobileMenu}
                                    className={
                                        pathname === item.path
                                            ? 'text-yellow-500'
                                            : 'text-gray-700 hover:text-blue-500'
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;