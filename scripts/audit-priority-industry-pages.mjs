#!/usr/bin/env node
/**
 * Audit 24 priority industry pages for GSC-based optimization phase.
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const BASE = 'https://www.seoindiatech.com'
const SLUGS = [
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

const GSC_PAGE = {
  'accountants-seo': { clicks: 1, impressions: 34, ctr: 2.94, position: 67.26 },
  'optometrist-seo': { clicks: 1, impressions: 85, ctr: 1.18, position: 75.16 },
  'wineries-seo': { clicks: 0, impressions: 287, ctr: 0, position: 80.42 },
  'hvac-seo': { clicks: 0, impressions: 135, ctr: 0, position: 67.91 },
  'movers-and-moving-company-seo': { clicks: 0, impressions: 34, ctr: 0, position: 54.09 },
  'flooring-company-seo': { clicks: 0, impressions: 32, ctr: 0, position: 63.5 },
  'automotive-seo': { clicks: 0, impressions: 40, ctr: 0, position: 69.75 },
  'plastic-surgery-seo': { clicks: 0, impressions: 33, ctr: 0, position: 67.97 },
  'plumber-seo': { clicks: 0, impressions: 53, ctr: 0, position: 79.4 },
  'garage-door-seo': { clicks: 0, impressions: 30, ctr: 0, position: 80.5 },
}

const PHASE13_PROTECT = new Set(['wineries-seo', 'hvac-seo', 'plumber-seo', 'automotive-seo', 'optometrist-seo'])
const OVERRIDE_SLUGS = new Set([
  'plastic-surgery-seo',
  'optometrist-seo',
  'wineries-seo',
  'accountants-seo',
  'doctor-physician-seo',
])
const TEMPLATE_TITLE_RE = /Local, AI & GEO SEO Experts/

function meta(html, name) {
  const re1 = new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

function linkRel(html, rel) {
  const re1 = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

async function audit(slug) {
  const url = `${BASE}/industries/${slug}`
  const res = await fetch(url, { headers: { 'User-Agent': 'SIT-Priority-Pages-Audit/1.0' } })
  const html = await res.text()
  const title = html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim().replace(/&amp;/g, '&')
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())[0]
  const internal = [...new Set([...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1]))]
  const faqVisible = (html.match(/id="faq-button-/g) || []).length
  const ld = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((b) => {
      try {
        return JSON.parse(b[1])
      } catch {
        return null
      }
    })
    .filter(Boolean)
  const faqSchema = ld
    .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
    .filter((n) => n['@type'] === 'FAQPage')
    .reduce((sum, n) => sum + (n.mainEntity?.length || 0), 0)

  return {
    slug,
    url,
    status: res.status,
    gscPage: GSC_PAGE[slug] || null,
    gscQueries: 'GSC_QUERY_DATA_UNAVAILABLE',
    title,
    isTemplateTitle: TEMPLATE_TITLE_RE.test(title || ''),
    metaDescription: meta(html, 'description')?.replace(/&amp;/g, '&'),
    h1,
    canonical: linkRel(html, 'canonical'),
    robots: meta(html, 'robots'),
    faqVisible,
    faqSchema,
    hasOverride: OVERRIDE_SLUGS.has(slug),
    phase13Protected: PHASE13_PROTECT.has(slug),
    blogLinks: internal.filter((p) => p.startsWith('/blog/')).slice(0, 6),
    serviceLinks: {
      seo: internal.includes('/services/seo'),
      local: internal.includes('/services/local-seo-service'),
      technical: internal.includes('/services/technical-seo'),
      gbp: internal.includes('/services/gbp-optimization'),
      ecommerce: internal.includes('/services/e-commerce-seo'),
    },
  }
}

const rows = []
for (const slug of SLUGS) {
  rows.push(await audit(slug))
  await new Promise((r) => setTimeout(r, 150))
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'priority-pages-live-snapshot.json'), JSON.stringify(rows, null, 2))
console.log(JSON.stringify(rows.map((r) => ({ slug: r.slug, status: r.status, title: r.title, template: r.isTemplateTitle, gsc: r.gscPage })), null, 2))
