import React from 'react';

const WhyProscene = () => {
  const benefits = [
    {
      title: 'A unique opportunity to spearhead Proscene\'s success in your market',
      description: [
        'Become a part of a global growth journey, capitalizing on a mature, proven cloud-based, innovative offering.',
        'Enjoy special incentives and support for penetrating new territories and verticals.',
        'Accelerate your customers\' business value.',
      ],
    },
    {
      title: 'Boost your revenue',
      description: [
        'A rewarding revenue-sharing scheme on software fees.',
        '100% services fees retention.',
        'Develop and monetize additional services and product developments to deepen footprint and create value-driven customer relationships.',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/3 text-left mb-8 lg:mb-0 lg:px-12">
          <h2 className="text-3xl font-bold my-12 text-[#5ed0f9] inline-block align-middle">Why Partner with Proscene?</h2>
        </div>
        <div className="lg:w-1/2 lg:border-l border-purple-600 lg:pl-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 align-middle">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="list-disc list-inside">
                  {benefit.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProscene;
