'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function LocalSeoFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What is local SEO service?',
      answer:
        'Local SEO service is a set of techniques focused on boosting your online visibility in local search results and map listings.',
    },
    {
      question: 'Q2. How long before local SEO results appear?',
      answer:
        'Local SEO results can take weeks to months depending on competition, current presence, and search terms.',
    },
    {
      question:
        'Q3. Do you offer local SEO marketing services for small businesses?',
      answer:
        'Yes. We tailor local SEO services for small business needs and budgets.',
    },
    {
      question: 'Q4. What is included in white label local SEO services?',
      answer:
        'White label local SEO services include listing management, on-page optimization, reporting, and support under your brand.',
    },
    {
      question: 'Q5. Can local SEO help my shop appear in Google Maps?',
      answer:
        'Yes. Local SEO services include optimizing your map listing so it ranks higher for nearby searches.',
    },
    {
      question: 'Q6. What makes your local SEO services agency different?',
      answer:
        'We focus on real local visibility improvements. We use proven steps that match the way customers search online.',
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
