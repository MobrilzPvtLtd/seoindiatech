'use client'

import VisibleFaq from '@/component/common/VisibleFaq'

export default function FAQComponent({ faqdata }) {
  const defaultFaqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a comprehensive range of digital services including custom website development, mobile apps, SEO, PPC, social media marketing, and AI-powered search optimization tailored to your business goals.',
    },
    {
      question: 'What is the cost of building a website or app?',
      answer:
        'Cost varies based on scope, features, and integrations. We provide transparent quotes after a consultation with no hidden charges.',
    },
    {
      question: 'How long does it take to complete a website project?',
      answer:
        'A standard business website typically takes 3–8 weeks including discovery, design, development, testing, and launch. Larger projects may take longer.',
    },
    {
      question: 'Do you provide ongoing support after project delivery?',
      answer:
        'Yes. We offer maintenance, updates, security patches, and performance optimization through monthly packages or pay-as-you-go support.',
    },
    {
      question: 'Is SEO included in the website development package?',
      answer:
        'Basic on-page SEO is included. Advanced SEO—keyword research, link building, local SEO—is available as a dedicated service.',
    },
    {
      question: 'How can you help my business grow online?',
      answer:
        'We combine technical excellence with data-driven marketing—responsive websites, optimized content, and campaigns focused on leads and revenue.',
    },
    {
      question: 'Can you manage the website or app after launch?',
      answer:
        'Absolutely. Our team handles updates, bug fixes, performance monitoring, and security so your platform runs smoothly post-launch.',
    },
  ]

  return <VisibleFaq title="Frequently Asked Questions" faqs={faqdata || defaultFaqs} badge="FAQ" />
}
