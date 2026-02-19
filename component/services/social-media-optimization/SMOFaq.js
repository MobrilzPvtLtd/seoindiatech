'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
