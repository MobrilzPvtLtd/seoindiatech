import React from 'react';
import { FaHandsHelping, FaRobot } from 'react-icons/fa';

export default function HowWeHelpSection() {
  const benefits = [
    'Content built for answer engine platforms',
    'AI ready page structure',
    'SEO plus GEO focused strategy',
    'Industry based content planning',
    'Data supported page updates',
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 py-20 md:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.1),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.04),transparent_40%)] dark:bg-[radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-16 md:space-y-20">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            {/* <div className="p-5 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/40 text-blue-600 dark:text-blue-400 shadow-lg">
              <FaHandsHelping size={40} />
            </div> */}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How Our AI SEO Company Helps
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-10 md:space-y-14">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-medium">
            As a digital marketing company in India, we work with startups, ecommerce brands, and service providers. Our team builds AI ready content that supports long term growth.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-medium">
            You get:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-7 rounded-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 shadow-md hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1"
              >
                <FaRobot
                  className="text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1.5"
                  size={28}
                />
                <p className="text-gray-800 dark:text-gray-100 font-medium text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-medium mt-8">
            Our generative engine optimization strategies improve your visibility across AI search tools that generate answers for users.
          </p>
        </div>
      </div>
    </section>
  );
}