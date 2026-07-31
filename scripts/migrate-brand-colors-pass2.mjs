/**
 * Pass 2: Remaining blue/indigo/purple/cyan/gray → brand tokens
 * Run: node scripts/migrate-brand-colors-pass2.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const REPLACEMENTS = [
  ['from-blue-700 to-blue-900', 'from-primary to-secondary'],
  ['dark:to-blue-950', 'dark:to-secondary/40'],
  ['dark:to-blue-900', 'dark:to-secondary/30'],
  ['dark:from-blue-900/20', 'dark:from-primary/15'],
  ['dark:from-blue-900', 'dark:from-primary/20'],
  ['dark:bg-blue-950', 'dark:bg-secondary/40'],
  ['dark:bg-blue-900/20', 'dark:bg-primary/15'],
  ['dark:bg-blue-800/60', 'dark:bg-primary/25'],
  ['dark:bg-blue-800/30', 'dark:bg-primary/20'],
  ['dark:bg-blue-800/10', 'dark:bg-primary/10'],
  ['dark:bg-blue-800/50', 'dark:bg-primary/20'],
  ['dark:bg-blue-800', 'dark:bg-primary/20'],
  ['dark:group-hover:bg-blue-800/60', 'dark:group-hover:bg-primary/25'],
  ['dark:group-hover:text-blue-400', 'dark:group-hover:text-accent'],
  ['dark:hover:text-blue-400', 'dark:hover:text-accent'],
  ['dark:focus:ring-blue-400', 'dark:focus:ring-accent'],
  ['dark:shadow-blue-900/20', 'dark:shadow-primary/15'],
  ['dark:text-blue-200', 'dark:text-accent'],
  ['dark:text-blue-100', 'dark:text-accent/90'],
  ['dark:text-blue-50', 'dark:text-white/90'],
  ['text-blue-100', 'text-white/90'],
  ['text-blue-400', 'text-accent'],
  ['text-blue-300', 'text-accent'],
  ['bg-blue-400/20', 'bg-accent/20'],
  ['bg-blue-400/40', 'bg-accent/30'],
  ['bg-blue-300/50', 'bg-accent/25'],
  ['bg-blue-300/30', 'bg-accent/20'],
  ['bg-blue-300/20', 'bg-accent/15'],
  ['bg-blue-200', 'bg-primary/15'],
  ['bg-blue-100', 'bg-primary/10'],
  ['bg-blue-50', 'bg-background'],
  ['from-blue-50', 'from-cream'],
  ['border-blue-300', 'border-primary/30'],
  ['border-blue-200', 'border-primary/20'],
  ['border-blue-950', 'border-primary/40'],
  ['hover:bg-blue-200', 'hover:bg-primary/15'],
  ['group-hover:bg-blue-200', 'group-hover:bg-primary/15'],
  ['to-blue-400', 'to-accent'],
  ['from-primary to-blue-400', 'from-primary to-accent'],
  ['from-primary/20 to-blue-600/20', 'from-primary/20 to-primary/20'],
  ['from-primary to-indigo-600', 'from-primary to-secondary'],
  ['bg-gradient-to-br from-primary to-indigo-600', 'bg-gradient-to-br from-primary to-secondary'],
  ['text-indigo-700', 'text-primary'],
  ['text-indigo-600', 'text-primary'],
  ['hover:text-indigo-700', 'hover:text-primary-hover'],
  ['bg-indigo-600', 'bg-primary'],
  ['bg-indigo-100', 'bg-primary/10'],
  ['from-primary to-purple-600', 'from-primary to-secondary'],
  ['bg-purple-600', 'bg-primary'],
  ['bg-purple-100', 'bg-primary/10'],
  ['bg-purple-50', 'bg-cream'],
  ['dark:bg-purple-900/30', 'dark:bg-primary/20'],
  ['text-purple-600', 'text-primary'],
  ['dark:text-purple-400', 'dark:text-accent'],
  ['border-purple-200', 'border-primary/20'],
  ['dark:border-purple-700', 'dark:border-primary/30'],
  ['from-purple-50', 'from-cream'],
  ['bg-cyan-100/50', 'bg-accent/20'],
  ['text-gray-700 dark:text-gray-200', 'text-body'],
  ['text-gray-600 dark:text-gray-400', 'text-muted'],
  ['text-gray-500 dark:text-gray-400', 'text-muted'],
  ['text-gray-600', 'text-muted'],
  ['text-gray-500', 'text-muted'],
  ['text-gray-700', 'text-body'],
  ['text-gray-800', 'text-heading'],
  ['bg-gray-100', 'bg-cream'],
  ['hover:bg-gray-100', 'hover:bg-cream'],
  ['border-gray-100', 'border-border'],
  ['border-gray-300', 'border-border'],
  ['divide-gray-200', 'divide-border'],
  ['dark:divide-gray-700', 'dark:divide-border'],
  ['dark:border-gray-700', 'dark:border-border'],
  ['dark:bg-gray-700', 'dark:bg-surface'],
  ['from-accent to-white dark:from-gray-700 dark:to-gray-900', 'from-cream to-white dark:from-surface dark:to-background'],
  ['from-blue-900/30', 'from-secondary/30'],
]

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) walk(full, files)
    } else if (/\.(js|jsx)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

let changed = 0
for (const dir of [path.join(ROOT, 'component'), path.join(ROOT, 'pages')]) {
  for (const file of walk(dir)) {
    let content = fs.readFileSync(file, 'utf8')
    const original = content
    for (const [from, to] of REPLACEMENTS) {
      content = content.split(from).join(to)
    }
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8')
      changed++
    }
  }
}

console.log(`Pass 2: updated ${changed} files.`)
