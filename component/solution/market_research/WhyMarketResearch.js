import React from 'react'
import { BarChart3, BookOpen, Check, Lightbulb, Rocket } from 'lucide-react'

const features = [
  {
    icon: Check,
    text: 'Expert research analysts & marketing strategists',
  },
  {
    icon: BarChart3,
    text: 'Advanced tools for real-time data and analytics',
  },
  {
    icon: BookOpen,
    text: 'Industry-specific research models',
  },
  {
    icon: Lightbulb,
    text: 'Business-actionable research insights',
  },
  {
    icon: Rocket,
    text: 'End-to-end support from analysis to campaign execution',
    wide: true,
  },
]

export default function WhyMarketResearch() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose SEO India Tech for Market Research?
          </h4>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We are not just another <b>digital marketing service company;</b> we
            are your strategic partner for business transformation. Our strength
            lies in blending data with marketing execution to deliver growth,
            not just reports.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our goal is simple-empower your business with facts, figures, and
            insights so you make decisions that win markets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.text}
                className={`p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700${feature.wide ? ' sm:col-span-2' : ''}`}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-3">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <p className="text-gray-900 dark:text-white font-medium">
                  {feature.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
