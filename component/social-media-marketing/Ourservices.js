import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const servicesData = [
  {
    title: "Insightful Analytics",
    content:
      "Gain deep insights into your campaigns and audience behavior with real-time analytics.",
  },
  {
    title: "Intuitive Publishing",
    content:
      "Easily schedule and publish content across multiple platforms from one place.",
  },
  {
    title: "Research Social Media",
    content:
      "Understand what your audience is talking about and strategize accordingly.",
  },
  {
    title: "Planning Feature",
    content:
      "Plan your content calendar with clarity and manage collaborations seamlessly.",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 pt-4 pb-8">
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Our <span className="text-blue-700 dark:text-blue-500">Services</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
          Uncover exactly how you're providing value at each stage of the
          customer journey and respond accordingly.
        </p>

        {/* Accordion Items */}
        <div className="space-y-4">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 ${
                activeIndex === index
                  ? "border-l-4 border-blue-600 dark:border-blue-500"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-gray-900 dark:text-white focus:outline-none"
              >
                <span>{item.title}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>

              {/* Slide Toggle Content */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-40 py-2 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Service-Services-Image.webp"
            alt="Analytics Visual"
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Optional decorative element */}
        <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-2xl"></div>
      </div>
    </section>
    </section>
  );
};

export default OurServices;
