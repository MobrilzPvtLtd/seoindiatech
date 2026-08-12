#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const url = 'https://www.seoindiatech.com/services/local-seo-service'
const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-Local-SEO-Audit/1.0' } })
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

const externalLinks = [...html.matchAll(/href=["'](https?:\/\/[^"'#?][^"']*)["']/gi)].map((m) => m[1])
const uniqueExternal = [...new Set(externalLinks)]

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

const localBusinessNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'LocalBusiness' || n['@type'] === 'ProfessionalService')

const imgAlts = [...html.matchAll(/<img[^>]+alt=["']([^"']*)["']/gi)].map((m) => m[1]).filter(Boolean)
const imgsWithoutAlt = (html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []).length

const cityPagePaths = uniqueInternal.filter((p) => /\/seo-services\/seo-services-in-/i.test(p))
const blogLocalPaths = uniqueInternal.filter(
  (p) => p.startsWith('/blog/') && /local|gbp|google-business|map|citation/i.test(p)
)

const serviceLinkChecks = {
  '/services/seo': uniqueInternal.includes('/services/seo'),
  '/services/technical-seo': uniqueInternal.includes('/services/technical-seo'),
  '/services/e-commerce-seo': uniqueInternal.includes('/services/e-commerce-seo'),
  '/services/international-seo': uniqueInternal.includes('/services/international-seo'),
  '/services/gbp-optimization': uniqueInternal.includes('/services/gbp-optimization'),
}

const quickAnswerH2s = headings('h2').filter((h) => /what .*local seo/i.test(h))

const consolidatedQuickAnswer =
  headings('h2').includes('What Is Local SEO and Who Needs It?') &&
  !headings('h2').some((h) => h === 'What is local SEO?') &&
  !headings('h2').some((h) => /What is Local SEO and who needs it\?/i.test(h))

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
  quickAnswerDuplicate: quickAnswerH2s.length > 1,
  consolidatedQuickAnswer,
  gbpRelatedCard: html.includes('Explore Google Business Profile Optimization'),
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
  localBusinessSchema: localBusinessNodes.map((n) => ({
    type: n['@type'],
    name: n.name,
  })),
  howToSteps: howToNodes[0]?.step?.length || 0,
  serviceLinkChecks,
  cityPagePaths,
  blogLocalPaths,
  internalLinkCount: uniqueInternal.length,
  externalLinkCount: uniqueExternal.length,
  sampleExternalLinks: uniqueExternal.slice(0, 10),
  imageAltCount: imgAlts.length,
  imagesMissingAlt: imgsWithoutAlt,
  sampleAlts: imgAlts.slice(0, 12),
  companyIndiaMentions: {
    titleSeoCompany: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo company'),
    titleSeoServicesIndia: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo services'),
    h1SeoServices: headings('h1').some((h) => /seo services in india/i.test(h)),
    h2SeoCompany: headings('h2').some((h) => /seo company/i.test(h)),
    h2SeoServicesIndia: headings('h2').some((h) => /seo services in india/i.test(h)),
    bodySeoCompanyIndia: /seo company in india/i.test(html),
    bodySeoServicesIndia: /seo services in india/i.test(html),
  },
  gbpMentionsInBody: {
    googleBusinessProfile: (html.match(/google business profile/gi) || []).length,
    gbp: (html.match(/\bGBP\b/g) || []).length,
    googleMaps: (html.match(/google maps/gi) || []).length,
    mapPack: (html.match(/map pack/gi) || []).length,
  },
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-8a-local-seo-live-snapshot.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
