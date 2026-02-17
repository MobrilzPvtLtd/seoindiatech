import React from 'react'
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'

const steps = [
  {
    title: 'Quick Audit',
    description: 'We review tracking, search terms, and spend.',
  },
  {
    title: 'Build and Launch',
    description:
      'We set up your pay per click campaign structure, ads, extensions, and landing page alignment.',
  },
  {
    title: 'Improve and Scale',
    description: 'We add negatives, refine bids, and expand what performs.',
  },
]

export default function HowWeStartSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h6 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            How We Start
          </h6>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Flow Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div
                className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800
              rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step Number */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full
                bg-blue-600 text-white font-semibold mb-4"
                >
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Step {index + 1}: {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Accent */}
                <div className="mt-5 w-10 group-hover:w-20 h-1 bg-blue-600 transition-all duration-300"></div>
              </div>

              {/* Arrow (only between cards on desktop) */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop Arrow (Right) */}
                  <div className="hidden md:flex justify-center">
                    <FaArrowRight className="text-3xl text-blue-600 dark:text-blue-400 opacity-70" />
                  </div>

                  {/* Mobile Arrow (Down) */}
                  <div className="flex md:hidden justify-center">
                    <FaArrowDown className="text-2xl text-blue-600 dark:text-blue-400 opacity-70" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Closing Text */}
        <div className="mt-14 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-7">
            If you want a pay per click advertising company that stays focused
            on results you can measure, talk to SEO India Tech. You always know
            what you spent, what you earned, and what we will test next.
          </p>
        </div>
      </div>
    </section>
  )
}
