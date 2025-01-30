import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faMobileScreenButton, faHeadset, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const ServiceHero = () => {
  const fourSs = [
    {
      title: 'Simple',
      description: 'Remove complex barriers to using and benefiting from capabilities.',
      icon: faFileInvoice,
    },
    {
      title: 'Scalable',
      description: 'Choose solutions that are easily repeatable from office to office.',
      icon: faMobileScreenButton,
    },
    {
      title: 'Supportable',
      description: 'Spaces that are easy to use should also be easy to support.',
      icon: faHeadset,
    },
    {
      title: 'Secure',
      description: 'Safeguard devices, the network, application interfaces, and sensitive information.',
      icon: faShieldAlt,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Four Ss design strategy</h2>
        <p className="text-lg mb-8">
          Proscene teams follow our Four Ss strategy when designing flexible solutions, ensuring they are simple, scalable, supportable, and secure.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {fourSs.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <FontAwesomeIcon icon={item.icon} className="text-purple-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;