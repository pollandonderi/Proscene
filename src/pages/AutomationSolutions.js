import React, { useEffect, useState } from "react";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import automationJpg from "../components/assets/un.jpg";
import BookDemoToday from "../components/BookDemo";
import FAQ from "./Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SupportMaintain from "../components/SupportMaintain";
import Stats from "../components/StatsSection.js";

function AutomationSolutions() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/bookDemo")
    };
  const swipeTexts = [
    "Streamline operations with intelligent automation tools.",
    "Boost efficiency and reduce manual errors with automated workflows.",
    "Empower your business with cutting-edge automation solutions.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [swipeTexts.length]);

  const [activeLink, setActiveLink] = useState("feature1");

  const links = [
    { id: "feature1", label: "Intelligent Workflows" },
    { id: "feature2", label: "Process Automation" },
    { id: "feature3", label: "Scalable Solutions" },
    { id: "feature4", label: "Data Security" },
    { id: "feature5", label: "Custom Integrations" },
    { id: "feature6", label: "24/7 Support" },
  ];

  const content = {
    feature1: {
      title: "Intelligent Workflows",
      description:
        "Automate repetitive tasks with workflows designed to enhance productivity and reduce manual effort.",
      image: automationJpg,
    },
    feature2: {
      title: "Process Automation",
      description:
        "Optimize operations by automating critical processes, ensuring consistency and accuracy at every step.",
      image:
        automationJpg,
    },
    feature3: {
      title: "Scalable Solutions",
      description:
        "Deploy automation solutions that scale with your business, adapting to growing demands and complexities.",
      image:
        automationJpg,
    },
    feature4: {
      title: "Data Security",
      description:
        "Safeguard your data with robust security measures, ensuring compliance and peace of mind in automated environments.",
      image:
        automationJpg,
    },
    feature5: {
      title: "Custom Integrations",
      description:
        "Integrate automation tools seamlessly into your existing systems, tailored to your unique business needs.",
      image:
        automationJpg,
    },
    feature6: {
      title: "24/7 Support",
      description:
        "Our team is available around the clock to provide expert assistance and ensure uninterrupted automation.",
      image:
        automationJpg,
    },
  };

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="flex flex-col mt-20 md:flex-row items-center justify-center p-8 bg-white">
          <div
            className="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br"
            style={{ height: "100%" }}
          >
            <h1 className="font-bold h1sizing">
              Automate Smarter, Work Faster.
            </h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700"
              onClick={handleButtonClick}>
                Get Started
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={automationJpg}
              alt="automation"
              className="ml-10 shadow-lg"
              style={{ borderRadius: "2em" }}
            />
            <img
              src={leftbottomSvg}
              alt="decoration"
              className="absolute -bottom-2 left-4 w-40"
              style={{ zIndex: "999" }}
            />
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
        <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
            {links.map((link) => (
            <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 ${
                activeLink === link.id
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-700"
                }`}
            >
                {link.label}
            </button>
            ))}
        </div>
        <div
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-transform"
            style={{
            transform: `translateX(${links.findIndex((link) => link.id === activeLink) * 100}%)`,
            }}
        />
        </div>
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32" style={{maxWidth:'1100px', margin:'0 auto'}}>
        <div className="m-4 flex justify-center flex-col">
            <h3 className="cardheaders font-semibold mb-2">
            {content[activeLink].title}
            </h3>
            <p className="featuresp">{content[activeLink].description}</p>
        </div>
        <div className="m-4">
            <img
            src={content[activeLink].image}
            alt={content[activeLink].title}
            className="w-full h-auto object-cover rounded-2xl"
            />
        </div>
        </div>
        </div>
      <div id="faqs" className="flex flex-col mt-9 pt-6 justify-center items-center pb-5">
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
          <FAQ />         
        </div>
        <SupportMaintain/>
        <Stats/>
        <BookDemoToday/>
      <Footer />
    </div>
  );
}

export default AutomationSolutions;
