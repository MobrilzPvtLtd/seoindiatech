#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const base = process.argv[2] || 'http://localhost:3457'
const url = base.includes('/services/e-commerce-seo')
  ? base
  : `${base.replace(/\/$/, '')}/services/e-commerce-seo`
const res = await fetch(url, { headers: { 'User-Agent': 'SIT-Ecommerce-SEO-QA/1.0' } })
const html = await res.text()

function meta(name, attr = 'name') {
  const re1 = new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${name}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

function linkRel(rel) {
  const re1 = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i')
  return html.match(re1)?.[1] || null
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

const faqNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'FAQPage')

const faqSchemaCount = faqNodes.reduce((sum, n) => sum + (n.mainEntity?.length || 0), 0)
const faqSchemaQuestions = faqNodes.flatMap((n) => (n.mainEntity || []).map((q) => q.name))

const internalLinks = [...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1])
const uniqueInternal = [...new Set(internalLinks)]

const required = [
  '/services/seo',
  '/services/technical-seo',
  '/services/local-seo-service',
  '/services/international-seo',
  '/blog/ecommerce-seo-checklist-india',
]

const out = {
  url,
  status: res.status,
  title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
  description: meta('description'),
  canonical: linkRel('canonical'),
  h1: headings('h1'),
  consolidatedQuickAnswer:
    headings('h2').includes('What Is E-Commerce SEO and Who Needs It?') &&
    !headings('h2').some((h) => /^What is e-?commerce seo\?$/i.test(h)),
  checklistLink: uniqueInternal.includes('/blog/ecommerce-seo-checklist-india'),
  faqSchemaCount,
  faqSchemaBlocks: faqNodes.length,
  visibleFaqButtons: (html.match(/id="faq-button-/g) || []).length,
  faqSchemaQuestions,
  faqEightSynced: faqSchemaCount === 8 && (html.match(/id="faq-button-/g) || []).length === 8,
  requiredLinksPresent: Object.fromEntries(required.map((p) => [p, uniqueInternal.includes(p)])),
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-9b-ecommerce-qa.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
