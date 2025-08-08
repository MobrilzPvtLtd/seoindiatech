import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Clock, DollarSign, Battery, ArrowRight } from 'lucide-react';

export default function AutomationBenefits() {
  const [isVisible, setIsVisible] = useState(false);

  // Benefits data for better maintainability
  const benefits = [
    {
      id: 1,
      title: "Save Money",
      description: "Reduce operational costs and increase ROI with intelligent automation",
      icon: <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      color: "text-blue-600 dark:text-blue-400",
      bgAccent: "bg-blue-100 dark:bg-blue-900/30",
      delay: "delay-100"
    },
    {
      id: 2,
      title: "Save Time", 
      description: "Eliminate repetitive tasks and focus on what matters most",
      icon: <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      color: "text-blue-600 dark:text-blue-400",
      bgAccent: "bg-blue-100 dark:bg-blue-900/30",
      delay: "delay-200"
    },
    {
      id: 3,
      title: "Save Energy",
      description: "Reduce manual effort with automated workflows and processes",
      icon: <Battery className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      color: "text-blue-600 dark:text-blue-400", 
      bgAccent: "bg-blue-100 dark:bg-blue-900/30",
      delay: "delay-300"
    }
  ];

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-900 px-4 py-16 md:py-24 relative overflow-hidden"
      aria-label="Benefits of our automation services"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>
      
      <div className="relative w-full max-w-6xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-10">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Section - Benefits */}
          <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12 z-10 relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
            {/* Title */}
            <div className={`
              transform transition-all duration-700 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <span>Automation Benefits</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                Let Us Do The <span className="text-blue-600 dark:text-blue-400">Hard Work</span> For You
              </h2>
            </div>

            {/* Benefits cards */}
            <div className="space-y-4 py-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.id}
                  className={`
                    flex items-center space-x-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700
                    bg-white dark:bg-gray-800/80 shadow-sm hover:shadow-md transition-all duration-300
                    transform transition-all ease-out ${benefit.delay}
                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                  `}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 p-3 rounded-lg ${benefit.bgAccent}`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className={`font-semibold text-xl ${benefit.color}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Management Image */}
            <div className={`
              transform transition-all duration-700 ease-out delay-500
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}>
              <div className="relative h-24 w-full">
                <Image
                  src="/images/time.png"
                  alt="Time Management"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Description */}
            <div className={`
              transform transition-all duration-700 ease-out delay-600
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
            `}>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Everyone can struggle at the beginning, but we are here to make sure this never happens.{' '}
                <span className="font-semibold text-gray-800 dark:text-white">
                  Let Us Do The Hard Work!
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <div className={`
              transform transition-all duration-700 ease-out delay-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
              pt-4
            `}>
              <button className="
                hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700
                text-white px-6 py-3 rounded-full font-medium
                hover:from-blue-700 hover:to-blue-900 dark:hover:from-blue-600 dark:hover:to-blue-800
                transform transition-all duration-300
                shadow-lg hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                flex items-center group
              ">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 dark:to-black/20 z-10"></div>
            <div className={`
              transform transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}
              h-full
            `}>
              <Image
                src="/images/digital.jpg"
                alt="Digital automation illustration showing efficiency and productivity"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-12 right-12 w-6 h-6 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-ping"></div>
            
            {/* Statistics overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 z-20">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">85%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">40%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Availability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image Section */}
          <div className="lg:hidden relative h-64 mt-6">
            <Image
              src="/images/digital.jpg"
              alt="Digital automation illustration"
              fill
              sizes="100vw"
              className="object-cover object-center rounded-b-2xl"
              priority
              quality={85}
            />
            
            {/* Mobile Statistics overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">85%</div>
                  <div className="text-xxs text-gray-600 dark:text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">40%</div>
                  <div className="text-xxs text-gray-600 dark:text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">24/7</div>
                  <div className="text-xxs text-gray-600 dark:text-gray-400">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}