'use client'

import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

export default function FAQComponent({ faqdata }) {
  return (
    <VisibleFaq
      title="Frequently Asked Questions"
      faqs={faqdata || PAGE_FAQS.socialMediaMarketing}
      badge="FAQ"
      minCount={8}
      showSchema
    />
  )
}
