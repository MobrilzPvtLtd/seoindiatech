import { BLOG_CATALOG } from './blog/premium/blogCatalog.js'

export const SITE_URL = 'https://www.seoindiatech.com'
export const ALLOWED_HOSTS = new Set(['www.seoindiatech.com', 'seoindiatech.com'])

/** Blog slug → ISO date (datePublished) for accurate sitemap lastmod only. */
const BLOG_LASTMOD = Object.fromEntries(
  BLOG_CATALOG.map((entry) => [entry.slug, entry.datePublished])
)

/** Legacy blog slugs without catalog dates — stable lastmod, not build date. */
const LEGACY_BLOG_LASTMOD = {
  'how-google-ai-overviews-are-changing-seo': '2025-06-01',
  'seo-for-restaurants-local-diners': '2025-06-15',
  'youtube-business-marketing-2026': '2026-01-10',
  'local-seo-guide-indian-businesses-2026': '2026-02-01',
  'what-is-ai-seo-why-business-needs-it': '2026-03-01',
  'ppc-vs-seo-which-is-better': '2026-03-15',
  'ecommerce-seo-checklist-india': '2026-04-01',
  'how-to-choose-best-seo-agency-india': '2026-04-15',
}

export function getLastmodForPath(path) {
  const blogMatch = path.match(/^\/blog\/(.+)$/)
  if (blogMatch) {
    const slug = blogMatch[1]
    return BLOG_LASTMOD[slug] || LEGACY_BLOG_LASTMOD[slug] || null
  }
  return null
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
      const priority = path === '/' ? '1.0' : path.startsWith('/blog') ? '0.7' : '0.8'
      const changefreq = path === '/' ? 'weekly' : path.startsWith('/blog') ? 'monthly' : 'weekly'
      const lastmod = getLastmodForPath(path)
      const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''

      return `  <url>
    <loc>${loc}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`
}
