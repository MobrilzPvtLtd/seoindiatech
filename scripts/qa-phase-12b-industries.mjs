#!/usr/bin/env node
/**
 * Phase 12B — Industry pages QA (local or production)
 *
 * Usage:
 *   node scripts/qa-phase-12b-industries.mjs              # localhost:3458
 *   node scripts/qa-phase-12b-industries.mjs --production   # www.seoindiatech.com
 *   AUDIT_BASE=https://... node scripts/qa-phase-12b-industries.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const isProduction = process.argv.includes('--production')
const BASE =
  process.env.AUDIT_BASE ||
  (isProduction ? 'https://www.seoindiatech.com' : 'http://localhost:3458')

const sitemapPath = join(root, 'public', 'sitemap.xml')
const sitemap = readFileSync(sitemapPath, 'utf8')
const slugs = [...sitemap.matchAll(/\/industries\/([^<]+)</g)].map((m) => m[1])
const sitemapUrlCount = [...sitemap.matchAll(/<loc>/g)].length

const PATIENT_SLUGS = new Set([
  'plastic-surgery-seo',
  'fertility-clinic-seo',
  'optometrist-seo',
  'orthodontist-seo',
  'doctor-physician-seo',
  'physiotherapy-seo',
  'dentist-seo',
  'chiropractor-seo',
])

const CUSTOMER_SLUGS = new Set(['hvac-seo', 'plumber-seo'])

const CLIENT_SLUGS = new Set([
  'property-management-seo',
  'realtor-seo',
  'personal-injury-seo',
  'cpa-firm-seo',
  'accountants-seo',
])

const PROCEDURE_OK_SLUGS = new Set([
  'plastic-surgery-seo',
  'fertility-clinic-seo',
  'orthodontist-seo',
  'physiotherapy-seo',
  'dentist-seo',
  'personal-injury-seo',
])

const OVERRIDE_EXPECT = {
  'plastic-surgery-seo': {
    h1Contains: 'Plastic Surgery SEO Services Built for Patient',
    titleContains: 'Plastic Surgery SEO Services',
  },
  'optometrist-seo': { h1Contains: 'SEO for Optometrists', titleContains: 'SEO for Optometrists' },
  'doctor-physician-seo': {
    h1Contains: 'SEO for Doctors',
    titleContains: 'SEO for Doctors',
  },
  'wineries-seo': { h1Contains: 'SEO for Wineries', titleContains: 'SEO for Wineries' },
  'accountants-seo': { h1Contains: 'SEO for Accountants', titleContains: 'SEO for Accountants' },
}

const SERVICE_SPOT_CHECK = {
  '/services/international-seo': 'International SEO Agency India',
  '/services/e-commerce-seo': 'Ecommerce SEO Agency',
  '/services/local-seo-service': 'Local SEO',
  '/services/technical-seo': 'Technical SEO',
}

function meta(html, name, attr = 'name') {
  const re1 = new RegExp(`<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+${attr}=["']${name}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

function linkRel(html, rel) {
  const re1 = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i')
  return html.match(re1)?.[1] || html.match(re2)?.[1] || null
}

function decodeHtml(s) {
  return (s || '').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
}

function expectedClientTerm(slug) {
  if (PATIENT_SLUGS.has(slug)) return 'Patients'
  if (CUSTOMER_SLUGS.has(slug)) return 'Customers'
  if (CLIENT_SLUGS.has(slug)) return 'Clients'
  return null
}

async function fetchPage(path) {
  const url = `${BASE}${path}`
  const res = await fetch(url, {
    redirect: 'manual',
    headers: { 'User-Agent': 'SIT-Phase12B-QA/1.0' },
  })
  const html = await res.text()
  return { url, res, html }
}

async function auditIndustry(slug) {
  const path = `/industries/${slug}`
  const { url, res, html } = await fetchPage(path)
  const expectedCanonical = isProduction
    ? `https://www.seoindiatech.com/industries/${slug}`
    : `${BASE}/industries/${slug}`

  const h1 = decodeHtml(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim())
  const title = decodeHtml(html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim())
  const desc = decodeHtml(meta(html, 'description'))
  const robots = meta(html, 'robots') || ''
  const canonical = linkRel(html, 'canonical')

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

  const hasTech =
    html.includes('href="/services/technical-seo"') || html.includes("href='/services/technical-seo'")

  const clientTerm = expectedClientTerm(slug)
  let clientTermOk = true
  if (clientTerm === 'Patients') clientTermOk = h1?.includes('Patients')
  else if (clientTerm === 'Customers') clientTermOk = h1?.includes('Customers')
  else if (clientTerm === 'Clients') clientTermOk = h1?.includes('Clients')

  const override = OVERRIDE_EXPECT[slug]
  const overrideOk =
    !override ||
    (h1?.includes(override.h1Contains) && title?.includes(override.titleContains))

  return {
    slug,
    status: res.status,
    finalUrl: url,
    redirected: res.status >= 300 && res.status < 400,
    indexable: !/noindex/i.test(robots),
    robots,
    canonical,
    canonicalOk: canonical === expectedCanonical,
    title,
    h1,
    procedureMeta: desc?.includes('Procedure pages') ?? false,
    procedureMetaOk: PROCEDURE_OK_SLUGS.has(slug) || !desc?.includes('Procedure pages'),
    clientTerm,
    clientTermOk,
    hasTech,
    faqVisible,
    faqSchema,
    faqSynced: faqVisible === faqSchema,
    overrideOk,
  }
}

async function auditService(path, titleNeedle) {
  const { res, html } = await fetchPage(path)
  const title = decodeHtml(html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim())
  return {
    path,
    status: res.status,
    title,
    ok: res.status === 200 && title?.includes(titleNeedle),
  }
}

const rows = []
for (const slug of slugs) {
  rows.push(await auditIndustry(slug))
  await new Promise((r) => setTimeout(r, isProduction ? 200 : 50))
}

const serviceChecks = []
for (const [path, needle] of Object.entries(SERVICE_SPOT_CHECK)) {
  serviceChecks.push(await auditService(path, needle))
}

const errors = []

if (rows.some((r) => r.status !== 200)) errors.push('HTTP failures')
if (rows.some((r) => r.redirected)) errors.push('Unexpected redirects on industry URLs')
if (rows.some((r) => !r.indexable)) errors.push('noindex detected')
if (rows.some((r) => !r.canonicalOk)) errors.push('Canonical mismatches')
if (rows.filter((r) => !r.procedureMetaOk).length) errors.push('Procedure pages in wrong meta')
if (rows.filter((r) => r.clientTerm && !r.clientTermOk).length) errors.push('Wrong client term in H1')
if (rows.filter((r) => !r.hasTech).length) errors.push('Missing technical SEO link')
if (rows.filter((r) => !r.faqSynced).length) errors.push('FAQ parity failures')
if (rows.find((r) => r.slug === 'plumber-seo' && r.faqVisible !== 20))
  errors.push('plumber FAQ count not 20')
if (rows.filter((r) => OVERRIDE_EXPECT[r.slug] && !r.overrideOk).length)
  errors.push('A-grade override regression')

if (sitemapUrlCount !== 115) errors.push(`Sitemap count ${sitemapUrlCount} not 115`)

if (isProduction) {
  const liveSitemap = await fetch(`${BASE}/sitemap.xml`, {
    headers: { 'User-Agent': 'SIT-Phase12B-QA/1.0' },
  })
  const liveSitemapCount = [...(await liveSitemap.text()).matchAll(/<loc>/g)].length
  if (liveSitemapCount !== 115) errors.push(`Live sitemap count ${liveSitemapCount} not 115`)
}

if (serviceChecks.some((s) => !s.ok)) errors.push('Service page spot-check failed')

const spotlight = {
  fixed: ['property-management-seo', 'realtor-seo', 'hvac-seo', 'plumber-seo', 'personal-injury-seo'].map(
    (s) => rows.find((r) => r.slug === s)
  ),
  overrides: Object.keys(OVERRIDE_EXPECT).map((s) => rows.find((r) => r.slug === s)),
}

const report = {
  phase: '12B',
  auditedAt: new Date().toISOString(),
  base: BASE,
  production: isProduction,
  sitemapUrlCount,
  total: rows.length,
  status200: rows.filter((r) => r.status === 200).length,
  indexable: rows.filter((r) => r.indexable).length,
  canonicalOk: rows.filter((r) => r.canonicalOk).length,
  procedureMetaWrong: rows.filter((r) => !r.procedureMetaOk).map((r) => r.slug),
  clientTermWrong: rows.filter((r) => r.clientTerm && !r.clientTermOk).map((r) => ({
    slug: r.slug,
    h1: r.h1,
    expected: r.clientTerm,
  })),
  missingTech: rows.filter((r) => !r.hasTech).map((r) => r.slug),
  faqMismatch: rows.filter((r) => !r.faqSynced).map((r) => ({
    slug: r.slug,
    visible: r.faqVisible,
    schema: r.faqSchema,
  })),
  overrideFailures: rows.filter((r) => OVERRIDE_EXPECT[r.slug] && !r.overrideOk).map((r) => r.slug),
  plumberFaq: rows.find((r) => r.slug === 'plumber-seo'),
  serviceChecks,
  spotlight,
  pass: errors.length === 0,
  errors,
}

const outPath = join(root, 'seo-audit', 'phase-12b-production-qa.json')
writeFileSync(outPath, JSON.stringify({ summary: report, pages: rows }, null, 2))

console.log(JSON.stringify(report, null, 2))
process.exit(report.pass ? 0 : 1)
