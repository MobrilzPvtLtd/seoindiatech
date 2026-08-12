/**
 * Premium hub page content for /services/[slug] category pages.
 */
import { PAGE_FAQS } from '../../pageFaqs'
import { serviceCategories } from '../../serviceCategories'
import { getHubInternalLinks } from '../../internalLinks'
import { getServiceEntry, SERVICE_CATALOG } from './serviceCatalog'
import { getHubAnswerFirst } from '../../seo/answerFirstContent.js'
import { HUB_OVERRIDES } from './hubOverrides.js'

function mergeHubContent(built, override) {
  if (!override) return built
  return {
    ...built,
    ...override,
    seo: { ...built.seo, ...override.seo },
    hero: { ...built.hero, ...override.hero },
    editorial: override.editorial || built.editorial,
    semanticTopics: override.semanticTopics || built.semanticTopics,
    pillars: override.pillars || built.pillars,
    whySeoMatters: override.whySeoMatters
      ? { ...built.whySeoMatters, ...override.whySeoMatters }
      : built.whySeoMatters,
    faq: override.faq
      ? {
          ...built.faq,
          ...override.faq,
          items: override.faq.items ?? built.faq.items,
        }
      : built.faq,
    internalLinks: override.internalLinks
      ? {
          ...built.internalLinks,
          ...override.internalLinks,
          links: override.internalLinks.links || built.internalLinks.links,
        }
      : built.internalLinks,
  }
}

const HUB_HERO_IMAGES = {
  seo: '/images/services/heroes/hub-seo.svg',
  'digital-marketing': '/images/services/heroes/hub-digital-marketing.svg',
  'paid-advertising': '/images/services/heroes/hub-paid-advertising.svg',
  'design-and-development': '/images/services/heroes/hub-design-and-development.svg',
}

const HUB_FAQ_MAP = {
  seo: PAGE_FAQS.seoHub,
  'digital-marketing': PAGE_FAQS.digitalMarketingHub,
  'paid-advertising': PAGE_FAQS.paidAdvertisingHub,
  'design-and-development': PAGE_FAQS.designDevelopmentHub,
}

function expandFaqs(base, hubName, limit = 20) {
  const extras = [
    {
      question: `How do I choose the right ${hubName.toLowerCase()} for my business?`,
      answer: `Start with your primary goal-visibility, leads, brand, or conversions. We recommend a free audit to map the right mix of services under our ${hubName} program.`,
    },
    {
      question: `Do you offer packages across all ${hubName.toLowerCase()}?`,
      answer: `Yes. We offer integrated packages and à la carte services. Visit /seo-packages or contact us for a custom proposal.`,
    },
    {
      question: `Can you serve clients outside India?`,
      answer: 'Yes. We deliver for USA, UK, Australia, UAE, Canada, and worldwide with timezone-aligned communication.',
    },
    {
      question: 'How do you report results?',
      answer: 'Weekly dashboards cover KPIs tied to leads, revenue, and channel performance-not vanity metrics alone.',
    },
  ]
  const merged = [...(base || [])]
  for (const faq of extras) {
    if (merged.length >= limit) break
    if (!merged.some((f) => f.question === faq.question)) merged.push(faq)
  }
  return merged.slice(0, limit)
}

