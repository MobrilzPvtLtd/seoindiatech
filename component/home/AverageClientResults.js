import React from 'react'
import { FaArrowUp, FaChartBar, FaTrophy, FaDollarSign } from 'react-icons/fa'

const metrics = [
  { value: '78%', label: 'Increase in Organic Traffic', icon: FaArrowUp, iconClass: 'text-green-600' },
  { value: '3X', label: 'More Qualified Leads', icon: FaChartBar, iconClass: 'text-blue-600' },
  { value: 'Top 3', label: 'Rankings for Target Keywords', icon: FaTrophy, iconClass: 'text-indigo-600' },
  { value: '45%', label: 'Decrease in Cost Per Lead', icon: FaDollarSign, iconClass: 'text-orange-500' },
]

const AverageClientResults = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl text-white">
      <div className="absolute inset-0 bg-[url('/images/home/hero.png')] bg-cover bg-center opacity-15" />
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-5 md:p-6 lg:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">Average Client Results</p>
            
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              Real outcomes we deliver through data-driven SEO, content, and performance marketing strategies.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 rounded-3xl bg-white/5 p-4 text-slate-300 shadow-xl shadow-slate-950/20 sm:p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
              <FaArrowUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold text-white">Higher ROI</p>
              <p className="text-xs text-slate-400">Through data-driven strategies</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ${metric.iconClass}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{metric.value}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{metric.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AverageClientResults
