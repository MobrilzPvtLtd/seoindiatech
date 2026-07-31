'use client'

import VisibleFaq from '@/component/common/VisibleFaq'

import { MIN_FAQ_COUNT, SERVICE_FAQ_SUPPLEMENTS } from '@/utils/faqHelpers'

/** Standard FAQ section for individual service pages */
export default function ServiceFaq({ title = 'Frequently Asked Questions', faqs = [], badge = 'FAQ' }) {
  if (!faqs?.length) return null
  return (
    <VisibleFaq
      title={title}
      faqs={faqs}
      badge={badge}
      minCount={MIN_FAQ_COUNT}
      supplementalFaqs={SERVICE_FAQ_SUPPLEMENTS}
      showSchema
    />
  )
}
