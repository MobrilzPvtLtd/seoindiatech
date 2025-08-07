// components/HeroSection.js
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white items-center container px-20 mx-auto py-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Market Research
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg text-justify">
        Market research is the process of gathering and analyzing information about a market, including its size, trends, competition, and customer needs and preferences. Market research aims to provide insights that can help businesses make informed decisions about their products, services, and marketing strategies.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
      <Image 
        src="/images/marketresearch.png"
        alt="Hero Image"
        width={500}
        height={500}
        className="w-full h-auto object-cover "/>
      </div>
    </div>
  );
};

export default HeroSection;