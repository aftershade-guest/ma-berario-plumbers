import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import {BUSINESS_INFO} from './constants';
import {ShieldCheck, Truck, ThumbsUp, Star} from 'lucide-react';

const App: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>

            <main>
                <Hero/>

                {/* Quick Stats / Trust Section */}
                <section className="py-12 bg-blue-900 border-y border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <Truck className="text-orange-500"/>,
                                    label: "Rapid Response",
                                    sub: "Under 60 mins"
                                },
                                {
                                    icon: <ShieldCheck className="text-blue-400"/>,
                                    label: "Certified Team",
                                    sub: "Fully Insured"
                                },
                                {
                                    icon: <ThumbsUp className="text-orange-500"/>,
                                    label: "Guaranteed Work",
                                    sub: "Quality Assured"
                                },
                                {icon: <Star className="text-blue-400"/>, label: "Top Rated", sub: "Randburg Local"},
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="inline-flex items-center justify-center mb-3">
                                        {stat.icon}
                                    </div>
                                    <h4 className="text-white font-bold text-lg">{stat.label}</h4>
                                    <p className="text-blue-200/60 text-sm">{stat.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Services/>

                {/* Why Choose Us */}
                <section className="py-24 bg-gray-50 overflow-hidden relative" id="about">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800"
                                        alt="Electrical technician working"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                                    <div className="text-3xl font-extrabold text-blue-700">10+</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years
                                        Experience
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span
                                    className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
                                <h2 className="text-blue-900 text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                                    Your Trusted Emergency Partner In Randburg
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    MA Berario Plumbers & Electricians is a locally owned and operated business
                                    committed to providing the highest quality maintenance services. We understand that
                                    plumbing leaks or power outages don't wait for business hours, which is why we
                                    remain operational 24/7.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Transparency in pricing and clear quotes",
                                        "Advanced diagnostic tools for leaks and faults",
                                        "Respectful and clean workmanship",
                                        "Compliance with all local safety standards"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div
                                                className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full shrink-0">
                                                <ThumbsUp size={14}/>
                                            </div>
                                            <p className="font-medium text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <a href={`tel:${BUSINESS_INFO.phone}`}
                                       className="inline-flex items-center gap-2 text-blue-700 font-bold text-lg hover:underline underline-offset-4">
                                        Call for Immediate Assistance <Truck size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact/>
            </main>

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

            {/* AI Assistant Floating Button */}
            <AIAssistant/>
        </div>
    );
};

export default App;
