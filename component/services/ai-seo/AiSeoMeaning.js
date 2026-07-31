import Link from 'next/link'
import React from 'react'

export default function AiSeoMeaning() {
  return (
    <section className="w-full py-28 px-6 bg-gradient-to-br from-cream via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 dark:bg-background/80 backdrop-blur-sm rounded-3xl shadow-xl p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-10 leading-tight text-center">
            What AI SEO means for your business
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-body text-justify">
            <p>
              AI SEO is the practice of improving how your content performs in
              search engines and in AI answer surfaces. It includes classic SEO
              work, plus extra focus on clarity, entity signals, and answer
              readiness. As an ai SEO company, we look at how people ask
              questions, how AI tools summarize pages, and which parts of your
              content get used as direct answers.
            </p>

            <p>
              AI SEO also supports{' '}
              <Link
                href="/services/answer-engine-optimization"
                className="text-primary dark:text-accent hover:underline"
              >
                answer engine optimization services.
              </Link>{' '}
              That means your pages should be easy to scan, easy to
              cite, and built around questions your customers ask. When your
              page is structured well, AI tools can pull accurate lines from it.
              That often leads to more clicks, more calls, and better brand
              recall.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
