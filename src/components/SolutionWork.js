import React from 'react';
import photo1 from '../components/assets/conference.webp';
import { useNavigate } from 'react-router-dom';

function SolutionThatWorkForYou() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  return (
    <div className="bg-[#c7def7] py-16 px-6 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h1 className="font-bold text-[#3b37e6] mb-2" style={{fontSize:'clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem)'}}>
            Where Proscene will help you thrive best
          </h1>
          <h2 className="text-[#16213d] mb-4" style={{fontSize: 'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)', lineHeight:'1', fontWeight:'600'}}>
            Solutions that work for you. Not the other way around.
          </h2>
          <p className="text-[#334155] text-sm sm:text-base md:text-lg mb-6">
            Accelerate your organization's growth with an agile, scalable, and
            open, cloud ERP platform.
          </p>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-[15px]"
            onClick={handleButtonClick}
          >
            Schedule a Demo
          </button>
        </div>

        {/* Right Section: Image and Shapes */}
        <div className="relative lg:w-1/2 w-full flex justify-center lg:justify-end px-4">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-100 rounded-lg rotate-45 -translate-x-4 -translate-y-4"></div>
          <div className="absolute top-4 right-4 sm:top-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 left-2 w-8 h-36 sm:w-12 sm:h-48 bg-indigo-200 rounded-full flex flex-col items-center justify-center -translate-y-1/2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full mb-2"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full mb-2"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-indigo-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 sm:w-16 sm:h-16 bg-cyan-300 rounded-full"></div>

          {/* Main photo */}
          <img
            src={photo1}
            alt="Sectors"
            className="rounded-lg shadow-lg w-full sm:w-[90%] lg:w-[110%] xl:w-[120%]"
          />
        </div>
      </div>
    </div>
  );
}

export default SolutionThatWorkForYou;
