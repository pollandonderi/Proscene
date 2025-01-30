import React from 'react';
import sup from './assets/sup.jpg';

const SupportMaintain = () => {
  return (
    <div className="bg-[#3b37e6] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
         {/* Image Section */}
         <div className="lg:w-1/2 mt-10 lg:mt-0 ml-10">
          <div className="relative">
            <img
              src={sup}
              alt="Sideline Support"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-10 ml-[1em] sm:ml-[2em]">
          <h2 className="text-[] font-bold text-2xl">SUPPORT & MAINTAIN</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sideline support you can count on
          </h1>
          <p className="text-lg">
            Sports teams can’t perform without managers or support staff. And the same goes for the 
            technology that powers an arena experience. At Diversified, we offer end-to-end management 
            and support for every solution we design, configure and integrate. Winning, after all, is 
            about more than the starting line-up. It’s about lasting performance.
          </p>
          <button className="bg-[#3b37e6] border hover:bg-white hover:text-[#3b37e6] text-white font-medium px-6 py-3 rounded-[20px]">
            Lease Equipemt Now
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default SupportMaintain;
