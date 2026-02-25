import React, {useEffect, useState} from 'react';
import {Menu, PhoneCall, X} from 'lucide-react';
import {BUSINESS_INFO} from '../constants.tsx';
import {Link, useLocation} from "react-router-dom";


const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#">
            <span
                className={`text-xl font-extrabold tracking-tight ${(isScrolled || location.pathname !== "/") ? 'text-blue-700' : 'text-white'}`}>
              MA <span className="text-orange-500">BERARIO</span>
            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/#services"
                           className={`font-medium hover:text-orange-500 transition-colors ${(isScrolled || location.pathname !== "/") ? 'text-gray-700' : 'text-white'}`}>Services</a>

                        <a href="/#about"
                           className={`font-medium hover:text-orange-500 transition-colors ${(isScrolled || location.pathname !== "/") ? 'text-gray-700' : 'text-white'}`}>About</a>
                        <a href="/#contact"
                           className={`font-medium hover:text-orange-500 transition-colors ${(isScrolled || location.pathname !== "/") ? 'text-gray-700' : 'text-white'}`}>Contact</a>
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105"
                        >
                            <PhoneCall size={18}/>
                            {BUSINESS_INFO.phone}
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={isScrolled ? 'text-gray-700' : 'text-white'}>
                            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 border-t">
                    <div className="flex flex-col space-y-4">
                        <a href="/services" onClick={() => setIsMenuOpen(false)}
                           className="text-gray-700 text-lg font-medium">Services</a>
                        <a href="/about" onClick={() => setIsMenuOpen(false)}
                           className="text-gray-700 text-lg font-medium">About</a>
                        <a href="/contact" onClick={() => setIsMenuOpen(false)}
                           className="text-gray-700 text-lg font-medium">Contact</a>
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="bg-blue-700 text-white px-5 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                        >
                            <PhoneCall size={20}/>
                            Call Now: {BUSINESS_INFO.phone}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
