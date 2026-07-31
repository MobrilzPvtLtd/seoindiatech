'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What is local SEO service?',
      answer:
        'Local SEO service is a set of techniques focused on boosting your online visibility in local search results and map listings.',
    },
    {
      question: 'Q2. How long before local SEO results appear?',
      answer:
        'Local SEO results can take weeks to months depending on competition, current presence, and search terms.',
    },
    {
      question:
        'Q3. Do you offer local SEO marketing services for small businesses?',
      answer:
        'Yes. We tailor local SEO services for small business needs and budgets.',
    },
    {
      question: 'Q4. What is included in white label local SEO services?',
      answer:
        'White label local SEO services include listing management, on-page optimization, reporting, and support under your brand.',
    },
    {
      question: 'Q5. Can local SEO help my shop appear in Google Maps?',
      answer:
        'Yes. Local SEO services include optimizing your map listing so it ranks higher for nearby searches.',
    },
    {
      question: 'Q6. What makes your local SEO services agency different?',
      answer:
        'We focus on real local visibility improvements. We use proven steps that match the way customers search online.',
    },
  ]

export default function LocalSeoFAQ() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
