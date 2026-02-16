'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
