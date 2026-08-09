import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DigitalHero() {
  return (
    <>
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-heading mb-6">
              AI Focused{' '}
              <span className="text-primary dark:text-accent">
                Digital Marketing Company
              </span>
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-6 md:text-justify">
              If your website gets visits but not leads, you do not need more
              noise. You need a clear plan, steady testing, and tracking that
              ties every step to sales.{' '}
              <Link
                href="/"
                className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                SEO India Tech
              </Link>{' '}
              works as a digital marketing services company that builds
              campaigns around what people search, what they click, and what
              they buy.
            </p>

            <p className="text-lg text-muted leading-relaxed mb-6 md:text-justify">
              Many brands try random ads, posts, and blog pages. Results stay
              mixed because the work is not connected. We connect your SEO, ads,
              content, and social media so they support one goal - more
              qualified leads and more sales. You see what is working, what is
              not, and what comes next.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-primary-hover hover:shadow-xl transition-all duration-300"
              >
                Get Free Strategy Call
              </a>

              <a
                href="/services"
                className="hidden px-8 py-4 rounded-xl border border-border dark:border-border text-heading dark:text-gray-200 hover:bg-cream dark:hover:bg-gray-800 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <Image
                src="/images/services/digital-marketing.png"
                alt="AI Focused Digital Marketing Services"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Decorative background glow */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/10 dark:bg-accent/10 rounded-2xl blur-3xl"></div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-cream dark:bg-background transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small Heading */}
          <h2 className="text-lg tracking-widest uppercase font-semibold text-primary dark:text-accent mb-4">
            What You Get From an AI Focused Approach
          </h3>

          {/* Main Content */}
          <p className="text-lg md:text-xl text-body leading-relaxed mb-8 md:text-justify">
            AI helps when it is used with care. It can speed up research, find
            patterns in search terms, and help spot which pages lose users. It
            cannot replace strategy, brand voice, or honest testing. Our team
            uses AI to support the work, then reviews everything by hand. As
            your digital marketing services company, we keep the plan practical
            and easy to follow.
          </p>
        </div>
      </section>
    </>
  )
}
