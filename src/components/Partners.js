import React, { useState } from 'react';
import './Partner.css';
import futurefirst from './assets/futurefirst.png';
import harney from './assets/harney.webp';
import icipe from './assets/icipe-logo.png';
import mediamax from './assets/mediamax.png';
import ridge from './assets/baptist.jpg';
import supaloaf from './assets/supaloaf.jpg';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const partnerData = [
  { id: 1, logo: harney , description: 'Coulson Harney and Co Advocates a member of Bowman and Gilfillian is a large and well-established Law firm', link: '#loadMore1' },
  { id: 2, logo: icipe, description: 'International Centre of Insect Physiology and Ecology wanted to improve their video communication between Nairobi and there remote centre in Mbita, Nyanza Province.', link: '#loadMore2' },
  { id: 3, logo:  futurefirst, description: 'Future’s first is a global Company that deals in international stocks. The branch , based in Nairobi needed an Audio Visual system that integrates the video.', link: '#loadMore3' },
  { id: 4, logo: ridge, description: 'Ridgeways Baptist Church needed a video system for their new worship facility. Currently, they have been using two portable projectors in the church.', link: '#loadMore4' },
  { id: 5, logo: mediamax, description: 'When Communication Authority embarked on migrating everyone to digital platform, it became necessary for one of Kenya’s largest meda houses to upgrade.', link: '#loadMore5' },
  { id: 6, logo: supaloaf, description: 'In an Industry that spans in more than 25 acres, security is a major concern. Mini Group installed there new CCTV system in there Kangundo Road office.', link: '#loadMore6' },
];

const Card = ({ logo, description, link }) => {
  return (
    <div className="card hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-shadow duration-300 rounded-[17px]">
      <div><img src={logo} style={{width:'60%', aspectRatio:'3/1', margin:'1em'}} alt="Logo" className="partner-Images" /></div>
      <p className="p-4" style={{color:'#16213d', fontSize:'400'}}>{description}</p>
    </div>
  );
};

const Partners = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLoadToggle = () => {
    if (isExpanded) {
      setVisibleCards(3);
    } else {
      setVisibleCards(partnerData.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" max-w-7xl mx-auto px-3">
    <div className="partners-header">
        <h2 className='h2-Partners'>Trusted by the best</h2>
      </div>
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    {partnerData.slice(0, visibleCards).map((card) => (
        <Card
          key={card.id}
          logo={card.logo}
          description={card.description}
          link={card.link}
          className="px-3"
        />
      ))}
    </div>

      
    <div className="load-more-container">
      <span onClick={handleLoadToggle} className="load-more-text cursor-pointer flex items-center gap-2">
        {isExpanded ? (
          <>
            <div className='flex flex-col items-center gap-3' style={{fontWeight:'400' , color:'#3b37e6'}}>Load Less <FaChevronUp className="load-more-icon text-lg" /></div>
          </>
        ) : (
          <>
            <div className='flex flex-col items-center gap-3' style={{fontWeight:'400' , color:'#3b37e6'}}> Load More <FaChevronDown className="load-more-icon text-lg" /></div>
          </>
        )}
      </span>
    </div>
    </div>
  );
};

export default Partners;
