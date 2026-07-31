import React from 'react'
import Image from 'next/image'

export default function SmallBusinessHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 md:pt-28 pb-20 md:pb-28 px-6">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-primary/15 dark:bg-primary/15 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-indigo-200 dark:bg-primary/15 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* small badge */}
          <div className="inline-block mb-5 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20/40 dark:text-accent">
            SEO Services
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-heading leading-tight mb-8">
            <span className="text-primary dark:text-accent">
              Small Business SEO Services
            </span>{' '}
            for Real Growth
          </h1>

          {/* YOUR CONTENT (UNCHANGED) */}
          <div className="space-y-6 text-lg text-body leading-relaxed text-justify">
            <p>
              If you run a small business, you already know the problem. People
              search, they compare, and they choose fast. If your site is hard
              to find, the best service in town still loses the click. That is
              where small business SEO services help. They improve how your
              website shows up on Google for the searches that bring calls,
              visits, and orders.
            </p>

            <p>
              SEO India Tech provides small business SEO services built for real
              goals, more local leads, more store visits, and more sales. We
              keep the work simple, clear, and trackable. You will know what we
              did, why we did it, and what changed.
            </p>
          </div>

        </div>

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center mt-10 md:mt-0">

          {/* glow behind image */}
          <div className="absolute w-80 h-80 bg-indigo-200 dark:bg-primary/20 rounded-full blur-3xl opacity-40"></div>

          <div className="relative w-full max-w-md h-[320px] md:h-[480px] transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/services/SEO.jpeg"
              alt="Small Business SEO Services"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  )
}