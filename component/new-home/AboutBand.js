import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'

import { HOME_IMAGES } from '@/utils/homeImages'

const images = [
  {
    src: HOME_IMAGES.aboutTeam,
    alt: 'SEO India Tech team collaboration',
    className: 'absolute top-0 left-0 w-[48%] h-[42%] rounded-2xl',
  },
  {
    src: HOME_IMAGES.aboutOffice,
    alt: 'Digital marketing strategy session',
    className: 'absolute top-0 right-0 w-[42%] h-[38%] rounded-2xl',
  },
  {
    src: HOME_IMAGES.aboutWorkspace,
    alt: 'SEO India Tech workspace',
    className: 'absolute bottom-0 left-[8%] w-[88%] h-[52%] rounded-2xl border-4 border-primary shadow-[0_0_0_4px_#FAF8FF]',
  },
]

const AboutBand = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>About Us</SectionBadge>
            <h2 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.5rem] md:leading-[1.15]">
              About SEO INDIA TECH - New-Age{' '}
              <ScribbleText className="text-primary" scribbleColor="#6B2E88">
                AI Powered Digital
              </ScribbleText>{' '}
              Marketing Company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              For 14+ years we&apos;ve helped businesses worldwide grow through search, performance
              marketing, and technology. Clients recommend us because outcomes are transparent -
              rankings climb, leads convert, and reporting stays honest.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              From Noida to New York, we partner with SaaS, healthcare, e-commerce, real estate,
              and finance brands that need one accountable team - not fragmented vendors.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary shadow-glow-brand">
                <Award className="h-6 w-6 text-white" />
              </div>
              <p className="text-base font-extrabold text-heading uppercase tracking-wide">
                14+ Years of Creative Excellence
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
              >
                Signup for a Free Call
              </Link>
              <Link
                href="/services/ai-seo"
                className="inline-flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/90 px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              >
                Browse AI Enabled Offerings
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative h-[420px] sm:h-[480px]"
          >
            {images.map((img) => (
              <div key={img.src} className={`${img.className} overflow-hidden shadow-premium`}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="400px" />
              </div>
            ))}
            {/* Decorative scribble */}
            <svg className="absolute -top-4 left-1/3 w-16 h-8 opacity-60" viewBox="0 0 60 24" fill="none" aria-hidden="true">
              <path d="M2,18 C10,6 20,20 30,10 C40,2 50,16 58,8" stroke="#6B2E88" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutBand
