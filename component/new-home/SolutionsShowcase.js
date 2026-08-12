import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionBadge from '@/component/ui/SectionBadge'
import ScribbleText from '@/component/ui/ScribbleText'

import { HOME_IMAGES } from '@/utils/homeImages'

const solutions = [
  {
    num: '01',
    sectionH2: 'Search Engine Optimization Services',
    title: 'SEO Services',
    desc: 'Technical fixes, content strategy, and authority building that drive sustainable organic traffic and qualified leads worldwide.',
    serviceLinks: [
      { label: 'SEO Services', href: '/services/seo' },
      { label: 'Technical SEO', href: '/services/technical-seo' },
      { label: 'Local SEO', href: '/services/local-seo-service' },
      { label: 'E-Commerce SEO', href: '/services/e-commerce-seo' },
      { label: 'International SEO', href: '/services/international-seo' },
    ],
    tools: ['Screaming Frog', 'Semrush', 'Ahrefs', 'GTM'],
    cta: 'Start SEO Growth',
    href: '/services/seo',
    image: HOME_IMAGES.seo,
    imageFirst: true,
  },
  {
    num: '02',
    sectionH2: 'AI SEO & Search Visibility',
    title: 'AI SEO & LLM Optimization',
    desc: 'Rank in Google, AI Overviews, ChatGPT, and voice search - we optimize for how discovery works today, not just classic blue links.',
    services: ['AI SEO', 'GEO Optimization', 'AEO Optimization', 'LLM Visibility', 'Voice Search'],
    tools: ['Semrush', 'Ahrefs', 'GA4', 'Search Console', 'GTM'],
    cta: 'Explore AI SEO',
    href: '/services/ai-seo',
    image: HOME_IMAGES.aiSeo,
    imageFirst: false,
  },
  {
    num: '03',
    title: 'Performance Marketing (Google & Meta Ads)',
    desc: 'Data-driven paid campaigns across Google and Meta - optimized for ROAS, lead quality, and full-funnel conversion.',
    services: ['Google Ads', 'Meta Ads', 'PPC Management', 'Retargeting', 'Landing Page CRO'],
    tools: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'HubSpot'],
    cta: 'Scale Paid Media',
    href: '/services/paid-advertising',
    image: HOME_IMAGES.ppc,
    imageFirst: true,
  },
  {
    num: '04',
    title: 'Branding & Digital Growth',
    desc: 'A business without branding gets lost in online noise. We help you stand out with values-driven identity across ORM, social, and paid media.',
    services: ['Digital Branding', 'ORM', 'Social Media', 'Press Release', 'Content Marketing'],
    tools: ['Meta Ads', 'Google Ads', 'HubSpot'],
    cta: 'Build Brand Authority',
    href: '/services/digital-marketing',
    image: HOME_IMAGES.digitalMarketing,
    imageFirst: false,
  },
]

function SolutionContent({ sol }) {
  return (
    <div>
      {sol.sectionH2 && (
        <h2 className="font-heading text-2xl font-extrabold tracking-tight text-heading sm:text-3xl md:text-4xl mb-6">
          {sol.sectionH2}
        </h2>
      )}
      <div className="flex items-start gap-3 sm:gap-4 flex-wrap">
        <span className="outline-num-light shrink-0 leading-none">{sol.num}</span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold italic text-heading leading-tight max-w-lg">
          {sol.title}
        </h3>
      </div>
      <p className="mt-5 text-sm md:text-base leading-relaxed text-muted max-w-xl">{sol.desc}</p>
      <div className="mt-7">
        <p className="text-sm font-bold text-heading mb-3">Core Services</p>
        <div className="flex flex-wrap gap-2">
          {sol.serviceLinks
            ? sol.serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="service-pill-light hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))
            : sol.services.map((s) => (
                <span key={s} className="service-pill-light">{s}</span>
              ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm font-bold text-heading mb-3">Key Tools</p>
        <div className="flex flex-wrap gap-2">
          {sol.tools.map((t) => (
            <span key={t} className="service-pill-light">{t}</span>
          ))}
        </div>
      </div>
      <Link
        href={sol.href}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
      >
        {sol.cta}
      </Link>
    </div>
  )
}

function SplitSolutionBlock({ sol, index }) {
  const imageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-premium ${
        !sol.imageFirst ? 'lg:col-start-1 lg:row-start-1' : ''
      }`}
    >
      <Image src={sol.image} alt={sol.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </motion.div>
  )

  const contentCol = (
    <motion.div
      initial={{ opacity: 0, x: sol.imageFirst ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={!sol.imageFirst ? 'lg:col-start-2' : ''}
    >
      <SolutionContent sol={sol} />
    </motion.div>
  )

  return (
    <div
      className={`py-14 md:py-20 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center lg:grid-flow-dense">
          {sol.imageFirst ? (
            <>
              {imageCol}
              {contentCol}
            </>
          ) : (
            <>
              {contentCol}
              {imageCol}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const SolutionsShowcase = () => {
  return (
    <section className="relative">
      <div className="dark-grid-bg py-16 md:py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-glow-primary opacity-50" />
        <div className="relative mx-auto max-w-4xl px-4 text-center section-dark-copy">
          <SectionBadge dark>What We Provide</SectionBadge>
          <h2 className="mt-6 font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-[2.75rem] leading-tight">
            SEO Services Built for{' '}
            <ScribbleText className="text-accent" scribbleColor="#6B2E88">
              Sustainable Growth
            </ScribbleText>
          </h2>
          <p className="mt-5 text-sm md:text-base text-white/60 max-w-2xl mx-auto">
            SEO-first programs across search, technical foundations, local visibility, e-commerce, and
            AI search — delivered by one accountable growth team.
          </p>
        </div>
      </div>

      {solutions.map((sol, i) => (
        <SplitSolutionBlock key={sol.num} sol={sol} index={i} />
      ))}
    </section>
  )
}

export default SolutionsShowcase
