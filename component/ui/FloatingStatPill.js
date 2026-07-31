export default function FloatingStatPill({
  icon: Icon,
  label,
  metric,
  metricColor = 'text-accent',
  className = '',
  delay = 0,
  float = false,
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-3 min-w-[200px] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${float ? 'animate-float-soft' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm">
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-white/85 leading-tight">{label}</p>
        <p className={`text-sm font-bold leading-tight mt-0.5 ${metricColor}`}>{metric}</p>
      </div>
    </div>
  )
}
