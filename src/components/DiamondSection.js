import React from "react";
import { useNavigate } from "react-router-dom";
import av from './assets/audiovisual.webp';
import cs from './assets/collaborativesolutions.webp';
import as from './assets/Automationsolutions.jpg';
import dm from './assets/digitalmedia.jpg';

function DiamondSection() {
  const navigate = useNavigate();

  const handleButtonClickAV=() =>{
    navigate('/avIntegration')
  };
  const handleButtonClickCS=() =>{
    navigate('/collaborationSolutions')
  };
  const handleButtonClickDM=() =>{
    navigate('/digitalMedia')
  };
  const handleButtonClickAS=() =>{
    navigate('/automationSolutions')
  };
  return (
    <div className="relative bg-[#132042] flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Center Text */}
      <h3 className="absolute text-3xl font-bold text-white text-center z-10">
        We shape around <br />your business
      </h3>

      {/* Top Row */}
      <div className="relative flex justify-center items-center mb-12">
        <div
          className="relative w-80 h-[500px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden z-20 group"
          style={{
            backgroundImage: `url(${av})`,
            border: "1px solid rgba(59, 55, 230, 0.9)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-[90%] m-4 bg-white bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden group-hover:h-48"
            style={{ backgroundColor: "rgba(59, 55, 230, 0.9)" }}
          >
            <div className="flex items-center justify-center h-16 text-xl font-bold text-white">
              Audio Visual Integration
            </div>

            <div className="p-4 text-center hidden group-hover:block">
              <p className="text-white text-sm mb-4">
                Next-Gen property management software
              </p>
              <button className="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-gray-200 transition duration-300 mb-4"
              onClick={handleButtonClickAV}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="relative flex justify-between w-full max-w-4xl mx-auto mb-12">
        {/* Card 1 */}
        <div
          className="relative w-80 h-[500px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `url(${cs})`,
            border: "1px solid rgba(85, 187, 249, 0.9)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-[90%] m-4 bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden group-hover:h-48"
            style={{ backgroundColor: "rgba(85, 187, 249, 0.9)" }}
          >
            <div className="flex items-center justify-center h-16 text-xl font-bold text-white">
              Collaboration
            </div>

            <div className="p-4 text-center hidden group-hover:block">
              <p className="text-white text-sm mb-4">
                PHP is the best language I know.
              </p>
              <button className="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-gray-200 transition duration-300 mb-4"
              onClick={handleButtonClickCS}>
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Empty Space for Text */}
        <div className="w-80 h-96 flex items-center justify-center"></div>

        {/* Card 2 */}
        <div
          className="relative w-80 h-[500px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `url(${as})`,
            border: "1px solid rgba(161, 66, 255, 0.9)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-[90%] m-4 bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden group-hover:h-48"
            style={{ backgroundColor: "rgba(161, 66, 255, 0.9)" }}
          >
            <div className="flex items-center justify-center h-16 text-xl font-bold text-white">
              Automation Solutions
            </div>

            <div className="p-4 text-center hidden group-hover:block">
              <p className="text-white text-sm mb-4">
                PHP is the best language I know.
              </p>
              <button className="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-gray-200 transition duration-300 mb-4"
              onClick={handleButtonClickAS}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative flex justify-center">
        <div
          className="relative w-80 h-[500px] bg-cover bg-center rounded-lg shadow-lg overflow-hidden group"
          style={{
            backgroundImage: `url(${dm})`,
            border: "1px solid rgba(255, 115, 105, 0.9)",
          }}
        >
          <div
            className="absolute bottom-0 left-0 w-[90%] m-4 bg-opacity-90 transition-all duration-300 ease-in-out h-16 hover:h-48 rounded-lg overflow-hidden group-hover:h-48"
            style={{ backgroundColor: "rgba(255, 115, 105, 0.9)" }}
          >
            <div className="flex items-center justify-center h-16 text-xl font-bold text-white">
              Digital Media
            </div>

            <div className="p-4 text-center hidden group-hover:block">
              <p className="text-white text-sm mb-4">
                PHP is the best language I know.
              </p>
              <button className="px-4 py-2 bg-white text-black text-sm rounded-lg shadow hover:bg-gray-200 transition duration-300 mb-4"
              onClick={handleButtonClickDM}>
                Read More
              </button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiamondSection;
