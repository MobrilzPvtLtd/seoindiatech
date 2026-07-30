import { motion } from 'framer-motion'
import { Shield, BadgeCheck, Globe2, Zap } from 'lucide-react'
import Button from '@/component/ui/Button'
import SectionHeader from '@/component/ui/SectionHeader'

const badges = [
  { icon: Shield, label: 'Google-Compliant SEO', sub: 'White-hat practices only' },
  { icon: BadgeCheck, label: '14+ Years Experience', sub: 'Trusted global partner' },
  { icon: Globe2, label: 'Global Client Base', sub: 'USA  |  UK  |  AU  |  UAE  |  EU' },
  { icon: Zap, label: 'AI-Powered Solutions', sub: 'SEO  |  LLM  |  Automation' },
]

const AuthorityBand = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 hero-glow-primary" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-dark-copy"
          >
            <SectionHeader
              badge="Trusted Globally"
              title="Enterprise-grade delivery."
              highlight="Startup agility."
              description="We combine the rigor of an international agency with the speed and innovation of an AI-first growth team - serving clients across six continents."
              align="left"
              dark
            />
            <Button href="/contact-us" variant="primary" size="lg" className="shadow-glow-brand">
              Book a Strategy Call
            </Button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/15"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/25 ring-1 ring-primary/30 mb-4">
                  <badge.icon className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm font-bold text-white">{badge.label}</p>
                <p className="mt-1 text-xs text-slate-400">{badge.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthorityBand
