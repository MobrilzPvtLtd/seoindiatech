/**
 * Generates topic-relevant branded illustrations for blog posts and services.
 * Run: npm run generate-images
 */
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { BLOG_CATALOG } from '../utils/blog/premium/blogCatalog.js'
import { getBlogImageData } from '../utils/blog/premium/buildPremiumBlogPost.js'
import { premiumFeaturedHero } from './premium-blog-hero.mjs'

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
  green: '#4ADE80',
  red: '#F87171',
  gold: '#FBBF24',
}

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function wrapTitle(title, maxLen = 30) {
  const words = title.split(' ')
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxLen && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.slice(0, 3)
}

function wrap(id, title, subtitle, body, accent = BRAND.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(title)}">
  <defs>
    <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.secondary}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <filter id="shadow-${id}">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.22"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg-${id})"/>
  <circle cx="1080" cy="80" r="90" fill="${BRAND.accent}" opacity="0.1"/>
  <circle cx="90" cy="560" r="110" fill="${BRAND.accent}" opacity="0.08"/>
  ${body}
  <text x="64" y="590" fill="${BRAND.muted}" font-family="Arial,Helvetica,sans-serif" font-size="15">SEO India Tech</text>
  ${title ? `<text x="64" y="72" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="2">${esc(title.toUpperCase())}</text>` : ''}
  ${subtitle ? `<text x="64" y="560" fill="${BRAND.white}" font-family="Arial,sans-serif" font-size="18" font-weight="600" opacity="0.85">${esc(subtitle)}</text>` : ''}
