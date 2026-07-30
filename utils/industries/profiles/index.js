import { popularMarketsProfiles } from './popularMarkets'
import { automobileHomeProfiles } from './automobileHome'
import { foodHealthProfiles } from './foodHealth'
import { serviceSectorProfiles } from './serviceSector'

export const allIndustryProfiles = {
  ...popularMarketsProfiles,
  ...automobileHomeProfiles,
  ...foodHealthProfiles,
  ...serviceSectorProfiles,
}

export function getIndustryProfile(slug) {
  return allIndustryProfiles[slug] || null
}
