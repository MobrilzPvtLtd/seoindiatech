'use client'

import { useEffect } from 'react'

const GTM_ID = 'GTM-5TS8QJRM'

function injectGtm() {
  if (typeof window === 'undefined' || window.__gtmLoaded) return
  window.__gtmLoaded = true

  window.dataLayer = window.dataLayer || []
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
