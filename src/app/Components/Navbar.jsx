"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Investors', href: '/services' },
        { name: 'Investors', href: '/portfolio' },
    ];

    return (
        <nav className="flex fixed top-0 z-50  items-center bg-col1 h-20 mx-14 mt-8 rounded-md p-4">
            <div className=' w-[20%] flex items-center justify-center'>
                <Link href="/" className="text-2xl font-bold">
                    NORTHPOLE
                </Link>
            </div>
            <div className='w-[70%]'>
                <ul className="flex space-x-12 ">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className=" font-medium text-[#414141] hover:text-white transition-all duration-300">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="bg-white h-full text-black rounded-md px-8 hover:text-white">Contact Us</button> 
        </nav>
    );
}