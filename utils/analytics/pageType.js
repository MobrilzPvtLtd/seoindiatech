/**
 * Derive SEO page classification from URL path.
 * Used for analytics event parameters — not hard-coded page lists.
 */

const CITY_SLUG_PREFIX = 'seo-services-in-'

export function classifyPageType(pathname = '/') {
  const path = normalizePath(pathname)

  if (path === '/') return 'homepage'
  if (path.startsWith('/services/')) return 'service'
  if (path.startsWith('/blog/')) return 'blog'
  if (path === '/blog') return 'blog'
  if (path.startsWith('/industries/')) return 'industry'
  if (path === '/industries') return 'industry'
  if (path.startsWith('/seo-services/')) return 'city'
  if (path.startsWith('/solution/')) return 'solution'
  return 'core'
}

export function getPageTopic(pathname = '/') {
  const path = normalizePath(pathname)
  const type = classifyPageType(path)

  if (type === 'service') return path.replace('/services/', '')
  if (type === 'blog' && path !== '/blog') return path.replace('/blog/', '')
  if (type === 'industry' && path !== '/industries') return path.replace('/industries/', '')
  if (type === 'city') {
    const slug = path.replace('/seo-services/', '')
    if (slug.startsWith(CITY_SLUG_PREFIX)) {
      return slug.slice(CITY_SLUG_PREFIX.length).replace(/-/g, ' ')
    }
    return slug
  }
  if (type === 'solution') return path.replace('/solution/', '')
  if (path === '/') return 'homepage'
  return path.replace(/^\//, '') || 'homepage'
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  const base = pathname.split('?')[0].split('#')[0]
  return base.length > 1 && base.endsWith('/') ? base.slice(0, -1) : base
}
