/** Lightweight blog previews for homepage — synced with premium blog catalog */
import { BLOG_CATALOG } from './blog/premium/blogCatalog'

export const BLOG_PREVIEWS = BLOG_CATALOG.slice(0, 4).map((entry) => ({
  slug: entry.slug,
  title: entry.title,
  desc: `${entry.title}. Practical ${entry.primaryKeyword} advice for business owners.`,
  image: entry.image,
}))
