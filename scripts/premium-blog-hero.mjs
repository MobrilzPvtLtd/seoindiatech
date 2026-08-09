/**
 * Premium white featured-image SVG (reference style).
 */
import { BLOG_HERO_CONFIG } from './blog-hero-config.mjs'

const C = {
  primary: '#6B2E88',
  secondary: '#2A255D',
  accent: '#A4DDFB',
  highlight: '#E8820C',
  white: '#FFFFFF',
  bg: '#F7F8FC',
  text: '#2A255D',
  muted: '#5C6478',
  map: '#C5D9F0',
  shadow: 'rgba(42,37,93,0.12)',
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function logoSvg(x, y) {
  return `<g transform="translate(${x},${y})">
    <text x="0" y="28" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="800" fill="${C.secondary}">SEO</text>
    <text x="72" y="28" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="800" fill="${C.primary}">India</text>
    <text x="168" y="28" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="800" fill="${C.secondary}">tech</text>
    <circle cx="118" cy="20" r="5" fill="${C.highlight}"/>
    <path d="M122 14 L128 8 L134 14" fill="none" stroke="${C.highlight}" stroke-width="2" stroke-linecap="round"/>
  </g>`
}

function titleSvg(parts, startY = 130) {
  let y = startY
  let out = ''
  parts.forEach((part) => {
    const size = part.text.length > 22 ? 34 : 38
    out += `<text x="48" y="${y}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="800" fill="${part.highlight ? C.highlight : C.secondary}">${esc(part.text)}</text>`
    y += size + 10
  })
  return out
}

function calloutBox(x, y, label, id) {
  const w = Math.min(200, label.length * 7 + 36)
  return `<g>
    <rect x="${x}" y="${y}" width="${w}" height="34" rx="17" fill="${C.white}" stroke="${C.accent}" stroke-width="1.5" filter="url(#softShadow)"/>
    <circle cx="${x + 16}" cy="${y + 17}" r="6" fill="${C.primary}" opacity="0.85"/>
    <text x="${x + 28}" y="${y + 22}" font-family="Arial,sans-serif" font-size="11" font-weight="600" fill="${C.text}">${esc(label)}</text>
  </g>`
}

function sceneEurope() {
  return `<g opacity="0.9">
    <ellipse cx="900" cy="300" rx="200" ry="170" fill="${C.map}"/>
    <circle cx="900" cy="300" r="55" fill="none" stroke="${C.highlight}" stroke-width="2" stroke-dasharray="4 6"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
      const a = (i * Math.PI) / 6 - Math.PI / 2
      const cx = 900 + Math.cos(a) * 42
      const cy = 300 + Math.sin(a) * 42
      return `<circle cx="${cx}" cy="${cy}" r="5" fill="${C.highlight}"/>`
    }).join('')}
    <rect x="780" y="360" width="240" height="130" rx="12" fill="${C.white}" stroke="${C.secondary}" stroke-width="2"/>
    <rect x="800" y="385" width="160" height="22" rx="11" fill="#EEF2FF"/>
    <circle cx="815" cy="396" r="6" fill="${C.primary}"/>
    <text x="830" y="400" font-family="Arial" font-size="12" fill="${C.muted}">SEO</text>
    <polyline points="860,450 920,410 980,430" fill="none" stroke="${C.primary}" stroke-width="4" stroke-linecap="round"/>
    <rect x="1000" y="200" width="70" height="28" rx="8" fill="${C.highlight}"/>
    <rect x="1010" y="240" width="50" height="70" rx="6" fill="${C.primary}" opacity="0.7"/>
    <rect x="1065" y="260" width="50" height="50" rx="6" fill="${C.accent}"/>
    <circle cx="760" cy="250" r="45" fill="none" stroke="${C.primary}" stroke-width="8"/>
    <line x1="795" y1="285" x2="835" y2="325" stroke="${C.primary}" stroke-width="8" stroke-linecap="round"/>
  </g>`
}

function sceneGeneric(type) {
  const icons = {
    versus: 'AI vs SEO',
    local: 'Local Maps',
    'ai-serp': 'AI Overview',
    warning: '100 Fixes',
    healthcare: 'Healthcare',
    legal: 'Legal SEO',
    agency: 'Agency Pick',
    scope: 'Local / Global',
    gbp: 'GBP Profile',
    trust: 'E-E-A-T',
    geo: 'GEO / AI',
    chat: 'ChatGPT',
    roi: 'ROI Track',
    technical: 'Tech Audit',
    vitals: 'Web Vitals',
    content: 'Content Funnel',
    links: 'Link Building',
    smallbiz: 'Small Business',
    europe: 'EU Markets',
  }
  const label = icons[type] || 'SEO Guide'
  return `<g>
    <rect x="720" y="180" width="380" height="280" rx="20" fill="${C.map}" opacity="0.55"/>
    <rect x="760" y="220" width="300" height="200" rx="16" fill="${C.white}" stroke="${C.primary}" stroke-width="2"/>
    <text x="910" y="330" text-anchor="middle" font-family="Arial" font-size="22" font-weight="800" fill="${C.primary}">${esc(label)}</text>
    <polyline points="790,380 870,300 950,340 1020,260" fill="none" stroke="${C.highlight}" stroke-width="5" stroke-linecap="round"/>
    <circle cx="1020" cy="260" r="28" fill="${C.primary}"/>
    <path d="M1008 260 L1018 270 L1034 248" fill="none" stroke="${C.white}" stroke-width="4" stroke-linecap="round"/>
  </g>`
}

function footerIcons() {
  return `<g transform="translate(48,560)">
    <text x="0" y="0" font-family="Arial" font-size="12" font-weight="700" fill="${C.highlight}">&#128269; Search</text>
    <text x="110" y="0" font-family="Arial" font-size="12" font-weight="700" fill="${C.primary}">&#128200; Optimize</text>
    <text x="230" y="0" font-family="Arial" font-size="12" font-weight="700" fill="${C.highlight}">&#8593; Grow</text>
    <rect x="95" y="-14" width="1" height="18" fill="${C.accent}"/>
    <rect x="215" y="-14" width="1" height="18" fill="${C.accent}"/>
  </g>`
}

const CALLOUT_POSITIONS = [
  [600, 55],
  [780, 45],
  [960, 75],
  [1000, 175],
  [950, 285],
  [780, 340],
  [610, 300],
]

export function premiumFeaturedHero(slug, entry) {
  const config = BLOG_HERO_CONFIG[slug] || {
    tagline: entry.primaryKeyword,
    year: '2026',
    titleParts: [{ text: entry.title.slice(0, 40), highlight: true }],
    callouts: ['SEO Strategy', 'Content', 'Technical SEO', 'Local SEO', 'Analytics'],
    scene: 'generic',
  }

  const callouts = (config.callouts || []).slice(0, 7)
  const calloutSvg = callouts
    .map((label, i) => {
      const pos = CALLOUT_POSITIONS[i] || [600 + (i % 3) * 120, 80 + Math.floor(i / 3) * 90]
      return calloutBox(pos[0], pos[1], label, `${slug}-${i}`)
    })
    .join('')

  const scene = config.scene === 'europe' ? sceneEurope() : sceneGeneric(config.scene)

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(entry.title)}">
  <defs>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="${C.shadow}"/>
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${C.bg}"/>
      <stop offset="100%" stop-color="#EEF1FA"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  <rect x="0" y="520" width="520" height="110" fill="${C.accent}" opacity="0.12"/>
  <path d="M0 520 Q120 500 240 520 T480 520 L480 630 L0 630 Z" fill="${C.accent}" opacity="0.18"/>

  ${logoSvg(48, 42)}
  ${titleSvg(config.titleParts)}
  <text x="48" y="${130 + config.titleParts.length * 48 + 20}" font-family="Arial,sans-serif" font-size="16" font-weight="600" fill="${C.muted}">${esc(config.tagline)}</text>
  ${footerIcons()}

  <rect x="540" y="0" width="660" height="630" fill="${C.white}" opacity="0.35"/>
  ${scene}
  ${calloutSvg}

  ${config.year ? `<circle cx="1120" cy="560" r="42" fill="${C.secondary}"/><text x="1120" y="568" text-anchor="middle" font-family="Arial" font-size="18" font-weight="800" fill="${C.white}">${esc(config.year)}</text>` : ''}
</svg>`
}
