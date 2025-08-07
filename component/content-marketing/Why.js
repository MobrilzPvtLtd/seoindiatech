import React, { useState, useEffect, useRef } from 'react';
import { Target, Fingerprint, Users } from 'lucide-react';

const Why = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Final values for the stats
  const stats = [
    { number: 10, label: 'Years of experience' },
    { number: 200, label: 'Satisfied clients' },
  ];
  
  // State to track the current count values
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Observe when the component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle the counter animation
  useEffect(() => {
    if (!isVisible) return;

    // Calculate the increment step for each counter
    const stepTimes = 50; // Animation will run for this many steps
    const intervals = stats.map((stat) => Math.ceil(stat.number / stepTimes));
    
    // Start counting animation
    const timers = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] + intervals[index] >= stat.number) {
            newCounts[index] = stat.number; // Ensure we land exactly on the target number
            clearInterval(timers[index]);
          } else {
            newCounts[index] += intervals[index];
          }
          return newCounts;
        });
      }, 40); // Update every 40ms for smooth animation
    });

    // Cleanup timers
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [isVisible, stats]);

  const reasons = [
    {
      id: 1,
      icon: <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Results-Driven Approach",
      description: "Every blog, video, or campaign we create is rooted in a single goal: measurable results. No fluff, just strategies that work."
    },
    {
      id: 2,
      icon: <Fingerprint className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Tailored to Your Business",
      description: "No cookie-cutter solutions here. We dive deep into your business, industry, and audience to design a strategy that fits like a glove."
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Partner, Not Just a Provider",
      description: "Think of us as an extension of your team. Your success is our success, and we're with you every step of the way."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Digitalyzeit?
              </h2>
              
              <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>
              
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                We don't just create content we craft experiences that intrigue, inspire, and convert. Here's why businesses choose us:
              </p>
            </div>
            
            {/* Stats grid with counter animation */}
            <div className="grid grid-cols-2 gap-6 my-10">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                    {counts[index]}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                    {reason.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {reason.id}. {reason.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;