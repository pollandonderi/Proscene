import React from 'react';
import '../global.css'

function CardComponent({ title, description, imageUrl, link }) {
  return (
    <div className="sector-card flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
  {/* Text Content */}
  <div className="flex flex-col justify-between lg:w-1/2">
    <h2 className="font-bold h2sectorcard" style={{lineHeight:'1.3'}}>{title}</h2>
    <p className="font-normal lg:w-[90%] sm:w-[80%] mt-4" style={{color:'rgb(22, 33, 61)'}}>{description}</p>
    <a href={link} className="text-[#368cee] font-medium mt-2">Read More</a>
  </div>

  {/* Image Content */}
  <div className="h-96 lg:w-1/2">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover rounded-2xl" />
  </div>
</div>

  );
}

export default CardComponent;