
import React from 'react';
import { PhoneCall, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full border border-orange-500/30 mb-6 animate-pulse">
              <Clock size={16} />
              <span className="text-sm font-bold uppercase tracking-wider">Open 24/7 For Emergencies</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Expert <span className="text-orange-500">Plumbing</span> & <br /> 
              <span className="text-blue-400">Electrical</span> Services in Randburg
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Fast, reliable, and professional solutions for your home and business. 
              Available 24 hours a day, 365 days a year.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/20"
              >
                <PhoneCall size={24} />
                Call {BUSINESS_INFO.phone}
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all"
              >
                View Services
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Fast Local Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-500" size={20} />
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-orange-500" size={20} />
                <span className="text-sm font-medium">Berario Specialists</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-gray-800">
                <h3 className="text-blue-900 text-xl font-bold mb-4">Fast Service Quote</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none" />
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 outline-none text-gray-500">
                    <option>Select Service</option>
                    <option>Plumbing Issue</option>
                    <option>Electrical Repair</option>
                    <option>Emergency 24/7</option>
                  </select>
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-colors">
                    Request Assistance
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
