
import React from 'react';
import { Wrench, Zap, Check } from 'lucide-react';
import { PLUMBING_SERVICES, ELECTRICAL_SERVICES } from '../constants.tsx';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 text-3xl md:text-5xl font-extrabold mb-4">Our Professional Solutions</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From emergency leaks to complex electrical installations, our certified team handles it all with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plumbing Card */}
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8">
              <Wrench size={32} />
            </div>
            <h3 className="text-blue-900 text-2xl font-bold mb-4">Plumbing Services</h3>
            <p className="text-blue-800/70 mb-8 text-lg">
              Reliable plumbing for residential and commercial properties. We fix the drips so you can rest easy.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {PLUMBING_SERVICES.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-blue-900 font-medium">
                  <div className="bg-blue-200 rounded-full p-1">
                    <Check size={14} className="text-blue-700" />
                  </div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Electrical Card */}
          <div className="bg-orange-50 rounded-3xl p-8 lg:p-12 border border-orange-100 hover:shadow-xl transition-all duration-300">
            <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8">
              <Zap size={32} />
            </div>
            <h3 className="text-orange-900 text-2xl font-bold mb-4">Electrical Services</h3>
            <p className="text-orange-800/70 mb-8 text-lg">
              Expert electrical work including fault finding, new installations, and emergency repairs.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {ELECTRICAL_SERVICES.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-orange-900 font-medium">
                  <div className="bg-orange-200 rounded-full p-1">
                    <Check size={14} className="text-orange-700" />
                  </div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
