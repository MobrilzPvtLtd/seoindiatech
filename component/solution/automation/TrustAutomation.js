import { useState, useEffect } from 'react';

export default function TrustAutomationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Automation benefits data
  const automationBenefits = [
    {
      id: 1,
      text: "Automate customer service tasks, such as answering questions and processing orders.",
      color: "text-blue-600"
    },
    {
      id: 2,
      text: "Automate marketing tasks, such as sending email newsletters and creating social media posts.",
      color: "text-green-600"
    },
    {
      id: 3,
      text: "Automate sales tasks, such as generating leads and qualifying prospects.",
      color: "text-purple-600"
    },
    {
      id: 4,
      text: "Automate accounting tasks, such as tracking expenses and generating invoices.",
      color: "text-orange-600"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Trust Us
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                We Know Our Stuff!
              </h2>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
              Let Us Help
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Why Would You Use Digital Automation
                </h3>
                
                <div className="space-y-6">
                  {automationBenefits.map((benefit, index) => (
                    <div
                      key={benefit.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg transform transition-all duration-300 hover:bg-gray-50 cursor-pointer ${hoveredItem === benefit.id ? 'bg-gray-50' : ''} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 150 + 300}ms` }}
                      onMouseEnter={() => setHoveredItem(benefit.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full bg-gray-800 mt-2 transform transition-all duration-300 ${hoveredItem === benefit.id ? 'scale-125 bg-blue-600' : ''}`}></div>
                      </div>
                      <p className={`text-gray-700 text-lg leading-relaxed transition-colors duration-300 ${hoveredItem === benefit.id ? benefit.color : 'text-gray-700'}`}>
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className={`transform transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Illustration Container */}
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Robot Figure */}
                  <div className="relative z-10">
                    {/* Robot Head */}
                    <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-3xl mx-auto relative mb-2">
                      {/* Eyes */}
                      <div className="absolute top-6 left-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-6 right-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      {/* Antenna */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gray-400 rounded-full"></div>
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    </div>

                    {/* Robot Body */}
                    <div className="w-28 h-32 bg-gradient-to-b from-gray-300 to-gray-400 rounded-xl mx-auto relative">
                      {/* Screen */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-black rounded border-2 border-gray-600">
                        <div className="text-green-400 text-xs font-mono p-1 animate-pulse">
                          <div>&lt;/&gt;</div>
                        </div>
                      </div>
                      {/* Control Buttons */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Base */}
                    <div className="w-32 h-6 bg-blue-600 rounded-full mx-auto mt-2 shadow-lg"></div>
                  </div>

                  {/* Floating Elements */}
                  {/* Laptop */}
                  <div className="absolute top-8 right-4 transform rotate-12 animate-bounce">
                    <div className="w-20 h-16 bg-gray-800 rounded-lg relative">
                      <div className="w-18 h-12 bg-green-400 rounded-sm m-1 flex items-center justify-center">
                        <div className="w-12 h-8 bg-green-500 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="absolute bottom-16 left-4 transform -rotate-12 animate-pulse">
                    <div className="w-12 h-20 bg-blue-500 rounded-xl relative">
                      <div className="w-10 h-16 bg-blue-400 rounded-lg m-1 flex items-center justify-center">
                        <div className="w-6 h-10 bg-blue-600 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Documents/Papers */}
                  <div className="absolute top-20 left-8 transform rotate-6">
                    <div className="w-16 h-12 bg-yellow-400 rounded-lg shadow-md relative overflow-hidden">
                      <div className="absolute inset-1 bg-yellow-300 rounded">
                        <div className="w-full h-1 bg-yellow-600 mt-1"></div>
                        <div className="w-3/4 h-1 bg-yellow-600 mt-1"></div>
                        <div className="w-1/2 h-1 bg-yellow-600 mt-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Gears */}
                  <div className="absolute bottom-8 right-8 animate-spin">
                    <div className="w-8 h-8 border-4 border-gray-600 border-t-transparent rounded-full"></div>
                  </div>

                  <div className="absolute top-32 right-12">
                    <div className="w-6 h-6 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }}/>
                        <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.6 }}/>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ready to get started?
              </h2>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
              Contact Us Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}