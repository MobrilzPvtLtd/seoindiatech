/**
 * Generates premium industry page content from catalog entry + unique profile.
 * Used for all 41 industry slugs; plastic-surgery-seo can override via index.js.
 */
import { buildCatalogEntries } from '../catalog'
import {
  buildCaseStudyFromProfile,
  buildEditorialBlocks,
  buildKeyTakeaways,
  buildPainPointsFromProfile,
  buildSemanticTopics,
  buildWhySeoTrends,
  extractBenefits,
} from './contentEnhancer'
import { getIndustryInternalLinks } from '../../internalLinks'
import { getTestimonialsForIndustry } from './industryTestimonials'

const HEALTHCARE_SLUGS = new Set([
  'plastic-surgery-seo',
  'fertility-clinic-seo',
  'optometrist-seo',
  'orthodontist-seo',
  'doctor-physician-seo',
  'physiotherapy-seo',
  'dentist-seo',
  'chiropractor-seo',
])

/** Slugs where "patients" is the correct audience term (not category-wide popular-markets). */
const PATIENT_CLIENT_SLUGS = new Set([
  'plastic-surgery-seo',
  'fertility-clinic-seo',
  'optometrist-seo',
  'orthodontist-seo',
  'doctor-physician-seo',
  'physiotherapy-seo',
  'dentist-seo',
  'chiropractor-seo',
])

const HOME_TRADE_SLUGS = new Set(['hvac-seo', 'plumber-seo'])

export function getClientTerm(entry) {
  if (PATIENT_CLIENT_SLUGS.has(entry.slug)) return 'patients'
  if (entry.categoryId === 'automobile-home' || HOME_TRADE_SLUGS.has(entry.slug)) return 'customers'
  return 'clients'
}

function normalizeFaqQuestion(question) {
  return (question || '').trim().toLowerCase().replace(/\s+/g, ' ')
}

function buildDefaultMetaDescription(entry, labelLower, title) {
  const usesProcedurePages =
    PATIENT_CLIENT_SLUGS.has(entry.slug) && entry.slug !== 'chiropractor-seo'
  const contentFocus = usesProcedurePages
    ? 'Procedure pages, local SEO'
    : 'Service pages, local SEO'

  return `Rank higher for ${labelLower} searches with expert ${title.toLowerCase()}. ${contentFocus}, GBP optimization, AI Overview visibility & weekly reporting. Free audit.`
}

