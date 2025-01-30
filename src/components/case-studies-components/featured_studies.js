import React, { useState } from "react";
import StudiesCardComponent from "./studies_card";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import hensley from "../assets/hensley.mp4";

function FeaturedStudies() {
    const [selectedCardNo, setSelectedCardNo] = useState(0);

    const featuredCards = [
        {
            title: "Hansley Corporation",
            description: "Proscene to accelerate their growth with an agile, scalable, and open business management software.",
            videoUrl: hensley,
            link: "#"
        },
        {
            title: "Bowman & Co",
            description: "Proscene to accelerate their growth with an agile, scalable, and open business management software.",
            videoUrl: hensley,
            link: "#"
        },
        {
            title: "Supa Loaf",
            description: "Proscene to accelerate their growth with an agile, scalable, and open business management software.",
            videoUrl: hensley,
            link: "#"
        },
        {
            title: "Prestige Motors",
            description: "Proscene to accelerate their growth with an agile, scalable, and open business management software.",
            videoUrl: hensley,
            link: "#"
        }
    ];

    const handlePreviousCard = () => {
        setSelectedCardNo((prevIndex) => (prevIndex - 1 + featuredCards.length) % featuredCards.length);
    };

    const handleNextCard = () => {
        setSelectedCardNo((prevIndex) => (prevIndex + 1) % featuredCards.length);
    };

    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full">
            {/* back arrow */}
                <div className="bg-blue-100 rounded-full p-5 mx-auto" onClick={handlePreviousCard}>
                    <ArrowBackOutlinedIcon className="text-indigo-400" />
                </div>

                {/* card contet */}
                <div className="w-4/5 lg:w-3/5">
                    <StudiesCardComponent {...featuredCards[selectedCardNo]} />
                </div>

                {/* forward arrow */}
                <div className="bg-blue-100  rounded-full p-5 mx-auto" onClick={handleNextCard}>
                    <ArrowForwardOutlinedIcon className="text-indigo-400" />
                </div>
            </div>

            {/* dotd */}
            <div className="flex mt-4 space-x-4 pt-0 pb-10">
                {featuredCards.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === selectedCardNo ? "bg-[#3b37e6]" : "bg-[#a8a7f7]"} transition-all`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default FeaturedStudies;
