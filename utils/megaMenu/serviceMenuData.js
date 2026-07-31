import {
  MapPin,
  Bot,
  Store,
  ShoppingCart,
  Smartphone,
  Building2,
  Sparkles,
  MessageSquareQuote,
  Search,
  TrendingUp,
  Palette,
  FileText,
  ShieldCheck,
  Share2,
  Megaphone,
  MousePointerClick,
  PenTool,
} from 'lucide-react'

export const serviceMegaMenuCategories = [
  {
    title: 'SEO',
    link: '/services/seo',
    icon: Search,
    items: [
      { icon: MapPin, title: 'Local SEO', desc: 'Rank in your city and nearby areas', link: '/services/local-seo-service' },
      { icon: Bot, title: 'AI SEO', desc: 'Get found by AI search and chat tools', link: '/services/ai-seo' },
      { icon: Store, title: 'Small Business', desc: 'Affordable growth for local shops', link: '/services/small-business-seo' },
      { icon: ShoppingCart, title: 'E-Commerce SEO', desc: 'More organic traffic to product pages', link: '/services/e-commerce-seo' },
      { icon: Smartphone, title: 'App Store Optimization', desc: 'Higher rankings in app stores', link: '/services/app-store-optimization' },
      { icon: Building2, title: 'GBP Optimization', desc: 'Stand out on Google Business Profile', link: '/services/gbp-optimization' },
      { icon: Sparkles, title: 'GEO Optimization', desc: 'Show up in generative AI answers', link: '/services/generative-engine-optimization' },
      { icon: MessageSquareQuote, title: 'AEO', desc: 'Win the featured answer box', link: '/services/answer-engine-optimization' },
    ],
  },
  {
    title: 'Digital Marketing',
    link: '/services/digital-marketing',
    icon: TrendingUp,
    items: [
      { icon: Palette, title: 'Digital Branding', desc: 'Build a brand people remember', link: '/services/digital-branding' },
      { icon: FileText, title: 'Content Marketing', desc: 'Content that ranks and converts', link: '/services/content-marketing' },
      { icon: ShieldCheck, title: 'ORM', desc: 'Protect and improve how you look online', link: '/services/online-reputation-management' },
      { icon: Share2, title: 'Social Media Optimization', desc: 'Grow an engaged social following', link: '/services/social-media-optimization' },
    ],
  },
  {
    title: 'Paid Advertising',
    link: '/services/paid-advertising',
    icon: Megaphone,
    items: [
      { icon: Megaphone, title: 'PPC Advertising', desc: 'Targeted campaigns that pay for themselves', link: '/services/ppc-advertising' },
      { icon: MousePointerClick, title: 'Pay Per Click', desc: 'Only pay when someone clicks', link: '/services/pay-per-click' },
    ],
  },
  {
    title: 'Design & Development',
    link: '/services/design-and-development',
    icon: PenTool,
    items: [
      { icon: PenTool, title: 'UI/UX Design', desc: 'Interfaces people enjoy using', link: '/services/ui-ux-design' },
    ],
  },
]

export const serviceMegaMenuFooter = {
  message: 'Not sure where to start?',
  highlight: "We'll help you pick the right service.",
  secondaryCta: { label: 'SEO Packages', href: '/seo-packages' },
  primaryCta: { label: 'Get Free Audit', href: '/contact-us' },
}
