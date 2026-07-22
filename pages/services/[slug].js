import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serviceCategories } from '@/utils/serviceCategories'
import { ArrowRight, Search, BarChart, Globe, Shield, Zap, Target, TrendingUp } from 'lucide-react'
import WhyPartnerSection from '@/component/common/WhyPartnerSection'
import ContactFormSection from '@/component/common/ContactFormSection'
import ServiceHero from '@/component/common/ServiceHero'

const categoryMeta = {
  seo: {
    title: 'SEO Services | SEO India Tech',
    description:
      'Explore our full range of SEO services including Local SEO, AI SEO, E-Commerce SEO, and more. Drive organic traffic and grow your business.',
    heroTitle: (
      <>
        Transform Your Online Presence with{' '}
        <span className="text-blue-600">Expert SEO Services</span>
      </>
    ),
    heroSubtitle:
      'In today\'s hyper-competitive digital landscape, visibility is everything. At SEO India Tech, we specialize in delivering SEO services that not only increase your search engine rankings but also drive qualified traffic, boost engagement, and fuel sustainable growth.',
    heroBadge: 'Search Engine Optimization',
    heroImage: '/images/services/score.png',
    heroFeatures: [
      { icon: 'Search', text: 'Organic Rankings' },
      { icon: 'Globe', text: 'Local SEO' },
      { icon: 'BarChart', text: 'Technical Optimization' },
      { icon: 'Target', text: 'Conversion Rate Focus' },
    ],
    industries: [
      { title: 'Local Businesses', desc: 'Dominate local searches and attract more customers from your area.' },
      { title: 'E-Commerce', desc: 'Boost product rankings and drive more sales with targeted SEO.' },
      { title: 'SaaS & Tech', desc: 'Increase organic visibility and generate qualified leads.' },
      { title: 'Healthcare', desc: 'Connect with patients through optimized local and organic search.' },
      { title: 'Startups', desc: 'Build organic visibility from day one with cost-effective SEO.' },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services | SEO India Tech',
    description:
      'Discover our digital marketing services including Content Marketing, Digital Branding, Social Media Optimization, and Online Reputation Management.',
    heroTitle: (
      <>
        Accelerate Your Growth with{' '}
        <span className="text-blue-600">Digital Marketing</span>
      </>
    ),
    heroSubtitle:
      'In today\'s digital world, a strong online presence is essential for business growth. Our comprehensive digital marketing strategies help you reach your audience where they spend their time.',
    heroBadge: 'Digital Marketing',
    heroImage: '/images/services/Digital-marketing.png',
    heroFeatures: [
      { icon: 'TrendingUp', text: 'Brand Visibility' },
      { icon: 'Target', text: 'Lead Generation' },
      { icon: 'Zap', text: 'Social Media Growth' },
      { icon: 'BarChart', text: 'Performance Tracking' },
    ],
    industries: [
      { title: 'E-Commerce', desc: 'Drive traffic and sales with targeted digital campaigns.' },
      { title: 'SaaS & Tech', desc: 'Generate leads and build brand awareness through content marketing.' },
      { title: 'Healthcare', desc: 'Connect with patients through reputation management and social media.' },
      { title: 'Education', desc: 'Attract students and build trust with strategic content.' },
      { title: 'Startups', desc: 'Build brand presence and acquire customers cost-effectively.' },
    ],
  },
  'pay-per-click': {
    title: 'Paid Advertising Services | SEO India Tech',
    description:
      'Run high-performing PPC campaigns with our expert paid advertising services. Google Ads, Pay Per Click management, and more.',
    heroTitle: (
      <>
        Maximize ROI with{' '}
        <span className="text-blue-600">PPC Advertising</span>
      </>
    ),
    heroSubtitle:
      'When you need immediate visibility, our PPC advertising services deliver. We design, manage, and optimize campaigns that generate measurable results and maximize your return on investment.',
    heroBadge: 'Pay Per Click',
    heroImage: '/images/services/ppc.png',
    heroFeatures: [
      { icon: 'Zap', text: 'Instant Visibility' },
      { icon: 'Target', text: 'Targeted Campaigns' },
      { icon: 'TrendingUp', text: 'Maximize ROI' },
      { icon: 'BarChart', text: 'Data-Driven Results' },
    ],
    industries: [
      { title: 'E-Commerce', desc: 'Maximize product visibility and drive immediate sales.' },
      { title: 'SaaS & Tech', desc: 'Generate qualified leads with targeted search campaigns.' },
      { title: 'Healthcare', desc: 'Attract patients with locally targeted paid campaigns.' },
      { title: 'Education', desc: 'Drive enrollments with strategic PPC campaigns.' },
      { title: 'Startups', desc: 'Get fast traction and validate your market with paid ads.' },
    ],
  },
  'paid-advertising': {
    title: 'Paid Advertising Services | SEO India Tech',
    description:
      'Run high-performing PPC campaigns with our expert paid advertising services. Google Ads, Pay Per Click management, and more.',
    heroTitle: (
      <>
        Maximize ROI with{' '}
        <span className="text-blue-600">Paid Advertising</span>
      </>
    ),
    heroSubtitle:
      'When you need immediate visibility, our paid advertising services deliver. We design, manage, and optimize campaigns that generate measurable results and maximize your return on investment.',
    heroBadge: 'Paid Advertising',
    heroImage: '/images/services/ppc.png',
    heroFeatures: [
      { icon: 'Zap', text: 'Instant Visibility' },
      { icon: 'Target', text: 'Targeted Campaigns' },
      { icon: 'TrendingUp', text: 'Maximize ROI' },
      { icon: 'BarChart', text: 'Data-Driven Results' },
    ],
    industries: [
      { title: 'E-Commerce', desc: 'Maximize product visibility and drive immediate sales.' },
      { title: 'SaaS & Tech', desc: 'Generate qualified leads with targeted search campaigns.' },
      { title: 'Healthcare', desc: 'Attract patients with locally targeted paid campaigns.' },
      { title: 'Education', desc: 'Drive enrollments with strategic PPC campaigns.' },
      { title: 'Startups', desc: 'Get fast traction and validate your market with paid ads.' },
    ],
  },
  'design-and-development': {
    title: 'Design & Development Services | SEO India Tech',
    description:
      'End-to-end design and development solutions including UI/UX Design, Web Development, and custom digital product creation.',
    heroTitle: (
      <>
        Build Stunning Digital Experiences with{' '}
        <span className="text-blue-600">Design & Development</span>
      </>
    ),
    heroSubtitle:
      'We are a trusted design and development company delivering high-performance digital solutions backed by research, creativity, and innovation. Our commitment to quality sets us apart.',
    heroBadge: 'Design & Development',
    heroImage: '/images/services/our design.png',
    heroFeatures: [
      { icon: 'Target', text: 'User-First Design' },
      { icon: 'Zap', text: 'Fast Performance' },
      { icon: 'Shield', text: 'Secure & Reliable' },
      { icon: 'Globe', text: 'Responsive Solutions' },
    ],
    industries: [
      { title: 'E-Commerce', desc: 'High-converting online stores with seamless shopping experiences.' },
      { title: 'SaaS & Tech', desc: 'Scalable web applications with intuitive interfaces.' },
      { title: 'Healthcare', desc: 'User-friendly patient portals and medical software.' },
      { title: 'Education', desc: 'Engaging e-learning platforms and management systems.' },
      { title: 'Startups', desc: 'MVP development and rapid prototyping for quick market entry.' },
    ],
  },
}

export default function ServiceCategoryPage() {
  const router = useRouter()
  const { slug } = router.query

  const data = serviceCategories[slug]
  const meta = categoryMeta[slug]

  if (!data || !meta) {
    return (
      <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Service category not found.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link
          rel="canonical"
          href={`https://www.seoindiatech.com/services/${slug}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section with Image */}
      <ServiceHero
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        badge={meta.heroBadge}
        image={meta.heroImage}
        features={meta.heroFeatures}
      />

      {/* Category Cards Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 transition-colors duration-300">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
              {data.title}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 transition-colors duration-300">
              Explore Our {data.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
              Choose from our specialized services below. Each service is
              tailored to deliver measurable results for your business.
            </p>
            <div className="h-1 w-16 bg-blue-600 dark:bg-blue-500 rounded-full mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={service.slug}
                  className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-7 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800/50 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <WhyPartnerSection
        subtitle={meta.subtitle}
      />

      {/* Contact Form Section */}
      <ContactFormSection
        industries={meta.industries}
      />
    </>
  )
}
