'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are small business SEO services?',
      answer:
        'Small business SEO services are website and local improvements that help your business rank higher on search engines and earn more leads from organic search.',
    },
    {
      question:
        'Q2. How long do SEO services for small businesses take to show results?',
      answer:
        'Many sites see early movement in 4 to 8 weeks, while stronger results often take 3 to 6 months, depending on competition and site condition.',
    },
    {
      question:
        'Q3. What is included in local SEO services for small business?',
      answer:
        'Local SEO services for small business often include Google Business Profile updates, citation cleanup, local page work, review support, and map ranking improvements.',
    },
    {
      question:
        'Q4. Do I need local SEO for small business if I already run ads?',
      answer:
        'Yes. Ads stop when the budget stops. Local SEO for small business builds long term visibility that can keep bringing leads.',
    },
    {
      question:
        'Q5. Can an SEO company for small business help ecommerce stores?',
      answer:
        'Yes. Ecommerce SEO services help category pages and product pages rank, improve site structure, and increase search traffic that converts.',
    },
    {
      question: 'Q6. How do I choose a small business SEO agency?',
      answer:
        'Choose a small business SEO agency that shares a clear plan, explains tasks, provides reporting, and focuses on rankings, traffic, and leads.',
    },
    {
      question: 'Q7. What is the cost of small business SEO services?',
      answer:
        'Pricing depends on competition, number of service pages, and locations targeted. We offer flexible monthly plans after a free audit-no long-term lock-in required.',
    },
    {
      question: 'Q8. Can small business SEO help with Google AI Overviews?',
      answer:
        'Yes. We structure service pages and FAQs with clear answers and schema so your business is more likely to appear when AI tools and Google surface local provider recommendations.',
    },
  ]

export default function SmallBusinessFaq() {
  return <ServiceFaq faqs={faqs} />
}
