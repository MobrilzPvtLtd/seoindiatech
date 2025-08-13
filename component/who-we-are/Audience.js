import React from "react";
import {
  Megaphone,
  Globe,
  Settings,
  DollarSign,
  ArrowRight,
  Users
} from "lucide-react";

const Audience = () => {
  const cards = [
    {
      icon: <Megaphone className="w-7 h-7" />,
      title: "From Ads",
      desc: "We optimize your ads to send high-quality, targeted traffic to your site.",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      gradient: "from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "To Website",
      desc: "We help you capture leads and turn them into sales directly on your website.",
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
      gradient: "from-amber-50 to-amber-100/50 dark:from-amber-900/20 dark:to-amber-900/10"
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "To CRM",
      desc: "Efficiently organize your leads and strategically nurture them through your funnels.",
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      gradient: "from-red-50 to-red-100/50 dark:from-red-900/20 dark:to-red-900/10"
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: "To Money",
      desc: "Turn leads into actual sales and precisely track your revenue with our data-driven approach.",
      color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      gradient: "from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-900/10"
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 md:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="md:w-2/5 text-center md:text-left space-y-6">
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              <Users size={16} />
              <span>Audience Targeting</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">audience</span>
            </h1>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Drive targeted traffic from social media to your website and convert visitors into loyal customers with our proven strategies.
            </p>
            
            {/* CTA button */}
            <div className="pt-4">
              <button className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0">
                Discover Our Approach
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient background that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10`}></div>
                
                {/* Icon with colored background */}
                <div className={`inline-flex items-center justify-center p-3 rounded-lg ${card.color} mb-4`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {card.desc}
                </p>
                
                {/* Arrow that appears on hover */}
                <div className="hidden absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="hidden md:flex justify-between mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          {['Identify Audience', 'Create Strategy', 'Optimize Campaigns', 'Measure Results'].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-medium">
                {index + 1}
              </div>
              <span className="ml-2 text-gray-700 dark:text-gray-300">{step}</span>
              {index < 3 && <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;