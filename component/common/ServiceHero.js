import React from 'react'
import Image from 'next/image'
import { ArrowRight, Search, BarChart, Globe, Shield, Zap, Target } from 'lucide-react'

const iconMap = {
  Search,
  BarChart,
  Globe,
  Shield,
  Zap,
  Target,
}

export default function ServiceHero({ title, subtitle, features, image, badge }) {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 pt-12 pb-8 md:pb-16 px-6 md:px-8 overflow-hidden relative transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200/60 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/80 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-50/90 dark:bg-blue-800/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 relative z-10">
        {/* Left Content Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 transition-colors duration-300">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
            <span>{badge || 'Our Services'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug md:leading-16 max-w-2xl mx-auto md:mx-0 transition-colors duration-300">
            {title}
          </h1>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full my-6 mx-auto md:mx-0"></div>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-md max-w-xl mx-auto md:mx-0 px-2 md:px-0 transition-colors duration-300">
            {subtitle}
          </p>

          {/* Feature points */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-xl mx-auto md:mx-0">
              {features.map((item, index) => {
                const IconComponent = iconMap[item.icon] || ArrowRight
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-400">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {item.text}
                    </span>
                  </div>
                )
              })}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#contact-form"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg shadow-md flex items-center justify-center group"
            >
              Get started now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact-form"
              className="hidden sm:inline-flex bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center justify-center"
            >
              See our results
            </a>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
