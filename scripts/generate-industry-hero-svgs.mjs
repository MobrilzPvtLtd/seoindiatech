/**
 * Generates per-industry hero SVGs at public/images/industries/heroes/{slug}.svg
 * Run: node scripts/generate-industry-hero-svgs.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../public/images/industries/heroes')

const THEMES = {
  'popular-markets': { bg1: '#EEF4FF', bg2: '#F8FAFF', card1: '#2A255D', card2: '#4A3F8C', accent: '#F26522' },
  'automobile-home': { bg1: '#FFF7ED', bg2: '#FFFBEB', card1: '#1E3A5F', card2: '#2D4A6F', accent: '#F26522' },
  'food-health': { bg1: '#F0FDF4', bg2: '#ECFDF5', card1: '#14532D', card2: '#166534', accent: '#F26522' },
  'service-sector': { bg1: '#F8FAFC', bg2: '#F1F5F9', card1: '#334155', card2: '#475569', accent: '#F26522' },
}

/** Simple centered pictograms (x=400, y=250) */
const PICTOGRAMS = {
  'plastic-surgery': `<circle cx="400" cy="230" r="52" fill="#FFFFFF" opacity="0.15"/><path d="M400 185c-18 0-32 14-32 32 0 22 32 58 32 58s32-36 32-58c0-18-14-32-32-32z" fill="#F26522"/><circle cx="400" cy="217" r="14" fill="#FFFFFF"/>`,
  'property-management': `<rect x="330" y="200" width="140" height="100" rx="10" fill="#FFFFFF" opacity="0.15"/><rect x="350" y="175" width="100" height="125" rx="6" fill="#A4DDFB" opacity="0.35"/><rect x="365" y="195" width="22" height="22" rx="3" fill="#FFFFFF"/><rect x="395" y="195" width="22" height="22" rx="3" fill="#FFFFFF"/><rect x="425" y="195" width="22" height="22" rx="3" fill="#FFFFFF"/><rect x="380" y="255" width="40" height="45" rx="4" fill="#F26522"/>`,
  realtor: `<polygon points="400,165 470,235 330,235" fill="#F26522"/><rect x="345" y="235" width="110" height="75" rx="4" fill="#FFFFFF" opacity="0.9"/><rect x="385" y="265" width="30" height="45" rx="2" fill="#2A255D"/>`,
  'fertility-clinic': `<circle cx="400" cy="235" r="45" fill="#FFFFFF" opacity="0.15"/><circle cx="385" cy="220" r="16" fill="#F26522"/><circle cx="415" cy="220" r="16" fill="#F26522"/><path d="M370 255 Q400 285 430 255" stroke="#FFFFFF" stroke-width="6" fill="none" stroke-linecap="round"/>`,
  optometrist: `<ellipse cx="400" cy="235" rx="70" ry="42" fill="#FFFFFF" opacity="0.12"/><circle cx="365" cy="235" r="28" stroke="#FFFFFF" stroke-width="6" fill="none"/><circle cx="435" cy="235" r="28" stroke="#FFFFFF" stroke-width="6" fill="none"/><path d="M393 235h14" stroke="#F26522" stroke-width="5"/><circle cx="365" cy="235" r="10" fill="#F26522"/><circle cx="435" cy="235" r="10" fill="#F26522"/>`,
  orthodontist: `<rect x="340" y="215" width="120" height="50" rx="25" fill="#FFFFFF" opacity="0.15"/><path d="M360 240h16v-8h8v8h16v-8h8v8h16v-8h8v8h16" stroke="#FFFFFF" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  doctor: `<circle cx="400" cy="220" r="35" fill="#FFFFFF" opacity="0.2"/><path d="M400 195v50M375 220h50" stroke="#F26522" stroke-width="10" stroke-linecap="round"/><rect x="355" y="260" width="90" height="55" rx="12" fill="#FFFFFF" opacity="0.15"/>`,
  physiotherapy: `<circle cx="370" cy="250" r="22" fill="#F26522"/><rect x="395" y="210" width="55" height="12" rx="6" fill="#FFFFFF" transform="rotate(35 422 216)"/><rect x="395" y="250" width="55" height="12" rx="6" fill="#FFFFFF" transform="rotate(-20 422 256)"/>`,
  'personal-injury': `<rect x="350" y="270" width="100" height="12" rx="6" fill="#FFFFFF" opacity="0.2"/><path d="M370 270 L400 200 L430 270" stroke="#FFFFFF" stroke-width="6" fill="none"/><circle cx="400" cy="195" r="8" fill="#F26522"/>`,
  dentist: `<path d="M385 210c0-15 30-15 30 0 0 20-15 45-15 45s-15-25-15-45zm30 0c0-15 30-15 30 0 0 20-15 45-15 45s-15-25-15-45z" fill="#FFFFFF"/>`,
  hvac: `<circle cx="400" cy="235" r="55" fill="#FFFFFF" opacity="0.12"/><circle cx="400" cy="235" r="35" stroke="#FFFFFF" stroke-width="5" fill="none"/><path d="M400 200v70M365 235h70M382 218l36 36M418 218l-36 36" stroke="#F26522" stroke-width="4" stroke-linecap="round"/>`,
  plumber: `<path d="M340 280h120" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/><rect x="365" y="195" width="70" height="85" rx="8" fill="#FFFFFF" opacity="0.15"/><path d="M400 195 L400 170 L420 170" stroke="#F26522" stroke-width="6" fill="none" stroke-linecap="round"/>`,
  'garage-door': `<rect x="330" y="175" width="140" height="120" rx="6" fill="#FFFFFF" opacity="0.12"/><rect x="350" y="195" width="100" height="80" rx="4" fill="#A4DDFB" opacity="0.3"/><path d="M350 235h100" stroke="#FFFFFF" stroke-width="3"/><circle cx="400" cy="255" r="6" fill="#F26522"/>`,
  'well-drilling': `<ellipse cx="400" cy="290" rx="80" ry="15" fill="#FFFFFF" opacity="0.1"/><rect x="392" y="170" width="16" height="120" rx="4" fill="#FFFFFF" opacity="0.25"/><path d="M360 200 Q400 150 440 200" stroke="#A4DDFB" stroke-width="8" fill="none"/><circle cx="400" cy="285" r="12" fill="#F26522"/>`,
  fence: `<rect x="330" y="220" width="12" height="80" fill="#FFFFFF"/><rect x="370" y="200" width="12" height="100" fill="#FFFFFF"/><rect x="410" y="220" width="12" height="80" fill="#FFFFFF"/><rect x="450" y="200" width="12" height="100" fill="#FFFFFF"/><rect x="328" y="215" width="136" height="8" fill="#F26522"/>`,
  'deck-builder': `<rect x="320" y="260" width="160" height="20" rx="4" fill="#FFFFFF" opacity="0.2"/><rect x="335" y="240" width="130" height="20" rx="4" fill="#FFFFFF" opacity="0.15"/><rect x="390" y="175" width="14" height="85" fill="#F26522"/><rect x="370" y="195" width="50" height="10" rx="3" fill="#FFFFFF" transform="rotate(-30 395 200)"/>`,
  cabinet: `<rect x="340" y="185" width="120" height="100" rx="6" fill="#FFFFFF" opacity="0.15"/><rect x="355" y="200" width="40" height="35" rx="3" fill="#A4DDFB" opacity="0.4"/><rect x="405" y="200" width="40" height="35" rx="3" fill="#A4DDFB" opacity="0.4"/><circle cx="375" cy="260" r="5" fill="#F26522"/><circle cx="425" cy="260" r="5" fill="#F26522"/>`,
  architect: `<rect x="330" y="200" width="140" height="95" rx="4" fill="#FFFFFF" opacity="0.1"/><path d="M350 270 L400 180 L450 270 Z" stroke="#FFFFFF" stroke-width="4" fill="none"/><path d="M365 255h70M375 235h50" stroke="#A4DDFB" stroke-width="3"/>`,
  painter: `<rect x="350" y="250" width="100" height="50" rx="4" fill="#FFFFFF" opacity="0.15"/><rect x="370" y="175" width="60" height="75" rx="4" fill="#F26522"/><rect x="355" y="190" width="25" height="40" rx="2" fill="#A4DDFB"/>`,
  automotive: `<rect x="340" y="230" width="120" height="45" rx="18" fill="#FFFFFF" opacity="0.2"/><circle cx="365" cy="280" r="18" fill="#2A255D"/><circle cx="435" cy="280" r="18" fill="#2A255D"/><rect x="355" y="215" width="90" height="35" rx="12" fill="#F26522"/>`,
  locksmith: `<circle cx="400" cy="220" r="40" stroke="#FFFFFF" stroke-width="8" fill="none"/><rect x="395" y="255" width="10" height="45" rx="3" fill="#FFFFFF"/><rect x="385" y="290" width="30" height="10" rx="3" fill="#F26522"/>`,
  'interior-designer': `<rect x="340" y="250" width="120" height="40" rx="8" fill="#FFFFFF" opacity="0.2"/><rect x="355" y="230" width="90" height="25" rx="6" fill="#F26522"/><path d="M370 175 L400 210 L430 175" stroke="#FFFFFF" stroke-width="5" fill="none"/><circle cx="400" cy="200" r="12" fill="#A4DDFB"/>`,
  flooring: `<rect x="330" y="200" width="60" height="60" fill="#FFFFFF" opacity="0.12"/><rect x="390" y="200" width="60" height="60" fill="#A4DDFB" opacity="0.25"/><rect x="330" y="260" width="60" height="60" fill="#A4DDFB" opacity="0.25"/><rect x="390" y="260" width="60" height="60" fill="#FFFFFF" opacity="0.12"/>`,
  'home-builder': `<path d="M360 250 L400 190 L440 250 Z" fill="#F26522"/><rect x="370" y="250" width="60" height="55" fill="#FFFFFF" opacity="0.2"/><rect x="355" y="175" width="90" height="18" rx="4" fill="#FFFFFF" opacity="0.3"/>`,
  catering: `<ellipse cx="400" cy="255" rx="70" ry="25" fill="#FFFFFF" opacity="0.15"/><path d="M340 255h120" stroke="#FFFFFF" stroke-width="4"/><circle cx="400" cy="220" r="28" fill="#F26522"/><path d="M385 205 L400 185 L415 205" stroke="#FFFFFF" stroke-width="4" fill="none"/>`,
  breweries: `<rect x="375" y="190" width="50" height="90" rx="8" fill="#FFFFFF" opacity="0.2"/><ellipse cx="400" cy="190" rx="30" ry="10" fill="#F26522"/><circle cx="400" cy="215" r="8" fill="#A4DDFB"/>`,
  wineries: `<path d="M385 195 L385 270 Q400 285 415 270 L415 195 Z" fill="#FFFFFF" opacity="0.2"/><ellipse cx="400" cy="195" rx="18" ry="8" fill="#F26522"/><path d="M400 210 L400 250" stroke="#A4DDFB" stroke-width="4"/>`,
  herbal: `<path d="M400 280 Q360 220 400 175 Q440 220 400 280Z" fill="#86EFAC" opacity="0.5"/><path d="M400 280v-40" stroke="#FFFFFF" stroke-width="4"/><circle cx="400" cy="175" r="10" fill="#F26522"/>`,
  chiropractor: `<path d="M400 175 Q430 200 400 225 Q370 250 400 275 Q430 300 400 325" stroke="#FFFFFF" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="400" cy="200" r="8" fill="#F26522"/><circle cx="400" cy="300" r="8" fill="#F26522"/>`,
  movers: `<rect x="330" y="220" width="110" height="55" rx="8" fill="#FFFFFF" opacity="0.2"/><circle cx="355" cy="285" r="16" fill="#2A255D"/><circle cx="415" cy="285" r="16" fill="#2A255D"/><rect x="450" y="235" width="35" height="40" rx="4" fill="#F26522"/>`,
  'pest-control': `<circle cx="400" cy="235" r="40" fill="#FFFFFF" opacity="0.15"/><path d="M400 195v20M370 215l15 10M430 215l-15 10M365 250l20-5M435 250l-20-5M380 275l10-15M420 275l-10-15" stroke="#F26522" stroke-width="4" stroke-linecap="round"/><circle cx="400" cy="230" r="12" fill="#FFFFFF"/>`,
  cpa: `<rect x="345" y="195" width="110" height="85" rx="10" fill="#FFFFFF" opacity="0.15"/><rect x="365" y="215" width="20" height="15" rx="2" fill="#F26522"/><rect x="395" y="215" width="20" height="15" rx="2" fill="#A4DDFB"/><rect x="425" y="215" width="20" height="15" rx="2" fill="#A4DDFB"/><rect x="365" y="240" width="20" height="15" rx="2" fill="#A4DDFB"/><rect x="395" y="240" width="20" height="15" rx="2" fill="#F26522"/>`,
  wildlife: `<ellipse cx="400" cy="240" rx="45" ry="35" fill="#FFFFFF" opacity="0.15"/><circle cx="385" cy="225" r="6" fill="#2A255D"/><circle cx="415" cy="225" r="6" fill="#2A255D"/><ellipse cx="400" cy="245" rx="10" ry="6" fill="#F26522"/><path d="M355 235 Q330 210 345 195M445 235 Q470 210 455 195" stroke="#FFFFFF" stroke-width="4" fill="none"/>`,
  sign: `<rect x="350" y="200" width="100" height="60" rx="6" fill="#F26522"/><rect x="395" y="260" width="10" height="45" fill="#FFFFFF"/><text x="400" y="240" text-anchor="middle" fill="#FFFFFF" font-family="Arial,sans-serif" font-size="22" font-weight="700">SEO</text>`,
  waste: `<rect x="355" y="210" width="90" height="70" rx="6" fill="#FFFFFF" opacity="0.15"/><path d="M370 210 L375 195 H425 L430 210" stroke="#FFFFFF" stroke-width="4" fill="none"/><circle cx="400" cy="255" r="14" fill="#F26522"/>`,
  'dry-cleaner': `<path d="M370 195 Q400 165 430 195" stroke="#FFFFFF" stroke-width="5" fill="none"/><rect x="365" y="195" width="70" height="85" rx="6" fill="#FFFFFF" opacity="0.2"/><path d="M385 230h30M385 250h30" stroke="#A4DDFB" stroke-width="3"/>`,
  'tree-care': `<rect x="395" y="265" width="10" height="35" fill="#8B5E3C"/><circle cx="400" cy="220" r="45" fill="#86EFAC" opacity="0.45"/><path d="M370 250 L430 210" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`,
  roofers: `<polygon points="400,175 470,235 330,235" fill="#F26522"/><rect x="345" y="235" width="110" height="70" fill="#FFFFFF" opacity="0.2"/><path d="M330 235 L470 235" stroke="#FFFFFF" stroke-width="4"/>`,
  accountants: `<rect x="345" y="195" width="110" height="90" rx="8" fill="#FFFFFF" opacity="0.15"/><path d="M365 220h70M365 245h50M365 270h60" stroke="#A4DDFB" stroke-width="4" stroke-linecap="round"/><text x="400" y="215" text-anchor="middle" fill="#F26522" font-family="Arial,sans-serif" font-size="16" font-weight="700">$</text>`,
  pet: `<ellipse cx="400" cy="255" rx="35" ry="28" fill="#FFFFFF" opacity="0.2"/><circle cx="375" cy="215" r="14" fill="#FFFFFF" opacity="0.25"/><circle cx="425" cy="215" r="14" fill="#FFFFFF" opacity="0.25"/><circle cx="355" cy="245" r="12" fill="#FFFFFF" opacity="0.25"/><circle cx="445" cy="245" r="12" fill="#FFFFFF" opacity="0.25"/><circle cx="385" cy="270" r="10" fill="#F26522"/><circle cx="415" cy="270" r="10" fill="#F26522"/>`,
  janitorial: `<rect x="370" y="230" width="60" height="70" rx="6" fill="#FFFFFF" opacity="0.15"/><rect x="355" y="175" width="12" height="80" rx="4" fill="#F26522" transform="rotate(-15 361 215)"/><ellipse cx="400" cy="310" rx="50" ry="12" fill="#A4DDFB" opacity="0.3"/>`,
}

const INDUSTRY_VISUALS = {
  'plastic-surgery-seo': { category: 'popular-markets', pictogram: 'plastic-surgery', label: 'Plastic Surgery SEO' },
  'property-management-seo': { category: 'popular-markets', pictogram: 'property-management', label: 'Property Management SEO' },
  'realtor-seo': { category: 'popular-markets', pictogram: 'realtor', label: 'Realtor SEO' },
  'fertility-clinic-seo': { category: 'popular-markets', pictogram: 'fertility-clinic', label: 'Fertility Clinic SEO' },
  'optometrist-seo': { category: 'popular-markets', pictogram: 'optometrist', label: 'Optometrist SEO' },
  'orthodontist-seo': { category: 'popular-markets', pictogram: 'orthodontist', label: 'Orthodontist SEO' },
  'doctor-physician-seo': { category: 'popular-markets', pictogram: 'doctor', label: 'Doctor / Physician SEO' },
  'physiotherapy-seo': { category: 'popular-markets', pictogram: 'physiotherapy', label: 'Physiotherapy SEO' },
  'personal-injury-seo': { category: 'popular-markets', pictogram: 'personal-injury', label: 'Personal Injury SEO' },
  'dentist-seo': { category: 'popular-markets', pictogram: 'dentist', label: 'Dentist SEO' },
  'hvac-seo': { category: 'popular-markets', pictogram: 'hvac', label: 'HVAC SEO' },
  'plumber-seo': { category: 'popular-markets', pictogram: 'plumber', label: 'Plumber SEO' },
  'garage-door-seo': { category: 'automobile-home', pictogram: 'garage-door', label: 'Garage Door SEO' },
  'well-drilling-company-seo': { category: 'automobile-home', pictogram: 'well-drilling', label: 'Well Drilling SEO' },
  'fence-installer-seo': { category: 'automobile-home', pictogram: 'fence', label: 'Fence Installer SEO' },
  'deck-builder-seo': { category: 'automobile-home', pictogram: 'deck-builder', label: 'Deck Builder SEO' },
  'cabinet-manufacturer-seo': { category: 'automobile-home', pictogram: 'cabinet', label: 'Cabinet Manufacturer SEO' },
  'architect-seo': { category: 'automobile-home', pictogram: 'architect', label: 'Architect SEO' },
  'painter-seo': { category: 'automobile-home', pictogram: 'painter', label: 'Painter SEO' },
  'automotive-seo': { category: 'automobile-home', pictogram: 'automotive', label: 'Automotive SEO' },
  'locksmith-service-seo': { category: 'automobile-home', pictogram: 'locksmith', label: 'Locksmith SEO' },
  'interior-designer-seo': { category: 'automobile-home', pictogram: 'interior-designer', label: 'Interior Designer SEO' },
  'flooring-company-seo': { category: 'automobile-home', pictogram: 'flooring', label: 'Flooring Company SEO' },
  'home-builder-and-remodeler-seo': { category: 'automobile-home', pictogram: 'home-builder', label: 'Home Builder SEO' },
  'catering-seo': { category: 'food-health', pictogram: 'catering', label: 'Catering SEO' },
  'breweries-seo': { category: 'food-health', pictogram: 'breweries', label: 'Breweries SEO' },
  'wineries-seo': { category: 'food-health', pictogram: 'wineries', label: 'Wineries SEO' },
  'herbal-product-seo': { category: 'food-health', pictogram: 'herbal', label: 'Herbal Product SEO' },
  'chiropractor-seo': { category: 'food-health', pictogram: 'chiropractor', label: 'Chiropractor SEO' },
  'movers-and-moving-company-seo': { category: 'service-sector', pictogram: 'movers', label: 'Movers SEO' },
  'pest-control-service-seo': { category: 'service-sector', pictogram: 'pest-control', label: 'Pest Control SEO' },
  'cpa-firm-seo': { category: 'service-sector', pictogram: 'cpa', label: 'CPA Firm SEO' },
  'wildlife-removal-company-seo': { category: 'service-sector', pictogram: 'wildlife', label: 'Wildlife Removal SEO' },
  'sign-company-seo': { category: 'service-sector', pictogram: 'sign', label: 'Sign Company SEO' },
  'waste-management-seo': { category: 'service-sector', pictogram: 'waste', label: 'Waste Management SEO' },
  'dry-cleaner-seo': { category: 'service-sector', pictogram: 'dry-cleaner', label: 'Dry Cleaner SEO' },
  'tree-care-seo': { category: 'service-sector', pictogram: 'tree-care', label: 'Tree Care SEO' },
  'roofers-seo': { category: 'service-sector', pictogram: 'roofers', label: 'Roofers SEO' },
  'accountants-seo': { category: 'service-sector', pictogram: 'accountants', label: 'Accountants SEO' },
  'pet-service-seo': { category: 'service-sector', pictogram: 'pet', label: 'Pet Service SEO' },
  'janitorial-service-seo': { category: 'service-sector', pictogram: 'janitorial', label: 'Janitorial Service SEO' },
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function buildSvg(slug, { category, pictogram, label }) {
  const theme = THEMES[category]
  const art = PICTOGRAMS[pictogram] || PICTOGRAMS.doctor
  const safeLabel = escapeXml(label)
  const id = slug.replace(/[^a-z0-9]/g, '')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" role="img" aria-label="${safeLabel} illustration">
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop stop-color="${theme.bg1}"/>
      <stop offset="1" stop-color="${theme.bg2}"/>
    </linearGradient>
    <linearGradient id="card-${id}" x1="120" y1="120" x2="680" y2="480" gradientUnits="userSpaceOnUse">
      <stop stop-color="${theme.card1}"/>
      <stop offset="1" stop-color="${theme.card2}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg-${id})"/>
  <rect x="70" y="70" width="660" height="460" rx="28" fill="url(#card-${id})"/>
  ${art}
  <rect x="110" y="360" width="580" height="130" rx="18" fill="#FFFFFF" opacity="0.12"/>
  <text x="140" y="410" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="30" font-weight="700">${safeLabel}</text>
  <text x="140" y="448" fill="#C9D4F5" font-family="Arial, sans-serif" font-size="17">Local SEO  |  AI Overview  |  GMB  |  PPC  |  SMO</text>
  <rect x="140" y="468" width="95" height="22" rx="11" fill="${theme.accent}"/>
  <rect x="248" y="468" width="95" height="22" rx="11" fill="#6B2E88"/>
  <rect x="356" y="468" width="95" height="22" rx="11" fill="#1E3A5F"/>
  <rect x="464" y="468" width="95" height="22" rx="11" fill="#A4DDFB"/>
</svg>
`
}

fs.mkdirSync(OUT_DIR, { recursive: true })

for (const [slug, config] of Object.entries(INDUSTRY_VISUALS)) {
  const svg = buildSvg(slug, config)
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.svg`), svg, 'utf8')
}

console.log(`Generated ${Object.keys(INDUSTRY_VISUALS).length} industry hero SVGs in ${OUT_DIR}`)
