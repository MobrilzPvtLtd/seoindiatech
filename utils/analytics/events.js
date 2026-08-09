/**
 * Push analytics events to GTM dataLayer.
 * Never include PII (name, email, phone, message, addresses).
 */

import { classifyPageType, getPageTopic, normalizePath } from './pageType'
import { getAttributionParams } from './attribution'

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

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...baseParams(pathname),
    ...params,
  })
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
