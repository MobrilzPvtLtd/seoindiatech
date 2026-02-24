import Link from 'next/link'
import React from 'react'

export default function AiSeoWhyChoose() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* TOP TWO CARDS */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT CARD */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-10 md:p-12 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

              <h4 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white leading-snug">
                Why choose SEO India Tech
              </h4>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <p>
                  SEO India Tech is a{' '}
                  <Link
                    href="/services/digital-marketing"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    digital marketing company
                  </Link>{' '}
                  that builds search growth with a clear plan. We do not
                  rely on vague promises. We set targets that you can track,
                  like ranking movement, clicks from key pages, lead form
                  actions, and calls. As a digital marketing services company,
                  we also align SEO work with your broader funnel so traffic
                  turns into business.
                </p>

                <p>
                  When you hire an ai SEO company, you need two things. You need
                  strong basics, and you need a plan for AI answer results. Our
                  AI SEO agency works on both. We keep the work practical, and
                  we keep communication simple. You will know what changed, why
                  it changed, and what comes next.
                </p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-10 md:p-12 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>

              <h5 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white leading-snug">
                Who benefits most from AI SEO Services
              </h5>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <p>
                  AI SEO services fit businesses that want stable inbound leads
                  and long term visibility. This is common for local services,
                  B2B companies, e-Commerce sites, startups, and brands with
                  many pages that need structure. If you publish content often,
                  an ai SEO strategy helps you stay consistent and avoid pages
                  that compete against each other.
                </p>

                <p>
                  If you want one partner for growth, SEO India Tech also
                  supports wider campaigns as a digital marketing company. Many
                  clients start with AI SEO services and later add PPC, social,
                  or content support when they want faster testing.
                </p>
              </div>
            </div>
          </div>

          {/* THIRD FULL WIDTH CARD */}
          <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-12 md:p-14 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

            <h6 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white leading-snug">
              Ready to work with an ai SEO Company
            </h6>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              <p>
                If you want your site to show up in search and in AI answers,
                start with a plan that fits your market. Talk to SEO India Tech
                today. Work with an ai SEO company that keeps the process clear,
                the writing natural, and the outcomes measurable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
