import React from 'react';
import { Star, Award, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

const Navigate = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-50 dark:bg-yellow-900/10 rounded-full blur-2xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="flex-1 space-y-6">
            {/* Rating stars with subtle animation */}
            <div className="flex items-center mb-4">
              <div className="flex space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">4.8 from over 1000+ reviews</span>
            </div>
            
            {/* Main heading with gradient accent */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Navigating the <br />
              <span className="relative">
                Digital Landscape
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full opacity-70"></span>
              </span> <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">SEO India Tech</span>
            </h2>
            
            {/* Description with improved typography */}
            <p className="text-justify text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In the ever-evolving digital realm, success hinges on understanding
              the intricacies of automation, market research, workflow building,
              and advertising. At SEO India Tech, we've mastered these elements,
              empowering businesses with over a decade of expertise and a proven
              track record of serving over 1000 clients with unwavering efficiency
              and precision.
            </p>
            
            {/* Stats section */}
            <div className="hidden grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">10+ Years</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Industry Experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">1000+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Satisfied Clients</p>
                </div>
              </div>
            </div>
            
            {/* CTA button */}
            <div className="hidden mt-8">
              <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform active:scale-95">
                Discover Our Approach
              </button>
            </div>
          </div>

          {/* Image with enhanced styling */}
          <div className="flex-1 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 dark:bg-yellow-900/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl -z-10"></div>
            
            <div className="relative w-xl rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transition-transform duration-500 hover:scale-[1.03] group">
              {/* Replace with Next.js Image for better optimization */}
              <Image
                src="https://www.digitalyzeit.com/wp-content/uploads/2023/11/Untitled-3-1024x540.png"
                alt="Navigate with Digitalyzeit"
                width={1024}
                height={640}
                className=" object-cover rounded-2xl"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent opacity-60"></div>
              
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigate;