import React from 'react'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Branding = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 opacity-20">
          <Star
            className="w-24 h-24 text-yellow-400 dark:text-yellow-500"
            fill="currentColor"
          />
        </div>
        <div className="absolute bottom-0 left-0 opacity-20">
          <Sparkles className="w-24 h-24 text-blue-400 dark:text-blue-500" />
        </div>

        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-400/20 dark:bg-blue-400/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-300/20 dark:bg-blue-300/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating accent elements */}
        <div className="absolute -top-10 left-10 md:left-20 hidden md:block">
          <div className="w-20 h-20 border-2 border-blue-400/40 dark:border-blue-400/20 rounded-lg rotate-12"></div>
        </div>
        <div className="absolute -bottom-10 right-10 md:right-20 hidden md:block">
          <div className="w-16 h-16 border-2 border-blue-400/40 dark:border-blue-400/20 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 backdrop-blur-sm text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Take Your Brand to the Next Level</span>
          </div>

          {/* Heading */}
          <div className="text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl text-gray-900 dark:text-white">
              Digital Branding for a Strong Market Identity{' '}
              <span className="text-blue-600 dark:text-blue-400">
                SEO India Tech
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="mt-8 px-4">
            <p className="text-gray-600 dark:text-blue-50 text-lg md:text-xl max-w-4xl text-center">
              Your design becomes more impactful when aligned with your brand’s
              message. Our digital branding services help create a consistent
              visual identity across all digital touchpoints.
              <br />
              <br />
              We offer complete{' '}
              <Link
                href="/services/digital-branding"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                digital branding solution
              </Link>{' '}
              packages that include brand guidelines, logo design, color themes,
              typography, messaging tone, and brand storytelling. When combined
              with our UI/UX design services, your business gains a unified and
              memorable brand presence.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/services/digital-branding">
              <button className="cursor-pointer bg-blue-600 dark:bg-gray-800 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 dark:hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Trust badges (kept hidden as-is) */}
          <div className="hidden mt-16">
            <p className="text-gray-500 dark:text-blue-100 text-sm font-medium uppercase tracking-wider mb-6 text-center">
              Trusted by leading brands
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Branding
