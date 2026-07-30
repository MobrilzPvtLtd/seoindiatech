export const CATEGORY_HERO_IMAGES = {
  'popular-markets': '/images/industries/popular-markets-hero.svg',
  'automobile-home': '/images/industries/automobile-home-hero.svg',
  'food-health': '/images/industries/food-health-hero.svg',
  'service-sector': '/images/industries/service-sector-hero.svg',
}

export const INDUSTRY_BENEFIT_PILLARS = [
  {
    id: 'seo',
    title: 'SEO Growth',
    image: '/images/industries/benefit-seo.svg',
    points: [
      'Keyword clusters mapped to high-intent service pages',
      'Technical fixes for speed, crawlability, and conversions',
      'Content that ranks and supports lead generation',
    ],
  },
  {
    id: 'ai-overview',
    title: 'AI Overview Visibility',
    image: '/images/industries/benefit-ai-overview.svg',
    points: [
      'GEO and AEO content structured for AI summaries',
      'FAQ and answer blocks for voice and chat discovery',
      'Entity signals that help AI assistants cite your brand',
    ],
  },
  {
    id: 'gmb',
    title: 'Google Business Profile',
    image: '/images/industries/benefit-gmb.svg',
    points: [
      'Map pack optimization for "near me" searches',
      'Review strategy, photos, posts, and Q&amp;A management',
      'Call, direction, and booking tracking from GBP',
    ],
  },
  {
    id: 'ppc',
    title: 'PPC Advertising',
    image: '/images/industries/benefit-ppc.svg',
    points: [
      'Search and local campaigns for urgent service demand',
      'Landing pages aligned with ad intent and quality score',
      'Budget control with CPL and ROAS reporting',
    ],
  },
  {
    id: 'smo',
    title: 'SMO & Social Media',
    image: '/images/industries/benefit-smo.svg',
    points: [
      'Platform-specific content calendars and creatives',
      'Reputation and engagement tied to search trust signals',
      'Retargeting audiences built from organic and paid data',
    ],
  },
]

export function getCategoryHeroImage(categoryId) {
  return CATEGORY_HERO_IMAGES[categoryId] || '/images/seo-banner.jpg'
}

export function getIndustryBenefits(label, categoryTitle) {
  const industryLabel = label.toLowerCase()

  return INDUSTRY_BENEFIT_PILLARS.map((pillar) => ({
    ...pillar,
    description: getBenefitDescription(pillar.id, industryLabel, categoryTitle),
  }))
}

function getBenefitDescription(pillarId, industryLabel, categoryTitle) {
  const templates = {
    seo: `We build durable organic visibility for ${industryLabel} brands in the ${categoryTitle} space-with service pages, internal linking, and on-page SEO that turns searches into calls and bookings.`,
    'ai-overview': `Your ${industryLabel} expertise is formatted for AI Overviews and answer engines so prospects get clear recommendations when they ask assistants for trusted providers.`,
    gmb: `Google Business Profile work helps ${industryLabel} businesses dominate local map results, earn more reviews, and convert profile views into phone calls and direction requests.`,
    ppc: `Paid search fills gaps while SEO scales-we launch ${industryLabel} PPC campaigns around high-intent keywords, emergency queries, and seasonal demand with transparent CPL reporting.`,
    smo: `Social media optimization keeps your ${industryLabel} brand active, credible, and shareable across platforms that influence discovery, referrals, and repeat business.`,
  }

  return templates[pillarId]
}
