import { buildPremiumServiceContent } from './buildPremiumServiceContent'
import { getServiceEntry, PREMIUM_SERVICE_SLUGS } from './serviceCatalog'
import { SERVICE_OVERRIDES } from './serviceOverrides'

export { PREMIUM_SERVICE_SLUGS, getServiceEntry, SERVICE_CATALOG } from './serviceCatalog'
export { getPremiumHubContent } from './buildPremiumHubContent'

function mergeContent(built, override) {
  if (!override) return built
  return {
    ...built,
    ...override,
    seo: { ...built.seo, ...override.seo },
    hero: { ...built.hero, ...override.hero },
    trust: override.trust ? { ...built.trust, ...override.trust } : built.trust,
    whySeoMatters: override.whySeoMatters || built.whySeoMatters,
    painPoints: override.painPoints || built.painPoints,
    editorial: override.editorial || built.editorial,
    semanticTopics: override.semanticTopics || built.semanticTopics,
    keyTakeaways: override.keyTakeaways || built.keyTakeaways,
    internalLinks: override.internalLinks || built.internalLinks,
    whyChoose: override.whyChoose || built.whyChoose,
    services: override.services || built.services,
    pillars: override.pillars !== undefined ? override.pillars : built.pillars,
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
  }
}

export function isPremiumService(slug) {
  return PREMIUM_SERVICE_SLUGS.includes(slug)
}

export function getPremiumServiceContent(slug) {
  const entry = getServiceEntry(slug)
  if (!entry) return null
  const built = buildPremiumServiceContent(entry)
  const override = SERVICE_OVERRIDES[slug]
  return mergeContent(built, override)
}