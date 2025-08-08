import Link from 'next/link';
import React, { useState } from 'react';
import { 
  Settings, 
  ClipboardList, 
  Megaphone, 
  Users, 
  Search, 
  Globe 
} from 'lucide-react';

const SolutionCard = ({ title, description, icon, iconBg, color, slug, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/solution/${slug}`}>
      <div
        className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1 relative overflow-hidden cursor-pointer h-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `fadeIn 0.5s ease-out forwards`,
          animationDelay: `${index * 0.1}s`,
          opacity: 0,
        }}
      >
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 ${color} opacity-10 transform translate-x-10 -translate-y-10 rotate-45`}></div>

        <div className="flex items-center mb-4 relative z-10">
          <div className={`${iconBg} w-10 h-10 flex items-center justify-center rounded-lg mr-4 shadow-sm transform transition-transform duration-300 ${isHovered ? 'rotate-[-5deg] scale-110' : ''}`}>
            {icon}
          </div>
          <h3 className={`text-lg font-semibold text-gray-800 dark:text-white transition-colors ${isHovered ? 'text-blue-600 dark:text-blue-400' : ''}`}>
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-0 relative z-10 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function SolutionDropdown() {
  const solutions = [
    { 
      title: 'Automation', 
      description: 'Automation streamlines tasks, boosting efficiency and reducing errors, so your team can focus on strategic goals.', 
      icon: <Settings className="w-5 h-5 text-white" />,
      iconBg: 'bg-blue-500 dark:bg-blue-600',
      color: 'bg-blue-500 dark:bg-blue-600',
      slug: 'automation'
    },
    { 
      title: 'Workflow', 
      description: 'Workflow streamlines and automates tasks, ensuring a smooth, efficient, and organized process from start to finish.', 
      icon: <ClipboardList className="w-5 h-5 text-white" />,
      iconBg: 'bg-green-500 dark:bg-green-600',
      color: 'bg-green-500 dark:bg-green-600',
      slug: 'workflow'
    },
    { 
      title: 'Promotion & Ads', 
      description: 'Drive brand visibility and attract your target audience through strategic messaging and impactful campaigns.', 
      icon: <Megaphone className="w-5 h-5 text-white" />,
      iconBg: 'bg-orange-500 dark:bg-orange-600',
      color: 'bg-orange-500 dark:bg-orange-600',
      slug: 'promotion-and-ads'
    },
    { 
      title: 'CRM & Tools', 
      description: 'CRM and management tools optimize customer relationships and streamline operations for better efficiency and growth.', 
      icon: <Users className="w-5 h-5 text-white" />,
      iconBg: 'bg-purple-500 dark:bg-purple-600',
      color: 'bg-purple-500 dark:bg-purple-600',
      slug: 'crm-and-tools'
    },
    { 
      title: 'Market Research', 
      description: 'Market research provides valuable insights into consumer behavior and emerging trends, guiding smart business decisions.', 
      icon: <Search className="w-5 h-5 text-white" />,
      iconBg: 'bg-yellow-500 dark:bg-yellow-600',
      color: 'bg-yellow-500 dark:bg-yellow-600',
      slug: 'market-research'
    },
    { 
      title: 'Website Creation', 
      description: 'Website creation involves designing and developing an engaging, functional online presence tailored to your brand\'s needs.', 
      icon: <Globe className="w-5 h-5 text-white" />,
      iconBg: 'bg-red-500 dark:bg-red-600',
      color: 'bg-red-500 dark:bg-red-600',
      slug: 'website-creation'
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {solutions.map((solution, index) => (
          <SolutionCard 
            key={index} 
            title={solution.title} 
            description={solution.description} 
            icon={solution.icon}
            iconBg={solution.iconBg}
            color={solution.color}
            slug={solution.slug}
            index={index}
          />
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}