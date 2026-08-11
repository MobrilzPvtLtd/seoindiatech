/**
 * Premium overrides for /services/[hubSlug] category hub pages.
 * /services/seo is the primary commercial landing page for India SEO keyword clusters.
 */
import { seoHubExpandedContent } from './seoHubExpandedContent.js'

export const seoHubPremium = seoHubExpandedContent

export const HUB_OVERRIDES = {
  seo: seoHubPremium,
}
