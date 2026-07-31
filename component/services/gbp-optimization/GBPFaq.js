'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question:
        'Q1. What are gbp optimization services and what do they include?',
      answer:
        'gbp optimization services improve your Google Business Profile details, categories, services, photos, posts, and reviews so you get more calls, direction requests, and website visits.',
    },
    {
      question:
        'Q2. How long does google business profile optimization take to show results?',
      answer:
        'Small fixes can improve actions within days, but steady gains usually take a few weeks as reviews, posts, and local signals build.',
    },
    {
      question:
        'Q3. Can a google my business SEO company help if my profile is already verified?',
      answer:
        'Yes. Verification is only the start. A google my business SEO company can improve categories, services, content, reviews, and tracking to increase visibility.',
    },
    {
      question:
        'Q4. What is the difference between google business profile SEO and website SEO?',
      answer:
        'google business profile SEO improves your Maps and local listing visibility. Website SEO improves your site rankings. Together, they support a stronger local business SEO service plan.',
    },
    {
      question:
        'Q5. How do reviews affect google business profile gbp optimization?',
      answer:
        'Reviews influence trust and user actions. A good review process and clear responses also support google business profile gbp optimization over time.',
    },
    {
      question:
        'Q6. Do I need a local SEO service company along with profile work?',
      answer:
        'If you want stronger results, yes. A local SEO service company can improve citations, location pages, and local signals that support your profile.',
    },
  ]

export default function GBPFaq() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
