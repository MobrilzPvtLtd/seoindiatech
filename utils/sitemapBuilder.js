import { BLOG_CATALOG } from './blog/premium/blogCatalog.js'
import { getLastmodForRegistryPath } from './sitemapLastmodRegistry.js'

export const SITE_URL = 'https://www.seoindiatech.com'
export const ALLOWED_HOSTS = new Set(['www.seoindiatech.com', 'seoindiatech.com'])

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

/** Upper bound for lastmod — never emit future dates (local calendar day). */
function todayIsoDate() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/**
 * Sitemap lastmod from catalog dateModified only — never datePublished.
 * Returns null when missing, invalid, or future (omit <lastmod> in XML).
 */
function resolveBlogLastmod(entry) {
  const raw = entry?.dateModified
  if (!raw || !ISO_DATE.test(raw)) return null
  if (raw > todayIsoDate()) return null
  return raw
}

const BLOG_LASTMOD_BY_SLUG = Object.fromEntries(
  BLOG_CATALOG.map((entry) => [entry.slug, resolveBlogLastmod(entry)]).filter(([, date]) => date)
)

export function getLastmodForPath(path) {
  const registryDate = getLastmodForRegistryPath(path)
  if (registryDate) return registryDate

  const blogMatch = path.match(/^\/blog\/(.+)$/)
  if (!blogMatch) return null
  return BLOG_LASTMOD_BY_SLUG[blogMatch[1]] || null
}

export function buildSitemapUrls(paths) {
  return paths.map((path) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`))
}

export function validateSitemapUrls(urls) {
  const errors = []
  const seen = new Set()

  for (const url of urls) {
    if (seen.has(url)) {
      errors.push(`Duplicate URL: ${url}`)
      continue
    }
    seen.add(url)

    let parsed
    try {
      parsed = new URL(url)
    } catch {
      errors.push(`Invalid URL: ${url}`)
      continue
    }

    if (!ALLOWED_HOSTS.has(parsed.hostname)) {
      errors.push(`Foreign domain in sitemap: ${url}`)
    }

    if (parsed.protocol !== 'https:') {
      errors.push(`Non-HTTPS URL: ${url}`)
    }
  }

  return errors
}

export function generateSitemapXml(paths) {
  const urls = buildSitemapUrls(paths)
  const errors = validateSitemapUrls(urls)
  if (errors.length) {
    throw new Error(`Sitemap validation failed:\n${errors.join('\n')}`)
  }

  const body = urls
    .map((loc) => {
      const path = loc === SITE_URL ? '/' : loc.replace(SITE_URL, '')
      const lastmod = getLastmodForPath(path)
      const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''

      return `  <url>
    <loc>${loc}</loc>${lastmodTag}
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`
}
