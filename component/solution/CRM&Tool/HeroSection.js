// components/HeroSection.js
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white container px-20 mx-auto p-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          CRM & Management<br />Tools
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg text-justify">
          Our CRM and management tools are more than just software – they're the catalysts for positive change within your organization. Whether you're aiming to enhance customer relationships, streamline internal processes, or improve team collaboration, our suite of tools is here to empower your journey toward success. Take the first step in transforming your business – explore our CRM and management solutions today!
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
      <Image 
        src="/images/crm.png"
        alt="Hero Image"
        width={500}
        height={400}
        className="w-full h-auto object-cover "/>
      </div>
    </div>
  );
};

export default HeroSection;