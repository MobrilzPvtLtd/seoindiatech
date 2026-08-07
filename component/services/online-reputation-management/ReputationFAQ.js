'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are online reputation management services?',
      answer:
        'Online reputation management services help you monitor reviews, fix listings, respond to complaints, and improve what shows in search results for your brand.',
    },
    {
      question:
        'Q2. How does online reputation management for business help sales?',
      answer:
        'It builds trust at the moment people search your brand. Better reviews and accurate listings often lead to more calls, visits, and form submissions.',
    },
    {
      question:
        'Q3. Is online reputation management in digital marketing different from SEO?',
      answer:
        'It works with SEO, but focuses on branded search results, reviews, and public sentiment. SEO supports discovery, while reputation work supports trust and decision making.',
    },
    {
      question:
        'Q4. Do you offer online reputation management services for small business?',
      answer:
        'Yes. We focus on the highest impact actions first, such as review handling, listing cleanup, and Google Business Profile updates.',
    },
    {
      question:
        'Q5. How long does online reputation management take to show results?',
      answer:
        'Some changes show in days, like listing fixes and faster review replies. Search result improvements usually take weeks, depending on competition and current brand signals.',
    },
    {
      question:
        'Q6. What is included in google business profile gbp optimization?',
      answer:
        'It includes listing accuracy, categories, services, photos, review workflows, and updates that improve calls, direction requests, and customer confidence.',
    },
    {
      question: 'Q7. Can you remove negative reviews or search results?',
      answer:
        'We cannot guarantee removal of legitimate reviews, but we help respond professionally, encourage satisfied customers to share feedback, and suppress harmful content with positive assets and SEO.',
    },
    {
      question: 'Q8. How do you monitor online reputation?',
      answer:
        'We track reviews, brand mentions, and search results across Google, social platforms, and review sites-with alerts and monthly sentiment summaries so issues are addressed quickly.',
    },
  ]

export default function ReputationFAQ() {
  return <ServiceFaq faqs={faqs} />
}
