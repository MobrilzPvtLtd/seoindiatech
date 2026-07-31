'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = [
    {
      question: 'Q1. What is a pay per click campaign?',
      answer:
        'A pay per click campaign is a paid ads setup where you pay when someone clicks your ad. It is commonly run on Google Ads to drive calls, leads, or sales.',
    },
    {
      question:
        'Q2. How fast can a pay per click campaign start bringing leads?',
      answer:
        'In many cases, leads can start within days after launch. Results depend on your budget, competition, offer, and landing page quality.',
    },
    {
      question:
        'Q3. How do you track results from pay per click advertising?',
      answer:
        'We set up conversion tracking for calls, forms, purchases, and key actions. Then we report what each action costs and which keywords drive it.',
    },
    {
      question:
        'Q4. Can PPC work for local businesses?',
      answer:
        'Yes. A pay per click campaign can target specific locations, service areas, and "near me" intent. It works well alongside local SEO.',
    },
    {
      question:
        'Q5. What makes your pay per click advertising agency different?',
      answer:
        'We focus on clean structure, accurate tracking, and practical improvements. You get clear reporting and decisions based on performance, not guesses.',
    },
    {
      question:
        'Q6. Do you also support other marketing services?',
      answer:
        'Yes. As a digital marketing services company, we can align PPC with SEO, content, and local SEO services agency work for stronger long-term growth.',
    },
  ]

export default function PPCFaq() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