</svg>`
}

function card(x, y, w, h, label, value, color = BRAND.accent) {
  return `<g filter="url(#shadow-card)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.22)"/>
    <text x="${x + 20}" y="${y + 38}" fill="${color}" font-family="Arial,sans-serif" font-size="30" font-weight="700">${esc(value)}</text>
    <text x="${x + 20}" y="${y + 64}" fill="${BRAND.muted}" font-family="Arial,sans-serif" font-size="14">${esc(label)}</text>
  </g>`
}

/** Topic-specific scene graphics (520x530 panel coordinates) */
const SCENES = {
  'seo-trends-european-businesses-2026': `
    <text x="260" y="70" text-anchor="middle" fill="${BRAND.accent}" font-size="56" font-weight="800">2026</text>
    <circle cx="260" cy="230" r="95" fill="none" stroke="${BRAND.accent}" stroke-width="5"/>
    <ellipse cx="260" cy="230" rx="38" ry="95" fill="none" stroke="${BRAND.white}" stroke-width="2.5" opacity="0.75"/>
    <line x1="165" y1="230" x2="355" y2="230" stroke="${BRAND.white}" stroke-width="2.5" opacity="0.75"/>
  <rect x="90" y="360" width="55" height="120" rx="8" fill="${BRAND.accent}" opacity="0.85"/>
  <rect x="160" y="320" width="55" height="160" rx="8" fill="${BRAND.white}" opacity="0.9"/>
  <rect x="230" y="280" width="55" height="200" rx="8" fill="${BRAND.accent}"/>
  <rect x="300" y="250" width="55" height="230" rx="8" fill="${BRAND.gold}" opacity="0.95"/>
  <polyline points="95,340 175,300 255,260 335,210" fill="none" stroke="${BRAND.white}" stroke-width="5" stroke-linecap="round"/>
  <text x="260" y="510" text-anchor="middle" fill="${BRAND.muted}" font-size="15">EU SEO Trends</text>`,

  'ai-seo-vs-traditional-seo-2026': `
  <rect x="40" y="80" width="200" height="280" rx="20" fill="rgba(255,255,255,0.12)" stroke="${BRAND.white}" stroke-width="2"/>
  <circle cx="140" cy="170" r="50" fill="none" stroke="${BRAND.white}" stroke-width="8"/>
  <line x1="175" y1="205" x2="215" y2="245" stroke="${BRAND.accent}" stroke-width="10" stroke-linecap="round"/>
  <text x="140" y="310" text-anchor="middle" fill="${BRAND.white}" font-size="18" font-weight="700">Traditional</text>
  <rect x="280" y="80" width="200" height="280" rx="20" fill="rgba(164,221,251,0.18)" stroke="${BRAND.accent}" stroke-width="3"/>
  <circle cx="380" cy="150" r="40" fill="${BRAND.accent}" opacity="0.35"/>
  <path d="M350 200 Q380 160 410 200 Q380 240 350 200" fill="none" stroke="${BRAND.accent}" stroke-width="4"/>
  <circle cx="365" cy="188" r="7" fill="${BRAND.accent}"/><circle cx="395" cy="188" r="7" fill="${BRAND.accent}"/>
  <rect x="340" y="230" width="80" height="36" rx="10" fill="${BRAND.accent}"/>
  <text x="380" y="254" text-anchor="middle" fill="${BRAND.secondary}" font-size="16" font-weight="800">AI</text>
  <text x="380" y="310" text-anchor="middle" fill="${BRAND.accent}" font-size="18" font-weight="700">AI SEO</text>
  <circle cx="260" cy="220" r="36" fill="${BRAND.secondary}" stroke="${BRAND.gold}" stroke-width="4"/>
  <text x="260" y="228" text-anchor="middle" fill="${BRAND.gold}" font-size="20" font-weight="800">VS</text>`,

  'local-seo-checklist-multi-location-europe': `
  <path d="M260 90 C190 90 150 140 150 195 C150 280 260 390 260 390 C260 390 370 280 370 195 C370 140 330 90 260 90Z" fill="${BRAND.accent}" opacity="0.9"/>
  <circle cx="260" cy="195" r="55" fill="${BRAND.secondary}"/>
  <circle cx="260" cy="195" r="28" fill="${BRAND.white}"/>
  <circle cx="180" cy="130" r="22" fill="${BRAND.gold}" stroke="${BRAND.secondary}" stroke-width="3"/>
  <circle cx="340" cy="130" r="22" fill="${BRAND.gold}" stroke="${BRAND.secondary}" stroke-width="3"/>
  <circle cx="200" cy="300" r="22" fill="${BRAND.gold}" stroke="${BRAND.secondary}" stroke-width="3"/>
  <line x1="195" y1="145" x2="235" y2="175" stroke="${BRAND.white}" stroke-width="3" stroke-dasharray="6 4"/>
  <line x1="325" y1="145" x2="285" y2="175" stroke="${BRAND.white}" stroke-width="3" stroke-dasharray="6 4"/>
  <rect x="80" y="420" width="360" height="70" rx="14" fill="rgba(255,255,255,0.12)"/>
  <text x="110" y="455" fill="${BRAND.green}" font-size="22">✓</text><text x="140" y="458" fill="${BRAND.white}" font-size="15">GBP</text>
  <text x="210" y="455" fill="${BRAND.green}" font-size="22">✓</text><text x="240" y="458" fill="${BRAND.white}" font-size="15">Citations</text>
  <text x="330" y="455" fill="${BRAND.green}" font-size="22">✓</text><text x="360" y="458" fill="${BRAND.white}" font-size="15">NAP</text>`,

  'google-ai-overviews-changing-business-seo': `
  <rect x="60" y="70" width="400" height="380" rx="20" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)"/>
  <rect x="90" y="100" width="280" height="36" rx="18" fill="rgba(255,255,255,0.2)"/>
  <circle cx="115" cy="118" r="8" fill="${BRAND.accent}"/>
  <rect x="130" y="110" width="200" height="16" rx="8" fill="${BRAND.white}" opacity="0.5"/>
  <rect x="90" y="155" width="340" height="120" rx="14" fill="rgba(164,221,251,0.22)" stroke="${BRAND.accent}" stroke-width="2"/>
  <text x="110" y="185" fill="${BRAND.accent}" font-size="13" font-weight="700">AI OVERVIEW</text>
  <rect x="110" y="200" width="280" height="10" rx="5" fill="${BRAND.white}" opacity="0.55"/>
  <rect x="110" y="222" width="240" height="10" rx="5" fill="${BRAND.white}" opacity="0.4"/>
  <rect x="110" y="244" width="200" height="10" rx="5" fill="${BRAND.white}" opacity="0.35"/>
  <rect x="90" y="295" width="340" height="12" rx="6" fill="${BRAND.white}" opacity="0.25"/>
  <rect x="90" y="320" width="300" height="12" rx="6" fill="${BRAND.white}" opacity="0.2"/>
  <rect x="90" y="345" width="260" height="12" rx="6" fill="${BRAND.white}" opacity="0.18"/>
  <polygon points="380,55 395,85 425,85 402,105 410,135 380,118 350,135 358,105 335,85 365,85" fill="${BRAND.gold}"/>`,

  '100-seo-mistakes-costing-business-leads': `
  <text x="260" y="200" text-anchor="middle" fill="${BRAND.gold}" font-size="140" font-weight="800">100</text>
  <polygon points="260,240 320,380 200,380" fill="rgba(251,191,36,0.2)" stroke="${BRAND.gold}" stroke-width="5"/>
  <text x="260" y="355" text-anchor="middle" fill="${BRAND.gold}" font-size="64" font-weight="800">!</text>
  <rect x="70" y="420" width="380" height="70" rx="14" fill="rgba(248,113,113,0.2)" stroke="${BRAND.red}"/>
  <text x="260" y="462" text-anchor="middle" fill="${BRAND.white}" font-size="17" font-weight="600">Mistakes costing leads</text>`,

  'international-seo-guide-european-companies': `
  <circle cx="260" cy="240" r="110" fill="none" stroke="${BRAND.accent}" stroke-width="5"/>
  <ellipse cx="260" cy="240" rx="45" ry="110" fill="none" stroke="${BRAND.white}" stroke-width="2.5" opacity="0.7"/>
  <line x1="150" y1="240" x2="370" y2="240" stroke="${BRAND.white}" stroke-width="2.5" opacity="0.7"/>
  <rect x="80" y="390" width="70" height="44" rx="8" fill="#003399"/><text x="115" y="420" text-anchor="middle" fill="#FFCC00" font-size="14" font-weight="700">EU</text>
  <rect x="170" y="390" width="70" height="44" rx="8" fill="#012169"/><text x="205" y="420" text-anchor="middle" fill="${BRAND.white}" font-size="14" font-weight="700">UK</text>
  <rect x="260" y="390" width="70" height="44" rx="8" fill="#000"/><text x="295" y="420" text-anchor="middle" fill="#DD0000" font-size="14" font-weight="700">DE</text>
  <rect x="350" y="390" width="70" height="44" rx="8" fill="#0055A4"/><text x="385" y="420" text-anchor="middle" fill="${BRAND.white}" font-size="14" font-weight="700">FR</text>
  <text x="260" y="480" text-anchor="middle" fill="${BRAND.muted}" font-size="15">Hreflang &amp; markets</text>`,

  'seo-healthcare-businesses-europe': `
  <rect x="170" y="100" width="180" height="220" rx="18" fill="rgba(255,255,255,0.14)" stroke="${BRAND.accent}"/>
  <rect x="205" y="155" width="110" height="110" rx="12" fill="${BRAND.accent}"/>
  <rect x="240" y="120" width="40" height="180" rx="6" fill="${BRAND.white}" opacity="0.9"/>
  <rect x="195" y="165" width="130" height="40" rx="6" fill="${BRAND.white}" opacity="0.9"/>
  <path d="M80 400 Q160 360 260 400 T440 400" fill="none" stroke="${BRAND.accent}" stroke-width="4"/>
  <circle cx="120" cy="400" r="8" fill="${BRAND.accent}"/><circle cx="260" cy="400" r="8" fill="${BRAND.accent}"/><circle cx="400" cy="400" r="8" fill="${BRAND.accent}"/>
  <text x="260" y="470" text-anchor="middle" fill="${BRAND.muted}" font-size="15">YMYL + EEAT</text>`,

  'seo-law-firms-complete-guide': `
  <line x1="260" y1="110" x2="260" y2="200" stroke="${BRAND.gold}" stroke-width="6"/>
  <line x1="180" y1="200" x2="340" y2="200" stroke="${BRAND.gold}" stroke-width="6"/>
  <ellipse cx="180" cy="250" rx="55" ry="30" fill="none" stroke="${BRAND.accent}" stroke-width="5"/>
  <ellipse cx="340" cy="250" rx="55" ry="30" fill="none" stroke="${BRAND.accent}" stroke-width="5"/>
  <rect x="150" y="310" width="220" height="140" rx="12" fill="rgba(255,255,255,0.12)" stroke="${BRAND.white}" stroke-width="2"/>
  <line x1="175" y1="350" x2="345" y2="350" stroke="${BRAND.accent}" stroke-width="4"/>
  <line x1="175" y1="385" x2="300" y2="385" stroke="${BRAND.white}" stroke-width="3" opacity="0.5"/>
  <text x="260" y="480" text-anchor="middle" fill="${BRAND.muted}" font-size="15">Practice area SEO</text>`,

  'choose-best-seo-agency-europe': `
  <polygon points="260,90 285,165 365,165 300,210 325,285 260,245 195,285 220,210 155,165 235,165" fill="${BRAND.gold}" stroke="${BRAND.white}" stroke-width="3"/>
  <text x="260" y="175" text-anchor="middle" fill="${BRAND.secondary}" font-size="28" font-weight="800">4.9</text>
  <rect x="90" y="320" width="340" height="160" rx="16" fill="rgba(255,255,255,0.12)"/>
  <rect x="120" y="350" width="200" height="14" rx="7" fill="${BRAND.white}" opacity="0.7"/>
  <rect x="120" y="380" width="160" height="14" rx="7" fill="${BRAND.white}" opacity="0.5"/>
  <rect x="120" y="420" width="120" height="36" rx="10" fill="${BRAND.accent}"/>
  <text x="180" y="444" text-anchor="middle" fill="${BRAND.secondary}" font-size="14" font-weight="700">Vet agency</text>`,

  'local-vs-national-vs-international-seo': `
  <rect x="50" y="120" width="110" height="200" rx="14" fill="${BRAND.accent}" opacity="0.85"/>
  <circle cx="105" cy="180" r="22" fill="${BRAND.secondary}"/>
  <text x="105" y="350" text-anchor="middle" fill="${BRAND.white}" font-size="14" font-weight="700">Local</text>
  <rect x="185" y="90" width="110" height="230" rx="14" fill="${BRAND.white}" opacity="0.85"/>
  <rect x="210" y="150" width="60" height="40" rx="6" fill="${BRAND.primary}" opacity="0.5"/>
  <text x="240" y="350" text-anchor="middle" fill="${BRAND.white}" font-size="14" font-weight="700">National</text>
  <rect x="320" y="60" width="110" height="260" rx="14" fill="${BRAND.gold}" opacity="0.9"/>
  <circle cx="375" cy="150" r="40" fill="none" stroke="${BRAND.secondary}" stroke-width="4"/>
  <text x="375" y="350" text-anchor="middle" fill="${BRAND.white}" font-size="14" font-weight="700">Global</text>`,

  'google-business-profile-optimization-guide': `
  <rect x="100" y="80" width="320" height="360" rx="22" fill="rgba(255,255,255,0.14)" stroke="${BRAND.accent}" stroke-width="2"/>
  <circle cx="170" cy="160" r="40" fill="${BRAND.accent}"/>
  <rect x="230" y="135" width="150" height="14" rx="7" fill="${BRAND.white}" opacity="0.85"/>
  <rect x="230" y="160" width="110" height="10" rx="5" fill="${BRAND.white}" opacity="0.5"/>
  <text x="130" y="250" fill="#FFD700" font-size="28">★★★★★</text>
  <rect x="130" y="275" width="260" height="44" rx="12" fill="${BRAND.accent}"/>
  <text x="260" y="305" text-anchor="middle" fill="${BRAND.secondary}" font-size="16" font-weight="700">Get Directions</text>
  <path d="M260 55 C220 55 195 90 195 125 C195 175 260 250 260 250 C260 250 325 175 325 125 C325 90 300 55 260 55Z" fill="#EA4335" opacity="0.9"/>
  <circle cx="260" cy="125" r="18" fill="${BRAND.white}"/>`,

  'complete-eeat-guide-business-websites': `
  <path d="M260 80 L310 100 V170 C310 220 260 270 260 270 C260 270 210 220 210 170 V100 Z" fill="rgba(255,255,255,0.15)" stroke="${BRAND.accent}" stroke-width="4"/>
  <path d="M235 175 L255 200 L295 150" fill="none" stroke="${BRAND.green}" stroke-width="8" stroke-linecap="round"/>
  <text x="115" y="340" fill="${BRAND.accent}" font-size="42" font-weight="800">E</text>
  <text x="175" y="340" fill="${BRAND.white}" font-size="42" font-weight="800">E</text>
  <text x="235" y="340" fill="${BRAND.accent}" font-size="42" font-weight="800">A</text>
  <text x="295" y="340" fill="${BRAND.white}" font-size="42" font-weight="800">T</text>
  <rect x="90" y="380" width="340" height="80" rx="14" fill="rgba(255,255,255,0.1)"/>
  <text x="260" y="428" text-anchor="middle" fill="${BRAND.muted}" font-size="15">Experience · Expertise · Authority · Trust</text>`,

  'geo-generative-engine-optimization-guide': `
  <rect x="70" y="100" width="380" height="90" rx="16" fill="rgba(255,255,255,0.14)"/>
  <circle cx="110" cy="145" r="10" fill="${BRAND.accent}"/><circle cx="140" cy="145" r="10" fill="${BRAND.accent}"/><circle cx="170" cy="145" r="10" fill="${BRAND.accent}"/>
  <text x="210" y="152" fill="${BRAND.white}" font-size="16">Generative AI Search</text>
  <rect x="120" y="220" width="280" height="100" rx="16" fill="rgba(164,221,251,0.2)" stroke="${BRAND.accent}"/>
  <text x="150" y="265" fill="${BRAND.accent}" font-size="22" font-weight="800">GEO</text>
  <text x="150" y="295" fill="${BRAND.white}" font-size="14">Cited in AI answers</text>
  <rect x="70" y="360" width="380" height="90" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="100" y="415" fill="${BRAND.muted}" font-size="15">Entity signals + structured FAQs</text>`,

  'chatgpt-seo-ai-search-organic-traffic': `
  <rect x="80" y="90" width="360" height="380" rx="24" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)"/>
  <rect x="110" y="130" width="300" height="55" rx="14" fill="rgba(16,163,127,0.35)" stroke="#10A37F"/>
  <text x="135" y="165" fill="${BRAND.white}" font-size="15">How do I rank in AI search?</text>
  <rect x="110" y="210" width="300" height="120" rx="14" fill="rgba(164,221,251,0.15)"/>
  <rect x="135" y="235" width="250" height="10" rx="5" fill="${BRAND.white}" opacity="0.55"/>
  <rect x="135" y="258" width="220" height="10" rx="5" fill="${BRAND.white}" opacity="0.4"/>
  <rect x="135" y="281" width="180" height="10" rx="5" fill="${BRAND.white}" opacity="0.35"/>
  <circle cx="380" cy="400" r="32" fill="#10A37F"/>
  <path d="M365 400 L378 413 L398 388" fill="none" stroke="${BRAND.white}" stroke-width="5" stroke-linecap="round"/>
  <text x="260" y="470" text-anchor="middle" fill="${BRAND.muted}" font-size="15">ChatGPT + organic traffic</text>`,

  'seo-roi-calculator-measure-success': `
  <rect x="100" y="100" width="320" height="220" rx="20" fill="rgba(255,255,255,0.14)" stroke="${BRAND.accent}"/>
  <text x="260" y="190" text-anchor="middle" fill="${BRAND.accent}" font-size="64" font-weight="800">420%</text>
  <text x="260" y="230" text-anchor="middle" fill="${BRAND.muted}" font-size="18">SEO ROI</text>
  <rect x="120" y="260" width="60" height="36" rx="8" fill="${BRAND.secondary}"/><text x="150" y="284" text-anchor="middle" fill="${BRAND.white}" font-size="16">7</text>
  <rect x="190" y="260" width="60" height="36" rx="8" fill="${BRAND.secondary}"/><text x="220" y="284" text-anchor="middle" fill="${BRAND.white}" font-size="16">4</text>
  <rect x="260" y="260" width="60" height="36" rx="8" fill="${BRAND.secondary}"/><text x="290" y="284" text-anchor="middle" fill="${BRAND.white}" font-size="16">2</text>
  <rect x="330" y="260" width="60" height="36" rx="8" fill="${BRAND.accent}"/><text x="360" y="284" text-anchor="middle" fill="${BRAND.secondary}" font-size="16">=</text>
  <polyline points="80,400 160,360 240,380 320,300 400,280" fill="none" stroke="${BRAND.green}" stroke-width="5" stroke-linecap="round"/>`,
}

const SCENE_FALLBACK = `
  <circle cx="260" cy="240" r="90" fill="none" stroke="${BRAND.accent}" stroke-width="8"/>
  <line x1="215" y1="285" x2="305" y2="375" stroke="${BRAND.accent}" stroke-width="12" stroke-linecap="round"/>
  <rect x="100" y="380" width="320" height="14" rx="7" fill="${BRAND.white}" opacity="0.3"/>
  <rect x="100" y="410" width="260" height="14" rx="7" fill="${BRAND.white}" opacity="0.22"/>`

SCENES['technical-seo-checklist-enterprise-websites'] = `
  <circle cx="260" cy="200" r="70" fill="${BRAND.secondary}" stroke="${BRAND.accent}" stroke-width="4"/>
  <line x1="260" y1="270" x2="200" y2="350" stroke="${BRAND.white}" stroke-width="4"/><line x1="260" y1="270" x2="260" y2="370" stroke="${BRAND.white}" stroke-width="4"/><line x1="260" y1="270" x2="320" y2="350" stroke="${BRAND.white}" stroke-width="4"/>
  <circle cx="200" cy="370" r="28" fill="${BRAND.accent}" opacity="0.8"/><circle cx="260" cy="390" r="28" fill="${BRAND.accent}" opacity="0.8"/><circle cx="320" cy="370" r="28" fill="${BRAND.accent}" opacity="0.8"/>
  <text x="200" y="376" text-anchor="middle" fill="${BRAND.secondary}" font-size="11">Crawl</text>
  <text x="260" y="396" text-anchor="middle" fill="${BRAND.secondary}" font-size="11">Index</text>
  <text x="320" y="376" text-anchor="middle" fill="${BRAND.secondary}" font-size="11">Rank</text>
  <text x="260" y="460" text-anchor="middle" fill="${BRAND.muted}" font-family="monospace" font-size="14">&lt;/&gt; technical audit</text>`

SCENES['core-web-vitals-optimization-guide'] = `
  <circle cx="150" cy="260" r="70" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="10"/>
  <path d="M150 260 L150 210" stroke="${BRAND.green}" stroke-width="6" stroke-linecap="round"/>
  <text x="150" y="360" text-anchor="middle" fill="${BRAND.green}" font-size="16" font-weight="700">LCP</text>
  <circle cx="260" cy="260" r="70" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="10"/>
  <path d="M260 260 L300 290" stroke="${BRAND.accent}" stroke-width="6" stroke-linecap="round"/>
  <text x="260" y="360" text-anchor="middle" fill="${BRAND.accent}" font-size="16" font-weight="700">INP</text>
  <circle cx="370" cy="260" r="70" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="10"/>
  <path d="M370 260 L370 220" stroke="${BRAND.gold}" stroke-width="6" stroke-linecap="round"/>
  <text x="370" y="360" text-anchor="middle" fill="${BRAND.gold}" font-size="16" font-weight="700">CLS</text>
  <text x="260" y="440" text-anchor="middle" fill="${BRAND.muted}" font-size="15">Core Web Vitals</text>`

SCENES['content-marketing-strategy-qualified-leads'] = `
  <polygon points="160,120 360,120 320,200 200,200" fill="${BRAND.accent}" opacity="0.85"/>
  <polygon points="200,220 320,220 290,300 230,300" fill="${BRAND.white}" opacity="0.75"/>
  <polygon points="230,320 290,320 275,390 245,390" fill="${BRAND.gold}"/>
  <circle cx="380" cy="380" r="40" fill="${BRAND.green}" opacity="0.9"/>
  <text x="380" y="388" text-anchor="middle" fill="${BRAND.secondary}" font-size="14" font-weight="800">SQL</text>
  <text x="260" y="460" text-anchor="middle" fill="${BRAND.muted}" font-size="15">Qualified leads funnel</text>`

SCENES['link-building-guide-2026'] = `
  <ellipse cx="130" cy="240" rx="50" ry="32" fill="none" stroke="${BRAND.accent}" stroke-width="10"/>
  <ellipse cx="260" cy="240" rx="50" ry="32" fill="none" stroke="${BRAND.white}" stroke-width="10"/>
  <ellipse cx="390" cy="240" rx="50" ry="32" fill="none" stroke="${BRAND.accent}" stroke-width="10"/>
  <rect x="168" y="224" width="44" height="32" fill="${BRAND.secondary}"/>
  <rect x="298" y="224" width="44" height="32" fill="${BRAND.secondary}"/>
  <rect x="100" y="340" width="300" height="100" rx="14" fill="rgba(255,255,255,0.12)"/>
  <text x="250" y="400" text-anchor="middle" fill="${BRAND.white}" font-size="16">Editorial backlinks</text>`

SCENES['seo-checklist-small-businesses-europe'] = `
  <polygon points="260,100 340,180 310,290 210,290 180,180" fill="${BRAND.accent}" opacity="0.85"/>
  <rect x="220" y="200" width="80" height="60" fill="${BRAND.secondary}"/>
  <rect x="240" y="230" width="40" height="50" fill="${BRAND.white}" opacity="0.85"/>
  <rect x="90" y="340" width="340" height="120" rx="16" fill="rgba(255,255,255,0.12)"/>
  <text x="120" y="380" fill="${BRAND.green}" font-size="20">✓</text><text x="148" y="383" fill="${BRAND.white}" font-size="14">Google Business Profile</text>
  <text x="120" y="415" fill="${BRAND.green}" font-size="20">✓</text><text x="148" y="418" fill="${BRAND.white}" font-size="14">Local keywords</text>
  <text x="120" y="450" fill="${BRAND.green}" font-size="20">✓</text><text x="148" y="453" fill="${BRAND.white}" font-size="14">Reviews + schema</text>`

const BLOG_THEMES = {
  'seo-trends-european-businesses-2026': { accent: '#6B2E88', label: 'SEO Trends' },
  'ai-seo-vs-traditional-seo-2026': { accent: '#5B2D8E', label: 'AI vs SEO' },
  'local-seo-checklist-multi-location-europe': { accent: '#4285F4', label: 'Local SEO' },
  'google-ai-overviews-changing-business-seo': { accent: '#4A90D9', label: 'AI Overviews' },
  '100-seo-mistakes-costing-business-leads': { accent: '#8E3B6B', label: 'SEO Mistakes' },
  'international-seo-guide-european-companies': { accent: '#2A255D', label: 'International' },
  'seo-healthcare-businesses-europe': { accent: '#0D9488', label: 'Healthcare SEO' },
  'seo-law-firms-complete-guide': { accent: '#2A255D', label: 'Legal SEO' },
  'choose-best-seo-agency-europe': { accent: '#6B2E88', label: 'Choose Agency' },
  'local-vs-national-vs-international-seo': { accent: '#6B2E88', label: 'SEO Scope' },
  'google-business-profile-optimization-guide': { accent: '#4285F4', label: 'GBP Guide' },
  'complete-eeat-guide-business-websites': { accent: '#6B2E88', label: 'EEAT Guide' },
  'geo-generative-engine-optimization-guide': { accent: '#5B2D8E', label: 'GEO Guide' },
  'chatgpt-seo-ai-search-organic-traffic': { accent: '#10A37F', label: 'ChatGPT SEO' },
  'seo-roi-calculator-measure-success': { accent: '#6B2E88', label: 'SEO ROI' },
  'technical-seo-checklist-enterprise-websites': { accent: '#2A255D', label: 'Technical SEO' },
  'core-web-vitals-optimization-guide': { accent: '#6B2E88', label: 'Web Vitals' },
  'content-marketing-strategy-qualified-leads': { accent: '#6B2E88', label: 'Content Marketing' },
  'link-building-guide-2026': { accent: '#2A255D', label: 'Link Building' },
  'seo-checklist-small-businesses-europe': { accent: '#6B2E88', label: 'Small Business' },
}

function heroSvg(slug, entry) {
  const theme = BLOG_THEMES[slug] || { accent: BRAND.primary, label: entry.category }
  const titleLines = wrapTitle(entry.title, 28)
  const scene = SCENES[slug] || SCENE_FALLBACK
  const titleStartY = 108
  const titleSvg = titleLines
    .map(
      (line, i) =>
        `<text x="64" y="${titleStartY + i * 42}" fill="${BRAND.white}" font-family="Arial,Helvetica,sans-serif" font-size="32" font-weight="700">${esc(line)}</text>`
    )
    .join('')
  const pillY = titleStartY + titleLines.length * 42 + 24
  const pillW = Math.min(420, entry.primaryKeyword.length * 9 + 48)

  const body = `
  <rect x="0" y="0" width="600" height="630" fill="rgba(0,0,0,0.12)"/>
  <rect x="64" y="52" width="${theme.label.length * 9 + 36}" height="34" rx="17" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.25)"/>
  <text x="82" y="75" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">${esc(theme.label.toUpperCase())}</text>
  ${titleSvg}
  <rect x="64" y="${pillY}" width="${pillW}" height="38" rx="19" fill="rgba(164,221,251,0.2)" stroke="${BRAND.accent}" stroke-width="2"/>
  <text x="84" y="${pillY + 25}" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="15" font-weight="600">${esc(entry.primaryKeyword)}</text>
  <rect x="600" y="40" width="560" height="550" rx="28" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
  <g transform="translate(600,40)">${scene}</g>`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${esc(entry.title)}">
  <defs>
    <linearGradient id="bg-hero-${slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BRAND.secondary}"/>
      <stop offset="55%" stop-color="${theme.accent}"/>
      <stop offset="100%" stop-color="${BRAND.primary}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg-hero-${slug})"/>
  <circle cx="1050" cy="580" r="120" fill="${BRAND.accent}" opacity="0.08"/>
  ${body}
  <text x="64" y="598" fill="${BRAND.muted}" font-family="Arial,sans-serif" font-size="15">SEO India Tech · Blog</text>
</svg>`
}

