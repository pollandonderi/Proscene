import React from 'react';

function StudiesCardComponent({ title, description, videoUrl, link }) {
    return (
        <div className="sector-card flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 bg-[#f3f6ff] h-full">
          <div className="flex flex-col justify-between lg:w-1/2">
            <h2 className="font-bold h2sectorcard" style={{ lineHeight: '1.3' }}>{title}</h2>
            <p className="font-normal lg:w-[90%] sm:w-[80%] mt-4" style={{ color: 'rgb(22, 33, 61)' }}>{description}</p>
            <a href={link} className="text-[#368cee] font-medium mt-2">Read More</a>
          </div>
      
          <div className="lg:w-1/2 h-full">
            <video
              controls
              className="w-full h-[200px] rounded-lg object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
      
}

export default StudiesCardComponent;