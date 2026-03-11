'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ASOFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are app store optimization services?',
      answer:
        'App store optimization services improve your app visibility and installs by working on keywords, listing copy, creatives, and conversion.',
    },
    {
      question:
        'Q2. How long does app store optimization take to show results?',
      answer:
        'Most apps see early movement within 2 to 6 weeks. Strong results usually build over 2 to 3 months with consistent iteration.',
    },
    {
      question: 'Q3. Do you provide app store optimization India targeting?',
      answer:
        'Yes. We create keyword and listing plans focused on app store optimization India goals, including regional and language considerations when needed.',
    },
    {
      question: 'Q4. What is the difference between ASO and SEO?',
      answer:
        'ASO focuses on ranking and conversion inside app stores. SEO focuses on search engines. They can work together for better discovery.',
    },
    {
      question:
        'Q5. Do you work as an app store optimization agency for Android and iOS?',
      answer:
        'Yes. We handle Google Play and Apple App Store optimization with store-specific best practices.',
    },
    {
      question: 'Q6. Can ASO support answer engine optimization services?',
      answer:
        'Yes. When your app pages and FAQs are aligned with user questions, it can improve visibility in AI answers and other search features.',
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
            Common questions about our app store optimization services
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

                <span className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  )}
                </span>
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