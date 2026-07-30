import { SITE_URL } from '@/utils/siteConfig'
import { getAllSitemapPaths } from '@/utils/seoRoutes'

function generateSitemapXml(paths) {
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = paths
    .map((path) => {
      const loc = path === '/' ? SITE_URL : `${SITE_URL}${path}`
      const priority = path === '/' ? '1.0' : path.startsWith('/blog') ? '0.7' : '0.8'
      const changefreq =
        path === '/' ? 'weekly' : path.startsWith('/blog') ? 'monthly' : 'weekly'

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
${urls}
</urlset>`
}

export async function getServerSideProps({ res }) {
  const paths = getAllSitemapPaths()
  const xml = generateSitemapXml(paths)

  res.setHeader('Content-Type', 'text/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
