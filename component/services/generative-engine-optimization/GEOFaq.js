'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function GEOFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are generative engine optimization strategies?',
      answer:
        'Generative engine optimization strategies help your content appear in AI generated search answers by making it clear, structured, and relevant to user questions.',
    },
    {
      question: 'Q2. How does a generative engine optimization company help?',
      answer:
        'A generative engine optimization company improves your website content so AI tools can read, trust, and include it in their generated responses.',
    },
    {
      question: 'Q3. Why is GEO important for brands?',
      answer:
        'Generative engine optimization geo strategies for brands help businesses appear in AI driven results that act as an answer engine.',
    },
    {
      question: 'Q4. Can GEO replace SEO?',
      answer:
        'GEO supports SEO. It prepares your content for AI tools while SEO helps improve traditional search rankings.',
    },
    {
      question: 'Q5. Who needs generative engine optimization?',
      answer:
        'Any business that wants to appear in AI search results should work with an AI SEO company.',
    },
    {
      question: 'Q6. What industries benefit from GEO?',
      answer:
        'Ecommerce, healthcare, education, finance, and local service providers can benefit from trends in generative engine optimization.',
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
