/**
 * Submit sitemap and URLs to search engines for indexing.
 * Run after deploy: npm run push-indexing
 */
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE_URL = 'https://www.seoindiatech.com'
const INDEXNOW_KEY = 'sitindex2026'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

function readSitemapUrls() {
  const sitemapPath = join(root, 'public', 'sitemap.xml')
  if (!existsSync(sitemapPath)) {
    throw new Error('sitemap.xml not found. Run npm run generate-sitemap first.')
  }
  const xml = readFileSync(sitemapPath, 'utf8')
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

function chunk(array, size) {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

async function pingBingSitemap() {
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  const res = await fetch(pingUrl)
  return { ok: res.ok, status: res.status, engine: 'Bing sitemap ping' }
}

async function submitIndexNow(urls) {
  const host = 'www.seoindiatech.com'
  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`
  const batches = chunk(urls, 10000)
  const results = []

  for (const batch of batches) {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation,
        urlList: batch,
      }),
    })
    results.push({ ok: res.ok, status: res.status, count: batch.length })
  }

  return results
}

async function submitPriorityUrls(urls) {
  // Yandex IndexNow endpoint (also used by some crawlers)
  const host = 'www.seoindiatech.com'
  const res = await fetch(`https://yandex.com/indexnow?url=${encodeURIComponent(urls[0])}&key=${INDEXNOW_KEY}`)
  return { ok: res.ok, status: res.status, engine: 'Yandex IndexNow (sample)' }
}

async function main() {
  const urls = readSitemapUrls()
  const priority = [
    `${SITE_URL}/blog`,
    ...urls.filter((u) => u.includes('/blog/') || u.includes('/services/') || u.includes('/industries/')),
  ]

  console.log(`Indexing push for ${urls.length} sitemap URLs`)
  console.log(`Sitemap: ${SITEMAP_URL}`)
  console.log(`IndexNow key: ${INDEXNOW_KEY}`)

  try {
    const bing = await pingBingSitemap()
    console.log(`[${bing.engine}] ${bing.ok ? 'OK' : 'FAILED'} (${bing.status})`)
  } catch (err) {
    console.warn(`[Bing sitemap ping] ${err.message}`)
  }

  try {
    const indexNow = await submitIndexNow(priority.length ? priority : urls)
    indexNow.forEach((r, i) => {
      console.log(`[IndexNow batch ${i + 1}] ${r.ok ? 'OK' : 'FAILED'} (${r.status}) - ${r.count} URLs`)
    })
  } catch (err) {
    console.warn(`[IndexNow] ${err.message}`)
  }

  try {
    const yandex = await submitPriorityUrls(priority)
    console.log(`[${yandex.engine}] ${yandex.ok ? 'OK' : 'FAILED'} (${yandex.status})`)
  } catch (err) {
    console.warn(`[Yandex] ${err.message}`)
  }

  console.log('\nGoogle Search Console (manual):')
  console.log(`  1. Open https://search.google.com/search-console`)
  console.log(`  2. Sitemaps > Add: sitemap.xml`)
  console.log(`  3. URL Inspection > Request indexing for key new pages`)
  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
