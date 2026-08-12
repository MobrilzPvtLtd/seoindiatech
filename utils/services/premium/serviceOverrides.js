/**
 * Handwritten premium overrides for top service pages (10/10 content).
 */

export const localSeoPremium = {
  seo: {
    title: 'Local SEO India | Local SEO Services in India | SEO India Tech',
    description:
      'Local SEO services in India for map pack visibility, Google Business Profile optimization, citations, and geo pages. Work with a local SEO agency in India. Free audit.',
  },
  hero: {
    h1: 'Local SEO Services That Put You in the Map Pack',
    paragraphs: [
      'Local SEO is how nearby customers find you on Google Search and Google Maps. When someone searches "near me" or "best [service] in [city]," map pack results and local organic listings decide who gets the call.',
      'SEO India Tech builds local SEO around Google Business Profile optimization, citation consistency, suburb landing pages, review velocity, and conversion tracking-so you see more calls, direction requests, and booked appointments from local search.',
    ],
    backgroundImage: '/images/services/heroes/local-seo-service.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
  keyTakeaways: {
    badge: 'Key Takeaways',
    title: 'What Businesses Should Know About Local SEO',
    items: [
      'Map pack visibility often drives more calls than organic position #1.',
      'GBP categories, reviews, and photos are ranking factors-not optional extras.',
      'NAP consistency across citations prevents local ranking suppression.',
      'Suburb and neighborhood pages capture hyperlocal search demand.',
      'GEO and FAQ schema help AI tools recommend your business locally.',
    ],
  },
  caseStudy: {
    title: 'Case Study: Multi-Location Home Services Brand',
    problem:
      'A home services company with 4 locations ranked only for branded terms. GBP listings were incomplete, reviews averaged 3.2 stars, and city pages were thin duplicates.',
    solution:
      'We rebuilt GBP profiles per branch, launched ethical review workflows, created unique suburb landing pages, and fixed NAP inconsistencies across 40+ citations.',
    execution:
      'Month 1: GBP and citation audit. Month 2-3: location page rebuilds. Month 4-6: review velocity and local content expansion.',
    timeline: '6 months',
    results: [
      { label: 'Map pack visibility', value: 'Top 3', change: '8 core local terms' },
      { label: 'GBP calls', value: '+210%', change: 'vs. baseline' },
      { label: 'Organic local sessions', value: '+156%', change: 'geo pages' },
      { label: 'Avg. review rating', value: '4.7', change: 'from 3.2 stars' },
    ],
    cta: { label: 'Get Similar Results', href: '/contact-us' },
  },
}

export const aiSeoPremium = {
  seo: {
    title: 'AI SEO Services India | GEO & Answer Engine Experts | SEO India Tech',
    description:
      'AI SEO, GEO, and answer engine optimization for Google AI Overviews, ChatGPT, and Gemini. Structure content AI tools cite. Free audit from India\'s AI SEO agency.',
  },
  hero: {
    h1: 'AI SEO Services for Google AI Overviews and Generative Search',
    paragraphs: [
      'Search is shifting from ten blue links to AI-generated answers. AI SEO ensures your brand is structured, authoritative, and citable when prospects ask ChatGPT, Gemini, Google AI Overviews, or voice assistants for recommendations.',
      'SEO India Tech delivers AI SEO with answer blocks, FAQ schema, entity optimization, technical health, and content depth-so you rank in traditional search and get cited in generative discovery.',
    ],
    backgroundImage: '/images/services/heroes/ai-seo.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
  keyTakeaways: {
    badge: 'Key Takeaways',
    title: 'What Businesses Should Know About AI SEO',
    items: [
      'AI SEO builds on traditional SEO-you cannot skip technical and content fundamentals.',
      'Concise answer paragraphs and FAQ schema increase AI citation likelihood.',
      'Entity signals (brand, author, organization) help AI tools trust your content.',
      'GEO and AEO target generative engines; SEO targets ranked results-use both.',
      'Measure AI visibility with branded search growth, FAQ rich results, and citation monitoring.',
    ],
  },
}

export const gbpPremium = {
  seo: {
    title: 'Google Business Profile Optimization | GBP SEO Experts | SEO India Tech',
    description:
      'Expert GBP optimization: categories, reviews, photos, posts, and Q&A. Increase map pack rankings, calls, and direction requests. Free GBP audit.',
  },
  hero: {
    h1: 'Google Business Profile Optimization That Drives Calls and Visits',
    paragraphs: [
      'Your Google Business Profile is often the first impression local customers see. GBP optimization improves map pack rankings, profile engagement, and conversion actions: calls, direction requests, website clicks, and bookings.',
      'SEO India Tech manages GBP categories, service menus, photo cadence, posts, review workflows, and Q&A monitoring-aligned with your local SEO and website strategy.',
    ],
    backgroundImage: '/images/services/heroes/gbp-optimization.svg',
    items: [
      'Primary and secondary categories must match your actual services.',
      'Review velocity and response rate influence map rankings and trust.',
      'Weekly GBP posts and fresh photos signal an active, trustworthy business.',
      'Service menus and Q&A reduce friction for high-intent searchers.',
      'GBP insights (calls, directions) should feed weekly performance reports.',
    ],
  },
}

export const ppcPremium = {
  seo: {
    title: 'PPC Advertising Services India | Google & Meta Ads Agency | SEO India Tech',
    description:
      'Data-driven PPC advertising on Google, Meta, and LinkedIn. Landing pages, conversion tracking, and ROAS reporting. Free PPC audit from SEO India Tech.',
  },
  hero: {
    h1: 'PPC Advertising Services Built for Leads and Revenue',
    paragraphs: [
      'PPC captures high-intent demand immediately while SEO compounds in the background. We run Google Ads, Meta, and LinkedIn campaigns with tight keyword governance, aligned landing pages, and conversion tracking tied to real leads.',
      'SEO India Tech integrates PPC with your SEO and content strategy so Quality Score, messaging, and attribution stay consistent across channels.',
    ],
    backgroundImage: '/images/services/heroes/ppc-advertising.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
}

export const contentMarketingPremium = {
  seo: {
    title: 'Content Marketing Services India | SEO Content Agency | SEO India Tech',
    description:
      'Content marketing services in India: blogs, service pages, case studies, and AI-ready content. SEO-optimized, conversion-focused strategy from SEO India Tech. Free content audit.',
  },
  hero: {
    h1: 'Content Marketing Services That Rank, Educate, and Convert',
    paragraphs: [
      'Content marketing builds trust before the sales conversation starts. We create SEO-optimized blogs, service pages, case studies, and funnels mapped to search intent-from awareness to decision.',
      'Every piece is structured for Google rankings and AI Overviews with clear headings, answer blocks, internal links, and schema where appropriate.',
    ],
    backgroundImage: '/images/services/heroes/content-marketing.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
}

const overrideHero = (h1, paragraphs, bg) => ({
  hero: {
    h1,
    paragraphs,
    backgroundImage: bg,
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
})

export const smallBusinessSeoPremium = {
  ...overrideHero(
    'Small Business SEO That Competes With Enterprise Brands',
    [
      'Small businesses win SEO with local focus, niche expertise, and faster execution-not bigger budgets. We build technical foundations, service pages, and content that captures high-intent searches in your market.',
      'From GBP and citations to blog clusters and conversion tracking, our small business SEO program is designed for owners who need leads, not vanity rankings.',
    ],
    '/images/services/heroes/small-business-seo.svg'
  ),
  caseStudy: {
    title: 'Case Study: Local HVAC Contractor',
    problem: 'A 12-person HVAC company relied entirely on referrals. Organic traffic was under 200 sessions per month with no map pack visibility.',
    solution: 'We launched GBP optimization, 8 suburb landing pages, and a review workflow tied to completed jobs.',
    results: [
      { label: 'Organic sessions', value: '+240%', change: '9 months' },
      { label: 'Map pack terms', value: 'Top 3', change: '6 priority keywords' },
      { label: 'Monthly calls', value: '+85', change: 'from organic' },
    ],
    cta: { label: 'Get Similar Results', href: '/contact-us' },
  },
}

export const ecommerceSeoPremium = {
  seo: {
    title: 'Ecommerce SEO Agency in India | WooCommerce & Store SEO | SEO India Tech',
    description:
      'Ecommerce SEO agency in India for WooCommerce and online stores: product pages, category optimization, technical fixes, and schema. Grow organic revenue. Free audit.',
  },
  ...overrideHero(
    'Ecommerce SEO Agency for Product Visibility and Revenue Growth',
    [
      'E-commerce SEO targets category pages, product detail pages, faceted navigation, and technical health at scale. We fix indexation bloat, optimize titles and schema, and build content that captures commercial and comparison intent.',
      'Our e-commerce SEO integrates with your catalog, seasonal campaigns, and paid media for unified product discovery.',
    ],
    '/images/services/heroes/e-commerce-seo.svg'
  ),
}

export const asoPremium = {
  ...overrideHero(
    'App Store Optimization for Downloads and Rankings',
    [
      'ASO improves visibility in Apple App Store and Google Play through keyword-optimized titles, screenshots, ratings strategy, and localized listings.',
      'We align ASO with your broader digital marketing so app discovery supports brand search and paid user acquisition.',
    ],
    '/images/services/heroes/app-store-optimization.svg'
  ),
}

export const geoPremium = {
  ...overrideHero(
    'Generative Engine Optimization (GEO) Services',
    [
      'GEO structures your content so ChatGPT, Gemini, Perplexity, and Google AI Overviews cite your brand as a trusted source. Answer blocks, FAQ schema, and entity clarity are core tactics.',
      'GEO complements traditional SEO-without technical health and authority, AI engines have weak sources to reference.',
    ],
    '/images/services/heroes/generative-engine-optimization.svg'
  ),
  keyTakeaways: {
    badge: 'Key Takeaways',
    title: 'What Businesses Should Know About GEO',
    items: [
      'GEO targets AI citations; SEO targets ranked results-use both.',
      'Concise answer paragraphs below H2 headings increase citation likelihood.',
      'FAQ schema and author EEAT strengthen trust for YMYL topics.',
      'Monitor branded search and manual AI query tests monthly.',
    ],
  },
}

export const aeoPremium = {
  ...overrideHero(
    'Answer Engine Optimization for AI Search Discovery',
    [
      'Answer Engine Optimization (AEO) formats content for conversational AI: direct answers, structured FAQs, definitions, and comparison tables that models can parse and cite.',
      'AEO is essential as users shift from keyword queries to full-sentence questions in ChatGPT and voice assistants.',
    ],
    '/images/services/heroes/answer-engine-optimization.svg'
  ),
}

export const digitalBrandingPremium = {
  ...overrideHero(
    'Digital Branding That Builds Recognition and Trust Online',
    [
      'Digital branding aligns your visual identity, messaging, and search presence so prospects recognize and trust you across Google, social, and AI answers.',
      'We connect branding with SEO and content so every touchpoint reinforces the same value proposition.',
    ],
    '/images/services/heroes/digital-branding.svg'
  ),
}

export const ormPremium = {
  ...overrideHero(
    'Online Reputation Management for Brand SERPs',
    [
      'ORM protects and improves how your brand appears in search results, reviews, and AI-generated summaries. We monitor mentions, respond to reviews, and promote positive assets.',
      'For multi-location and regulated industries, reputation directly impacts conversions and compliance-sensitive queries.',
    ],
    '/images/services/heroes/online-reputation-management.svg'
  ),
}

export const smoPremium = {
  ...overrideHero(
    'Social Media Optimization for Discoverability and Engagement',
    [
      'SMO optimizes profiles, posts, and hashtags so your brand is discoverable on Instagram, Facebook, LinkedIn, and YouTube-aligned with search and content strategy.',
      'We integrate SMO with SEO so social proof and shareable content support organic visibility.',
    ],
    '/images/services/heroes/social-media-optimization.svg'
  ),
}

export const payPerClickPremium = {
  ...overrideHero(
    'Pay Per Click Management for Measurable Lead Growth',
    [
      'PPC management with transparent reporting, landing page alignment, and conversion tracking. We optimize bids, audiences, and creative for cost-efficient leads.',
      'Pay per click works best alongside SEO and content so you capture demand at every funnel stage.',
    ],
    '/images/services/heroes/pay-per-click.svg'
  ),
}

export const uiUxPremium = {
  seo: {
    title: 'SEO Website Design Company in India | Web Design SEO | SEO India Tech',
    description:
      'SEO-friendly website design in India: fast, mobile-first UI/UX that supports Core Web Vitals, conversions, and organic visibility. Web design SEO company for growth-focused brands.',
  },
  ...overrideHero(
    'UI/UX Design That Converts Visitors Into Leads',
    [
      'UI/UX design improves usability, Core Web Vitals, and conversion paths on marketing and product sites. Fast, accessible interfaces support SEO and paid campaign performance.',
      'We design mobile-first experiences with clear CTAs, trust signals, and performance budgets.',
    ],
    '/images/services/heroes/ui-ux-design.svg'
  ),
}

export const socialMediaMarketingPremium = {
  seo: {
    title: 'Social Media Marketing in India | SMM Services | SEO India Tech',
    description:
      'Social media marketing services in India across Instagram, Facebook, LinkedIn, and YouTube. Content, paid social, and reporting tied to leads and revenue. Free consultation.',
  },
  ...overrideHero(
    'Social Media Marketing for Brand Growth and Conversions',
    [
      'Full-funnel social media marketing across Instagram, Facebook, LinkedIn, and YouTube: content calendars, paid social, community management, and influencer support.',
      'We tie social campaigns to landing pages and analytics so engagement translates to pipeline.',
    ],
    '/images/services/heroes/social-media-marketing.svg'
  ),
}

export const technicalSeoPremium = {
  seo: {
    title: 'Technical SEO Services in India | Technical SEO Company | SEO India Tech',
    description:
      'Technical SEO services in India: audits, crawlability, Core Web Vitals, indexation, and structured data from a technical SEO agency focused on measurable fixes. Free audit.',
  },
  hero: {
    h1: 'Technical SEO Services That Fix What Blocks Rankings',
    paragraphs: [
      'Technical SEO is the foundation every other SEO program depends on. If crawlers cannot access your pages, if Core Web Vitals fail, or if duplicate URLs dilute authority, content and links will not deliver reliable growth.',
      'SEO India Tech provides technical SEO services in India for marketing sites, e-commerce stores, and multi-location brands—prioritising fixes that unblock indexation, speed, and structured data before scaling content or link building.',
    ],
    backgroundImage: '/images/blog/technical-seo-checklist-enterprise-websites-hero.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
  keyTakeaways: {
    badge: 'Key Takeaways',
    title: 'What Businesses Should Know About Technical SEO',
    items: [
      'Crawl and indexation issues often hide behind good-looking designs—audits surface what Google actually sees.',
      'Core Web Vitals affect both rankings and conversions; technical SEO and UX work together.',
      'Canonical tags, redirects, and URL parameters must be managed to avoid duplicate content.',
      'Schema and structured data help search engines understand services, products, and FAQs.',
      'Technical fixes should be tracked in Search Console and analytics, not assumed from checklists alone.',
    ],
  },
}

export const internationalSeoPremium = {
  seo: {
    title: 'International SEO Agency India | Global SEO Services | SEO India Tech',
    description:
      'International SEO agency in India for businesses targeting USA, UK, Europe, and export markets. Hreflang, market strategy, and technical SEO for global growth.',
  },
  hero: {
    h1: 'International SEO for Indian Businesses Going Global',
    paragraphs: [
      'International SEO helps Indian brands rank in overseas markets where buyers search for products and services. We build hreflang-ready site structures, country-specific keyword plans, and technical foundations so each market can be discovered independently.',
      'SEO India Tech acts as an SEO firm in India for global businesses—aligning content, technical SEO, and reporting across regions without duplicating doorway pages or thin geo clones.',
    ],
    backgroundImage: '/images/services/heroes/e-commerce-seo.svg',
    backgroundImageMobile: '/images/hero-mobile.webp',
  },
  keyTakeaways: {
    badge: 'Key Takeaways',
    title: 'What Businesses Should Know About International SEO',
    items: [
      'Each target country needs distinct keyword research—not translated copies of Indian pages.',
      'Hreflang and URL structure prevent cross-market cannibalization in Google.',
      'Technical health (speed, crawl, indexation) must be solid before scaling internationally.',
      'Local backlinks and trust signals vary by market; strategy should adapt per region.',
      'Reporting should separate traffic and conversions by country or language.',
    ],
  },
}

export const SERVICE_OVERRIDES = {
  'local-seo-service': localSeoPremium,
  'ai-seo': aiSeoPremium,
  'gbp-optimization': gbpPremium,
  'ppc-advertising': ppcPremium,
  'content-marketing': contentMarketingPremium,
  'small-business-seo': smallBusinessSeoPremium,
  'e-commerce-seo': ecommerceSeoPremium,
  'app-store-optimization': asoPremium,
  'generative-engine-optimization': geoPremium,
  'answer-engine-optimization': aeoPremium,
  'digital-branding': digitalBrandingPremium,
  'online-reputation-management': ormPremium,
  'social-media-optimization': smoPremium,
  'pay-per-click': payPerClickPremium,
  'ui-ux-design': uiUxPremium,
  'social-media-marketing': socialMediaMarketingPremium,
  'international-seo': internationalSeoPremium,
  'technical-seo': technicalSeoPremium,
}
