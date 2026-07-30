import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket, LineChart, TrendingUp } from 'lucide-react'
import SectionHeader from '@/component/ui/SectionHeader'

const steps = [
  { step: '01', icon: Search, title: 'Audit & Discovery', desc: 'Deep analysis of your site, competitors, and growth gaps.' },
  { step: '02', icon: Lightbulb, title: 'Strategy & Roadmap', desc: 'Custom AI SEO and marketing plan aligned to revenue goals.' },
  { step: '03', icon: Rocket, title: 'Execute & Optimize', desc: 'Launch campaigns, technical fixes, and conversion improvements.' },
  { step: '04', icon: LineChart, title: 'Report & Refine', desc: 'Transparent weekly reporting with clear metrics and actions.' },
  { step: '05', icon: TrendingUp, title: 'Scale & Grow', desc: 'Expand what works across channels, markets, and opportunities.' },
]

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How We Work"
          title="A proven process for"
          highlight="measurable growth"
          description="From first audit to scaled results - a clear, accountable framework every client can follow."
        />

        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative card-premium rounded-2xl p-6 text-center lg:text-left"
              >
                <div className="mx-auto lg:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 ring-1 ring-secondary/10 group-hover:ring-secondary/25 transition-all">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-mono text-xs font-bold text-accent">{item.step}</span>
                <h3 className="mt-2 text-base font-bold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
