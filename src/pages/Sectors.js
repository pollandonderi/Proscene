import React from 'react';
import BookDemoToday from '../components/BookDemo';
import Footer from '../components/Footer';
import LogoCarousel from '../components/LogoCarousel';
import SolutionsCards from '../components/solutions-components/SolutionsCards';
import SolutionThatWorkForYou from '../components/SolutionWork';

function Sector() {
  return (
    <div className='p-0 pb-0'> 
      <SolutionThatWorkForYou />   
      <div className='pt-10 pb-10'>
      <LogoCarousel /></div>
      <SolutionsCards />
      <BookDemoToday/>
      <Footer />
    </div>  
  );
}

export default Sector