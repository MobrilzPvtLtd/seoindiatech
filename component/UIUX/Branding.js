import React from 'react'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Branding = () => {
  return (
    <section className="bg-blue-950 dark:bg-gray-900 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 opacity-20">
          <Star
            className="w-24 h-24 text-yellow-300 dark:text-yellow-500"
            fill="currentColor"
          />
        </div>
        <div className="absolute bottom-0 left-0 opacity-20">
          <Sparkles className="w-24 h-24 text-blue-300 dark:text-blue-500" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-400/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-300/10 dark:bg-blue-300/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating accent elements */}
        <div className="absolute -top-10 left-10 md:left-20 hidden md:block">
          <div className="w-20 h-20 border-2 border-blue-400/30 dark:border-blue-400/20 rounded-lg transform rotate-12"></div>
        </div>
        <div className="absolute -bottom-10 right-10 md:right-20 hidden md:block">
          <div className="w-16 h-16 border-2 border-blue-400/30 dark:border-blue-400/20 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/50 dark:bg-blue-900/30 backdrop-blur-sm text-blue-300 dark:text-blue-200 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span>Take Your Brand to the Next Level</span>
          </div>

          {/* Heading */}
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl text-white dark:text-white">
              Start Your Path to Digital Branding Success with{' '}
              <span className="text-blue-400 dark:text-blue-400">
                SEO India Tech
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="mt-8 px-4">
            <p className="text-blue-100 dark:text-blue-50 text-lg md:text-xl max-w-4xl text-center">
              <span className="font-bold text-blue-400 dark:text-blue-400">
                SEO India Tech
              </span>{' '}
              is your partner in achieving digital branding success—whether
              you’re looking to enhance brand awareness, grow engagement, or
              maximize conversions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/services/digital-branding">
              <button className="cursor-pointer bg-white dark:bg-gray-800 text-blue-950 dark:text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>

            <button className="hidden text-white border-2 border-white/30 dark:border-white/20 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors flex items-center">
              Learn More
            </button>
          </div>

          {/* Optional: Client Logos or Trust Badges */}
          <div className="hidden mt-16">
            <p className="text-blue-200 dark:text-blue-100 text-sm font-medium uppercase tracking-wider mb-6 text-center">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {['Google', 'Microsoft', 'Amazon', 'Adobe', 'Shopify'].map(
                (company, index) => (
                  <div
                    key={index}
                    className="text-white/40 dark:text-white/30 font-bold text-lg md:text-xl"
                  >
                    {company}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Branding
