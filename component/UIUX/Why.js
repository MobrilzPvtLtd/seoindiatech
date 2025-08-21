import React from 'react';
import Image from 'next/image';

const advantages = [
  {
    image: '/images/services/design part.png',
    title: 'Instant Trust & Credibility',
    description: '75% of users judge a brand\'s trustworthiness by its design.',
    alt: 'Trust'
  },
  {
    image: '/images/services/ux boost.png',
    title: 'Optimized for Conversion',
    description: 'A seamless UI can boost conversion rates by up to 200%.',
    alt: 'Conversion'
  },
  {
    image: '/images/services/ux leads.png',
    title: 'Customer Retention & Loyalty',
    description: 'Intuitive UX leads to 88% higher customer retention rates.',
    alt: 'Retention'
  }
];

const Why = () => {
  return (
    <section className='bg-gray-200 dark:bg-gray-900 py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span>Competitive Edge</span>
          </div>
          
          <h1 className='text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Smart UI/UX, Stronger <br className="hidden md:block" />Business Impact 
          </h1>
          
          <div className="mt-6">
            <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className='space-y-6'>
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className='flex flex-col md:flex-row items-center justify-between border-t border-b border-gray-300 dark:border-gray-700 py-8 gap-6 group hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors rounded-lg px-4'
            >
              <div className="relative overflow-hidden rounded-full w-56 h-20 shadow-md">
                <Image 
                  src={item.image}
                  alt={item.alt}
                  width={224}
                  height={80}
                  className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              
              <h2 className='text-xl font-semibold text-center md:text-left text-gray-800 dark:text-gray-100 md:w-1/3'>
                {item.title}
              </h2>
              
              <p className='text-gray-700 dark:text-gray-300 text-center md:text-left md:w-1/3'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional statistics section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: '2.6x', label: 'ROI for businesses that invest in UX design' },
            { value: '94%', label: 'First impressions are design-related' },
            { value: '8s', label: 'Average time to form an opinion on your website' }
          ].map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-blue-700 dark:text-blue-400">{stat.value}</span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;