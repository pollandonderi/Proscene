import React, { useEffect, useState } from "react";
import "./Onsitesupport.css";
import leftbottomSvg from "../components/assets/leftbottom.svg";
import supportjpg from "../components/assets/support.jpg";
import { motion } from "framer-motion";
import FAQ from "./Faq";
import Footer from '../components/Footer';
import BookDemoToday from '../components/BookDemo';

function OnSiteSupport() {
  const swipeTexts = [
    "Amplify operational efficiency, discover new opportunities, and stay agile in the rapidly changing market.",
    "Streamline your processes and innovate faster to achieve measurable success.",
    "Empower your business with cutting-edge solutions tailored to your needs.",
  ];
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // te texts swipe evry 3seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % swipeTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [swipeTexts.length]);
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const [activeLink, setActiveLink] = useState("feature1");

  const links = [
    { id: "feature1", label: "On-Site Tech" },
    { id: "feature2", label: "Setup & Config" },
    { id: "feature3", label: "Live Support" },
    { id: "feature4", label: "Routine Checks" },
    { id: "feature5", label: "Staff Training" },
    { id: "feature6", label: "Backup Ready" },
  ];

  const content = {
    feature1: {
      title: "Dedicated On-Site Technician",
      description: "ProScene assigns a skilled technician to your venue or event to manage audio-visual equipment. For the corporate sector, this ensures glitch-free board meetings, while for the entertainment industry, it guarantees flawless live performances.",
      image: "https://cdn-ilcbfhj.nitrocdn.com/YPZtsISkluZEqUPtVHEQPXBjhUZGiUtZ/assets/images/optimized/rev-5ebb0a9/recruitmilitary.com/wp-content/uploads/2024/02/AdobeStock_622368032.jpeg",
    },
    feature2: {
      title: "Equipment Setup and Configuration",
      description: "ProScene customizes the setup of your AV equipment to suit your specific needs. Whether it's a university lecture hall or a music festival, our team ensures every detail is perfect for the occasion.",
      image: "https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/aerotek/business-insights/what-is-a-field-service-technician-social.png?rev=97377329b1bb4eb9883e3d7315fac0a8",
    },
    feature3: {
      title: "Real-Time Troubleshooting",
      description: "ProScene provides immediate issue resolution during events. From ensuring smooth virtual conferences for businesses to handling tech hitches at large-scale exhibitions, we've got you covered.",
      image: "https://t3.ftcdn.net/jpg/04/57/11/78/360_F_457117809_CqpzPLXiHCtMkaYdPz1cdJHx0uqtF0mu.jpg",
    },
    feature4: {
      title: "Regular Maintenance and Testing",
      description: "ProScene performs routine system inspections to prevent disruptions. Ideal for healthcare facilities requiring reliable telemedicine setups or theaters needing consistent audio clarity..",
      image: "https://www.fieldinsight.com/wp-content/uploads/2022/04/115-Maintenace-Inspection-Types.png",
    },
    feature5: {
      title: "Customized Training for Staff",
      description: "ProScene offers tailored training to empower your team. From hotel staff mastering AV setups for conferences to retail employees managing digital displays, we simplify the process.",
      image: "https://cdn.prod.website-files.com/616225f979e8e45b97acbea0/674fc6c9391ab7c3afb8d8e4_66fac5cd2692ef5b7b9430d6_634c96a73a43d5bb56b6711d_YXOLMg-_Tuwf8X6l_bJNsjzL_hLH4MEQAC1YviS7ExUiVisPNf6wWmzVhq4bI33O4rDAaEqQe4ErZe7nWT4iMFQ4WmSDbIhgzd0YYvnFNDKxz0tt4-utvqH-nftKJqIDIIYKIq3s_L_3Edjos_6eVksQ_c9NwGIC2-MSP3yHUhDqloXogD-hiVWigA.jpeg",
    },
    feature6: {
      title: "Backup Equipment Availability",
      description: "ProScene provides on-site backup equipment to ensure uninterrupted service. This is critical for the education sector during hybrid learning sessions or for the events industry where reliability is paramount.",
      image: "https://ipnews.com.br/wp-content/uploads/2020/06/backup.jpg",
    },
  };

  return (
    <div>
      <div className="pb-5 maxWidthContainer">
        <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-white mt-24">
          <div
            className="bg-[#3b37e6] py-16 text-white p-10 md:w-1/2 Br"
            style={{ height: "100%" }}
          >
            <h1 className="font-bold h1sizing">
              Need assistance? Support made easy.
            </h1>
            <p className="text-lg mb-6">
              {/* added 3 `line texts` that swipe automatically */}
              {swipeTexts[currentIndex]}
            </p>
            <div className="button-Center">
              <button className="border border-white text-white py-2 px-6 rounded-2xl hover:bg-blue-700">
                Contact us
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2 flex items-center justify-center mt-8 md:mt-0 bg-growth">
            <img
              src={supportjpg}
              alt="home"
              className=" ml-10 shadow-lg"
              style={{ borderRadius: "2em" }}
            />
            <img
              src={leftbottomSvg}
              alt="home"
              className="absolute -bottom-2   left-4 w-40"
              style={{ zIndex: "999" }}
            />

            <div className="absolute -top-5 -right-5 w-32 h-32 bg-purple-200 rounded-lg"></div>
            {/* <div className="absolute -bottom-12 -left-8 w-32 h-16 bg-cyan-200 rounded-full"></div> */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-red-300 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div>
        {/* Button Row */}
        <div className="flex justify-center items-center bg-white">
          <div className="flex flex-wrap justify-center space-x-4 max-w-[800px]">
            {[
              { text: "Competitive edge", id: "competitive-edge" },
              { text: "Key features", id: "key-features" },
              { text: "Case studies", id: "case-studies" },
              { text: "FAQs", id: "faqs" },
            ].map((button, index) => (
              <button
                key={index}
                onClick={() => handleScroll(button.id)}
                className="bg-[#e3eeff] text-[#3b37e6] font-semibold px-6 py-2 transition-colors duration-300 hover:bg-[#3b37e6] hover:text-white"
                style={{ borderRadius: "3em" }}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div
          id="competitive-edge"
          className="pt-9 pb-9 flex justify-center items-center"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-between max-w-[1200px] mx-auto p-4">
            {/* First Column */}
            <div className="md:w-1/2 w-full p-4">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Support That Powers Your Vision
              </h1>
              <p className="mt-4 text-gray-600">
                At ProScene, we understand that exceptional support is the
                foundation of success in the audio-visual industry. Our
                dedicated team is here to ensure your systems perform
                flawlessly, offering timely troubleshooting, regular
                maintenance, and expert guidance. Whether it’s resolving a
                technical glitch or providing on-site assistance, our commitment
                is to keep your projects running smoothly. Reliable support
                means your business can focus on delivering unforgettable
                experiences while we handle the details. Together, we make your
                vision a reality.
              </p>
            </div>

            {/* Second Column */}
            <div className="md:w-1/2 w-full relative flex justify-end items-center p-4">
              {/* Divs Container */}
              <div className="flex flex-end">
                {/* First Div */}
                <div
                  // className="absolute"
                  style={{
                    backgroundColor: "#ecdeff",
                    border: "1px solid #3b37e6",
                    borderRadius: "46px",
                    height: "334px",
                    marginRight: "1em",
                    width: "170px",
                    right: "-8px",
                    top: "0",
                  }}
                ></div>

                {/* Second Div */}
                <div
                  // className="absolute"
                  style={{
                    backgroundColor: "#3b37e6",
                    border: "1px solid #ecdeff",
                    borderRadius: "46px",
                    height: "334px",
                    width: "170px",
                    right: "189px",
                    top: "0",
                  }}
                ></div>

                {/* Last Div */}
                <div
                  className="absolute"
                  style={{
                    height: "259px",
                    backgroundPosition:"center",
                    backgroundImage: `url('https://eaog2nkqckp.exactdn.com/wp-content/uploads/2024/06/2.-Featured-blog-_-closing-deals.webp?strip=all&lossy=1&ssl=1')`,
                    borderRadius: "46px",
                    //   marginInline:'1em',
                    width: "422px",
                    left: "30px",
                    top: "45px",
                    position: "absolute",
                    zIndex: 20,
                  }}
                >
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="key-features"
          className="pt-9 pb-9 flex justify-center items-center"
        >
          <div className="max-w-[1100px] w-full mx-auto my-4 pt-12 pb-14 bg-[#e3eeff] border border-[#3b37e6] rounded-3xl">
            <h1 className="text-center bookdemotitle">
              See how Proscene works for you
            </h1>
            <button className="mt-4 mx-auto block px-6 py-2 mb-4 rounded-[10px] bg-[#3b37e6] text-white hover:bg-[#16213d] transition-all duration-300">
              Book a demo today
            </button>
          </div>
        </div>
        <div
          id="case-studies"
          className="bg-[#f3f6ff] flex justify-center items-center"
        >
          <div className=" min-h-screen flex flex-col justify-center items-center p-6">
            <h1 className="onsitesubheads mb-12 text-center">
              Proscene gives you a true <br></br>competitive edge
            </h1>

            <div className="w-full max-w-7xl pb-9 mb-9" style={{maxWidth:'1100px'}}>
              {/* Row 1 */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.3, // Stagger delay for children (cards)
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Card 1 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">🎯</span>
                  </div>
                  <h3 className="cardheaders text-lg">Tailored Solutions</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    On-site support allows technicians to address technical
                    issues in real-time, minimizing downtime and disruptions
                    during critical events or daily operations.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">🚀</span>
                  </div>
                  <h3 className="cardheaders text-lg">
                    Improved User Confidence
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Having professionals on-site reassures staff and event
                    organizers, providing confidence that any technical
                    challenges will be swiftly resolved.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">⚡</span>
                  </div>
                  <h3 className="cardheaders text-lg">
                    Enhanced Communication
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Face-to-face interactions improve clarity and allow your
                    technicians to gather immediate feedback, which can lead to
                    more effective troubleshooting and service customization.
                  </p>
                </motion.div>
              </motion.div>

              {/* Row 2 (same as Row 1) */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
                initial="hidden"
                whileInView="visible"
                transition={{
                  staggerChildren: 0.3, // Stagger delay for children (cards)
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Card 4 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">💵</span>
                  </div>
                  <h3 className="cardheaders text-lg">Cost Efficiency</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    While on-site support may seem like an added expense, it can
                    save businesses money in the long run by preventing costly
                    delays, errors, or the need to replace improperly used
                    equipment.
                  </p>
                </motion.div>

                {/* Card 5 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">⌛</span>
                  </div>
                  <h3 className="cardheaders text-lg">
                    Immediate Problem Resolution
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    On-site support allows technicians to address technical
                    issues in real-time, minimizing downtime and disruptions
                    during critical events or daily operations.
                  </p>
                </motion.div>

                {/* Card 6 */}
                <motion.div
                  className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center justify-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16  rounded-full mb-4 flex items-center justify-center">
                    <span className="iconsize text-gray-700">👌</span>
                  </div>
                  <h3 className="cardheaders text-lg">
                    Enhanced Reliability
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    On-site support ensures that businesses can rely on expert
                    assistance during high-stakes events like conferences,
                    presentations, or product launches, where flawless AV
                    performance is critical.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto bg-[#f3f6ff] border border-[#3b37e6] rounded-xl p-8" style={{marginBlock:'6em'}}>
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Column */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-4">
                Schedule a no-obligation call with one of our experts to get
                expert advice on how Proscene can help streamline your
                operations.
              </p>
              <div>
                <button className="bg-[#3b37e6] text-white px-6 py-2 rounded-[15px] hover:bg-[#16213d] transition-colors">
                  Click Me
                </button>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex-1">
              <img
                src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fsales-rep-qualities.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.6428&fp-y=0.3549&h=415&q=88&w=622&s=2a6f11b6479804c632085126c0ecf0fc"
                alt="Placeholder"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-center onsitesubheads font-bold mb-4">Key Features</h2>
          {/* Links Row */}
          <div className="relative overflow-hidden max-w-7xl mx-auto">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-1 items-center px-32">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActiveLink(link.id)}
                  className={`px-4 py-2 ${
                    activeLink === link.id
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-transform"
              style={{
                // width: "100%",
                transform: `translateX(${
                  links.findIndex((link) => link.id === activeLink) * 100
                }%)`,
              }}
            />
          </div>
          {/* Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-32" style={{maxWidth:'1100px', margin:'0 auto'}}>
            <div className="m-4 flex justify-center flex-col">
              <h3 className="cardheaders font-semibold mb-2">
                {content[activeLink].title}
              </h3>
              <p className="featuresp">{content[activeLink].description}</p>
            </div>
            <div className="m-4">
              <img
                src={content[activeLink].image}
                alt={content[activeLink].title}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div id="faqs" className="flex flex-col mt-9 pt-6 justify-center items-center pb-5">
        <h3 className="onsitesubheads">Frequently Asked Questions</h3>
          <FAQ />         
        </div>        
      </div>
      <BookDemoToday/>
      <Footer/>    
    </div>
  );
}

export default OnSiteSupport;
