export default function IconRing({
  icon: Icon,
  variant = 'dark',
  size = 'lg',
  className = '',
}) {
  const sizes = {
    lg: { outer: 'h-28 w-28', inner: 'h-20 w-20', icon: 'h-8 w-8' },
    md: { outer: 'h-24 w-24', inner: 'h-16 w-16', icon: 'h-7 w-7' },
  }
  const s = sizes[size] || sizes.lg

  const innerClass =
    variant === 'primary'
      ? 'bg-primary text-white'
      : variant === 'accent'
        ? 'bg-accent text-secondary'
        : 'bg-secondary text-white'

  return (
    <div className={`relative flex items-center justify-center ${s.outer} ${className}`}>
      <div className="absolute inset-0 rounded-full border border-dashed border-neutral/50" />
      <div className="absolute inset-[6px] rounded-full border border-dashed border-neutral/35" />
      <div
        className={`relative flex items-center justify-center rounded-full ${s.inner} ${innerClass} shadow-lg`}
      >
        <Icon className={s.icon} />
      </div>
    </div>
  )
}
