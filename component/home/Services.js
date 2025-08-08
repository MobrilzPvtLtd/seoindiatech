import Link from 'next/link';
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Search Engine Optimization',
      desc: "SEO: Boost your website's visibility and rank higher on search engines with our expert SEO strategies.",
      icon: '🔍'
    },
    {
      title: 'Social Media Marketing',
      desc: "Enhance your brand's online presence and engage your audience through effective social media strategies.",
      icon: '📱'
    },
    {
      title: 'Pay-Per-Click (PPC) Advertising',
      desc: "Drive targeted traffic and maximize your ROI with our strategic PPC campaigns.",
      icon: '📈'
    },
    {
      title: 'Content Marketing',
      desc: "Create compelling and relevant content that resonates with your audience and establishes your brand's authority.",
      icon: '✍️'
    },
    {
      title: 'Email Marketing',
      desc: "Reach your audience directly with personalized email campaigns designed to nurture leads and drive conversions.",
      icon: '📧'
    },
    {
      title: 'Web Design and Development',
      desc: "Develop a visually stunning and user-friendly website that reflects your brand and converts visitors into customers.",
      icon: '🌐'
    },
  ];

  return (
    <div className='bg-white dark:bg-gray-900 pt-4 pb-8'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
        {/* Left two columns for cards */}
        <div className='md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-blue-100 dark:border-gray-600'
            >
              <div className="flex items-start mb-4">
                <span className="text-3xl mr-3" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h2 className='text-lg font-bold text-gray-800 dark:text-white'>{service.title}</h2>
              </div>
              <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Right side description card */}
        <div className='bg-gradient-to-br from-gray-900 to-blue-900 dark:from-blue-900 dark:to-indigo-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between'>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white dark:from-blue-300 dark:to-white">
              Our Services
            </h1>
            <p className='mb-8 text-sm sm:text-base leading-relaxed text-blue-100 dark:text-blue-200'>
              At SEO India Tech, we offer a comprehensive suite of digital marketing solutions designed to elevate your brand and drive
              measurable success. Our services are tailored to meet your unique business needs, leveraging the latest technology and
              industry best practices to ensure optimal results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contactus">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform active:scale-95 shadow-md border border-blue-700/20 dark:border-blue-500/30 text-center">
              Get Started
            </button>
            </Link>
            <Link href="/blog">
            <button className="bg-transparent text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 border border-white/20 text-center">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;