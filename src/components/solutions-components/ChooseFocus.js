import React from "react";

function ChooseYourFocus() {
  const cards = [
    {
      title: "Seamless Home Theater Solutions",
      description:
        "Transform your living space into a cinematic experience with cutting-edge audio and visual solutions tailored to your needs.",
      icon: "🎥",
    },
    {
      title: "Professional Audio Systems",
      description:
        "Elevate sound clarity and immersion with our high-performance audio solutions designed for homes, events, and studios.",
      icon: "🎵",
    },
    {
      title: "Customized Visual Displays",
      description:
        "Enhance your presentations and entertainment with bespoke visual displays, including 4K projectors and high-definition screens.",
      icon: "📺",
    },
    {
      title: "Integrated Smart Solutions",
      description:
        "Streamline your audiovisual setup with smart home integration, offering remote control and automation for effortless usability.",
      icon: "🤖",
    },
    {
      title: "Event Production Services",
      description:
        "Create unforgettable events with our professional-grade audiovisual equipment and technical support for sound and lighting.",
      icon: "🎤",
    },
    {
      title: "Corporate AV Solutions",
      description:
        "Enhance business meetings and conferences with state-of-the-art audiovisual technology, ensuring seamless collaboration.",
      icon: "💼",
    },
    {
      title: "Outdoor Entertainment Systems",
      description:
        "Take your entertainment outside with weather-resistant speakers and displays designed for outdoor spaces.",
      icon: "🌟",
    },
    {
      title: "Content Streaming Optimization",
      description:
        "Enjoy uninterrupted streaming with our advanced solutions for high-speed internet and optimized network performance.",
      icon: "🌐",
    },
    {
      title: "Virtual Reality Experiences",
      description:
        "Immerse yourself in cutting-edge virtual reality technology for gaming, training, and entertainment experiences.",
      icon: "🕶️",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-blue-100 pb-10">
      <h2 className="text-center text-3xl font-extrabold text-[#081129] mb-10">
        Choose Your Focus with a Modular Approach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
          >
            <div className="text-6xl mb-4 text-purple-600">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChooseYourFocus;
