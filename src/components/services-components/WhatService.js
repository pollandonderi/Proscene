import React from "react";
import { useNavigate } from "react-router-dom";

// https://www.priority-software.com/wp-content/uploads/2023/05/faq-img-1.png

function WhatService() {
    const navigate  = useNavigate();

    const handleButtonClick = () => {
        navigate("/bookDemo");
    }
    return (
        <div className="relative overflow-hidden w-full h-[343px] bg-[#27c0f7] flex justify-center items-center">
            <svg 
                className="absolute h-[343px] left-[-15.27%] top-0 w-[910px]" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    opacity=".7" 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M526 288c0 30.376-24.624 55-55 55H55c-30.376 0-55-24.624-55-55v-445c0-30.376 24.624-55 55-55h306.5c12.426 0 22.5-10.074 22.5-22.5s10.074-22.5 22.5-22.5H855c30.376 0 55 24.624 55 55V45c0 30.376-24.624 55-55 55H581c-30.376 0-55 24.624-55 55v133Z" 
                    fill="#16213D"
                />
            </svg>
            <div className="text-center z-[1] px-4 md:px-8">
                <h1 className="font-bold text-white lg:text-4xl md:text-2xl leading-tight mb-4">
                    Want to know how we deliver our services?
                </h1>
                <p className="text-white text-lg mb-4">
                Schedule a call with one of our global partnership experts</p>
                <button 
                onClick = {handleButtonClick}
                className="mt-5 px-8 py-3 bg-white text-black text-base font-bold rounded-2xl cursor-pointer leading-6 transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                    Schedule a Call Now
                </button>
            </div>
            <svg 
                className="absolute h-[343px] right-[-40.27%] top-0 bottom-6 w-[910px]" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M239.592 1h-97.336C64.242 1 1 69.28 1 153.508v159.654c0 84.227 63.242 152.507 141.256 152.507h97.336c78.013 0 141.256-68.28 141.256-152.507V153.508C380.848 69.28 317.605 1 239.592 1Z" 
                    stroke="#fff" 
                    stroke-miterlimit="10"
                />
                <path 
                    d="M222.734 78.465h-63.635c-52.346 0-94.781 45.815-94.781 102.331v105.062c0 56.516 42.435 102.331 94.781 102.331h63.635c52.346 0 94.782-45.815 94.782-102.331V180.796c0-56.516-42.436-102.33-94.782-102.33Z" 
                    stroke="#fff" 
                    stroke-miterlimit="10"
                />
                <path 
                    d="M205.904 157.366h-29.947c-24.627 0-44.591 21.554-44.591 48.142v49.453c0 26.588 19.964 48.142 44.591 48.142h29.947c24.626 0 44.59-21.554 44.59-48.142v-49.453c0-26.588-19.964-48.142-44.59-48.142Z" 
                    stroke="#fff" 
                    stroke-miterlimit="10"
                />
            </svg>          
        </div>
    );
}

export default WhatService;
