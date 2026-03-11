'use client' // Required for client-side interactivity

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react' // Optional icons – npm install lucide-react

export default function LocationFAQ({ faqs, city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Default FAQs if none provided (fallback)
  const defaultFAQs = [
    {
      question: `How long does it take to see results from SEO in ${city}?`,
      answer:
        'Most clients see noticeable improvements in 3–6 months, depending on competition, current site health, and keyword difficulty. We provide monthly reports so you always know the progress.',
    },
    {
      question: `Do you guarantee first-page rankings?`,
      answer:
        'No ethical SEO company can guarantee #1 rankings (Google decides that). We do guarantee transparent work, white-hat strategies, and measurable traffic & lead growth.',
    },
    {
      question: `What makes your SEO services different in ${city}?`,
      answer:
        'We focus heavily on local SEO signals (Google Business Profile, citations, reviews), city-specific keyword research, and fast-loading pages tailored to ${city} search behavior.',
    },
    {
      question: `How much do your SEO packages cost?`,
      answer:
        'Pricing starts from ₹15,000–₹45,000/month depending on scope (local, national, e-commerce, etc.). We offer a free site audit and custom proposal after discussion.',
    },
    {
      question: `Will my website be safe during SEO work?`,
      answer:
        'Yes – we never use black-hat tactics. All changes are tested, backed up, and reversible. Your site stays live and secure throughout the process.',
    },
  ]

  const faqList = faqs && faqs.length > 0 ? faqs : defaultFAQs

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-t from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Common questions about our SEO services in {city || 'your city'}
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
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
                id={`faq-answer-${index}`}
                className={`px-6 pb-5 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Still have questions? CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 rounded-lg"
          >
            Contact Us Now →
          </a>
        </div>
      </div>
    </section>
  )
}
