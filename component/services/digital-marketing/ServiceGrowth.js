import Link from 'next/link'
import React from 'react'

export default function ServiceGrowth() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white">
          CORE SERVICES THAT DRIVE GROWTH
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="group relative p-10 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              1. E-commerce SEO services
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
              Product pages often miss basic details. Titles are weak.
              Categories overlap. Filters block indexing.{' '}
              <Link
                href="https://www.seoindiatech.com/services/e-commerce-seo"
                className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                Our Ecommerce SEO
              </Link>{" "}
              services fix structure, improve on page content, and strengthen
              internal links. We also focus on speed, product schema, and clear
              category pages. As a digital marketing services company, we track
              rankings, clicks, and sales actions, not vanity metrics.
            </p>
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-10 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              2. Local SEO services and local SEO marketing services
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
              Local buyers usually search with intent. They want a nearby
              option, open hours, reviews, and quick answers. Our{' '}
              <Link
                href="https://www.seoindiatech.com/services/local-seo-service"
                className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                Local SEO
              </Link>{' '}
              services focus on your Google Business Profile, local pages,
              citations, and review support. Local SEO marketing services also
              include content that matches local search terms and map ranking
              support. As a digital marketing services company, we keep your
              local presence consistent, accurate, and easy to trust.
            </p>
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-10 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              3. Small business SEO services
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
              Small teams need results without waste. Our{' '}
              <Link
                href="https://www.seoindiatech.com/services/small-business-seo"
                className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                {' '}
                Small business SEO
              </Link>{' '}
              services start with a fast audit, then a priority list. We fix the
              pages that already have some traction. We improve the site
              structure, key pages, and internal links. Then we build content
              around search intent. As a digital marketing services company, we
              keep tasks simple, so you can see progress month to month.
            </p>
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Card 4 */}
          <div className="group relative p-10 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              4. Digital marketing company support for full funnel growth
            </h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
              Many clients need more than SEO. They need paid ads, landing
              pages, and conversion work. As your digital marketing company
              partner, we run search ads, display remarketing, and paid social
              where it fits. We write landing pages that match the ad message.
              We track calls, forms, and sales events. A digital marketing
              services company should help you connect spend to outcomes, so we
              do.
            </p>
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Card 5 (Centered Last Row) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="group relative p-10 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                5. Content and social support that fits your brand
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                Content only helps if it answers real questions and matches
                search intent. We plan topics based on what people search and
                what they ask in AI tools. Social content supports trust and
                repeat visits. As a digital marketing services company, we keep
                the messaging clear and keep posts aligned with your offers.
              </p>
              <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
