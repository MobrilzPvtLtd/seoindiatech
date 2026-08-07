/**
 * Validates that all page files include essential SEO tags.
 * Run: npm run check-seo
 */
const fs = require('fs')
const path = require('path')

const PAGES_DIR = path.join(__dirname, '..', 'pages')
const SKIP = new Set(['_app.js', '_document.js', 'sitemap.xml.js', 'api'])

const REQUIRED_PATTERNS = [
  { name: 'title', regex: /<title>|title=\{|title="|createPremiumServicePage/i },
  { name: 'description', regex: /name="description"|description=\{|description="|createPremiumServicePage/i },
  { name: 'canonical', regex: /rel="canonical"|SeoHead|createPremiumServicePage|path="/i },
  { name: 'og:title', regex: /property="og:title"|SeoHead|createPremiumServicePage/i },
  { name: 'SeoHead or factory', regex: /SeoHead|createPremiumServicePage/i },
]

const SCHEMA_REQUIRED = new Set([
  'who-we-are/index.js',
  'industries/index.js',
  'seo-packages/index.js',
  'contact-us.js',
  'blog/index.js',
  'privacy-policy/index.js',
  'terms/index.js',
])

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

  if (SCHEMA_REQUIRED.has(rel) && !/schema=\{|schemaData|build\w+Schema|Premium\w+Schema/i.test(content)) {
    failures++
    console.error(`FAIL ${rel}`)
    console.error('  - missing JSON-LD schema')
  }
}

if (failures) {
  console.error(`\n${failures} page check(s) failed SEO validation.`)
  process.exit(1)
}

console.log(`SEO check passed for ${files.length - SKIP.size} page files.`)
