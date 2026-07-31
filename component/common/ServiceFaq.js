'use client'

import VisibleFaq from '@/component/common/VisibleFaq'

/** Standard FAQ section for individual service pages */
export default function ServiceFaq({ title = 'Frequently Asked Questions', faqs = [], badge = 'FAQ' }) {
  if (!faqs?.length) return null
  return <VisibleFaq title={title} faqs={faqs} badge={badge} />
}
