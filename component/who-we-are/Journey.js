import React from 'react';
import { CheckCircle, ArrowUpRight, Star, Clock, Users } from 'lucide-react';
import Image from 'next/image';

const Journey = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 md:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 top-20 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute -right-20 bottom-20 w-72 h-72 bg-purple-50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <Image
              src="https://www.digitalyzeit.com/wp-content/uploads/2023/12/Grey-Black-Fresh-Neutrals-Download-Page-Website-Download-Page.png"
              alt="Our Journey at Digitalyzeit"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-60"></div>
          </div>

          {/* Floating statistics cards */}
          <div className="hidden absolute -bottom-6 -left-6 md:left-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 max-w-[180px]">
            <div className="flex items-center space-x-2 mb-1">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Since 2013</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Helping businesses transform digitally</p>
          </div>

          <div className="hidden absolute -top-6 -right-6 md:right-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center space-x-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" className="w-4 h-4" />
              ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Trusted by 1000+ clients</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Section label */}
          <div className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-2">
            Our Journey
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Our Story: A Journey of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Innovation and Excellence
            </span>
          </h2>

          {/* Description */}
          <p className="text-justify text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Our journey began with a vision to revolutionize the way businesses interact with the digital world. We recognized the transformative power of automation and its ability to streamline processes, boost productivity, and drive growth. With this passion, we embarked on a mission to become the trusted partner for businesses seeking to navigate the complexities of the digital landscape.
          </p>

          {/* Feature cards */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Streamlined Operations</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Streamline your operations, eliminate repetitive tasks, and free up your team to focus on strategic initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Workflow Optimization</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Our workflow solutions optimize your operations, eliminate bottlenecks, and enhance collaboration across teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;