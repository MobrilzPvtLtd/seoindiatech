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
      icon: <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Track Progress",
      description: "Monitor task completion and team efficiency as it happens."
    },
    {
      icon: <Zap className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Automate Tasks",
      description: "Streamline operations by eliminating routine tasks with automation."
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-primary dark:text-accent" />,
      title: "Identify Bottlenecks",
      description: "Identify and fix workflow issues swiftly to maintain productivity."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
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
            <div className="bg-card dark:bg-card rounded-2xl border border-border p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6">
                <span>Workflow Management</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-heading mb-6 leading-tight">
                No Need To Worry Anymore
              </h3>
              
              <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-6"></div>

              <p className="text-justify text-body text-lg leading-relaxed mb-8">
                Managing tasks is effortless with workflow management software. Track team progress, assign responsibilities, and spot bottlenecks instantly. Automation and integration ensure workflows are streamlined, errors are minimized, and your operations run smoothly.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-card/80 rounded-lg border border-border dark:border-border"
                    style={{ 
                      transitionDelay: `${300 + (index * 100)}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'all 0.5s ease-out'
                    }}
                  >
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-muted text-sm">
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
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-30 dark:opacity-40 blur-xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/automation.png"
                    alt="Workflow Automation Illustration"
                    width={500}
                    height={500}
                    className="object-contain bg-card dark:bg-card"
                  />
                </div>
              </div>
              
              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-3/4 bg-card dark:bg-card p-4 rounded-xl shadow-lg border border-border flex justify-around">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">85%</div>
                  <div className="text-xs text-muted">Time Saved</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-surface"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">24/7</div>
                  <div className="text-xs text-muted">Monitoring</div>
                </div>
              </div>
              
              {/* Floating annotation */}
              <div className="absolute -top-4 -right-4 bg-card dark:bg-card px-4 py-2 rounded-full shadow-lg border border-border text-sm font-medium text-primary dark:text-accent animate-bounce">
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