import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function AEOConsulting() {
  return (
    <section className="relative w-full py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 leading-snug">
          Answer engine optimization consulting for brands that want faster
          clarity
        </h3>

        {/* Intro Content */}
        <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          <p>
            Some brands already have content but it is hard to parse. Others
            publish blogs that never become the chosen answer. That is where
            answer engine optimization consulting helps.
          </p>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Our consulting includes:
          </p>
        </div>

        {/* Consulting List */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            'Audit of your existing service pages and blogs',
            'AEO content brief templates your team can reuse',
            'Topic clusters built around buyer questions',
            'Schema plan for service pages and FAQs',
            'Editing rules that keep content direct and quote ready',
          ].map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mt-1 text-blue-600 dark:text-blue-400 text-lg">
                <FaCheckCircle />
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="mt-10 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl space-y-4">
          <p>
            If you want a partner that can support both AEO and traditional SEO,{' '}
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              SEO India Tech
            </Link>{' '}
            can help. Many clients also ask for support from a top digital
            marketing company that understands ads, local visibility, and
            content. We cover those needs too.
          </p>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  )
}
