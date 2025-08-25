"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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

    // Close mobile menu when route changes
    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        window.addEventListener('popstate', handleRouteChange);
        return () => window.removeEventListener('popstate', handleRouteChange);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
        { name: 'Calculator', href: '/calculator' },
    ];

    return (
        <>
            <nav className={`fixed top-0 sm:top-5 left-0 sm:left-[10%] z-50 flex items-center justify-between w-full sm:w-[80vw] rounded-lg bg-col1 h-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
                        NORTHPOLE
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex md:items-center md:justify-between w-full max-w-3xl mx-8'>
                    <ul className="flex space-x-4 lg:space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className={`font-medium transition-all duration-300 text-sm sm:text-base ${
                                            isActive ? "text-white underline" : "text-gray-400 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <button 
                        onClick={() => router.push('/contact-us')} 
                        className="bg-white text-black rounded-md px-4 sm:px-6 py-2 hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='text-white focus:outline-none'
                        aria-label='Toggle menu'
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-20 left-0 right-0 bg-col1 z-40 transition-all duration-300 ease-in-out transform ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                } md:hidden`}
            >
                <div className='px-4 py-2 space-y-4'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                                    isActive ? "text-white underline" : "text-[#414141] hover:text-white"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <button 
                        onClick={() => {
                            router.push('/contact-us');
                            setIsMenuOpen(false);
                        }}
                        className='w-full mt-4 bg-white text-black rounded-md px-4 py-2 text-center font-medium hover:bg-opacity-90 transition-colors duration-200'
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    );
}
