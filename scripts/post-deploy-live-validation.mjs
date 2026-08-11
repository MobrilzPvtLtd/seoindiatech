#!/usr/bin/env node
/**
 * Live production SEO validation for seoindiatech.com
 * Run: node scripts/post-deploy-live-validation.mjs
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const BASE = 'https://www.seoindiatech.com'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const reportDir = join(root, 'docs', 'seo-master-plan', 'audit-reports')
mkdirSync(reportDir, { recursive: true })

const DRAFT_SLUG = 'google-core-update-may-2026-seo-content-strategy-agentic-ai'

const PRIORITY_URLS = [
  '/',
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/international-seo',
  '/services/content-marketing',
  '/services/social-media-marketing',
  '/services/e-commerce-seo',
  '/services/ui-ux-design',
  '/industries/wineries-seo',
  '/industries/optometrist-seo',
  '/contact-us',
  '/seo-services/seo-services-in-noida',
  '/seo-services/seo-services-in-delhi',
]

const REDIRECT_TESTS = [
  { from: '/contactus', to: '/contact-us' },
  { from: '/services/woocommerce-seo', to: '/services/e-commerce-seo' },
  { from: '/services/seo-web-design', to: '/services/ui-ux-design' },
  { from: '/locations/noida', to: '/seo-services/seo-services-in-noida' },
  { from: '/locations/delhi', to: '/seo-services/seo-services-in-delhi' },
]

function extractMeta(html, attr, name) {
  const re = new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${name}["']`, 'i')
  return html.match(re)?.[1] || html.match(re2)?.[1] || null
}

function extractLink(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i')
  return html.match(re)?.[1] || html.match(re2)?.[1] || null
}

function extractTitle(html) {
  return html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim() || null
}

function extractH1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  )
}

function hasNoindex(html) {
  const robots = extractMeta(html, 'name', 'robots') || ''
  return /noindex/i.test(robots)
}

function extractJsonLd(html) {
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  return blocks.map((b) => {
    try {
      return JSON.parse(b[1])
    } catch {
      return { parseError: true, raw: b[1].slice(0, 200) }
    }
  })
}

function schemaTypes(ld) {
  const types = []
  const visit = (node) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) {
      node.forEach(visit)
      return
    }
    if (node['@type']) {
      const t = node['@type']
      if (Array.isArray(t)) types.push(...t)
      else types.push(t)
    }
    Object.values(node).forEach(visit)
  }
  visit(ld)
  return types
}

async function fetchWithRedirects(url, maxRedirects = 10) {
  const chain = []
  let current = url
  for (let i = 0; i <= maxRedirects; i++) {
    const res = await fetch(current, {
      redirect: 'manual',
      headers: { 'User-Agent': 'SEOIndiaTech-PostDeployValidator/1.0' },
    })
    chain.push({ url: current, status: res.status, location: res.headers.get('location') })
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location')
      if (!loc) break
      current = new URL(loc, current).href
      continue
    }
    const html = res.status === 200 ? await res.text() : ''
    return { finalUrl: current, status: res.status, chain, html }
  }
  return { finalUrl: current, status: 0, chain, html: '', error: 'Too many redirects' }
}

async function validatePage(path) {
  const url = `${BASE}${path}`
  const { finalUrl, status, chain, html, error } = await fetchWithRedirects(url)
  const canonical = extractLink(html, 'canonical')
  const title = extractTitle(html)
  const description = extractMeta(html, 'name', 'description')
  const h1s = extractH1s(html)
  const jsonLd = extractJsonLd(html)
  const types = jsonLd.flatMap(schemaTypes)

  const issues = []
  if (status !== 200) issues.push(`HTTP ${status}`)
  if (hasNoindex(html)) issues.push('noindex present')
  if (canonical && !canonical.startsWith(BASE)) issues.push(`non-www canonical: ${canonical}`)
  if (canonical && canonical !== `${BASE}${path}` && canonical !== `${BASE}${path}/`) {
    issues.push(`canonical mismatch: ${canonical}`)
  }
  if (!title) issues.push('missing title')
  if (!description) issues.push('missing meta description')
  if (h1s.length === 0) issues.push('missing H1')
  if (h1s.length > 1) issues.push(`multiple H1 (${h1s.length})`)

  return {
    path,
    url,
    status,
    finalUrl,
    redirectHops: chain.length - 1,
    canonical,
    title,
    description,
    h1: h1s[0] || null,
    h1Count: h1s.length,
    noindex: hasNoindex(html),
    schemaTypes: [...new Set(types)],
    issues,
    error,
  }
}

async function validateRedirect({ from, to }) {
  const url = `${BASE}${from}`
  const { finalUrl, status, chain } = await fetchWithRedirects(url)
  const expected = `${BASE}${to}`
  const finalPath = new URL(finalUrl).pathname
  const singleHop = chain.length === 2 || (chain.length === 1 && status === 200)
  const is301 = chain.some((c) => c.status === 301)
  const ok = finalPath === to && is301 && chain.length <= 2

  return {
    from,
    to,
    status,
    finalUrl,
    hops: chain.length - 1,
    chain: chain.map((c) => ({ url: c.url, status: c.status })),
    singleHop: chain.length <= 2,
    permanent: is301,
    ok,
  }
}

async function validateSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`, {
    headers: { 'User-Agent': 'SEOIndiaTech-PostDeployValidator/1.0' },
  })
  const text = await res.text()
  const locs = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  const issues = []
  const paths = locs.map((u) => new URL(u).pathname)

  if (res.status !== 200) issues.push(`sitemap HTTP ${res.status}`)
  if (locs.length !== 115) issues.push(`expected 115 URLs, found ${locs.length}`)
  if (!paths.includes('/services/technical-seo')) issues.push('technical-seo missing from sitemap')
  if (paths.some((p) => p.includes(DRAFT_SLUG))) issues.push('draft blog in sitemap')
  const dupes = paths.filter((p, i) => paths.indexOf(p) !== i)
  if (dupes.length) issues.push(`duplicate paths: ${[...new Set(dupes)].join(', ')}`)
  if (locs.some((u) => !u.startsWith(BASE))) issues.push('non-canonical host in sitemap')

  return { status: res.status, count: locs.length, paths, locs, issues, hasTechnicalSeo: paths.includes('/services/technical-seo') }
}

async function validateRobots() {
  const res = await fetch(`${BASE}/robots.txt`, {
    headers: { 'User-Agent': 'SEOIndiaTech-PostDeployValidator/1.0' },
  })
  const text = await res.text()
  const issues = []
  if (res.status !== 200) issues.push(`robots HTTP ${res.status}`)
  if (!/Sitemap:\s*https:\/\/www\.seoindiatech\.com\/sitemap\.xml/i.test(text)) {
    issues.push('sitemap directive missing or wrong host')
  }
  if (/Disallow:\s*\/\s*$/m.test(text)) issues.push('root disallowed')
  return { status: res.status, text: text.slice(0, 500), issues }
}

async function sampleSitemapUrls(locs, sampleSize = 20) {
  const sample = []
  const mustInclude = [
    `${BASE}/services/technical-seo`,
    `${BASE}/services/seo`,
    `${BASE}/contact-us`,
  ]
  for (const u of mustInclude) {
    if (locs.includes(u)) sample.push(u)
  }
  for (const u of locs) {
    if (sample.length >= sampleSize) break
    if (!sample.includes(u)) sample.push(u)
  }
  const results = []
  for (const url of sample) {
    const path = new URL(url).pathname
    const { status, chain } = await fetchWithRedirects(url)
    results.push({
      url,
      path,
      status,
      redirectHops: chain.length - 1,
      ok: status === 200 && chain.length === 1,
    })
  }
  return results
}

async function pagespeed(url, strategy = 'mobile') {
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&category=performance`
  try {
    const res = await fetch(api, { signal: AbortSignal.timeout(120000) })
    if (!res.ok) return { error: `PageSpeed API ${res.status}` }
    const data = await res.json()
    const audits = data.lighthouseResult?.audits || {}
    const categories = data.lighthouseResult?.categories || {}
    return {
      strategy,
      performanceScore: categories.performance?.score != null ? Math.round(categories.performance.score * 100) : null,
      lcp: audits['largest-contentful-paint']?.displayValue || null,
      inp: audits['experimental-interaction-to-next-paint']?.displayValue || audits['max-potential-fid']?.displayValue || null,
      cls: audits['cumulative-layout-shift']?.displayValue || null,
    }
  } catch (e) {
    return { error: String(e.message || e) }
  }
}

console.log('Live production validation —', BASE)
console.log('Started:', new Date().toISOString())

const pages = []
for (const path of PRIORITY_URLS) {
  const result = await validatePage(path)
  pages.push(result)
  console.log(`${path}: ${result.status}${result.issues.length ? ' — ' + result.issues.join('; ') : ' OK'}`)
}

const redirects = []
for (const test of REDIRECT_TESTS) {
  const result = await validateRedirect(test)
  redirects.push(result)
  console.log(`redirect ${test.from}: ${result.ok ? 'OK' : 'FAIL'} (${result.hops} hop(s))`)
}

const sitemap = await validateSitemap()
console.log(`sitemap: ${sitemap.count} URLs${sitemap.issues.length ? ' — ' + sitemap.issues.join('; ') : ' OK'}`)

const robots = await validateRobots()
console.log(`robots: ${robots.status}${robots.issues.length ? ' — ' + robots.issues.join('; ') : ' OK'}`)

const sitemapSample = await sampleSitemapUrls(sitemap.locs || [], 25)
const sitemapFailures = sitemapSample.filter((r) => !r.ok)

const perfTechnical = await pagespeed(`${BASE}/services/technical-seo`, 'mobile')
const perfTechnicalDesktop = await pagespeed(`${BASE}/services/technical-seo`, 'desktop')
const perfSeoHub = await pagespeed(`${BASE}/services/seo`, 'mobile')

const technicalPage = pages.find((p) => p.path === '/services/technical-seo')
const seoHubPage = pages.find((p) => p.path === '/services/seo')
const contactPage = pages.find((p) => p.path === '/contact-us')

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl: BASE,
  summary: {
    priorityPagesOk: pages.filter((p) => p.status === 200 && p.issues.length === 0).length,
    priorityPagesTotal: pages.length,
    redirectsOk: redirects.filter((r) => r.ok).length,
    redirectsTotal: redirects.length,
    sitemapCount: sitemap.count,
    sitemapOk: sitemap.issues.length === 0,
    robotsOk: robots.issues.length === 0,
    draftInSitemap: sitemap.paths?.some((p) => p.includes(DRAFT_SLUG)) || false,
    technicalSeoLive: technicalPage?.status === 200,
    implementationDeployed: technicalPage?.status === 200 && sitemap.hasTechnicalSeo && sitemap.count === 115,
  },
  pages,
  redirects,
  sitemap,
  sitemapSample,
  sitemapFailures,
  robots,
  pageChecks: {
    technicalSeo: technicalPage,
    seoHub: seoHubPage,
    contact: contactPage,
  },
  performance: {
    technicalSeoMobile: perfTechnical,
    technicalSeoDesktop: perfTechnicalDesktop,
    seoHubMobile: perfSeoHub,
  },
  gscIndexingUrls: [
    `${BASE}/services/technical-seo`,
    `${BASE}/services/seo`,
    `${BASE}/services/international-seo`,
    `${BASE}/services/local-seo-service`,
    `${BASE}/contact-us`,
  ],
}

const outJson = join(reportDir, `post-deploy-live-validation-${new Date().toISOString().replace(/[:.]/g, '-')}.json`)
const outLatest = join(reportDir, 'post-deploy-live-validation-latest.json')
writeFileSync(outJson, JSON.stringify(report, null, 2))
writeFileSync(outLatest, JSON.stringify(report, null, 2))
console.log('Report:', outLatest)
