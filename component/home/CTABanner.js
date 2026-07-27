import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiPhone, FiStar, FiAward, FiTrendingUp } from 'react-icons/fi'
import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      className="bg-white dark:bg-gray-900 py-16 md:py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-800/50 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-8 md:p-12 lg:p-16 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-500/5">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-blue-600/10 dark:text-blue-400/5">
            <FiAward className="w-16 h-16" />
          </div>
          {/* <div className="absolute bottom-4 left-4 text-blue-600/10 dark:text-blue-400/5">
            <FiStar className="w-12 h-12" />
          </div> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600/5 dark:text-blue-400/5">
            <FiTrendingUp className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Free Consultation
              </span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Grow Your <span className="text-blue-600 dark:text-blue-400">Business</span> Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a free consultation and get a customized SEO strategy that 
              drives real results for your business.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 text-sm group"
              >
                Free Consultation
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
              >
                <FiPhone className="w-4 h-4" />
                +91 98765 43210
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default CTABanner
