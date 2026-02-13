import React from 'react'

export default function OurProcess() {
  return (
    <>
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h4 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white">
            HOW OUR PROCESS WORKS
          </h4>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-10 left-0 text-8xl font-bold text-gray-100 dark:text-neutral-900 group-hover:text-indigo-500/20 transition-all duration-300">
                01
              </div>
              <div className="relative z-10">
                <h5 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Step 1, audit and goals
                </h5>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                  We review your site, competitors, and current traffic sources.
                  We set clear goals, such as more calls, more quote requests,
                  or more sales.
                </p>
                <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-10 left-0 text-8xl font-bold text-gray-100 dark:text-neutral-900 group-hover:text-indigo-500/20 transition-all duration-300">
                02
              </div>
              <div className="relative z-10">
                <h5 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Step 2, plan and priorities
                </h5>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                  We build a short plan that lists what to fix first, what to
                  publish, and what to test. As a digital marketing services
                  company, we do not bury you in long decks.
                </p>
                <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-10 left-0 text-8xl font-bold text-gray-100 dark:text-neutral-900 group-hover:text-indigo-500/20 transition-all duration-300">
                03
              </div>
              <div className="relative z-10">
                <h5 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Step 3, execution
                </h5>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                  We implement SEO fixes, create content, run ads if needed, and
                  improve landing pages. We also support Ecommerce SEO services
                  and Local SEO services where they apply.
                </p>
                <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="absolute -top-10 left-0 text-8xl font-bold text-gray-100 dark:text-neutral-900 group-hover:text-indigo-500/20 transition-all duration-300">
                04
              </div>
              <div className="relative z-10">
                <h5 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Step 4, measurement and updates
                </h5>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-lg">
                  We share reports that explain results in plain language. You
                  see traffic, leads, and conversion actions. A digital
                  marketing services company should show the work behind the
                  numbers, so we do.
                </p>
                <div className="mt-6 h-[3px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-1 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Heading */}
          <h6 className="text-sm uppercase tracking-[0.3em] font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            WHY SEO INDIA TECH
          </h6>

          {/* Main Content */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 dark:text-gray-300 font-medium">
            You get a team that focuses on steady growth, clear updates, and
            work that matches your business stage. We aim for consistent
            progress, not short spikes. If you want a digital marketing services
            company that keeps things clear and results focused, this is a
            strong fit.
          </p>

          {/* Decorative Line */}
          <div className="mt-10 mx-auto h-[3px] w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
      </section>
    </>
  )
}
