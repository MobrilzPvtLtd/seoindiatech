'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
        'Yes. A digital marketing company can align AI SEO strategy with your lead funnel, landing pages, and conversion tracking so traffic turns into leads.  ',
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
