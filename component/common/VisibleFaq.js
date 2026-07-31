'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'

export default function VisibleFaq({ title = 'Frequently Asked Questions', faqs = [], badge = 'FAQ' }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!faqs?.length) return null

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <PageSection variant="cream" padding="default" containerClassName="max-w-4xl">
      <SectionHeader badge={badge} title={title} align="center" className="mb-10" />
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={faq.question}
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
                <span className="font-semibold text-heading">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </PageSection>
  )
}
