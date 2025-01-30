import React from "react";
import Footer from "../components/Footer";
import BookDemoToday from "../components/BookDemo.js";
import homeSvg from "../components/assets/home.svg";
import FeaturedStudies from "../components/case-studies-components/featured_studies.js";

function Casestudies() {
    return(
        <div className = 'mt-20'>        
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f3f6ff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* left side */}
        <div className="text-center md:text-left md:w-1/2">
        <h1 className=" font-bold text-[#3b37e6] pb-6" style={{fontSize:'clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem)'}}>Case Studies</h1>
          <h3 className="text-[#16213d] mb-4" style={{fontSize: 'clamp(1.8019rem, 1.0209rem + 3.9051vw, 4.6819rem)',
  lineHeight: '1',
  fontWeight: '600'}}>
            Thousands of companies across many industries trust Proscene
          </h3>
          <p className="text-lg mt-3 mb-4">
            Proscene to accelerate their growth with an agile, scalable, and
            open audio visual solutions.
          </p>
          <div className="mt-7">
          <button className="bg-[#3b37e6] text-white rounded-[15px] px-6 py-3 text-lg transition-all duration-300 hover:bg-[#16213d]">
      Book a Demo
    </button>
          </div>
        </div>

        {/* right side */}
        <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img src={homeSvg} alt="home" className="rounded-lg shadow-lg" />

            <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
            <div className="absolute -bottom-12 -left-8 w-32 h-16 bg-cyan-200 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
        </div>
      </div>
    </div>
        <div className= "pt-10 pb-10">
        <h3 className="text-center text-2xl font-bold">Featured Case studies</h3>
        </div>
            <div className="">
                <FeaturedStudies/>
            </div> 
        <BookDemoToday/>
        <Footer/>
        </div>
    );
}

export default Casestudies;