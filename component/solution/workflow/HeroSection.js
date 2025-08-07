// components/HeroSection.js
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center container mx-auto px-20 py-12">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Workflow Process
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg text-justify">
          The workflow process is an essential part of any business operation
          that involves multiple steps, tasks, and people working together to
          achieve a common goal. We help you build a systematic and organized
          approach to managing your work within your organization, which helps
          you streamline your processes, reduce errors, and improve your team’s
          productivity.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <Image
          src="/images/workflow.jpg"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-full h-auto object-cover "
        />
      </div>
    </div>
  );
};

export default HeroSection;
