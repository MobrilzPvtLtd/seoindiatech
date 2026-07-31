import React from 'react'
import SeoHead from '@/component/common/SeoHead'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serviceCategories } from '@/utils/serviceCategories'
import { ArrowRight, Search, BarChart, Globe, Shield, Zap, Target, TrendingUp, HelpCircle } from 'lucide-react'
import WhyPartnerSection from '@/component/common/WhyPartnerSection'
import ContactFormSection from '@/component/common/ContactFormSection'
import ServiceHero from '@/component/common/ServiceHero'
import HubContentSection from '@/component/common/HubContentSection'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

const categoryMeta = {
  seo: {
    title: 'SEO Agency India | AI SEO, eCommerce & GBP Optimization',
    description:
      'Partner with a leading SEO agency in India for AI SEO optimization, eCommerce SEO, GBP optimization, Google Business Profile optimization, and SEO solutions for small businesses.',
    heroTitle: (
      <>
        Grow Your Business with the Best{' '}
        <span className="text-primary">SEO Services in India</span>
      </>
    ),
    heroSubtitle: (
      <>In today&apos;s competitive digital landscape, visibility is essential for business growth. At SEO India Tech, we deliver <strong>Best SEO Services in India</strong> that improve search rankings, attract qualified organic traffic, increase engagement, and drive long-term business success through proven, data-driven SEO strategies.</>
    ),
    heroBadge: 'Search Engine Optimization',
    heroImage: '/images/services/score.png',
    heroFeatures: [
      { icon: 'Target', text: 'Custom SEO Strategy' },
      { icon: 'Search', text: 'Technical Site Audits' },
      { icon: 'Zap', text: 'AI Search Ready' },
      { icon: 'Globe', text: 'Local & GBP Optimization' },
      { icon: 'BarChart', text: 'E-Commerce SEO' },
      { icon: 'TrendingUp', text: 'Transparent Reporting' },
      { icon: 'Shield', text: 'Content-Driven Rankings' },
      { icon: 'Search', text: 'Small Business SEO' },
    ],
    industries: [
      { title: 'Local Businesses', desc: 'Dominate local searches and attract more customers from your area.' },
      { title: 'E-Commerce', desc: 'Boost product rankings and drive more sales with targeted SEO.' },
      { title: 'SaaS & Tech', desc: 'Increase organic visibility and generate qualified leads.' },
      { title: 'Healthcare', desc: 'Connect with patients through optimized local and organic search.' },
      { title: 'Startups', desc: 'Build organic visibility from day one with cost-effective SEO.' },
    ],
    contentSection: (
      <section className="bg-background py-16 md:py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-card dark:bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6">
              Professional SEO Services for Every Business
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              SEO India Tech delivers comprehensive SEO services that help businesses build lasting organic visibility. From local shops to national e-commerce brands, we build strategies designed for long-term ranking performance, not short-term spikes. Every engagement follows a structured process to ensure faster indexing, stronger technical foundations, and measurable growth in traffic and leads.
            </p>
            <p className="text-body font-medium mb-3">Our services include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {[
                { text: 'Local SEO' },
                { text: 'AI SEO' },
                { text: 'Small Business SEO' },
                { text: 'E-Commerce SEO' },
                { text: 'App Store Optimization', link: '/services/app-store-optimization' },
                { text: 'GBP Optimization', link: '/services/gbp-optimization' },
                { text: 'GEO Optimization' },
                { text: 'AEO' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item.link ? (
                    <Link href={item.link} className="font-semibold text-primary dark:text-accent hover:underline transition-colors duration-200">
                      {item.text}
                    </Link>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6">
              Why Choose SEO India Tech?
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Choosing the right SEO partner plays a major role in your online growth. As a trusted SEO agency in India, SEO India Tech offers a full range of services built around your specific business goals - not a fixed package applied to every client. Our team of SEO strategists, content writers, and technical specialists work together to deliver results you can actually track.
            </p>
            <p className="text-body font-medium mb-3">Our advantages include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {['Experienced SEO Strategists', 'Custom SEO Roadmaps', 'White-Hat, Google-Compliant Methods', 'Technical & On-Page Expertise', 'Transparent Monthly Reporting', 'Ongoing Optimization Support'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6">
              Grow Your Online Presence with SEO India Tech
            </h2>
            <p className="text-muted leading-relaxed">
              Whether you run a local business, an online store, or an established enterprise, SEO India Tech has the expertise to deliver real, sustainable results. As a leading <strong><Link href="/" className="text-primary dark:text-accent hover:underline">SEO company in India</Link></strong>, we help businesses turn search visibility into real revenue - not just better numbers on a dashboard.
            </p>
          </div>
        </div>
      </section>
    ),
  },
  'digital-marketing': {
    title: 'Digital Marketing Services | SEO India Tech',
    description:
      'Discover our digital marketing services including Content Marketing, Digital Branding, Social Media Optimization, and Online Reputation Management.',
    heroTitle: (
      <>
        Accelerate Your Growth with{' '}
        <span className="text-primary">Digital Marketing</span>
      </>
    ),
    heroSubtitle:
      'In today\'s digital world, a strong online presence is essential for business growth. Our comprehensive digital marketing strategies help you reach your audience where they spend their time.',
    heroBadge: 'Digital Marketing',
    heroImage: '/images/services/digital-marketing.png',
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
    hubContent: {
      title: 'Full-Funnel Digital Marketing Services in India',
      paragraphs: [
        'Digital marketing is more than posting on social media. It is a coordinated system of content, branding, reputation, and social visibility that builds trust and drives conversions over time. SEO India Tech delivers integrated digital marketing services that work alongside your SEO strategy - so organic and brand channels reinforce each other instead of competing.',
        'Our team handles content marketing that ranks and converts, digital branding that builds recognition, social media optimization that grows engagement, and online reputation management that protects what customers see when they search your name. Every campaign is tied to measurable KPIs with transparent monthly reporting.',
      ],
      bullets: [
        'SEO-optimized content marketing',
        'Brand identity and digital branding',
        'Social media optimization (SMO)',
        'Online reputation management (ORM)',
        'Integrated reporting across channels',
        'AI-ready content for search and social',
      ],
      links: [
        { label: 'Content Marketing', href: '/services/content-marketing' },
        { label: 'Digital Branding', href: '/services/digital-branding' },
        { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
      ],
    },
    hubFaqs: PAGE_FAQS.digitalMarketingHub,
  },
  'pay-per-click': {
    title: 'Paid Advertising Services | SEO India Tech',
    description:
      'Run high-performing PPC campaigns with our expert paid advertising services. Google Ads, Pay Per Click management, and more.',
    heroTitle: (
      <>
        Maximize ROI with{' '}
        <span className="text-primary">PPC Advertising</span>
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
    hubContent: {
      title: 'Paid Advertising That Delivers Measurable ROI',
      paragraphs: [
        'When you need visibility now, paid advertising delivers. SEO India Tech designs, launches, and optimizes PPC campaigns across Google Ads, Meta, LinkedIn, and YouTube - with conversion tracking on every click so you know exactly what each lead costs.',
        'We do not set up campaigns and disappear. Our team continuously tests ad copy, landing pages, audience targeting, and bid strategies to improve quality scores and lower cost per acquisition. Whether you are a local service business or a national e-commerce brand, we align paid spend with your revenue goals.',
      ],
      bullets: [
        'Google Ads search and display campaigns',
        'Meta Ads (Facebook and Instagram)',
        'LinkedIn and YouTube advertising',
        'Landing page optimization for conversions',
        'Conversion tracking and CPL reporting',
        'PPC + SEO integrated strategy',
      ],
      links: [
        { label: 'PPC Advertising Services', href: '/services/ppc-advertising' },
        { label: 'SEO Services', href: '/services/seo' },
      ],
    },
    hubFaqs: PAGE_FAQS.paidAdvertisingHub,
  },
  'paid-advertising': {
    title: 'Paid Advertising Services | SEO India Tech',
    description:
      'Run high-performing PPC campaigns with our expert paid advertising services. Google Ads, Pay Per Click management, and more.',
    heroTitle: (
      <>
        Maximize ROI with{' '}
        <span className="text-primary">Paid Advertising</span>
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
    hubContent: {
      title: 'Paid Advertising That Delivers Measurable ROI',
      paragraphs: [
        'When you need visibility now, paid advertising delivers. SEO India Tech designs, launches, and optimizes PPC campaigns across Google Ads, Meta, LinkedIn, and YouTube - with conversion tracking on every click.',
        'We continuously test ad copy, landing pages, audience targeting, and bid strategies to improve quality scores and lower cost per acquisition.',
      ],
      bullets: [
        'Google Ads search and display campaigns',
        'Meta Ads (Facebook and Instagram)',
        'LinkedIn and YouTube advertising',
        'Conversion tracking and CPL reporting',
      ],
      links: [{ label: 'PPC Advertising Services', href: '/services/ppc-advertising' }],
    },
    hubFaqs: PAGE_FAQS.paidAdvertisingHub,
  },
  'design-and-development': {
    title: 'Design & Development Services | SEO India Tech',
    description:
      'End-to-end design and development solutions including UI/UX Design, Web Development, and custom digital product creation.',
    heroTitle: (
      <>
        Build Stunning Digital Experiences with{' '}
        <span className="text-primary">Design & Development</span>
      </>
    ),
    heroSubtitle:
      'We are a trusted design and development company delivering high-performance digital solutions backed by research, creativity, and innovation. Our commitment to quality sets us apart.',
    heroBadge: 'Design & Development',
    heroImage: '/images/services/our-design.png',
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
    hubContent: {
      title: 'Design & Development Built for Speed, UX, and SEO',
      paragraphs: [
        'Your website is often the first impression customers have of your business. SEO India Tech designs and develops digital experiences that look professional, load fast, and convert visitors into leads. Every project starts with user research and ends with a site optimized for search engines from day one.',
        'From UI/UX design and wireframing to responsive development and landing page creation, our team delivers solutions that balance aesthetics with performance. We build sites that rank, load quickly on mobile, and guide users toward clear calls to action.',
      ],
      bullets: [
        'UI/UX design and prototyping',
        'Responsive web development',
        'SEO-ready site architecture',
        'Fast Core Web Vitals performance',
        'Landing page design for campaigns',
        'Website redesign and migration',
      ],
      links: [{ label: 'UI/UX Design Services', href: '/services/ui-ux-design' }],
    },
    hubFaqs: PAGE_FAQS.designDevelopmentHub,
  },
}

export default function ServiceCategoryPage() {
  const router = useRouter()
  const { slug } = router.query

  const data = serviceCategories[slug]
  const meta = categoryMeta[slug]

  if (!slug) return null

  if (!data || !meta) {
    return (
      <section className="bg-white dark:bg-background min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-heading mb-4">
            404
          </h1>
          <p className="text-muted text-lg mb-8">
            Service category not found.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        path={`/services/${slug}`}
      />

      {/* Hero Section with Image */}
      <ServiceHero
        title={meta.heroTitle}
        subtitle={meta.heroSubtitle}
        badge={meta.heroBadge}
        image={meta.heroImage}
        features={meta.heroFeatures}
      />

      {/* Category Cards Section */}
      <section className="bg-white dark:bg-background border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-4 transition-colors duration-300">
              Explore Our <span className="text-primary">{data.title}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto transition-colors duration-300">
              Our SEO company in India offers a focused service for every kind of business - local, e-commerce, small business, or enterprise. Explore each one below to find the right fit for where you're trying to grow.
            </p>
            <div className="h-1 w-16 bg-primary dark:bg-primary rounded-full mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={service.slug}
                  className="group relative bg-gray-50 dark:bg-card/50 rounded-2xl p-7 border border-border hover:border-primary/30 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-background dark:bg-primary/20/40 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-hover group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary dark:text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-heading group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-body leading-relaxed mb-3 transition-colors duration-300">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="space-y-1 mb-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary dark:text-accent">
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

      {/* Content Section */}
      {meta.contentSection}
      {meta.hubContent && <HubContentSection {...meta.hubContent} />}

      {/* Contact Form Section */}
      <ContactFormSection
        industries={meta.industries}
      />

      {/* FAQ Section */}
      {slug === 'seo' && <VisibleFaq faqs={PAGE_FAQS.seoHub} minCount={8} showSchema />}
      {meta.hubFaqs && <VisibleFaq faqs={meta.hubFaqs} minCount={8} showSchema />}
    </>
  )
}
