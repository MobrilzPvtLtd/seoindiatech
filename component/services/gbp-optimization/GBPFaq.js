'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function GBPFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question:
        'Q1. What are gbp optimization services and what do they include?',
      answer:
        'gbp optimization services improve your Google Business Profile details, categories, services, photos, posts, and reviews so you get more calls, direction requests, and website visits.',
    },
    {
      question:
        'Q2. How long does google business profile optimization take to show results?',
      answer:
        'Small fixes can improve actions within days, but steady gains usually take a few weeks as reviews, posts, and local signals build.',
    },
    {
      question:
        'Q3. Can a google my business SEO company help if my profile is already verified?',
      answer:
        'Yes. Verification is only the start. A google my business SEO company can improve categories, services, content, reviews, and tracking to increase visibility.',
    },
    {
      question:
        'Q4. What is the difference between google business profile SEO and website SEO?',
      answer:
        'google business profile SEO improves your Maps and local listing visibility. Website SEO improves your site rankings. Together, they support a stronger local business SEO service plan.',
    },
    {
      question:
        'Q5. How do reviews affect google business profile gbp optimization?',
      answer:
        'Reviews influence trust and user actions. A good review process and clear responses also support google business profile gbp optimization over time.',
    },
    {
      question:
        'Q6. Do I need a local SEO service company along with profile work?',
      answer:
        'If you want stronger results, yes. A local SEO service company can improve citations, location pages, and local signals that support your profile.',
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
            Common questions about our Google Business Profile optimization
            services
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
