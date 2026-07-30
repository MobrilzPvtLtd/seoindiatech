'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Clock,
  Globe,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import FloatingStatPill from '@/component/ui/FloatingStatPill'
import SideConnectTab from '@/component/ui/SideConnectTab'
import ScribbleText from '@/component/ui/ScribbleText'
import HeroVisual from '@/component/new-home/HeroVisual'

const statPills = [
  {
    icon: Clock,
    label: '14+ Years of Legacy',
    metric: 'Driven by Results',
    metricColor: 'text-accent',
    className: 'absolute -left-4 top-4 lg:-left-12 lg:top-8 z-20',
    delay: 0.5,
  },
  {
    icon: Globe,
    label: 'Brand Exposure',
    metric: 'Scale Visibility 10X',
    metricColor: 'text-accent',
    className: 'absolute -right-2 top-0 lg:-right-6 lg:top-2 z-20',
    delay: 0.6,
  },
  {
    icon: Rocket,
    label: 'Boosting Revenue',
    metric: 'Scale Revenue Up to 6x',
    metricColor: 'text-accent',
    className: 'absolute -left-2 bottom-32 lg:-left-10 lg:bottom-36 z-20',
    delay: 0.7,
  },
  {
    icon: TrendingUp,
    label: 'Improved Leads',
    metric: 'Drive Up to 8x More Leads',
    metricColor: 'text-accent',
    className: 'absolute -right-1 bottom-24 lg:right-0 lg:bottom-28 z-20',
    delay: 0.8,
  },
]

const mobilePills = [
  { icon: Clock, label: '14+ Years', metric: 'Driven by Results', metricColor: 'text-accent' },
  { icon: Globe, label: 'Exposure', metric: '10X Visibility', metricColor: 'text-accent' },
  { icon: Rocket, label: 'Revenue', metric: 'Up to 6x', metricColor: 'text-accent' },
  { icon: TrendingUp, label: 'Leads', metric: 'Up to 8x', metricColor: 'text-accent' },
]

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden hero-grid-bg">
      <div className="pointer-events-none absolute inset-0 hero-glow-primary" />
      <div className="pointer-events-none absolute inset-0 hero-glow-secondary" />
      <div className="pointer-events-none absolute inset-0 hero-glow-cta" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-32 lg:pt-36 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* Left - Autus-style typography stack */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left text-white hero-copy"
          >
            <h1 className="font-heading text-[1.85rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]">
              Search &amp; Performance
              <br />
              <ScribbleText className="text-accent" scribbleColor="#A4DDFB">Marketing</ScribbleText> Agency
            </h1>

            <p className="mt-5 text-base font-semibold text-accent sm:text-lg lg:text-xl leading-snug">
              Result-Oriented, AI-Powered Digital Marketing Agency
            </p>
            <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
              Your trusted partner for measurable online growth with AI-enabled solutions
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base mx-auto lg:mx-0">
              Search, ads, and technology under one roof - SEO INDIA TECH helps global brands
              rank higher, convert better, and scale revenue across USA, UK, Australia, and beyond.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/services/ai-seo"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
              >
                Explore AI-Powered Services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 px-8 py-4 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5"
              >
                Book Free Consultation Call
              </Link>
            </div>
          </motion.div>

          {/* Right - visual + floating pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              <HeroVisual />
              <div className="hidden lg:block">
                {statPills.map((pill) => (
                  <FloatingStatPill
                    key={pill.label}
                    icon={pill.icon}
                    label={pill.label}
                    metric={pill.metric}
                    metricColor={pill.metricColor}
                    className={pill.className}
                    delay={pill.delay}
                    float
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              {mobilePills.map((pill, i) => (
                <FloatingStatPill
                  key={pill.label}
                  icon={pill.icon}
                  label={pill.label}
                  metric={pill.metric}
                  metricColor={pill.metricColor}
                  delay={0.1 * i}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave to cream section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,55 1380,65 1440,60 L1440,80 L0,80 Z"
            fill="#FAF8FF"
          />
        </svg>
      </div>

      <SideConnectTab />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0e0c18]/95 backdrop-blur-xl p-3 lg:hidden">
        <Link
          href="/contact-us"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-bold text-white shadow-glow-brand"
        >
          Book Free Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default Hero
