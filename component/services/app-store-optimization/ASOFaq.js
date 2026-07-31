'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What are app store optimization services?',
      answer:
        'App store optimization services improve your app visibility and installs by working on keywords, listing copy, creatives, and conversion.',
    },
    {
      question:
        'Q2. How long does app store optimization take to show results?',
      answer:
        'Most apps see early movement within 2 to 6 weeks. Strong results usually build over 2 to 3 months with consistent iteration.',
    },
    {
      question: 'Q3. Do you provide app store optimization India targeting?',
      answer:
        'Yes. We create keyword and listing plans focused on app store optimization India goals, including regional and language considerations when needed.',
    },
    {
      question: 'Q4. What is the difference between ASO and SEO?',
      answer:
        'ASO focuses on ranking and conversion inside app stores. SEO focuses on search engines. They can work together for better discovery.',
    },
    {
      question:
        'Q5. Do you work as an app store optimization agency for Android and iOS?',
      answer:
        'Yes. We handle Google Play and Apple App Store optimization with store-specific best practices.',
    },
    {
      question: 'Q6. Can ASO support answer engine optimization services?',
      answer:
        'Yes. When your app pages and FAQs are aligned with user questions, it can improve visibility in AI answers and other search features.',
    },
  ]

export default function ASOFaq() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
