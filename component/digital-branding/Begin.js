import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Begin = () => {
  return (
    <section className="bg-gray-950 dark:bg-gray-900 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating accent elements */}
        <div className="absolute -top-10 left-10 md:left-20 hidden md:block">
          <div className="w-16 h-16 border-2 border-blue-500/20 rounded-full transform rotate-45"></div>
        </div>
        <div className="absolute -bottom-10 right-10 md:right-20 hidden md:block">
          <div className="w-12 h-12 border-2 border-blue-500/20 rounded-lg"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Journey Today</span>
          </div>

          {/* Heading */}
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl text-white">
              Start Your Path to Digital Branding Success with{' '}
              <span className="text-blue-500">SEO India Tech</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mt-8 px-4">
            <p className="text-blue-100 text-lg md:text-xl max-w-4xl text-center">
              <span className="font-bold text-blue-500">SEO India Tech,</span>{' '}
              is your partner in achieving digital branding success—whether
              you’re looking to enhance brand awareness, grow engagement, or
              maximize conversions.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/contactus">
              <button className="hidden cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-semibold transition-colors shadow-lg hover:shadow-blue-900/30 flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <button className="hidden text-white border-2 border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors flex items-center">
              Learn More
            </button>
          </div>

          {/* Optional: Social Proof */}
          <div className="hidden mt-16 md:mt-24">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-6 text-center">
              Trusted by innovative brands worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {['Google', 'Microsoft', 'Amazon', 'Adobe', 'Shopify'].map(
                (company, index) => (
                  <div
                    key={index}
                    className="text-white/40 font-bold text-lg md:text-xl"
                  >
                    {company}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto opacity-10">
          <path fill="#3B82F6" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,74.7C672,75,768,117,864,128C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </section>
  )
}

export default Begin
