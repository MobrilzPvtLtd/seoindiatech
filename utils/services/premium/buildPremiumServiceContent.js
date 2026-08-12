/**
 * Premium service page content builder - mirrors industry premium architecture.
 */
import { getServiceInternalLinks } from '../../internalLinks'
import { PAGE_FAQS } from '../../pageFaqs'
import { getRelatedServices } from './serviceCatalog'
import { getServiceFaqs } from './serviceFaqMap'
import { getServiceAnswerFirst } from '../../seo/answerFirstContent.js'

const SERVICE_HERO_BG = {
  'local-seo-service': '/images/services/heroes/local-seo-service.svg',
  'ai-seo': '/images/services/heroes/ai-seo.svg',
  'small-business-seo': '/images/services/heroes/small-business-seo.svg',
  'e-commerce-seo': '/images/services/heroes/e-commerce-seo.svg',
  'international-seo': '/images/services/heroes/e-commerce-seo.svg',
  'technical-seo': '/images/blog/technical-seo-checklist-enterprise-websites-hero.svg',
  'app-store-optimization': '/images/services/heroes/app-store-optimization.svg',
  'gbp-optimization': '/images/services/heroes/gbp-optimization.svg',
  'generative-engine-optimization': '/images/services/heroes/generative-engine-optimization.svg',
  'answer-engine-optimization': '/images/services/heroes/answer-engine-optimization.svg',
  'digital-branding': '/images/services/heroes/digital-branding.svg',
  'content-marketing': '/images/services/heroes/content-marketing.svg',
  'online-reputation-management': '/images/services/heroes/online-reputation-management.svg',
  'social-media-optimization': '/images/services/heroes/social-media-optimization.svg',
  'ppc-advertising': '/images/services/heroes/ppc-advertising.svg',
  'pay-per-click': '/images/services/heroes/pay-per-click.svg',
  'ui-ux-design': '/images/services/heroes/ui-ux-design.svg',
  'social-media-marketing': '/images/services/heroes/social-media-marketing.svg',
}

const PILLAR_IMAGES = {
  local: '/images/industries/benefit-gmb.svg',
  technical: '/images/industries/benefit-seo.svg',
  content: '/images/industries/benefit-smo.svg',
  ai: '/images/industries/benefit-ai-overview.svg',
  gbp: '/images/industries/benefit-gmb.svg',
  reputation: '/images/industries/benefit-ppc.svg',
}

function buildEditorial(entry) {
  const name = entry.name
  const label = name.toLowerCase()

  return {
    badge: 'Expert Guide',
    title: `The Complete Guide to ${name}`,
    subtitle: `Everything you need to know about ${label} from SEO India Tech: strategy, execution, measurement, and how it drives business growth.`,
    blocks: [
      {
        heading: `Why ${name} matters in 2026`,
        paragraphs: [
          entry.shortDescription,
          `Buyers research online before they call, book, or buy. ${name} ensures your brand appears when intent is highest-across Google, Maps, AI Overviews, and social discovery channels.`,
          `SEO India Tech delivers ${label} with transparent reporting, white-hat methods, and strategists who align every deliverable to leads and revenue-not vanity metrics.`,
        ],
      },
      {
        heading: `What is included in our ${name} program`,
        paragraphs: [
          `Our ${label} program covers audit and strategy, implementation, optimization, and reporting. Deliverables are tailored to your industry, competition, and growth stage.`,
          ...(entry.features.length
            ? [`Core focus areas include: ${entry.features.join('; ')}.`]
            : []),
          `We integrate tracking from day one so you see which pages, campaigns, and keywords produce qualified inquiries.`,
        ],
      },
      {
        heading: 'Local and multi-market visibility',
        paragraphs: [
          `Whether you serve one city or multiple countries, we align location signals, Google Business Profile data, and localized landing pages with how customers search.`,
          `For businesses targeting India, USA, UK, Australia, and UAE, we adapt keyword strategy, compliance considerations, and channel mix per market.`,
        ],
      },
      {
        heading: 'Technical foundation and Core Web Vitals',
        paragraphs: [
          `Slow sites, broken tracking, and crawl issues undermine every marketing channel. We audit Core Web Vitals, indexation, schema, and conversion paths as part of ${label}.`,
          `Technical health protects rankings during algorithm updates and ensures ad spend and content investments convert on mobile and desktop.`,
        ],
      },
      {
        heading: 'AI search, GEO, and answer engine optimization',
        paragraphs: [
          `Search is expanding beyond blue links. We structure ${label} deliverables for Google AI Overviews, ChatGPT, Gemini, and voice assistants with concise answers, FAQ schema, and entity-rich content.`,
          `Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are built into our SEO and content programs-not sold as disconnected add-ons.`,
        ],
      },
      {
        heading: 'Reputation, trust, and E-E-A-T',
        paragraphs: [
          `Reviews, case studies, credentials, and consistent branding influence both human buyers and search algorithms. We strengthen trust signals ethically across GBP, third-party profiles, and on-site proof.`,
          `For YMYL and competitive categories, expertise-led content and transparent reporting are essential for durable visibility.`,
        ],
      },
      {
        heading: `How we measure ${name} ROI`,
        paragraphs: [
          `Weekly dashboards cover visibility, traffic quality, leads, cost per acquisition, and recommended actions. Success is defined with you upfront.`,
          `We connect ${label} to CRM and analytics wherever possible so marketing decisions are data-driven, not guesswork.`,
        ],
      },
    ],
  }
}

