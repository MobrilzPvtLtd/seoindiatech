'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are social media optimization services?',
      answer:
        'Social media optimization services improve your social profiles, content plan, and engagement so you get better reach, stronger trust, and more leads from social platforms.',
    },
    {
      question:
        'Q2. How is an SMO agency different from a social media marketing team?',
      answer:
        'A social media optimization agency focuses on profile structure, content system, discoverability, and ongoing improvement. Marketing may also include paid campaigns and broader promotion.',
    },
    {
      question:
        'Q3. How long does it take to see results from social media optimization services India?',
      answer:
        'Most brands see early improvements in profile visits and engagement in 4 to 6 weeks. Strong lead growth usually takes 2 to 3 months of consistent work.',
    },
    {
      question:
        'Q4. Do you support Google Business Profile GBP optimization with SMO?',
      answer:
        'Yes. We can align social activity with google business profile gbp optimization so your brand looks consistent across Maps and social platforms.',
    },
    {
      question:
        'Q5. Which platforms do you work on for social media optimization services?',
      answer:
        'We support Instagram, Facebook, LinkedIn, X, YouTube, and Pinterest. Platform choice depends on your audience and goals.',
    },
    {
      question:
        'Q6. Can a digital marketing company in India manage SMO and branding together?',
      answer:
        'Yes. If you need one partner, a digital marketing company in India can manage SMO, digital branding services, and other channels with one plan and shared reporting.',
    },
  ]

export default function SMOFaq() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
