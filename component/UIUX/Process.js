import React from 'react';
import Image from 'next/image';
import { Lightbulb, Workflow, Palette, BarChart3 } from 'lucide-react';

const processCards = [
  {
    title: 'Deep-Dive Research & Strategy',
    description: 'We analyze user behaviors, industry trends, and competitor landscapes to develop a UI/UX strategy tailored to your audience.',
    points: [
      'Data-driven user research',
      'Competitor benchmarking',
      'Persona creation & journey mapping'
    ],
    icon: <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Interactive Wireframing & Prototyping',
    description: 'We visualize the user journey and interactions before development, ensuring an effortless experience.',
    points: [
      'User flow architecture',
      'Low & high-fidelity wireframes',
      'Clickable prototypes for real-world testing'
    ],
    icon: <Workflow className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Bespoke UI Design That Engages',
    description: 'Our UI designs are more than just beautiful—they\'re purpose-driven and strategically crafted to enhance usability.',
    points: [
      'Custom UI with a brand-focused aesthetic',
      'Mobile-first & responsive designs',
      'Consistency across platforms for seamless interactions'
    ],
    icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    title: 'Optimization & Performance Testing',
    description: 'We rigorously test and refine to ensure peak performance, accessibility, and user satisfaction.',
    points: [
      'A/B testing to maximize conversions',
      'User behavior analysis & heatmaps',
      'Ongoing UX optimization for continuous improvement'
    ],
    icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  }
];

const Process = () => {
  return (
    <section className='bg-gray-200 dark:bg-gray-900 py-16 md:py-20 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-700/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            <span>Our Methodology</span>
          </div>
          
          <h1 className='text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Our Proven UI/UX Design<br className="hidden md:block" /> Process
          </h1>
          
          <p className='text-gray-800 dark:text-gray-200 text-lg mt-6 max-w-4xl'>
            At <span className='text-blue-700 dark:text-blue-400 font-bold'>Digitalyzeit,</span> we don't just design, we innovate. Our process ensures every touchpoint enhances user engagement and drives business results.
          </p>
          
          <div className="mt-6 mb-12">
            <div className="h-1 w-24 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Top row - 2 cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          {processCards.slice(0, 2).map((card, index) => (
            <div 
              key={index}
              className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-102 transition duration-300 hover:border-blue-200 dark:hover:border-blue-700'
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/60 rounded-lg">
                  {card.icon}
                </div>
                <h2 className='text-gray-900 dark:text-white text-2xl font-bold'>{card.title}</h2>
              </div>
              
              <p className='text-gray-700 dark:text-gray-300 mb-6'>
                {card.description}
              </p>
              
              <ul className='space-y-2'>
                {card.points.map((point, i) => (
                  <li key={i} className='flex items-start gap-2 text-gray-700 dark:text-gray-300'>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-tight">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row - 3 columns */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Process cards */}
          {processCards.slice(2, 4).map((card, index) => (
            <div 
              key={index}
              className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-102 transition duration-300 hover:border-blue-200 dark:hover:border-blue-700'
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/60 rounded-lg">
                  {card.icon}
                </div>
                <h2 className='text-gray-900 dark:text-white text-xl font-bold'>{card.title}</h2>
              </div>
              
              <p className='text-gray-700 dark:text-gray-300 mb-6'>
                {card.description}
              </p>
              
              <ul className='space-y-2'>
                {card.points.map((point, i) => (
                  <li key={i} className='flex items-start gap-2 text-gray-700 dark:text-gray-300'>
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-lg leading-tight">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Image Card */}
          <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-102 transition duration-300'>
            <div className="relative h-full w-full min-h-[300px]">
              <Image
                src='https://www.digitalyzeit.com/wp-content/uploads/2025/02/UX-design-768x1365.webp'
                alt='UI/UX Design Process'
                fill
                className='object-cover'
              />
              
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white font-semibold">Our Design Philosophy</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Optional bottom statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '94%', label: 'User Satisfaction Rate' },
            { value: '42%', label: 'Increase in Conversions' },
            { value: '3.2s', label: 'Average Page Load Time' },
            { value: '65%', label: 'Reduced Bounce Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400">{stat.value}</div>
              <div className="text-gray-700 dark:text-gray-300 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;