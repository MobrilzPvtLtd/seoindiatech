#!/usr/bin/env node
/**
 * Validates robots.txt, llms.txt, and agents.json for AI/LLM layer readiness.
 * Run: npm run seo:validate-llm
 */
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = join(root, 'public')

let failures = 0

function fail(message) {
  failures += 1
  console.error(`FAIL: ${message}`)
}

function pass(message) {
  console.log(`OK: ${message}`)
}

const robotsPath = join(publicDir, 'robots.txt')
const llmsPath = join(publicDir, 'llms.txt')
const agentsPath = join(publicDir, 'agents.json')

if (!existsSync(robotsPath)) fail('robots.txt missing')
else {
  const robots = readFileSync(robotsPath, 'utf8')
  if (!/User-agent:\s*\*/i.test(robots)) fail('robots.txt missing wildcard user-agent')
  if (!/OAI-SearchBot/i.test(robots)) fail('robots.txt missing OAI-SearchBot rule')
  if (!/Sitemap:\s*https:\/\/www\.seoindiatech\.com\/sitemap\.xml/i.test(robots)) {
    fail('robots.txt missing canonical sitemap reference')
  }
  if (!/Disallow:\s*\/api\//i.test(robots)) fail('robots.txt missing /api/ disallow')
  if (/LLMs-Txt:/i.test(robots)) fail('robots.txt contains unsupported LLMs-Txt directive')
  else pass('robots.txt structure and AI crawler rules')
}

if (!existsSync(llmsPath)) fail('llms.txt missing')
else {
  const llms = readFileSync(llmsPath, 'utf8')
  for (const section of [
    '## About',
    '## Core SEO Services',
    '## Industries',
    '## India City SEO Pages',
    '## Resources',
    '## Contact',
    '## Machine-Readable Resources',
  ]) {
    if (!llms.includes(section)) fail(`llms.txt missing section: ${section}`)
  }
  if (!llms.includes('https://www.seoindiatech.com/contact-us')) fail('llms.txt missing contact URL')
  else pass('llms.txt sections and contact URL')
}

if (!existsSync(agentsPath)) fail('agents.json missing')
else {
  try {
    const agents = JSON.parse(readFileSync(agentsPath, 'utf8'))
    if (!agents.name || !agents.url) fail('agents.json missing name or url')
    if (!agents.contact?.email || !agents.contact?.phone) fail('agents.json missing contact fields')
    if (!Array.isArray(agents.actions) || !agents.actions.length) fail('agents.json missing actions')
    else pass('agents.json parses and has required fields')
  } catch (error) {
    fail(`agents.json invalid JSON: ${error.message}`)
  }
}

const aiSeoPath = join(root, 'utils', 'aiSeo.js')
const aiSeo = readFileSync(aiSeoPath, 'utf8')
if (/aggregateRating/.test(aiSeo)) {
  fail('utils/aiSeo.js still injects aggregateRating (unverified reviews)')
} else {
  pass('Organization schema helper has no unverified aggregateRating')
}

if (failures) {
  console.error(`\nLLM layer validation failed (${failures} issue(s)).`)
  process.exit(1)
}

console.log('\nLLM layer validation passed.')
