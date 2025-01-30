import React from "react";
import "./more.css";
import pinkIsh from './assets/pinkish.svg';
import { useNavigate } from "react-router-dom";

function MoreSection () {
  const navigate  = useNavigate();
  
  const handleButtonClick = () => {
      navigate("/bookDemo");
  }

  return (
    <div className="" style={{ marginBlock:'4em'}}>
      <div class="article">
        <div class="wrapper1 grid-col-span2 wrappers borderRadius">
          <div class="maincontainer">
            
          </div>
        </div>
        <div class="wrapper2 wrappers borderRadius">
          <div class="maincontainer">
          <div className="morePartners morePartnerspink center flex-col">
              <h3>4 +</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>
        <div class="wrapper3 wrappers borderRadius">
          <div class="maincontainer">
            
            <div className="morePartners  morePartnersblue center flex-col">
              <h3>10 +</h3>
              <p>partners</p>
            </div>
          </div>
          
        </div>
        <div class="wrapper4 wrappers grid-col-span2 borderRadius">
          <div class="maincontainer justify-center">
            <div class="flex justify-center align-center">
             <h2>The best audio visual provider for your business</h2>
            </div>
           
          </div>
          <div class="secondmaincontainer">
            <p class="paragraph pt-8">
              {" "}
              Proscene provides cutting-edge audio-visual-based solutions equipped with the latest technologies and applications to amplify operational efficiency, discover new opportunities and stay agile in the rapidly changing market.
            </p>
            <div className="button-Center center pt-8">
                <button class="border border-blue-700 bg-blue-700 text-white py-2 px-6 rounded-2xl hover:bg-blue-700" 
                onClick={handleButtonClick}>
                Schedule a demo
                </button>
            </div>
          </div>
          
        </div>
        <div class="wrapper5 wrappers borderRadius">
          <div class="maincontainer flex justify-center">
          <section className="morePartners2  morePartnerspinkish center flex-col" style={{margin:'0 auto', maxWidth:'16em'}}>
              <h3>10 +</h3>
              <p>partners</p>
            </section>
            
            
          </div>
          <div><img src={pinkIsh} class="wrapperimage" alt=""></img></div>
          
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
