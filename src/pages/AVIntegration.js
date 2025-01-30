import React, { useEffect, useState } from "react";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import digitalMediaJpg from "../components/assets/lc.jpg";
import BookDemoToday from "../components/BookDemo";
import FAQ from "./Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SupportMaintain from "../components/SupportMaintain";
import Stats from "../components/StatsSection.js";

function AVIntegrations() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const swipeTexts = [
    "Transform your space with cutting-edge audio-visual solutions.",
    "Seamless integration for immersive experiences.",
    "Custom AV systems for businesses and homes.",
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
    { id: "feature1", label: "AV System Design" },
    { id: "feature2", label: "Installation Services" },
    { id: "feature3", label: "Custom Solutions" },
    { id: "feature4", label: "Support & Maintenance" },
    { id: "feature5", label: "Smart Home Integration" },
    { id: "feature6", label: "Conference Room Solutions" },
  ];

  const content = {
    feature1: {
      title: "AV System Design",
      description:
        "We create tailored AV system designs to meet your specific needs, from residential to commercial applications.",
      image:
        digitalMediaJpg,
    },
    feature2: {
      title: "Installation Services",
      description:
        "Our expert team ensures seamless installation of AV systems for a hassle-free experience.",
      image:
        digitalMediaJpg,
    },
    feature3: {
      title: "Custom Solutions",
      description:
        "We offer custom AV solutions to enhance your experience, from integrated home theaters to corporate setups.",
      image:
        digitalMediaJpg,
    },
    feature4: {
      title: "Support & Maintenance",
      description:
        "Our ongoing support and maintenance ensure that your AV systems are always up and running smoothly.",
      image:
        digitalMediaJpg,
    },
    feature5: {
      title: "Smart Home Integration",
      description:
        "Integrate your AV systems with smart home technology for a fully connected and automated environment.",
      image:
        digitalMediaJpg,
    },
    feature6: {
      title: "Conference Room Solutions",
      description:
        "We provide professional AV solutions for conference rooms, ensuring high-quality presentations and meetings.",
      image:
        digitalMediaJpg,
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
              Enhance Your Space with Advanced AV Solutions
            </h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button
                className="border bg-[#3b37e6] border-white text-white py-2 px-6 rounded-2xl hover:bg-red-700"
                onClick={handleButtonClick}
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={digitalMediaJpg}
              alt="AV Integration"
              className="ml-10 shadow-lg"
              style={{ borderRadius: "2em" }}
            />
            <img
              src={leftbottomSvg}
              alt="decoration"
              className="absolute -bottom-2 left-4 w-40"
              style={{ zIndex: "999" }}
            />
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-800 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="p-4">
        <h2 className="text-center onsitesubheads font-bold mb-4">Our Services</h2>
        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveLink(link.id)}
                className={`px-4 py-2 ${
                  activeLink === link.id
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-transform"
            style={{
              transform: `translateX(${
                links.findIndex((link) => link.id === activeLink) * 100
              }%)`,
            }}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
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
      <SupportMaintain />
      <Stats />
      <div
        id="faqs"
        className="flex flex-col mt-9 pt-6 justify-center items-center pb-5"
      >
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
        <FAQ />
      </div>
      <BookDemoToday />
      <Footer />
    </div>
  );
}

export default AVIntegrations;
