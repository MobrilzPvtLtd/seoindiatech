'use client'

import { useEffect } from 'react'
import { getGa4MeasurementId, getGtmContainerId, pushAnalyticsConfig } from '@/utils/analytics/gtmGa4Map'

const GTM_ID = getGtmContainerId()

function injectGa4() {
  if (typeof window === 'undefined' || window.__ga4Loaded) return

  const ga4Id = getGa4MeasurementId()
  if (!ga4Id) return

  window.__ga4Loaded = true
  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = window.gtag || gtag
  gtag('js', new Date())
  // SPA page views handled by AnalyticsProvider — avoid duplicate automatic hits.
  gtag('config', ga4Id, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
  document.head.appendChild(script)
}

function injectGtm() {
  if (typeof window === 'undefined' || window.__gtmLoaded) return
  window.__gtmLoaded = true

  injectGa4()

  window.dataLayer = window.dataLayer || []
  pushAnalyticsConfig()
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
  document.head.appendChild(script)
}

export default function DeferredGtm() {
  useEffect(() => {
    const onInteract = () => {
      injectGtm()
      window.removeEventListener('scroll', onInteract)
      window.removeEventListener('click', onInteract)
      window.removeEventListener('touchstart', onInteract)
      window.removeEventListener('keydown', onInteract)
    }

    window.addEventListener('scroll', onInteract, { passive: true, once: true })
    window.addEventListener('click', onInteract, { once: true })
    window.addEventListener('touchstart', onInteract, { once: true, passive: true })
    window.addEventListener('keydown', onInteract, { once: true })

    const idleTimer = window.setTimeout(onInteract, 10000)

    return () => window.clearTimeout(idleTimer)
  }, [])

  return null
}
