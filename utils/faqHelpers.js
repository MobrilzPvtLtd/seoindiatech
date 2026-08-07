export const MIN_FAQ_COUNT = 8

/** Generic supplemental FAQs for service pages if a list is short */
export const SERVICE_FAQ_SUPPLEMENTS = [
  {
    question: 'How do I get started with SEO India Tech?',
    answer:
      'Book a free consultation. We review your website, discuss goals, and share a prioritized roadmap with timelines, KPIs, and recommended services.',
  },
  {
    question: 'Do you provide monthly performance reports?',
    answer:
      'Yes. Every engagement includes transparent reporting on rankings, traffic, leads, and completed work-with a dedicated account manager to explain results and next steps.',
  },
  {
    question: 'Does SEO India Tech follow Google guidelines?',
    answer:
      'Yes. We use white-hat SEO and advertising practices focused on sustainable growth-not shortcuts that risk penalties or lost visibility.',
  },
]

/** Append supplemental FAQs until the list reaches minCount (no duplicates by question). */
export function ensureMinFaqs(faqs = [], minCount = MIN_FAQ_COUNT, supplemental = []) {
  const list = [...(faqs || [])]
  const seen = new Set(list.map((f) => f.question?.trim().toLowerCase()))

  for (const faq of supplemental) {
    if (list.length >= minCount) break
    const key = faq.question?.trim().toLowerCase()
    if (!key || seen.has(key)) continue
    seen.add(key)
    list.push(faq)
  }

  return list
}

/** Build FAQPage JSON-LD for rich results and AI Overviews. */
export function buildFaqPageSchema(faqs = []) {
  const mainEntity = faqs
    .filter((f) => f.question?.trim() && f.answer?.trim())
    .map((f) => ({
      '@type': 'Question',
      name: f.question.trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer.trim(),
      },
    }))

  if (!mainEntity.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

/** Extra location FAQs used when a city page has fewer than MIN_FAQ_COUNT entries. */
export function getLocationSupplementalFaqs(city = 'your area') {
  return [
    {
      question: `Is SEO worth investing in for businesses in ${city}?`,
      answer: `Yes. Most customers in ${city} research online before they call, visit, or buy. SEO services help you appear when that intent is highest-on Google Search and Maps-so you capture leads competitors would otherwise win.`,
    },
    {
      question: `Do you provide monthly SEO reports for ${city} clients?`,
      answer: `Yes. Every ${city} SEO project includes transparent reporting on rankings, organic traffic, leads, Google Business Profile actions, and completed tasks-so you always know what changed and what is planned next.`,
    },
    {
      question: `Can SEO India Tech handle multi-location SEO beyond ${city}?`,
      answer: `Yes. We build location-specific pages, listings, and tracking for multiple cities while keeping each market optimized for local search intent and map visibility.`,
    },
  ]
}
