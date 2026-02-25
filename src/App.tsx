import React from 'react';
import Navbar from '@/src/components/Navbar.tsx';
import AIAssistant from '@/src/components/AIAssistant.tsx';
import {Route, Routes} from 'react-router-dom';
import Footer from "@/src/components/Footer.tsx";
import Home from "@/src/pages/Home.tsx";

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home/>}/>

                </Routes>
            </main>

            <Footer/>

            {/* AI Assistant Floating Button */}
            <AIAssistant/>
        </div>
    );
};

export default App;
