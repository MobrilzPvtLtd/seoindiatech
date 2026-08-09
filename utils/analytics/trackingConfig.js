/** GTM container — see utils/analytics/gtmGa4Map.js */
export { GTM_CONTAINER_ID } from './gtmGa4Map'

/**
 * Commercial CTA text patterns (case-insensitive).
 * Normal navigation links are not tracked as CTAs.
 */
export const CTA_TEXT_PATTERNS = [
  /get\s+(?:your\s+)?free\s+proposal/i,
  /get\s+seo\s+consultation/i,
  /request\s+a\s+quote/i,
  /contact\s+our\s+seo/i,
  /view\s+seo\s+packages/i,
  /discuss\s+your\s+seo/i,
  /submit\s+request/i,
  /get\s+started(?:\s+today|\s+now|\s+with)?/i,
  /book\s+(?:a\s+)?(?:free\s+)?consultation/i,
  /schedule\s+(?:a\s+)?call/i,
  /talk\s+to\s+(?:an?\s+)?expert/i,
  /claim\s+your\s+free/i,
]

/** Paths that are commercial destinations when linked from CTAs */
export const CTA_DESTINATION_PATHS = [
  '/contact-us',
  '/seo-packages',
  '#contact-form',
  '#faq',
]

export const KNOWN_FORMS = [
  { id: 'hero_contact_form', type: 'contact', pages: ['homepage'] },
  { id: 'contact_form_page', type: 'contact', pages: ['contact-us'] },
  { id: 'contact_form_section', type: 'contact', pages: ['service', 'solution', 'core'] },
  { id: 'faq_contact_form', type: 'contact', pages: ['homepage'] },
  { id: 'seo_service_form', type: 'service_inquiry', pages: ['service'] },
  { id: 'ppc_form', type: 'service_inquiry', pages: ['service'] },
  { id: 'uiux_form', type: 'service_inquiry', pages: ['service'] },
  { id: 'digital_branding_form', type: 'service_inquiry', pages: ['service'] },
  { id: 'design_development_form', type: 'service_inquiry', pages: ['service'] },
]
