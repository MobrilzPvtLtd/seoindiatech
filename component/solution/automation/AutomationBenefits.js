import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AutomationBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(0);

  // Benefits data for better maintainability
  const benefits = [
    {
      id: 1,
      title: "Save Money",
      color: "text-blue-600",
      bgAccent: "bg-blue-100",
      delay: "delay-100"
    },
    {
      id: 2,
      title: "Save Time", 
      color: "text-red-500",
      bgAccent: "bg-red-100",
      delay: "delay-200"
    },
    {
      id: 3,
      title: "Save Energy",
      color: "text-green-500", 
      bgAccent: "bg-green-100",
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
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white px-4 py-8"
      aria-label="Benefits of our automation services"
    >
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 ">
          {/* Left Section - Benefits */}
          <div className="flex flex-col justify-center space-y-6 p-8 lg:p-12 z-10 relative bg-white/95 backdrop-blur-sm">

         <div className="space-y-4">
                <Image
                  src="/images/time.png"
                    alt="Automation Benefits"
                    width={400}
                    height={400}
                    // className="w-16 h-16 mb-4"
                    />

         </div>
           

            {/* Description */}
            <div className={`
              transform transition-all duration-700 ease-out delay-500
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-5 opacity-0'
              }
            `}>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                Everyone can struggle at the beginning, but we are here to make sure this never happens.{' '}
                <span className="font-semibold text-gray-800">
                  Let Us Do The Hard Work!
                </span>
              </p>
            </div>

            {/* Optional CTA Button */}
            <div className={`
              transform transition-all duration-700 ease-out delay-700
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-5 opacity-0'
              }
              pt-4
            `}>
              <button className="
                bg-gradient-to-r from-blue-600 to-purple-600 
                text-white px-6 py-3 rounded-lg font-semibold
                hover:from-blue-700 hover:to-purple-700
                transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-blue-300
              ">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 z-10"></div>
            <div className={`
              transform transition-all duration-1000 ease-out delay-300
              ${isVisible 
                ? 'scale-100 opacity-100' 
                : 'scale-110 opacity-0'
              }
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
            <div className="absolute bottom-12 right-12 w-6 h-6 bg-green-500 rounded-full opacity-40 animate-bounce"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-red-500 rounded-full opacity-50 animate-ping"></div>
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
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
      </div>
    </section>
  );
}