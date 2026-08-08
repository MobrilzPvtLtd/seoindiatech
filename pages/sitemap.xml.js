import { generateSitemapXml } from '@/utils/sitemapBuilder'

export async function getServerSideProps({ res }) {
  const { getAllSitemapPaths } = await import('@/utils/seoRoutes')
  const xml = generateSitemapXml(getAllSitemapPaths())

  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')
  res.write(xml)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
