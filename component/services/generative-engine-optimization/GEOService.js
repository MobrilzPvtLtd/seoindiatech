import React from 'react'
import { FaCheckCircle, FaRocket, FaLightbulb } from 'react-icons/fa'

export default function GEOStrategiesSection() {
  const generalServices = [
    'AI content structure setup',
    'Entity based content updates',
    'Question focused page sections',
    'Schema data integration',
    'Content accuracy checks',
    'Topical authority building',
  ]

  const brandStrategies = [
    'Topic based content mapping',
    'Answer driven content writing',
    'FAQ content development',
    'AI friendly metadata',
    'Page level semantic signals',
    'Structured content updates',
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 md:py-28 lg:py-36 px-5 sm:px-8 lg:px-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-20 md:space-y-28 lg:space-y-20">
        {/* Services Block */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-blue-100/70 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                <FaRocket size={36} />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Core GEO Services
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Technical foundations that make your content more understandable,
              retrievable, and preferable to generative AI systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {generalServices.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 rounded-2xl p-7 shadow-md hover:shadow-2xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-400 hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 dark:bg-blue-400/30 animate-ping" />
                </div>
                <div className="flex items-start gap-5">
                  <FaCheckCircle
                    className="text-blue-600 dark:text-blue-500 flex-shrink-0 mt-1.5"
                    size={32}
                  />
                  <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Strategies Block */}
        <div className="space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-indigo-100/70 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                <FaLightbulb size={36} />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              GEO Strategies for Modern Brands
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Shift from keyword chasing to becoming the authoritative,
              intent-aligned source AI engines naturally cite and trust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {brandStrategies.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 rounded-2xl p-7 shadow-md hover:shadow-2xl hover:border-indigo-400/50 dark:hover:border-indigo-600/50 transition-all duration-400 hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 dark:bg-indigo-400/30 animate-ping" />
                </div>
                <div className="flex items-start gap-5">
                  <FaCheckCircle
                    className="text-indigo-600 dark:text-indigo-500 flex-shrink-0 mt-1.5"
                    size={32}
                  />
                  <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed italic">
              "This approach helps your content become useful for AI driven
              platforms that work as an answer engine."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
