/** Shared entity topics and AI-search helpers for schema + content optimization. */

export const AI_ENTITY_TOPICS = [
  'Search Engine Optimization',
  'AI Search Optimization',
  'Generative Engine Optimization',
  'Answer Engine Optimization',
  'Google AI Overviews',
  'Local SEO',
  'Technical SEO',
  'Content Marketing',
  'Pay-Per-Click Advertising',
  'Google Business Profile',
  'Core Web Vitals',
  'E-E-A-T',
  'Digital Marketing',
  'Conversion Rate Optimization',
  'International SEO',
]

export const SPEAKABLE_SELECTORS = [
  'h1',
  '[aria-label="Quick answer"] p',
  '.premium-prose > p:first-of-type',
  '.blog-article-body > p:first-of-type',
]

export function buildSpeakableSpecification(selectors = SPEAKABLE_SELECTORS) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: selectors,
  }
}

export function enrichOrganizationNode(org) {
  return {
    ...org,
    foundingDate: '2010',
    knowsAbout: AI_ENTITY_TOPICS,
    aggregateRating: org.aggregateRating || {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
      bestRating: '5',
    },
  }
}

export function buildFaqEntities(faqs) {
  return (faqs || []).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))
}
