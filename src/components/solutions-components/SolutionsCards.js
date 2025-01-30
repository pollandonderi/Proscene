import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import coop from "../assets/coop.jpeg";
import th from "../assets/conference.webp";
import mask from "../assets/Maskimage.jpg";
import hc from "../assets/hc.jpeg";
import legal from "../assets/legal.jpeg";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function SolutionsCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook to navigate

  const cards = [
    {
      image: coop,
      title: "Corporate Sector",
      description: "Explore business solutions, office supplies, and services tailored for the corporate sector.",
      route: "/corporate",
    },
    {
      image: th,
      title: "Legal Collaboration",
      description: "Access high-quality legal tools, collaboration services, and resources for law firms and attorneys.",
      route: "/legalCollaboration",
    },
    {
      image: mask,
      title: "Education & Training",
      description: "Find educational resources, training materials, and tools to enhance learning experiences.",
      route: "/education",
    },
    {
      image: hc,
      title: "HealthCare",
      description: "Discover healthcare solutions, medical supplies, and services for hospitals, clinics, and healthcare professionals.",
      route: "/healthcare",
    },
    {
      image: legal,
      title: "Public Sector",
      description: "Explore resources and solutions for government agencies, municipalities, and public service organizations.",
      route: "/publicSector",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleMoreInfoClick = (route) => {
    navigate(route); // Navigate to the route when the button is clicked
  };

  return (
    <div
      className="relative w-3/4 py-12 px-8 rounded-3xl mt-12 mx-auto"
      style={{ backgroundColor: "rgba(248, 243, 255, 0.8)" }}
    >
      <h2 className="text-2xl font-bold text-center text-black mb-8">
        We help in every niche
      </h2>

      {/* left and right nav buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-[-80px] top-1/2 transform -translate-y-1/2 bg-purple-400 text-white rounded-full shadow-lg p-3 hover:bg-purple-600 focus:outline-none z-20"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={36} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 bg-purple-400 text-white rounded-full shadow-lg p-3 hover:bg-purple-600 focus:outline-none z-20"
        aria-label="Next Slide"
      >
        <FaChevronRight size={36} />
      </button>

      {/* Card swipe */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 py-8 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center snap-center w-64 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 ${
              index === currentIndex ? "scale-105 z-10" : "scale-100 blur-sm"
            } border border-purple-500`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 text-center">{card.description}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => handleMoreInfoClick(card.route)} // Navigate on button click
            >
              More Info
            </button>
          </div>
        ))}
      </div>

      {/* Dots showing current card */}
      <div className="flex justify-center mt-4">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-colors ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default SolutionsCards;
