import React from 'react'

export default function Insightimpact() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Philosophy: Efficiency, Insight &amp; Impact
          </h2>
        </div>

        {/* Content Box */}
        <div
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 
                    dark:from-purple-900/20 dark:via-pink-900/10 dark:to-orange-900/20
                    border border-gray-200 dark:border-gray-700 
                    rounded-3xl p-10 shadow-xl"
        >
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            At SEO India Tech, we believe that success begins with a clear path.
            That’s why we emphasize
            <a
              href="https://www.seoindiatech.com/solution/workflow"
              className="text-blue-600"
            >
              {' '}
              workflow
            </a>{' '}
            — designing processes that eliminate confusion, reduce delays, and
            ensure clarity across teams. A well-defined <b>workflow</b> ensures
            that every task, from research to deployment, moves fluidly and
            predictably.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
            But workflow alone isn’t enough. We layer <b>automation</b> on top —
            automating routine tasks, data flows, and follow-ups so that your
            team spends time on strategy and creativity, not repetitive work.
            Through <b>automation,</b> we increase efficiency, minimize manual
            error, and help businesses scale faster.
          </p>

          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Behind every smart process lies data. With our deep{' '}
            <a
              href="https://www.seoindiatech.com/solution/market-research"
              className="text-blue-600"
            >
              market research,
            </a>{' '}
            we gather insights about your industry, competitors, and audience —
            ensuring decisions are data-driven, not guesswork. Market research
            helps us tailor our digital solutions so you reach the right
            customers, at the right time, with the right message.
          </p>
        </div>
      </div>
    </section>
  )
}
