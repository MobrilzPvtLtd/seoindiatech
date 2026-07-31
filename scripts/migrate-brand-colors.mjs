/**
 * Migrates legacy blue/gray Tailwind classes to brand design tokens.
 * Run: node scripts/migrate-brand-colors.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const REPLACEMENTS = [
  ['from-blue-600 to-blue-800', 'from-primary to-secondary'],
  ['from-blue-500 to-blue-600', 'from-primary to-primary-hover'],
  ['from-blue-600 to-blue-700', 'from-primary to-primary-hover'],
  ['dark:from-blue-400 dark:to-indigo-400', 'dark:from-accent dark:to-primary'],
  ['from-white to-blue-50', 'from-white to-background'],
  ['from-gray-100 to-blue-100', 'from-cream to-background'],
  ['bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-950', 'bg-gradient-to-br from-cream to-background dark:from-background dark:to-secondary/30'],
  ['from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800', 'from-cream to-background dark:from-background dark:to-surface'],
  ['hover:from-blue-700 hover:to-blue-900', 'hover:from-primary-hover hover:to-secondary'],
  ['dark:hover:bg-blue-700', 'dark:hover:bg-primary-hover'],
  ['hover:bg-blue-700', 'hover:bg-primary-hover'],
  ['hover:bg-blue-600', 'hover:bg-primary-hover'],
  ['dark:bg-blue-950/30', 'dark:bg-secondary/30'],
  ['dark:bg-blue-950', 'dark:bg-secondary/40'],
  ['dark:bg-blue-900/60', 'dark:bg-primary/25'],
  ['dark:bg-blue-900/50', 'dark:bg-primary/20'],
  ['dark:bg-blue-900/30', 'dark:bg-primary/15'],
  ['dark:bg-blue-900/20', 'dark:bg-primary/15'],
  ['dark:bg-blue-800/20', 'dark:bg-primary/15'],
  ['dark:bg-blue-800/15', 'dark:bg-primary/15'],
  ['dark:bg-blue-600', 'dark:bg-primary'],
  ['dark:bg-blue-500', 'dark:bg-primary'],
  ['dark:bg-blue-400', 'dark:bg-accent'],
  ['bg-blue-200/60', 'bg-primary/20'],
  ['bg-blue-200/30', 'bg-primary/15'],
  ['bg-blue-100/80', 'bg-primary/15'],
  ['bg-blue-50/90', 'bg-background/90'],
  ['bg-blue-100', 'bg-primary/10'],
  ['bg-blue-50', 'bg-background'],
  ['bg-blue-600', 'bg-primary'],
  ['bg-blue-700', 'bg-primary-hover'],
  ['bg-blue-500', 'bg-primary'],
  ['text-blue-800', 'text-primary'],
  ['text-blue-700', 'text-primary'],
  ['text-blue-600', 'text-primary'],
  ['text-blue-500', 'text-primary'],
  ['dark:text-blue-400', 'dark:text-accent'],
  ['dark:text-blue-300', 'dark:text-accent'],
  ['border-blue-800/50', 'border-primary/40'],
  ['dark:border-blue-800/50', 'dark:border-primary/40'],
  ['dark:border-blue-800', 'dark:border-primary/40'],
  ['border-blue-200', 'border-primary/30'],
  ['hover:border-blue-200', 'hover:border-primary/30'],
  ['dark:hover:border-blue-800/50', 'dark:hover:border-primary/40'],
  ['border-blue-600', 'border-primary'],
  ['border-blue-500', 'border-primary'],
  ['ring-blue-500', 'ring-primary'],
  ['focus:ring-blue-500', 'focus:ring-primary'],
  ['shadow-blue-500/5', 'shadow-primary/5'],
  ['shadow-blue-900/10', 'shadow-primary/10'],
  ['via-blue-500/30', 'via-primary/30'],
  ['via-blue-700/30', 'via-primary/30'],
  ['to-blue-50', 'to-background'],
  ['to-blue-700', 'to-primary-hover'],
  ['to-blue-800', 'to-secondary'],
  ['from-blue-600', 'from-primary'],
  ['from-blue-500', 'from-primary'],
  ['from-blue-400', 'from-accent'],
  ['text-gray-900 dark:text-white', 'text-heading'],
  ['text-gray-700 dark:text-gray-300', 'text-body'],
  ['text-gray-600 dark:text-gray-400', 'text-muted'],
  ['text-gray-600 dark:text-gray-300', 'text-muted'],
  ['text-gray-500 dark:text-gray-400', 'text-muted'],
  ['bg-gray-50 dark:bg-gray-950', 'bg-background'],
  ['bg-gray-50 dark:bg-gray-900/50', 'bg-background'],
  ['bg-gray-50 dark:bg-gray-800/30', 'bg-background'],
  ['bg-gray-50 dark:bg-gray-900', 'bg-background'],
  ['border-gray-200 dark:border-gray-700', 'border-border'],
  ['border-gray-300 dark:border-gray-600', 'border-border'],
  ['bg-white dark:bg-gray-800', 'bg-card dark:bg-card'],
  ['dark:bg-gray-800', 'dark:bg-card'],
  ['dark:bg-gray-900', 'dark:bg-background'],
  ['dark:from-gray-900', 'dark:from-background'],
  ['dark:to-gray-800', 'dark:to-surface'],
  ['hover:bg-gray-50 dark:hover:bg-gray-700', 'hover:bg-cream dark:hover:bg-surface'],
  ['hover:bg-gray-50', 'hover:bg-cream'],
  ['text-gray-800 dark:text-white', 'text-heading'],
  ['text-gray-400 dark:text-gray-500', 'text-muted'],
]

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) walk(full, files)
    } else if (/\.(js|jsx|tsx|ts)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

const targets = [
  path.join(ROOT, 'component'),
  path.join(ROOT, 'pages'),
]

let changed = 0
for (const dir of targets) {
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

console.log(`Updated ${changed} files with brand color tokens.`)
