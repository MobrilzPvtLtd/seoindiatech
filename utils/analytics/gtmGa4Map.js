/**
 * GTM → GA4 event mapping specification.
 * Configure matching tags/triggers in GTM container GTM-5TS8QJRM.
 * Set NEXT_PUBLIC_GA4_MEASUREMENT_ID in environment when available.
 */

export const GTM_CONTAINER_ID = 'GTM-5TS8QJRM'

/** @type {{ dataLayerEvent: string, ga4EventName: string, isConversion: boolean, parameters: string[] }[]} */
export const GTM_GA4_EVENT_MAP = [
  {
    dataLayerEvent: 'page_view',
    ga4EventName: 'page_view',
    isConversion: false,
    parameters: ['page_url', 'page_type', 'page_topic', 'page_title', 'utm_source', 'utm_medium', 'utm_campaign'],
  },
  {
    dataLayerEvent: 'form_start',
    ga4EventName: 'form_start',
    isConversion: false,
    parameters: ['form_name', 'form_type', 'page_type', 'page_url', 'service', 'industry', 'city'],
  },
  {
    dataLayerEvent: 'form_submit',
    ga4EventName: 'generate_lead',
    isConversion: true,
    parameters: ['form_name', 'form_type', 'page_type', 'page_url', 'service', 'industry', 'city'],
  },
  {
    dataLayerEvent: 'form_error',
    ga4EventName: 'form_error',
    isConversion: false,
    parameters: ['form_name', 'form_type', 'error_type', 'page_type', 'page_url'],
  },
  {
    dataLayerEvent: 'phone_click',
    ga4EventName: 'phone_click',
    isConversion: true,
    parameters: ['cta_location', 'page_type', 'page_url'],
  },
  {
    dataLayerEvent: 'email_click',
    ga4EventName: 'email_click',
    isConversion: false,
    parameters: ['cta_location', 'page_type', 'page_url'],
  },
  {
    dataLayerEvent: 'whatsapp_click',
    ga4EventName: 'whatsapp_click',
    isConversion: true,
    parameters: ['cta_location', 'page_type', 'page_url'],
  },
  {
    dataLayerEvent: 'cta_click',
    ga4EventName: 'cta_click',
    isConversion: false,
    parameters: ['cta_text', 'cta_location', 'destination', 'page_type', 'page_url'],
  },
]

export const GA4_CUSTOM_DIMENSIONS = [
  'page_type',
  'page_topic',
  'form_name',
  'form_type',
  'cta_location',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'first_touch_source',
  'first_touch_landing_page',
]

export function getGa4MeasurementId() {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    const id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID.trim()
    if (id && id.startsWith('G-')) return id
  }
  return null
}

export function getGtmContainerId() {
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GTM_CONTAINER_ID) {
    return process.env.NEXT_PUBLIC_GTM_CONTAINER_ID.trim() || GTM_CONTAINER_ID
  }
  return GTM_CONTAINER_ID
}

export function pushAnalyticsConfig() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  const ga4Id = getGa4MeasurementId()

  window.dataLayer.push({
    event: 'analytics_config',
    gtm_container_id: GTM_CONTAINER_ID,
    ga4_measurement_id: ga4Id || 'GA4_MEASUREMENT_ID_REQUIRED',
    ga4_events: GTM_GA4_EVENT_MAP.map((e) => e.dataLayerEvent),
    ga4_conversions: GTM_GA4_EVENT_MAP.filter((e) => e.isConversion).map((e) => e.ga4EventName),
  })
}
