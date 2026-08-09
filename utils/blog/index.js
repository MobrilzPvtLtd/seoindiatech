import legacyPosts from '../BlogPost.legacy'
import { getAllPremiumBlogPosts } from './premium'
import { enrichLegacyPost } from './legacyBlogMeta.js'

const premiumPosts = getAllPremiumBlogPosts()
const enrichedLegacyPosts = legacyPosts.map(enrichLegacyPost)

/** Combined blog posts: premium first (newest), then legacy */
const posts = [...premiumPosts, ...enrichedLegacyPosts]

export default posts
export { premiumPosts, legacyPosts, enrichedLegacyPosts }
