'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { initAttribution } from '@/utils/analytics/attribution'
import {
  trackCtaClick,
  trackEmailClick,
  trackPageView,
  trackPhoneClick,
  trackWhatsAppClick,
} from '@/utils/analytics/events'
import { CTA_DESTINATION_PATHS, CTA_TEXT_PATTERNS } from '@/utils/analytics/trackingConfig'
import { normalizePath } from '@/utils/analytics/pageType'

function getClickableTarget(event) {
  const el = event.target?.closest?.('a, button, [role="button"]')
  if (!el) return null
  return el
}

function getCtaLocation(el) {
  const section = el.closest('[data-cta-section], section, header, footer, main')
  if (!section) return 'page'
  if (section.id) return section.id
  if (section.tagName === 'HEADER') return 'header'
  if (section.tagName === 'FOOTER') return 'footer'
  if (section.dataset?.ctaSection) return section.dataset.ctaSection
  return 'page'
}

function isCommercialCta(el, text) {
  if (el.dataset?.trackCta === 'true') return true
  const href = el.getAttribute('href') || ''
  if (CTA_DESTINATION_PATHS.some((p) => href.includes(p))) return true
  return CTA_TEXT_PATTERNS.some((re) => re.test(text))
}

function handleDelegatedClick(event) {
  const el = getClickableTarget(event)
  if (!el) return

  const pathname = normalizePath(window.location.pathname)
  const href = el.getAttribute('href') || ''
  const text = (el.getAttribute('aria-label') || el.textContent || '').trim().replace(/\s+/g, ' ')
  const location = getCtaLocation(el)

  if (href.startsWith('tel:')) {
    trackPhoneClick({ ctaLocation: location, pathname })
    return
  }

  if (href.startsWith('mailto:')) {
    trackEmailClick({ ctaLocation: location, pathname })
    return
  }

  if (/wa\.me|whatsapp\.com|api\.whatsapp/i.test(href)) {
    trackWhatsAppClick({ ctaLocation: location, pathname })
    return
  }

  if (isCommercialCta(el, text)) {
    trackCtaClick({
      ctaText: text.slice(0, 80),
      ctaLocation: location,
      destination: href.startsWith('/') || href.startsWith('#') ? href : href.split('?')[0],
      pathname,
    })
  }
}

export default function AnalyticsProvider({ children }) {
  const router = useRouter()
  const lastPathRef = useRef('')

  useEffect(() => {
    initAttribution(router.asPath.split('?')[0])

    const onRoute = (url) => {
      const path = url.split('?')[0]
      if (path === lastPathRef.current) return
      lastPathRef.current = path
      initAttribution(path)
      trackPageView(path)
    }

    router.events.on('routeChangeComplete', onRoute)
    return () => router.events.off('routeChangeComplete', onRoute)
  }, [router.events, router.asPath])

  useEffect(() => {
    const path = router.asPath.split('?')[0]
    if (path !== lastPathRef.current) {
      lastPathRef.current = path
      trackPageView(path)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleDelegatedClick, true)
    return () => document.removeEventListener('click', handleDelegatedClick, true)
  }, [])

  return children
}
