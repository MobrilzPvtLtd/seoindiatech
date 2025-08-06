import Link from 'next/link';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const SolutionCard = ({ title, description, icon, slug }) => {
  return (
    <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <Link 
        href={`/solution/${slug}`} 
        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded transition-colors duration-300"
      >
        Learn more
      </Link>
    </div>
  );
};

export default function SolutionDropdown() {
  const solutions = [
    { 
      title: 'Automation', 
      description: 'Automation streamlines tasks, boosting efficiency and reducing errors, so your team can focus on strategic goals.', 
      icon: '⚙️',
      slug: 'automation'
    },
    { 
      title: 'Workflow', 
      description: 'Workflow streamlines and automates tasks, ensuring a smooth, efficient, and organized process from start to finish.', 
      icon: '📋',
      slug: 'workflow'
    },
    { 
      title: 'Promotion & Ads', 
      description: 'Drive brand visibility and attract your target audience through strategic messaging and impactful campaigns.', 
      icon: '📣',
      slug: 'promotion-and-ads'
    },
    { 
      title: 'CRM & Tools', 
      description: 'CRM and management tools optimize customer relationships and streamline operations for better efficiency and growth.', 
      icon: '👥',
      slug: 'crm-and-tools'
    },
    { 
      title: 'Market Research', 
      description: 'Market research provides valuable insights into consumer behavior and emerging trends, guiding smart business decisions.', 
      icon: '🔍',
      slug: 'market-research'
    },
    { 
      title: 'Website Creation', 
      description: 'Website creation involves designing and developing an engaging, functional online presence tailored to your brand\'s needs.', 
      icon: '🌐',
      slug: 'website-creation'
    },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-colors duration-300">
      {solutions.map((solution, index) => (
        <SolutionCard 
          key={index} 
          title={solution.title} 
          description={solution.description} 
          icon={solution.icon}
          slug={solution.slug}
        />
      ))}
    </div>
  );
}