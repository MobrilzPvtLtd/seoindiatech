'use client'

import { motion } from 'framer-motion'

const float = (delay = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
})

const codeLines = [
  { w: '75%', color: 'bg-accent' },
  { w: '55%', color: 'bg-primary' },
  { w: '85%', color: 'bg-white/40' },
  { w: '45%', color: 'bg-accent/70' },
  { w: '65%', color: 'bg-white/30' },
]

export default function WebDevVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] aspect-square">
      <div className="pointer-events-none absolute inset-[20%] rounded-full bg-primary/35 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[20%] right-[10%] h-32 bg-accent/15 blur-[60px]" />

      {/* Service bubbles */}
      {[
        { label: 'Web Development', className: 'top-[6%] right-[8%]' },
        { label: 'Dashboard Development', className: 'top-[22%] right-[2%]' },
        { label: 'Mobile Development', className: 'bottom-[28%] right-[0%]' },
      ].map((b, i) => (
        <motion.div
          key={b.label}
          {...float(i * 0.4)}
          className={`absolute ${b.className} z-10 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium text-white/55 backdrop-blur-sm`}
        >
          {b.label}
        </motion.div>
      ))}

      {/* Floating code tags */}
      {[
        { label: 'HTML', className: 'top-[18%] left-[4%]' },
        { label: 'CSS', className: 'top-[32%] left-[2%]' },
        { label: '</>', className: 'top-[48%] left-[8%]' },
        { label: 'C++', className: 'bottom-[38%] left-[0%]' },
      ].map((tag, i) => (
        <motion.div
          key={tag.label}
          {...float(i * 0.3 + 0.2)}
          className={`absolute ${tag.className} z-20 rounded-lg bg-primary px-4 py-2.5 font-mono text-sm font-bold text-white shadow-glow-brand`}
        >
          {tag.label}
        </motion.div>
      ))}

      {/* Isometric laptop + rolling page */}
      <div className="absolute bottom-[8%] left-[5%] right-[5%] z-10">
        {/* Rolling document */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -right-[2%] bottom-[18%] w-[55%] z-0"
        >
          <div
            className="rounded-sm bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-4 origin-bottom-left"
            style={{ transform: 'rotate(-8deg) skewY(-2deg)' }}
          >
            <div className="space-y-2 mb-3">
              <div className="h-2 w-full rounded bg-gray-200" />
              <div className="h-2 w-4/5 rounded bg-gray-100" />
              <div className="h-2 w-3/5 rounded bg-gray-100" />
            </div>
            <div className="flex items-end gap-2 h-16">
              <div className="w-12 h-12 rounded-full border-4 border-accent border-r-primary" />
              <div className="flex-1 flex items-end gap-1 h-full">
                {[40, 65, 45, 80, 55].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-primary/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Laptop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
          style={{ transform: 'perspective(800px) rotateX(8deg) rotateY(-12deg)' }}
        >
          {/* Screen */}
          <div className="relative mx-auto w-[78%] rounded-t-xl border-2 border-white/20 bg-[#12101a] shadow-[0_0_40px_rgba(107,46,136,0.4)]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20" />
            <div className="p-4 pt-5 min-h-[140px] sm:min-h-[160px]">
              <div className="flex gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="space-y-2 font-mono text-[10px] sm:text-xs">
                {codeLines.map((line, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-accent/60">{i + 1}</span>
                    <div className={`h-2 rounded ${line.color}`} style={{ width: line.w }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Keyboard base */}
          <div
            className="mx-auto w-[92%] h-5 rounded-b-lg bg-gradient-to-b from-gray-600 to-gray-800 border border-white/10"
            style={{ transform: 'skewX(-24deg) translateY(-2px)' }}
          />
          <div
            className="mx-auto w-[100%] h-3 rounded-b-xl bg-gradient-to-b from-gray-700 to-gray-900"
            style={{ transform: 'skewX(-24deg)' }}
          />
        </motion.div>
      </div>
    </div>
  )
}
