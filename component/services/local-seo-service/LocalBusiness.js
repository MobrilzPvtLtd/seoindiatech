import React from 'react'

export default function LocalBusiness() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-28 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* TOP TWO CARDS */}
          <div className="grid md:grid-cols-2 gap-14">
            {/* LEFT CARD */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

              <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white leading-snug">
                Local Business SEO Service That Connects You to Customers
              </h3>

              <div className="space-y-7 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <p>
                  If you want true local presence online, basic SEO is not
                  enough. You need targeted local SEO services that speak
                  directly to your audience. Our local business SEO service
                  ensures that your business appears in Google Maps and local
                  packs.
                </p>

                <p>
                  We focus on helping your business appear for searches like
                  “near me” and location based terms. If you want people in your
                  city to pick your business over the competition, local SEO
                  service work is key.
                </p>

                <p>
                  Your website and listings must include the right terms. Your
                  online presence needs consistency. We fix errors, build
                  correct listings, and optimize your pages. We do this in a way
                  that feels natural and easy for customers.
                </p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600"></div>

              <h4 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white leading-snug">
                White Label Local SEO Services for Agencies
              </h4>

              <div className="space-y-7 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                <p>
                  If you run a digital marketing agency but want to offer local
                  SEO services without extra workload, we can help. Our white
                  label local SEO services let you add local search optimization
                  to your offer. You can keep your brand in front while we do
                  the work.
                </p>

                <p>
                  You get expert local SEO service support that fits with your
                  process. We provide monthly reports, progress tracking, and
                  strategy guidance. This makes it easy for you to grow your
                  services without hiring specialists.
                </p>

                <p>
                  Many digital agencies choose our white label local SEO
                  services because we deliver real improvements in search
                  visibility.
                </p>
              </div>
            </div>
          </div>

          {/* THIRD FULL WIDTH CARD */}
          <div className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl p-14 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

            <h5 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white leading-snug">
              Small Business SEO Services That Matter
            </h5>

            <div className="space-y-7 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              <p>
                Small businesses must compete with bigger brands. Local SEO
                services help level the field. When you focus on local search
                optimization your business shows up for customers who are ready
                to buy or contact you.
              </p>

              <p>
                Our small business SEO services team understands local markets.
                We know how customers search. We know how to place your business
                in front of them. We focus on search terms that lead to traffic
                and sales. That includes local keywords, map listings, and page
                content that matches user intent.
              </p>

              <p>
                If you want new customers, calls, visits, or online orders, our
                local SEO services work for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-50 dark:bg-gray-950 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-12">
            <h6 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Local SEO Marketing Services That Improve Visibility
            </h6>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              <p>
                Local search optimization matters more than ever. People use
                phones, voice search, maps, and local listings more than before.
                Local SEO marketing services help you be visible where your
                customers look first.
              </p>

              <p>
                We focus on search signals that matter most to local visibility.
                This includes:
              </p>

              <ul className="list-disc marker:text-blue-600 dark:marker:text-blue-400 pl-6 space-y-3">
                <li>Local keyword placement</li>
                <li>Map listing accuracy</li>
                <li>Online review signals</li>
                <li>On-page content that matches search intent</li>
                <li>Mobile friendly pages</li>
              </ul>

              <p>
                We help search engines understand your business location. We
                help customers find you faster. When your business ranks well in
                local search results you get more leads and calls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
