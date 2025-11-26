import React from 'react'

export default function WhyMarketResearch() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose SEO India Tech for Market Research?
          </h4>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We are not just another <b>digital marketing service company;</b> we
            are your strategic partner for business transformation. Our strength
            lies in blending data with marketing execution to deliver growth,
            not just reports.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our goal is simple—empower your business with facts, figures, and
            insights so you make decisions that win markets.
          </p>
        </div>

        {/* Right Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-3">
              ✓
            </div>
            <p className="text-gray-900 dark:text-white font-medium">
              Expert research analysts &amp; marketing strategists
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-3">
              📊
            </div>
            <p className="text-gray-900 dark:text-white font-medium">
              Advanced tools for real-time data and analytics
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-3">
              📘
            </div>
            <p className="text-gray-900 dark:text-white font-medium">
              Industry-specific research models
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-3">
              💡
            </div>
            <p className="text-gray-900 dark:text-white font-medium">
              Business-actionable research insights
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 sm:col-span-2">
            <div className="text-blue-600 dark:text-blue-400 text-2xl mb-3">
              🚀
            </div>
            <p className="text-gray-900 dark:text-white font-medium">
              End-to-end support from analysis to campaign execution
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
