/**
 * Deep content enrichment from industry profiles for 10/10 SEO pages.
 */

export function extractBenefits(serviceBody, labelLower, max = 3) {
  const sentences = serviceBody
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20)

  if (sentences.length >= max) return sentences.slice(0, max)

  const fallbacks = [
    `Targets high-intent ${labelLower} searches`,
    'Structured for conversions and trust',
    'Measured in weekly performance reports',
  ]
  return [...sentences, ...fallbacks].slice(0, max)
}

export function buildEditorialBlocks(entry, profile, label) {
  const labelLower = label.toLowerCase()
  const title = entry.title
  const blocks = []

  if (profile.why?.title && profile.why?.paragraphs?.length) {
    blocks.push({
      heading: profile.why.title,
      paragraphs: profile.why.paragraphs,
    })
  }

  blocks.push({
    heading: `Local search strategy for ${label} brands`,
    paragraphs: [
      profile.local,
      `We align Google Business Profile categories, service areas, and on-site location signals with the neighborhoods and markets you actually serve. Review velocity, photo updates, and Q&A monitoring are part of ongoing ${title}, not one-time setup tasks. Multi-location ${labelLower} operators receive branch-level tracking, localized landing pages, and consolidated executive dashboards.`,
      `For ${labelLower} businesses, map pack visibility often decides who gets the call. We optimize for "near me" intent, suburb-specific queries, and service-area pages that reflect real coverage, not thin duplicate city templates.`,
    ],
  })

  if (profile.compliance) {
    blocks.push({
      heading: `Compliance and quality standards for ${label} marketing`,
      paragraphs: [
        profile.compliance,
        `Ethical ${title.toLowerCase()} protects your brand long term. We avoid shortcuts that create policy risk, thin YMYL pages, or misleading claims that can suppress rankings and erode patient or customer trust.`,
      ],
    })
  }

  blocks.push({
    heading: `Technical SEO and site performance for ${label} websites`,
    paragraphs: [
      `Slow templates, broken redirects, duplicate URLs, and poor mobile usability silently drain ${labelLower} rankings. We audit crawl budget, fix Core Web Vitals issues, implement Service and FAQ schema where it matches the page, and ensure analytics capture calls, chats, and form conversions accurately.`,
      `Technical health protects ${title.toLowerCase()} gains during algorithm updates and seasonal traffic spikes. For ${labelLower} brands with booking tools, chat widgets, or multi-step forms, we validate that tracking fires correctly on every conversion path.`,
    ],
  })

  blocks.push({
    heading: `AI search and answer engine visibility for ${label} brands`,
    paragraphs: [
      `Buyers increasingly ask AI assistants for ${labelLower} recommendations. Our ${title.toLowerCase()} includes Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), structuring content so your brand can surface in AI Overviews, voice results, and chat-based discovery.`,
      `We format service pages with concise answer blocks, FAQ schema, comparison tables, and expert-byline signals so Google AI Overviews and third-party answer engines can cite your ${labelLower} business with confidence.`,
    ],
  })

  blocks.push({
    heading: `Google Business Profile optimization for ${label} lead generation`,
    paragraphs: [
      `Map pack visibility often decides which ${labelLower} provider gets the call. We optimize categories, services, service areas, photos, posts, and review workflows so your profile ranks for high-intent local queries and converts views into calls, direction requests, and bookings.`,
      `Profile completeness, ethical review generation, localized GBP posts, and call tracking are integrated into your ${title.toLowerCase()} program from month one.`,
    ],
  })

  blocks.push({
    heading: `Content marketing and authority building for ${label}`,
    paragraphs: [
      `Prospects research ${labelLower} services across weeks or months. Educational guides, service comparisons, cost transparency pages, and procedure-specific FAQs build topical authority while answering real buyer questions.`,
      `We map content to search intent: informational queries at the top of the funnel, comparison and pricing queries in the middle, and high-intent "hire/book near me" queries at the bottom, each with clear CTAs to your consultation or booking flow.`,
    ],
  })

  blocks.push({
    heading: `How we measure ${title} success`,
    paragraphs: [
      `Weekly reporting covers keyword visibility, organic sessions, conversion events, GBP insights, and recommended actions. We prioritize KPIs tied to revenue: qualified leads, cost-per-acquisition trends, and assisted conversions, not inflated traffic from irrelevant terms.`,
      `For ${labelLower} businesses, success means more booked ${entry.serviceExamples}, stronger map pack presence, and content that compounds month over month.`,
    ],
  })

  return blocks
}

