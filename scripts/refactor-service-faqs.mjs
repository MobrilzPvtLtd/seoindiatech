/**
 * Refactor service *Faq.js files to use shared ServiceFaq component.
 * Run: node scripts/refactor-service-faqs.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SERVICES_DIR = path.join(__dirname, '../component/services')

function extractFaqs(content) {
  const match = content.match(/const faqs\s*=\s*(\[[\s\S]*?\n  \])/)
  return match ? match[1] : null
}

function getComponentName(filePath) {
  return path.basename(filePath, '.js')
}

let updated = 0
for (const dir of fs.readdirSync(SERVICES_DIR)) {
  const folder = path.join(SERVICES_DIR, dir)
  if (!fs.statSync(folder).isDirectory()) continue

  for (const file of fs.readdirSync(folder)) {
    if (!/Faq\.js$/i.test(file) && file !== 'DigitalMarketingFAQ.js' && file !== 'EcommerceSEOFAQ.js') continue
    if (file === 'ReputationFAQ.js') continue // different casing

    const filePath = path.join(folder, file)
    const content = fs.readFileSync(filePath, 'utf8')
    if (content.includes('ServiceFaq')) continue

    const faqsBlock = extractFaqs(content)
    if (!faqsBlock) {
      console.warn('Skip (no faqs array):', filePath)
      continue
    }

    const name = getComponentName(filePath)
    const titleMatch = content.match(/<h2[^>]*>\s*([^<]+)/)
    const title = titleMatch ? titleMatch[1].trim().replace(/\s+/g, ' ') : 'Frequently Asked Questions'

    const newContent = `'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = ${faqsBlock}

export default function ${name}() {
  return <ServiceFaq title=${JSON.stringify(title)} faqs={faqs} badge="FAQ" />
}
`

    fs.writeFileSync(filePath, newContent, 'utf8')
    updated++
    console.log('Refactored:', filePath)
  }
}

// ReputationFAQ
const repPath = path.join(SERVICES_DIR, 'online-reputation-management/ReputationFAQ.js')
if (fs.existsSync(repPath)) {
  const content = fs.readFileSync(repPath, 'utf8')
  if (!content.includes('ServiceFaq')) {
    const faqsBlock = extractFaqs(content)
    if (faqsBlock) {
      fs.writeFileSync(
        repPath,
        `'use client'

import ServiceFaq from '@/component/common/ServiceFaq'

const faqs = ${faqsBlock}

export default function ReputationFAQ() {
  return <ServiceFaq title="FAQs" faqs={faqs} badge="FAQ" />
}
`,
        'utf8'
      )
      updated++
      console.log('Refactored:', repPath)
    }
  }
}

console.log(`Done. Refactored ${updated} FAQ files.`)
