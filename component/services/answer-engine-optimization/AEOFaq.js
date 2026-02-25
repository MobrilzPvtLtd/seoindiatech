'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function AEOFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are AEO answer engine optimization services?',
      answer:
        'AEO answer engine optimization services help your content become the best direct answer for user questions in search engines and AI tools.',
    },
    {
      question: 'Q2. How is answer engine optimization different from SEO?',
      answer:
        'SEO focuses on ranking pages. Answer engine optimization focuses on making content easy to extract and cite as a direct answer, with structure and schema.',
    },
    {
      question: 'Q3. How long does AEO take to show results?',
      answer:
        'Many sites see early wins in snippet visibility within weeks, but consistent results usually build over 2 to 3 months based on competition and site health.',
    },
    {
      question: 'Q4. Do I need schema for AEO?',
      answer:
        'Schema is not the only factor, but it helps systems understand your page and improves eligibility for rich results, FAQs, and service listings.',
    },
    {
      question: 'Q5. Can AEO help local businesses in India?',
      answer:
        'Yes. AEO can support local SEO services India by matching location based questions and improving trust signals that lead to calls and visits.',
    },
    {
      question: 'Q6. Do you offer answer engine optimization consulting?',
      answer:
        'Yes. We offer answer engine optimization consulting for audits, content templates, schema plans, and step by step guidance for in house teams.',
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
