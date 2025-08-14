import React from 'react'
import Image from 'next/image'
import { ArrowRight, Search, BarChart, Globe } from 'lucide-react'
import Link from 'next/link'

const Seohero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 py-8 md:py-16 px-6 md:px-8 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-50/70 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 relative z-10">
        {/* Left Content Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            <span>Search Engine Optimization</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug md:leading-16 max-w-2xl mx-auto md:mx-0">
            Enhance Your Presence, Drive More Visitors, and Top Search Rankings
          </h1>

          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full my-6 mx-auto md:mx-0"></div>

          <p className="text-justify text-gray-700 dark:text-gray-300 text-md max-w-xl mx-auto md:mx-0 px-2 md:px-0">
            In today’s digital-first world, a strong online presence is
            essential. SEO drives your business higher in search results,
            attracts quality traffic, and converts visitors into loyal
            customers. At{' '}
            <span className="text-blue-700 dark:text-blue-400 font-semibold">
              SEO India Tech,
            </span>{' '}
            we create strategic SEO solutions that deliver measurable
            results—not just website optimization.
          </p>

          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-xl mx-auto md:mx-0">
            {[
              {
                icon: <Search className="w-4 h-4" />,
                text: 'Organic Rankings',
              },
              { icon: <Globe className="w-4 h-4" />, text: 'Local SEO' },
              {
                icon: <BarChart className="w-4 h-4" />,
                text: 'Technical Optimization',
              },
              {
                icon: <ArrowRight className="w-4 h-4" />,
                text: 'Conversion Rate Focus',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-700 dark:text-blue-400">
                  {item.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button
              onClick={() => {
                document
                  .getElementById('Form')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-600 dark:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg shadow-md flex items-center justify-center group"
            >
              Get started now
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="hidden bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              See our results
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[90%] h-[90%] border-2 border-dashed border-blue-200 dark:border-blue-800/30 rounded-full opacity-60 animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[70%] h-[70%] border-2 border-dashed border-blue-200 dark:border-blue-800/30 rounded-full opacity-40 animate-[spin_40s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative bg-white dark:bg-gray-800 p-2 md:p-3 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 z-10">
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
              SEO
            </div>
            <Image
              src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/search-engine-optimization-1024x1024.webp"
              alt="SEO Visualization"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl object-contain"
            />
          </div>

          {/* Stats card */}
          <div className="absolute z-10 -bottom-6 -left-6 md:bottom-12 md:left-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hidden md:block">
            <div className="text-blue-600 dark:text-blue-400 font-bold text-xl">
              91%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs">
              Higher visibility
            </div>
          </div>

          {/* Keyword card */}
          <div className="absolute z-10  -top-6 -right-6 md:top-12 md:right-0 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hidden md:block">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
                Top keywords
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Client logos */}
      <div className="hidden max-w-7xl mx-auto mt-16 relative z-10">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {['Google', 'Microsoft', 'Adobe', 'Shopify', 'Amazon'].map(
              (brand, index) => (
                <div
                  key={index}
                  className="text-gray-400 dark:text-gray-500 font-semibold"
                >
                  {brand}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seohero