function statsSvg(slug, entry) {
  const data = getBlogImageData(slug)
  const theme = BLOG_THEMES[slug] || { accent: BRAND.primary }
  const stats = data?.stats || [{ value: '68%', label: 'Organic traffic' }, { value: '53%', label: 'Search share' }]
  const body = `
    ${card(72, 160, 240, 95, stats[0].label, stats[0].value, BRAND.accent)}
    ${card(340, 180, 240, 85, stats[1]?.label || 'Key metric', stats[1]?.value || '2x', BRAND.white)}
    <g transform="translate(700,120)">
      <rect x="0" y="0" width="55" height="140" rx="8" fill="${BRAND.accent}" opacity="0.8"/>
      <rect x="70" y="40" width="55" height="100" rx="8" fill="${BRAND.white}" opacity="0.85"/>
      <rect x="140" y="20" width="55" height="120" rx="8" fill="${BRAND.accent}"/>
      <rect x="210" y="60" width="55" height="80" rx="8" fill="${BRAND.gold}"/>
      <polyline points="10,30 80,70 150,50 230,10" fill="none" stroke="${BRAND.white}" stroke-width="4" stroke-linecap="round"/>
    </g>`
  return wrap(`stats-${slug}`, 'Key Statistics', entry.primaryKeyword, body, theme.accent)
}

