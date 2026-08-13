'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  Clock,
  Globe,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import HeroVisual from '@/component/new-home/HeroVisual'
import FloatingStatPill from '@/component/ui/FloatingStatPill'
import ScribbleText from '@/component/ui/ScribbleText'

const SideConnectTab = dynamic(() => import('@/component/ui/SideConnectTab'), { ssr: false })

const statPills = [
  {
    icon: Clock,
    label: '14+ Years of Legacy',
    metric: 'Driven by Results',
    metricColor: 'text-accent',
    className: 'absolute -left-2 top-2 xl:-left-8 xl:top-6 z-20',
    delay: 0.5,
  },
  {
    icon: Globe,
    label: 'Brand Exposure',
    metric: 'Scale Visibility 10X',
    metricColor: 'text-accent',
    className: 'absolute -right-1 top-0 xl:-right-4 xl:top-1 z-20',
    delay: 0.6,
  },
  {
    icon: Rocket,
    label: 'Boosting Revenue',
    metric: 'Scale Revenue Up to 6x',
    metricColor: 'text-accent',
    className: 'absolute -left-1 bottom-28 xl:-left-6 xl:bottom-32 z-20',
    delay: 0.7,
  },
  {
    icon: TrendingUp,
    label: 'Improved Leads',
    metric: 'Drive Up to 8x More Leads',
    metricColor: 'text-accent',
    className: 'absolute -right-1 bottom-20 xl:right-0 xl:bottom-24 z-20',
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
      <div className="pointer-events-none absolute inset-0 hero-glow-primary max-md:hidden" />
      <div className="pointer-events-none absolute inset-0 hero-glow-secondary max-md:hidden" />
      <div className="pointer-events-none absolute inset-0 hero-glow-cta max-md:hidden" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pb-20 md:pt-28 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          {/* Left - visible immediately for LCP (no JS animation gate) */}
          <div className="text-center lg:text-left text-white hero-copy animate-fade-in-up">
            <h1 className="font-heading text-[1.625rem] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem] xl:text-[2.85rem]">
              SEO Company in India
              <br />
              <span className="text-white/95">That Drives </span>
              <ScribbleText className="text-accent" scribbleColor="#A4DDFB">Sustainable Growth</ScribbleText>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-[15px] mx-auto lg:mx-0">
              Data-driven SEO strategies that improve search visibility, qualified traffic and sustainable
              business growth — powered by 14+ years of experience and modern AI search expertise.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/services/seo"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-6 py-3 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
              >
                Explore SEO Services
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 px-6 py-3 text-sm font-bold text-secondary transition-all hover:-translate-y-0.5"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Right - hero visual (desktop only; mobile LCP stays on headline text) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative hidden lg:block">
              <HeroVisual />
              <div className="hidden xl:block">
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

            <div className="mt-6 grid grid-cols-2 gap-3 md:mt-6 lg:hidden">
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,55 1380,65 1440,60 L1440,80 L0,80 Z"
            fill="#FAF8FF"
          />
        </svg>
      </div>

      <SideConnectTab />

    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0e0c18]/95 backdrop-blur-md safe-bottom px-3 pt-3 lg:hidden">
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
