/**
 * Canonical industry catalog - 4 mega-menu columns, 41 SEO landing pages.
 */
import { getIndustryHeroImage } from './industryMedia'
export const INDUSTRY_CATEGORIES = [
  {
    id: 'popular-markets',
    title: 'Popular Markets',
    icon: 'store',
    highlight: false,
    items: [
      'Plastic Surgery SEO',
      'Property Management SEO',
      'Realtor SEO',
      'Fertility Clinic SEO',
      'Optometrist SEO',
      'Orthodontist SEO',
      'Doctor/Physician SEO',
      'Physiotherapy SEO',
      'Personal Injury SEO',
      'Dentist SEO',
      'HVAC SEO',
      'Plumber SEO',
    ],
  },
  {
    id: 'automobile-home',
    title: 'Automobile & Home',
    icon: 'home',
    highlight: true,
    items: [
      'Garage Door SEO',
      'Well Drilling Company SEO',
      'Fence Installer SEO',
      'Deck Builder SEO',
      'Cabinet Manufacturer SEO',
      'Architect SEO',
      'Painter SEO',
      'Automotive SEO',
      'Locksmith Service SEO',
      'Interior Designer SEO',
      'Flooring Company SEO',
      'Home Builder & Remodeler SEO',
    ],
  },
  {
    id: 'food-health',
    title: 'Food & Health',
    icon: 'heart',
    highlight: false,
    items: [
      'Catering SEO',
      'Breweries SEO',
      'Wineries SEO',
      'Herbal Product SEO',
      'Chiropractor SEO',
    ],
  },
  {
    id: 'service-sector',
    title: 'Service Sector',
    icon: 'cog',
    highlight: false,
    items: [
      'Movers & Moving Company SEO',
      'Pest Control Service SEO',
      'CPA Firm SEO',
      'Wildlife Removal Company SEO',
      'Sign Company SEO',
      'Waste Management SEO',
      'Dry Cleaner SEO',
      'Tree Care SEO',
      'Roofers SEO',
      'Accountants SEO',
      'Pet Service SEO',
      'Janitorial Service SEO',
    ],
  },
]

export function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Per-industry hero visuals - unique illustration per landing page */

const CATEGORY_CONTEXT = {
  'popular-markets': {
    audience: 'patients and local families',
    clientele: 'patients',
    localFocus: 'medical and professional practices that depend on trust, reviews, and local visibility',
    serviceExamples: 'consultations, treatments, appointments, and emergency calls',
  },
  'automobile-home': {
    audience: 'homeowners and property owners',
    clientele: 'customers',
    localFocus: 'home improvement, trades, and automotive businesses competing in crowded local markets',
    serviceExamples: 'installations, repairs, renovations, and scheduled service visits',
  },
  'food-health': {
    audience: 'diners, retailers, and wellness-conscious consumers',
    clientele: 'customers',
    localFocus: 'food, beverage, and wellness brands that need discovery and reputation online',
    serviceExamples: 'catering orders, tastings, retail purchases, and clinic appointments',
  },
  'service-sector': {
    audience: 'commercial and residential clients',
    clientele: 'clients',
    localFocus: 'B2B and B2C service firms where leads come from search, referrals, and repeat business',
    serviceExamples: 'service calls, contracts, estimates, and recurring bookings',
  },
}

export function buildCatalogEntries() {
  const entries = []

  INDUSTRY_CATEGORIES.forEach((cat) => {
    cat.items.forEach((title) => {
      const slug = toSlug(title)
      const imagePath = getIndustryHeroImage(slug, cat.id)
      const ctx = CATEGORY_CONTEXT[cat.id]
      const label = title.replace(/\s+SEO$/i, '').trim()

      entries.push({
        slug,
        title,
        label,
        categoryId: cat.id,
        categoryTitle: cat.title,
        heroImage: imagePath,
        audience: ctx.audience,
        clientele: ctx.clientele,
        localFocus: ctx.localFocus,
        serviceExamples: ctx.serviceExamples,
        searchExamples: [
          `${label.toLowerCase()} near me`,
          `best ${label.toLowerCase()} services`,
          `${label.toLowerCase()} cost`,
          `${label.toLowerCase()} reviews`,
        ],
      })
    })
  })

  return entries
}
