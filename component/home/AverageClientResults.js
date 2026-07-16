import React, { useEffect, useRef } from 'react'
import { FaArrowUp, FaChartBar, FaTrophy, FaDollarSign } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const metrics = [
  { value: '78%', label: 'Increase in Organic Traffic', icon: FaArrowUp, iconClass: 'text-green-400', bar: 78, num: 78, suffix: '%' },
  { value: '3X', label: 'More Qualified Leads', icon: FaChartBar, iconClass: 'text-blue-400', bar: 85, num: 3, suffix: 'X' },
  { value: 'Top 3', label: 'Rankings for Target Keywords', icon: FaTrophy, iconClass: 'text-amber-400', bar: 92, num: 3, suffix: '', prefix: 'Top ' },
  { value: '45%', label: 'Decrease in Cost Per Lead', icon: FaDollarSign, iconClass: 'text-emerald-400', bar: 45, num: 45, suffix: '%' },
]

const AverageClientResults = () => {
  const sectionRef = useRef(null)
  const valueRefs = useRef([])
  const barRefs = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Card reveal
      gsap.fromTo(sectionRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      // Count up values
      valueRefs.current.forEach((el, i) => {
        if (!el) return
        const m = metrics[i]
        const obj = { val: 0 }
        gsap.to(obj, {
          val: m.num,
          duration: 1.8,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            if (el) {
              el.textContent = `${m.prefix || ''}${Math.round(obj.val)}${m.suffix}`
            }
          },
        })
      })

      // Animate progress bars
      barRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { width: '0%' },
          {
            width: `${metrics[i].bar}%`,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden rounded-2xl text-white h-full flex flex-col">
      <div className="absolute inset-0 bg-[url('/images/home/hero.png')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-gray-950/90" />
      <div className="relative rounded-2xl border border-white/10 bg-gray-900/80 p-5 md:p-6 lg:p-7 flex flex-col flex-1">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-emerald-500/15 rounded-full border border-emerald-500/20 text-emerald-400">
              Client Results
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white">
            Average Client Results
          </h3>
          <p className="mt-1 text-sm text-gray-400 leading-relaxed">
            Real outcomes delivered through data-driven SEO and performance marketing.
          </p>
        </div>

        <div className="flex-1 grid gap-3 grid-cols-2">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ${metric.iconClass}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <p
                    ref={(el) => (valueRefs.current[idx] = el)}
                    className="text-xl font-bold text-white leading-none"
                  >
                    0
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 leading-snug mt-2">{metric.label}</p>
                  <div className="mt-2 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      ref={(el) => (barRefs.current[idx] = el)}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] text-gray-500">Based on average across 50+ clients</span>
          <span className="text-[10px] text-emerald-400/70 font-medium">Verified Results</span>
        </div>
      </div>
    </section>
  )
}

export default AverageClientResults
