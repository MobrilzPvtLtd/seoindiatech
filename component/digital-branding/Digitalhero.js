import React from 'react'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Digitalhero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-950 pt-24 md:pt-28 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 relative z-10">
          {/* badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Digital Identity Solutions
          </div>

          {/* heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight">
            Digital Branding Serrvices With{' '}
            <span className="text-primary dark:text-accent">
              SEO IndiaTech
            </span>
          </h1>

          <div className="w-20 h-1.5 bg-primary dark:bg-primary rounded-full"></div>

          {/* content */}
          <p className="text-body text-base md:text-lg leading-relaxed text-justify">
            SEO India Tech offers professional digital branding services that
            help businesses create a powerful and consistent brand presence
            across all digital channels. A strong brand identity is essential
            for standing out in today's competitive online landscape, and our
            expert team ensures your brand communicates trust, value, and
            uniqueness. With a strategic approach and creative execution, we
            deliver a complete digital branding solution that elevates your
            business and strengthens customer perception.
          </p>

          <p className="text-body text-base md:text-lg leading-relaxed">
            At{' '}
            <Link href={'/'}>
              <b className="text-primary dark:text-accent">SEO India Tech</b>
            </Link>
            , we don't just create brands - we build digital identities that
            stand out, captivate, and convert.
          </p>

          {/* CTA */}
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="cursor-pointer bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-base hover:scale-105 transition-all flex items-center group"
            >
              Get Started now
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* glow behind image */}
          <div className="absolute w-[420px] h-[420px] bg-accent/20 blur-3xl rounded-full"></div>

          <div className="relative transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/services/digital-branding.jpg"
              alt="Digital Branding"
              width={520}
              height={520}
              className="rounded-2xl shadow-2xl object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Brand Strategy',
            desc: 'Comprehensive digital brand positioning',
          },
          {
            title: 'Visual Identity',
            desc: 'Compelling logos, colors, and design systems',
          },
          {
            title: 'Consistent Experience',
            desc: 'Unified brand presence across all channels',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-background p-6 rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20/40 flex items-center justify-center mb-4">
              <span className="text-primary dark:text-accent font-bold">
                {index + 1}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-heading mb-2">
              {item.title}
            </h3>

            <p className="text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Digitalhero
