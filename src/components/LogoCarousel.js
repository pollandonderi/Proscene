import React, { useRef, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LogoCarousel.css';
import avaya from './assets/avaya.jpg';
import barco from './assets/barco.jpg';
import creston from './assets/creston.jpg';
import epson from './assets/epson.jpg';
import extron from './assets/extron.jpg';
import LG from './assets/LG.jpg';
import lifesize from './assets/lifesize.jpg';
import optoma from './assets/optoma.jpg';
import panasonic from './assets/panasonic.jpg';
import samsung from './assets/samsung.jpg';

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  const logos = [
    { src: avaya, alt: 'Avaya' },
    { src: barco, alt: 'Barco' },
    { src: creston, alt: 'Creston' },
    { src: epson, alt: 'Epson' },
    { src: extron, alt: 'Extron' },
    { src: LG, alt: 'LG' },
    { src: lifesize, alt: 'Lifesize' },
    { src: optoma, alt: 'Optoma' },
    { src: panasonic, alt: 'Panasonic' },
    { src: samsung, alt: 'Samsung' },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (carousel) {
          carousel.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, []);

  const handleMouseEnter = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.animationPlayState = 'running';
    }
  };

  return (
    <div className="logo-carousel">
      <div className="carousel" ref={carouselRef}>
        <div
          className="carousel-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logos.map((logo, index) => (
            <div key={index} className="carousel-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="logo"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="carousel-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
