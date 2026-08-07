export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const desc = description || subtitle
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left max-w-none'
  const titleColor = dark ? '!text-white' : 'text-heading'
  const descColor = dark ? 'text-white/70' : 'text-muted'

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] mb-5 ${
            dark
              ? 'bg-white/5 border border-white/10 text-accent'
              : 'bg-primary/8 border border-primary/15 text-primary'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.12] ${titleColor}`}
      >
        <span className={dark ? 'text-white' : 'text-heading'}>{title}</span>
        {highlight && (
          <>
            {' '}
            <span className={dark ? 'text-accent' : 'text-primary'}>{highlight}</span>
          </>
        )}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${descColor}`}>
          {desc}
        </p>
      )}
    </div>
  )
}
