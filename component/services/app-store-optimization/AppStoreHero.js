import Link from 'next/link'
import React from 'react'

export default function AppStoreHero() {
  return (
    <section className="relative w-full py-24 px-4 md:px-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
            <span className="text-blue-600 dark:text-blue-400">App Store Optimization</span> Services India
          </h1>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            <p>
              Your app can be great and still stay invisible. Most users never
              scroll far in search results. Many decide in seconds by looking at
              your icon, screenshots, and rating. That is why app store
              optimization services matter. They help your app appear for the
              right searches and turn store visitors into installs.
            </p>

            <p>
              <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                SEO India Tech
              </Link>{' '}
              provides app store optimization services for Android and iOS. We
              work on keyword targeting, conversion rate improvements, and store
              trust signals. The goal is simple. More relevant traffic, more
              installs, and steady growth you can measure.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-4 bg-blue-500/10 blur-2xl rounded-3xl"></div>

          <img
            src="/images/services/ASO.png"
            alt="App Store Optimization India"
            className="relative w-full max-w-lg rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
