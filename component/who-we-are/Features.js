import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Calendar, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Ecommerce Shop',
      description: 'Upload your products is never been easier now, and connect them to your website and social media channels.',
      icon: <ShoppingCart className="w-7 h-7" />,
      image: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/ecommerce.png',
      color: 'from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Booking System',
      description: 'An integrated system that would allow you to start generating and organizing your guidance immediately.',
      icon: <Calendar className="w-7 h-7" />,
      image: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/appointment.png',
      color: 'from-purple-500/20 to-purple-600/20 dark:from-purple-500/10 dark:to-purple-600/10',
      iconBg: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      title: 'Website Builder',
      description: 'Launch your website within two weeks by choosing one of our prebuilt templates that suits your business.',
      icon: <Globe className="w-7 h-7" />,
      image: 'https://www.digitalyzeit.com/wp-content/uploads/2023/05/browser.png',
      color: 'from-emerald-500/20 to-emerald-600/20 dark:from-emerald-500/10 dark:to-emerald-600/10',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-blue-700 dark:text-blue-400">Amazing </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-red-300 italic font-semibold">Features</span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Enjoy our efficient and amazing features, and learn more about how we technically offer for you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card Background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              <div className="h-full flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                {/* Icon/Image Section */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-full ${feature.iconBg} blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{feature.description}</p>
                
                {/* Button */}
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
                    Learn More 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* Decorative icon in background */}
              <div className={`absolute top-6 right-6 ${feature.iconColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform rotate-12 group-hover:rotate-6`}>
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="hidden text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95">
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;