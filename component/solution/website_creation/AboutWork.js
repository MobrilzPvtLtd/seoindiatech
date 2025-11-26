import React from 'react'

export default function AboutWork() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
            What Types of Websites We Build
          </h4>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>E-commerce stores:</b> <br /> Secure, scalable platforms with
              payment integration and optimized checkout flows.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>Corporate &amp; business websites:</b> <br /> Polished,
              professional online presences for service-based or B2B companies.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>Portfolio &amp; creative sites:</b> <br /> Visually striking
              galleries and presentation platforms for artists, freelancers,
              designers.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>Blogs &amp; content platforms:</b> <br /> Content-focused
              websites optimized for content delivery, readability, and SEO
              performance.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>Web applications &amp; interactive sites:</b> <br /> For
              businesses needing custom functionality beyond standard websites.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <p className="text-gray-900 dark:text-white leading-relaxed">
              <b>Landing pages &amp; conversion-optimized microsites:</b> <br />{' '}
              For marketing campaigns, product launches, or focused outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
