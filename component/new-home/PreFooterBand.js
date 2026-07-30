import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Clock, Mail } from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    title: 'Need Our Services?',
    value: '+91-8076676731',
    href: 'tel:+91-8076676731',
  },
  {
    icon: Clock,
    title: 'Work Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
    href: null,
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'sales@seoindiatech.com',
    href: 'mailto:sales@seoindiatech.com',
  },
]

const PreFooterBand = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] md:rounded-[3rem] bg-accent px-6 py-10 md:px-12 md:py-14 text-center shadow-glow-sky"
        >
          <h2 className="font-heading text-2xl font-extrabold text-secondary sm:text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto leading-tight">
            Can AI Help With Personalized Marketing Strategies?
          </h2>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-secondary/80 max-w-3xl mx-auto">
            Yes. Even when we use AI, every campaign is customized for your business goals, audience,
            and market. With the right inputs, AI helps deliver tailored solutions that improve
            customer experience, engagement, and conversion rates.
          </p>

          <div className="mt-10 md:mt-12 grid gap-8 sm:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/60 border border-heading/10">
                    <Icon className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">{item.title}</p>
                    <p className="text-sm text-secondary/75 mt-0.5">{item.value}</p>
                  </div>
                </div>
              )

              if (item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </Link>
                )
              }
              return <div key={item.title}>{content}</div>
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PreFooterBand
