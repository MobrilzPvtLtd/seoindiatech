import React from 'react';
import { Search, Users, RotateCw, Layers, ArrowRight } from 'lucide-react';

const Advertisement = () => {
  // PPC services data
  const ppcServices = [
    {
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Google Ads & Search Engine Marketing (SEM)",
      description: "Get to the top of Google search results and attract high-intent buyers ready to convert.",
      features: [
        "Google Search Ads & Display Ads",
        "YouTube Video Ads & Shopping Ads",
        "Google Remarketing & Retargeting"
      ],
      color: "blue"
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Social Media Advertising",
      description: "Leverage the power of Facebook, Instagram, LinkedIn, and TikTok Ads to drive engagement and sales.",
      features: [
        "Facebook & Instagram Paid Campaigns",
        "LinkedIn B2B Lead Generation",
        "TikTok & Snapchat Ads for Viral Reach"
      ],
      color: "indigo"
    },
    {
      icon: <RotateCw className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Retargeting & Conversion Optimization",
      description: "Re-engage lost visitors and turn them into paying customers with strategic retargeting campaigns.",
      features: [
        "Dynamic Remarketing & Abandoned Cart Recovery",
        "A/B Testing & Ad Performance Optimization",
        "Landing Page Optimization for Higher Conversions"
      ],
      color: "purple"
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Display & Programmatic Advertising",
      description: "Maximize brand exposure and reach new audiences through AI-powered programmatic ads.",
      features: [
        "Banner Ads & Native Advertising",
        "Geofencing & Location-Based Targeting",
        "AI-Driven Bidding Strategies"
      ],
      color: "blue"
    }
  ];

  // Helper function for color classes
  const getColorClasses = (color, element) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-800",
        hover: "hover:border-blue-300 dark:hover:border-blue-700"
      },
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-800",
        hover: "hover:border-indigo-300 dark:hover:border-indigo-700"
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-800",
        hover: "hover:border-purple-300 dark:hover:border-purple-700"
      }
    };
    
    return colorMap[color][element];
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-4 py-16 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className='text-center mb-16'>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <span>PPC Services</span>
          </div>
          
          <h2 className='text-gray-900 dark:text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6'>
            Our PPC Advertising Services
          </h2>
          
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Drive traffic, leads, and sales with our strategic and ROI-driven ad solutions customized for your business goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10'>
          {ppcServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-800 border rounded-xl shadow-lg p-6 md:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl ${getColorClasses(service.color, 'border')} ${getColorClasses(service.color, 'hover')}`}
            >
              {/* Card Header with Icon */}
              <div>
                <div className={`p-3 ${getColorClasses(service.color, 'bg')} rounded-lg w-fit mb-4`}>
                  {service.icon}
                </div>
                
                <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
                  {service.title}
                </h3>
                
                <p className='text-gray-700 dark:text-gray-300 mb-6'>
                  {service.description.split('high-intent').map((part, i, arr) => 
                    i === 0 && arr.length > 1 ? 
                      <React.Fragment key={i}>
                        {part}<strong className={getColorClasses(service.color, 'text')}>high-intent</strong>
                      </React.Fragment> : part
                  )}
                </p>
              </div>
              
              {/* Card Features */}
              <div>
                <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-5"></div>
                
                <ul className='space-y-3'>
                  {service.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <div className={`min-w-[8px] h-2 w-2 rounded-full ${getColorClasses(service.color, 'bg')} mt-2`}></div>
                      <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisement;