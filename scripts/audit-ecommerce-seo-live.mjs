#!/usr/bin/env node
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const url = 'https://www.seoindiatech.com/services/e-commerce-seo'
const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'SIT-Ecommerce-SEO-Audit/1.0' } })
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

const productNodes = ld
  .flatMap((x) => (x['@graph'] ? x['@graph'] : [x]))
  .filter((n) => n['@type'] === 'Product')

const imgAlts = [...html.matchAll(/<img[^>]+alt=["']([^"']*)["']/gi)].map((m) => m[1]).filter(Boolean)
const imgsWithoutAlt = (html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []).length

const quickAnswerH2s = headings('h2').filter((h) => /what .*e-?commerce seo/i.test(h))

const consolidatedQuickAnswer =
  headings('h2').includes('What Is E-Commerce SEO and Who Needs It?') &&
  !headings('h2').some((h) => /^What is e-?commerce seo\?$/i.test(h))

const checklistLink = uniqueInternal.includes('/blog/ecommerce-seo-checklist-india')

const serviceLinkChecks = {
  '/services/seo': uniqueInternal.includes('/services/seo'),
  '/services/technical-seo': uniqueInternal.includes('/services/technical-seo'),
  '/services/local-seo-service': uniqueInternal.includes('/services/local-seo-service'),
  '/services/international-seo': uniqueInternal.includes('/services/international-seo'),
}

const blogEcomPaths = uniqueInternal.filter(
  (p) => p.startsWith('/blog/') && /ecommerce|e-commerce|product|shopify|woocommerce|shopping/i.test(p)
)
const industryEcomPaths = uniqueInternal.filter((p) => p.startsWith('/industries/'))

const topicMentions = {
  productPage: /product page/i.test(html),
  categoryPage: /category|collection page/i.test(html),
  facetedNavigation: /faceted navigation|facet/i.test(html),
  pagination: /pagination/i.test(html),
  productSchema: /product schema|structured data/i.test(html),
  duplicateContent: /duplicate content|duplicate url/i.test(html),
  canonical: /canonical/i.test(html),
  crawlBudget: /crawl budget/i.test(html),
  indexation: /indexation|indexability/i.test(html),
  internalLinking: /internal link/i.test(html),
  shopify: /shopify/i.test(html),
  woocommerce: /woocommerce|woo commerce/i.test(html),
  googleShopping: /google shopping|shopping ads/i.test(html),
  filters: /\bfilters\b/i.test(html),
  variants: /variant/i.test(html),
  xmlSitemap: /xml sitemap|sitemap/i.test(html),
}

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
  checklistLink,
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
  productSchema: productNodes,
  howToSteps: howToNodes[0]?.step?.length || 0,
  serviceLinkChecks,
  blogEcomPaths,
  industryEcomPaths,
  internalLinkCount: uniqueInternal.length,
  externalLinkCount: uniqueExternal.length,
  imageAltCount: imgAlts.length,
  imagesMissingAlt: imgsWithoutAlt,
  sampleAlts: imgAlts.slice(0, 12),
  companyIndiaMentions: {
    titleSeoCompany: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo company'),
    titleSeoServicesIndia: (html.match(/<title[^>]*>([^<]+)/i)?.[1] || '').toLowerCase().includes('seo services'),
    h1SeoServices: headings('h1').some((h) => /seo services in india/i.test(h)),
    h2SeoCompany: headings('h2').some((h) => /seo company/i.test(h)),
    bodySeoCompanyIndia: /seo company in india/i.test(html),
    bodySeoServicesIndia: /seo services in india/i.test(html),
    bodyTechnicalSeoServices: /technical seo services/i.test(html),
    bodyLocalSeoServices: /local seo services/i.test(html),
  },
  topicMentions,
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
writeFileSync(join(root, 'seo-audit', 'phase-9a-ecommerce-seo-live-snapshot.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(out, null, 2))
