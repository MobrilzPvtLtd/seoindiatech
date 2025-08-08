import { CheckCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TrustAutomationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Automation benefits data
  const automationBenefits = [
    {
      id: 1,
      text: "Automate customer service tasks, such as answering questions and processing orders.",
      color: "text-blue-600 dark:text-blue-400",
      iconColor: "text-blue-500 dark:text-blue-400"
    },
    {
      id: 2,
      text: "Automate marketing tasks, such as sending email newsletters and creating social media posts.",
      color: "text-indigo-600 dark:text-indigo-400",
      iconColor: "text-indigo-500 dark:text-indigo-400"
    },
    {
      id: 3,
      text: "Automate sales tasks, such as generating leads and qualifying prospects.",
      color: "text-blue-600 dark:text-blue-400",
      iconColor: "text-blue-500 dark:text-blue-400"
    },
    {
      id: 4,
      text: "Automate accounting tasks, such as tracking expenses and generating invoices.",
      color: "text-indigo-600 dark:text-indigo-400",
      iconColor: "text-indigo-500 dark:text-indigo-400"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <span>Benefits</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Why Would You Use Digital Automation
              </h3>

              <div className="space-y-3">
                {automationBenefits.map((benefit, index) => (
                  <div
                    key={benefit.id}
                    className={`flex items-start space-x-4 p-4 rounded-lg transform transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer ${hoveredItem === benefit.id ? 'bg-gray-50 dark:bg-gray-700/50' : ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}
                    onMouseEnter={() => setHoveredItem(benefit.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex-shrink-0 p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                      <CheckCheck className={`w-5 h-5 ${hoveredItem === benefit.id ? benefit.iconColor : 'text-blue-500 dark:text-blue-400'}`} />
                    </div>
                    <p className={`text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-300 ${hoveredItem === benefit.id ? benefit.color : 'text-gray-700 dark:text-gray-300'}`}>
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300 inline-flex items-center group">
                  Learn more about our automation services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className={`transform transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 p-8 shadow-xl">
              {/* Main Illustration Container */}
              <div className="relative w-full max-w-lg mx-auto h-80">
                {/* Robot Figure */}
                <div className="relative z-10">
                  {/* Robot Head */}
                  <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-t-3xl mx-auto relative mb-2">
                    {/* Eyes */}
                    <div className="absolute top-6 left-6 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-6 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                    {/* Antenna */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-ping"></div>
                  </div>

                  {/* Robot Body */}
                  <div className="w-28 h-32 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-500 dark:to-gray-600 rounded-xl mx-auto relative">
                    {/* Screen */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-black dark:bg-gray-900 rounded border-2 border-gray-600 dark:border-gray-700">
                      <div className="text-blue-400 dark:text-blue-300 text-xs font-mono p-1 animate-pulse">
                        <div>&lt;/&gt;</div>
                      </div>
                    </div>
                    {/* Control Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Base */}
                  <div className="w-32 h-6 bg-blue-600 dark:bg-blue-700 rounded-full mx-auto mt-2 shadow-lg"></div>
                </div>

                {/* Floating Elements */}
                {/* Laptop */}
                <div className="absolute top-8 right-4 transform rotate-12 animate-bounce">
                  <div className="w-20 h-16 bg-gray-800 dark:bg-gray-900 rounded-lg relative">
                    <div className="w-18 h-12 bg-blue-400 dark:bg-blue-500 rounded-sm m-1 flex items-center justify-center">
                      <div className="w-12 h-8 bg-blue-500 dark:bg-blue-600 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="absolute bottom-16 left-4 transform -rotate-12 animate-pulse">
                  <div className="w-12 h-20 bg-blue-500 dark:bg-blue-600 rounded-xl relative">
                    <div className="w-10 h-16 bg-blue-400 dark:bg-blue-500 rounded-lg m-1 flex items-center justify-center">
                      <div className="w-6 h-10 bg-blue-600 dark:bg-blue-700 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Documents/Papers */}
                <div className="absolute top-20 left-8 transform rotate-6">
                  <div className="w-16 h-12 bg-indigo-200 dark:bg-indigo-900 rounded-lg shadow-md relative overflow-hidden">
                    <div className="absolute inset-1 bg-indigo-100 dark:bg-indigo-800 rounded">
                      <div className="w-full h-1 bg-indigo-300 dark:bg-indigo-600 mt-1"></div>
                      <div className="w-3/4 h-1 bg-indigo-300 dark:bg-indigo-600 mt-1"></div>
                      <div className="w-1/2 h-1 bg-indigo-300 dark:bg-indigo-600 mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* Gears */}
                <div className="absolute bottom-8 right-8 animate-spin">
                  <div className="w-8 h-8 border-4 border-blue-500 dark:border-blue-400 border-t-transparent rounded-full"></div>
                </div>

                <div className="absolute top-32 right-12">
                  <div className="w-6 h-6 border-4 border-indigo-500 dark:border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }} />
                      <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 150 Q200 100 300 150"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path
                    d="M150 250 Q200 200 250 250"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="3,7"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              
              {/* Key stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Operation</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}