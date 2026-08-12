#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const base = process.argv[2] || 'http://localhost:3456/'
const url = base.endsWith('/') ? base : `${base}/`
const res = await fetch(url, { headers: { 'User-Agent': 'SIT-Homepage-QA/1.0' } })
const html = await res.text()

function meta(name, attr = 'name') {
  const re1 = new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${name}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

function linkRel(rel) {
  const re1 = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

const headings = (tag) =>
  [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  )

const ld = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  .map((b) => {
    try {
      return JSON.parse(b[1])
    } catch {
      return null
    }
  })
  .filter(Boolean)

const internalLinks = [...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1])
const uniqueInternal = [...new Set(internalLinks)]

const faqNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'FAQPage')

const faqSchemaCount = faqNodes.reduce((sum, n) => sum + (n.mainEntity?.length || 0), 0)

const required = [
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/e-commerce-seo',
  '/services/international-seo',
  '/industries/wineries-seo',
  '/industries/optometrist-seo',
  '/industries/accountants-seo',
  '/industries/doctor-physician-seo',
]

const out = {
  url,
  status: res.status,
  title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
  description: meta('description'),
  canonical: linkRel('canonical'),
  robots: meta('robots'),
  h1: headings('h1'),
  h1Count: headings('h1').length,
  h2: headings('h2'),
  faqSchemaCount,
  faqSchemaBlocks: faqNodes.length,
  visibleFaqQuestions: (html.match(/id="faq-button-/g) || []).length,
  ldGraphTypes: ld
    .flatMap((x) => (x['@graph'] ? x['@graph'].map((n) => n['@type']) : [x['@type']]))
    .filter(Boolean),
  requiredLinksPresent: Object.fromEntries(required.map((p) => [p, uniqueInternal.includes(p)])),
  heroCtaSeo: html.includes('Explore SEO Services'),
  bookConsultation: html.includes('Book Free Consultation'),
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-5b-local-qa.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