function buildPillars(entry) {
  const label = entry.name.toLowerCase()
  const img = (key, suffix) => ({
    src: PILLAR_IMAGES[key],
    alt: `${entry.name} ${suffix}`,
  })

  return {
    badge: 'Service Pillars',
    title: `${entry.name} Delivered End-to-End`,
    subtitle: `Six integrated workstreams that make ${label} campaigns compound over time.`,
    items: [
      {
        id: 'strategy',
        label: 'Strategy',
        title: `${entry.name} Strategy & Roadmap`,
        description: `We audit your current presence, map competitors, and build a prioritized ${label} roadmap with timelines, KPIs, and resource allocation.`,
        process: 'Discovery workshop, competitive gap analysis, keyword and intent mapping.',
        outcome: 'Clear 90-day plan tied to lead and revenue goals.',
        benefits: entry.features.slice(0, 4).length ? entry.features.slice(0, 4) : ['Custom strategy', 'KPI alignment', 'Competitive insights', 'Phased roadmap'],
        image: img('technical', 'strategy dashboard'),
      },
      {
        id: 'execution',
        label: 'Execution',
        title: `${entry.name} Implementation`,
        description: `Our team executes ${label} deliverables: on-page updates, campaign builds, content production, and technical fixes with quality control.`,
        process: 'Sprint-based delivery with weekly status and approval workflows.',
        outcome: 'Shipped assets that are live, tracked, and indexed.',
        benefits: ['Dedicated strategist', 'White-hat methods', 'Cross-channel alignment', 'Fast iteration'],
        image: img('content', 'implementation workflow'),
      },
      {
        id: 'local',
        label: 'Local SEO',
        title: 'Local Visibility & Maps',
        description: `Capture "near me" demand with GBP optimization, citations, and geo pages aligned to ${label}.`,
        process: 'Profile audit, category tuning, review workflows, local landing pages.',
        outcome: 'More map impressions, calls, and direction requests.',
        benefits: ['GBP management', 'Citation consistency', 'Review velocity', 'Multi-location support'],
        image: img('local', 'local map visibility'),
      },
      {
        id: 'content',
        label: 'Content',
        title: 'Content That Converts',
        description: `Educational and commercial content supports ${label} goals across the full buyer journey.`,
        process: 'Editorial calendar, on-page optimization, internal linking hubs.',
        outcome: 'Topical authority and higher engagement depth.',
        benefits: ['SEO content', 'Landing pages', 'Case studies', 'FAQ schema'],
        image: img('content', 'content marketing'),
      },
      {
        id: 'ai',
        label: 'AI SEO',
        title: 'AI & GEO Optimization',
        description: `Structure ${label} outputs for AI Overviews, voice search, and generative answer engines.`,
        process: 'Answer blocks, entity markup, AI Overview testing.',
        outcome: 'Visibility in traditional and AI-driven discovery.',
        benefits: ['GEO formatting', 'AEO blocks', 'Snippet targeting', 'Entity signals'],
        image: img('ai', 'AI search optimization'),
      },
      {
        id: 'reporting',
        label: 'Reporting',
        title: 'Transparent Performance Reporting',
        description: `Live dashboards and weekly reviews show exactly how ${label} impacts your pipeline.`,
        process: 'GA4, GSC, CRM alignment, executive summaries.',
        outcome: 'Accountability and continuous optimization.',
        benefits: ['Weekly KPIs', 'Lead attribution', 'ROI tracking', 'Action plans'],
        image: img('reputation', 'performance reporting'),
      },
    ],
  }
}

