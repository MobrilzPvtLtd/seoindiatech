import React from 'react'

export default function ORMInfoSimple() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Why businesses choose{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              SEO India Tech
            </span>
          </h4>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 mb-3 text-justify">
            You need a partner that acts like a{' '}
            <span className="font-semibold">part of your team</span>. As a
            digital marketing services company, we understand how{' '}
            <span className="font-semibold">
              reputation connects to traffic, leads, and sales
            </span>
            . Our work is practical. We set targets like{' '}
            <span className="font-semibold">better review ratings</span>, higher
            click rates on brand searches, and more calls from local listings.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify">
            You also get <span className="font-semibold">clear reporting</span>.
            We share what changed, what we did, and what comes next. Reputation
            results come from ongoing work, so you need updates you can trust.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
          <h5 className="text-2xl md:text-3xl font-semibold mb-4">
            Online reputation management services for small business
          </h5>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 mb-3 text-justify">
            Small teams often do not have time to monitor every platform. Online
            reputation management services for small business should be{' '}
            <span className="font-semibold">simple and focused</span>. We help
            you claim and fix listings, set review follow-ups, and build
            response templates so your team can reply quickly. We can also set a{' '}
            <span className="font-semibold">review request system</span> using
            email or SMS so happy customers share feedback at the right time.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify">
            If your budget is tight, we start with the{' '}
            <span className="font-semibold">highest impact actions</span>. That
            usually means review management, listing cleanup, and brand search
            improvements. These steps support online reputation management in
            digital marketing without wasting effort.
          </p>
        </div>
      </div>
    </section>
  )
}
