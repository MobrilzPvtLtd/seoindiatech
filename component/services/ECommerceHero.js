import Link from 'next/link'
import React from 'react'

export default function ECommerceHero() {
  return (
    <section className="relative py-10 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* OUTER FRAME */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-sky-500/20 via-transparent to-transparent p-[1px]">
          {/* HERO CARD */}
          <div className="relative bg-white dark:bg-slate-900 rounded-[30px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600" />

            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-20 px-16 py-20">
              {/* CONTENT */}
              <div>
                <span className="inline-flex items-center gap-2 mb-6 text-sm font-semibold tracking-wide text-sky-600 dark:text-sky-400">
                  <span className="h-2 w-2 rounded-full bg-sky-600 dark:bg-sky-400"></span>
                  E-Commerce SEO
                </span>

                <h1 className="text-[42px] md:text-[52px] font-extrabold leading-[1.15] text-slate-900 dark:text-white mb-12">
                  Ecommerce SEO Services for
                  <span className="block text-sky-600 dark:text-sky-400">
                    Your Online Store
                  </span>
                </h1>

                {/* JUSTIFIED TEXT */}
                <div className="space-y-7 text-[17px] leading-[1.85] text-slate-700 dark:text-slate-300 text-justify max-w-2xl">
                  <p>
                    Most online stores struggle to appear in Google results.
                    Your store may have great products, but if customers cannot
                    find you, revenue stays flat. You need more visibility, more
                    clicks, and more paying customers. That is where ecommerce
                    SEO services help.
                  </p>

                  <p>
                    <Link
                      href="/"
                      className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
                    >
                      SEO India Tech
                    </Link>{' '}
                    offers ecommerce SEO services that help stores show up in
                    search results. Our approach is simple. We focus on the
                    words your customers use. Then we improve your site so
                    search engines rank you higher. You get more visitors. You
                    get more orders.
                  </p>

                  <p>
                    Our ecommerce SEO services company works with small and
                    large stores. We help businesses that want local buyers and
                    national buyers. We help stores that sell one category or
                    many categories. You get SEO services that fit your business
                    and budget.
                  </p>
                </div>
              </div>

              {/* IMAGE AREA */}
              <div className="relative flex items-center justify-center">
                {/* Depth layers */}
                <div className="absolute inset-0 rounded-[28px] bg-sky-500/10 dark:bg-sky-400/10 blur-3xl"></div>

                <div className="relative rounded-2xl bg-slate-50 dark:bg-slate-800 p-8 shadow-2xl">
                  <img
                    src="/images/ECommerceSEO.png"
                    alt="E-commerce SEO Services"
                    className="max-h-[420px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
