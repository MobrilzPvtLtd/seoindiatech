'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are AEO answer engine optimization services?',
      answer:
        'AEO answer engine optimization services help your content become the best direct answer for user questions in search engines and AI tools.',
    },
    {
      question: 'Q2. How is answer engine optimization different from SEO?',
      answer:
        'SEO focuses on ranking pages. Answer engine optimization focuses on making content easy to extract and cite as a direct answer, with structure and schema.',
    },
    {
      question: 'Q3. How long does AEO take to show results?',
      answer:
        'Many sites see early wins in snippet visibility within weeks, but consistent results usually build over 2 to 3 months based on competition and site health.',
    },
    {
      question: 'Q4. Do I need schema for AEO?',
      answer:
        'Schema is not the only factor, but it helps systems understand your page and improves eligibility for rich results, FAQs, and service listings.',
    },
    {
      question: 'Q5. Can AEO help local businesses in India?',
      answer:
        'Yes. AEO can support local SEO services India by matching location based questions and improving trust signals that lead to calls and visits.',
    },
    {
      question: 'Q6. Do you offer answer engine optimization consulting?',
      answer:
        'Yes. We offer answer engine optimization consulting for audits, content templates, schema plans, and step by step guidance for in house teams.',
    },
    {
      question: 'Q7. Which pages should I optimize first for AEO?',
      answer:
        'Start with high-intent service pages, pricing FAQs, and comparison content-pages where users ask direct questions and AI systems look for concise, authoritative answers.',
    },
    {
      question: 'Q8. Does AEO work with voice search?',
      answer:
        'Yes. Answer-formatted content with natural-language questions and short, definitive answers improves eligibility for voice assistants and spoken query results.',
    },
  ]

export default function AEOFaq() {
  return <ServiceFaq faqs={faqs} />
}
