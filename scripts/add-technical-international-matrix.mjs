/**
 * Add /services/technical-seo and /services/international-seo to master plan + link matrix.
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const planDir = join(root, 'docs', 'seo-master-plan')
const matrixPath = join(planDir, 'internal-linking-matrix.json')
const masterPath = join(planDir, '114-page-master-plan.json')
const outData = join(root, 'utils', 'seo', 'excelLinkMatrixData.js')

const ANCHOR_RULE =
  'Use natural partial-match/brand/context anchors; rotate variants; never force exact-match keywords where they read unnaturally.'

function linkRow(source, dest, anchor, why, placement) {
  return {
    'Source URL': `https://www.seoindiatech.com${source}`,
    'Destination URL': `https://www.seoindiatech.com${dest}`,
    'Anchor Text': anchor,
    'Why This Link': why,
    'Recommended Placement': placement,
    'Anchor Rule': ANCHOR_RULE,
  }
}

function masterRow(url, topic, secondary, title, h1) {
  return {
    URL: `https://www.seoindiatech.com${url}`,
    'Page Type': 'Service',
    'Primary Keyword / Topic': topic,
    'Secondary Keywords': secondary,
    'Entities & Semantic Terms': `${topic}, SEO India Tech, search optimization, digital marketing`,
    'Search Intent': 'Commercial service',
    'Suggested Title': title,
    'Suggested H1': h1,
    'Keyword Placement Plan':
      'Title: primary intent; H1: same topic naturally; first 100 words: primary + one variant; H2/H3: subtopics/entities; body: semantic terms; internal links: descriptive partial-match anchors; image ALT: only when accurate; FAQ: genuine user questions; CTA: commercial intent.',
    'LLM / AI Search Optimization':
      'Answer-first opening; clear H2/H3 hierarchy; concise definitions; lists/tables where useful; specific examples; evidence/source links for factual claims; author/expertise context; strong internal links to supporting pages; keep key facts in crawlable HTML.',
    'Answer-Style Query Set': `What is ${topic}? | How does ${topic} work? | Who needs ${topic}? | What are the benefits of ${topic}? | How do I choose a provider for ${topic}?`,
    'E-E-A-T / Trust Plan':
      'Show who created/reviewed the page, relevant experience, evidence, transparent claims, About/Contact links, and accurate sources.',
    'Conversion Plan':
      'Primary CTA to contact/consultation; secondary CTA to relevant service/package/resource; avoid aggressive repeated CTAs.',
  }
}

const matrix = JSON.parse(readFileSync(matrixPath, 'utf8'))
const master = JSON.parse(readFileSync(masterPath, 'utf8'))

const newMaster = [
  masterRow(
    '/services/technical-seo',
    'technical SEO services india',
    'technical SEO company, crawl audits, Core Web Vitals, indexation, structured data',
    'Technical SEO Services in India | SEO India Tech',
    'Technical SEO Services That Fix What Blocks Rankings'
  ),
  masterRow(
    '/services/international-seo',
    'international SEO services india',
    'global SEO, hreflang, export markets, multi-country SEO',
    'International SEO Agency India | SEO India Tech',
    'International SEO for Export and Global Growth'
  ),
]

for (const row of newMaster) {
  if (!master.some((m) => m.URL === row.URL)) master.push(row)
}

const newLinks = [
  linkRow('/services/seo', '/services/technical-seo', 'technical SEO services', 'Service-cluster topical relevance', 'Related services / body'),
  linkRow('/services/seo', '/services/international-seo', 'international SEO', 'Service-cluster topical relevance', 'Related services / body'),
  linkRow('/services/technical-seo', '/services/seo', 'SEO services in India', 'Primary commercial hub', 'Contextual body'),
  linkRow('/services/technical-seo', '/blog/technical-seo-checklist-enterprise-websites', 'technical SEO checklist', 'Supporting informational content', 'Related resources'),
  linkRow('/services/technical-seo', '/contact-us', 'contact our SEO team', 'Conversion', 'CTA'),
  linkRow('/services/international-seo', '/services/seo', 'SEO services in India', 'Primary commercial hub', 'Contextual body'),
  linkRow('/services/international-seo', '/blog/international-seo-guide-european-companies', 'international SEO guide', 'Supporting informational content', 'Related resources'),
  linkRow('/services/international-seo', '/blog/local-vs-national-vs-international-seo', 'local vs international SEO', 'Supporting informational content', 'Related resources'),
  linkRow('/services/international-seo', '/contact-us', 'contact our SEO team', 'Conversion', 'CTA'),
  linkRow('/blog/technical-seo-checklist-enterprise-websites', '/services/technical-seo', 'technical SEO services', 'Commercial service for checklist readers', 'Contextual body'),
  linkRow('/blog/international-seo-guide-european-companies', '/services/international-seo', 'international SEO services', 'Commercial service for guide readers', 'Contextual body'),
  linkRow('/blog/local-vs-national-vs-international-seo', '/services/international-seo', 'international SEO agency', 'Commercial service for comparison readers', 'Contextual body'),
]

const pairKey = (r) => `${r['Source URL']}|${r['Destination URL']}`
const existing = new Set(matrix.map(pairKey))

for (const row of newLinks) {
  if (!existing.has(pairKey(row))) {
    matrix.push(row)
    existing.add(pairKey(row))
  }
}

writeFileSync(matrixPath, JSON.stringify(matrix, null, 2) + '\n')
writeFileSync(masterPath, JSON.stringify(master, null, 2) + '\n')

const contents = `/** Auto-generated from docs/seo-master-plan — do not edit manually */\nexport const matrixRows = ${JSON.stringify(matrix, null, 2)}\n\nexport const pageMasterRows = ${JSON.stringify(master, null, 2)}\n`
writeFileSync(outData, contents)

console.log(`Master plan: ${master.length} pages (+${newMaster.length} checked)`)
console.log(`Matrix: ${matrix.length} rows (+${newLinks.length} checked)`)
console.log(`Wrote ${outData}`)
