/**
 * Canonical industry catalog - 4 mega-menu columns, 41 SEO landing pages.
 */
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

/** Local hero images by category - relevant SEO / business visuals from /public/images */
const CATEGORY_IMAGES = {
  'popular-markets': [
    '/images/services/local-seo.jpg',
    '/images/Local-seo-Restaurants.jpg',
    '/images/mobile-optimization-for-seo.jpg',
    '/images/seo-services.jpg',
    '/images/SEO_service.jpg',
    '/images/search-engine.jpg',
    '/images/whoweare/ecommerce.png',
    '/images/services/GOOGLE-MAPS-SEO.jpg',
    '/images/ECommerceSEO.png',
    '/images/services/ecommerce-seo.png',
    '/images/whoweare/aboutseo.png',
    '/images/services/reputation.png',
  ],
  'automobile-home': [
    '/images/herobg.jpg',
    '/images/seo-banner.jpg',
    '/images/seo-images.jpg',
    '/images/isometric_12.jpg',
    '/images/uiux.png',
    '/images/digital-branding-banner.png',
    '/images/website_creation2.png',
    '/images/services/design.png',
    '/images/services/our-design.png',
    '/images/services/uibanner.png',
    '/images/whoweare/grow.png',
    '/images/whoweare/start.png',
  ],
  'food-health': [
    '/images/Importance-of-Youtube-Marketing-in-Business-Growth.jpg',
    '/images/ORGANIC.png',
    '/images/services/digital-branding.jpg',
    '/images/services/leading.png',
    '/images/savetime.jpg',
  ],
  'service-sector': [
    '/images/marketresearch.png',
    '/images/automation.png',
    '/images/crm.png',
    '/images/promotion.png',
    '/images/workflow.jpg',
    '/images/services/dashboard.png',
    '/images/services/plan.png',
    '/images/services/reporti.png',
    '/images/services/track.png',
    '/images/whoweare/appointment.png',
    '/images/whoweare/browser.png',
    '/images/whoweare/me.png',
  ],
}

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
    cat.items.forEach((title, index) => {
      const slug = toSlug(title)
      const imagePath = CATEGORY_IMAGES[cat.id][index % CATEGORY_IMAGES[cat.id].length]
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
