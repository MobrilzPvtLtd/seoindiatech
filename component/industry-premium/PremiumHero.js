'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Globe,
  Award,
} from 'lucide-react'

const STAT_ICONS = [TrendingUp, Users, Globe, Award]

export default function PremiumHero({ data }) {
  const router = useRouter()
  const [website, setWebsite] = useState('')

  const handleAuditSubmit = (e) => {
    e.preventDefault()
    const q = website.trim() ? `?website=${encodeURIComponent(website.trim())}` : ''
    router.push(`${data.primaryCta.href}${q}`)
  }

  const breadcrumbs = data.breadcrumbs || [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Plastic Surgery SEO' },
  ]

  const bgDesktop = data.backgroundImage
  const bgMobile = data.backgroundImageMobile
  const heroStats = data.heroStats || [
    { value: '186%', label: 'Avg. traffic growth' },
    { value: '94%', label: 'More consults' },
    { value: '14+', label: 'Years experience' },
    { value: '500+', label: 'Clients served' },
  ]

  return (
    <section className="relative min-h-[min(100svh,880px)] overflow-hidden bg-secondary">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {bgDesktop && (
          <Image
            src={bgDesktop}
            alt=""
            fill
            className="hidden object-cover object-[center_30%] md:block"
            priority
            sizes="100vw"
          />
        )}
        {bgMobile && (
          <Image
            src={bgMobile}
            alt=""
            fill
            className="object-cover object-center md:hidden"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120f28]/98 via-[#1a1535]/96 to-[#1a1535]/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-32 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 lg:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/70 sm:text-sm">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-40" aria-hidden="true" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/90">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left: copy + CTA */}
          <div className="lg:col-span-7">
            {data.badge && (
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {data.badge}
              </span>
            )}

            <h1 className="font-heading text-[1.85rem] font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              {data.h1}
            </h1>

            <div className="mt-5 space-y-4 border-l-2 border-accent/60 pl-5">
              {data.paragraphs.map((p, i) => (
                <p
                  key={p.slice(0, 48)}
                  className={`leading-[1.75] ${
                    i === 0
                      ? 'text-base font-medium text-white sm:text-lg'
                      : 'text-[15px] text-white/92 sm:text-base'
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* CTA card */}
            <div className="mt-8 rounded-2xl border border-white/20 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] sm:p-5">
              <form onSubmit={handleAuditSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="hero-website-url">
                  Enter your website
                </label>
                <input
                  id="hero-website-url"
                  type="text"
                  inputMode="url"
                  placeholder="www.yourpractice.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="min-h-12 flex-1 rounded-xl border border-border bg-white px-4 text-base text-heading placeholder:text-heading/45 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-white shadow-glow-brand transition-all hover:bg-primary-hover hover:-translate-y-0.5"
                >
                  {data.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-white/80">
                <span>Free audit. No obligation.</span>
                {data.rating && (
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    <Star className="h-3.5 w-3.5 fill-primary" aria-hidden="true" />
                    {data.rating}
                  </span>
                )}
              </div>
            </div>

            {/* Trust badges */}
            {data.trustAwards?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {data.trustAwards.map((award) => (
                  <span
                    key={award}
                    className="rounded-md border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white"
                  >
                    {award}
                  </span>
                ))}
              </div>
            )}

            {/* Benefits */}
            {data.benefits?.length > 0 && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {data.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-secondary">
                      <Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {data.secondaryCta && (
              <Link
                href={data.secondaryCta.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
              >
                {data.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* Right: stats + visual (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c18]/40">
                <Image
                  src={data.image?.src || '/images/industries/heroes/plastic-surgery-seo.svg'}
                  alt={data.image?.alt || data.h1 || 'Industry SEO services illustration'}
                  fill
                  className="object-contain p-4"
                  sizes="400px"
                  priority
                />
              </div>

              <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                Proven Healthcare Results
              </p>

              <div className="grid grid-cols-2 gap-3">
                {heroStats.map((stat, i) => {
                  const Icon = STAT_ICONS[i % STAT_ICONS.length]
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                    >
                      <Icon className="mx-auto mb-1.5 h-4 w-4 text-accent" aria-hidden="true" />
                      <p className="font-mono text-xl font-bold text-white">{stat.value}</p>
                      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/80">
                        {stat.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
