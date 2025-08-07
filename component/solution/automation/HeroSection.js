import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Scale, 
  ArrowRight,
  Bot
} from 'lucide-react';

export default function HeroSection() {
  const [activeBot, setActiveBot] = useState(0);

  // Cycle through different bot states for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBot((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation class based on active bot state
  const getAnimationClass = (index) => {
    return activeBot === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
  };

  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />,
      title: "Increase Efficiency",
      description: "Automate routine tasks and optimize workflows to save time and resources.",
      hoverClass: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" />,
      title: "Reduce Costs",
      description: "Minimize operational expenses by reducing manual labor and increasing precision.",
      hoverClass: "group-hover:bg-green-100 dark:group-hover:bg-green-900/30"
    },
    {
      icon: <Users className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300" />,
      title: "Enhance Customer Experience",
      description: "Deliver seamless interactions with automated chatbots, email workflows, and personalized marketing.",
      hoverClass: "group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30"
    },
    {
      icon: <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300" />,
      title: "Improve Scalability",
      description: "Scale effortlessly with cloud-based automation solutions tailored to your business growth.",
      hoverClass: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30"
    }
  ];

  // Bot animation frames
  const botAnimationFrames = [
    "/images/bot-frame1.svg", 
    "/images/bot-frame2.svg", 
    "/images/bot-frame3.svg"
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800/80 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm">
                <Bot className="w-4 h-4" />
                <span>AI-Powered Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-16">
                Digital
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                Digital automation is the key to eliminating repetitive tasks, reducing human errors, 
                and accelerating workflows. By integrating AI-driven processes, robotic process 
                automation (RPA), and intelligent business automation tools, we help businesses:
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`group border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-transparent dark:hover:border-transparent p-4 md:p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md ${benefit.hoverClass}`}
                >
                  <div className="flex gap-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg transition-colors duration-300 group-hover:bg-white dark:group-hover:bg-gray-900">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center">
            {/* Main image with glow effect */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 dark:opacity-50 blur-xl rounded-full"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <Image 
                  src="/images/herobg.jpg"
                  alt="Automation Bot"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
                
                {/* Bot animation overlay */}
                <div className="absolute bottom-0 right-0 p-6">
                  {[0, 1, 2].map((index) => (
                    <div 
                      key={index} 
                      className={`absolute transition-all duration-700 ease-in-out ${getAnimationClass(index)}`}
                    >
                      <div className="bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                        <Bot 
                          className={`w-12 h-12 ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : 'text-green-500'}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 flex gap-6 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency</div>
              </div>
              <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Operation</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}