'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What is ecommerce SEO?',
      answer:
        'Ecommerce SEO means improving your online store so it appears more often in search results when buyers look for products like yours.',
    },
    {
      question: 'Q2. How long until I see results?',
      answer:
        'SEO takes time. Most stores see noticeable increases in rankings and traffic in 3 to 6 months.',
    },
    {
      question: 'Q3. Do you work with small businesses?',
      answer:
        'Yes. We offer small business SEO services and adjust our work to your budget and goals.',
    },
    {
      question: 'Q4. Can SEO help local sales?',
      answer:
        'Yes. Our local SEO company in India services help your store appear in local searches and local maps listings.',
    },
    {
      question: 'Q5. What is included in your reports?',
      answer:
        'We share traffic changes, keyword rankings, and work done each month in simple, easy to read reports.',
    },
    {
      question: 'Q6. Do I have to sign a long contract?',
      answer:
        'We offer flexible plans. You can choose the plan that fits your goals.',
    },
  ]

export default function EcommerceSEOFAQ() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
