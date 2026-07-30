'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Can you guarantee first-page Google rankings?',
    a: 'No ethical SEO agency can guarantee specific rankings-anyone who does either doesn\'t understand how search engines work or isn\'t being honest with you. What we can guarantee is a sound process: thorough audits, ethical tactics, and strategies built around what actually moves rankings for your industry and competition.',
  },
  {
    q: 'How much do your SEO services cost?',
    a: 'Cost depends on your website\'s size, industry competitiveness, and goals-a local business targeting a few service areas is a different scope than an e-commerce brand competing nationally. We\'ll give you a clear, itemized proposal after understanding your specific situation, rather than a generic flat rate that doesn\'t reflect the actual work involved.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'We work on a monthly retainer model because SEO is an ongoing process, not a one-time fix-but we don\'t lock clients into rigid long-term contracts. If our work isn\'t delivering value, you should be free to walk away.',
  },
  {
    q: 'What happens to my rankings if I stop SEO?',
    a: 'Unlike paid ads, organic rankings don\'t disappear the moment you stop paying - but they also don\'t stay static forever. Competitors keep optimizing, algorithms keep changing, and content ages. Rankings built through solid SEO tend to hold longer than quick-win tactics, but ongoing maintenance is what keeps them from slowly eroding.',
  },
  {
    q: 'Should I invest in SEO or PPC?',
    a: 'They solve different problems. PPC gets you visibility immediately but stops the moment you stop paying. SEO takes longer to build but keeps generating traffic without ongoing ad spend. Most businesses benefit from a mix-PPC for immediate results while SEO compounds in the background.',
  },
  {
    q: 'Do you work with specific industries, or is your approach one-size-fits-all?',
    a: 'We\'ve worked across industries-from local service businesses to e-commerce and enterprise brands-but we don\'t run the same playbook for all of them. Search behavior, competition, and buying cycles differ by industry, so every strategy starts with understanding your specific market, not a template.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950 py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-white dark:bg-gray-800 rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-blue-200 dark:border-blue-800/50 shadow-lg shadow-blue-500/5 dark:shadow-blue-900/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800/50'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors duration-300 ${
                      isOpen
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400'
                    }`}>
                      {i + 1}
                    </span>
                    <h3 className={`text-base font-bold transition-colors duration-300 ${
                      isOpen
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 pl-[3.25rem] text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
