import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FaSearch, FaGoogle, FaMapMarkerAlt, FaPenNib } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve rankings and drive organic traffic with our result-oriented SEO strategies.',
    icon: FaSearch,
    lightBg: 'bg-blue-50',
    darkBg: 'dark:bg-blue-900/30',
    lightText: 'text-blue-600',
    darkText: 'dark:text-blue-400',
  },
  {
    title: 'Google Ads (PPC)',
    description: 'Target the right audience and get more leads with high converting PPC campaigns.',
    icon: FaGoogle,
    lightBg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/30',
    lightText: 'text-emerald-600',
    darkText: 'dark:text-emerald-400',
  },
  {
    title: 'Local SEO',
    description: 'Rank in local searches and attract more customers from your area.',
    icon: FaMapMarkerAlt,
    lightBg: 'bg-rose-50',
    darkBg: 'dark:bg-rose-900/30',
    lightText: 'text-rose-600',
    darkText: 'dark:text-rose-400',
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with powerful content that builds trust and drives traffic.',
    icon: FaPenNib,
    lightBg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/30',
    lightText: 'text-violet-600',
    darkText: 'dark:text-violet-400',
  },
]

const OurServicesSection = () => {
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
        gsap.fromTo(
          card,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
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
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14 opacity-0">
          {/* <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
              Our Services
            </span>
          </div> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Our services
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
            The core disciplines we lean on to get your business found,
            trusted, and chosen.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-gray-900/50 opacity-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg transition-transform duration-300 group-hover:scale-105 ${service.lightBg} ${service.darkBg} ${service.lightText} ${service.darkText}`}>
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection
