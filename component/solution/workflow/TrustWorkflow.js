import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Zap, BarChart2 } from 'lucide-react';

const TrustWorkFlow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Track Progress",
      description: "Monitor task completion and team efficiency as it happens."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Automate Tasks",
      description: "Streamline operations by eliminating routine tasks with automation."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Identify Bottlenecks",
      description: "Identify and fix workflow issues swiftly to maintain productivity."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <span>Workflow Management</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                No Need To Worry Anymore
              </h3>
              
              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

              <p className="text-justify text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Managing tasks is effortless with workflow management software. Track team progress, assign responsibilities, and spot bottlenecks instantly. Automation and integration ensure workflows are streamlined, errors are minimized, and your operations run smoothly.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700"
                    style={{ 
                      transitionDelay: `${300 + (index * 100)}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'all 0.5s ease-out'
                    }}
                  >
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div
            className={`flex justify-center items-center transform transition-all duration-700 ease-out delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 dark:opacity-40 blur-xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/automation.png"
                    alt="Workflow Automation Illustration"
                    width={500}
                    height={500}
                    className="object-contain bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              
              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-3/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-around">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Time Saved</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Monitoring</div>
                </div>
              </div>
              
              {/* Floating annotation */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-blue-600 dark:text-blue-400 animate-bounce">
                Automated!
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default TrustWorkFlow;