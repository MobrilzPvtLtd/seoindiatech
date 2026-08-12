#!/usr/bin/env node
/** Quick locked-page regression check for Phase 13 production QA */
const BASE = 'https://www.seoindiatech.com'
const locked = [
  '/',
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/gbp-optimization',
  '/services/e-commerce-seo',
  '/services/international-seo',
]

function title(html) {
  return html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim()
}
function meta(html, n) {
  const re1 = new RegExp(`<meta[^>]+name=["']${n}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${n}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1]
}
function canonical(html) {
  const re1 = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
  const re2 = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i
  return html.match(re1)?.[1] || html.match(re2)?.[1]
}

const out = { lockedPages: [], sitemap: null }
for (const path of locked) {
  const url = BASE + path
  const res = await fetch(url)
  const html = await res.text()
  out.lockedPages.push({
    path,
    url,
    status: res.status,
    title: title(html),
    canonical: canonical(html),
    robots: meta(html, 'robots'),
    indexable: !meta(html, 'robots')?.includes('noindex'),
  })
}
const sm = await fetch(BASE + '/sitemap.xml')
const smText = await sm.text()
out.sitemap = { status: sm.status, urlCount: (smText.match(/<loc>/g) || []).length }
console.log(JSON.stringify(out, null, 2))
