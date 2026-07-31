'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are generative engine optimization strategies?',
      answer:
        'Generative engine optimization strategies help your content appear in AI generated search answers by making it clear, structured, and relevant to user questions.',
    },
    {
      question: 'Q2. How does a generative engine optimization company help?',
      answer:
        'A generative engine optimization company improves your website content so AI tools can read, trust, and include it in their generated responses.',
    },
    {
      question: 'Q3. Why is GEO important for brands?',
      answer:
        'Generative engine optimization geo strategies for brands help businesses appear in AI driven results that act as an answer engine.',
    },
    {
      question: 'Q4. Can GEO replace SEO?',
      answer:
        'GEO supports SEO. It prepares your content for AI tools while SEO helps improve traditional search rankings.',
    },
    {
      question: 'Q5. Who needs generative engine optimization?',
      answer:
        'Any business that wants to appear in AI search results should work with an AI SEO company.',
    },
    {
      question: 'Q6. What industries benefit from GEO?',
      answer:
        'Ecommerce, healthcare, education, finance, and local service providers can benefit from trends in generative engine optimization.',
    },
  ]

export default function GEOFaq() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
