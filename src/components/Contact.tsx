
import React from 'react';
import { Phone, MapPin, Clock, Calendar, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-12">
              We are strategically located in Berario, Randburg, allowing us to respond quickly to emergency calls in the surrounding areas.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-blue-500/20 p-3 rounded-xl shrink-0">
                  <Phone className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-300 hover:text-white text-lg">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-500/20 p-3 rounded-xl shrink-0">
                  <MapPin className="text-orange-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Location</h4>
                  <p className="text-gray-300 text-lg">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-emerald-500/20 p-3 rounded-xl shrink-0">
                  <Clock className="text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Business Hours</h4>
                  <p className="text-gray-300 text-lg">Open 24 Hours / 7 Days a Week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 relative overflow-hidden h-[400px] lg:h-auto">
             <div className="absolute inset-0 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
               {/* Placeholder for an actual Google Map */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5034608358245!2d27.96229567540263!3d-26.14774397711204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b69575d5555%3A0x6d90d3e2363b5847!2s185%20Arkansas%20Ave%2C%20Berario%2C%20Randburg%2C%202195!5e0!3m2!1sen!2sza!4v1709565000000!5m2!1sen!2sza" 
                className="w-full h-full border-0 rounded-2xl" 
                loading="lazy"
              ></iframe>
             </div>
             <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1 block">Local Business</span>
                <p className="text-sm font-medium">Serving Berario, Northcliff, Randburg & Surrounds</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
