import React from 'react';
import './driveGrowthMask.css';
import Maskimage from '../components/assets/Maskimage.jpg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DriveGrowthMask  () {
  const navigate  = useNavigate();
  
      const handleButtonClick = () => {
          navigate("/bookDemo");
      }
  const swipeTexts = [
    "Amplify operational efficiency, discover new opportunities, and stay agile in the rapidly changing market.",
    "Streamline your processes and innovate faster to achieve measurable success.",
    "Empower your business with cutting-edge solutions tailored to your needs."
];

const [currentIndex, setCurrentIndex] = useState(0);

// te texts swipe evry 3seconds
useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
}, [swipeTexts.length]);
  return (
<div className=" maxWidthContainer">
            <div className="flex flex-col md:flex-row items-center justify-center bg-white">
                <div className=" text-[] p-10 md:w-1/2 Br">
                    <h1 className=" masktitle">
                         Fits your business today. Check.
                    </h1>
                    <p className="maskp mb-6">
                    {/* added 3 `line texts` that swipe automatically */}
                        {swipeTexts[currentIndex]}
                    </p>
                    <div className="button-Center">
                        <button className="border border-white text-white bg-blue-700 py-2 px-6 rounded-2xl hover:bg-blue-700"
                        onClick={handleButtonClick}>
                            Schedule a demo
                        </button>
                    </div>
                </div>

                <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
                <div>
      <header className="site-header">
        <div className="container">
          <div className="hero">
            <img src={Maskimage} alt="Descriptive text" className="hero-image" />
          </div>
        </div>
      </header>
      
    </div>
                </div>
            </div>
        </div>


  );
};

export default DriveGrowthMask;