export function buildPremiumServiceContent(entry) {
  const { slug, path, name, hubTitle, hubPath, shortDescription, features, heroImage } = entry
  const label = name.toLowerCase()
  const faqs =
    slug === 'technical-seo' ? [...PAGE_FAQS.technicalSeo] : getServiceFaqs(entry)
  const related = getRelatedServices(slug, 6)

  const serviceItems = features.length
    ? features.map((feature, i) => ({
        icon: ['search', 'map', 'sparkles', 'chart', 'cpu', 'megaphone'][i] || 'star',
        title: feature,
        description: `${feature} is a core deliverable in our ${label} program-executed with clear timelines, quality standards, and performance tracking.`,
        benefits: [
          `Aligned to ${label} goals`,
          'Measured in weekly reports',
          'Optimized for conversions',
        ],
      }))
    : [
        {
          icon: 'search',
          title: `${name} Audit`,
          description: `Comprehensive audit of your current ${label} presence, competitors, and quick-win opportunities.`,
          benefits: ['Technical review', 'Competitive gaps', 'Priority roadmap'],
        },
        {
          icon: 'code',
          title: `${name} Implementation`,
          description: `Hands-on execution of ${label} strategy across site, campaigns, and tracking.`,
          benefits: ['Expert delivery', 'Quality assurance', 'Fast deployment'],
        },
        {
          icon: 'bar-chart',
          title: `${name} Reporting`,
          description: `Transparent dashboards showing how ${label} drives leads and revenue.`,
          benefits: ['Weekly KPIs', 'Lead tracking', 'ROI insights'],
        },
      ]

  return {
    slug,
    name,
    path,
    isService: true,

    seo: {
      title: `${name} Services India | Expert ${name} Agency | SEO India Tech`,
      description: `${shortDescription} 14+ years experience. Free audit. Weekly reporting. Serving India, USA, UK, Australia & UAE.`,
      slug,
      canonical: slug === 'pay-per-click' ? '/services/ppc-advertising' : path,
      keywords: [
        `${label} services`,
        `${label} agency`,
        `${label} company india`,
        `best ${label}`,
        `${label} experts`,
        `${label} pricing`,
      ],
      internalLinks: getServiceInternalLinks(slug).map((l) => l.href),
    },

    hero: {
      badge: hubTitle,
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/seo' },
        { label: hubTitle, href: hubPath },
        { label: name },
      ],
      h1: `${name} Services That Drive Measurable Growth`,
      paragraphs: [
        shortDescription,
        `SEO India Tech delivers ${label} with dedicated strategists, white-hat execution, AI-ready content, and reporting your leadership team can act on every week.`,
      ],
      benefits: [
        '14+ years of digital marketing experience',
        `Specialists in ${label}`,
        'AI SEO and GEO built into every program',
        'Transparent weekly reporting and ROI tracking',
      ],
      primaryCta: { label: 'Get a Free Audit', href: '/contact-us' },
      secondaryCta: { label: 'View SEO Packages', href: '/seo-packages' },
      trustAwards: ['14+ Years', '500+ Clients', '4.9 Rating', '12+ Countries', 'White Hat', 'AI Ready'],
      rating: '4.9/5 from 120+ client reviews',
      backgroundImage: SERVICE_HERO_BG[slug] || '/images/herobg.jpg',
      backgroundImageMobile: '/images/hero-mobile.webp',
      heroStats: [
        { value: '186%', label: 'Avg. traffic growth' },
        { value: '94%', label: 'More leads' },
        { value: '14+', label: 'Years experience' },
        { value: '500+', label: 'Global clients' },
      ],
      image: { src: heroImage, alt: `${name} services by SEO India Tech` },
    },

    trust: {
      badge: 'Trusted Worldwide',
      title: `Why Businesses Choose Our ${name} Team`,
      subtitle: `We help brands grow across India, USA, UK, Australia, and UAE with accountable ${label}.`,
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
      title: `Why ${name} Is Essential for Growth`,
      subtitle: `Customers research online before they buy. ${name} puts your brand in front of high-intent buyers at the right moment.`,
      trends: [
        {
          title: 'Search and AI discovery are converging',
          description: `${name} must work for Google rankings and AI-generated answers. Brands without structured, authoritative content lose share to competitors cited by ChatGPT and Gemini.`,
        },
        {
          title: 'Competition is investing aggressively',
          description: `In most markets, rivals are already optimizing ${label}, running paid campaigns, and capturing reviews. Waiting means paying more for every lead later.`,
        },
        {
          title: 'Attribution demands better foundations',
          description: `Without proper tracking, analytics, and landing pages, you cannot scale ${label} profitably. We fix measurement gaps first.`,
        },
      ],
      highlights: [
        { value: '76%', label: 'Research online first' },
        { value: '3.2x', label: 'Higher trust from organic' },
        { value: '58%', label: 'Use near me searches' },
        { value: '41%', label: 'Click top 3 results' },
      ],
      geoAnswer: {
        question: `What is ${name} and who needs it?`,
        answer: `${name} from SEO India Tech helps businesses improve visibility, trust, and conversions through strategic digital marketing. Any brand that relies on online discovery-from local services to global e-commerce-benefits from professional ${label}.`,
        takeaways: [
          `Improves visibility when buyers search for ${label}`,
          'Builds compounding assets versus paid-only strategies',
          'Integrates with SEO, content, paid media, and analytics',
        ],
      },
      image: { src: heroImage, alt: `${name} growth and visibility illustration` },
    },

    painPoints: {
      badge: 'Common Challenges',
      title: `Problems ${name} Solves`,
      subtitle: `These issues drain revenue every month. Our ${label} program addresses each with a clear plan.`,
      image: { src: heroImage, alt: `${name} challenges illustration` },
      items: [
        {
          icon: 'search',
          title: 'Low visibility for priority searches',
          description: `Your brand is hard to find for the ${label} queries that drive revenue. Competitors capture clicks you should own.`,
          impact: 'Lost leads and higher paid acquisition costs',
        },
        {
          icon: 'chart',
          title: 'No clear ROI from marketing',
          description: 'Reports show traffic but not which channels produce qualified leads or sales.',
          impact: 'Budget wasted on low-intent activity',
        },
        {
          icon: 'cpu',
          title: 'Missing from AI answers',
          description: `When prospects ask AI for ${label} recommendations, unstructured sites are rarely cited.`,
          impact: 'Lost discovery in generative search',
        },
        {
          icon: 'users',
          title: 'Inconsistent execution',
          description: 'Campaigns start strong but lack ongoing optimization, content, and testing.',
          impact: 'Plateaued results and channel silos',
        },
        {
          icon: 'map',
          title: 'Weak local presence',
          description: 'Google Business Profile, reviews, and local pages underperform versus competitors.',
          impact: 'Missed map pack and near-me leads',
        },
        {
          icon: 'shield',
          title: 'Technical and UX friction',
          description: 'Slow pages, poor mobile UX, and broken tracking block conversions from all channels.',
          impact: 'Higher bounce rates and lost revenue',
        },
      ],
    },

    whyChoose: {
      badge: 'Why Choose Us',
      title: `Why SEO India Tech for ${name}`,
      subtitle: `We combine ${label} expertise with AI-ready execution, transparent reporting, and strategists who own your results.`,
      cards: [
        {
          icon: 'shield',
          title: 'White-Hat, Future-Proof Methods',
          description: `Our ${label} programs follow search engine guidelines and build durable visibility-not shortcuts that risk penalties.`,
          points: ['Ethical tactics', 'Algorithm-resilient', 'Brand-safe execution'],
        },
        ...serviceItems.slice(0, 4).map((s, i) => ({
          icon: ['search', 'map', 'sparkles', 'chart'][i] || 'star',
          title: s.title,
          description: s.description,
          points: s.benefits,
        })),
        {
          icon: 'users',
          title: 'Dedicated Strategist',
          description: `You work with a named expert who understands ${label}, your market, and your KPIs.`,
          points: ['Weekly calls', 'Direct access', 'Accountability'],
        },
        {
          icon: 'cpu',
          title: 'AI & GEO Ready',
          description: `Every ${label} deliverable is structured for traditional search and AI answer engines.`,
          points: ['GEO content blocks', 'FAQ schema', 'Entity optimization'],
        },
      ],
    },

    services: {
      badge: 'What You Get',
      title: `${name} Deliverables`,
      subtitle: `Every ${label} deliverable connects to measurable business outcomes.`,
      items: serviceItems,
      cta: { label: 'Get Your Custom Roadmap', href: '/contact-us' },
    },

    editorial: buildEditorial(entry),
    pillars: buildPillars(entry),

    audiences: {
      badge: 'Who We Help',
      title: `${name} for Every Business Stage`,
      subtitle: `From startups to enterprises, we scale ${label} to your goals and budget.`,
      items: [
        { icon: 'rocket', title: 'Startups', description: `Launch ${label} with lean, high-impact priorities.`, points: ['Fast setup', 'Core tracking', 'Growth roadmap'] },
        { icon: 'building', title: 'SMBs', description: `Affordable ${label} that competes with larger rivals locally.`, points: ['Local dominance', 'Review programs', 'Weekly reporting'] },
        { icon: 'layers', title: 'Multi-Location', description: `Branch-level ${label} with consolidated dashboards.`, points: ['Location pages', 'NAP audits', 'Executive reporting'] },
        { icon: 'globe', title: 'International', description: `Cross-border ${label} for India, USA, UK, UAE, and more.`, points: ['Market-specific strategy', 'Multi-country tracking', 'Compliance-aware'] },
        { icon: 'hospital', title: 'Established Brands', description: `Refresh and scale ${label} without losing momentum.`, points: ['Technical audits', 'Content refresh', 'Migration support'] },
        { icon: 'sparkle', title: 'Agencies', description: `White-label ${label} for your client portfolio.`, points: ['Reseller models', 'Branded reporting', 'Strategist support'] },
      ],
    },

    process: {
      badge: 'Our Process',
      title: `How We Deliver ${name}`,
      subtitle: 'A proven 9-phase framework from audit to sustained growth.',
      steps: [
        { icon: 'search', title: 'Discovery', description: `Goals, stakeholders, and competitive landscape for ${label}.` },
        { icon: 'book', title: 'Research', description: 'Keyword, audience, and intent mapping.' },
        { icon: 'clipboard', title: 'Audit', description: 'Technical, content, and conversion path review.' },
        { icon: 'map', title: 'Strategy', description: 'Prioritized roadmap with KPIs and timelines.' },
        { icon: 'code', title: 'Implementation', description: `${name} execution across channels and assets.` },
        { icon: 'flask', title: 'Testing', description: 'QA, tracking validation, and mobile UX checks.' },
        { icon: 'bar-chart', title: 'Reporting', description: 'Weekly dashboards and executive summaries.' },
        { icon: 'refresh', title: 'Optimization', description: 'Iterate based on data and seasonality.' },
        { icon: 'trending', title: 'Scale', description: `Expand winning ${label} tactics and channels.` },
      ],
    },

    comparison: {
      badge: 'Compare Options',
      title: 'Why Businesses Choose SEO India Tech',
      subtitle: `See how we compare for ${label}.`,
      columns: ['Feature', 'Freelancer', 'Traditional Agency', 'SEO India Tech'],
      rows: [
        { feature: `${name} expertise`, freelancer: 'Variable', agency: 'Generalist', us: 'Core specialty' },
        { feature: 'AI & GEO optimization', freelancer: 'Rare', agency: 'Emerging', us: 'Built-in' },
        { feature: 'Dedicated strategist', freelancer: 'Solo bandwidth', agency: 'Rotating staff', us: 'Named expert' },
        { feature: 'Weekly reporting', freelancer: 'Monthly', agency: 'Monthly PDFs', us: 'Live dashboards' },
        { feature: 'Transparent pricing', freelancer: 'Variable', agency: 'Opaque', us: 'Clear packages' },
        { feature: 'Cross-channel alignment', freelancer: 'Limited', agency: 'Siloed', us: 'Integrated' },
        { feature: 'International delivery', freelancer: 'Difficult', agency: 'Enterprise only', us: '12+ countries' },
        { feature: 'White-hat methods', freelancer: 'Unknown', agency: 'Mixed', us: 'Guaranteed' },
      ],
    },

    results: {
      badge: 'Proven Results',
      title: `${name} Outcomes We Deliver`,
      subtitle: `Composite results from ${label} programs across industries.`,
      metrics: [
        { label: 'Organic Traffic', value: '+186%', change: 'avg. 8-month growth' },
        { label: 'Priority Keywords', value: '+142', change: 'page-1 rankings' },
        { label: 'Monthly Leads', value: '+94%', change: 'from digital channels' },
        { label: 'Conversion Rate', value: '+47%', change: 'landing page avg.' },
      ],
    },

    caseStudy: {
      title: `Case Study: ${name} Growth`,
      problem: `A client struggled with low visibility for core ${label} terms, weak tracking, and disconnected campaigns that produced traffic but few qualified leads.`,
      solution: `SEO India Tech rebuilt their ${label} foundation: strategy, technical fixes, content, and integrated reporting tied to CRM lead stages.`,
      execution: `Month 1-2: audit and quick wins. Month 3-4: content and campaign scale. Month 5-6: optimization and expansion into AI-ready formats.`,
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
      badge: 'Related Services',
      title: 'Explore Related Services',
      items: related.map((r) => ({
        title: r.name,
        slug: r.slug,
        description: r.shortDescription,
        href: r.path,
      })),
    },

    toolsTrust: {
      badge: 'Tools & Trust',
      title: 'Enterprise Tools. Proven Credentials.',
      subtitle: 'Industry-standard platforms and certifications behind every engagement.',
      tools: [
        { name: 'Google Search Console', description: 'Indexation and query performance monitoring.' },
        { name: 'Google Analytics 4', description: 'Conversion tracking and funnel analysis.' },
        { name: 'SEMrush / Ahrefs', description: 'Keyword research and competitor intelligence.' },
        { name: 'Looker Studio', description: 'Live client dashboards and weekly KPIs.' },
        { name: 'Google Ads & Meta', description: 'Paid campaign management and attribution.' },
      ],
      certifications: ['Google Analytics Certified', 'Google Ads Certified', 'HubSpot Inbound', 'SEMrush SEO Toolkit'],
      awards: ['Top SEO Agency India (Clutch)', '4.9/5 Client Rating', 'GoodFirms Top Agency', '14+ Years Experience'],
    },

    semanticTopics: {
      badge: 'Topics We Target',
      title: `${name} Keywords & Topics`,
      subtitle: `Semantic coverage for ${label} across search and AI discovery.`,
      topics: [
        `${label} services`,
        `${label} agency`,
        `${label} company india`,
        `best ${label}`,
        `${label} pricing`,
        `${label} packages`,
        `${label} consultant`,
        `${label} experts`,
        `${label} strategy`,
        `${label} for small business`,
        `${label} ROI`,
        `${label} audit`,
        ...features.map((f) => f.toLowerCase()),
      ].slice(0, 18),
      definition: {
        term: `What does ${name} include?`,
        text: `${name} from SEO India Tech includes strategy, audit, implementation, optimization, and reporting-tailored to your market, competition, and growth goals with transparent weekly KPIs.`,
      },
    },

    keyTakeaways: {
      badge: 'Key Takeaways',
      title: `${name}: What to Remember`,
      items: [
        `${name} should tie directly to leads and revenue, not vanity metrics.`,
        'AI search and GEO are now part of every sustainable visibility strategy.',
        'Technical health, tracking, and UX underpin all channel performance.',
        'Weekly reporting and a dedicated strategist keep execution accountable.',
        'SEO India Tech integrates SEO, content, paid, and local for compounding growth.',
      ],
    },

    internalLinks: {
      badge: 'Explore More',
      title: 'Continue Your Research',
      subtitle: `Related services, packages, and programs that complement ${label}.`,
      links: getServiceInternalLinks(slug),
    },

    testimonials: {
      badge: 'Client Voices',
      title: 'What Our Clients Say',
      subtitle: 'Verified stories from businesses we have helped grow.',
      items: [
        {
          name: 'Rahul Mehta',
          role: 'Marketing Director',
          company: 'E-Commerce Brand, Mumbai',
          text: `SEO India Tech transformed our ${label} performance. Traffic and conversions improved within months, and reporting finally made sense to leadership.`,
        },
        {
          name: 'Sarah Chen',
          role: 'Founder',
          company: 'SaaS Startup, Singapore',
          text: 'Dedicated strategists, fast execution, and AI-ready content. Exactly what we needed to scale without hiring a full in-house team.',
        },
        {
          name: 'David Okonkwo',
          role: 'CEO',
          company: 'Home Services, UK',
          text: 'Local visibility, GBP optimization, and clear weekly KPIs. Our cost per lead dropped while lead volume grew.',
        },
        {
          name: 'Priya Nair',
          role: 'Operations Head',
          company: 'Healthcare Clinic, Bangalore',
          text: 'Professional, compliant, and results-focused. They understand regulated industries and still deliver aggressive growth.',
        },
        {
          name: 'James Wilson',
          role: 'Owner',
          company: 'Professional Services, USA',
          text: 'Transparent pricing, no jargon, and real accountability. Best agency experience we have had in ten years.',
        },
        {
          name: 'Emily Watson',
          role: 'CMO',
          company: 'Retail Group, Australia',
          text: 'Integrated SEO, content, and paid campaigns with unified reporting. Finally one partner instead of five vendors.',
        },
      ],
    },

    faq: {
      badge: 'FAQ',
      title: `Frequently Asked Questions About ${name}`,
      items: faqs,
    },

    contact: {
      title: `Ready to Start ${name}?`,
      subtitle: `Book a free audit. We review your current ${label} presence and deliver a custom roadmap with timelines and KPIs.`,
      phone: { label: '+91-8076676731', href: 'tel:+91-8076676731' },
      email: 'sales@seoindiatech.com',
      address: 'E-160, Sector 63, Noida, Uttar Pradesh 201301, India',
      formTitle: `Book Your Free ${name} Audit`,
      formSubtitle: 'No obligation. Clear next steps for your next 90 days.',
      benefits: ['Free comprehensive audit', 'No long-term contract required', 'Dedicated strategist'],
      cta: { label: 'Book Free Consultation', href: '/contact-us' },
    },

    finalCta: {
      title: `Ready to Grow with ${name}?`,
      subtitle: `Get a free audit covering gaps, opportunities, and a custom ${label} roadmap.`,
      benefits: ['Free audit', 'Transparent pricing', 'Dedicated strategist'],
      primaryCta: { label: 'Book Free Consultation', href: '/contact-us' },
      secondaryCta: { label: 'Call +91-8076676731', href: 'tel:+91-8076676731' },
    },

    answerFirst: getServiceAnswerFirst(slug, name),
  }
}
