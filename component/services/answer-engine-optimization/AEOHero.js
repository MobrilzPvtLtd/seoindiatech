import React from 'react'
import Image from 'next/image'

export default function AEOHero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Answer Engine Optimization Agency
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 text-justify">
            People do not search the way they used to. They ask questions in
            Google, in AI tools, and in voice search. They want one clear
            answer, fast. That shift is why AEO answer engine optimization
            services matter.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 text-justify">
            If your content only targets classic blue link rankings, you miss a
            big part of today’s traffic. Answer engines pull short, direct
            passages. They also rely on structured data and clean page signals.
            Your job is to make your site easy to understand, easy to trust, and
            easy to quote.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-justify">
            SEO India Tech offers AEO answer engine optimization services built
            for this new behavior. The goal is simple. Help your pages become
            the best answer for real questions your customers ask.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="max-w-md lg:max-w-lg">
            <Image
              src="/images/services/Answer-Engine-Optimization.jpg"
              alt="Answer Engine Optimization"
              width={600}
              height={450}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