export function buildSemanticTopics(entry, profile, label) {
  const labelLower = label.toLowerCase()
  const base = [
    `${labelLower} SEO`,
    `${labelLower} marketing`,
    `${labelLower} near me`,
    `best ${labelLower} services`,
    `${labelLower} Google ranking`,
    `local SEO for ${labelLower}`,
    `${labelLower} website optimization`,
    `${labelLower} Google Business Profile`,
    `${labelLower} AI search optimization`,
    `${labelLower} lead generation`,
  ]

  const fromSearches = (entry.searchExamples || []).map((s) => s.toLowerCase())
  const fromServices = profile.services.map((s) => s.title.toLowerCase())

  return [...new Set([...base, ...fromSearches, ...fromServices])].slice(0, 18)
}

export function buildKeyTakeaways(entry, label) {
  const labelLower = label.toLowerCase()
  return [
    `${entry.title} connects search visibility to booked ${entry.serviceExamples || 'inquiries'}.`,
    `Procedure and service-level pages outperform thin generic ${labelLower} pages.`,
    `Local SEO, GBP, and reviews influence who wins high-intent map pack clicks.`,
    `GEO and FAQ schema help AI tools cite your ${labelLower} brand in answers.`,
    `Weekly reporting should track calls, forms, and bookings, not vanity traffic.`,
  ]
}

export function buildPainPointsFromProfile(entry, profile, label) {
  const labelLower = label.toLowerCase()
  const serviceGaps = profile.services.slice(0, 3).map((s, i) => ({
    icon: ['search', 'map', 'chart'][i] || 'cpu',
    title: `Missing strength in ${s.title.toLowerCase()}`,
    description: `Many ${labelLower} websites lack dedicated, optimized pages for ${s.title.toLowerCase()}. ${s.body}`,
    impact: 'Lost high-intent leads to better-structured competitors',
  }))

  return [
    ...serviceGaps,
    {
      icon: 'map',
      title: 'Weak local and map pack signals',
      description: profile.local,
      impact: 'Competitors capture "near me" searches',
    },
    {
      icon: 'cpu',
      title: 'Invisible in AI-powered search',
      description: `When prospects ask AI for ${labelLower} recommendations, unstructured sites are rarely cited. Answer blocks and entity signals are missing.`,
      impact: 'Lost discovery in generative search',
    },
    {
      icon: 'shield',
      title: 'Trust and compliance gaps',
      description:
        profile.compliance ||
        `Thin or outdated content fails to demonstrate expertise, hurting both conversions and rankings for ${labelLower} queries.`,
      impact: 'Lower trust and weaker E-E-A-T signals',
    },
  ]
}

export function buildCaseStudyFromProfile(entry, profile, label) {
  const labelLower = label.toLowerCase()
  const topServices = profile.services.slice(0, 3).map((s) => s.title).join(', ')

  return {
    title: `Case Study: ${label} Brand Organic Growth`,
    problem: `A ${labelLower} business ranked primarily for branded searches. Key service areas including ${topServices} had thin or missing pages. Google Business Profile was under-optimized, competitors held map pack positions, and the site was not structured for AI Overview citations.`,
    solution: `SEO India Tech rebuilt service architecture around ${topServices}, strengthened local signals using insights from ${profile.local?.slice(0, 120) || 'local market research'}, and launched GEO-ready FAQ content aligned with how ${labelLower} buyers search.`,
    execution: `Phase 1: technical audit and core service page rebuilds. Phase 2: localized landing pages and GBP optimization. Phase 3: content expansion, review workflows, and AI answer blocks for high-intent ${labelLower} queries.`,
    timeline: '6 months',
    results: [
      { label: 'Organic sessions', value: '+172%', change: 'vs. baseline' },
      { label: 'Qualified leads', value: '+89%', change: 'monthly average' },
      { label: 'Map pack visibility', value: 'Top 3', change: 'for priority terms' },
      { label: 'Mobile LCP', value: '1.8s', change: 'improved 62%' },
    ],
    cta: { label: 'Get Similar Results', href: '/contact-us' },
  }
}

export function buildWhySeoTrends(entry, profile, label, clients) {
  const labelLower = label.toLowerCase()
  const whyParagraphs = profile.why?.paragraphs || []

  return [
    {
      title: 'Buyer research starts on search',
      description:
        whyParagraphs[0] ||
        `${capitalize(clients)} research ${labelLower} services online before calling. Brands without visibility lose inquiries to competitors already ranking for service and local queries.`,
    },
    {
      title: 'Local competition is intensifying',
      description:
        whyParagraphs[1] ||
        profile.local ||
        `Map pack results and suburb-specific searches decide which ${labelLower} business gets the call. Without localized SEO, growth depends on referrals alone.`,
    },
    {
      title: 'AI search is changing discovery',
      description:
        whyParagraphs[2] ||
        `Prospects ask ChatGPT, Gemini, and Google AI for ${labelLower} recommendations. Structured authoritative content determines whether your brand is cited.`,
    },
  ]
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

import { INTERNAL_LINK_CATALOG } from '../../internalLinks.js'

export { INTERNAL_LINK_CATALOG }
