import React from 'react'
import { MousePointer, BarChart2, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Ppchero = () => {
  const keyBenefits = [
    {
      icon: <MousePointer className="w-5 h-5" />,
      text: 'Instant Traffic',
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      text: 'Higher Conversions',
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      text: 'Maximized ROI',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 px-4 py-8 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-200 dark:text-blue-900 opacity-30"
        >
          <circle cx="30" cy="30" r="30" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 hidden lg:block">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-indigo-200 dark:text-indigo-900 opacity-30"
        >
          <rect width="40" height="40" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <span>PPC Advertising</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-8">
          Maximize Your ROI with High-Performance
          <br className="hidden md:block" />
          Pay-Per-Click Advertising
        </h1>

        {/* Decorative underline */}
        <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-8"></div>

        {/* Subheading Paragraph */}
        <p className="text-gray-700 text-justify dark:text-gray-300 text-lg md:text-xl mb-10 max-w-4xl mx-auto">
          At{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            SEO India Tech
          </span>
          , we don't just run ads—we create{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            high-converting, precision-targeted campaigns
          </span>{' '}
          that generate real business results. Our{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            Pay-Per-Click (PPC) advertising solutions
          </span>{' '}
          ensure your brand appears in front of the right audience, at the right
          time, with the right message.
        </p>

        {/* Key benefits pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12">
          {keyBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-2 text-blue-600 dark:text-blue-400">
                {benefit.icon}
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: '95%', label: 'Increased click-through rates' },
            { value: '3.5x', label: 'Average return on ad spend' },
            { value: '70%', label: 'Lower cost per acquisition' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => {
              document
                .getElementById('PPCform')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md transition-all duration-300 flex items-center group"
          >
            Get Your Custom PPC Strategy
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="hidden bg-transparent text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 px-6 py-3 rounded-full transition-colors duration-300">
            Learn About Our Process
          </button>
        </div>
      </div>
    </section>
  )
}

export default Ppchero
