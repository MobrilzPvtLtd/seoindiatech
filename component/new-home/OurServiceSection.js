import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaSearch, FaGoogle, FaMapMarkerAlt, FaPaintBrush } from 'react-icons/fa'
import { HiArrowUpRight } from 'react-icons/hi2'

const MotionLink = motion(Link)

/**
 * Each service is framed as a metric the client actually watches —
 * rankings, local visibility, ROI, conversion rate — and paired with
 * a small hand-drawn trend line that "climbs" on hover. The kicker
 * labels aren't decoration; they name the number that moves.
 */
const services = [
    {
        kicker: 'Rankings',
        title: 'Search Engine Optimization',
        description: 'Boost your website rankings, increase organic traffic, and grow online visibility with result-oriented SEO strategies.',
        icon: FaSearch,
        href: '/services/seo',
        accent: '#16C784',
        accentSoft: 'rgba(22, 199, 132, 0.12)',
        spark: 'M2,34 C 14,32 18,26 26,27 C 34,28 36,18 46,16 C 56,14 60,20 70,10 C 78,2 84,6 92,3',
    },
    {
        kicker: 'Local visibility',
        title: 'Digital Marketing',
        description: 'Grow your local visibility, attract nearby customers, and rank higher in local searches and Google Maps.',
        icon: FaMapMarkerAlt,
        href: '/services/digital-marketing',
        accent: '#FF6B4A',
        accentSoft: 'rgba(255, 107, 74, 0.12)',
        spark: 'M2,30 C 10,31 16,34 22,30 C 30,25 32,14 42,15 C 52,16 54,24 64,20 C 74,16 78,6 92,4',
    },
    {
        kicker: 'ROI per click',
        title: 'Google Ads (PPC)',
        description: 'Drive targeted traffic, generate quality leads, and maximize ROI with data-driven PPC advertising campaigns.',
        icon: FaGoogle,
        href: '/services/paid-advertising',
        accent: '#3355FF',
        accentSoft: 'rgba(51, 85, 255, 0.12)',
        spark: 'M2,36 C 12,35 16,30 24,31 C 32,32 34,22 44,23 C 54,24 56,12 66,9 C 76,6 82,10 92,2',
    },
    {
        kicker: 'Conversion rate',
        title: 'Design and Development',
        description: 'End-to-end design and development solutions that combine stunning visuals with high-performance technology.',
        icon: FaPaintBrush,
        href: '/services/design-and-development',
        accent: '#8B5CF6',
        accentSoft: 'rgba(139, 92, 246, 0.12)',
        spark: 'M2,32 C 12,30 18,32 26,26 C 34,20 36,24 46,18 C 56,12 60,16 70,11 C 80,6 84,8 92,3',
    },
]

const headerVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
    hidden: { y: 44, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

const OurServiceSection = () => {
    return (
        <section className="relative bg-[#F6F7F9] dark:bg-[#101119] py-15 md:py-20 overflow-hidden transition-colors duration-500">
            {/* Faint ascending watermark line across the whole section */}
            <svg
                className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.05] dark:opacity-[0.08]"
                viewBox="0 0 1200 500"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M0,420 C 150,410 220,300 340,320 C 460,340 500,180 640,200 C 780,220 820,60 980,90 C 1080,108 1120,40 1200,20"
                    stroke="#3355FF"
                    strokeWidth="3"
                />
            </svg>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-8 md:mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={headerVariants}
                >
                    {/* <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-8 bg-[#3355FF]" />
                        <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#3355FF] dark:text-[#7C93FF]">
                            What we do
                        </span>
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-semibold text-[#14161F] dark:text-white tracking-tight leading-[1.08]">
                        Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">Services</span>
                    </h2>
                    <p className="mt-6 text-[#64748B] dark:text-slate-400 text-lg leading-relaxed">
                        Rankings, visibility, return on ad spend, and conversion rate — every
                        engagement is built to move at least one of these, and we show you the line.
                    </p>
                </motion.div>

                {/* Service Grid */}
                <motion.div
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={gridVariants}
                >
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <MotionLink
                                key={index}
                                href={service.href}
                                variants={cardVariants}
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                className="service-card group relative flex h-full flex-col rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#171927] p-7 hover:border-transparent hover:shadow-[0_18px_40px_-16px_rgba(20,22,31,0.18)]"
                                style={{ '--accent': service.accent, '--accent-soft': service.accentSoft }}
                            >
                                {/* Kicker */}
                                {/* <span
                                    className="mb-6 inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em]"
                                    style={{ color: service.accent, backgroundColor: service.accentSoft }}
                                >
                                    {service.kicker}
                                </span> */}

                                {/* Icon + Title row */}
                                <div className="mb-3 flex items-center gap-3">
                                    <div
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg transition-transform duration-300 group-hover:scale-105"
                                        style={{ color: service.accent, backgroundColor: service.accentSoft }}
                                    >
                                        <Icon />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#14161F] dark:text-white leading-snug">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="mb-2 flex-1 text-sm leading-relaxed text-[#64748B] dark:text-slate-400">
                                    {service.description}
                                </p>

                                {/* Trend line */}
                                <svg viewBox="0 0 94 40" className="mb-5 h-8 w-full" fill="none">
                                    <path
                                        d={service.spark}
                                        stroke={service.accent}
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        className="spark-path"
                                    />
                                </svg>

                                {/* CTA */}
                                <div className="flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.08] pt-5">
                                    <span className="text-sm font-semibold text-[#14161F] dark:text-white">
                                        Explore service
                                    </span>
                                    <span className="cta-circle flex h-8 w-8 items-center justify-center rounded-full text-[#14161F] dark:text-white transition-colors duration-300 group-hover:text-white">
                                        <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </MotionLink>
                        )
                    })}
                </motion.div>

                {/* CTA banner */}
                <motion.div
                    className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-[#171927] px-8 py-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={lineVariants}
                    style={{ transformOrigin: 'left center' }}
                >
                    <div>
                        <p className="text-lg font-semibold text-[#14161F] dark:text-white">
                            Not sure which number to move first?
                        </p>
                        <p className="mt-1 text-sm text-[#64748B] dark:text-slate-400">
                            Tell us where growth is stalling and we'll map the right mix of services.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                    >
                        Talk about your project
                        <HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
                .spark-path {
                    stroke-dasharray: 140;
                    stroke-dashoffset: 140;
                    transition: stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .service-card:hover .spark-path {
                    stroke-dashoffset: 0;
                }
                .service-card:hover .cta-circle {
                    background-color: var(--accent);
                }
                @media (prefers-reduced-motion: reduce) {
                    .spark-path {
                        transition: none;
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </section>
    )
}

export default OurServiceSection