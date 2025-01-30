import React from "react";
import BookDemoToday from "../components/BookDemo.js";
import Footer from "../components/Footer";
import "./About.css";
import OurProjects from "../components/OurProjects.js";
import Stats from "../components/StatsSection.js";
import AboutHero from "../components/AboutHero.js";
import DiamondSection from "../components/DiamondSection.js";

function About() {
  return (
    <div className="p-0">
      <div>
      <AboutHero/>
      </div>

      {/* Our Story Section */}
      <div className="w-full mx-auto mt-20 flex flex-col justify-center items-center">
        <h2 className="py-5 text-center ourstory text-[#D7F7FF] font-black text-3xl sm:text-5xl lg:text-[140px]">
          OUR STORY
        </h2>
        <p
          className="items-center justify-center mx-auto my-10 tracking-wide leading-relaxed text-base
                text-black lg:w-[60%] sm:w-[80%] text-center pl-3 pr-3 story-p"
        >
          Proscene is one of East Africa’s most experienced and innovative
          providers of Audio Visual products, integrated Audio Visual systems,
          Video Collaboration and unified communications technology. We provide
          specialist Audio Visual support, advice and System Installation and
          maintenance services to a vast range of corporate clients, education,
          public sector, government departments and Religious Organisation.
        </p>
      </div>

      {/* Client Vision and Innovation Section */}
      <div class="flex flex-col items-center justify-center min-h-5 py-7 pb-7">
        <div class="flex flex-col sm:flex-row gap-1 items-center w-full max-w-7xl">
          {/* title  */}
          <h3 class="text-3xl sm:pl-12 sm:pr-4 sm:text-7xl font-bold vision-title text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 leading-tight sm:leading-normal sm:w-1/2 sm:mx-0 mx-4 sm:text-left text-center">
            Powered by our clients’ vision and driven by innovation
          </h3>
          {/* line  */}
          <div class="hidden sm:block w-0.5 h-56 bg-purple-500"></div>
          {/* description */}
          <p class="ml-4 sm:ml-0 sm:text-lg text-gray-700 vision-description px-4 sm:px-8 sm:w-1/2 w-full mx-8 sm:mx-0 sm:text-left text-center">
            Proscene specializes in providing organizations with cutting-edge
            cloud-based business management solutions...
          </p>
        </div>
      </div>

      <OurProjects/>

      {/* diamond section */}
      <DiamondSection/> 
      <Stats/>
      <BookDemoToday />
      <Footer />
    </div>
  );
}

export default About;
