import React from 'react';
import {BUSINESS_INFO} from '../constants.tsx';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-950 text-gray-500 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-white text-xl font-black mb-2">MA <span
                            className="text-orange-500">BERARIO</span></span>
                        <p className="text-sm">© {new Date().getFullYear()} {BUSINESS_INFO.name}</p>
                    </div>

                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Emergency Guide</a>
                    </div>

                    <div className="text-xs text-center md:text-right max-w-[200px]">
                        {BUSINESS_INFO.address}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
