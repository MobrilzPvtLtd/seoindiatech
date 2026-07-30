export const SITE_URL = 'https://www.seoindiatech.com'

export const SITE_NAME = 'SEO India Tech'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/sit-transparent.png`

export const SITE_DESCRIPTION =
  'SEO India Tech is a global AI-powered digital marketing agency offering SEO, PPC, content marketing, web development, and technology solutions with transparent ROI reporting.'

export const ORGANIZATION = {
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/sit-transparent.png`,
  email: 'sales@seoindiatech.com',
  phone: '+91-8076676731',
  address: {
    streetAddress: 'E 160, E Block, Sector 63',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201301',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.facebook.com/people/SEOIndiatech/',
    'https://www.instagram.com/seoindiatech/',
    'https://x.com/seoindiatech411',
  ],
}

/** Build absolute canonical URL (no trailing slash except homepage). */
export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized.replace(/\/+$/, '') || ''}`
}
