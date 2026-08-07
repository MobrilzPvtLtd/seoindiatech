import { plasticSurgeryPremium } from './plasticSurgery'

export const PREMIUM_INDUSTRY_SLUGS = ['plastic-surgery-seo']

const PREMIUM_CONTENT = {
  'plastic-surgery-seo': plasticSurgeryPremium,
}

export function isPremiumIndustry(slug) {
  return PREMIUM_INDUSTRY_SLUGS.includes(slug)
}

export function getPremiumIndustryContent(slug) {
  return PREMIUM_CONTENT[slug] || null
}
