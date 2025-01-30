import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const statsData = [
    { value: 2500, label: 'Associates' },
    { value: 40, label: 'Locations Worldwide', suffix: '+' },
    { value: 30, label: 'Years In Business', suffix: '+' },
    { value: 1, label: 'Annual Revenue', suffix: 'B+' },
  ];

  const [inView, setInView] = useState(false); // Tracks if the stats are visible
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div className="flex flex-col justify-center">
          <h2 className="maxwidthcontainer" style={{fontSize:'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)', fontWeight:'700', color:'#16213d', lineHeight:'1'}}>
            We are  <span className="text-[#3b37e6]"> <br />Proscene</span>
          </h2>
          <p className="mt-8"  style={{fontSize:'clamp(1.2656rem, 1.0692rem + 0.9822vw, 1.99rem)',color:'#16213d'}}>
            We are building a world a world without boundaries - where every experience transcends the technology that enables it.
          </p>
          <p className="mt-8"  style={{fontSize:'clamp(1rem, 0.9661rem + 0.1695vw, 1.125rem)',fontWeight:'700',color:'#16213d'}}>
            We are building a world a world without boundaries - where every experience transcends the technology that enables it.
          </p>
        </div>

       
        <div className="flex justify-center items-center">
        <div 
          className="relative w-[450px] h-[450px] rounded-full border-4 border-red-500 overflow-hidden"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
            title="Video Example"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
      </div>
    </div>
      </div>
      <div className="bg-[#fff] py-12" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center relative">
                {/* Divider line */}
                {index !== 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#080e2b] mx-auto hidden md:block"></div>
                )}
                {/* Countup animation */}
                <div className="" style={{fontSize:'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)', fontWeight:'700', color:'#16213d'}}>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix={stat.suffix || ''}
                      duration={5}
                    />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="mt-2 text-lg text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Stats;
