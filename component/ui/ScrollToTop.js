'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const RING_RADIUS = 28
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollTop > 400)
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          whileHover={reduceMotion ? undefined : { scale: 1.08, y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.9 }}
          className="group fixed bottom-20 right-4 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-glow-brand transition-colors hover:bg-primary-hover lg:bottom-8 lg:right-8"
          aria-label="Scroll to top"
        >
          {!reduceMotion && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-white/25"
              animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            fill="none"
            className="pointer-events-none absolute -inset-1 -rotate-90"
          >
            <circle
              cx="32"
              cy="32"
              r={RING_RADIUS}
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="3"
            />
            <circle
              cx="32"
              cy="32"
              r={RING_RADIUS}
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
              style={{ transition: 'stroke-dashoffset 150ms linear' }}
            />
          </svg>

          <motion.span
            className="relative flex items-center justify-center"
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowUp className="h-5 w-5 cursor-pointer" />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
