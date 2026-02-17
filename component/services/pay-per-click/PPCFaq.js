'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>

              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
