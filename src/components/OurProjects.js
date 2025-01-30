import React, { useState } from 'react';
import ubs from './assets/ubs.jpeg';

const Card = ({ title, description, image, hoverText, navigationLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden transition-all duration-500 ${
        isHovered ? 'z-10 scale-105' : 'z-0 scale-100'
      } shadow-lg h-screen flex flex-col`}
      aria-labelledby={title}
      role="button"
      tabIndex="0"
      style={{ willChange: 'transform' }}
    >
      {/* Image with gradient overlay */}
      <div className="relative w-full h-full flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))',
          }}
        />
      </div>

      {/* Bottom-left text content */}
      <div
        className={`absolute bottom-0 left-0 p-4 text-white transition-all duration-500 transform ${
          isHovered ? 'translate-y-[-50%] mb-32 font-extrabold' : 'translate-y-0'
        }`}
      >
        <h3
          id={title}
          className={`text-xl font-medium font-axioforma transition-all duration-500 ${
            isHovered ? 'text-7xl scale-110 ml-20' : 'text-xl scale-100'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-lg transition-all duration-500 ${
            isHovered ? 'text-xl scale-105 ml-16' : 'text-lg scale-100'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Hover text and 'Explore More' link */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 text-center transition-all duration-500 transform ${
          isHovered ? 'opacity-100 translate-y-0 ml-16' : 'opacity-0 translate-y-full'
        }`}
      >
        <p className="text-lg font-semibold text-white mb-4 ">{hoverText}</p>
        <a
          href={navigationLink}
          className="inline-block px-6 py-2 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
        >
          Explore More &gt;
        </a>
      </div>
    </div>
  );
};

const OurProjects = () => {
  const cards = [
    {
      title: 'UBS Arena',
      description: 'We Make Venues Come Alive',
      image: ubs,
      hoverText:
        'The Latest In-Venue Technology Helps Production, Operations and Presentation Crews Provide Unique Entertainment Experiences',
      navigationLink: '/ubs-arena',
    },
    {
      title: 'Agnico Eagle',
      description: 'We Empower Connections That Power Our World',
      image: ubs,
      hoverText:
        'The Latest In-Venue Technology Helps Production, Operations and Presentation Crews Provide Unique Entertainment Experiences',
      navigationLink: '/georgia-system-operations-corporation',
    },
    {
      title: 'Georgia Operations Team',
      description: 'We Empower Connections That Power Our World',
      image: ubs,
      hoverText:
        'The Latest In-Venue Technology Helps Production, Operations and Presentation Crews Provide Unique Entertainment Experiences',
      navigationLink: '/georgia-system-operations-team',
    },
  ];

  return (
    <div className="pt-10 pb-10">
      {/* Header Section */}
      <div className="text-center bg-white py-10">
        {/* <h1 className="text-5xl sm:text-4xl font-bold text-navy-900 mb-6">
          Our Projects,
        </h1> */}
        <img
          src="https://onediversified.com/hubfs/NEVERBEENDONE_1.gif"
          alt="Never Been Done"
          className="mx-auto w-full max-w-4xl"
        />
      </div>

      {/* Cards Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            hoverText={card.hoverText}
            navigationLink={card.navigationLink}
          />
        ))}
      </div> */}
    </div>
  );
};

export default OurProjects;
