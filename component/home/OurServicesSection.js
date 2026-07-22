import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FaSearch, FaGoogle, FaMapMarkerAlt, FaPaintBrush, FaArrowRight } from 'react-icons/fa'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Boost your website rankings, increase organic traffic, and grow online visibility with result-oriented SEO strategies.',
    icon: FaSearch,
    href: '/services/seo',
    lightBg: 'bg-blue-50',
    darkBg: 'dark:bg-blue-900/20',
    lightText: 'text-blue-600',
    darkText: 'dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800/30',
    hoverBorder: 'hover:border-blue-400 dark:hover:border-blue-500/50',
    shadowHover: 'hover:shadow-blue-500/10',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your local visibility, attract nearby customers, and rank higher in local searches and Google Maps.',
    icon: FaMapMarkerAlt,
    href: '/services/digital-marketing',
    lightBg: 'bg-rose-50',
    darkBg: 'dark:bg-rose-900/20',
    lightText: 'text-rose-600',
    darkText: 'dark:text-rose-400',
    borderColor: 'border-rose-200 dark:border-rose-800/30',
    hoverBorder: 'hover:border-rose-400 dark:hover:border-rose-500/50',
    shadowHover: 'hover:shadow-rose-500/10',
    gradient: 'from-rose-500 to-rose-600',
  },
  {
    title: 'Google Ads (PPC)',
    description: 'Drive targeted traffic, generate quality leads, and maximize ROI with data-driven PPC advertising campaigns.',
    icon: FaGoogle,
    href: '/services/paid-advertising',
    lightBg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/20',
    lightText: 'text-emerald-600',
    darkText: 'dark:text-emerald-400',
    borderColor: 'border-emerald-200 dark:border-emerald-800/30',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500/50',
    shadowHover: 'hover:shadow-emerald-500/10',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Design and Development',
    description: 'End-to-end design and development solutions that combine stunning visuals with high-performance technology.',
    icon: FaPaintBrush,
    href: '/services/design-and-development',
    lightBg: 'bg-violet-50',
    darkBg: 'dark:bg-violet-900/20',
    lightText: 'text-violet-600',
    darkText: 'dark:text-violet-400',
    borderColor: 'border-violet-200 dark:border-violet-800/30',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500/50',
    shadowHover: 'hover:shadow-violet-500/10',
    gradient: 'from-violet-500 to-violet-600',
  },
]

const OurServicesSection = () => {
  const headerRef = useRef(null)
  const cardsRef = useRef([])
  const decorativeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Decorative line animation
      gsap.fromTo(
        decorativeRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: decorativeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Cards animation with enhanced effects
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            rotationX: 3,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Our services
          </h2>

          <div ref={decorativeRef} className="w-20 h-1 mx-auto mt-4 bg-blue-500 rounded-full origin-center" />

          <p className="mt-5 text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            The core disciplines we lean on to get your business found, trusted, and chosen.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const cardContent = (
              <div
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative flex flex-col h-full gap-4 rounded-2xl border ${service.borderColor} ${service.hoverBorder} bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${service.shadowHover} opacity-0 cursor-pointer overflow-hidden`}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.lightText.replace('text-', '')} ${service.darkText.replace('dark:text-', '')} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 blur-xl transition-opacity duration-500`} />

                <div className="relative flex items-center gap-3">
                  <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${service.lightBg} ${service.darkBg} ${service.lightText} ${service.darkText} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="relative text-sm leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300 flex-1">
                  {service.description}
                </p>

                {/* Learn more link with arrow - always visible but animated */}
                <div className="relative flex items-center gap-2 text-sm font-medium transition-all duration-500">
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    Learn More
                  </span>
                  <FaArrowRight className={`text-xs transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${service.lightText} ${service.darkText} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity duration-500 rounded-tr-2xl`} />

                {/* Click hint - small arrow indicator in corner */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-xs shadow-lg`}>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </div>

                {/* Hover ring effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.lightText.replace('text-', '')}/20 dark:group-hover:border-${service.darkText.replace('dark:text-', '')}/20 transition-all duration-500 pointer-events-none`} />
              </div>
            )

            return service.href ? (
              <Link key={service.title} href={service.href} className="block h-full">
                {cardContent}
              </Link>
            ) : (
              cardContent
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurServicesSection