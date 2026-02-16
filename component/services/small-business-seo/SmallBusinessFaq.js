'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function SmallBusinessFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are small business SEO services?',
      answer:
        'Small business SEO services are website and local improvements that help your business rank higher on search engines and earn more leads from organic search.',
    },
    {
      question:
        'Q2. How long do SEO services for small businesses take to show results?',
      answer:
        'Many sites see early movement in 4 to 8 weeks, while stronger results often take 3 to 6 months, depending on competition and site condition.',
    },
    {
      question:
        'Q3. What is included in local SEO services for small business?',
      answer:
        'Local SEO services for small business often include Google Business Profile updates, citation cleanup, local page work, review support, and map ranking improvements.',
    },
    {
      question:
        'Q4. Do I need local SEO for small business if I already run ads?',
      answer:
        'Yes. Ads stop when the budget stops. Local SEO for small business builds long term visibility that can keep bringing leads.',
    },
    {
      question:
        'Q5. Can an SEO company for small business help ecommerce stores?',
      answer:
        'Yes. Ecommerce SEO services help category pages and product pages rank, improve site structure, and increase search traffic that converts.',
    },
    {
      question: 'Q6. How do I choose a small business SEO agency?',
      answer:
        'Choose a small business SEO agency that shares a clear plan, explains tasks, provides reporting, and focuses on rankings, traffic, and leads.  ',
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
