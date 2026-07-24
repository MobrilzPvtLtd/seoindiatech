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
        color: 'blue',
        gradient: 'from-blue-600 to-indigo-600',
        shadow: 'shadow-blue-500/20',
    },
    {
        title: 'Digital Marketing',
        description: 'Grow your local visibility, attract nearby customers, and rank higher in local searches and Google Maps.',
        icon: FaMapMarkerAlt,
        href: '/services/digital-marketing',
        color: 'rose',
        gradient: 'from-rose-600 to-orange-600',
        shadow: 'shadow-rose-500/20',
    },
    {
        title: 'Google Ads (PPC)',
        description: 'Drive targeted traffic, generate quality leads, and maximize ROI with data-driven PPC advertising campaigns.',
        icon: FaGoogle,
        href: '/services/paid-advertising',
        color: 'emerald',
        gradient: 'from-emerald-600 to-teal-600',
        shadow: 'shadow-emerald-500/20',
    },
    {
        title: 'Design and Development',
        description: 'End-to-end design and development solutions that combine stunning visuals with high-performance technology.',
        icon: FaPaintBrush,
        href: '/services/design-and-development',
        color: 'violet',
        gradient: 'from-violet-600 to-purple-600',
        shadow: 'shadow-violet-500/20',
    },
]

const OurServiceSection = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation for header
            gsap.from(headerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: headerRef.current, start: 'top 90%' },
            })

            // Staggered entrance for cards
            gsap.from('.service-card', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.7)',
                scrollTrigger: { trigger: '.service-grid', start: 'top 85%' },
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-white dark:bg-slate-950 py-13 md:py-15 overflow-hidden transition-colors duration-500">

            {/* 1. Background Decoration (Subtle Grid) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Tailored Solutions for <br /> <span className="text-blue-600">Digital Growth</span>
                    </h2>
                    <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg">
                        We combine data-driven strategies with cutting-edge design to help your business dominate the digital landscape.
                    </p>
                </div>

                {/* Service Grid */}
                <div className="service-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Link key={index} href={service.href} className="service-card block group h-full">
                                <div className={`relative h-full flex flex-col bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl ${service.shadow} group-hover:-translate-y-3`}>

                                    {/* Icon Area */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-2xl shadow-lg mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                        <Icon />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                                        {service.description}
                                    </p>

                                    {/* Interactive Button-like Link */}
                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform">
                                        <span>Explore Service</span>
                                        <FaArrowRight className="text-xs text-blue-600" />
                                    </div>

                                    {/* Background Glow Effect (Hover only) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] rounded-[2rem] transition-opacity duration-500`} />
                                </div>
                            </Link>
                        )
                    })}
                </div>

                {/* CTA Section (Optional but adds a nice finish) */}
                <div className="mt-20 text-center">
                    <p className="text-slate-400 font-medium italic">
                        Looking for a custom solution? <Link href="/contact-us" className="text-blue-600 font-bold hover:underline">Let&apos;s talk about your project.</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurServiceSection
