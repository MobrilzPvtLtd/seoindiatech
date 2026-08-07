import { buildCatalogEntries } from '../catalog'
import { getIndustryProfile } from '../profiles'
import { buildPremiumContent } from './buildPremiumContent'
import { plasticSurgeryPremium } from './plasticSurgery'

const OVERRIDES = {
  'plastic-surgery-seo': plasticSurgeryPremium,
}

const catalog = buildCatalogEntries()

export const PREMIUM_INDUSTRY_SLUGS = catalog.map((entry) => entry.slug)

function mergePremiumContent(built, override) {
  if (!override) return built

  return {
    ...built,
    ...override,
    seo: { ...built.seo, ...override.seo },
    hero: { ...built.hero, ...override.hero },
    trust: { ...built.trust, ...override.trust },
    whySeoMatters: override.whySeoMatters || built.whySeoMatters,
    painPoints: override.painPoints || built.painPoints,
    editorial: override.editorial || built.editorial,
    keyTakeaways: override.keyTakeaways || built.keyTakeaways,
    internalLinks: override.internalLinks || built.internalLinks,
    whyChoose: override.whyChoose || built.whyChoose,
    services: override.services || built.services,
    pillars: override.pillars || built.pillars,
    audiences: override.audiences || built.audiences,
    process: override.process || built.process,
    comparison: override.comparison || built.comparison,
    results: override.results || built.results,
    caseStudy: override.caseStudy || built.caseStudy,
    relatedIndustries: override.relatedIndustries || built.relatedIndustries,
    toolsTrust: override.toolsTrust || built.toolsTrust,
    testimonials: override.testimonials || built.testimonials,
    faq: override.faq || built.faq,
    contact: override.contact || built.contact,
    finalCta: override.finalCta || built.finalCta,
    isHealthcare: override.isHealthcare ?? built.isHealthcare,
  }
}

export function isPremiumIndustry(slug) {
  return PREMIUM_INDUSTRY_SLUGS.includes(slug)
}

export function getPremiumIndustryContent(slug) {
  const entry = catalog.find((item) => item.slug === slug)
  const profile = getIndustryProfile(slug)
  if (!entry || !profile) return null

  const built = buildPremiumContent(entry, profile)
  const override = OVERRIDES[slug]
  return mergePremiumContent(built, override)
}
