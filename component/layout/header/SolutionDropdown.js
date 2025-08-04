import Link from 'next/link';
import React from 'react';

const SolutionCard = ({ title, description, icon }) => {
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

export default function SolutionDropdown() {
  const services = [
    { title: 'Automation', description: 'Automation streamlines tasks, boosting efficiency and reducing errors, so your team can focus on strategic goals.', icon: '⚙️' },
    { title: 'Workflow', description: 'Workflow streamlines and automates tasks, ensuring a smooth, efficient, and organized process from start to finish.', icon: '📋' },
    { title: 'Promotion & Ads', description: 'Drive brand visibility and attract your target audience through strategic messaging and impactful campaigns.', icon: '📣' },
    { title: 'CRM & Tools', description: 'CRM and management tools optimize customer relationships and streamline operations for better efficiency and growth.', icon: '👥' },
    { title: 'Market Research', description: 'Market research provides valuable insights into consumer behavior and emerging trends, guiding smart business decisions.', icon: '🔍' },
    { title: 'Website Creation', description: 'Website creation involves designing and developing an engaging, functional online presence tailored to your brand\'s needs.', icon: '🌐' },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {services.map((service, index) => (
        <SolutionCard key={index} title={service.title} description={service.description} icon={service.icon} />
      ))}
    </div>
  );
}