import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import XLSX from 'xlsx'

const excelPath =
  process.argv[2] ||
  'C:\\Users\\Mobrilz\\Downloads\\SEO_India_Tech_Complete_2026_SEO_LLM_Internal_Linking_Master_Plan (1).xlsx'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'docs', 'seo-master-plan')
mkdirSync(outDir, { recursive: true })

const wb = XLSX.read(readFileSync(excelPath), { type: 'buffer' })

const summary = { sheets: {}, generatedAt: new Date().toISOString() }

wb.SheetNames.forEach((name) => {
  const sheet = wb.Sheets[name]
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' })
  summary.sheets[name] = { rowCount: rows.length, rows }
  writeFileSync(join(outDir, `${name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.json`), JSON.stringify(rows, null, 2))
})

writeFileSync(join(outDir, 'summary.json'), JSON.stringify(summary, null, 2))

import('./build-excel-matrix-data.mjs')

console.log('Sheets parsed:')
wb.SheetNames.forEach((n) => console.log(`  ${n}: ${summary.sheets[n].rowCount} rows`))
console.log(`Output: ${outDir}`)
