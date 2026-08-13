/**
 * Per-page lastmod for sitemap — only dates when content was actually edited.
 * Never use build date or datePublished as lastmod.
 */
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

function todayIsoDate() {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const registryPath = join(root, 'seo-audit', 'page-lastmod.json')

/** Inline fallback when JSON missing (build environments) */
const INLINE_LASTMOD = {
  '/services/international-seo': '2026-08-12',
  '/services/technical-seo': '2026-08-10',
  '/services/local-seo-service': '2026-08-09',
  '/services/e-commerce-seo': '2026-08-11',
  '/services/seo': '2026-08-08',
  '/industries/hvac-seo': '2026-08-12',
  '/industries/plumber-seo': '2026-08-12',
  '/industries/automotive-seo': '2026-08-12',
  '/industries/movers-and-moving-company-seo': '2026-08-13',
  '/industries/flooring-company-seo': '2026-08-13',
  '/industries/garage-door-seo': '2026-08-13',
}

function loadRegistry() {
  if (existsSync(registryPath)) {
    try {
      return JSON.parse(readFileSync(registryPath, 'utf8'))
    } catch {
      return { ...INLINE_LASTMOD }
    }
  }
  return { ...INLINE_LASTMOD }
}

export function getLastmodForRegistryPath(path) {
  const registry = loadRegistry()
  const raw = registry[path]
  if (!raw || !ISO_DATE.test(raw)) return null
  if (raw > todayIsoDate()) return null
  return raw
}
