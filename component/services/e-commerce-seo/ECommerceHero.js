import Link from 'next/link'
import React from 'react'

export default function ECommerceHero() {
  return (
    <section className="relative py-24 bg-slate-100 dark:bg-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-400/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-wide text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 px-4 py-2 rounded-full">
              <span className="h-2 w-2 rounded-full bg-sky-600 dark:bg-sky-400"></span>
              E-Commerce SEO
            </span>

            <h1 className="text-[38px] md:text-[48px] lg:text-[54px] font-extrabold leading-[1.15] text-slate-900 dark:text-white mb-10">
              Ecommerce SEO Services for
              <span className="block text-sky-600 dark:text-sky-400">
                Your Online Store
              </span>
            </h1>

            <div className="space-y-7 text-[17px] leading-[1.9] text-slate-700 dark:text-slate-300 text-justify max-w-xl">
              <p>
                Most online stores struggle to appear in Google results. Your
                store may have great products, but if customers cannot find you,
                revenue stays flat. You need more visibility, more clicks, and
                more paying customers. That is where ecommerce SEO services
                help.
              </p>

              <p>
                <Link
                  href="/"
                  className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
                >
                  SEO India Tech
                </Link>{' '}
                offers ecommerce SEO services that help stores show up in search
                results. Our approach is simple. We focus on the words your
                customers use. Then we improve your site so search engines rank
                you higher. You get more visitors. You get more orders.
              </p>

              <p>
                Our ecommerce SEO services company works with small and large
                stores. We help businesses that want local buyers and national
                buyers. We help stores that sell one category or many
                categories. You get SEO services that fit your business and
                budget.
              </p>
            </div>

          </div>

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center items-center">

            {/* soft glow behind image */}
            <div className="absolute w-[420px] h-[420px] bg-sky-400/20 blur-3xl rounded-full"></div>

            <img
              src="/images/services/ecommerce-seo.png"
              alt="E-commerce SEO Services"
              className="relative max-h-[460px] object-contain transition-transform duration-500 hover:scale-105"
            />

          </div>

        </div>
      </div>
    </section>
  )
}