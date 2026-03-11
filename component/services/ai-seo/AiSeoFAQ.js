'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function AiSeoFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Q1. What does an ai SEO company do?',
      answer:
        'An ai SEO company improves your site for standard search results and for AI answer surfaces. It focuses on clear content, strong structure, and technical health.',
    },
    {
      question: 'Q2. How are AI SEO services different from regular SEO?',
      answer:
        'AI SEO services include regular SEO work plus extra focus on question based intent, answer formatting, and signals that help AI tools cite your pages.',
    },
    {
      question: 'Q3. What are answer engine optimization services?',
      answer:
        'Answer engine optimization services help your pages show up as direct answers in AI tools and search features by using clear sections, short answers, and strong topic coverage.',
    },
    {
      question: 'Q4. What is a generative engine optimization agency?',
      answer:
        'A generative engine optimization agency builds content and structure that increases the chance your brand is referenced in AI generated answers across search and AI tools.',
    },
    {
      question: 'Q5. How long does AI SEO take to show results?',
      answer:
        'Many sites see early movement in 4 to 8 weeks, but stronger results often take 3 to 6 months. Timing depends on competition, site health, and content needs.',
    },
    {
      question: 'Q6. Can a digital marketing company support AI SEO too?',
      answer:
        'Yes. A digital marketing company can align AI SEO strategy with your lead funnel, landing pages, and conversion tracking so traffic turns into leads.',
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
            Common questions about our AI SEO services
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
