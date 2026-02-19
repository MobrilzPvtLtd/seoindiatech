import React from 'react'

export default function SMOWhyHire() {
  return (
    <>
      {/* WHY HIRE SECTION */}
      <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT SIDE CONTENT */}
            <div>
              <h4 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                Why hire a social media optimization agency
              </h4>

              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify mb-6">
                Many brands try to manage everything in house and still
                struggle. The problem is not effort. The problem is direction. A
                social media optimization agency gives you a system:
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                If you are comparing options, choose a social media optimization
                company that can also support the rest of your funnel. Many
                clients need a full plan, so we align SMO with SEO, paid ads,
                and landing pages when required. That is why brands also search
                for a digital marketing company in India that can handle
                multiple channels together.
              </p>
            </div>

            {/* RIGHT SIDE BENEFIT PANEL */}
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-800">
                <ul className="space-y-5">
                  {[
                    'Clear goals for each platform',
                    'A weekly plan that matches your business targets',
                    'Better profile structure and content layout',
                    'Consistent posting without last minute rush',
                    'Reporting that shows what to repeat and what to stop',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      {/* NUMBER CIRCLE */}
                      <span className="shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs md:text-sm font-semibold">
                        {index + 1}
                      </span>

                      <span className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SECOND SECTION */}
          <div className="mt-20 md:mt-28">
            <h4 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Social media optimization services India for different business
              types
            </h4>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify mb-8">
              Social media optimization services India work well for:
            </p>

            {/* Card Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                'Local service businesses that need calls and visits',
                'Clinics, salons, and wellness brands that need trust',
                'Coaches and consultants who sell through content',
                'E commerce brands that need product discovery',
                'B2B companies that need LinkedIn leads',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 dark:border-gray-800"
                >
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 md:mt-12 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
              We adjust the approach based on your audience and your buying
              cycle. Some businesses need daily reels. Others need fewer posts
              and stronger messaging. Social media optimization services are not
              one size fits all.
            </p>
          </div>
        </div>
      </section>

      {/* GBP SECTION */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-14 shadow-lg">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
              Add on support: Google Business Profile GBP optimization
            </h5>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify mb-8">
              Social and local search often work together. If you serve a local
              area, google business profile gbp optimization helps you show up
              on Maps and local results. We help with:
            </p>

            <ul className="grid md:grid-cols-2 gap-5 md:gap-6">
              {[
                'Correct business details and categories',
                'Service areas and attributes',
                'Photos, updates, and review replies',
                'Post ideas that match your social content',
                'Basic tracking for calls, directions, and clicks',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  {/* CHECK ICON */}
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-xs md:text-sm font-semibold">
                    ✓
                  </span>

                  <span className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify mt-8">
              When your social pages and GBP look consistent, people trust you faster.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
