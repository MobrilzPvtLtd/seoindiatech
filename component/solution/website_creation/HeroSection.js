// components/HeroSection.js
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  container px-20 bg-white  mx-auto py-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Website Creation
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg text-justify">
       Creating a successful website requires ongoing effort and optimization. Continuously monitoring and improving the website based on user feedback, industry trends, and changing business needs.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
      <Image 
        src="/images/website_creation2.png"
        alt="Hero Image"
        width={500}
        height={500}
        className="w-full h-auto object-cover "/>
      </div>
    </div>
  );
};

export default HeroSection;