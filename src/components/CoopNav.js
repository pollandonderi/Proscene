import React from 'react';

const CoopNav = () => {
  const navItems = [
    { label: 'Our Work' },
    { label: 'Strategy & Design' },
    { label: 'Build & Integrate' },
    { label: 'Support & Maintain' },
  ];

  return (
    <div className="bg-[#132042] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {navItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="text-white text-xl font-axioforma font-medium hover:text-blue-300 transition duration-300">
              {item.label}
            </span>
            {index < navItems.length - 1 && (
              <div className="h-6 w-px bg-blue-500 mx-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoopNav;