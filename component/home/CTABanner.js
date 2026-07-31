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
      className="bg-white dark:bg-background py-16 md:py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white to-background/50 dark:from-gray-800 dark:to-surface/50 border-2 border-dashed border-border dark:border-border rounded-3xl p-8 md:p-12 lg:p-16 text-center hover:border-blue-400 dark:hover:border-primary transition-all duration-300 shadow-xl shadow-primary/5">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-primary/10 dark:text-accent/5">
            <FiAward className="w-16 h-16" />
          </div>
          {/* <div className="absolute bottom-4 left-4 text-primary/10 dark:text-accent/5">
            <FiStar className="w-12 h-12" />
          </div> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/5 dark:text-accent/5">
            <FiTrendingUp className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary dark:text-accent tracking-wider uppercase">
                Free Consultation
              </span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-4">
              Let's Grow Your <span className="text-primary dark:text-accent">Business</span> Together
            </h2>
            <p className="text-muted text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a free consultation and get a customized SEO strategy that 
              drives real results for your business.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 text-sm group"
              >
                Free Consultation
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-cream hover:bg-gray-200 dark:bg-surface dark:hover:bg-gray-600 text-body dark:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
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
