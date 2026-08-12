#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const url = 'https://www.seoindiatech.com/'
const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-Homepage-Audit/1.0' } })
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

const ld = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((b) => {
  try {
    return JSON.parse(b[1])
  } catch {
    return { parseError: true }
  }
})

const internalLinks = [...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1])
const uniqueInternal = [...new Set(internalLinks)]

const out = {
  status: res.status,
  title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
  description: meta('description'),
  robots: meta('robots'),
  canonical: linkRel('canonical'),
  viewport: meta('viewport') ? 'present' : 'missing',
  lang: html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1],
  ogTitle: meta('og:title', 'property'),
  ogDescription: meta('og:description', 'property'),
  ogUrl: meta('og:url', 'property'),
  ogImage: meta('og:image', 'property'),
  twitterCard: meta('twitter:card'),
  favicon: linkRel('icon') || linkRel('shortcut icon'),
  h1: headings('h1'),
  h2: headings('h2'),
  h3: headings('h3'),
  h4: headings('h4'),
  ldGraphTypes: ld.flatMap((x) => (x['@graph'] ? x['@graph'].map((n) => n['@type']) : [x['@type']])).filter(Boolean),
  internalLinkCount: uniqueInternal.length,
  keyInternalPaths: uniqueInternal.filter((p) =>
    /services\/(seo|technical-seo|local-seo|e-commerce)|industries\/(wineries|optometrist|accountants|doctor)/.test(p)
  ),
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-5-live-snapshot.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
