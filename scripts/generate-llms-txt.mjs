#!/usr/bin/env node
/**
 * Generate public/llms.txt from current sitemap path inventory.
 * Run: node scripts/generate-llms-txt.mjs
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { generateLlmsTxt } from '../utils/llmsTxtBuilder.js'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const paths = getSitemapPathsForScripts()
const content = generateLlmsTxt(paths)
const outPath = join(root, 'public', 'llms.txt')

writeFileSync(outPath, content, 'utf8')
console.log(`llms.txt generated: ${outPath} (from ${paths.length} sitemap paths)`)
