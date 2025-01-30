import React, { useEffect, useState } from "react";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import digitalMediaJpg from "../components/assets/lc.jpg";
import BookDemoToday from "../components/BookDemo";
import FAQ from "./Faq";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import SupportMaintain from "../components/SupportMaintain";
import Stats from "../components/StatsSection.js";

function DigitalMedia() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/bookDemo");
  };

  const swipeTexts = [
    "Transform your brand with engaging digital campaigns.",
    "Maximize reach and engagement across social platforms.",
    "Elevate your content strategy with tailored solutions.",
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
    { id: "feature1", label: "Social Media Strategy" },
    { id: "feature2", label: "Content Creation" },
    { id: "feature3", label: "Digital Advertising" },
    { id: "feature4", label: "Analytics & Insights" },
    { id: "feature5", label: "SEO Optimization" },
    { id: "feature6", label: "Influencer Marketing" },
  ];

  const content = {
    feature1: {
      title: "Social Media Strategy",
      description:
        "Develop comprehensive social media plans to amplify your brand's presence across key platforms.",
      image:
        digitalMediaJpg,
    },
    feature2: {
      title: "Content Creation",
      description:
        "Engage audiences with high-quality visuals, videos, and blogs tailored to your brand's voice.",
      image:
        digitalMediaJpg,
    },
    feature3: {
      title: "Digital Advertising",
      description:
        "Drive traffic and conversions with targeted advertising campaigns across search engines and social platforms.",
      image:
        digitalMediaJpg,
    },
    feature4: {
      title: "Analytics & Insights",
      description:
        "Measure performance with detailed analytics to refine strategies and improve ROI.",
      image:
        digitalMediaJpg,
    },
    feature5: {
      title: "SEO Optimization",
      description:
        "Enhance your website’s visibility on search engines with tailored SEO strategies.",
      image:
        digitalMediaJpg,
    },
    feature6: {
      title: "Influencer Marketing",
      description:
        "Collaborate with industry influencers to expand your brand's reach and credibility.",
      image:
        digitalMediaJpg,
    },
  };

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="flex flex-col mt-20 md:flex-row items-center justify-center p-8 bg-white">
          <div
            className="bg-blue-800 py-16 text-white p-10 md:w-1/2 Br"
            style={{ height: "100%" }}
          >
            <h1 className="font-bold h1sizing">
              Elevate Your Digital Presence.
            </h1>
            <p className="text-lg mb-6">{swipeTexts[currentIndex]}</p>
            <div className="button-Center">
              <button
                className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-red-700"
                onClick={handleButtonClick}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={digitalMediaJpg}
              alt="digital media"
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
        <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
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
            className="absolute bottom-0 left-0 h-[2px] bg-blue-800 transition-transform"
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

      <div
        id="faqs"
        className="flex flex-col mt-9 pt-6 justify-center items-center pb-5"
      >
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
        <FAQ />
      </div>
      <SupportMaintain />
      <Stats />
      <BookDemoToday />
      <Footer />
    </div>
  );
}

export default DigitalMedia;
