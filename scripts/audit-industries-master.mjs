#!/usr/bin/env node
/**
 * Phase 10B — Master audit of all 41 industry pages (audit only)
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8')
const slugs = [...sitemap.matchAll(/\/industries\/([^<]+)</g)].map((m) => m[1])

const OVERRIDE_SLUGS = new Set([
  'plastic-surgery-seo',
  'optometrist-seo',
  'wineries-seo',
  'accountants-seo',
  'doctor-physician-seo',
])

const BASE = 'https://www.seoindiatech.com'
const UA = 'SIT-Industry-Master-Audit/1.0'

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

const headings = (html, tag) =>
  [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  )

function wordCount(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return text.split(/\s+/).filter(Boolean).length
}

function auditHtml(slug, html, status) {
  const h1 = headings(html, 'h1')
  const h2 = headings(html, 'h2')
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
  const visibleFaq = (html.match(/id="faq-button-/g) || []).length

  const internal = [...new Set([...html.matchAll(/href=["'](\/[^"'#?][^"']*)["']/gi)].map((m) => m[1]))]

  const quickAnswerDup =
    h2.some((h) => /^what is .+ seo\?$/i.test(h)) &&
    h2.some((h) => /what is .+ seo and who needs it\?/i.test(h))

  const heroMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
  const heroText = heroMatch ? heroMatch[1].replace(/<[^>]+>/g, '').trim() : ''

  return {
    slug,
    url: `${BASE}/industries/${slug}`,
    status,
    indexable: !/noindex/i.test(meta(html, 'robots') || 'index, follow'),
    canonical: linkRel(html, 'canonical'),
    title: html.match(/<title[^>]*>([^<]+)/i)?.[1]?.trim(),
    metaDescription: meta(html, 'description'),
    h1: h1[0] || null,
    h1Count: h1.length,
    h2Count: h2.length,
    h2Sample: h2.slice(0, 8),
    h2Full: h2,
    wordCountEstimate: wordCount(html),
    faqVisible: visibleFaq,
    faqSchema: faqSchemaCount,
    faqSynced: visibleFaq === faqSchemaCount,
    faqSchemaBlocks: faqNodes.length,
    schemaTypes: ld
      .flatMap((x) => (x['@graph'] ? x['@graph'].map((n) => n['@type']) : [x['@type']]))
      .filter(Boolean),
    quickAnswerDuplicate: quickAnswerDup,
    hasOverride: OVERRIDE_SLUGS.has(slug),
    serviceLinks: {
      seo: internal.includes('/services/seo'),
      local: internal.includes('/services/local-seo-service'),
      technical: internal.includes('/services/technical-seo'),
    },
    gscImpressions: null,
    gscClicks: null,
    gscNote: 'GSC_REQUIRED — connect Search Console export for Phase 13 ranking',
  }
}

async function fetchPage(slug) {
  const url = `${BASE}/industries/${slug}`
  try {
    const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': UA } })
    const html = await res.text()
    return auditHtml(slug, html, res.status)
  } catch (e) {
    return {
      slug,
      url: `${BASE}/industries/${slug}`,
      status: 0,
      error: e.message,
      gscImpressions: null,
      gscClicks: null,
      gscNote: 'GSC_REQUIRED',
    }
  }
}

// Template signature: H2s that appear on majority of pages
function buildTemplateSignature(rows) {
  const h2Counts = new Map()
  for (const row of rows) {
    if (!row.h2Full) continue
    for (const h of row.h2Full) {
      const norm = h.toLowerCase().replace(/\s+/g, ' ')
      h2Counts.set(norm, (h2Counts.get(norm) || 0) + 1)
    }
  }
  const threshold = Math.ceil(rows.length * 0.75)
  return new Set(
    [...h2Counts.entries()].filter(([, c]) => c >= threshold).map(([h]) => h)
  )
}

function normalizeIndustryText(text, slug) {
  if (!text) return ''
  let t = text.toLowerCase()
  t = t.replace(new RegExp(slug.replace(/-/g, '[\\s-]+'), 'gi'), 'INDUSTRY')
  t = t.replace(/seo for [a-z\s/&]+/gi, 'seo for INDUSTRY')
  t = t.replace(/[a-z]+ seo/gi, 'INDUSTRY SEO')
  return t
}

function classify(row, templateH2s) {
  if (row.status !== 200) return { grade: 'D', priority: 'P0', reason: 'HTTP or fetch error' }

  const matchingTemplateH2s = (row.h2Full || []).filter((h) =>
    templateH2s.has(h.toLowerCase().replace(/\s+/g, ' '))
  ).length
  const templateH2Ratio = row.h2Count ? matchingTemplateH2s / row.h2Count : 1

  const heroNorm = normalizeIndustryText(row.h1 || '', row.slug)
  const swapTestLikely =
    templateH2Ratio >= 0.75 &&
    !row.hasOverride &&
    row.h2Count >= 15

  if (row.wordCountEstimate < 1200) {
    return { grade: 'D', priority: 'P2', reason: 'Thin word count estimate', templateH2Ratio, swapTestLikely }
  }
  if (swapTestLikely) {
    return {
      grade: 'C',
      priority: row.quickAnswerDuplicate ? 'P0' : 'P1',
      reason: 'High template H2 overlap — swap-industry-name test positive',
      templateH2Ratio,
      swapTestLikely,
    }
  }
  if (row.hasOverride) {
    return { grade: 'A', priority: 'P1', reason: 'Handwritten premium override present', templateH2Ratio, swapTestLikely }
  }
  if (templateH2Ratio < 0.65) {
    return { grade: 'B', priority: 'P2', reason: 'Moderate template overlap', templateH2Ratio, swapTestLikely }
  }
  return { grade: 'B', priority: 'P2', reason: 'Moderate — profile-driven content', templateH2Ratio, swapTestLikely }
}

const rows = []
for (const slug of slugs) {
  rows.push(await fetchPage(slug))
  await new Promise((r) => setTimeout(r, 200))
}

const templateH2s = buildTemplateSignature(rows)

for (const row of rows) {
  const { grade, priority, reason, templateH2Ratio, swapTestLikely } = classify(row, templateH2s)
  row.grade = grade
  row.priority = priority
  row.classificationReason = reason
  row.templateH2Ratio = templateH2Ratio ?? null
  row.swapIndustryNameTest = swapTestLikely ?? false
  row.templateH2MatchCount = row.h2Full
    ? row.h2Full.filter((h) => templateH2s.has(h.toLowerCase().replace(/\s+/g, ' '))).length
    : null
  delete row.h2Full
}

const summary = {
  auditedAt: new Date().toISOString(),
  totalPages: rows.length,
  gradeCounts: {
    A: rows.filter((r) => r.grade === 'A').length,
    B: rows.filter((r) => r.grade === 'B').length,
    C: rows.filter((r) => r.grade === 'C').length,
    D: rows.filter((r) => r.grade === 'D').length,
  },
  priorityCounts: {
    P0: rows.filter((r) => r.priority === 'P0').length,
    P1: rows.filter((r) => r.priority === 'P1').length,
    P2: rows.filter((r) => r.priority === 'P2').length,
    P3: rows.filter((r) => r.priority === 'P3').length,
  },
  quickAnswerDuplicateCount: rows.filter((r) => r.quickAnswerDuplicate).length,
  faqMismatchCount: rows.filter((r) => r.faqVisible !== r.faqSchema).length,
  overrideSlugs: [...OVERRIDE_SLUGS],
  templateH2SignatureCount: templateH2s.size,
  templateH2SignatureSample: [...templateH2s].slice(0, 12),
  gscNote: 'All GSC fields null — import GSC URL data before Top 5 selection',
  topP1Candidates: rows
    .filter((r) => r.priority === 'P1' || r.grade === 'A')
    .map((r) => ({ slug: r.slug, grade: r.grade, priority: r.priority, hasOverride: r.hasOverride }))
    .slice(0, 10),
}

const out = { summary, pages: rows }
writeFileSync(join(root, 'seo-audit', 'phase-10b-industry-master-matrix.json'), JSON.stringify(out, null, 2))
console.log(JSON.stringify(summary, null, 2))
