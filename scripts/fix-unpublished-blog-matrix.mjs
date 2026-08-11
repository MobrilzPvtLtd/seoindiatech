#!/usr/bin/env node
/**
 * Remove unpublished blog from internal linking matrix and regenerate excelLinkMatrixData.js
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const matrixPath = join(root, 'docs', 'seo-master-plan', 'internal-linking-matrix.json')
const masterPath = join(root, 'docs', 'seo-master-plan', '114-page-master-plan.json')

const BAD_SLUG = 'google-core-update-may-2026-seo-content-strategy-agentic-ai'
const BAD_URL = `https://www.seoindiatech.com/blog/${BAD_SLUG}`
const REPLACEMENT_SLUG = 'google-ai-overviews-changing-business-seo'
const REPLACEMENT_URL = `https://www.seoindiatech.com/blog/${REPLACEMENT_SLUG}`

function fixRows(rows) {
  return rows
    .filter((row) => {
      const source = row['Source URL'] || ''
      return !source.includes(BAD_SLUG)
    })
    .map((row) => {
      const dest = row['Destination URL'] || ''
      if (dest.includes(BAD_SLUG)) {
        return {
          ...row,
          'Destination URL': REPLACEMENT_URL,
          'Anchor Text': row['Anchor Text']?.includes('google core update')
            ? 'how Google AI Overviews affect SEO'
            : row['Anchor Text'],
        }
      }
      return row
    })
}

const matrixRows = fixRows(JSON.parse(readFileSync(matrixPath, 'utf8')))
writeFileSync(matrixPath, JSON.stringify(matrixRows, null, 2))
console.log(`Fixed internal-linking-matrix.json (${matrixRows.length} rows)`)

if (readFileSync(masterPath, 'utf8').includes(BAD_SLUG)) {
  const masterRows = JSON.parse(readFileSync(masterPath, 'utf8')).filter(
    (row) => !(row.URL || row.url || '').includes(BAD_SLUG)
  )
  writeFileSync(masterPath, JSON.stringify(masterRows, null, 2))
  console.log(`Removed unpublished blog from 114-page-master-plan.json`)
}

execSync('node scripts/build-excel-matrix-data.mjs', { cwd: root, stdio: 'inherit' })
