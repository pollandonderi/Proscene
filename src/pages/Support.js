import React, { useState, useEffect, useRef } from "react";
import "../global.css";
import homeSvg from "../components/assets/help.webp";
import { useNavigate } from "react-router-dom";
import BookDemoToday from "../components/BookDemo.js";
import Footer from "../components/Footer.js";

function Support() {
    const navigate = useNavigate();
    
        const handleButtonClick = () => {
            navigate("/contact");
        };
    
        const swipeTexts = [
            "Optimize your workflows and accelerate growth to achieve impactful results.",
            "Enhance productivity, embrace innovation, and adapt seamlessly to change..",
            // "Empower your business with cutting-edge solutions tailored to your needs.",
        ];
    
        const swipeTopics = [
            "How can we help?Coming soon.",
            "Help all day, everyday. Coming soon.",
            // "Be felt, be visible through all the seasons. Check.",
        ];
    
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isAnimating, setIsAnimating] = useState(false);
    
        const containerHeight = 300; // Set a maximum height (adjust as needed)
    
        useEffect(() => {
            const interval = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
                    setIsAnimating(false);
                }, 500); // Match this to the animation duration
            }, 9000);
    
            return () => clearInterval(interval);
        }, [swipeTexts.length]);
    
    return (
<div>
    <div className="pb-5  maxWidthContainer" style={{paddingTop:'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)'}}>
                <div className="flex flex-col md:flex-row items-center justify-center p-3 bg-white min-h-40">
                    <div className="bg-[#3b37e6] py-16 text-white sm:p-10 p-5 mb-10 mt-10 md:w-1/2 Br">
                        {/* Content with fixed height and scroll for overflow */}
                        <div
                            className="overflow-hidden relative"
                            style={{ maxHeight: `${containerHeight}px`, overflow: "hidden" }}
                        >
                            <h1
                                className={`font-bold h1sizing mx-4 transition-transform duration-500 transform ${
                                    isAnimating ? "-translate-x-full" : "translate-x-0"
                                }`}
                            >
                                {swipeTopics[currentIndex]}
                            </h1>
                        </div>
                        <div
                            className="overflow-hidden relative"
                            style={{ maxHeight: `${containerHeight}px`, overflow: "hidden" }}
                        >
                            <p
                                className={`text-center md:text-left text-lg mx-4 transition-transform duration-500 transform ${
                                    isAnimating ? "-translate-x-full" : "translate-x-0"
                                }`}
                                style={{ fontWeight: "300" }}
                            >
                                {swipeTexts[currentIndex]}
                            </p>
                        </div>
                        <div className="button-Center">
                            <button
                                className="border bg-[#3b37e6] border-white text-white mx-4 py-2 px-6 mt-5 rounded-2xl hover:bg-white hover:text-[#3b37e6]"
                                onClick={handleButtonClick}
                            >
                                contact us
                            </button>
                        </div>
                    </div>
    
                    <div className="relative md:w-1/2 flex items-center justify-center mt-8 sm:ml-4 md:mt-0 bg-growth">
                        <img src={homeSvg} alt="home" className="rounded-lg shadow-lg " />
                    </div>
                </div>
            </div>
            <div>
            <BookDemoToday/>
            </div>
            <div>
                <Footer />
            </div>
</div>
    );
}

export default Support;
