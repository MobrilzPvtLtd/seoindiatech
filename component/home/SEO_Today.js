import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function SEO_Today() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-100 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      {/* The card-like container with gradient background and rounded corners */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900/30 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl max-w-5xl mx-auto backdrop-blur-sm border border-white/20 dark:border-blue-900/30">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-200 dark:bg-blue-700/30 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-200 dark:bg-indigo-700/30 rounded-full blur-xl opacity-60"></div>
        </div>

        {/* Badge/Label */}
        <div className="relative flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Transform Your Digital Presence
          </span>
        </div>

        {/* Main heading with responsive font sizes and centered text */}
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white leading-tight">
          Ready to Build Your Brand? Start Your Success Story with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            SEO India Tech
          </span>{' '}
          Today!
        </h1>

        {/* Subheading/description paragraph */}
        <p className="relative mt-8 text-base sm:text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At{' '}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            SEO India Tech
          </span>
          , we partner with you to achieve your digital branding goals. Our
          expert team guides you through every stage, helping you boost brand
          awareness, drive engagement, and increase conversions.
        </p>

        {/* Call to action buttons */}

        <div className="relative mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services/digital-branding">
            <button className="cursor-pointer group bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Learn More
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="#">
            <button className="cursor-pointer bg-transparent border hidden border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-semibold py-3.5 px-8 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-800 transition-all duration-300">
              Schedule Consultation
            </button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="relative hidden mt-12 pt-8 border-t border-blue-100 dark:border-blue-800/30">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
            Trusted by leading businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-70 dark:opacity-50">
            <div className="h-6 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-20 bg-gray-400 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-28 bg-gray-400 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-20 bg-gray-400 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEO_Today
