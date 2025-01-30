import React from "react";
import Footer from "../components/Footer";
import SupportPackage from "../components/services-components/Support";
import WhyProscene from "../components/services-components/WhyProscene";
import BookDemoToday from "../components/BookDemo";
import ServiceHero from "../components/services-components/ServiceHero";

function Services() {
    return(
        <div className = "">
        <ServiceHero />
        <WhyProscene />
            <SupportPackage /> 
            <BookDemoToday/>           
            <Footer />
        </div>
    );
}

export default Services;