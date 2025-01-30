import './bookdemopage.css';
import React, { useState } from 'react';
import { FaPhoneAlt, FaMousePointer, FaMapMarkerAlt, FaUsers, FaThumbsUp, FaHeart, FaArrowRight } from 'react-icons/fa';

import Footer from "../components/Footer";

function BookDemo () {
  const countries = ["United States", "Kenya", "Canada", "Germany", "Australia"];
  const roles = [
    "Owner|President|CEO",
    "CFO|Finance Director",
    "CTO",
    "CMO |Marketing",
    "Other",
    "Consultant",
    "IT Director",
    "COO|CIO",
  ];

  return (
    <div>
      <div className = "" style={{marginBlock:"clamp(1.4238rem, 1.0921rem + 1.6585vw, 2.6469rem)"}}>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-14">
          {/* Left Section */}
          <div className="sub-container p-3" >
        <h2 style={{fontSize:'clamp(1.2656rem, 1.0692rem + 0.9822vw, 1.99rem)', fontWeight:'700'}}>Get the resources you need</h2>
        <section>
      {[
        {
          icon: <FaPhoneAlt />,
          title: "Find support",
          description: "Get always-on access to technical support, self-help, and your Proscene instances.",
        },
        {
          icon: <FaMousePointer />,
          title: "Experience a demo",
          description: "See how Proscene solutions can streamline and unite your organization to achieve goals.",
        },
        {
          icon: <FaMapMarkerAlt />,
          title: "Locate our office",
          description: "We have experts in regions around Kenya, all ready to support your digital journey.",
        },
        {
          icon: <FaUsers />,
          title: "Explore our impact",
          description: "Get tailored support and strategic guidance to integrate solutions and accelerate value.",
        },
        {
          icon: <FaThumbsUp />,
          title: "Succeed with our partnerships",
          description: "Whatever your business challenge, our ecosystem of partners will help drive results.",
        },
        {
          icon: <FaHeart />,
          title: "Collaborate with community",
          description: "Tap into a community of the beneficiaries of Proscene.",
        },
      ].map(({ icon, title, description }, index) => (
        <div key={index} className="flex pt-7">
          <div className='flex justify-center icon1' style={{alignItems:'center'}}>{icon}</div>
          <div className="icon-side-words">
            <h3 className='h3-bookdemopage'>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
        </section>
      </div>
          {/* Right Section */}
          <div className="bg-[#16213D] text-white p-5 mb-2 mx-3 rounded-[12px] h-auto flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-6">Book a Demo</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-3 rounded-md bg-white text-black"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 rounded-md bg-white text-black"
                />
              </div>
              <input
                type="text"
                placeholder="Company name"
                className="w-full p-3 rounded-md bg-white text-black"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full p-3 rounded-md bg-white text-black"
              />
              <input
                type="email"
                placeholder="Business email"
                className="w-full p-3 rounded-md bg-white text-black"
              />
              <select className="w-full p-3 rounded-md bg-white text-black">
                <option>Select your role</option>
                  {roles.map((role,index) => (
                    <option key = {index} value= {role}>
                    {role}</option>
                  ))}
              </select>
              <select className="w-full p-3 rounded-md bg-white text-black">
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <select className="w-full p-3 rounded-md bg-white text-black">
                <option>Interested in</option>
                <option>Software Solutions</option>
                <option>Proscene Partnership</option>
              </select>
              <textarea
                placeholder="Message (Optional)"
                className="w-full p-3 rounded-md bg-white text-black h-24"
              ></textarea>
              <p className="text-sm">
                By submitting this form you agree to our{" "}
                <a href="/corporate" className="underline">
                  Terms & Conditions
                </a>.
              </p>
              <button
                type="submit"
                className="w-1/2 flex max-w-7xl mx-auto justify-center bg-[#16213D] border hover:bg-white text-white hover:text-black py-3 rounded-xl font-medium">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookDemo;
