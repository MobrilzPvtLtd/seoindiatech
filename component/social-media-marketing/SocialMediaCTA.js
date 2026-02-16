import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function SocialMediaCTA() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Get the Best{' '}
            <span className="text-blue-600">
              Social Media Marketing Services
            </span>{' '}
            for Your Business
          </h2>

          {/* Subheading */}
          <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
            In a competitive digital world, partnering with{' '}
            <Link href={'/'} className="text-blue-600 ">
              {' '}
              SEO IndiaTech
            </Link>{' '}
            gives you a real strategic advantage. Our professional social media
            marketing services help you expand reach, engage customers, and
            build a loyal audience — powered by creativity, consistency, and
            deep market expertise.
          </p>

          {/* Short Benefits – Clean List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                Precise Audience Targeting
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                Higher Engagement & Loyalty
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <span className="text-gray-800 dark:text-gray-100 font-medium">
                Measurable Business Growth
              </span>
            </div>
          </div>

          {/* Final Statement */}
          <p className="mt-12 text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100 max-w-4xl mx-auto">
            Whether you want organic growth, paid campaigns, or long-term brand
            authority — our{' '}
            <span className="text-blue-600 font-bold">
              social media marketing services India
            </span>{' '}
            deliver everything your business needs.
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-200">
            Start your journey with SEO India Tech — your trusted social media
            marketing services company.
          </p>

          {/* Primary CTA */}
          <div className="mt-12">
            <a
              href="/contactus"
              className="group inline-flex items-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Growing Your Brand Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Optional secondary link */}
          {/* <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
            <a
              href="/case-studies"
              className="hover:text-blue-600 transition-colors"
            >
              See real results from businesses like yours →
            </a>
          </p> */}
        </div>
      </div>
    </section>
  )
}
