import Link from 'next/link'
import React from 'react'

export default function ORMServiceFit() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Who this service fits */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition p-8 border-l-4 border-blue-600">
          <h5 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Who this service fits
          </h5>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify">
            If you get calls from customers asking about bad reviews, you need
            stronger reputation control. If your competitors rank above your
            brand name, you need a plan that improves branded search results. If
            your listings show the wrong phone number, you need fast fixes
            across platforms. And if you want stable growth, online reputation
            management for business should stay on your monthly checklist.
          </p>
        </div>

        {/* Get started */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition p-8">
          <h6 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Get started
          </h6>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-7 text-justify mb-4">
            Talk to our team to set a clear plan and timeline.{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              SEO India Tech
            </span>{' '}
            is an online reputation management company that focuses on
            measurable improvements, clear communication, and steady action
            today.
          </p>
          <Link href="/contactus">
            <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-semibold py-3 px-6 rounded-lg transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
