import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function GEOPageSections() {
  return (
    <>
      {/* ================= WHY GEO SECTION ================= */}
      <section className="relative w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-400/5 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Why Your Brand Needs{' '}
              <span className="relative inline-block text-blue-600 dark:text-blue-400">
                Generative Engine Optimization
              </span>
            </h2>

            <p className="mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto">
              AI powered platforms now respond to users with full answers. These
              results often come from selected websites. If your content does
              not follow generative engine optimization geo strategies for
              brands, AI tools may skip your site.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              'Present clear answers to common questions',
              'Use proper content structure',
              'Add relevant data where needed',
              'Build strong topic relevance',
              'Improve authority signals',
            ].map((point, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40 group-hover:rotate-6 group-hover:scale-110 transition duration-300">
                    <FaCheckCircle
                      className="text-blue-600 dark:text-blue-400"
                      size={20}
                    />
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify max-w-4xl mx-auto">
            Our generative engine optimization strategies improve your chances
            of getting cited by AI tools that act as an answer engine.
          </p>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section className="relative w-full bg-white dark:bg-gray-950 py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              OUR APPROACH
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8">
              What We Do as a{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Generative Engine Optimization Company
              </span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify mb-6">
              We review your website content and match it with trends in
              generative engine optimization. AI tools prefer content that is:
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
              Our optimization agency follows a simple method. We create content
              that helps AI systems understand your services, products, and
              expertise.
            </p>
          </div>

          {/* Right Side Checklist */}
          <div className="space-y-6">
            {[
              'Informative',
              'Direct',
              'Updated',
              'Easy to scan',
              'Based on user intent',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <FaCheckCircle
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