const PILLAR_IMAGES = {
  local: { src: '/images/industries/benefit-gmb.svg', altSuffix: 'local SEO and Google Maps visibility' },
  technical: { src: '/images/industries/benefit-seo.svg', altSuffix: 'technical SEO audit dashboard' },
  content: { src: '/images/industries/benefit-smo.svg', altSuffix: 'content marketing strategy' },
  ai: { src: '/images/industries/benefit-ai-overview.svg', altSuffix: 'AI search optimization' },
  gbp: { src: '/images/industries/benefit-gmb.svg', altSuffix: 'Google Business Profile optimization' },
  reputation: { src: '/images/industries/benefit-ppc.svg', altSuffix: 'online reputation management' },
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function expandFaqs(profileFaqs, label, title) {
  const labelLower = label.toLowerCase()
  const seen = new Set()
  const merged = []

  const pushUnique = (faq) => {
    if (!faq?.question) return
    const key = normalizeFaqQuestion(faq.question)
    if (seen.has(key)) return
    seen.add(key)
    merged.push(faq)
  }

  for (const faq of profileFaqs.slice(0, 10)) pushUnique(faq)

  const extra = [
    {
      question: `How much does ${title} cost?`,
      answer: `Pricing depends on competition, service area, number of locations, and current site health. SEO India Tech offers flexible packages starting with a free audit and custom proposal for ${labelLower} businesses.`,
    },
    {
      question: `Do you work with ${labelLower} businesses outside India?`,
      answer: `Yes. We serve ${labelLower} brands in USA, UK, Australia, UAE, Canada, and Europe with market-specific keyword and compliance considerations.`,
    },
    {
      question: `What is the difference between SEO and GEO for ${labelLower} brands?`,
      answer: `SEO targets traditional search rankings. GEO (Generative Engine Optimization) structures content so AI tools like ChatGPT and Gemini can cite your ${labelLower} business when prospects ask for recommendations.`,
    },
    {
      question: `Will you integrate SEO with our CRM or booking tools?`,
      answer: `We align form fields, UTM tracking, and call analytics with common CRMs and booking systems so you attribute ${labelLower} leads to specific landing pages and keywords.`,
    },
    {
      question: `How do you measure ROI from ${title}?`,
      answer: `We track calls, forms, chats, and GBP actions attributed to organic channels. Monthly reports compare cost-per-lead trends against paid channels for your ${labelLower} business.`,
    },
    {
      question: `Do you optimize for Google AI Overviews?`,
      answer: `Yes. We structure concise answer blocks, FAQ schema, comparison tables, and entity signals so your ${labelLower} brand can appear in AI Overviews and chat-based search tools.`,
    },
    {
      question: `How important are Google reviews for ${labelLower} businesses?`,
      answer: `Reviews heavily influence map pack placement and buyer trust. We implement ethical review workflows and response templates aligned with your industry standards.`,
    },
    {
      question: `Can SEO work alongside our existing paid ads?`,
      answer: `No conflict. SEO captures research-phase demand while ads cover immediate intent. We align landing page messaging across both channels to improve Quality Score and organic relevance.`,
    },
    {
      question: `What makes SEO India Tech different for ${labelLower} SEO?`,
      answer: `14+ years of experience, dedicated strategists, white-hat methods, AI search optimization, transparent weekly reporting, and industry-specific playbooks, not generic SEO packages.`,
    },
    {
      question: `How do we start ${title} with SEO India Tech?`,
      answer: `Book a free audit. We review your site, competitors, GBP health, and keyword opportunities, then deliver a prioritized roadmap with timelines and KPIs.`,
    },
    {
      question: `What should ${labelLower} businesses prioritize first in SEO?`,
      answer: `Start with GBP accuracy, core service pages, technical crawl health, and tracking. We sequence ${labelLower} SEO so early wins build authority for competitive terms.`,
    },
  ]

  for (const faq of extra) {
    if (merged.length >= 20) break
    pushUnique(faq)
  }
  return merged.slice(0, 20)
}

function getRelatedIndustries(entry, allEntries) {
  const sameCategory = allEntries.filter(
    (e) => e.categoryId === entry.categoryId && e.slug !== entry.slug
  )
  const picks = sameCategory.slice(0, 6)
  return picks.map((e) => ({
    title: e.title,
    slug: e.slug,
    description: `Grow ${e.label.toLowerCase()} leads with ${e.title.toLowerCase()}, local map visibility, and AI search optimization.`,
  }))
}

function buildWhyChooseCards(entry, profile, label) {
  const labelLower = label.toLowerCase()
  const fromServices = profile.services.slice(0, 4).map((s, i) => ({
    icon: ['search', 'map', 'sparkles', 'chart'][i] || 'star',
    title: s.title,
    description: s.body,
    points: extractBenefits(s.body, labelLower, 3),
  }))

  return [
    {
      icon: 'shield',
      title: `White-Hat ${entry.title} Strategy`,
      description: `We build durable organic growth for ${labelLower} brands with ethical SEO, transparent reporting, and strategies aligned to Google quality guidelines.`,
      points: ['No risky shortcuts', 'Algorithm-resilient foundations', 'Clear KPI ownership'],
    },
    ...fromServices,
    {
      icon: 'users',
      title: 'Dedicated Account Team',
      description: `Your ${labelLower} campaign gets a named strategist who understands your market, buyer psychology, and seasonal demand cycles.`,
      points: ['Weekly status calls', 'Industry vertical experience', 'Direct strategist access'],
    },
    {
      icon: 'cpu',
      title: 'AI Search & GEO Ready',
      description: `Content is structured for Google AI Overviews, ChatGPT, Gemini, and voice search so ${labelLower} prospects find you in traditional and AI discovery.`,
      points: ['Answer engine blocks', 'FAQ schema', 'Entity optimization'],
    },
  ]
}

function buildPillars(entry, label, profile) {
  const labelLower = label.toLowerCase()
  const img = (key) => ({
    src: PILLAR_IMAGES[key].src,
    alt: `${label} ${PILLAR_IMAGES[key].altSuffix}`,
  })

  const localDesc = profile.local
    ? `Dominate "near me" searches and map pack results. ${profile.local}`
    : `Dominate "near me" searches and map pack results in the neighborhoods you serve. We align NAP consistency, service area pages, and localized content with how ${labelLower} buyers search.`

  return {
    badge: 'Core SEO Pillars',
    title: `Complete ${entry.title} Strategy`,
    subtitle: `Six integrated pillars that turn search visibility into qualified ${getClientTerm(entry)} for your ${labelLower} business.`,
    items: [
      {
        id: 'local',
        label: 'Local SEO',
        title: `Local SEO for ${label} Brands`,
        description: localDesc,
        process: `Audit citations, optimize GBP categories, build geo pages, and implement review workflows for ${labelLower} services.`,
        outcome: `More calls, direction requests, and booked ${entry.serviceExamples} from local search.`,
        benefits: ['City and suburb landing pages', 'Map pack optimization', 'Review velocity programs', 'Multi-location tracking'],
        image: img('local'),
      },
      {
        id: 'technical',
        label: 'Technical SEO',
        title: `Technical SEO That Protects Rankings`,
        description: `Slow pages, crawl errors, and poor mobile UX silently drain ${labelLower} rankings. We fix Core Web Vitals, schema, redirects, and indexation issues.`,
        process: `Crawl audit, CWV fixes, schema implementation, and conversion tracking validation.`,
        outcome: `Faster site, cleaner indexation, and reliable lead attribution.`,
        benefits: ['Core Web Vitals optimization', 'Service & FAQ schema', 'Mobile-first fixes', 'Analytics QA'],
        image: img('technical'),
      },
      {
        id: 'content',
        label: 'Content Marketing',
        title: `Content That Educates and Converts`,
        description: `Prospects research ${labelLower} services for weeks. We publish helpful guides, service pages, and comparison content that ranks and builds trust.`,
        process: `Keyword mapping, content calendar, on-page optimization, and internal linking hubs.`,
        outcome: `Topical authority, longer session depth, and more qualified form fills.`,
        benefits: ['Service page architecture', 'Educational blog content', 'Internal linking strategy', 'E-E-A-T signals'],
        image: img('content'),
      },
      {
        id: 'ai',
        label: 'AI SEO',
        title: `AI Search & GEO Optimization`,
        description: `Buyers ask AI assistants for ${labelLower} recommendations. We structure answer blocks, comparisons, and entity signals for generative search visibility.`,
        process: `AEO content blocks, FAQ schema, entity markup, and AI Overview testing.`,
        outcome: `Visibility in AI Overviews, voice results, and chat-based discovery.`,
        benefits: ['GEO content formatting', 'Featured snippet targeting', 'Voice query optimization', 'AI citation readiness'],
        image: img('ai'),
      },
      {
        id: 'gbp',
        label: 'Google Business Profile',
        title: `Google Business Profile Management`,
        description: `Map pack visibility often decides which ${labelLower} provider gets the call. We optimize categories, services, photos, posts, and Q&A.`,
        process: `Profile completeness audit, category alignment, post calendar, and review monitoring.`,
        outcome: `Higher map impressions, more profile actions, and stronger local trust.`,
        benefits: ['Category & service menu setup', 'Photo and post strategy', 'Q&A monitoring', 'Call tracking'],
        image: img('gbp'),
      },
      {
        id: 'reputation',
        label: 'Reputation',
        title: `Online Reputation Management`,
        description: `Star ratings and review sentiment influence both human buyers and local rankings. We help ${labelLower} brands earn and respond to reviews ethically.`,
        process: `Review generation workflows, response templates, and ORM for unfair or outdated feedback.`,
        outcome: `Stronger trust signals, improved conversion rates, and protected brand reputation.`,
        benefits: ['Ethical review requests', 'Response frameworks', 'Sentiment monitoring', 'ORM support'],
        image: img('reputation'),
      },
    ],
  }
}

export function buildPremiumContent(entry, profile) {
  const { slug, title, label, categoryId, categoryTitle, heroImage, audience, serviceExamples } = entry
  const labelLower = label.toLowerCase()
  const clients = getClientTerm(entry)
  const allEntries = buildCatalogEntries()
  const testimonials = getTestimonialsForIndustry(categoryId, slug)

  const heroParagraphs = profile.hero?.length >= 2
    ? profile.hero
    : [
        `${title} should connect search visibility to real business outcomes for ${labelLower} brands: more calls, bookings, and qualified inquiries.`,
        `SEO India Tech builds ${title.toLowerCase()} around local dominance, service-specific pages, trust signals, and reporting your team can act on.`,
      ]

  return {
    slug,
    name: label,
    isHealthcare: HEALTHCARE_SLUGS.has(slug),

    seo: {
      title: profile.seoTitle || `${title} Services | Local, AI & GEO SEO Experts | SEO India Tech`,
      description:
        profile.metaDescription || buildDefaultMetaDescription(entry, labelLower, title),
      slug,
      keywords: [
        title.toLowerCase(),
        `${labelLower} SEO`,
        `${labelLower} marketing`,
        `local SEO for ${labelLower}`,
        `${labelLower} digital marketing`,
        `${labelLower} near me SEO`,
      ],
      internalLinks: [
        '/services/local-seo-service',
        '/services/technical-seo',
        '/services/seo',
        '/services/ai-seo',
        '/services/gbp-optimization',
        '/services/ppc-advertising',
        '/seo-packages',
        '/contact-us',
      ],
    },

    hero: {
      badge: `${categoryTitle} SEO Experts`,
      breadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: title },
      ],
      h1: `${title} Services Built for Qualified ${capitalize(clients)}`,
      paragraphs: heroParagraphs,
      benefits: [
        '14+ years of digital marketing experience',
        `Specialists in ${labelLower} search optimization`,
        `Campaigns tailored to your ${labelLower} growth goals`,
        'ROI-based pricing with transparent weekly reporting',
      ],
      primaryCta: { label: 'Get a Free Quote', href: '/contact-us' },
      secondaryCta: { label: 'View SEO Packages', href: '/seo-packages' },
      trustAwards: ['14+ Years', '500+ Clients', '4.9 Rating', '12+ Countries', 'White Hat', 'GBP Experts'],
      trustBadges: ['14+ Years Experience', '500+ Global Clients', '12+ Countries'],
      rating: '4.9/5 from 120+ client reviews',
      backgroundImage: entry.slug === 'plastic-surgery-seo'
        ? '/images/industries/premium/plastic-surgery-hero.webp'
        : null,
      backgroundImageMobile: entry.slug === 'plastic-surgery-seo'
        ? '/images/industries/premium/plastic-surgery-hero-mobile.webp'
        : null,
      heroStats: [
        { value: '186%', label: 'Traffic growth' },
        { value: '94%', label: 'More leads' },
        { value: '14+', label: 'Years experience' },
        { value: '500+', label: 'Global clients' },
      ],
      image: {
        src: heroImage,
        alt: `${title} services illustration for ${labelLower} businesses`,
      },
    },

    trust: {
      badge: 'Trusted Worldwide',
      title: `A Partner ${label} Businesses Rely On`,
      subtitle: `We help ${labelLower} brands grow organic leads across India, USA, UK, Australia, and UAE.`,
      stats: [
        { value: '14', suffix: '+', label: 'Years in digital growth' },
        { value: '500', suffix: '+', label: 'Clients served globally' },
        { value: '12', suffix: '+', label: 'Countries' },
        { value: '41', suffix: '', label: 'Industry programs' },
      ],
      platforms: ['Google Reviews', 'Clutch', 'GoodFirms'],
    },

    whySeoMatters: {
      badge: 'Why SEO Matters',
      title: `Why ${label} Businesses Invest in SEO Now`,
      subtitle: profile.why?.title || `Search behavior, competition, and AI discovery are reshaping how ${clients} find ${labelLower} providers. Brands that wait lose market share to competitors already ranking.`,
      trends: buildWhySeoTrends(entry, profile, label, clients),
      highlights: [
        { value: '76%', label: 'Research online first' },
        { value: '3.2x', label: 'Higher trust from SEO leads' },
        { value: '58%', label: 'Use "near me" searches' },
        { value: '41%', label: 'Click top 3 results' },
      ],
      geoAnswer: {
        question: `What is ${title} and why does it matter?`,
        answer: `${title} is the practice of optimizing your website, Google Business Profile, and content so ${clients} find your ${labelLower} business when searching for services you offer. It drives qualified leads without paying for every click.`,
        takeaways: [
          `Captures ${clients} actively searching for ${labelLower} services`,
          'Builds long-term visibility versus paid ads alone',
          'Supports trust through reviews, content, and local presence',
        ],
      },
      image: {
        src: '/images/industries/benefit-seo.svg',
        alt: `${label} SEO growth chart showing increasing online visibility`,
      },
    },

    painPoints: {
      badge: 'Common Challenges',
      title: `Problems ${label} Businesses Face Online`,
      subtitle: `These pain points cost ${labelLower} brands revenue every month. ${title} addresses each with a measurable plan.`,
      image: {
        src: heroImage,
        alt: `${label} business facing online visibility and lead generation challenges`,
      },
      items: buildPainPointsFromProfile(entry, profile, label),
    },

    editorial: {
      badge: 'Expert Guide',
      title: profile.why?.title || `The Complete Guide to ${title}`,
      subtitle: `In-depth ${labelLower} SEO strategy from practitioners who understand your market, compliance requirements, and how ${clients} choose providers.`,
      blocks: buildEditorialBlocks(entry, profile, label),
    },

    semanticTopics: {
      badge: 'Topics We Target',
      title: `Semantic Keywords for ${title}`,
      subtitle: `We map content to the full search landscape for ${labelLower} businesses, from high-intent local queries to AI-driven discovery.`,
      topics: buildSemanticTopics(entry, profile, label),
      definition: {
        term: `What is ${title}?`,
        text: `${title} is the practice of optimizing your website, Google Business Profile, content, and local signals so ${clients} find your ${labelLower} business when searching for services you offer. It includes technical SEO, local map visibility, reputation management, and AI search optimization (GEO) to drive qualified leads.`,
      },
    },

    keyTakeaways: {
      badge: 'Key Takeaways',
      title: `What ${label} Businesses Should Know About SEO`,
      items: buildKeyTakeaways(entry, label),
    },

    internalLinks: {
      badge: 'Explore Services',
      title: 'Related SEO India Tech Services',
      subtitle: `Strengthen your ${labelLower} growth with our specialized digital marketing programs.`,
      links: getIndustryInternalLinks(entry),
    },

    whyChoose: {
      badge: 'Why Choose Us',
      title: `Why ${label} Brands Choose SEO India Tech`,
      subtitle: `${title} demands industry knowledge, ethical execution, and reporting tied to real business outcomes, not generic agency packages.`,
      cards: buildWhyChooseCards(entry, profile, label),
    },

    services: {
      badge: 'What You Get',
      title: `Full-Stack ${entry.title} Services`,
      subtitle: `Every deliverable connects to lead growth: calls, bookings, and qualified form fills across organic, local, paid, and AI search.`,
      items: profile.services.slice(0, 6).map((s, i) => ({
        icon: ['file', 'user', 'map-pin', 'cpu', 'megaphone', 'chart'][i] || 'star',
        title: s.title,
        description: s.body,
        benefits: extractBenefits(s.body, labelLower, 3),
      })),
      cta: { label: 'Get Your Custom Roadmap', href: '/contact-us' },
    },

    pillars: buildPillars(entry, label, profile),

    audiences: {
      badge: 'Who We Help',
      title: `${title} for Every Business Type`,
      subtitle: `Whether you are a solo operator or multi-location ${labelLower} brand, we tailor strategy to your growth goals.`,
      items: [
        {
          icon: 'building',
          title: `Solo ${label} Operators`,
          description: `Build personal brand visibility with hyperlocal SEO and service pages that compete in your market.`,
          points: ['Personal brand pages', 'Neighborhood targeting', 'Review programs'],
        },
        {
          icon: 'layers',
          title: 'Multi-Location Brands',
          description: `Branch-level tracking, city pages, and consolidated reporting for ${labelLower} businesses expanding across markets.`,
          points: ['Location page templates', 'NAP consistency', 'Executive dashboards'],
        },
        {
          icon: 'rocket',
          title: 'New Business Launches',
          description: `Establish search presence before your reputation catches up with established ${labelLower} competitors.`,
          points: ['Launch content calendar', 'GBP from day one', 'Competitive gap analysis'],
        },
        {
          icon: 'globe',
          title: 'International Markets',
          description: `Attract ${clients} researching ${labelLower} services across India, USA, UK, Australia, and UAE.`,
          points: ['Market-specific pages', 'Multi-country tracking', 'Compliance-aware copy'],
        },
        {
          icon: 'hospital',
          title: 'Established Brands',
          description: `Refresh aging sites, fix technical debt, and scale content without losing existing rankings.`,
          points: ['Technical audits', 'Content refresh', 'Migration support'],
        },
        {
          icon: 'sparkle',
          title: 'Growth-Focused Teams',
          description: `Align SEO with paid ads, social, and CRM for a unified ${labelLower} acquisition strategy.`,
          points: ['Cross-channel alignment', 'CRM integration', 'Full-funnel reporting'],
        },
      ],
    },

    process: {
      badge: 'Our Process',
      title: `How We Grow Your ${label} Business Online`,
      subtitle: 'A proven 9-phase framework from audit to sustained lead growth.',
      steps: [
        { icon: 'search', title: 'Discovery', description: `Stakeholder interviews, goal mapping, and competitive review for your ${labelLower} market.` },
        { icon: 'book', title: 'Research', description: `Keyword analysis, search intent mapping, and ${clients} journey documentation.` },
        { icon: 'clipboard', title: 'Audit', description: 'Technical SEO, content gaps, GBP health, and conversion path review.' },
        { icon: 'map', title: 'Strategy', description: 'Prioritized roadmap with timelines, KPIs, and resource allocation.' },
        { icon: 'code', title: 'Implementation', description: 'Page builds, schema markup, GBP optimization, and tracking setup.' },
        { icon: 'flask', title: 'Testing', description: 'Core Web Vitals validation, form tracking QA, and mobile UX checks.' },
        { icon: 'bar-chart', title: 'Reporting', description: 'Weekly dashboards covering rankings, traffic, leads, and GBP insights.' },
        { icon: 'refresh', title: 'Optimization', description: 'Monthly content updates, link earning, and seasonal adjustments.' },
        { icon: 'trending', title: 'Growth', description: `Scale winning services, expand locations, and integrate paid channels for ${labelLower} brands.` },
      ],
    },

    comparison: {
      badge: 'Compare Options',
      title: 'Why Businesses Choose SEO India Tech',
      subtitle: `See how we compare to freelancers and traditional agencies for ${title.toLowerCase()}.`,
      columns: ['Feature', 'Freelancer', 'Traditional Agency', 'SEO India Tech'],
      rows: [
        { feature: `${label} industry expertise`, freelancer: 'Rare', agency: 'Sometimes', us: 'Core specialty' },
        { feature: 'Service-level SEO', freelancer: 'Limited', agency: 'Generic packages', us: 'Custom per service' },
        { feature: 'AI Overview optimization', freelancer: 'No', agency: 'Emerging', us: 'Built into every program' },
        { feature: 'GBP & review strategy', freelancer: 'Basic setup', agency: 'Add-on cost', us: 'Included' },
        { feature: 'Dedicated account manager', freelancer: 'Solo bandwidth', agency: 'Rotating juniors', us: 'Named strategist' },
        { feature: 'Weekly reporting', freelancer: 'Monthly at best', agency: 'Monthly PDFs', us: 'Live dashboards' },
        { feature: 'Multi-location support', freelancer: 'Difficult', agency: 'Enterprise pricing', us: 'Scalable framework' },
        { feature: 'Transparent pricing', freelancer: 'Variable', agency: 'Opaque retainers', us: 'Clear packages' },
      ],
    },

    results: {
      badge: 'Proven Results',
      title: `Metrics That Matter for ${label} Brands`,
      subtitle: `Composite outcomes from ${labelLower} SEO programs we have delivered.`,
      metrics: [
        { label: 'Organic Traffic', value: '+186%', change: 'avg. 8-month growth' },
        { label: 'Priority Keywords', value: '+142', change: 'page-1 rankings' },
        { label: 'Monthly Leads', value: '+94%', change: 'from organic channels' },
        { label: 'GBP Actions', value: '+210%', change: 'calls and directions' },
      ],
    },

    caseStudy: buildCaseStudyFromProfile(entry, profile, label),

    relatedIndustries: {
      badge: 'Related Industries',
      title: 'We Also Serve These Verticals',
      items: getRelatedIndustries(entry, allEntries),
    },

    toolsTrust: {
      badge: 'Tools & Trust',
      title: 'Enterprise Tools. Proven Credentials.',
      subtitle: 'We use industry-standard platforms and maintain certifications that reflect our commitment to data-driven, ethical SEO.',
      tools: [
        { name: 'Google Search Console', description: 'Indexation, query data, and technical issue monitoring.' },
        { name: 'Google Analytics 4', description: 'Conversion tracking, audience insights, and funnel analysis.' },
        { name: 'SEMrush / Ahrefs', description: 'Keyword research, competitor gaps, and backlink analysis.' },
        { name: 'Screaming Frog', description: 'Technical crawls, redirect audits, and on-page validation.' },
        { name: 'Looker Studio', description: 'Live client dashboards with weekly KPI reporting.' },
      ],
      certifications: [
        'Google Analytics Certified',
        'Google Ads Certified',
        'HubSpot Inbound Certified',
        'SEMrush SEO Toolkit',
      ],
      awards: [
        'Top SEO Agency India (Clutch)',
        '4.9/5 Client Rating (120+ reviews)',
        'GoodFirms Top Digital Marketing Company',
        '14+ Years Industry Experience',
      ],
    },

    testimonials: {
      badge: 'Client Voices',
      title: 'What Our Clients Say',
      subtitle: `${testimonials.length} verified client stories from ${labelLower} and related industries worldwide.`,
      items: testimonials,
    },

    faq: {
      badge: 'FAQ',
      title: `Frequently Asked Questions About ${title}`,
      items: expandFaqs(profile.faqs || [], label, title),
    },

    contact: {
      title: `Ready to Grow Your ${label} Business?`,
      subtitle: `Book a free SEO audit for your ${labelLower} brand. We review your site, competitors, GBP health, and deliver a custom roadmap with timelines and KPIs.`,
      phone: { label: '+91-8076676731', href: 'tel:+91-8076676731' },
      email: 'sales@seoindiatech.com',
      address: 'E-160, Sector 63, Noida, Uttar Pradesh 201301, India',
      formTitle: 'Book Your Free SEO Audit',
      formSubtitle: 'No obligation. Get a clear action plan for your next 90 days.',
      benefits: ['Free comprehensive audit', 'No long-term contract required', 'Dedicated strategist assigned'],
      cta: { label: 'Book Free Consultation', href: '/contact-us' },
    },

    finalCta: {
      title: `Ready to Grow Your ${label} Leads?`,
      subtitle: `Get a free SEO audit covering service page gaps, GBP health, AI Overview opportunities, and a custom roadmap with timelines and KPIs.`,
      benefits: ['Free comprehensive audit', 'No long-term contract required', 'Dedicated industry strategist'],
      primaryCta: { label: 'Book Free Consultation', href: '/contact-us' },
      secondaryCta: { label: 'Call +91-8076676731', href: 'tel:+91-8076676731' },
    },
  }
}
