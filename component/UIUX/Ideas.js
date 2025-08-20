import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Ideas = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-900 py-8 md:py-20 px-6 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-blue-950 dark:border-blue-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full border-2 border-blue-950 dark:border-blue-700"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-16 mb-16">
          {/* Left Column - Heading */}
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              <span>Innovative Solutions</span>
            </div>
            <h1 className="text-gray-900 dark:text-gray-100 text-5xl md:text-6xl font-bold leading-tight">
              Making Your Ideas <br className="hidden md:block" /> a Reality
            </h1>
            <div className="mt-6 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Text and Button */}
          <div className="md:w-1/2">
            <p className="text-justify text-gray-700 dark:text-gray-300 text-lg mb-6">
              A seamless and visually stunning interface is crucial for turning
              visitors into customers.{' '}
              <span className="font-bold text-blue-800 dark:text-blue-300">
                SEO India Tech
              </span>
              , partners with you to create{' '}
              <span className="font-bold text-blue-800 dark:text-blue-300">
                revolutionary UI/UX solutions
              </span>{' '}
              that not only captivate users but also deliver measurable success.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById('UIUXform')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-3 rounded-full text-base hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center group"
            >
              Let's Hear From You
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Hero Image Container with Enhanced Styling */}
        <div className="relative w-full h-96 md:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>

          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Dark mode overlay */}
            <div className="absolute inset-0 bg-gray-800/0 dark:bg-gray-800/40"></div>
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <div className="text-center max-w-4xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-lg">
                From User Experience to Conversion: We Craft Your Digital
                Success
              </h2>
              <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl mx-auto hidden md:block drop-shadow-md">
                We design with a focus on blending aesthetics and functionality,
                crafting user journeys that are both memorable and effective.
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {['Research', 'Design', 'Development'].map((item, index) => (
            <div
              key={index}
              className="p-6 border   border-gray-100 dark:border-gray-700 hover:scale-102 transition duration-300 hover:border-blue-200 dark:hover:border-blue-700 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-800 dark:text-blue-300 font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {item}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our {item.toLowerCase()} process ensures your vision is
                transformed into compelling digital experiences.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ideas
