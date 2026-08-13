#!/usr/bin/env node
/**
 * Generate priority-pages-gsc-optimization.md from live snapshot + GSC page data.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const snapshot = JSON.parse(
  readFileSync(join(root, 'seo-audit', 'priority-pages-live-snapshot.json'), 'utf8')
)

const IMPLEMENTED_TITLE = new Set([
  'movers-and-moving-company-seo',
  'flooring-company-seo',
  'garage-door-seo',
])

function line(...parts) {
  return parts.join(' | ')
}

const rows = []

for (const p of snapshot) {
  const url = `/industries/${p.slug}`
  const gscPage = p.gscPage
  const gscLimited = p.gscQueries === 'GSC_QUERY_DATA_UNAVAILABLE'
  const pageGscNote = gscPage
    ? `${gscPage.impressions} impr · ${gscPage.clicks} clicks · ${gscPage.ctr}% CTR · pos ${gscPage.position}`
    : 'GSC_DATA_LIMITED (no page metrics in export)'

  let primaryCluster = gscLimited
    ? gscPage
      ? `GSC_DATA_LIMITED — page-level only (${gscPage.impressions} impressions, pos ${gscPage.position}); queries not in repo`
      : 'GSC_DATA_LIMITED — preserve URL primary intent'
    : 'GSC_QUERY_DATA_UNAVAILABLE'

  let recTitle = 'Keep current'
  if (p.phase13Protected) recTitle = 'PROTECT Phase 13 — keep current'
  else if (p.hasOverride) recTitle = 'PROTECT override — keep current'
  else if (IMPLEMENTED_TITLE.has(p.slug)) {
    if (p.slug === 'movers-and-moving-company-seo')
      recTitle = 'Moving Company SEO Services | Local & Long-Distance Mover Marketing'
    if (p.slug === 'flooring-company-seo')
      recTitle = 'Flooring Company SEO Services | Hardwood, Tile & LVP Marketing'
    if (p.slug === 'garage-door-seo') recTitle = 'Garage Door SEO Services | Repair & Installation Marketing'
  }   else if (p.isTemplateTitle && gscPage)
    recTitle = 'Defer title change — upload Queries+Page export first'
  else if (p.isTemplateTitle) recTitle = 'Defer title change — GSC_DATA_LIMITED'

  let recMeta = p.hasOverride || p.phase13Protected ? 'Keep current' : 'See profile meta if implemented; else defer'
  if (IMPLEMENTED_TITLE.has(p.slug)) recMeta = 'Industry-specific meta implemented in profile'

  let recH1 = 'Keep current H1'
  let h2h3 = 'No change without query export'
  let content = 'No body rewrite — preserve industry profile content'
  if (IMPLEMENTED_TITLE.has(p.slug)) content = 'No body rewrite; title/meta CTR alignment only'

  const internal =
    '/services/seo + contextual local/technical/gbp per category; GBP guide blog link via INDUSTRY_BLOG_SLUGS'
  const blog =
    p.slug.match(/dentist|optometrist|doctor|chiropractor|physiotherapy|orthodontist|plastic/)
      ? 'seo-healthcare-businesses-europe OR google-business-profile-optimization-guide'
      : 'google-business-profile-optimization-guide'
  const faq = p.faqVisible === p.faqSchema ? 'No change — parity OK' : 'Fix FAQ visible/schema parity'
  const alt = 'Review hero SVG ALT on next content pass — no mass ALT changes'
  const schema = 'No change — preserve valid FAQPage/Service'
  const status = IMPLEMENTED_TITLE.has(p.slug)
    ? 'IMPLEMENTED — title/meta + internal blog link'
    : p.phase13Protected || (p.hasOverride && !p.isTemplateTitle)
      ? 'PROTECTED — internal blog link only where override permits'
      : p.isTemplateTitle
        ? 'MONITOR — GSC_DATA_LIMITED; internal links added; defer title until query export'
        : 'MONITOR — internal links added'

  rows.push({
    url,
    primaryCluster,
    recTitle,
    recMeta,
    recH1,
    h2h3,
    content,
    internal,
    blog,
    faq,
    alt,
    schema,
    status,
  })
}

let md = `# Priority Pages — GSC Optimization Plan\n\n`
md += `**Date:** 2026-08-13 · **Pages:** 24 industry URLs · **Query source:** GSC page export (Queries+Page not in repo)\n\n`
md += `---\n\n`

for (const r of rows) {
  md += `## ${r.url}\n\n`
  md += `| Field | Value |\n|-------|-------|\n`
  md += `| URL | ${r.url} |\n`
  md += `| GSC primary query cluster | ${r.primaryCluster} |\n`
  md += `| Recommended title | ${r.recTitle} |\n`
  md += `| Recommended meta | ${r.recMeta} |\n`
  md += `| Recommended H1 | ${r.recH1} |\n`
  md += `| Recommended H2/H3 changes | ${r.h2h3} |\n`
  md += `| Recommended content updates | ${r.content} |\n`
  md += `| Recommended internal links | ${r.internal} |\n`
  md += `| Recommended blog links | ${r.blog} |\n`
  md += `| Recommended FAQ updates | ${r.faq} |\n`
  md += `| Recommended ALT updates | ${r.alt} |\n`
  md += `| Recommended schema updates | ${r.schema} |\n`
  md += `| Status | ${r.status} |\n\n`
}

writeFileSync(join(root, 'seo-audit', 'priority-pages-gsc-optimization.md'), md)
console.log('Wrote priority-pages-gsc-optimization.md')
