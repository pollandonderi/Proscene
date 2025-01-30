import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Card = ({ title, description, icon, hoverColor, borderColor, hoverBgColor, navigateTo, buttonColor, titleColor }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavigation = () => {
    navigate(navigateTo);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`group relative pl-10 pr-10 pb-10 pt-6 border ${borderColor} border-opacity-100 rounded-3xl shadow-md hover:shadow-lg transition-transform duration-300 overflow-visible`}
      style={{
        backgroundColor: "transparent",
      }}
    >
      {/* Card background on hover changes */}
      <div
        className="absolute inset-0 rounded-3xl transition-colors duration-300 opacity-0 group-hover:opacity-100"
        style={{
          zIndex: 0,
          backgroundColor: hoverBgColor,
        }}
      ></div>

      {/* Icon, title, description */}
      <div className="relative transition-transform duration-300 group-hover:-translate-y-1 z-10">
  {/* Icon */}
  <div
    className={`w-12 h-12 mb-4 transition-all duration-300 transform group-hover:-translate-y-12 group-hover:z-10 ${hoverColor}`}
  >
    {icon}
  </div>

  {/* Title */}
  <h3 className=" font-semibold  mb-2 transition-transform duration-300 group-hover:-translate-y-6"  style={{fontSize:'clamp(1.2656rem, 1.0692rem + 0.9822vw, 1.79rem)', color:titleColor,}}>
    {title}
  </h3>

  {/* Description */}
  <p
    className={` text-gray-600 transition-transform duration-300 group-hover:-translate-y-6 block`}
  >
    {description}
  </p>
</div>


      {/* Expand/Collapse Arrow for Small Screens */}
      <div className="sm:hidden flex justify-center mt-4">
        <button
          onClick={toggleExpand}
          className="text-gray-600 focus:outline-none"
          aria-label="Toggle Content"
        >
          {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      </div>

      {/* Button */}
      <div
        className={`absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isExpanded ? "block sm:block" : "sm:block"
        }`}
      >
        <button
          className={`mx-auto block px-4 py-2 rounded-full text-white hover:bg-opacity-80 transition-colors duration-300`}
          style={{
            backgroundColor: buttonColor,
          }}
          onClick={handleNavigation}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

const SolutionsLayout = () => {
  return (
    <div className="flex flex-col my-16 justify-center items-center maxWidthContainer mx-auto">
      {/* Title and Description Above Cards */}
      <div className="text-center mb-8">
        <h2 className="text-[20px] font-bold text-[#16213d] font-axioforma mb-[10px] ml-auto mr-auto">
          Enter a world of solutions, designed for your business
        </h2>
        <p className="text-[15px] text-[#343434]">
          Cutting-edge cloud-based business management solutions to amplify operational efficiency, uncover new opportunities, <br />stay agile in the rapidly changing market, and outperform competitors.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        <Card
          title="Interactive Technology"
          description="Accelerate your organization’s growth."
          icon={
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              <span className="text-3xl font-bold">📱</span>
            </div>
          }
          hoverColor="text-indigo-500"
          borderColor="border-[#a042ff]"
          hoverBgColor="#eaddff"
          titleColor="#a042ff"
          navigateTo="/interactiveTechnology"
          buttonColor="#a042ff"
        />
        <Card
          title="Audio Visual"
          description="True Omnichannel, All-in-One Retail Management Solution."
          icon={
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <span className="text-3xl font-bold">🎥</span>
            </div>
          }
          hoverColor="text-purple-500"
          borderColor="border-[#3c39eb]"
          hoverBgColor="#d9e0ff"
          titleColor="#3c39eb"
          navigateTo="/avIntegration"
          buttonColor="#3c39eb"
        />
        <Card
          title="Digital Media"
          description="Next-Gen Property Management Software."
          icon={
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
              <span className="text-3xl font-bold">💻</span>
            </div>
          }
          hoverColor="text-blue-500"
          borderColor="border-[#00d2fb]"
          hoverBgColor="#e0f7ff"
          titleColor="#00d2fb"
          navigateTo="/digitalMedia"
          buttonColor="#00d2fb"
        />
        <Card
          title="Collaboration"
          description="Ace pedagogical management with Proscene SMIS."
          icon={
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
              <span className="text-3xl font-bold">🧑‍🤝‍🧑</span>
            </div>
          }
          hoverColor="text-red-500"
          borderColor="border-[#ff6663]"
          hoverBgColor="#ffe5e5"
          titleColor="#ff6663"
          buttonColor="#ff6663"
          navigateTo="/collaborationSolutions"
        />
      </div>
    </div>
  );
};

export default SolutionsLayout;
