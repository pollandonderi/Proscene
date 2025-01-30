import React from 'react';
import { useNavigate } from 'react-router-dom';

const StrategyDesign = () => {
    const navigate  = useNavigate();
    
    const handleButtonClick = () => {
        navigate("/bookDemo");
    }

  return (
    <div className="bg-gradient-to-r from-[#001e62] to-[#10069f] min-h-screen flex items-center justify-center py-20">
      <div className="mx-32 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-white text-2xl md:text-7xl font-bold mb-14 uppercase">Strategy & Design</h2>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Turning up <br />
            the volume <br />
            on your values
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed mb-8">
            Global teams can easily become fragmented. An anchored, amplified
            mission keeps everyone focused on the same goals. Diversified's team
            of experts works with global leaders to design exceptional corporate
            auditoriums and broadcast studios that ensure messages are delivered
            in the most impactful way—uniting teams through a common purpose.
          </p>
          <button className="bg-blue-500 hover:bg-white text-white  hover:text-black mt-14 font-bold py-3 px-6 rounded-lg transition duration-300"
          onClick={handleButtonClick}>
            Book a Demo
          </button>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://onediversified.com/hubfs/Section%20Images/By%20Space%20Services/Section_Corporate_StrategyDesign.jpg"
            alt="Auditorium"
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default StrategyDesign;