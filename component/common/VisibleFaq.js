'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'
import PageSection from '@/component/ui/PageSection'
import { buildFaqPageSchema, ensureMinFaqs } from '@/utils/faqHelpers'

export default function VisibleFaq({
  title = 'Frequently Asked Questions',
  faqs = [],
  badge = 'FAQ',
  embedded = false,
  columns = 1,
  minCount = 0,
  supplementalFaqs = [],
  className = '',
  showSchema = true,
}) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqList =
    minCount > 0 ? ensureMinFaqs(faqs, minCount, supplementalFaqs) : faqs?.filter(Boolean) || []

  if (!faqList.length) return null

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))
  const schema = showSchema ? buildFaqPageSchema(faqList) : null

  const listClassName =
    columns === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-4 items-start'
      : 'space-y-3'

  const accordion = (
  <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className={listClassName}>
        {faqList.map((faq, i) => {
          const isOpen = openIndex === i
          const buttonId = `faq-button-${i}`
          const panelId = `faq-panel-${i}`
          return (
            <div
              key={`${faq.question}-${i}`}
              className={`card-premium rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-primary/30 shadow-premium' : ''
              }`}
            >
              <button
                type="button"
                id={buttonId}
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 p-5 min-h-11 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-semibold text-heading text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="border-t border-border px-5 pb-5 pt-4 text-sm leading-relaxed text-muted"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )

  if (embedded) {
    return <div className={className}>{accordion}</div>
  }

  return (
    <PageSection variant="cream" padding="default" containerClassName={`max-w-4xl ${className}`}>
      <SectionHeader badge={badge} title={title} align="center" className="mb-10" />
      {accordion}
    </PageSection>
  )
}
