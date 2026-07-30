import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md px-4 py-3 min-w-[200px] shadow-[0_12px_40px_rgba(0,0,0,0.35)] ${float ? 'animate-float-soft' : ''} ${className}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 shadow-sm">
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-white/85 leading-tight">{label}</p>
        <p className={`text-sm font-bold leading-tight mt-0.5 ${metricColor}`}>{metric}</p>
      </div>
    </motion.div>
  )
}
