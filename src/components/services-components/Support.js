import React from 'react';
import { FaChalkboardTeacher, FaDatabase, FaUserTie, FaHandshake, FaRocket, FaBullhorn } from 'react-icons/fa';

const SupportPackage = () => {
  const supportItems = [
    {
      title: 'An all-inclusive onboarding program',
      description: 'A holistic enablement and onboarding bundle with advanced training.',
      icon: <FaChalkboardTeacher className="text-5xl text-pink-500 mb-4" />,
    },
    {
      title: 'A comprehensive resource database',
      description: 'Access to Proscene\'s resources, demo scripts, marketing materials, and support tools.',
      icon: <FaDatabase className="text-5xl text-pink-500 mb-4" />,
    },
    {
      title: 'Customized service',
      description: 'A dedicated Proscene Partner Manager and customer success managers.',
      icon: <FaUserTie className="text-5xl text-pink-500 mb-4" />,
    },
    {
      title: 'Lead sharing',
      description: 'Lead generation programs support.',
      icon: <FaHandshake className="text-5xl text-pink-500 mb-4" />,
    },
    {
      title: 'Implementation assistance',
      description: 'Get your initial customers up and running quickly and smoothly.',
      icon: <FaRocket className="text-5xl text-pink-500 mb-4" />,
    },
    {
      title: 'Marketing support',
      description: 'Utilize co-branded marketing materials, content & graphics, digital campaigns, and more.',
      icon: <FaBullhorn className="text-5xl text-pink-500 mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl pb-4 text-center">
        <h2 className="text-3xl font-bold mb-8">A comprehensive support package that paves your way to success:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {supportItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportPackage;
