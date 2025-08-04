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
    {
        title: 'Social Media Marketing',
        description: 'Drive brand visibility and engage your target audience through strategic social media campaigns and content.',
        icon: '📣'
    },
    {
        title: 'Innovative UI/UX Solutions',
        description: 'Design and develop intuitive, user-friendly interfaces to enhance user experience and engagement.',
        icon: '🎨'
    },
    {
        title: 'Digital Branding',
        description: 'Build a strong, cohesive brand identity across digital platforms to attract and retain your audience.',
        icon: '🌟'
    },
    {
        title: 'Content Marketing',
        description: 'Create and distribute valuable, relevant content to attract and engage your target audience effectively.',
        icon: '✍️'
    },
    {
        title: 'Search Engine Optimization',
        description: 'Optimize your website to rank higher on search engines, increasing visibility and organic traffic.',
        icon: '🔍'
    },
    {
        title: '(PPC) Advertising',
        description: 'Run targeted pay-per-click campaigns to drive traffic and conversions with measurable results.',
        icon: '📈'
    },
];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
      ))}
    </div>
  );
}