#!/usr/bin/env node
/**
 * QA for sitemap wave configuration and indexed_waves filtering.
 * Run: node scripts/qa-sitemap-waves.mjs
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { getSitemapPathsForScripts } from './sitemap-paths.mjs'
import {
  getIndexWaveForPath,
  HOLD_INDUSTRY_SLUGS,
  HOLD_CITY_SLUGS,
  WAVE_2_INDUSTRY_SLUGS,
  WAVE_2_CITY_SLUGS,
} from '../utils/sitemapWaveConfig.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const allPaths = getSitemapPathsForScripts({ wave: 'all' })
const indexedPaths = getSitemapPathsForScripts({ wave: 'indexed_waves' })

const holdPaths = allPaths.filter((p) => getIndexWaveForPath(p) === 'hold')
const holdInIndexed = indexedPaths.filter((p) => getIndexWaveForPath(p) === 'hold')
const missingFromIndexed = indexedPaths.filter((p) => !allPaths.includes(p))

const checks = {
  allUrlCount: allPaths.length,
  indexedWavesUrlCount: indexedPaths.length,
  holdPathCount: holdPaths.length,
  expectedHoldCount: HOLD_INDUSTRY_SLUGS.length + HOLD_CITY_SLUGS.length,
  holdExcludedFromIndexed: holdInIndexed.length === 0,
  wave2IndustryCount: indexedPaths.filter((p) =>
    WAVE_2_INDUSTRY_SLUGS.some((s) => p === `/industries/${s}`)
  ).length,
  wave2CityCount: indexedPaths.filter((p) =>
    WAVE_2_CITY_SLUGS.some((s) => p === `/seo-services/${s}`)
  ).length,
  expectedWave2Industries: WAVE_2_INDUSTRY_SLUGS.length,
  expectedWave2Cities: WAVE_2_CITY_SLUGS.length,
  noPhantomIndexedPaths: missingFromIndexed.length === 0,
  status: 'PASS',
}

if (
  !checks.holdExcludedFromIndexed ||
  checks.holdPathCount !== checks.expectedHoldCount ||
  checks.wave2IndustryCount !== checks.expectedWave2Industries ||
  checks.wave2CityCount !== checks.expectedWave2Cities ||
  !checks.noPhantomIndexedPaths
) {
  checks.status = 'FAIL'
}

const md = [
  '# Sitemap Wave QA Report',
  '',
  `**Generated:** ${new Date().toISOString()}`,
  `**Status:** ${checks.status}`,
  '',
  '| Metric | Value |',
  '|--------|-------|',
  `| All-mode URLs | ${checks.allUrlCount} |`,
  `| Indexed-waves URLs | ${checks.indexedWavesUrlCount} |`,
  `| Hold paths (all mode) | ${checks.holdPathCount} |`,
  `| Hold in indexed_waves sitemap | ${holdInIndexed.length} |`,
  `| Wave 2 industries in indexed | ${checks.wave2IndustryCount} |`,
  `| Wave 2 cities in indexed | ${checks.wave2CityCount} |`,
  '',
]

writeFileSync(join(root, 'seo-audit', 'sitemap-wave-qa.json'), JSON.stringify(checks, null, 2))
writeFileSync(join(root, 'seo-audit', 'sitemap-wave-qa.md'), md.join('\n'))

console.log('SITEMAP_WAVE_QA', checks.status)
console.log('ALL_URLS', checks.allUrlCount)
console.log('INDEXED_WAVES_URLS', checks.indexedWavesUrlCount)
console.log('HOLD_PATHS', checks.holdPathCount)

if (checks.status === 'FAIL') process.exit(1)
