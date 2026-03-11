'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function PPCFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What is a pay per click campaign?',
      answer:
        'A pay per click campaign is a paid ads setup where you pay when someone clicks your ad. It is commonly run on Google Ads to drive calls, leads, or sales.',
    },
    {
      question:
        'Q2. How fast can a pay per click campaign start bringing leads?',
      answer:
        'In many cases, leads can start within days after launch. Results depend on your budget, competition, offer, and landing page quality.',
    },
    {
      question:
        'Q3. How do you track results from pay per click advertising?',
      answer:
        'We set up conversion tracking for calls, forms, purchases, and key actions. Then we report what each action costs and which keywords drive it.',
    },
    {
      question:
        'Q4. Can PPC work for local businesses?',
      answer:
        'Yes. A pay per click campaign can target specific locations, service areas, and “near me” intent. It works well alongside local SEO.',
    },
    {
      question:
        'Q5. What makes your pay per click advertising agency different?',
      answer:
        'We focus on clean structure, accurate tracking, and practical improvements. You get clear reporting and decisions based on performance, not guesses.',
    },
    {
      question:
        'Q6. Do you also support other marketing services?',
      answer:
        'Yes. As a digital marketing services company, we can align PPC with SEO, content, and local SEO services agency work for stronger long-term growth.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            FAQs
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about pay per click advertising
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={'faq-answer-' + index}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100 pr-4">
                  {faq.question}
                </span>

                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  )}
                </span>
              </button>

              <div
                id={'faq-answer-' + index}
                aria-hidden={openIndex !== index}
                className={`px-6 pb-5 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-2 text-justify">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}