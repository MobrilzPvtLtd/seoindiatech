'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What does an AI focused digital marketing company do?',
      answer:
        'It uses AI tools to support research and testing, then applies human review to improve SEO, ads, and conversions.',
    },
    {
      question:
        'Q2. How long does it take to see results from a digital marketing services company?',
      answer:
        'Small improvements can show in 4 to 8 weeks. Strong SEO growth usually takes 3 to 6 months, depending on competition and site condition.',
    },
    {
      question:
        'Q3. Do you offer Ecommerce SEO services for Shopify and WooCommerce?',
      answer:
        'Yes. We work on product pages, category structure, technical fixes, and tracking to improve rankings and sales actions.',
    },
    {
      question: 'Q4. What is included in Local SEO services?',
      answer:
        'Google Business Profile work, local pages, citations, review support, and local content that targets map and local search results.',
    },
    {
      question:
        'Q5. Are Small business SEO services different from enterprise SEO?',
      answer:
        'Yes. Small business SEO focuses on fast wins, fewer pages, clear priorities, and budget control while building steady growth.',
    },
    {
      question:
        'Q6. Can I use local SEO marketing services if I have multiple locations?',
      answer:
        'Yes. We create location pages, manage listings, and keep each location consistent across profiles and citations.',
    },
    {
      question: 'Q7. How does AI improve digital marketing performance?',
      answer:
        'AI accelerates keyword research, ad testing, content drafts, and anomaly detection—while strategists validate outputs so campaigns stay accurate, on-brand, and compliant.',
    },
    {
      question: 'Q8. What industries do you serve with digital marketing?',
      answer:
        'We serve e-commerce, SaaS, healthcare, real estate, education, home services, and 41 industry verticals—with strategies adapted to each sector\'s buyer journey.',
    },
  ]

export default function DigitalMarketingFAQ() {
  return <ServiceFaq faqs={faqs} />
}
