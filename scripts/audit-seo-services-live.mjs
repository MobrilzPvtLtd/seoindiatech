#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const url = 'https://www.seoindiatech.com/services/seo'
const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-SEO-Services-Audit/1.0' } })
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
      return { parseError: true }
    }
  })

const internalLinks = [...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1])
const uniqueInternal = [...new Set(internalLinks)]

const faqNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'FAQPage')

const faqSchemaCount = faqNodes.reduce((sum, n) => sum + (n.mainEntity?.length || 0), 0)

const serviceNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'Service')

const required = [
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/e-commerce-seo',
  '/services/international-seo',
]

const out = {
  status: res.status,
  title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
  description: meta('description'),
  robots: meta('robots'),
  canonical: linkRel('canonical'),
  h1: headings('h1'),
  h1Count: headings('h1').length,
  h2: headings('h2'),
  h3: headings('h3'),
  h4: headings('h4'),
  faqSchemaCount,
  faqSchemaBlocks: faqNodes.length,
  visibleFaqButtons: (html.match(/id="faq-button-/g) || []).length,
  ldGraphTypes: ld
    .flatMap((x) => (x['@graph'] ? x['@graph'].map((n) => n['@type']) : [x['@type']]))
    .filter(Boolean),
  serviceSchema: serviceNodes.map((s) => ({ name: s.name, serviceType: s.serviceType })),
  requiredLinksPresent: Object.fromEntries(required.map((p) => [p, uniqueInternal.includes(p)])),
  industryLinks: uniqueInternal.filter((p) => p.startsWith('/industries/')),
  internalLinkCount: uniqueInternal.length,
  keyPaths: uniqueInternal.filter((p) =>
    /services\/(seo|technical|local|e-commerce|international|content|ai)/.test(p)
  ),
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-6a-live-snapshot.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
