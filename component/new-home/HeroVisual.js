'use client'

import Image from 'next/image'
import { HOME_IMAGES, HERO_PROCESS_STEPS } from '@/utils/homeImages'

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/30 blur-[80px] opacity-60 max-md:hidden" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-40 w-40 rounded-full bg-accent/20 blur-[60px] max-md:hidden" />

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0e0c18] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={HOME_IMAGES.hero}
            alt="Google AI Overviews - AI-powered search visibility and SEO performance"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 90vw, 560px"
            quality={55}
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c18]/70 via-[#0e0c18]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c18]/40 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="inline-flex items-center rounded-lg bg-primary/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-sm">
              AI Overview
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
              SEO Process
            </p>
            <p className="mt-0.5 text-sm font-bold text-white sm:text-base">
              Audit → Optimize → Rank in Google &amp; AI Search
            </p>
          </div>
        </div>
      </div>

      {/* Process cards — desktop only to reduce mobile bandwidth */}
      <div className="mt-3 hidden sm:grid grid-cols-3 gap-2 sm:gap-3">
        {HERO_PROCESS_STEPS.map((step) => (
          <div
            key={step.label}
            className="group relative overflow-hidden rounded-xl border border-white/12 bg-white/5 shadow-lg backdrop-blur-sm"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={step.image}
                alt={step.label}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="180px"
                quality={70}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c18]/85 via-[#0e0c18]/20 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-accent">
                  {step.tag}
                </span>
                <p className="text-[10px] sm:text-[11px] font-semibold leading-tight text-white">
                  {step.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
