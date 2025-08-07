'use client';

import { ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

const TrustUs = ({
  title = 'Trust Us',
  subtitle = '',
  description = '',
  buttonText = 'Contact Us Now!',
  buttonUrl = '/contact',
  bgGradient = 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800',
  textColor = 'text-gray-900 dark:text-white',
  buttonGradient = 'bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-500',
  buttonTextColor = 'text-white',
  showIcon = true,
}) => {
  return (
    <section className={`w-full ${bgGradient} relative overflow-hidden py-12 md:py-8`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl opacity-60 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-12">
        {/* Text content */}
        <div className="text-left md:max-w-2xl">
          <div className="hidden flex items-center gap-2 mb-4">
            {showIcon && (
              <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            <div className="h-px flex-grow bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${textColor}`}>
            {title}
          </h2>
          
          {subtitle && (    
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-2 ${textColor} opacity-80`}>
              {subtitle}
            </h3>
          )}
          
          {description && (
            <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="w-full md:w-auto flex-shrink-0">
          <Link
            href="/contactus"
            className={`
              ${buttonGradient} ${buttonTextColor} 
              inline-flex items-center justify-center gap-2
              py-4 px-8 rounded-full text-lg font-medium 
              shadow-md hover:shadow-xl 
              transition-all duration-300 
              hover:scale-105 transform 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              whitespace-nowrap
              w-full md:w-auto
            `}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/30 to-transparent"></div>
    </section>
  );
};

export default TrustUs;