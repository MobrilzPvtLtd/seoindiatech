#!/usr/bin/env node
/**
 * Phase 13A — Top 5 industry opportunity audit (audit only)
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const BASE = 'https://www.seoindiatech.com'
const SLUGS = [
  'wineries-seo',
  'hvac-seo',
  'optometrist-seo',
  'plumber-seo',
  'automotive-seo',
]

const GSC = {
  'wineries-seo': { impressions: 287, clicks: 0, ctr: 0, position: 80.42 },
  'hvac-seo': { impressions: 135, clicks: 0, ctr: 0, position: 67.91 },
  'optometrist-seo': { impressions: 85, clicks: 1, ctr: 1.18, position: 75.16 },
  'plumber-seo': { impressions: 53, clicks: 0, ctr: 0, position: 79.4 },
  'automotive-seo': { impressions: 40, clicks: 0, ctr: 0, position: 69.75 },
}

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

const headings = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  )

async function audit(slug) {
  const url = `${BASE}/industries/${slug}`
  const res = await fetch(url, { headers: { 'User-Agent': 'SIT-Phase13A-Audit/1.0' } })
  const html = await res.text()
  const h1 = headings('h1')[0]?.replace(/&amp;/g, '&')
  const title = html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim().replace(/&amp;/g, '&')
  const desc = meta(html, 'description')?.replace(/&amp;/g, '&')
  const internal = [...new Set([...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1]))]
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
  const faqVisible = (html.match(/id="faq-button-/g) || []).length
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
  const words = text.split(/\s+/).filter(Boolean).length

  const bodyLower = text.toLowerCase()
  const topicHits = {
    tastingRoom: /tasting|wine tour|vineyard/i.test(html),
    emergencyHvac: /emergency|ac repair|furnace|hvac maintenance/i.test(html),
    eyeExam: /eye exam|optometry|vision care|contact lens/i.test(html),
    emergencyPlumber: /emergency plumber|drain|water heater/i.test(html),
    autoRepair: /auto repair|brake|oil change|car service/i.test(html),
    hreflang: /hreflang/i.test(html),
    nearMe: /near me/i.test(bodyLower),
    localSeo: /local seo|google business|gbp|map pack/i.test(bodyLower),
  }

  return {
    slug,
    url,
    status: res.status,
    gsc: GSC[slug],
    title,
    metaDescription: desc,
    h1,
    canonical: linkRel(html, 'canonical'),
    robots: meta(html, 'robots'),
    wordCountEstimate: words,
    faqVisible,
    faqSchema,
    hasOverride: ['wineries-seo', 'optometrist-seo'].includes(slug),
    serviceLinks: {
      seo: internal.includes('/services/seo'),
      local: internal.includes('/services/local-seo-service'),
      technical: internal.includes('/services/technical-seo'),
    },
    blogLinks: internal.filter((p) => p.startsWith('/blog/')).slice(0, 8),
    topicHits,
    h2Sample: headings('h2').slice(0, 6),
  }
}

const rows = []
for (const slug of SLUGS) {
  rows.push(await audit(slug))
  await new Promise((r) => setTimeout(r, 200))
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-13a-top5-industry-live-snapshot.json'), JSON.stringify(rows, null, 2))
console.log(JSON.stringify(rows, null, 2))
