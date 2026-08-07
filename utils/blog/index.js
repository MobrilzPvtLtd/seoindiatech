import legacyPosts from '../BlogPost.legacy'
import { getAllPremiumBlogPosts } from './premium'

const premiumPosts = getAllPremiumBlogPosts()

/** Combined blog posts: premium first (newest), then legacy */
const posts = [...premiumPosts, ...legacyPosts]

export default posts
export { premiumPosts, legacyPosts }
