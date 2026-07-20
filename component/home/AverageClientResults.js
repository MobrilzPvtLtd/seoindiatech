import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FaArrowUp, FaChartBar, FaTrophy, FaDollarSign } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ---------- tiny inline charts, kept minimal — no background block ---------- */

const MiniBarChart = ({ color = '#5B4FE9' }) => {
  const bars = [40, 62, 50, 78, 58, 90, 70]
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  return (
    <div className="flex items-end justify-between h-20 gap-1.5">
      {bars.map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
          <div
            className="w-full rounded-sm"
            style={{ height: `${h}%`, backgroundColor: color, opacity: 0.85 }}
          />
          <span className="text-[9px] text-gray-400 dark:text-gray-500">{days[i]}</span>
        </div>
      ))}
    </div>
  )
}

const MiniLineChart = ({ color = '#2FD07C' }) => (
  <div className="h-20">
    <svg viewBox="0 0 120 50" className="w-full h-full" preserveAspectRatio="none">
      <path
        d="M0,40 C15,36 24,30 36,26 C48,22 56,16 72,13 C88,10 100,8 120,3"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
)

const MiniDonut = ({ percent = 75, color = '#5B4FE9' }) => {
  const r = 22
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c
  return (
    <div className="h-20 flex items-center justify-center">
      <svg width="60" height="60" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r={r} fill="none" stroke="#EEECE6" strokeWidth="5" className="dark:stroke-gray-700" />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 28 28)"
        />
        <text x="28" y="32" textAnchor="middle" className="fill-gray-900 dark:fill-white" style={{ fontSize: '11px', fontWeight: 700 }}>
          {percent}%
        </text>
      </svg>
    </div>
  )
}

/* ---------------------------------------------------------------------- */

const metrics = [
  {
    value: '+78%',
    valueColor: 'text-blue-600',
    title: 'Organic Traffic',
    desc: 'Increase in qualified organic sessions month over month.',
    icon: FaArrowUp,
    iconColor: 'text-blue-600',
    chart: <MiniBarChart color="#5B4FE9" />,
  },
  {
    value: '3X',
    valueColor: 'text-emerald-600',
    title: 'Qualified Leads',
    desc: 'More leads that match your ideal customer profile.',
    icon: FaChartBar,
    iconColor: 'text-emerald-600',
    chart: <MiniLineChart color="#2FD07C" />,
  },
  {
    value: 'Top 3',
    valueColor: 'text-amber-600',
    title: 'Keyword Rankings',
    desc: 'Average position for the keywords that matter most.',
    icon: FaTrophy,
    iconColor: 'text-amber-500',
    chart: <MiniDonut percent={92} color="#5B4FE9" />,
  },
  {
    value: '-45%',
    valueColor: 'text-orange-600',
    title: 'Cost Per Lead',
    desc: 'Lower acquisition cost through sharper targeting.',
    icon: FaDollarSign,
    iconColor: 'text-orange-500',
    chart: <MiniDonut percent={45} color="#F5A623" />,
  },
]

const AverageClientResults = () => {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          },
        }
      )

      cardsRef.current.forEach((card, index) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-white dark:bg-gray-900 py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-16 opacity-0">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
              Client Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Real outcomes, not vanity metrics
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
            What data-driven SEO, content, and performance marketing
            typically deliver for our clients.
          </p>
        </div>

        {/* Metric columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={metric.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="opacity-0"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`text-sm ${metric.iconColor}`} />
                  <span className={`text-sm font-semibold ${metric.valueColor}`}>
                    {metric.value}
                  </span>
                </div>

                <p className="mt-3 text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {metric.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400 min-h-[32px] transition-colors duration-300">
                  {metric.desc}
                </p>

                <div className="mt-4">{metric.chart}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AverageClientResults
