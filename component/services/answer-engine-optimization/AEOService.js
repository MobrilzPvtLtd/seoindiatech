import React from 'react'

export default function AEOService() {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">
          What you get with our AEO answer engine optimization services
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-14">
          Our AEO answer engine optimization services follow a practical
          approach. We do not chase trends. We build a page structure that works
          across search engines and AI tools.
        </p>

        {/* Compact Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                1
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Intent and question mapping
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              We start by collecting the real questions people ask before they
              buy. We map them to pages and sections so each page has one clear
              purpose. This reduces overlap and improves topical focus.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                2
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Content structure that answer engines can use
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Answer engines prefer content they can quote. That means simple
              sentences, clear definitions, and scannable sections.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Headings that match question style searches</li>
              <li>Opening paragraphs that state the answer early</li>
              <li>Lists and steps where they fit</li>
              <li>Short summaries in each key section</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                3
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                On page SEO and technical clean up
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              AEO answer engine optimization depends on page quality. Slow
              pages, weak internal links, and messy metadata reduce your chance
              of being selected as an answer.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Page speed basics</li>
              <li>Crawl and index signals</li>
              <li>Canonical and duplication control</li>
              <li>Internal link paths to key service pages</li>
              <li>Image alt text where needed</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                4
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Schema and entity signals
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Structured data helps systems understand what your page is. It
              also improves eligibility for rich results. We add schema to
              support the page type and the content blocks on the page.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>WebPage schema</li>
              <li>Service schema</li>
              <li>FAQ schema</li>
              <li>Organization and LocalBusiness signals if applicable</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                5
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Measurement that matches AEO goals
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
              Classic rank tracking is not enough for AEO. We track growth in
              impression quality, snippet wins, and question visibility.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Featured snippet and People Also Ask presence</li>
              <li>Traffic from question queries</li>
              <li>Engagement signals on AEO pages</li>
              <li>Leads and calls from AEO focused landing pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
