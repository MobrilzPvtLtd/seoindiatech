'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
