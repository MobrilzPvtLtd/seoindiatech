import React from 'react';
import { Image, Users, BarChart2, Youtube, Zap, Target, Award, TrendingUp } from 'lucide-react';

const Socialmediastrategies = () => {
  const strategies = [
    {
      icon: <Image className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
      title: "Content Creation",
      description: "We believe that content is at the heart of every successful social media campaign. Our expert team crafts engaging, brand-aligned content.",
      color: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-100 dark:border-blue-800",
      iconBg: "bg-blue-100/50 dark:bg-blue-800/30"
    },
    {
      icon: <Users className="w-10 h-10 text-green-600 dark:text-green-400" />,
      title: "Engagement Strategies",
      description: "Engagement is the heartbeat of social media. We develop strategies that foster genuine interactions with your audience.",
      color: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-100 dark:border-green-800",
      iconBg: "bg-green-100/50 dark:bg-green-800/30"
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
      title: "Data-Driven Campaigns",
      description: "Our data-driven approach ensures that every campaign we launch is backed by insights and optimized for performance.",
      color: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-100 dark:border-purple-800",
      iconBg: "bg-purple-100/50 dark:bg-purple-800/30"
    },
    {
      icon: <Youtube className="w-10 h-10 text-red-600 dark:text-red-400" />,
      title: "Influencer Collaborations",
      description: "In the era of influencer marketing, we understand the power of partnerships and connect you with the right voices.",
      color: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-100 dark:border-red-800", 
      iconBg: "bg-red-100/50 dark:bg-red-800/30"
    },
    {
      icon: <Zap className="w-10 h-10 text-amber-600 dark:text-amber-400" />,
      title: "Rapid Response Marketing",
      description: "Stay relevant with our rapid response marketing that helps your brand capitalize on trending topics and conversations.",
      color: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-100 dark:border-amber-800",
      iconBg: "bg-amber-100/50 dark:bg-amber-800/30"
    },
    {
      icon: <Target className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />,
      title: "Targeted Advertising",
      description: "Reach the right audience with precision through our targeted social media advertising strategies and optimization.",
      color: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-100 dark:border-cyan-800",
      iconBg: "bg-cyan-100/50 dark:bg-cyan-800/30"
    },
    {
      icon: <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Brand Reputation Management",
      description: "Protect and enhance your brand's online reputation with our comprehensive monitoring and management services.",
      color: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-100 dark:border-indigo-800",
      iconBg: "bg-indigo-100/50 dark:bg-indigo-800/30"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Growth Strategy Development",
      description: "Scale your social presence with customized growth strategies designed for sustainable, long-term expansion.",
      color: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-100 dark:border-emerald-800",
      iconBg: "bg-emerald-100/50 dark:bg-emerald-800/30"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
          Social Media Excellence
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
          Strengthen Your Brand's Presence With Our <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Social Media Strategies
          </span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Digitalyzeit offers expertly crafted campaigns designed to captivate and connect,
          ensuring your message resonates across platforms and drives meaningful engagement.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#strategies" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Explore Strategies
          </a>
          <a href="/contactus" className="hidden px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700">
            Contact Us
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div id="strategies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <div 
              key={index} 
              className={`relative border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out ${strategy.color} ${strategy.borderColor}`}
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-5 ${strategy.iconBg}`}>
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {strategy.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-2xl p-8 sm:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="text-blue-100 dark:text-blue-200 max-w-xl">
                Let's discuss how our tailored social media strategies can help your brand connect with your audience and achieve measurable results.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="/contactus" 
                className="inline-block px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmediastrategies;