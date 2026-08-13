#!/usr/bin/env node
/**
 * Post-deploy production QA — migration + 24 priority industry pages.
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const BASE = 'https://www.seoindiatech.com'
const COMMIT = 'd4bf850'

const PRIORITY_SLUGS = [
  'optometrist-seo',
  'accountants-seo',
  'doctor-physician-seo',
  'deck-builder-seo',
  'chiropractor-seo',
  'wineries-seo',
  'hvac-seo',
  'plumber-seo',
  'automotive-seo',
  'movers-and-moving-company-seo',
  'plastic-surgery-seo',
  'flooring-company-seo',
  'fence-installer-seo',
  'garage-door-seo',
  'janitorial-service-seo',
  'roofers-seo',
  'physiotherapy-seo',
  'pest-control-service-seo',
  'orthodontist-seo',
  'dentist-seo',
  'locksmith-service-seo',
  'cpa-firm-seo',
  'dry-cleaner-seo',
  'waste-management-seo',
]

const PHASE13_TITLES = {
  'wineries-seo': 'SEO for Wineries | Winery SEO Services | SEO India Tech',
  'hvac-seo': 'HVAC SEO Services | HVAC Contractor Marketing & Map Pack SEO',
  'plumber-seo': 'Plumber SEO Services | Plumbing Contractor Marketing',
  'automotive-seo': 'Automotive SEO Services | Auto Repair Shop Marketing',
  'optometrist-seo': 'SEO for Optometrists & Eye Care Practices | SEO India Tech',
}

const OVERRIDE_TITLES = {
  'accountants-seo': 'SEO for Accountants & Accounting Firms | Accountants SEO | SEO India Tech',
  'doctor-physician-seo': 'SEO for Doctors & Physicians | Physician SEO Services | SEO India Tech',
  'plastic-surgery-seo': 'Plastic Surgery SEO Services | Grow Consult Bookings | SEO India Tech',
}

const NEW_TITLES = {
  'movers-and-moving-company-seo': 'Moving Company SEO Services | Local & Long-Distance Mover Marketing',
  'flooring-company-seo': 'Flooring Company SEO Services | Hardwood, Tile & LVP Marketing',
  'garage-door-seo': 'Garage Door SEO Services | Repair & Installation Marketing',
}

const REDIRECT_TESTS = [
  { from: '/contactus', to: '/contact-us' },
  { from: '/services/woocommerce-seo', to: '/services/e-commerce-seo' },
  { from: '/locations/noida', to: '/seo-services/seo-services-in-noida' },
]

const LOCKED = [
  '/',
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/gbp-optimization',
  '/services/e-commerce-seo',
  '/services/international-seo',
]

function title(html) {
  return html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim().replace(/&amp;/g, '&')
}
function meta(html, n) {
  const r1 = new RegExp(`<meta[^>]+name=["']${n}["'][^>]+content=["']([^"']+)["']`, 'i')
  const r2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${n}["']`, 'i')
  return (html.match(r1)?.[1] || html.match(r2)?.[1])?.replace(/&amp;/g, '&')
}
function canonical(html) {
  const r1 = /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i
  const r2 = /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i
  return html.match(r1)?.[1] || html.match(r2)?.[1]
}

async function fetchChain(path) {
  let url = BASE + path
  const chain = []
  for (let i = 0; i < 5; i++) {
    const res = await fetch(url, { redirect: 'manual' })
    chain.push({ url, status: res.status, location: res.headers.get('location') })
    if (res.status >= 300 && res.status < 400) {
      url = new URL(res.headers.get('location'), url).href
      continue
    }
    const html = res.status === 200 ? await res.text() : ''
    return { status: res.status, finalUrl: url, chain, html }
  }
  return { status: 0, finalUrl: url, chain, html: '' }
}

const report = {
  commit: COMMIT,
  timestamp: new Date().toISOString(),
  deployment: 'live',
  checks: {},
  priorityPages: [],
  lockedPages: [],
  redirects: [],
  overallVerdict: 'PASS',
  failures: [],
}

// robots.txt
const robotsRes = await fetch(BASE + '/robots.txt')
const robotsText = await robotsRes.text()
report.checks.robots = {
  status: robotsRes.status,
  hasLlmsTxtDirective: /LLMs-Txt:/i.test(robotsText),
  hasSitemap: /Sitemap:\s*https:\/\/www\.seoindiatech\.com\/sitemap\.xml/i.test(robotsText),
  pass: robotsRes.status === 200 && !/LLMs-Txt:/i.test(robotsText),
}
if (!report.checks.robots.pass) report.failures.push('robots.txt')

// llms.txt
const llmsRes = await fetch(BASE + '/llms.txt')
report.checks.llmsTxt = { status: llmsRes.status, pass: llmsRes.status === 200 }
if (!report.checks.llmsTxt.pass) report.failures.push('llms.txt')

// sitemap
const smRes = await fetch(BASE + '/sitemap.xml')
const smText = await smRes.text()
const urlCount = (smText.match(/<loc>/g) || []).length
report.checks.sitemap = { status: smRes.status, urlCount, pass: smRes.status === 200 && urlCount === 115 }
if (!report.checks.sitemap.pass) report.failures.push('sitemap')

// priority pages
for (const slug of PRIORITY_SLUGS) {
  const path = `/industries/${slug}`
  const res = await fetch(BASE + path)
  const html = await res.text()
  const t = title(html)
  const can = canonical(html)
  const robots = meta(html, 'robots')
  const indexable = !robots?.includes('noindex')
  const canOk = can === `${BASE}${path}`
  let titleOk = true
  if (PHASE13_TITLES[slug]) titleOk = t === PHASE13_TITLES[slug]
  else if (OVERRIDE_TITLES[slug]) titleOk = t === OVERRIDE_TITLES[slug]
  else if (NEW_TITLES[slug]) titleOk = t?.includes(NEW_TITLES[slug].split('|')[0].trim())
  const pass = res.status === 200 && indexable && canOk && titleOk
  if (!pass) report.failures.push(`priority:${slug}`)
  report.priorityPages.push({ slug, status: res.status, indexable, canonical: can, title: t, titleOk, pass })
  await new Promise((r) => setTimeout(r, 100))
}

// locked pages
for (const path of LOCKED) {
  const res = await fetch(BASE + path)
  const html = await res.text()
  const t = title(html)
  report.lockedPages.push({ path, status: res.status, title: t, pass: res.status === 200 })
  if (res.status !== 200) report.failures.push(`locked:${path}`)
}

// redirects
for (const { from, to } of REDIRECT_TESTS) {
  const { status, finalUrl, chain } = await fetchChain(from)
  const finalPath = new URL(finalUrl).pathname
  const is301 = chain.some((c) => c.status === 301)
  const ok = finalPath === to && status === 200 && is301
  if (!ok) report.failures.push(`redirect:${from}`)
  report.redirects.push({ from, to, finalPath, is301, chain: chain.map((c) => c.status), pass: ok })
}

report.overallVerdict = report.failures.length === 0 ? 'PASS' : 'FAIL'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'priority-pages-production-qa.json'), JSON.stringify(report, null, 2))
console.log(JSON.stringify({ verdict: report.overallVerdict, failures: report.failures, checks: report.checks }, null, 2))
