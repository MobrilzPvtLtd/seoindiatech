import Link from 'next/link'
import { FaStore, FaHome, FaHeartbeat, FaCogs } from 'react-icons/fa'
import { INDUSTRY_CATEGORIES, toSlug } from '@/utils/industries'

const ICONS = {
  store: FaStore,
  home: FaHome,
  heart: FaHeartbeat,
  cog: FaCogs,
}

export default function IndustryDropdown({ closeMenu }) {
  return (
    <div className="p-4 sm:p-5 max-h-[75vh] overflow-y-auto" data-lenis-prevent>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-5">
        {INDUSTRY_CATEGORIES.map((cat) => {
          const Icon = ICONS[cat.icon] || FaStore
          return (
            <div
              key={cat.id}
              className={`rounded-xl border p-4 ${
                cat.highlight
                  ? 'bg-amber-50/90 border-amber-200/80 dark:bg-amber-950/30 dark:border-amber-800/40'
                  : 'bg-surface/80 border-border dark:bg-secondary/40 dark:border-white/10'
              }`}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-dashed border-border/70 dark:border-white/15">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold text-heading dark:text-white leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-0">
                {cat.items.map((item, i) => {
                  const slug = toSlug(item)
                  const isLast = i === cat.items.length - 1
                  return (
                    <li
                      key={slug}
                      className={!isLast ? 'border-b border-dashed border-border/60 dark:border-white/10' : ''}
                    >
                      <Link
                        href={`/industries/${slug}`}
                        onClick={closeMenu}
                        className="block py-2.5 text-[13px] font-medium text-body/90 dark:text-white/75 hover:text-primary dark:hover:text-accent transition-colors leading-snug"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="mt-4 pt-4 border-t border-border/60 dark:border-white/10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/industries"
          onClick={closeMenu}
          className="text-[13px] font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          View all industries
        </Link>
        <Link
          href="/contact-us"
          onClick={closeMenu}
          className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide transition-all hover:-translate-y-0.5"
        >
          Get Industry SEO Audit
        </Link>
      </div>
    </div>
  )
}
