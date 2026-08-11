import {
  FaRobot,
  FaStore,
  FaShoppingCart,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaBullhorn,
  FaPenNib,
  FaUserShield,
  FaShareAlt,
  FaAd,
  FaMousePointer,
  FaPencilRuler,
  FaGlobe,
  FaCogs,
} from 'react-icons/fa'

export const serviceCategories = {
  seo: {
    title: 'SEO Services',
    services: [
      {
        title: 'Local SEO',
        slug: '/services/local-seo-service',
        icon: FaMapMarkerAlt,
        description: 'Rank in local searches and attract more customers from your area with location-focused SEO strategies built for maps, mobile, and "near me" searches.',
        features: [
          'Local Citation Building',
          'Location-Based Keyword Targeting',
          'Google Maps Ranking Optimization',
          'Local Landing Page Optimization',
        ],
      },
      {
        title: 'Technical SEO',
        slug: '/services/technical-seo',
        icon: FaCogs,
        description: 'Fix crawlability, indexation, site speed, and structured data so search engines can discover and rank your most important pages.',
        features: [
          'Technical SEO Audits',
          'Core Web Vitals Optimization',
          'Crawl & Indexation Fixes',
          'Schema & Structured Data',
        ],
      },
      {
        title: 'AI SEO',
        slug: '/services/ai-seo',
        icon: FaRobot,
        description: 'Search is shifting from ranked links to AI-generated answers-our AI SEO optimization work keeps your content visible through that change, not left behind.',
        features: [
          'AI Search Content Structuring',
          'Entity & Topical Authority Building',
          'Structured Data for AI Crawlers',
          'AI Search Visibility Tracking',
        ],
      },
      {
        title: 'Small Business SEO',
        slug: '/services/small-business-seo',
        icon: FaStore,
        description: 'Not every business needs an enterprise budget to rank well. This SEO optimization for a small business plan focuses on the highest-impact work first so results show up faster.',
        features: [
          'Local Keyword Targeting',
          'On-Page SEO Essentials',
          'Affordable Monthly SEO Plans',
          'Performance Reporting',
        ],
      },
      {
        title: 'E-Commerce SEO',
        slug: '/services/e-commerce-seo',
        icon: FaShoppingCart,
        description: 'Product and category pages carry most of an online store\'s ranking potential. We cover everything from organic e-commerce SEO basics to advanced e-commerce SEO tactics that turn browsers into buyers.',
        features: [
          'Product Page Optimization',
          'Category & Collection SEO',
          'Product Schema Markup',
          'Site Speed & Technical Fixes',
        ],
      },
      {
        title: 'International SEO',
        slug: '/services/international-seo',
        icon: FaGlobe,
        description: 'Expand organic visibility in USA, UK, Europe, Australia, and other export markets with hreflang-ready architecture, market-specific keyword strategy, and technical foundations for global search.',
        features: [
          'Multi-Country Keyword Research',
          'Hreflang & International Site Structure',
          'Market-Specific Landing Pages',
          'Global Technical SEO Audits',
        ],
      },
      {
        title: 'App Store Optimization',
        slug: '/services/app-store-optimization',
        icon: FaMobileAlt,
        description: 'Increase app downloads with optimized store listings that improve visibility and conversion in the App Store and Google Play.',
        features: [
          'Keyword-Optimized App Titles',
          'Screenshot & Visual Optimization',
          'Review & Rating Strategy',
          'App Store Ranking Tracking',
        ],
      },
      {
        title: 'GBP Optimization',
        slug: '/services/gbp-optimization',
        icon: FaMapMarkedAlt,
        description: 'Many customers decide before they ever click through to a website. Getting GBP optimization right means your Google Business Profile makes that first impression count.',
        features: [
          'Profile Completeness Audit',
          'Review Management & Response',
          'Google Posts & Updates',
          'Google Business Profile Keyword Optimization',
        ],
      },
      {
        title: 'GEO Optimization',
        slug: '/services/generative-engine-optimization',
        icon: FaGlobe,
        description: 'Optimize for generative AI search experiences so your content gets pulled into AI overviews and chatbot-generated answers, not just ranked below them.',
        features: [
          'Generative Search Content Structuring',
          'AI Overview Optimization',
          'Source Citation Optimization',
          'Content Depth & Clarity Improvements',
        ],
      },
      {
        title: 'AEO',
        slug: '/services/answer-engine-optimization',
        icon: FaRobot,
        description: 'Get cited in AI-generated answers and search features, capturing visibility even when the searcher never clicks through to your site.',
        features: [
          'Featured Snippet Optimization',
          'FAQ & Schema Markup',
          'Voice Search Optimization',
          'Direct-Answer Content Formatting',
        ],
      },
    ],
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    services: [
      {
        title: 'Digital Branding',
        slug: '/services/digital-branding',
        icon: FaBullhorn,
        description: 'Build a strong and consistent digital brand identity.',
      },
      {
        title: 'Content Marketing',
        slug: '/services/content-marketing',
        icon: FaPenNib,
        description: 'Engage your audience with powerful content that drives results.',
      },
      {
        title: 'Online Reputation Management',
        slug: '/services/online-reputation-management',
        icon: FaUserShield,
        description: 'Protect and enhance your brand reputation online.',
      },
      {
        title: 'Social Media Optimization',
        slug: '/services/social-media-optimization',
        icon: FaShareAlt,
        description: 'Maximize your social media presence and engagement.',
      },
    ],
  },
  'pay-per-click': {
    title: 'Paid Advertising Services',
    services: [
      {
        title: 'PPC Advertising',
        slug: '/services/ppc-advertising',
        icon: FaAd,
        description: 'Drive targeted traffic with data-driven PPC campaigns.',
      },
      {
        title: 'Pay Per Click',
        slug: '/services/pay-per-click',
        icon: FaMousePointer,
        description: 'Run high-performing pay per click campaigns for maximum ROI.',
      },
    ],
  },
  'paid-advertising': {
    title: 'Paid Advertising Services',
    services: [
      {
        title: 'PPC Advertising',
        slug: '/services/ppc-advertising',
        icon: FaAd,
        description: 'Drive targeted traffic with data-driven PPC campaigns.',
      },
      {
        title: 'Pay Per Click',
        slug: '/services/pay-per-click',
        icon: FaMousePointer,
        description: 'Run high-performing pay per click campaigns for maximum ROI.',
      },
    ],
  },
  'design-and-development': {
    title: 'Design & Development Services',
    services: [
      {
        title: 'UI/UX Design',
        slug: '/services/ui-ux-design',
        icon: FaPencilRuler,
        description: 'Create intuitive and visually stunning user experiences.',
      },
    ],
  },
}
