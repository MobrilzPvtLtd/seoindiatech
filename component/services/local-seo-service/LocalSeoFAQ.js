'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            FAQs
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about our Local SEO services
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
                aria-controls={"faq-answer-" + index}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100 pr-4">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                )}
              </button>

              <div
                id={"faq-answer-" + index}
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