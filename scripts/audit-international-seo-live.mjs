#!/usr/bin/env node
/**
 * Phase 10A — International SEO live audit (audit only)
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const BASE = process.env.AUDIT_BASE || 'https://www.seoindiatech.com'
const url = `${BASE}/services/international-seo`
const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-International-SEO-Audit/1.0' } })
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
const faqSchemaQuestions = faqNodes.flatMap((n) => (n.mainEntity || []).map((q) => q.name))

const serviceNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'Service')

const howToNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'HowTo')

const quickAnswerH2s = headings('h2').filter((h) => /what .*international seo/i.test(h))

const bodyText = html
  .replace(/<script[\s\S]*?<\/script>/gi, '')
  .replace(/<style[\s\S]*?<\/style>/gi, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
const wordCount = bodyText.split(/\s+/).filter(Boolean).length

const topicMentions = {
  hreflang: /hreflang/i.test(html),
  multilingual: /multilingual|multi-language|language variant/i.test(html),
  multiregional: /multiregional|multi-region|multi-market|country-specific/i.test(html),
  countryTargeting: /country-specific|target country|export market|global market/i.test(html),
  canonicalization: /canonical/i.test(html),
  technicalSeo: /technical seo|crawl|indexation/i.test(html),
  localBacklinks: /local backlink|market-specific/i.test(html),
  reportingByCountry: /by country|per country|country or language/i.test(html),
}

const blogIntlPaths = uniqueInternal.filter(
  (p) =>
    p.startsWith('/blog/') &&
    /international|local-vs-national|european|hreflang|global/i.test(p)
)

const out = {
  url,
  status: res.status,
  title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
  description: meta('description'),
  robots: meta('robots'),
  canonical: linkRel('canonical'),
  viewport: meta('viewport') ? 'present' : 'missing',
  lang: html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1],
  h1: headings('h1'),
  h1Count: headings('h1').length,
  h2: headings('h2'),
  h3: headings('h3'),
  h4: headings('h4'),
  quickAnswerH2s,
  quickAnswerDuplicate:
    headings('h2').some((h) => /^what is international seo\?$/i.test(h)) &&
    headings('h2').some((h) => /what is international seo and who needs it\?/i.test(h)),
  consolidatedQuickAnswer:
    headings('h2').some((h) => /^what is international seo and who needs it\?$/i.test(h)) &&
    !headings('h2').some((h) => /^what is international seo\?$/i.test(h)),
  faqSchemaCount,
  faqSchemaBlocks: faqNodes.length,
  visibleFaqButtons: (html.match(/id="faq-button-/g) || []).length,
  faqSchemaQuestions,
  faqVisibleSchemaParity: (html.match(/id="faq-button-/g) || []).length === faqSchemaCount,
  ldGraphTypes: ld
    .flatMap((x) => (x['@graph'] ? x['@graph'].map((n) => n['@type']) : [x['@type']]))
    .filter(Boolean),
  serviceSchema: serviceNodes.map((s) => ({
    name: s.name,
    serviceType: s.serviceType,
    description: s.description?.slice(0, 140),
  })),
  howToSteps: howToNodes[0]?.step?.length || 0,
  serviceLinkChecks: {
    '/services/seo': uniqueInternal.includes('/services/seo'),
    '/services/technical-seo': uniqueInternal.includes('/services/technical-seo'),
    '/services/e-commerce-seo': uniqueInternal.includes('/services/e-commerce-seo'),
    '/services/local-seo-service': uniqueInternal.includes('/services/local-seo-service'),
  },
  blogIntlPaths,
  blogRequired: {
    '/blog/international-seo-guide-european-companies': uniqueInternal.includes(
      '/blog/international-seo-guide-european-companies'
    ),
    '/blog/local-vs-national-vs-international-seo': uniqueInternal.includes(
      '/blog/local-vs-national-vs-international-seo'
    ),
  },
  internalLinkCount: uniqueInternal.length,
  wordCountEstimate: wordCount,
  companyIndiaMentions: {
    titleSeoCompany: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo company'),
    titleSeoServicesIndia: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo services'),
    h1SeoServices: headings('h1').some((h) => /seo services in india/i.test(h)),
    bodySeoServicesIndia: /seo services in india/i.test(html),
  },
  topicMentions,
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const snapshotName =
  BASE.includes('seoindiatech.com') ? 'phase-11-international-seo-live-snapshot.json' : 'phase-10a-international-seo-live-snapshot.json'
writeFileSync(join(root, 'seo-audit', snapshotName), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
