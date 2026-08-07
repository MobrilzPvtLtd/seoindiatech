import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShoppingCart, Calendar, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Ecommerce Shop',
      description: 'Upload your products is never been easier now, and connect them to your website and social media channels.',
      icon: <ShoppingCart className="w-7 h-7" />,
      image: '/images/whoweare/ecommerce.png',
      color: 'from-primary/20 to-primary/20 dark:from-primary/10 dark:to-primary-hover/10',
      iconBg: 'bg-primary/10 dark:bg-primary/15',
      iconColor: 'text-primary dark:text-accent'
    },
    {
      title: 'Booking System',
      description: 'An integrated system that would allow you to start generating and organizing your guidance immediately.',
      icon: <Calendar className="w-7 h-7" />,
      image: '/images/whoweare/appointment.png',
      color: 'from-cream0/20 to-purple-600/20 dark:from-cream0/10 dark:to-purple-600/10',
      iconBg: 'bg-primary/10 dark:bg-primary/20',
      iconColor: 'text-primary dark:text-accent'
    },
    {
      title: 'Website Builder',
      description: 'Launch your website within two weeks by choosing one of our prebuilt templates that suits your business.',
      icon: <Globe className="w-7 h-7" />,
      image: '/images/whoweare/browser.png',
      color: 'from-emerald-500/20 to-emerald-600/20 dark:from-emerald-500/10 dark:to-emerald-600/10',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white dark:bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-background dark:bg-primary/15 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-50 dark:bg-red-900/10 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-primary dark:text-accent">Amazing </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 dark:from-red-500 dark:to-red-300 italic font-semibold">Features</span>
          </h2>
          
          <p className="text-body max-w-2xl mx-auto text-lg">
            Discover our amazing features and dive deeper into the technical solutions we provide to help you succeed.
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
              
              <div className="h-full flex flex-col bg-card dark:bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
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
                <h3 className="text-2xl font-bold text-heading mb-4">{feature.title}</h3>
                <p className="text-muted mb-6 flex-grow">{feature.description}</p>
                
                {/* Button */}
                <div className="mt-auto">
                  <button className="inline-flex items-center gap-2 text-primary dark:text-accent font-medium group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
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
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover dark:from-primary dark:to-primary-hover text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform active:scale-95">
            Explore All Features
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;