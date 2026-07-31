'use client'

import VisibleFaq from '@/component/common/VisibleFaq'

export default function LocationFAQ({ faqs, city, subject }) {
  const topic = subject || city || 'your business'

  const defaultFAQs = [
    {
      question: `How long does it take to see results from SEO in ${city || 'your area'}?`,
      answer:
        'Most clients see noticeable improvements in 3-6 months, depending on competition, current site health, and keyword difficulty. We provide monthly reports so you always know the progress.',
    },
    {
      question: 'Do you guarantee first-page rankings?',
      answer:
        'No ethical SEO company can guarantee #1 rankings (Google decides that). We do guarantee transparent work, white-hat strategies, and measurable traffic and lead growth.',
    },
    {
      question: `What makes your SEO services different for ${topic}?`,
      answer:
        'We focus heavily on local SEO signals (Google Business Profile, citations, reviews), industry-specific keyword research, and fast-loading pages tailored to how your customers search.',
    },
    {
      question: 'How much do your SEO packages cost?',
      answer:
        'Pricing depends on scope (local, national, e-commerce, etc.). We offer a free site audit and custom proposal after understanding your goals.',
    },
    {
      question: 'Will my website be safe during SEO work?',
      answer:
        'Yes - we never use black-hat tactics. All changes are tested, backed up, and reversible. Your site stays live and secure throughout the process.',
    },
  ]

  const faqList = faqs?.length > 0 ? faqs : defaultFAQs

  return (
    <VisibleFaq
      title={`Frequently Asked Questions about ${topic}`}
      faqs={faqList}
      badge="FAQ"
    />
  )
}
