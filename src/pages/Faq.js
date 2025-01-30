import React, { useState, useRef } from "react";

const faqs = [
 
  {
    question: "What services does your company offer?",
    answer: "We provide a wide range of audio-visual services, including equipment rental, on-site technical support, event production, permanent installations, and custom AV solutions tailored to your needs."
  },
  {
    question: "Do you provide on-site technical support?",
    answer: "Yes, we offer on-site technical support to ensure smooth operation of your audio-visual systems during events. Our technicians are experienced in troubleshooting and handling live scenarios for maximum reliability."
  },
  {
    question: "What types of events do you support?",
    answer: "We support a variety of events, including corporate meetings, conferences, weddings, concerts, school productions, and private parties. No matter the size or type of event, we can provide customized AV solutions."
  },
  {
    question: "Can you customize AV solutions for specific needs?",
    answer: "Absolutely! We specialize in tailoring audio-visual setups to match your venue, audience size, and specific requirements. Whether you're hosting a hybrid event or need a unique installation, we’ve got you covered."
  },
  {
    question: "What happens if there’s an equipment failure during an event?",
    answer: "In the rare event of equipment failure, our team will immediately troubleshoot and replace faulty equipment with backups on-site, ensuring minimal disruption to your event."
  },
  {
    question: "How do I book your services?",
    answer: "You can book our services by contacting us via phone, email, or through our website. Our team will guide you through the process and help you choose the right package for your needs."
  },
  {
    question: "Do you rent audio-visual equipment?",
    answer: "Yes, we offer a wide range of audio-visual equipment for rent, including projectors, sound systems, LED walls, microphones, and lighting. Contact us for availability and pricing."
  },
  {
    question: "Can you handle hybrid or virtual events?",
    answer: "Yes, we have extensive experience in managing hybrid and virtual events, including live streaming, video conferencing, and integrating virtual platforms to create seamless experiences."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-8" style={{maxWidth:'1100px'}}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isActive={activeIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

const FAQItem = ({ faq, isActive, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="faq-item border border-gray-300 rounded-[20px] mb-4 overflow-hidden"
      onClick={onClick}
    >
      <div className="faq-question flex justify-between items-center p-8 cursor-pointer">
        <span className="text-lg font-medium">{faq.question}</span>
        <button className="text-xl font-bold">{isActive ? "-" : "+"}</button>
      </div>
      <div
        ref={contentRef}
        className="faq-answer transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isActive
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
          opacity: isActive ? 1 : 0,
        }}
      >
        <div className="p-4 bg-white">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
