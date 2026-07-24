import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const clientLogos = [
    { src: '/images/home/logo1.png', alt: 'DIY Real Estate' },
    { src: '/images/home/logo2.png', alt: 'Tech Project' },
    { src: '/images/home/logo3.png', alt: 'Stay KSA' },
    { src: '/images/home/logo4.png', alt: 'Creativity 360 Pro' },
    { src: '/images/home/logo5.png', alt: 'Creative Agency' },
    { src: '/images/home/logo6.png', alt: 'Digital Solutions' },
    { src: '/images/home/intgra.png', alt: 'Advyra' },
]

const allLogos = [...clientLogos, ...clientLogos, ...clientLogos]

const TrustedBy = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)

    useEffect(() => {
        if (!sectionRef.current) return
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: 24, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' },
                }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative bg-white py-13 md:py-15 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-12 opacity-0">
                    <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                        Trusted Partners
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Loved by brands <br className="sm:hidden" />
                        <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                big and small
                            </span>
                            {/* Decorative curve line */}
                            <svg
                                className="absolute -bottom-2 left-0 w-full h-4 text-blue-200/50"
                                viewBox="0 0 200 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M0,10 C50,-5 150,25 200,10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                />
                            </svg>
                        </span>
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                        From startups to enterprises, our clients consistently achieve top rankings and measurable growth.
                    </p>
                </div>
            </div>

            <div className="relative w-full">
                {/* Edge Gradient Fades - Enhanced */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 z-10 bg-gradient-to-r from-gray-50/80 via-white/60 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 z-10 bg-gradient-to-l from-gray-50/80 via-white/60 to-transparent" />

                <div className="marquee-container">
                    <div className="marquee-track gap-8">
                        {allLogos.map((logo, index) => (
                            <div
                                key={`logo-${index}`}
                                className="flex-shrink-0 flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-400 hover:-translate-y-1"
                                style={{ width: '220px', height: '110px' }}
                            >
                                <div className="relative w-4/5 h-4/5 transition-all duration-300">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                                        sizes="220px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative dots pattern */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300/40"></div>
                </div>
            </div>

            <style jsx>{`
                .marquee-container {
                    overflow: hidden;
                    width: 100%;
                    padding: 20px 0;
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 30s linear infinite;
                }
                .marquee-container:hover .marquee-track {
                    animation-play-state: paused;
                }
                @keyframes marquee-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }
            `}</style>
        </section>
    )
}

export default TrustedBy