function processSvg(slug, entry) {
  const data = getBlogImageData(slug)
  const theme = BLOG_THEMES[slug] || { accent: BRAND.primary, label: 'Process' }
  const steps = (data?.processSteps || ['Research', 'Audit', 'Execute', 'Measure']).slice(0, 4)
  const stepRects = steps
    .map((s, i) => {
      const x = 72 + i * 155
      const label = s.length > 16 ? `${s.slice(0, 14)}…` : s
      return `<g><rect x="${x}" y="180" width="130" height="72" rx="12" fill="rgba(255,255,255,0.14)" stroke="${BRAND.accent}"/>
      <circle cx="${x + 20}" cy="205" r="14" fill="${BRAND.accent}"/><text x="${x + 16}" y="210" fill="${BRAND.secondary}" font-size="13" font-weight="700">${i + 1}</text>
      <text x="${x + 42}" y="232" fill="${BRAND.white}" font-size="13" font-weight="600">${esc(label)}</text>
      ${i < 3 ? `<polygon points="${x + 130},216 ${x + 148},216 ${x + 139},226" fill="${BRAND.accent}"/>` : ''}</g>`
    })
    .join('')
  const body = `${stepRects}<text x="72" y="140" fill="${BRAND.accent}" font-size="18" font-weight="700">${esc(theme.label)} workflow</text>`
  return wrap(`process-${slug}`, 'Step-by-Step Process', entry.primaryKeyword, body, theme.accent)
}

function comparisonSvg(slug, entry) {
  const data = getBlogImageData(slug)
  const theme = BLOG_THEMES[slug] || { accent: BRAND.primary }
  const good = (data?.comparison?.good || 'Structured SEO strategy').slice(0, 40)
  const bad = (data?.comparison?.bad || 'Generic templates').slice(0, 40)
  const body = `
    <rect x="72" y="140" width="320" height="150" rx="14" fill="rgba(74,222,128,0.18)" stroke="${BRAND.green}" stroke-width="2"/>
    <text x="92" y="175" fill="${BRAND.green}" font-size="16" font-weight="700">✓ What Works</text>
    <text x="92" y="215" fill="${BRAND.white}" font-size="15">${esc(good)}</text>
    <rect x="420" y="140" width="320" height="150" rx="14" fill="rgba(248,113,113,0.15)" stroke="${BRAND.red}" stroke-width="2"/>
    <text x="440" y="175" fill="${BRAND.red}" font-size="16" font-weight="700">✗ What Fails</text>
    <text x="440" y="215" fill="${BRAND.white}" font-size="15">${esc(bad)}</text>
    <text x="72" y="330" fill="${BRAND.muted}" font-size="16">${esc(entry.primaryKeyword)}</text>`
  return wrap(`compare-${slug}`, 'Comparison', 'What works vs what fails', body, theme.accent)
}

function checklistSvg(slug, entry) {
  const data = getBlogImageData(slug)
  const items = (data?.checklist || ['Technical audit', 'Content depth', 'Internal links', 'Schema markup']).slice(0, 5)
  const checks = items
    .map((item, i) => {
      const label = item.length > 34 ? `${item.slice(0, 32)}…` : item
      return `<g transform="translate(72,${130 + i * 48})">
        <rect width="26" height="26" rx="6" fill="${BRAND.accent}"/>
        <path d="M6 13 L11 18 L20 8" fill="none" stroke="${BRAND.secondary}" stroke-width="3" stroke-linecap="round"/>
        <text x="38" y="19" fill="${BRAND.white}" font-size="16">${esc(label)}</text>
      </g>`
    })
    .join('')
  const miniScene = (SCENES[slug] || SCENE_FALLBACK).replace(/translate\([^)]+\)/g, '')
  const body = `${checks}<g transform="translate(680,100) scale(0.55)">${miniScene}</g>`
  return wrap(`checklist-${slug}`, 'Checklist', entry.primaryKeyword, body, BLOG_THEMES[slug]?.accent || BRAND.primary)
}

function faqSvg(slug, entry) {
  const data = getBlogImageData(slug)
  const questions = (data?.faqQuestions || [
    `What is ${entry.primaryKeyword}?`,
    'How long does it take?',
    'Best practices for 2026?',
  ]).slice(0, 3)
  const rows = questions
    .map((q, i) => {
      const label = q.length > 42 ? `${q.slice(0, 40)}…` : q
      const y = i * 72
      const active = i === 1
      return `<rect x="0" y="${y}" width="400" height="58" rx="12" fill="${active ? 'rgba(164,221,251,0.18)' : 'rgba(255,255,255,0.12)'}" stroke="${active ? BRAND.accent : 'rgba(255,255,255,0.2)'}"/>
    <text x="20" y="${y + 36}" fill="${active ? BRAND.accent : BRAND.white}" font-size="15" font-weight="${active ? '700' : '500'}">${esc(label)}</text>`
    })
    .join('')
  const body = `<g transform="translate(680,150)">${rows}</g>
  <text x="72" y="130" fill="${BRAND.accent}" font-size="22" font-weight="700">FAQ</text>`
  return wrap(`faq-${slug}`, 'Frequently Asked Questions', entry.primaryKeyword, body, BLOG_THEMES[slug]?.accent || BRAND.primary)
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
  const scene = SCENES['local-seo-checklist-multi-location-europe'] || SCENE_FALLBACK
  const body = `<g transform="translate(600,40) scale(0.9)">${scene}</g>
    <text x="64" y="100" fill="${BRAND.accent}" font-family="Arial,sans-serif" font-size="14" font-weight="700" letter-spacing="2">SERVICE</text>
    <text x="64" y="200" fill="${BRAND.white}" font-size="40" font-weight="700">${esc(theme.label)}</text>`
  return wrap(`service-${slug}`, theme.label, 'SEO India Tech', body, theme.accent)
}

let count = 0

BLOG_CATALOG.forEach((entry) => {
  const slug = entry.slug
  const heroName = `${slug}-hero.svg`
  const files = [
    [heroName, () => premiumFeaturedHero(slug, entry)],
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
  seo: { label: 'SEO Services', accent: '#6B2E88' },
  'digital-marketing': { label: 'Digital Marketing', accent: '#6B2E88' },
  'paid-advertising': { label: 'Paid Advertising', accent: '#2A255D' },
  'design-and-development': { label: 'Design & Development', accent: '#6B2E88' },
}

Object.entries(HUB_THEMES).forEach(([slug, theme]) => {
  writeFileSync(join(serviceDir, `hub-${slug}.svg`), serviceHeroSvg(`hub-${slug}`, theme))
  count++
})

console.log(`Generated ${count} topic-relevant illustrations`)
console.log(`  Blog: ${blogDir}`)
console.log(`  Services: ${serviceDir}`)
