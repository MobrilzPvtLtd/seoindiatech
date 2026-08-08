export const SITE_URL = 'https://www.seoindiatech.com'
export const ALLOWED_HOSTS = new Set(['www.seoindiatech.com', 'seoindiatech.com'])

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

  const lastmod = new Date().toISOString().split('T')[0]

  const body = urls
    .map((loc) => {
      const path = loc === SITE_URL ? '/' : loc.replace(SITE_URL, '')
      const priority = path === '/' ? '1.0' : path.startsWith('/blog') ? '0.7' : '0.8'
      const changefreq = path === '/' ? 'weekly' : path.startsWith('/blog') ? 'monthly' : 'weekly'

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
