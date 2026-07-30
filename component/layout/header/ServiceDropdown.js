import Link from 'next/link'
import React from 'react'
import {
  FaRobot,
  FaMapMarkerAlt,
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaBullhorn,
  FaPenNib,
  FaUserShield,
  FaShareAlt,
  FaAd,
  FaMousePointer,
  FaPencilRuler,
  FaArrowRight,
} from 'react-icons/fa'

const categories = [
  {
    title: 'SEO',
    link: '/services/seo',
    items: [
      { icon: FaMapMarkerAlt, title: 'Local SEO', desc: 'Rank in your city and nearby areas', link: '/services/local-seo-service' },
      { icon: FaRobot, title: 'AI SEO', desc: 'Get found by AI search and chat tools', link: '/services/ai-seo' },
      { icon: FaStore, title: 'Small Business SEO', desc: 'Affordable growth for local shops', link: '/services/small-business-seo' },
      { icon: FaShoppingCart, title: 'E-Commerce SEO', desc: 'More organic traffic to product pages', link: '/services/e-commerce-seo' },
      { icon: FaMobileAlt, title: 'App Store Optimization', desc: 'Higher rankings in app stores', link: '/services/app-store-optimization' },
      { icon: FaMapMarkedAlt, title: 'GBP Optimization', desc: 'Stand out on Google Business Profile', link: '/services/gbp-optimization' },
      { icon: FaMobileAlt, title: 'GEO Optimization', desc: 'Show up in generative AI answers', link: '/services/generative-engine-optimization' },
      { icon: FaMapMarkedAlt, title: 'AEO', desc: 'Win the featured answer box', link: '/services/answer-engine-optimization' },
    ],
  },
  {
    title: 'Digital Marketing',
    link: '/services/digital-marketing',
    items: [
      { icon: FaBullhorn, title: 'Digital Branding', desc: 'Build a brand people remember', link: '/services/digital-branding' },
      { icon: FaPenNib, title: 'Content Marketing', desc: 'Content that ranks and converts', link: '/services/content-marketing' },
      { icon: FaUserShield, title: 'Reputation Management', desc: 'Protect and improve how you look online', link: '/services/online-reputation-management' },
      { icon: FaShareAlt, title: 'Social Media Optimization', desc: 'Grow an engaged social following', link: '/services/social-media-optimization' },
    ],
  },
  {
    title: 'Paid Advertising',
    link: '/services/paid-advertising',
    items: [
      { icon: FaAd, title: 'PPC Advertising', desc: 'Targeted campaigns that pay for themselves', link: '/services/ppc-advertising' },
      { icon: FaMousePointer, title: 'Pay Per Click', desc: 'Only pay when someone clicks', link: '/services/pay-per-click' },
    ],
  },
  {
    title: 'Design & Development',
    link: '/services/design-and-development',
    items: [
      { icon: FaPencilRuler, title: 'UI/UX Design', desc: 'Interfaces people enjoy using', link: '/services/ui-ux-design' },
    ],
  },
]

export default function ServiceDropdown({ closeMenu }) {
  // Note: no outer absolute/bg/shadow/rounded wrapper here - the parent dropdown
  // container in Header.jsx already supplies positioning, width, background,
  // border and shadow. Duplicating those here (as the original did) stacked two
  // rounded/shadowed boxes on top of each other. This component now only owns
  // its own padding and internal layout.
  //
  // Layout scales with the parent's width breakpoints (500 / 700 / 900px):
  //   - 1 column below sm (mobile drawer width)
  //   - 2 columns at md (~500px) - 4 columns would squeeze long labels like
  //     "Reputation Management" into ~100px each and wrap badly
  //   - 4 columns at lg/xl (700-900px), where there's room to breathe
  // Categories sit in their own soft card instead of divider lines, so
  // reflowing from 4 columns down to 2 (or 1) never leaves an orphaned
  // divider floating mid-row.
  //
  // Height: capped at 75vh with its own scroll area so on shorter laptop
  // screens the 8-item SEO column can't push the menu past the viewport or
  // overlap the page below it - it scrolls internally instead. The CTA
  // footer stays outside that scroll area so it's always visible.
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex-1 min-h-0 overflow-y-auto px-6 md:px-8 pt-6 md:pt-8 pb-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 p-4"
            >
              <Link
                href={category.link}
                onClick={closeMenu}
                className="group flex items-center justify-between mb-4"
              >
                <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </span>
                <FaArrowRight
                  size={10}
                  className="text-slate-300 dark:text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-200"
                />
              </Link>

              <div className="space-y-1">
                {category.items.map((item) => (
                  <MegaItem key={item.title} {...item} closeMenu={closeMenu} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA - outside the scroll area so it's always reachable, and gives
          the menu a single clear next step for anyone unsure which service fits */}
      <div className="flex-shrink-0 mt-4 mx-6 md:mx-8 pt-5 pb-6 md:pb-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Not sure where to start?{' '}
          <span className="text-slate-700 dark:text-slate-200 font-medium">We'll help you pick the right service.</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
        <Link
          href="/seo-packages"
          onClick={closeMenu}
          className="flex-shrink-0 inline-flex items-center gap-1.5 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
        >
          SEO Packages
        </Link>
        <Link
          href="/contact-us"
          onClick={closeMenu}
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-600 hover:shadow-[0_8px_20px_-6px_rgba(37,99,235,0.55)] active:scale-95 whitespace-nowrap"
        >
          Get Free Audit
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

/* Single Item Component */
function MegaItem({ icon: Icon, title, desc, link, closeMenu }) {
  return (
    <Link
      href={link}
      onClick={closeMenu}
      className="group flex items-start gap-3 -mx-2 px-2 py-2 rounded-lg transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
    >
      <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
        <Icon size={14} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
          {title}
        </p>
        {desc && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 leading-snug">
            {desc}
          </p>
        )}
      </div>
    </Link>
  )
}