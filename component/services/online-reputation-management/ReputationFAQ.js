'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ReputationFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are online reputation management services?',
      answer:
        'Online reputation management services help you monitor reviews, fix listings, respond to complaints, and improve what shows in search results for your brand.',
    },
    {
      question:
        'Q2. How does online reputation management for business help sales?',
      answer:
        'It builds trust at the moment people search your brand. Better reviews and accurate listings often lead to more calls, visits, and form submissions.',
    },
    {
      question:
        'Q3. Is online reputation management in digital marketing different from SEO?',
      answer:
        'It works with SEO, but focuses on branded search results, reviews, and public sentiment. SEO supports discovery, while reputation work supports trust and decision making.',
    },
    {
      question:
        'Q4. Do you offer online reputation management services for small business?',
      answer:
        'Yes. We focus on the highest impact actions first, such as review handling, listing cleanup, and Google Business Profile updates.',
    },
    {
      question:
        'Q5. How long does online reputation management take to show results?',
      answer:
        'Some changes show in days, like listing fixes and faster review replies. Search result improvements usually take weeks, depending on competition and current brand signals.',
    },
    {
      question:
        'Q6. What is included in google business profile gbp optimization?',
      answer:
        'It includes listing accuracy, categories, services, photos, review workflows, and updates that improve calls, direction requests, and customer confidence.',
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
            Common questions about online reputation management services
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
