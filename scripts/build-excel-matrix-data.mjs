/**
 * Generates browser-safe JS modules from parsed Excel JSON.
 * Run automatically after parsing Excel, or: node scripts/build-excel-matrix-data.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const planDir = join(root, 'docs', 'seo-master-plan')
const outFile = join(root, 'utils', 'seo', 'excelLinkMatrixData.js')

const matrixRows = JSON.parse(readFileSync(join(planDir, 'internal-linking-matrix.json'), 'utf8'))
const pageMasterRows = JSON.parse(readFileSync(join(planDir, '114-page-master-plan.json'), 'utf8'))

const contents = `/** Auto-generated from docs/seo-master-plan — do not edit manually */\nexport const matrixRows = ${JSON.stringify(matrixRows, null, 2)}\n\nexport const pageMasterRows = ${JSON.stringify(pageMasterRows, null, 2)}\n`

writeFileSync(outFile, contents)
console.log(`Wrote ${outFile} (${matrixRows.length} matrix rows, ${pageMasterRows.length} master pages)`)
