import Link from 'next/link'
import React from 'react'
import { FaCheckCircle, FaMapMarkedAlt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { FiCheckCircle } from 'react-icons/fi'

export default function GBPProcess() {
  return (
    <>
      <section className="w-full py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-20">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
              How our process works
            </h4>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-100 dark:bg-blue-900 h-full"></div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative md:flex items-center md:justify-between">
                <div className="md:w-5/12 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Step 1: Profile audit
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                    We review the profile, map rankings, competitors, and search
                    terms. We check for duplicates and missing fields. This
                    audit sets the plan for gbp optimization services. It also
                    sets benchmarks so you can measure results from gbp
                    optimization services month to month.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                  01
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative md:flex items-center md:justify-between md:flex-row-reverse">
                <div className="md:w-5/12 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Step 2: Fix and complete key sections
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                    We correct core data, categories, services, links, and
                    attributes. We also improve photos and set a post calendar.
                    This stage covers google business profile gbp optimization
                    basics and prepares your profile for better visibility. It
                    is the part of gbp optimization services that usually brings
                    the quickest lift.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                  02
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative md:flex items-center md:justify-between">
                <div className="md:w-5/12 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Step 3: Local signals beyond the profile
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                    A profile alone is not enough. We support it with a local
                    business SEO service approach that includes citation
                    cleanup, location page support when needed, and a review
                    plan. If you want a local SEO service company that can
                    support profile and site signals, we can help. This also
                    improves google business profile SEO strength.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                  03
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative md:flex items-center md:justify-between md:flex-row-reverse">
                <div className="md:w-5/12 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md">
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    Step 4: Monitor and refine
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                    We track performance and keep your profile current. Ongoing
                    gbp optimization services help you stay consistent even when
                    hours, services, or staff change. We adjust categories,
                    posts, and content based on what people search and what
                    competitors do. This keeps gbp optimization services
                    effective over time.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold absolute left-1/2 transform -translate-x-1/2">
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
              {/* Accent Border */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full"></div>

              <div className="pl-6 space-y-6">
                {/* Heading */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl">
                    <FaUsers className="text-blue-600 dark:text-blue-400 text-lg" />
                  </div>

                  <h5 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    Who benefits from this service
                  </h5>
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                  Clinics, salons, contractors, restaurants, and service brands
                  benefit the most. If customers search “near me” on Maps,
                  Google Business Profile SEO matters. We can also support your
                  campaigns as a top digital marketing company.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
              {/* Accent Border */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full"></div>

              <div className="pl-6 space-y-6">
                {/* Heading */}
                <h5 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  What you get with SEO India Tech
                </h5>

                {/* List */}
                <ul className="space-y-4">
                  {[
                    'Clear reporting',
                    'A cleaner profile customers trust',
                    'Support for Google Business Profile GBP optimization and local SEO signals',
                    'Ongoing GBP optimization services that match your market',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheckCircle className="min-w-[22px] min-h-[22px] text-blue-600 dark:text-blue-400 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800">
            {/* Accent Side Border */}
            <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full"></div>

            <div className="pl-6 space-y-6">
              {/* Heading with Icon */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl">
                  <FaMapMarkedAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>

                <h6 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                  Ready to improve your map visibility
                </h6>
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed text-base md:text-lg">
                If your listing is not bringing calls, it is usually missing key
                details or sending mixed signals. Let SEO India Tech handle the
                fixes and the ongoing work. Contact us to start GBP optimization
                services and build a profile that helps customers find you and
                choose you.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contactus"
                  className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
