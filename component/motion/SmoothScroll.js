'use client'

import { useEffect, useState } from 'react'

/**
 * Lenis smooth scroll - deferred until idle so first paint / hydration stay fast.
 * Skipped on mobile and when user prefers reduced motion.
 */
export default function SmoothScroll({ children }) {
  const [LenisRoot, setLenisRoot] = useState(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    if (prefersReduced || isMobile) return

    const load = () => {
      import('lenis/react').then((mod) => setLenisRoot(() => mod.ReactLenis))
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(load, { timeout: 2500 })
    } else {
      window.setTimeout(load, 1500)
    }
  }, [])

  if (!LenisRoot) return children

  return (
    <LenisRoot
      root
      options={{
        lerp: 0.08,
        duration: 1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
        infinite: false,
      }}
    >
      {children}
    </LenisRoot>
  )
}
