import Link from 'next/link';
import React from 'react';
import { useTheme } from 'next-themes';

const ServiceCard = ({ title, description, icon, slug }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const bgClass = mounted && resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-blue-50';
  const textClass = mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-800';
  const descriptionClass = mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const buttonBgClass = mounted && resolvedTheme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700';

  return (
    <div className={`${bgClass} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className={`text-xl font-semibold ${textClass}`}>{title}</h3>
      </div>
      <p className={`${descriptionClass} mb-4`}>{description}</p>
      <Link 
        href={`/services/${slug}`} 
        className={`inline-block px-4 py-2 ${buttonBgClass} text-white rounded transition-colors duration-300`}
      >
        Learn more
      </Link>
    </div>
  );
};

export default function ServiceDropdown() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const containerBgClass = mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white';

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Drive brand visibility and engage your target audience through strategic social media campaigns and content.',
      icon: '📣',
      slug: 'social-media-marketing'
    },
    {
      title: 'Innovative UI/UX Solutions',
      description: 'Design and develop intuitive, user-friendly interfaces to enhance user experience and engagement.',
      icon: '🎨',
      slug: 'ui-ux-design'
    },
    {
      title: 'Digital Branding',
      description: 'Build a strong, cohesive brand identity across digital platforms to attract and retain your audience.',
      icon: '🌟',
      slug: 'digital-branding'
    },
    {
      title: 'Content Marketing',
      description: 'Create and distribute valuable, relevant content to attract and engage your target audience effectively.',
      icon: '✍️',
      slug: 'content-marketing'
    },
    {
      title: 'Search Engine Optimization',
      description: 'Optimize your website to rank higher on search engines, increasing visibility and organic traffic.',
      icon: '🔍',
      slug: 'seo'
    },
    {
      title: '(PPC) Advertising',
      description: 'Run targeted pay-per-click campaigns to drive traffic and conversions with measurable results.',
      icon: '📈',
      slug: 'ppc-advertising'
    },
  ];

  return (
    <div className={`p-6 ${containerBgClass} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-colors duration-300`}>
      {services.map((service, index) => (
        <ServiceCard 
          key={index} 
          title={service.title} 
          description={service.description} 
          icon={service.icon} 
          slug={service.slug}
        />
      ))}
    </div>
  );
}