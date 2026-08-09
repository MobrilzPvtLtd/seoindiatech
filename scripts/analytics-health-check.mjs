#!/usr/bin/env node
/**
 * Analytics health check — static codebase validation.
 * Run: npm run seo:analytics-health
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const checks = []
let failed = 0

function pass(name, detail) {
  checks.push({ name, status: 'PASS', detail })
}

function fail(name, detail) {
  checks.push({ name, status: 'FAIL', detail })
  failed++
}

function warn(name, detail) {
  checks.push({ name, status: 'WARN', detail })
}

function read(rel) {
  return readFileSync(join(root, rel), 'utf8')
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git', 'submissions'].includes(entry.name)) continue
      walk(full, files)
    } else if (/\.(js|jsx|ts|tsx|mjs)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

// GTM container ID consistency
const gtmMapSrc = read('utils/analytics/gtmGa4Map.js')
const gtmInDeferred = read('component/tracking/DeferredGtm.js')
const gtmInDoc = read('pages/_document.js')
const gtmMatch = gtmMapSrc.match(/GTM-[A-Z0-9]+/)
const gtmId = gtmMatch ? gtmMatch[0] : null

if (
  gtmId &&
  gtmInDoc.includes('GTM_ID') &&
  gtmInDeferred.includes('getGtmContainerId')
) {
  pass('GTM container ID', `Consistent: ${gtmId} (via gtmGa4Map.js)`)
} else if (gtmId && gtmInDoc.includes(gtmId)) {
  pass('GTM container ID', `Consistent: ${gtmId}`)
} else {
  fail('GTM container ID', 'Mismatch between gtmGa4Map.js, DeferredGtm.js and _document.js')
}

// No duplicate direct GA4 gtag
const allSource = walk(join(root, 'component')).concat(walk(join(root, 'pages'))).map((f) => readFileSync(f, 'utf8')).join('\n')
const gtagHits = (allSource.match(/gtag\s*\(/g) || []).length
const ga4Direct = /G-[A-Z0-9]{6,}/.test(allSource) && !allSource.includes('// G-')
if (gtagHits > 0 || ga4Direct) {
  warn('Direct GA4', 'Direct gtag/GA4 ID found — verify no duplicate with GTM')
} else {
  pass('No duplicate GA4', 'GA4 managed via GTM only (no direct gtag in components/pages)')
}

// AnalyticsProvider
if (read('pages/_app.js').includes('AnalyticsProvider')) {
  pass('AnalyticsProvider', 'Mounted in _app.js')
} else {
  fail('AnalyticsProvider', 'Missing from _app.js')
}

// Event utilities
for (const f of ['utils/analytics/events.js', 'utils/analytics/pageType.js', 'utils/analytics/attribution.js']) {
  if (read(f)) pass(`File: ${f}`, 'Present')
  else fail(`File: ${f}`, 'Missing')
}

// Form tracking integration
const formFiles = [
  'component/common/ContactFormSection.js',
  'component/contactus/Contactus.js',
  'component/home/HeroContactForm.js',
  'component/new-home/FAQAndContact.js',
  'component/SEO/Form.js',
  'component/UIUX/Form.js',
  'component/ppc-advertising/Form.js',
  'component/digital-branding/Form.js',
  'component/design-development/CTA.js',
]
let formsTracked = 0
for (const f of formFiles) {
  const c = read(f)
  if (c.includes('useFormTracking') && c.includes('trackSubmitSuccess')) formsTracked++
}
if (formsTracked === formFiles.length) {
  pass('Form tracking', `${formsTracked}/${formFiles.length} forms integrated`)
} else {
  fail('Form tracking', `Only ${formsTracked}/${formFiles.length} forms have useFormTracking`)
}

// PII safety — events must not push form field values as parameters
const eventsSrc = read('utils/analytics/events.js')
const pushBlocks = eventsSrc.match(/pushEvent\([^)]+\)/gs) || []
const piiInParams = pushBlocks.some((b) => /\b(fullName|message|streetAddress)\b/.test(b))
if (!piiInParams) {
  pass('PII safety', 'events.js pushEvent calls do not include form field parameters')
} else {
  fail('PII safety', 'events.js may push PII — review pushEvent parameters')
}

// Google Search Console verification
if (read('pages/_app.js').includes('google-site-verification')) {
  pass('GSC verification meta', 'Present in _app.js Head')
} else {
  fail('GSC verification meta', 'Missing')
}

// Bing Webmaster verification
const docSrc = read('pages/_document.js')
const envExample = existsSync(join(root, '.env.example')) ? read('.env.example') : ''
if (/msvalidate\.01/i.test(docSrc)) {
  pass('Bing verification', 'msvalidate.01 meta tag wired in _document.js')
} else if (envExample.includes('NEXT_PUBLIC_BING_SITE_VERIFICATION')) {
  pass('Bing verification', 'Env hook ready — set NEXT_PUBLIC_BING_SITE_VERIFICATION in Netlify after Bing Webmaster setup')
} else {
  warn('Bing verification', 'BING_ACCESS_REQUIRED — add verification code to environment')
}

// GA4 Measurement ID env hook
if (envExample.includes('NEXT_PUBLIC_GA4_MEASUREMENT_ID') && gtmMapSrc.includes('getGa4MeasurementId')) {
  const hasIdInEnv = typeof process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID === 'string' && /^G-/.test(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID)
  if (hasIdInEnv) {
    pass('GA4 Measurement ID', `Set via env: ${process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID}`)
  } else {
    pass('GA4 Measurement ID', 'Env hook ready — set NEXT_PUBLIC_GA4_MEASUREMENT_ID in Netlify; map tags in GTM per public/gtm-data-layer-spec.json')
  }
} else {
  warn('GA4 Measurement ID', 'GA4_MEASUREMENT_ID_REQUIRED')
}

// Meta Pixel / LinkedIn
if (/fbq\s*\(|facebook\.net\/en_US\/fbevents/i.test(allSource)) {
  warn('Meta Pixel', 'fbq detected — verify in GTM, not duplicated')
} else {
  pass('Meta Pixel', 'No direct fbq in source (may be GTM-managed)')
}
if (/linkedin\.com\/insight|_linkedin_partner_id/i.test(allSource)) {
  warn('LinkedIn Insight', 'Tag detected — verify GTM configuration')
} else {
  pass('LinkedIn Insight', 'No direct tag in source (may be GTM-managed)')
}

// Consent
if (/cookiebot|onetrust|consentmode|CookieConsent/i.test(allSource)) {
  pass('Consent management', 'Consent-related code detected')
} else {
  warn('Consent management', 'No consent banner detected — configure in GTM if required for EU traffic')
}

// GTM → GA4 mapping
const gtmMap = read('utils/analytics/gtmGa4Map.js')
if (gtmMap.includes('GTM_GA4_EVENT_MAP') && gtmMap.includes('analytics_config')) {
  pass('GTM→GA4 mapping', 'gtmGa4Map.js defines event map + analytics_config push')
} else {
  fail('GTM→GA4 mapping', 'Missing gtmGa4Map.js')
}

if (read('component/tracking/DeferredGtm.js').includes('pushAnalyticsConfig')) {
  pass('GTM analytics_config', 'DeferredGtm pushes analytics_config on load')
} else {
  fail('GTM analytics_config', 'DeferredGtm missing pushAnalyticsConfig')
}

const expectedEvents = ['page_view', 'form_submit', 'phone_click', 'whatsapp_click', 'cta_click']
const missingEvents = expectedEvents.filter((e) => !gtmMap.includes(`'${e}'`))
if (missingEvents.length === 0) {
  pass('GA4 conversion events', `All ${expectedEvents.length} core events mapped`)
} else {
  fail('GA4 conversion events', `Missing: ${missingEvents.join(', ')}`)
}

if (read('component/tracking/DeferredGtm.js').includes('dataLayer')) {
  pass('dataLayer init', 'DeferredGtm initializes dataLayer')
} else {
  fail('dataLayer init', 'Missing')
}

// CRM — email only, no analytics CRM leak
if (read('pages/api/submit-form.js').includes('sendContactFormEmail')) {
  pass('CRM/email integration', 'Form API sends email — preserved')
} else {
  warn('CRM/email integration', 'Review submit-form handler')
}

console.log('\nAnalytics Health Check\n' + '='.repeat(40))
for (const c of checks) {
  const icon = c.status === 'PASS' ? '✓' : c.status === 'WARN' ? '!' : '✗'
  console.log(`${icon} [${c.status}] ${c.name}: ${c.detail}`)
}
console.log(`\n${checks.length} checks — ${failed} failed, ${checks.filter((c) => c.status === 'WARN').length} warnings`)

if (failed > 0) process.exit(1)
