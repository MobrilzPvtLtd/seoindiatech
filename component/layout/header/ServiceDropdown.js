import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/learn-more" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
        Learn more
      </Link>
    </div>
  );
};

export default function ServiceDropdown() {
  const services = [
    { title: 'Automation', description: 'Automation streamlines tasks, boosting efficiency and reducing errors, so your team can focus on strategic goals.', icon: '⚙️' },
    { title: 'Workflow', description: 'Workflow streamlines and automates tasks, ensuring a smooth, efficient, and organized process from start to finish.', icon: '📋' },
    { title: 'Promotion & Ads', description: 'Drive brand visibility and attract your target audience through strategic messaging and impactful campaigns.', icon: '📣' },
    { title: 'CRM & Tools', description: 'CRM and management tools optimize customer relationships and streamline operations for better efficiency and growth.', icon: '👥' },
    { title: 'Market Research', description: 'Market research provides valuable insights into consumer behavior and emerging trends, guiding smart business decisions.', icon: '🔍' },
    { title: 'Website Creation', description: 'Website creation involves designing and developing an engaging, functional online presence tailored to your brand\'s needs.', icon: '🌐' },
  ];

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
      ))}
      <div className="col-span-full flex justify-center items-center">
        <div className="relative">
          <svg className="w-48 h-48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="blue" />
            <path d="M 30 70 A 20 20 0 0 1 70 70" fill="yellow" />
            <circle cx="35" cy="65" r="2" fill="red" />
            <circle cx="45" cy="55" r="2" fill="red" />
            <circle cx="55" cy="65" r="2" fill="red" />
            <path d="M 30 70 A 20 20 0 0 0 70 70" fill="none" stroke="green" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}