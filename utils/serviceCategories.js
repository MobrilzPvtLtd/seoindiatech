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
} from 'react-icons/fa'

export const serviceCategories = {
  seo: {
    title: 'SEO Services',
    services: [
      {
        title: 'Local SEO',
        slug: '/services/local-seo-service',
        icon: FaMapMarkerAlt,
        description: 'Rank in local searches and attract more customers from your area.',
      },
      {
        title: 'AI SEO',
        slug: '/services/ai-seo',
        icon: FaRobot,
        description: 'Optimize for AI-powered search engines and answer engines.',
      },
      {
        title: 'Small Business SEO',
        slug: '/services/small-business-seo',
        icon: FaStore,
        description: 'Affordable SEO solutions tailored for small businesses.',
      },
      {
        title: 'E-Commerce SEO',
        slug: '/services/e-commerce-seo',
        icon: FaShoppingCart,
        description: 'Boost your online store rankings and drive more sales.',
      },
      {
        title: 'App Store Optimization',
        slug: '/services/app-store-optimization',
        icon: FaMobileAlt,
        description: 'Increase app downloads with optimized store listings.',
      },
      {
        title: 'GBP Optimization',
        slug: '/services/gbp-optimization',
        icon: FaMapMarkedAlt,
        description: 'Optimize your Google Business Profile for maximum local visibility.',
      },
      {
        title: 'GEO Optimization',
        slug: '/services/generative-engine-optimization',
        icon: FaGlobe,
        description: 'Optimize for generative AI search experiences.',
      },
      {
        title: 'AEO',
        slug: '/services/answer-engine-optimization',
        icon: FaRobot,
        description: 'Get cited in AI-generated answers and search features.',
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
