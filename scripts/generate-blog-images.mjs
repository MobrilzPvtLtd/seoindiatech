/**
 * Generates topic-relevant branded illustrations for blog posts and services.
 * Run: npm run generate-images
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { BLOG_CATALOG } from '../utils/blog/premium/blogCatalog.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const blogDir = join(root, 'public', 'images', 'blog')
const serviceDir = join(root, 'public', 'images', 'services', 'heroes')
mkdirSync(blogDir, { recursive: true })
mkdirSync(serviceDir, { recursive: true })

const BRAND = {
  primary: '#6B2E88',
  secondary: '#2A255D',
  accent: '#A4DDFB',
  white: '#ffffff',
  muted: 'rgba(255,255,255,0.65)',
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrap(id, title, subtitle, body, accent = BRAND.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.secondary}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <filter id="shadow-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg-${id})"/>
  <circle cx="1040" cy="90" r="70" fill="${BRAND.accent}" opacity="0.18"/>
  <circle cx="120" cy="520" r="100" fill="${BRAND.accent}" opacity="0.12"/>
  ${body}
  <text x="72" y="500" fill="${BRAND.white}" font-family="Arial,Helvetica,sans-serif" font-size="38" font-weight="700">${esc(title.slice(0, 52))}</text>
  <text x="72" y="548" fill="${BRAND.accent}" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="600">${esc(subtitle)}</text>
  <text x="72" y="590" fill="${BRAND.muted}" font-family="Arial,Helvetica,sans-serif" font-size="16">SEO India Tech</text>
</svg>`
}

function card(x, y, w, h, label, value, color = BRAND.accent) {
  return `<g filter="url(#shadow-card)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)"/>
    <text x="${x + 20}" y="${y + 36}" fill="${color}" font-family="Arial,sans-serif" font-size="28" font-weight="700">${esc(value)}</text>
    <text x="${x + 20}" y="${y + 62}" fill="${BRAND.muted}" font-family="Arial,sans-serif" font-size="14">${esc(label)}</text>
  </g>`
}

const ICONS = {
  chart: `<g transform="translate(720,120)">
    <rect x="0" y="120" width="40" height="80" rx="6" fill="${BRAND.accent}" opacity="0.9"/>
    <rect x="55" y="80" width="40" height="120" rx="6" fill="${BRAND.white}" opacity="0.85"/>
    <rect x="110" y="50" width="40" height="150" rx="6" fill="${BRAND.accent}"/>
    <rect x="165" y="30" width="40" height="170" rx="6" fill="${BRAND.white}" opacity="0.9"/>
    <polyline points="10,40 60,70 115,45 175,15 220,5" fill="none" stroke="${BRAND.accent}" stroke-width="4" stroke-linecap="round"/>
  </g>`,
  mapPin: `<g transform="translate(760,130)">
    <path d="M100 20 C60 20 35 55 35 90 C35 140 100 210 100 210 C100 210 165 140 165 90 C165 55 140 20 100 20 Z" fill="${BRAND.accent}"/>
    <circle cx="100" cy="88" r="28" fill="${BRAND.secondary}"/>
    <circle cx="100" cy="88" r="14" fill="${BRAND.white}"/>
  </g>`,
  aiBrain: `<g transform="translate(740,110)">
    <circle cx="110" cy="110" r="95" fill="rgba(255,255,255,0.12)" stroke="${BRAND.accent}" stroke-width="3"/>
    <path d="M70 110 Q110 60 150 110 Q110 160 70 110" fill="none" stroke="${BRAND.accent}" stroke-width="4"/>
    <circle cx="90" cy="95" r="8" fill="${BRAND.accent}"/><circle cx="130" cy="95" r="8" fill="${BRAND.accent}"/>
    <path d="M85 130 Q110 145 135 130" fill="none" stroke="${BRAND.white}" stroke-width="3" stroke-linecap="round"/>
    <rect x="175" y="40" width="90" height="50" rx="10" fill="rgba(164,221,251,0.25)" stroke="${BRAND.accent}"/>
    <text x="188" y="72" fill="${BRAND.white}" font-size="14" font-family="Arial">AI</text>
  </g>`,
  search: `<g transform="translate(770,140)">
    <circle cx="85" cy="85" r="60" fill="none" stroke="${BRAND.white}" stroke-width="10"/>
    <line x1="128" y1="128" x2="175" y2="175" stroke="${BRAND.accent}" stroke-width="12" stroke-linecap="round"/>
    <rect x="20" y="200" width="220" height="14" rx="7" fill="rgba(255,255,255,0.25)"/>
    <rect x="20" y="230" width="180" height="14" rx="7" fill="rgba(255,255,255,0.18)"/>
  </g>`,
  globe: `<g transform="translate(750,120)">
    <circle cx="100" cy="100" r="85" fill="none" stroke="${BRAND.accent}" stroke-width="4"/>
    <ellipse cx="100" cy="100" rx="35" ry="85" fill="none" stroke="${BRAND.white}" stroke-width="2" opacity="0.7"/>
    <line x1="15" y1="100" x2="185" y2="100" stroke="${BRAND.white}" stroke-width="2" opacity="0.7"/>
    <line x1="100" y1="15" x2="100" y2="185" stroke="${BRAND.white}" stroke-width="2" opacity="0.5"/>
  </g>`,
  medical: `<g transform="translate(760,130)">
    <rect x="60" y="40" width="80" height="140" rx="12" fill="rgba(255,255,255,0.15)"/>
    <rect x="35" y="85" width="130" height="50" rx="8" fill="${BRAND.accent}"/>
    <circle cx="160" cy="60" r="24" fill="${BRAND.accent}"/>
    <path d="M148 60 H172 M160 48 V72" stroke="${BRAND.secondary}" stroke-width="5" stroke-linecap="round"/>
  </g>`,
  legal: `<g transform="translate(760,130)">
    <rect x="40" y="60" width="140" height="18" rx="4" fill="${BRAND.accent}"/>
    <rect x="70" y="78" width="12" height="100" fill="${BRAND.white}" opacity="0.85"/>
    <rect x="40" y="170" width="80" height="14" rx="4" fill="${BRAND.white}" opacity="0.7"/>
    <rect x="90" y="100" width="90" height="110" rx="8" fill="rgba(255,255,255,0.12)" stroke="${BRAND.accent}"/>
    <line x1="105" y1="130" x2="165" y2="130" stroke="${BRAND.accent}" stroke-width="3"/>
    <line x1="105" y1="155" x2="150" y2="155" stroke="${BRAND.white}" stroke-width="3" opacity="0.6"/>
  </g>`,
  stars: `<g transform="translate(760,130)">
    <polygon points="100,30 115,75 165,75 125,105 140,150 100,120 60,150 75,105 35,75 85,75" fill="${BRAND.accent}"/>
    <rect x="30" y="180" width="140" height="50" rx="10" fill="rgba(255,255,255,0.12)"/>
    <text x="52" y="212" fill="${BRAND.white}" font-size="16" font-family="Arial">4.9 Rating</text>
  </g>`,
  gbp: `<g transform="translate(740,120)">
    <rect x="30" y="30" width="200" height="170" rx="16" fill="rgba(255,255,255,0.14)" stroke="${BRAND.accent}"/>
    <circle cx="70" cy="75" r="22" fill="${BRAND.accent}"/>
    <rect x="105" y="58" width="100" height="12" rx="4" fill="${BRAND.white}" opacity="0.8"/>
    <rect x="105" y="80" width="70" height="10" rx="4" fill="${BRAND.white}" opacity="0.5"/>
    <text x="50" y="140" fill="#FFD700" font-size="22">★★★★★</text>
    <rect x="50" y="155" width="160" height="28" rx="8" fill="${BRAND.accent}"/>
    <text x="78" y="175" fill="${BRAND.secondary}" font-size="13" font-weight="700">Directions</text>
  </g>`,
  trust: `<g transform="translate(750,130)">
    <path d="M100 30 L150 50 V95 C150 130 100 165 100 165 C100 165 50 130 50 95 V50 Z" fill="rgba(255,255,255,0.15)" stroke="${BRAND.accent}" stroke-width="3"/>
    <path d="M80 95 L95 110 L125 75" fill="none" stroke="${BRAND.accent}" stroke-width="6" stroke-linecap="round"/>
  </g>`,
  chat: `<g transform="translate(740,120)">
    <rect x="20" y="40" width="180" height="90" rx="14" fill="rgba(255,255,255,0.14)"/>
    <rect x="50" y="150" width="160" height="70" rx="14" fill="rgba(164,221,251,0.2)" stroke="${BRAND.accent}"/>
    <circle cx="55" cy="75" r="8" fill="${BRAND.accent}"/><circle cx="85" cy="75" r="8" fill="${BRAND.accent}"/><circle cx="115" cy="75" r="8" fill="${BRAND.accent}"/>
    <text x="70" y="192" fill="${BRAND.white}" font-size="14" font-family="Arial">ChatGPT SEO</text>
  </g>`,
  roi: `<g transform="translate(740,120)">
    <rect x="40" y="50" width="170" height="120" rx="12" fill="rgba(255,255,255,0.12)"/>
    <text x="75" y="110" fill="${BRAND.accent}" font-size="42" font-weight="700">420%</text>
    <text x="72" y="140" fill="${BRAND.muted}" font-size="14">SEO ROI</text>
    <polyline points="240,180 280,140 310,155 350,90" fill="none" stroke="${BRAND.accent}" stroke-width="5" stroke-linecap="round"/>
  </g>`,
  gear: `<g transform="translate(760,140)">
    <circle cx="100" cy="100" r="45" fill="none" stroke="${BRAND.accent}" stroke-width="14" stroke-dasharray="20 12"/>
    <circle cx="100" cy="100" r="18" fill="${BRAND.white}"/>
    <text x="55" y="190" fill="${BRAND.muted}" font-family="monospace" font-size="14">&lt;/&gt; audit</text>
  </g>`,
  speed: `<g transform="translate(760,130)">
    <circle cx="100" cy="110" r="80" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="12"/>
    <path d="M100 110 L100 50" stroke="${BRAND.accent}" stroke-width="6" stroke-linecap="round"/>
    <path d="M100 110 L150 130" stroke="${BRAND.white}" stroke-width="6" stroke-linecap="round"/>
    <text x="72" y="210" fill="${BRAND.accent}" font-size="18" font-weight="700">LCP 1.8s</text>
  </g>`,
  funnel: `<g transform="translate(760,120)">
    <polygon points="40,40 180,40 150,95 70,95" fill="${BRAND.accent}" opacity="0.8"/>
    <polygon points="70,105 150,105 130,160 90,160" fill="${BRAND.white}" opacity="0.7"/>
    <polygon points="90,170 130,170 115,210 105,210" fill="${BRAND.accent}"/>
  </g>`,
  links: `<g transform="translate(760,140)">
    <ellipse cx="60" cy="90" rx="35" ry="22" fill="none" stroke="${BRAND.accent}" stroke-width="8"/>
    <ellipse cx="140" cy="90" rx="35" ry="22" fill="none" stroke="${BRAND.white}" stroke-width="8"/>
    <rect x="78" y="78" width="44" height="24" fill="${BRAND.secondary}"/>
  </g>`,
  store: `<g transform="translate(760,130)">
    <rect x="50" y="80" width="100" height="90" fill="rgba(255,255,255,0.15)"/>
    <polygon points="50,80 100,45 150,80" fill="${BRAND.accent}"/>
    <rect x="80" y="120" width="40" height="50" fill="${BRAND.secondary}"/>
    <rect x="60" y="100" width="20" height="20" fill="${BRAND.accent}"/>
  </g>`,
  warning: `<g transform="translate(760,130)">
    <polygon points="100,35 165,165 35,165" fill="rgba(255,193,7,0.25)" stroke="#FFC107" stroke-width="4"/>
    <text x="92" y="145" fill="#FFC107" font-size="48" font-weight="700">!</text>
  </g>`,
  compare: `<g transform="translate(700,120)">
    <rect x="0" y="0" width="80" height="160" rx="10" fill="${BRAND.accent}" opacity="0.7"/>
    <rect x="95" y="30" width="80" height="130" rx="10" fill="${BRAND.white}" opacity="0.75"/>
    <rect x="190" y="60" width="80" height="100" rx="10" fill="${BRAND.accent}"/>
    <text x="18" y="185" fill="${BRAND.muted}" font-size="12">Local</text>
    <text x="108" y="185" fill="${BRAND.muted}" font-size="12">National</text>
    <text x="188" y="185" fill="${BRAND.muted}" font-size="12">Global</text>
  </g>`,
}

const BLOG_THEMES = {
  'seo-trends-european-businesses-2026': { icon: 'globe', accent: '#6B2E88', stat: ['72%', 'EU research online'], process: 'Audit markets', compare: 'AI vs classic' },
  'ai-seo-vs-traditional-seo-2026': { icon: 'aiBrain', accent: '#5B2D8E', stat: ['2x', 'AI citation reach'], process: 'Blend strategies', compare: 'AI vs SEO' },
  'local-seo-checklist-multi-location-europe': { icon: 'mapPin', accent: '#6B2E88', stat: ['3.2x', 'Local lead lift'], process: 'GBP + citations', compare: 'Map vs organic' },
  'google-ai-overviews-changing-business-seo': { icon: 'aiBrain', accent: '#4A90D9', stat: ['41%', 'AI overview growth'], process: 'Answer-first', compare: 'Cited vs ranked' },
  '100-seo-mistakes-costing-business-leads': { icon: 'warning', accent: '#8E3B6B', stat: ['100', 'Common mistakes'], process: 'Fix by priority', compare: 'Fix vs ignore' },
  'international-seo-guide-european-companies': { icon: 'globe', accent: '#2A255D', stat: ['12+', 'EU markets'], process: 'Hreflang setup', compare: 'ccTLD vs subfolder' },
  'seo-healthcare-businesses-europe': { icon: 'medical', accent: '#6B2E88', stat: ['YMYL', 'Trust signals'], process: 'EEAT + local', compare: 'Clinic vs hospital' },
  'seo-law-firms-complete-guide': { icon: 'legal', accent: '#2A255D', stat: ['85%', 'Call growth'], process: 'Practice areas', compare: 'PI vs corporate' },
  'choose-best-seo-agency-europe': { icon: 'stars', accent: '#6B2E88', stat: ['4.9', 'Client rating'], process: 'Vet partners', compare: 'Agency vs in-house' },
  'local-vs-national-vs-international-seo': { icon: 'compare', accent: '#6B2E88', stat: ['3', 'SEO scopes'], process: 'Pick scope', compare: 'Local/national/global' },
  'google-business-profile-optimization-guide': { icon: 'gbp', accent: '#4285F4', stat: ['140%', 'Direction requests'], process: 'GBP optimize', compare: 'Before vs after' },
  'complete-eeat-guide-business-websites': { icon: 'trust', accent: '#6B2E88', stat: ['EEAT', 'Trust framework'], process: 'Author + proof', compare: 'Thin vs expert' },
  'geo-generative-engine-optimization-guide': { icon: 'chat', accent: '#5B2D8E', stat: ['GEO', 'AI citations'], process: 'Entity + FAQ', compare: 'GEO vs SEO' },
  'chatgpt-seo-ai-search-organic-traffic': { icon: 'chat', accent: '#10A37F', stat: ['45%', 'Branded search up'], process: 'AEO content', compare: 'AI vs Google' },
  'seo-roi-calculator-measure-success': { icon: 'roi', accent: '#6B2E88', stat: ['420%', 'Sample ROI'], process: 'Track revenue', compare: 'SEO vs PPC' },
  'technical-seo-checklist-enterprise-websites': { icon: 'gear', accent: '#2A255D', stat: ['2M', 'Pages indexed'], process: 'Crawl audit', compare: 'Fix vs defer' },
  'core-web-vitals-optimization-guide': { icon: 'speed', accent: '#6B2E88', stat: ['1.8s', 'Target LCP'], process: 'Speed fixes', compare: 'Fast vs slow' },
  'content-marketing-strategy-qualified-leads': { icon: 'funnel', accent: '#6B2E88', stat: ['73%', 'SQL growth'], process: 'Intent map', compare: 'Blog vs case study' },
  'link-building-guide-2026': { icon: 'links', accent: '#2A255D', stat: ['85', 'Editorial links'], process: 'Digital PR', compare: 'Earned vs paid' },
  'seo-checklist-small-businesses-europe': { icon: 'store', accent: '#6B2E88', stat: ['90', 'Day checklist'], process: 'GBP first', compare: 'SMB vs enterprise' },
}

function heroSvg(slug, entry) {
  const theme = BLOG_THEMES[slug] || { icon: 'search', accent: BRAND.primary }
  const body = `${ICONS[theme.icon] || ICONS.search}
    <text x="72" y="100" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2">BLOG GUIDE</text>
    <rect x="72" y="120" width="120" height="4" rx="2" fill="${BRAND.accent}"/>`
  return wrap(`hero-${slug}`, entry.title, entry.cluster, body, theme.accent)
}

function statsSvg(slug, entry) {
  const theme = BLOG_THEMES[slug] || { stat: ['68%', 'Organic traffic'], accent: BRAND.primary }
  const body = `${ICONS.chart}
    ${card(72, 150, 200, 90, theme.stat[1] || 'Key metric', theme.stat[0] || '68%', BRAND.accent)}
    ${card(290, 180, 180, 80, 'Organic share', '53%', BRAND.white)}`
  return wrap(`stats-${slug}`, 'Key Statistics', entry.primaryKeyword, body, theme.accent || BRAND.primary)
}

function processSvg(slug, entry) {
  const theme = BLOG_THEMES[slug] || { process: 'Step-by-step', accent: BRAND.primary }
  const steps = ['Audit', 'Plan', 'Execute', 'Measure']
  const stepRects = steps
    .map((s, i) => {
      const x = 72 + i * 155
      return `<g><rect x="${x}" y="170" width="130" height="70" rx="12" fill="rgba(255,255,255,0.12)" stroke="${BRAND.accent}"/>
      <text x="${x + 20}" y="205" fill="${BRAND.white}" font-size="14" font-weight="700">${i + 1}. ${s}</text>
      ${i < 3 ? `<line x1="${x + 130}" y1="205" x2="${x + 155}" y2="205" stroke="${BRAND.accent}" stroke-width="3"/>` : ''}</g>`
    })
    .join('')
  const body = `${stepRects}<text x="72" y="140" fill="${BRAND.accent}" font-size="16">${esc(theme.process)}</text>`
  return wrap(`process-${slug}`, 'Process', theme.process, body, theme.accent || BRAND.primary)
}

function comparisonSvg(slug, entry) {
  const theme = BLOG_THEMES[slug] || { compare: 'What works', accent: BRAND.primary }
  const body = `${ICONS.compare || ICONS.chart}
    <rect x="72" y="150" width="280" height="120" rx="12" fill="rgba(76,175,80,0.2)" stroke="#4CAF50"/>
    <text x="92" y="190" fill="#4CAF50" font-size="16" font-weight="700">Works</text>
    <rect x="380" y="150" width="280" height="120" rx="12" fill="rgba(244,67,54,0.15)" stroke="#F44336"/>
    <text x="400" y="190" fill="#F44336" font-size="16" font-weight="700">Fails</text>
    <text x="72" y="300" fill="${BRAND.muted}" font-size="15">${esc(theme.compare)}</text>`
  return wrap(`compare-${slug}`, 'Comparison', theme.compare, body, theme.accent || BRAND.primary)
}

function checklistSvg(slug, entry) {
  const items = ['Technical audit', 'Content depth', 'Internal links', 'Schema markup']
  const checks = items
    .map(
      (item, i) =>
        `<g transform="translate(72,${150 + i * 42})"><rect width="22" height="22" rx="4" fill="${BRAND.accent}"/>
    <path d="M5 11 L9 16 L17 6" fill="none" stroke="${BRAND.secondary}" stroke-width="3"/>
    <text x="34" y="17" fill="${BRAND.white}" font-size="16">${esc(item)}</text></g>`
    )
    .join('')
  const body = `${checks}${ICONS.search}`
  return wrap(`checklist-${slug}`, 'Checklist', entry.primaryKeyword, body, BLOG_THEMES[slug]?.accent || BRAND.primary)
}

function faqSvg(slug, entry) {
  const body = `<g transform="translate(720,140)">
    <rect x="0" y="0" width="260" height="55" rx="10" fill="rgba(255,255,255,0.12)"/>
    <text x="18" y="34" fill="${BRAND.white}" font-size="15">What is ${esc(entry.primaryKeyword.slice(0, 28))}?</text>
    <rect x="0" y="70" width="260" height="55" rx="10" fill="rgba(164,221,251,0.15)" stroke="${BRAND.accent}"/>
    <text x="18" y="104" fill="${BRAND.accent}" font-size="15">How long does it take?</text>
    <rect x="0" y="140" width="260" height="55" rx="10" fill="rgba(255,255,255,0.12)"/>
    <text x="18" y="174" fill="${BRAND.white}" font-size="15">Best practices for 2026?</text>
  </g>`
  return wrap(`faq-${slug}`, 'FAQ', 'Common questions answered', body, BLOG_THEMES[slug]?.accent || BRAND.primary)
}

const SERVICE_THEMES = {
  'local-seo-service': { icon: 'mapPin', label: 'Local SEO', accent: '#6B2E88' },
  'ai-seo': { icon: 'aiBrain', label: 'AI SEO', accent: '#5B2D8E' },
  'gbp-optimization': { icon: 'gbp', label: 'GBP Optimization', accent: '#4285F4' },
  'small-business-seo': { icon: 'store', label: 'Small Business SEO', accent: '#6B2E88' },
  'e-commerce-seo': { icon: 'chart', label: 'E-Commerce SEO', accent: '#6B2E88' },
  'app-store-optimization': { icon: 'search', label: 'App Store Optimization', accent: '#2A255D' },
  'generative-engine-optimization': { icon: 'chat', label: 'GEO', accent: '#5B2D8E' },
  'answer-engine-optimization': { icon: 'aiBrain', label: 'AEO', accent: '#10A37F' },
  'digital-branding': { icon: 'trust', label: 'Digital Branding', accent: '#6B2E88' },
  'content-marketing': { icon: 'funnel', label: 'Content Marketing', accent: '#6B2E88' },
  'online-reputation-management': { icon: 'stars', label: 'ORM', accent: '#2A255D' },
  'social-media-optimization': { icon: 'chart', label: 'SMO', accent: '#6B2E88' },
  'ppc-advertising': { icon: 'roi', label: 'PPC Advertising', accent: '#6B2E88' },
  'pay-per-click': { icon: 'roi', label: 'Pay Per Click', accent: '#6B2E88' },
  'ui-ux-design': { icon: 'speed', label: 'UI/UX Design', accent: '#6B2E88' },
  'social-media-marketing': { icon: 'funnel', label: 'Social Media Marketing', accent: '#6B2E88' },
}

function serviceHeroSvg(slug, theme) {
  const body = `${ICONS[theme.icon] || ICONS.search}
    <text x="72" y="100" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2">SERVICE</text>`
  return wrap(`service-${slug}`, theme.label, 'SEO India Tech', body, theme.accent)
}

let count = 0

BLOG_CATALOG.forEach((entry) => {
  const slug = entry.slug
  const files = [
    [entry.image.split('/').pop(), () => heroSvg(slug, entry)],
    [`${slug}-stats.svg`, () => statsSvg(slug, entry)],
    [`${slug}-process.svg`, () => processSvg(slug, entry)],
    [`${slug}-comparison.svg`, () => comparisonSvg(slug, entry)],
    [`${slug}-checklist.svg`, () => checklistSvg(slug, entry)],
    [`${slug}-faq.svg`, () => faqSvg(slug, entry)],
  ]
  files.forEach(([name, fn]) => {
    writeFileSync(join(blogDir, name), fn())
    count++
  })
})

Object.entries(SERVICE_THEMES).forEach(([slug, theme]) => {
  writeFileSync(join(serviceDir, `${slug}.svg`), serviceHeroSvg(slug, theme))
  count++
})

const HUB_THEMES = {
  seo: { icon: 'search', label: 'SEO Services', accent: '#6B2E88' },
  'digital-marketing': { icon: 'funnel', label: 'Digital Marketing', accent: '#6B2E88' },
  'paid-advertising': { icon: 'roi', label: 'Paid Advertising', accent: '#2A255D' },
  'design-and-development': { icon: 'speed', label: 'Design & Development', accent: '#6B2E88' },
}

Object.entries(HUB_THEMES).forEach(([slug, theme]) => {
  writeFileSync(join(serviceDir, `hub-${slug}.svg`), serviceHeroSvg(`hub-${slug}`, theme))
  count++
})

console.log(`Generated ${count} topic-relevant illustrations`)
console.log(`  Blog: ${blogDir}`)
console.log(`  Services: ${serviceDir}`)
