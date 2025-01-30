import React, { useState, useEffect } from "react";
import adi from './assets/adi.jpeg';
import st from './assets/st.jpeg';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      `"The Comcast Technology Center enables our team to leverage innovative technologies in our storytelling."`,
    author: "Ric Harris, President and General Manager, NBC10 and Telemundo62",
    image: adi
  },
  {
    quote:
      `"This is another powerful quote about leveraging innovative technologies."`,
    author: "Jane Doe, Chief Technology Officer, TechCorp",
    image: "https://onediversified.com/hubfs/Oracle_Park_2021.jpg",
  },
  {
    quote:
      `"The innovative technologies here are a game changer for storytelling."`,
    author: "John Smith, Head of Creative, MediaHouse",
    image: st
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative flex justify-center items-center w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      {testimonials.map((testimonial, index) => (
        <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
        }`}
        >
        {/* Background Image */}
        <div
            style={{
            backgroundImage: `url(${testimonial.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
            className="absolute inset-0"
        ></div>

        {/* Color Overlay */}
        <div
            className="absolute inset-0 bg-blue-900 bg-opacity-50"
            style={{
            backgroundColor: "#3b37e6",
            opacity: 0.4,
            }}
        ></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className=" font-bold mb-4 absolute top-1/3 max-w-7xl mx-auto" style={{fontSize: 'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)', lineHeight:'1'}}>
          {testimonials[currentIndex].quote}
        </h2>
        <p className="text-lg font-semibold absolute bottom-40">{testimonials[currentIndex].author}</p>
      </div>

      {/* Pagination and Navigation */}
      <div className="absolute bottom-4 mb-10 flex justify-center items-center space-x-4">
        <button
          onClick={handlePrev}
          className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-blue-500 active:bg-blue-700 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-10 h-3 rounded-2xl ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-200"
              }`}
            ></div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center shadow-lg hover:bg-blue-500 active:bg-blue-700 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
