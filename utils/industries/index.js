import { buildCatalogEntries, INDUSTRY_CATEGORIES } from './catalog'
import { buildIndustryPage } from './contentBuilder'

const catalog = buildCatalogEntries()

export const industries = catalog.map(buildIndustryPage)

export { INDUSTRY_CATEGORIES, buildCatalogEntries, toSlug } from './catalog'

export function getIndustryBySlug(slug) {
  return industries.find((item) => item.slug === slug)
}

export function getAllIndustrySlugs() {
  return industries.map((item) => item.slug)
}
