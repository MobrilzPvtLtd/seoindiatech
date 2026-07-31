'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What does an ai SEO company do?',
      answer:
        'An ai SEO company improves your site for standard search results and for AI answer surfaces. It focuses on clear content, strong structure, and technical health.',
    },
    {
      question: 'Q2. How are AI SEO services different from regular SEO?',
      answer:
        'AI SEO services include regular SEO work plus extra focus on question based intent, answer formatting, and signals that help AI tools cite your pages.',
    },
    {
      question: 'Q3. What are answer engine optimization services?',
      answer:
        'Answer engine optimization services help your pages show up as direct answers in AI tools and search features by using clear sections, short answers, and strong topic coverage.',
    },
    {
      question: 'Q4. What is a generative engine optimization agency?',
      answer:
        'A generative engine optimization agency builds content and structure that increases the chance your brand is referenced in AI generated answers across search and AI tools.',
    },
    {
      question: 'Q5. How long does AI SEO take to show results?',
      answer:
        'Many sites see early movement in 4 to 8 weeks, but stronger results often take 3 to 6 months. Timing depends on competition, site health, and content needs.',
    },
    {
      question: 'Q6. Can a digital marketing company support AI SEO too?',
      answer:
        'Yes. A digital marketing company can align AI SEO strategy with your lead funnel, landing pages, and conversion tracking so traffic turns into leads.',
    },
    {
      question: 'Q7. How does AI SEO help with Google AI Overviews?',
      answer:
        'AI SEO structures content with clear answers, FAQs, and entity signals so your pages are more likely to be cited in AI Overviews and featured snippets when users ask related questions.',
    },
    {
      question: 'Q8. What should I expect in the first month of AI SEO services?',
      answer:
        'The first month typically includes a technical and content audit, keyword and intent mapping, quick-win fixes, and a prioritized roadmap—so you see progress before longer-term ranking gains build.',
    },
  ]

export default function AiSeoFAQ() {
  return <ServiceFaq faqs={faqs} />
}
