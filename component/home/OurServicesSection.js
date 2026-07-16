import React, { useEffect, useRef } from 'react'
import { FaSearch, FaGoogle, FaMapMarkerAlt, FaPenNib } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Improve rankings and drive organic traffic with our result-oriented SEO strategies.',
    icon: FaSearch,
  },
  {
    title: 'Google Ads (PPC)',
    description: 'Target the right audience and get more leads with high converting PPC campaigns.',
    icon: FaGoogle,
  },
  {
    title: 'Local SEO',
    description: 'Rank in local searches and attract more customers from your area.',
    icon: FaMapMarkerAlt,
  },
  {
    title: 'Content Marketing',
    description: 'Engage your audience with powerful content that builds trust and drives traffic.',
    icon: FaPenNib,
  },
]

const OurServicesSection = () => {
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
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white dark:bg-gray-900 py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group flex flex-col gap-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white text-2xl shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
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
