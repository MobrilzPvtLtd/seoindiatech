'use client'

import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

/** @deprecated Use VisibleFaq with PAGE_FAQS.seoHub directly */
export default function FaqSection() {
  return <VisibleFaq faqs={PAGE_FAQS.seoHub} minCount={8} showSchema />
}
