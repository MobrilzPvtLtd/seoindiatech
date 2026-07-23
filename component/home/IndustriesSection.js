import React, { useEffect, useRef } from 'react'
import { FaClinicMedical, FaGraduationCap, FaHome, FaPlane, FaIndustry, FaGavel, FaUtensils, FaShoppingCart, FaCloud, FaDollarSign } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const industries = [
  { name: 'Healthcare', icon: FaClinicMedical, desc: 'Boost patient reach & visibility' },
  { name: 'Education', icon: FaGraduationCap, desc: 'Attract more enrollments online' },
  { name: 'Real Estate', icon: FaHome, desc: 'Generate qualified property leads' },
  { name: 'Travel', icon: FaPlane, desc: 'Drive bookings & travel traffic' },
  { name: 'Manufacturing', icon: FaIndustry, desc: 'Expand B2B digital presence' },
  { name: 'Law Firms', icon: FaGavel, desc: 'Get found by potential clients' },
  { name: 'Restaurants', icon: FaUtensils, desc: 'Increase local foot traffic' },
  { name: 'eCommerce', icon: FaShoppingCart, desc: 'Maximize online store sales' },
  { name: 'SaaS', icon: FaCloud, desc: 'Grow subscriptions & trials' },
  { name: 'Finance', icon: FaDollarSign, desc: 'Build trust & attract clients' },
]

const IndustriesSection = () => {
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

      // Cards pop in with scale + fade
      gsap.fromTo(gridRef.current.children,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.4)', immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-gray-50 dark:bg-gray-900 py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Industries <span className="text-blue-600 dark:text-blue-400">We Serve</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Driving growth across diverse industries
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group flex flex-col rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200 text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {industry.name}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {industry.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
