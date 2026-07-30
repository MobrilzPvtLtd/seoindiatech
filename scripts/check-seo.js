/**
 * Validates that all page files include essential SEO tags.
 * Run: npm run check-seo
 */
const fs = require('fs')
const path = require('path')

const PAGES_DIR = path.join(__dirname, '..', 'pages')
const SKIP = new Set(['_app.js', '_document.js', 'sitemap.xml.js', 'api'])

const REQUIRED_PATTERNS = [
  { name: 'title', regex: /<title>|title=\{|title="/i },
  { name: 'description', regex: /name="description"|description=\{|description="/i },
  { name: 'canonical', regex: /rel="canonical"|SeoHead|path="/i },
  { name: 'og:title', regex: /property="og:title"|SeoHead/i },
]

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'api') continue
      walk(full, files)
    } else if (entry.name.endsWith('.js')) {
      files.push(full)
    }
  }
  return files
}

const files = walk(PAGES_DIR)
let failures = 0

for (const file of files) {
  const rel = path.relative(PAGES_DIR, file).replace(/\\/g, '/')
  const base = path.basename(file)
  if (SKIP.has(base) || rel.startsWith('api/')) continue

  const content = fs.readFileSync(file, 'utf8')
  const missing = REQUIRED_PATTERNS.filter((p) => !p.regex.test(content))

  if (missing.length) {
    failures++
    console.error(`FAIL ${rel}`)
    missing.forEach((m) => console.error(`  - missing ${m.name}`))
  }
}

if (failures) {
  console.error(`\n${failures} page(s) failed SEO check.`)
  process.exit(1)
}

console.log(`SEO check passed for ${files.length - SKIP.size} page files.`)
