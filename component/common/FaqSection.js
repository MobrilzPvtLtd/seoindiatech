'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

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

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <PageSection variant="gradient" padding="default" containerClassName="max-w-4xl">
      <SectionHeader badge="FAQ" title="Frequently Asked Questions" align="center" className="mb-10" />
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className={`card-premium rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-primary/30 shadow-premium' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                      isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className={`text-base font-bold transition-colors ${isOpen ? 'text-primary' : 'text-heading'}`}>
                    {faq.q}
                  </h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="border-t border-border px-5 pb-5 pt-4 pl-[3.25rem] text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </PageSection>
  )
}
