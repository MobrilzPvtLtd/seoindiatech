'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
