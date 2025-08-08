import Image from 'next/image'
import React from 'react'
import { BarChart2, Target, TrendingUp, ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const researchFeatures = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      text: 'Identify market trends and opportunities',
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      text: 'Understand customer needs and preferences',
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      text: 'Make data-driven business decisions',
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-8 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium shadow-sm">
              <BarChart2 className="w-4 h-4" />
              <span>Data-Driven Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Market{' '}
              <span className="text-blue-700 dark:text-blue-400">Research</span>
            </h1>

            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>

            <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Market research is the process of gathering and analyzing
              information about a market, including its size, trends,
              competition, and customer needs and preferences. Market research
              aims to provide insights that can help businesses make informed
              decisions about their products, services, and marketing
              strategies.
            </p>

            <div className="pt-4 space-y-3">
              {researchFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="hidden pt-6">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md flex items-center group">
                Get insights now
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              {/* Gradient overlay to help with image visibility in dark mode */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent dark:from-black/30 z-10"></div>

              <Image
                src="/images/marketresearch.png"
                alt="Market research visualization showing data analysis, customer insights, and business strategies"
                width={800}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md z-20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-2 right-8 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      ROI Increase
                    </div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      +82%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300/50 dark:bg-blue-800/30 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Research metrics */}
        <div className=" hidden mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Data Points Analyzed', value: '10M+' },
            { label: 'Market Segments', value: '250+' },
            { label: 'Research Methods', value: '15+' },
            { label: 'Success Rate', value: '97%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
