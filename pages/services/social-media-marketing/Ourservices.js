import React, { useState } from 'react';

const servicesData = [
  {
    title: 'Insightful Analytics',
    content: 'Gain deep insights into your campaigns and audience behavior with real-time analytics.'
  },
  {
    title: 'Intuitive Publishing',
    content: 'Easily schedule and publish content across multiple platforms from one place.'
  },
  {
    title: 'Research Social Media',
    content: 'Understand what your audience is talking about and strategize accordingly.'
  },
  {
    title: 'Planning Feature',
    content: 'Plan your content calendar with clarity and manage collaborations seamlessly.'
  },
];

const Ourservices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our <span className="text-blue-700">Services</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Uncover exactly how you’re providing value at each stage of the customer journey and respond accordingly.
        </p>

        {/* Accordion Items */}
        <div className="space-y-4">
          {servicesData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md transition-all duration-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-gray-900 focus:outline-none"
              >
                <span>{item.title}</span>
                <span className="text-2xl text-gray-500">{activeIndex === index ? '−' : '+'}</span>
              </button>

              {/* Slide Toggle Content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-40 py-2' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Service-Services-Image.webp" 
          alt="Analytics Visual" 
          className="rounded-2xl w-full h-auto object-cover shadow-lg bg-red-400"
        />
      </div>
    </div>
  );
};

export default Ourservices;
