/**
 * Push analytics events to GTM dataLayer and GA4 (gtag).
 * Never include PII (name, email, phone, message, addresses).
 */

import { classifyPageType, getPageTopic, normalizePath } from './pageType'
import { getAttributionParams } from './attribution'
import { GTM_GA4_EVENT_MAP, getGa4MeasurementId } from './gtmGa4Map'

function getGa4EventName(dataLayerEvent) {
  const row = GTM_GA4_EVENT_MAP.find((entry) => entry.dataLayerEvent === dataLayerEvent)
  return row?.ga4EventName || dataLayerEvent
}

function pushGtagEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const ga4EventName = getGa4EventName(eventName)
  const ga4Id = getGa4MeasurementId()
  if (!ga4Id) return

  const gtagParams = {
    page_path: params.page_url,
    page_location: typeof window !== 'undefined' ? `${window.location.origin}${params.page_url || ''}` : undefined,
    page_title: params.page_title,
    page_type: params.page_type,
    page_topic: params.page_topic,
    form_name: params.form_name,
    form_type: params.form_type,
    cta_location: params.cta_location,
    cta_text: params.cta_text,
    destination: params.destination,
    service: params.service,
    industry: params.industry,
    city: params.city,
    error_type: params.error_type,
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    first_touch_source: params.first_touch_source,
    first_touch_landing_page: params.first_touch_landing_page,
  }

  if (eventName === 'page_view') {
    window.gtag('config', ga4Id, {
      page_path: params.page_url,
      page_title: params.page_title,
    })
    return
  }

  window.gtag('event', ga4EventName, gtagParams)
}

function baseParams(pathname) {
  const path = normalizePath(pathname || (typeof window !== 'undefined' ? window.location.pathname : '/'))
  return {
    page_url: path,
    page_type: classifyPageType(path),
    page_topic: getPageTopic(path),
    ...getAttributionParams(),
  }
}

export function pushEvent(eventName, params = {}, pathname) {
  if (typeof window === 'undefined') return

  const payload = {
    event: eventName,
    ...baseParams(pathname),
    ...params,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
  pushGtagEvent(eventName, payload)
}

export function trackPageView(pathname, title) {
  pushEvent('page_view', {
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
  }, pathname)
}

export function trackPhoneClick({ ctaLocation = '', pathname } = {}) {
  pushEvent('phone_click', { cta_location: ctaLocation }, pathname)
}

export function trackEmailClick({ ctaLocation = '', pathname } = {}) {
  pushEvent('email_click', { cta_location: ctaLocation }, pathname)
}

export function trackWhatsAppClick({ ctaLocation = 'floating_button', pathname } = {}) {
  pushEvent('whatsapp_click', { cta_location: ctaLocation }, pathname)
}

export function trackCtaClick({ ctaText, ctaLocation = '', destination = '', pathname } = {}) {
  pushEvent('cta_click', {
    cta_text: (ctaText || '').slice(0, 80),
    cta_location: ctaLocation,
    destination: destination || '',
  }, pathname)
}

export function trackFormStart({ formName, formType, pathname, service, industry, city } = {}) {
  pushEvent('form_start', {
    form_name: formName,
    form_type: formType,
    service: service || '',
    industry: industry || '',
    city: city || '',
  }, pathname)
}

export function trackFormSubmit({ formName, formType, pathname, service, industry, city } = {}) {
  pushEvent('form_submit', {
    form_name: formName,
    form_type: formType,
    service: service || '',
    industry: industry || '',
    city: city || '',
  }, pathname)
}

export function trackFormError({ formName, formType, errorType = 'submission_failed', pathname } = {}) {
  pushEvent('form_error', {
    form_name: formName,
    form_type: formType,
    error_type: errorType,
  }, pathname)
}
