import legacyPosts from '../BlogPost.legacy'
import { getAllPremiumBlogPosts } from './premium'
import { enrichLegacyPost } from './legacyBlogMeta.js'

/** Draft posts kept in legacy source but excluded from routes, sitemap, and listings. */
const UNPUBLISHED_BLOG_SLUGS = new Set([
  'google-core-update-may-2026-seo-content-strategy-agentic-ai',
])

const premiumPosts = getAllPremiumBlogPosts()
const enrichedLegacyPosts = legacyPosts.map(enrichLegacyPost)

/** Combined blog posts: premium first (newest), then legacy */
const posts = [...premiumPosts, ...enrichedLegacyPosts].filter(
  (post) => !UNPUBLISHED_BLOG_SLUGS.has(post.slug)
)

export default posts
export { premiumPosts, legacyPosts, enrichedLegacyPosts }
