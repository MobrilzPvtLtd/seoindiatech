import Link from 'next/link'

const variants = {
  primary:
    'bg-cta text-white hover:bg-cta-hover shadow-lg hover:shadow-[0_8px_30px_rgba(107,46,136,0.35)] hover:-translate-y-0.5',
  secondary:
    'bg-white/95 text-secondary hover:bg-white border border-white/30 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  outline:
    'border-2 border-accent/60 text-white bg-accent/10 hover:bg-accent/20 backdrop-blur-sm',
  ghost: 'text-secondary hover:text-white bg-transparent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg active:scale-[0.98]'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
