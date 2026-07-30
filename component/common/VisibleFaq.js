'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function VisibleFaq({ title = 'Frequently Asked Questions', faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!faqs?.length) return null

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
