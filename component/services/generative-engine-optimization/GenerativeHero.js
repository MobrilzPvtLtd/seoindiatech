import Image from 'next/image'
import React from 'react'

export default function GenerativeHero() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            AI{' '}
            <span className="text-blue-600 dark:text-blue-400">
              SEO Services
            </span>{' '}
            for Consistent Organic Growth
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            <p>
              Search is changing fast. People still use Google, but they also
              ask questions in AI tools and chat results. That shift changes how
              pages earn visibility. AI systems look for clear answers, strong
              structure, and content that matches intent. If your site is hard
              to read, thin on facts, or unclear about what you do, you lose
              space in both search results and AI answers.
            </p>

            <p>
              SEO India Tech works as an ai SEO company for brands that want
              steady growth from organic search and AI led discovery. We focus
              on clean site structure, helpful content, and clear topic signals
              that machines can understand and people can trust. When you work
              with an ai SEO company, you are not buying shortcuts. You are
              building a site that gives direct answers and ranks for the terms
              that bring real leads.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/services/AI_SEO.png"
            alt="AI SEO Services"
            width={600}
            height={500}
            className="rounded-2xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  )
}