export function getPremiumHubContent(hubSlug) {
  const hub = serviceCategories[hubSlug]
  if (!hub) return null

  const hubTitle = hub.title
  const hubName = hubTitle.replace(/ Services$/, '')
  const path = `/services/${hubSlug}`
  const childServices = hub.services
    .map((s) => {
      const slug = s.slug.replace(/^\/services\//, '').replace(/\/$/, '')
      const entry = getServiceEntry(slug) || SERVICE_CATALOG.find((e) => e.slug === slug)
      return {
        title: s.title,
        slug,
        href: s.slug.startsWith('/') ? s.slug : `/services/${slug}`,
        description: s.description || entry?.shortDescription || `${s.title} by SEO India Tech.`,
        features: s.features || entry?.features || [],
      }
    })
    .filter((s, i, arr) => arr.findIndex((x) => x.slug === s.slug) === i)

  const faqBase = HUB_FAQ_MAP[hubSlug] || PAGE_FAQS.seoHub

  const built = {
    slug: hubSlug,
    name: hubName,
    path,
    isHub: true,

    seo: {
      title: `${hubTitle} India | Full-Service Digital Agency | SEO India Tech`,
      description: `Explore ${hubTitle.toLowerCase()} from SEO India Tech: ${childServices.map((s) => s.title).slice(0, 4).join(', ')} and more. 14+ years. Free audit.`,
      slug: hubSlug,
      canonical: path,
      keywords: childServices.map((s) => `${s.title.toLowerCase()} services`),
      internalLinks: getHubInternalLinks(hubSlug).map((l) => l.href),
    },

    hero: {
      badge: 'SEO India Tech Services',
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/seo' },
        { label: hubTitle },
      ],
      h1: `${hubTitle} Built for Measurable Business Growth`,
      paragraphs: [
        `Our ${hubTitle.toLowerCase()} help businesses in India and worldwide improve visibility, generate qualified leads, and scale revenue with accountable reporting.`,
        `Choose a specialized program below or book a free audit-we will recommend the right mix of ${hubName.toLowerCase()} for your goals, budget, and timeline.`,
      ],
      benefits: [
        '14+ years of proven delivery',
        'Dedicated strategist on every account',
        'AI-ready SEO and content built in',
        'Weekly KPI reporting and transparent pricing',
      ],
      primaryCta: { label: 'Get a Free Audit', href: '/contact-us' },
      secondaryCta: { label: 'View SEO Packages', href: '/seo-packages' },
      trustAwards: ['14+ Years', '500+ Clients', '4.9 Rating', '12+ Countries', 'White Hat', 'AI Ready'],
      rating: '4.9/5 from 120+ client reviews',
      backgroundImage: HUB_HERO_IMAGES[hubSlug] || '/images/herobg.jpg',
      backgroundImageMobile: '/images/hero-mobile.webp',
      heroStats: [
        { value: '186%', label: 'Traffic growth' },
        { value: '94%', label: 'More leads' },
        { value: '14+', label: 'Years experience' },
        { value: '500+', label: 'Global clients' },
      ],
      image: {
        src: HUB_HERO_IMAGES[hubSlug] || '/images/seo-banner.jpg',
        alt: `${hubTitle} by SEO India Tech`,
      },
    },

    trust: {
      badge: 'Trusted Worldwide',
      title: `Why Businesses Choose Our ${hubName} Team`,
      subtitle: `We deliver ${hubTitle.toLowerCase()} across India, USA, UK, Australia, and UAE.`,
      stats: [
        { value: '14', suffix: '+', label: 'Years experience' },
        { value: '500', suffix: '+', label: 'Clients served' },
        { value: '12', suffix: '+', label: 'Countries' },
        { value: '4.9', suffix: '', label: 'Client rating' },
      ],
      platforms: ['Google Reviews', 'Clutch', 'GoodFirms'],
    },

    whySeoMatters: {
      badge: 'Why It Matters',
      title: `Why ${hubName} Drives Growth in 2026`,
      subtitle: `Customers research online before they buy. Integrated ${hubTitle.toLowerCase()} put your brand in front of high-intent buyers.`,
      trends: [
        {
          title: 'Search and AI discovery are merging',
          description: `${hubName} must perform in Google rankings and AI-generated answers. Brands without structured authority lose share to competitors cited by ChatGPT and Gemini.`,
        },
        {
          title: 'Siloed channels waste budget',
          description: `SEO, paid media, content, and design work best as one system. Our ${hubTitle.toLowerCase()} integrate channels so messaging and tracking stay aligned.`,
        },
        {
          title: 'Measurement separates winners',
          description: 'Weekly KPI reporting tied to leads and revenue-not vanity traffic-lets you scale what works and cut what does not.',
        },
      ],
      highlights: [
        { value: '76%', label: 'Research online first' },
        { value: '3.2x', label: 'Higher trust from organic' },
        { value: '58%', label: 'Use near me searches' },
        { value: '41%', label: 'Click top 3 results' },
      ],
      geoAnswer: {
        question: `What ${hubTitle.toLowerCase()} does SEO India Tech offer?`,
        answer: `We offer ${childServices.map((s) => s.title).join(', ')}-each with dedicated strategists, white-hat execution, and weekly reporting.`,
        takeaways: childServices.slice(0, 3).map((s) => `${s.title} for measurable growth`),
      },
      image: { src: HUB_HERO_IMAGES[hubSlug] || '/images/seo-banner.jpg', alt: hubTitle },
    },

    painPoints: {
      badge: 'Common Challenges',
      title: `Problems Our ${hubName} Programs Solve`,
      subtitle: 'These issues drain revenue every month. We address each with a clear, measurable plan.',
      image: { src: HUB_HERO_IMAGES[hubSlug] || '/images/seo-banner.jpg', alt: hubTitle },
      items: [
        { icon: 'search', title: 'Low visibility', description: 'Your brand is hard to find for priority searches.', impact: 'Lost leads to competitors' },
        { icon: 'chart', title: 'No ROI clarity', description: 'Marketing reports traffic without tying to revenue.', impact: 'Wasted budget' },
        { icon: 'cpu', title: 'Missing from AI answers', description: 'Unstructured content is not cited by AI tools.', impact: 'Lost generative discovery' },
        { icon: 'users', title: 'Disconnected channels', description: 'SEO, ads, and content run in silos.', impact: 'Inconsistent messaging' },
        { icon: 'map', title: 'Weak local presence', description: 'GBP and local signals underperform.', impact: 'Missed map pack leads' },
        { icon: 'shield', title: 'Technical friction', description: 'Slow sites and broken tracking block conversions.', impact: 'Higher bounce rates' },
      ],
    },

    whyChoose: {
      badge: 'Why Choose Us',
      title: `Why SEO India Tech for ${hubName}`,
      subtitle: 'White-hat methods, AI-ready execution, and strategists who own your results.',
      cards: [
        {
          icon: 'shield',
          title: 'White-Hat, Future-Proof',
          description: 'Ethical tactics that build durable visibility-not shortcuts that risk penalties.',
          points: ['Algorithm-resilient', 'Brand-safe', 'Transparent methods'],
        },
        ...childServices.slice(0, 4).map((s, i) => ({
          icon: ['search', 'map', 'sparkles', 'chart'][i] || 'star',
          title: s.title,
          description: s.description,
          points: (s.features || []).slice(0, 3).length ? s.features.slice(0, 3) : ['Expert delivery', 'Weekly reporting', 'ROI focused'],
        })),
        {
          icon: 'users',
          title: 'Dedicated Strategist',
          description: 'Named expert on every account with direct access and accountability.',
          points: ['Weekly calls', 'Clear KPIs', 'No rotating juniors'],
        },
        {
          icon: 'cpu',
          title: 'AI & GEO Ready',
          description: 'Every deliverable structured for traditional search and AI answer engines.',
          points: ['GEO blocks', 'FAQ schema', 'Entity signals'],
        },
      ],
    },

    services: {
      badge: 'Programs',
      title: `Explore Our ${hubTitle}`,
      subtitle: 'Click any program for full details, deliverables, and FAQs.',
      items: childServices.map((s, i) => ({
        icon: ['file', 'user', 'map-pin', 'cpu', 'megaphone', 'chart', 'search', 'sparkles'][i] || 'star',
        title: s.title,
        description: s.description,
        benefits: (s.features || []).slice(0, 3).length ? s.features.slice(0, 3) : ['Strategy', 'Implementation', 'Reporting'],
        href: s.href,
      })),
      cta: { label: 'Get Your Custom Roadmap', href: '/contact-us' },
    },

    editorial: {
      badge: 'Expert Guide',
      title: `The Complete Guide to ${hubTitle}`,
      subtitle: `How to choose, implement, and measure ${hubName.toLowerCase()} for durable growth.`,
      blocks: [
        {
          heading: `What ${hubTitle.toLowerCase()} include`,
          paragraphs: [
            `Our ${hubTitle.toLowerCase()} span ${childServices.map((s) => s.title.toLowerCase()).join(', ')}-integrated where it makes sense for your funnel.`,
            'Every program starts with audit and strategy, then moves to implementation, optimization, and weekly reporting tied to leads and revenue.',
          ],
        },
        {
          heading: 'How to choose the right program',
          paragraphs: [
            'Match services to your primary goal: local visibility, e-commerce growth, brand building, paid leads, or site performance.',
            'We recommend a free consultation to map priorities, timeline, and budget before you commit.',
          ],
        },
        {
          heading: 'AI search and integrated marketing',
          paragraphs: [
            'Search is expanding into AI Overviews and chat-based discovery. Our programs structure content for both traditional rankings and generative citations.',
            'Integrated SEO, content, paid, and design outperform siloed vendors because tracking, messaging, and landing pages stay aligned.',
          ],
        },
      ],
    },

    pillars: {
      badge: 'Core Programs',
      title: `${hubName} Pillars`,
      subtitle: `Six integrated capabilities that power our ${hubTitle.toLowerCase()}.`,
      items: childServices.slice(0, 6).map((s, i) => ({
        id: s.slug,
        label: ['Strategy', 'Execution', 'Visibility', 'Content', 'Authority', 'Reporting'][i] || 'Program',
        title: s.title,
        description: s.description,
        process: 'Discovery, planning, execution, and weekly optimization with transparent reporting.',
        outcome: 'Measurable growth in visibility, qualified leads, and revenue.',
        benefits: (s.features || []).slice(0, 4).length
          ? s.features.slice(0, 4)
          : ['Expert delivery', 'Dedicated strategist', 'Weekly KPI reports', 'Proven methodology'],
        image: {
          src: `/images/services/heroes/${s.slug}.svg`,
          alt: `${s.title} program illustration`,
        },
      })),
    },
    audiences: {
      badge: 'Who We Help',
      title: `${hubName} for Every Business Stage`,
      subtitle: 'From startups to enterprises-we scale programs to your goals.',
      items: [
        { icon: 'rocket', title: 'Startups', description: 'Lean, high-impact priorities.', points: ['Fast setup', 'Core tracking', 'Growth roadmap'] },
        { icon: 'building', title: 'SMBs', description: 'Compete locally and nationally.', points: ['Affordable plans', 'Local SEO', 'Weekly reports'] },
        { icon: 'layers', title: 'Multi-Location', description: 'Branch-level programs.', points: ['Location pages', 'NAP audits', 'Dashboards'] },
        { icon: 'globe', title: 'International', description: 'Cross-border delivery.', points: ['Multi-market', 'Compliance', 'Global tracking'] },
        { icon: 'hospital', title: 'Established Brands', description: 'Refresh without losing momentum.', points: ['Audits', 'Migrations', 'Content refresh'] },
        { icon: 'sparkle', title: 'Agencies', description: 'White-label delivery.', points: ['Reseller models', 'Branded reports', 'Strategist support'] },
      ],
    },

    process: {
      badge: 'Our Process',
      title: `How We Deliver ${hubName}`,
      subtitle: 'Nine phases from discovery to sustained growth.',
      steps: [
        { icon: 'search', title: 'Discovery', description: 'Goals, stakeholders, competitive review.' },
        { icon: 'book', title: 'Research', description: 'Keyword, audience, and intent mapping.' },
        { icon: 'clipboard', title: 'Audit', description: 'Technical, content, and conversion review.' },
        { icon: 'map', title: 'Strategy', description: 'Roadmap with KPIs and timelines.' },
        { icon: 'code', title: 'Implementation', description: 'Execute across chosen programs.' },
        { icon: 'flask', title: 'Testing', description: 'Tracking QA and mobile UX validation.' },
        { icon: 'bar-chart', title: 'Reporting', description: 'Weekly dashboards and actions.' },
        { icon: 'refresh', title: 'Optimization', description: 'Iterate based on data.' },
        { icon: 'trending', title: 'Scale', description: 'Expand winning channels.' },
      ],
    },

    comparison: {
      badge: 'Compare Options',
      title: 'Why Businesses Choose SEO India Tech',
      subtitle: `See how we compare for ${hubName.toLowerCase()}.`,
      columns: ['Feature', 'Freelancer', 'Traditional Agency', 'SEO India Tech'],
      rows: [
        { feature: `${hubName} expertise`, freelancer: 'Variable', agency: 'Generalist', us: 'Core specialty' },
        { feature: 'AI & GEO optimization', freelancer: 'Rare', agency: 'Emerging', us: 'Built-in' },
        { feature: 'Dedicated strategist', freelancer: 'Solo', agency: 'Rotating', us: 'Named expert' },
        { feature: 'Weekly reporting', freelancer: 'Monthly', agency: 'PDFs', us: 'Live dashboards' },
        { feature: 'Integrated channels', freelancer: 'Limited', agency: 'Siloed', us: 'Unified' },
        { feature: 'International delivery', freelancer: 'Difficult', agency: 'Enterprise', us: '12+ countries' },
        { feature: 'Transparent pricing', freelancer: 'Variable', agency: 'Opaque', us: 'Clear packages' },
        { feature: 'White-hat methods', freelancer: 'Unknown', agency: 'Mixed', us: 'Guaranteed' },
      ],
    },

    results: {
      badge: 'Proven Results',
      title: `${hubName} Outcomes We Deliver`,
      subtitle: 'Composite results across client programs.',
      metrics: [
        { label: 'Organic Traffic', value: '+186%', change: 'avg. 8-month growth' },
        { label: 'Priority Keywords', value: '+142', change: 'page-1 rankings' },
        { label: 'Monthly Leads', value: '+94%', change: 'from digital channels' },
        { label: 'Conversion Rate', value: '+47%', change: 'landing page avg.' },
      ],
    },

    caseStudy: {
      title: `Case Study: Integrated ${hubName} Growth`,
      problem: 'A client had disconnected marketing channels, weak tracking, and low visibility for priority searches.',
      solution: `We unified ${hubTitle.toLowerCase()} under one strategy with shared KPIs, landing pages, and weekly reporting.`,
      execution: 'Month 1-2: audit and quick wins. Month 3-4: channel scale. Month 5-6: optimization and AI-ready content.',
      timeline: '6 months',
      results: [
        { label: 'Organic sessions', value: '+172%', change: 'vs. baseline' },
        { label: 'Qualified leads', value: '+89%', change: 'monthly avg.' },
        { label: 'Cost per lead', value: '-34%', change: 'vs. paid only' },
        { label: 'Mobile LCP', value: '1.8s', change: 'improved 62%' },
      ],
      cta: { label: 'Get Similar Results', href: '/contact-us' },
    },

    relatedIndustries: {
      badge: 'Our Programs',
      title: `All ${hubTitle}`,
      items: childServices.map((s) => ({
        title: s.title,
        slug: s.slug,
        href: s.href,
        description: s.description,
      })),
    },

    toolsTrust: {
      badge: 'Tools & Trust',
      title: 'Enterprise Tools. Proven Credentials.',
      subtitle: 'Industry-standard platforms behind every engagement.',
      tools: [
        { name: 'Google Search Console', description: 'Indexation and query monitoring.' },
        { name: 'Google Analytics 4', description: 'Conversion and funnel analysis.' },
        { name: 'SEMrush / Ahrefs', description: 'Research and competitor gaps.' },
        { name: 'Looker Studio', description: 'Live client dashboards.' },
      ],
      certifications: ['Google Analytics Certified', 'Google Ads Certified', 'HubSpot Inbound', 'SEMrush SEO Toolkit'],
      awards: ['Top SEO Agency India (Clutch)', '4.9/5 Client Rating', 'GoodFirms Top Agency', '14+ Years Experience'],
    },

    semanticTopics: {
      badge: 'Topics',
      title: `${hubName} Keywords & Services`,
      subtitle: 'Full coverage across search and AI discovery.',
      topics: childServices.flatMap((s) => [s.title.toLowerCase(), `${s.title.toLowerCase()} services`, `${s.title.toLowerCase()} agency`]).slice(0, 18),
      definition: {
        term: `What are ${hubTitle.toLowerCase()}?`,
        text: `${hubTitle} from SEO India Tech include ${childServices.map((s) => s.title).join(', ')}-delivered with strategy, execution, and weekly KPI reporting.`,
      },
    },

    keyTakeaways: {
      badge: 'Key Takeaways',
      title: `${hubName}: What to Remember`,
      items: [
        'Choose programs aligned to your primary growth goal.',
        'Integrated channels outperform siloed vendors.',
        'AI search and GEO are part of sustainable visibility.',
        'Weekly reporting should tie to leads and revenue.',
        'Start with a free audit for a clear 90-day roadmap.',
      ],
    },

    internalLinks: {
      badge: 'Explore More',
      title: 'Continue Your Research',
      subtitle: 'Related services, packages, and industries.',
      links: [
        ...childServices.slice(0, 4).map((s) => ({
          href: s.href,
          title: s.title,
          description: s.description,
        })),
        ...getHubInternalLinks(hubSlug),
      ].filter((link, index, arr) => arr.findIndex((l) => l.href === link.href) === index).slice(0, 10),
    },

    testimonials: {
      badge: 'Client Voices',
      title: 'What Our Clients Say',
      subtitle: 'Verified stories from businesses we have helped grow.',
      items: [
        { name: 'Rahul Mehta', role: 'Marketing Director', company: 'E-Commerce, Mumbai', text: 'Integrated programs and clear reporting. Traffic and conversions improved within months.' },
        { name: 'Sarah Chen', role: 'Founder', company: 'SaaS, Singapore', text: 'Dedicated strategists and AI-ready content. Exactly what we needed to scale.' },
        { name: 'David Okonkwo', role: 'CEO', company: 'Services, UK', text: 'Local visibility and weekly KPIs. Cost per lead dropped while volume grew.' },
        { name: 'Priya Nair', role: 'Director', company: 'Healthcare, Bangalore', text: 'Professional, compliant, and results-focused delivery.' },
        { name: 'James Wilson', role: 'Owner', company: 'B2B, USA', text: 'Transparent pricing and real accountability. Best agency experience in years.' },
        { name: 'Emily Watson', role: 'CMO', company: 'Retail, Australia', text: 'One partner for SEO, content, and paid-with unified reporting.' },
      ],
    },

    faq: {
      badge: 'FAQ',
      title:
        hubSlug === 'seo'
          ? 'Frequently Asked Questions About SEO Services in India'
          : `Frequently Asked Questions About ${hubTitle}`,
      items:
        hubSlug === 'seo' ? [...PAGE_FAQS.seoHub] : expandFaqs(faqBase, hubName, 20),
    },

    contact: {
      title: `Ready to Start ${hubName}?`,
      subtitle: 'Book a free audit for a custom roadmap with timelines and KPIs.',
      phone: { label: '+91-8076676731', href: 'tel:+91-8076676731' },
      email: 'sales@seoindiatech.com',
      address: 'E-160, Sector 63, Noida, Uttar Pradesh 201301, India',
      formTitle: `Book Your Free ${hubName} Audit`,
      formSubtitle: 'No obligation. Clear next steps for 90 days.',
      benefits: ['Free audit', 'No long-term contract', 'Dedicated strategist'],
      cta: { label: 'Book Free Consultation', href: '/contact-us' },
    },

    finalCta: {
      title: `Ready to Grow with ${hubName}?`,
      subtitle: 'Get a free audit covering gaps, opportunities, and a custom roadmap.',
      benefits: ['Free audit', 'Transparent pricing', 'Dedicated strategist'],
      primaryCta: { label: 'Book Free Consultation', href: '/contact-us' },
      secondaryCta: { label: 'Call +91-8076676731', href: 'tel:+91-8076676731' },
    },

    answerFirst: getHubAnswerFirst(
      hubSlug,
      hubTitle,
      childServices.map((service) => service.title)
    ),
  }

  return mergeHubContent(built, HUB_OVERRIDES[hubSlug])
}
