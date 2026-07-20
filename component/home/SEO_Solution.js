import React, { useState, useEffect, useRef } from 'react'
import { Search, TrendingUp, Target } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const barHeights = [40, 65, 50, 80, 60, 90, 75]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const LINE_PATH = 'M0,60 Q40,50 60,40 Q100,25 140,20 Q180,15 200,10'
const LINE_LENGTH = 260

function useInView(threshold = 0.4) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

function BarChartCard() {
  const { ref, inView } = useInView()

  return (
    <article
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-shadow duration-200 group"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Keyword Rankings</h3>
        </div>
        <span className="shrink-0 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full">
          Live Tracking
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        Track your website&apos;s keyword positions across search engines with real-time monitoring and performance insights.
      </p>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4">
        <div className="flex items-end justify-between gap-1.5 h-24">
          {barHeights.map((h, i) => (
            <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
              <div
                className="w-full rounded-sm bg-gradient-to-t from-blue-300 to-blue-500 transition-[height] ease-out"
                style={{
                  height: inView ? `${h}%` : '0%',
                  transitionDuration: '800ms',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-gray-400 dark:text-gray-500">
          {days.map((d) => (
            <span key={d} className="flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function LineChartCard() {
  const { ref, inView } = useInView()

  return (
    <article
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-shadow duration-200 group"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Organic Traffic Growth</h3>
        </div>
        <span className="shrink-0 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
          +156%
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        Monitor your website&apos;s organic traffic growth over time with detailed analytics and conversion tracking.
      </p>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 h-32">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <clipPath id="revealClip">
              <rect
                x="0"
                y="0"
                width={inView ? 200 : 0}
                height="80"
                style={{ transition: 'width 1200ms cubic-bezier(0.4,0,0.2,1)' }}
              />
            </clipPath>
          </defs>
          <path
            d="M0,60 Q40,50 60,40 Q100,25 140,20 Q180,15 200,10 L200,80 L0,80 Z"
            fill="url(#lineGrad)"
            clipPath="url(#revealClip)"
          />
          <path
            d={LINE_PATH}
            stroke="#10B981"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={LINE_LENGTH}
            strokeDashoffset={inView ? 0 : LINE_LENGTH}
            style={{ transition: 'stroke-dashoffset 1200ms cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
      </div>
    </article>
  )
}

function DonutChartCard() {
  const { ref, inView } = useInView()
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const target = 0.75
  const offset = circumference * (1 - target)

  return (
    <article
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/20 transition-shadow duration-200 group"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">SEO Goal Achievement</h3>
        </div>
        <span className="shrink-0 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full">
          Goal Progress
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
        Track your SEO objectives including keyword targets, traffic milestones, and conversion rate goals.
      </p>

      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 h-32 flex items-center justify-center">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#E2E8F0"
              className="dark:stroke-gray-700"
              strokeWidth="3.5"
            />
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={inView ? offset : circumference}
              style={{ transition: 'stroke-dashoffset 1200ms cubic-bezier(0.4,0,0.2,1)' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-base font-bold text-gray-900 dark:text-white transition-opacity duration-500"
              style={{ opacity: inView ? 1 : 0, transitionDelay: '600ms' }}
            >
              75%
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

const SEOSolution = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      gsap.fromTo(gridRef.current.children,
        { y: 50, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 dark:bg-gray-900 py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
              SEO Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Tailored <span className="text-blue-600 dark:text-blue-400">SEO solutions</span> for Optimal Performance
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Enhance Organic Engagement, Optimize Visibility, and Reach Top Search Results with Strategic SEO.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BarChartCard />
          <LineChartCard />
          <DonutChartCard />
        </div>
      </div>
    </section>
  )
}

export default SEOSolution
