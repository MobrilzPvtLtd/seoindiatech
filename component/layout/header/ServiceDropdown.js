import Link from 'next/link';
import React, { useState } from 'react';
import {
  Megaphone,
  Palette,
  Star,
  PenTool,
  Search,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ServiceCard = ({ title, description, icon, iconBg, color, slug, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/services/${slug}`}>
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
          <div className={`${iconBg} w-8 h-8 flex items-center justify-center rounded-lg mr-4 shadow-sm transform transition-transform duration-300 ${isHovered ? 'rotate-[-5deg] scale-110' : ''}`}>
            {icon}
          </div>
          <h3 className={`text-md font-semibold text-gray-800 dark:text-white transition-colors ${isHovered ? 'text-blue-600 dark:text-blue-400' : ''}`}>
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-xs relative z-10">
          {description}
        </p>

        {/* Removed the conflicting "hidden" class */}
        <div className={`absolute bottom-4 right-4 items-center text-sm text-blue-600 dark:text-blue-400 font-medium transition-opacity hidden ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <span>Learn more</span>
          <ArrowRight className={`ml-1 w-4 h-4 transition-transform duration-300 ${isHovered ? 'transform translate-x-1' : ''}`} />
        </div>
      </div>
    </Link>
  );
};

export default function ServiceDropdown() {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Drive brand visibility and engage your target audience through strategic social media campaigns and content.',
      icon: <Megaphone className="w-3 h-3 text-white" />,
      iconBg: 'bg-orange-500 dark:bg-orange-600',
      color: 'bg-orange-500 dark:bg-orange-600',
      slug: 'social-media-marketing'
    },
    {
      title: 'Innovative UI/UX Solutions',
      description: 'Design and develop intuitive, user-friendly interfaces to enhance user experience and engagement.',
      icon: <Palette className="w-3 h-3 text-white" />,
      iconBg: 'bg-purple-500 dark:bg-purple-600',
      color: 'bg-purple-500 dark:bg-purple-600',
      slug: 'ui-ux-design'
    },
    {
      title: 'Digital Branding',
      description: 'Build a strong, cohesive brand identity across digital platforms to attract and retain your audience.',
      icon: <Star className="w-3 h-3 text-white" />,
      iconBg: 'bg-blue-500 dark:bg-blue-600',
      color: 'bg-blue-500 dark:bg-blue-600',
      slug: 'digital-branding'
    },
    {
      title: 'Content Marketing',
      description: 'Create and distribute valuable, relevant content to attract and engage your target audience effectively.',
      icon: <PenTool className="w-3 h-3 text-white" />,
      iconBg: 'bg-green-500 dark:bg-green-600',
      color: 'bg-green-500 dark:bg-green-600',
      slug: 'content-marketing'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Optimize your website to rank higher on search engines, increasing visibility and organic traffic.',
      icon: <Search className="w-3 h-3 text-white" />,
      iconBg: 'bg-yellow-500 dark:bg-yellow-600',
      color: 'bg-yellow-500 dark:bg-yellow-600',
      slug: 'seo'
    },
    {
      title: 'PPC Advertising',
      description: 'Run targeted pay-per-click campaigns to drive traffic and conversions with measurable results.',
      icon: <TrendingUp className="w-3 h-3 text-white" />,
      iconBg: 'bg-red-500 dark:bg-red-600',
      color: 'bg-red-500 dark:bg-red-600',
      slug: 'ppc-advertising'
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            iconBg={service.iconBg}
            color={service.color}
            slug={service.slug}
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