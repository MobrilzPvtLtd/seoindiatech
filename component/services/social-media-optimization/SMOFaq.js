'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function SMOFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What are social media optimization services?',
      answer:
        'Social media optimization services improve your social profiles, content plan, and engagement so you get better reach, stronger trust, and more leads from social platforms.',
    },
    {
      question:
        'Q2. How is an SMO agency different from a social media marketing team?',
      answer:
        'A social media optimization agency focuses on profile structure, content system, discoverability, and ongoing improvement. Marketing may also include paid campaigns and broader promotion.',
    },
    {
      question:
        'Q3. How long does it take to see results from social media optimization services India?',
      answer:
        'Most brands see early improvements in profile visits and engagement in 4 to 6 weeks. Strong lead growth usually takes 2 to 3 months of consistent work.',
    },
    {
      question:
        'Q4. Do you support Google Business Profile GBP optimization with SMO?',
      answer:
        'Yes. We can align social activity with google business profile gbp optimization so your brand looks consistent across Maps and social platforms.',
    },
    {
      question:
        'Q5. Which platforms do you work on for social media optimization services?',
      answer:
        'We support Instagram, Facebook, LinkedIn, X, YouTube, and Pinterest. Platform choice depends on your audience and goals.',
    },
    {
      question:
        'Q6. Can a digital marketing company in India manage SMO and branding together?',
      answer:
        'Yes. If you need one partner, a digital marketing company in India can manage SMO, digital branding services, and other channels with one plan and shared reporting.',
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
            Common questions about social media optimization services
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
