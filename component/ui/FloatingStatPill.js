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
      className={`flex items-center gap-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md px-3 py-2.5 min-w-[150px] max-w-[200px] shadow-[0_8px_28px_rgba(0,0,0,0.3)] ${float ? 'animate-float-soft' : ''} ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/95 shadow-sm">
        <Icon className="h-4 w-4 text-secondary" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-white/85 leading-tight">{label}</p>
        <p className={`text-xs font-bold leading-tight mt-0.5 ${metricColor}`}>{metric}</p>
      </div>
    </div>
  )
}
