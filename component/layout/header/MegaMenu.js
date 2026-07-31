import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/** Shared mega menu panel - same layout for Services & Industries */
export function MegaMenuPanel({ children, id, className = '', onMouseEnter, onMouseLeave, onClick }) {
  return (
    <div
      id={id}
      data-lenis-prevent
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`
        absolute left-1/2 top-full mt-3 -translate-x-1/2
        w-full max-w-[90vw] md:w-[520px] lg:w-[740px] xl:w-[980px]
        max-h-[75vh] overflow-hidden flex flex-col
        bg-white dark:bg-slate-800 rounded-2xl z-[100]
        border border-slate-200/70 dark:border-slate-700/60
        shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)]
        transition-all duration-200 origin-top
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export const megaMenuOpenClass = (isOpen) =>
  isOpen
    ? 'opacity-100 scale-100 pointer-events-auto visible'
    : 'opacity-0 scale-95 pointer-events-none invisible'

export default function MegaMenu({ categories, footer, closeMenu }) {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <nav
        className="flex-1 min-h-0 overflow-y-auto px-6 md:px-8 pt-6 md:pt-8 pb-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full"
        aria-label="Mega menu"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {categories.map((category) => (
            <MegaMenuCategory key={category.title} category={category} closeMenu={closeMenu} />
          ))}
        </div>
      </nav>
      {footer && <MegaMenuFooter footer={footer} closeMenu={closeMenu} />}
    </div>
  )
}

function MegaMenuCategory({ category, closeMenu }) {
  const { title, link, icon: CategoryIcon, items } = category

  return (
    <div className="rounded-xl bg-slate-50/70 dark:bg-slate-800/40 p-4 border border-transparent hover:border-slate-200/80 dark:hover:border-slate-700/50 transition-colors duration-200">
      {link ? (
        <Link
          href={link}
          onClick={closeMenu}
          className="group flex items-center justify-between gap-2 mb-4"
        >
          <span className="flex items-center gap-2 min-w-0">
            {CategoryIcon && (
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-accent">
                <CategoryIcon size={14} aria-hidden="true" />
              </span>
            )}
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-accent transition-colors truncate">
              {title}
            </span>
          </span>
          <ArrowRight
            size={10}
            className="shrink-0 text-slate-300 dark:text-slate-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary dark:group-hover:text-accent transition-all duration-200"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <div className="flex items-center gap-2 mb-4">
          {CategoryIcon && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-accent">
              <CategoryIcon size={14} aria-hidden="true" />
            </span>
          )}
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500">
            {title}
          </span>
        </div>
      )}

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.link + item.title}>
            <MegaMenuItem item={item} closeMenu={closeMenu} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function MegaMenuItem({ item, closeMenu }) {
  const { icon: Icon, title, desc, link } = item

  return (
    <Link
      href={link}
      onClick={closeMenu}
      className="group flex items-start gap-3 -mx-2 px-2 py-2.5 min-h-11 rounded-lg transition-colors duration-200 hover:bg-white/80 dark:hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <div
        className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-200"
        aria-hidden="true"
      >
        <Icon size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="text-[13px] font-medium text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors leading-snug whitespace-nowrap truncate"
          title={title}
        >
          {title}
        </p>
        {desc && (
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5 leading-snug line-clamp-1 hidden lg:block">
            {desc}
          </p>
        )}
      </div>
    </Link>
  )
}

function MegaMenuFooter({ footer, closeMenu }) {
  const { message, highlight, primaryCta, secondaryCta } = footer

  return (
    <div className="flex-shrink-0 mt-4 mx-6 md:mx-8 pt-5 pb-6 md:pb-8 border-t border-slate-100 dark:border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {message}{' '}
        {highlight && (
          <span className="text-slate-700 dark:text-slate-200 font-medium">{highlight}</span>
        )}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            onClick={closeMenu}
            className="flex-shrink-0 inline-flex items-center gap-1.5 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 hover:border-primary hover:text-primary dark:hover:text-accent whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {secondaryCta.label}
          </Link>
        )}
        {primaryCta && (
          <Link
            href={primaryCta.href}
            onClick={closeMenu}
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full font-semibold text-xs tracking-wide transition-all duration-300 hover:shadow-glow-brand active:scale-95 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {primaryCta.label}
          </Link>
        )}
      </div>
    </div>
  )
}
