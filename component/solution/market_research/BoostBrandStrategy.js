import React from 'react'

export default function BoostBrandStrategy() {
  return (
    <section className="py-20 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-3xl font-bold text-heading">
            Boost Your Brand Strategy with Content Marketing &amp; Market
            Research
          </h4>
        </div>

        <div className="bg-cream dark:bg-card rounded-3xl p-10 shadow-lg">
          <p className="text-heading dark:text-gray-300 leading-relaxed mb-6">
            Content becomes meaningful only when it resonates with the audience.
            Our <b>content marketing services</b> are based on extensive
            research to define what your customers want to hear, learn, and
            engage with. Using our insights-first content ecosystem, we create:
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Awareness-driven blogs and articles
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Customer journey-based landing pages
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Converting ad copies and emails
            </div>
            <div className="p-5 bg-white dark:bg-surface rounded-xl shadow text-heading">
              Industry-specific whitepapers &amp; case studies
            </div>
          </div>

          <p className="text-heading dark:text-gray-300 leading-relaxed">
            When messaging and user intent align, conversions happen naturally.
          </p>
        </div>
      </div>
    </section>
  )
}
