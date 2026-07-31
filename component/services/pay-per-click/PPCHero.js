import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function PPCHero() {
  return (
    <section className="relative bg-gradient-to-br from-cream to-white dark:from-background dark:to-surface overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full opacity-20 animate-pulse -z-10"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-pink-100 dark:bg-pink-900 rounded-full opacity-20 animate-pulse -z-10"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-100 dark:bg-yellow-800 rounded-full opacity-10 animate-ping -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-15 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-heading leading-tight">
            <span className="text-primary dark:text-accent">
              Pay Per Click
            </span>{' '}
            Advertising Agency in India
          </h1>

          {/* Paragraphs */}
          <p className="text-lg md:text-xl text-body leading-relaxed text-justify">
            When you need leads fast, pay per click advertising is one of the
            clearest ways to reach people who are already searching for what you
            sell. At{' '}
            <Link
              href="/"
              className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
            >
              SEO India Tech
            </Link>
            , we plan, run, and improve each pay per click campaign so your ads
            show for the right searches, in the right locations, at the right
            time.
          </p>

          <p className="text-lg md:text-xl text-body leading-relaxed text-justify">
            As a pay per click advertising agency, we work with businesses that
            want calls, form fills, store visits, and online sales. If you are
            looking for a pay per click agency that stays hands on, our pay per
            click services are built around clear targets and clean tracking.
            Many clients also choose us as their{' '}
            <Link
              href="/services/ppc-advertising"
              className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
            >
              pay per click marketing agency
            </Link>{' '}
            because we manage the full loop, from keywords to ads to landing
            page feedback. If you have tried ads before and the results felt
            random, the issue is usually structure. A well-built pay per click
            campaign uses clean keyword lists, clear ad groups, strong landing
            pages, and accurate conversion tracking.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg shadow-2xl transition transform hover:scale-105"
          >
            Get Started <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <img
            src="/images/services/ppc.png" // Replace with your hero image
            alt="Pay Per Click Advertising"
            width="800"
            height="450"
            className="w-full h-auto rounded-xl shadow-2xl"
          />

          {/* Small floating shapes near image */}
          <div className="absolute -top-10 -left-10 w-16 h-16 bg-primary/15 dark:bg-primary-hover rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-200 dark:bg-pink-700 rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
