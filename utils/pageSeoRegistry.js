/** Default SEO metadata for static routes. */
export const PAGE_SEO = {
  '/': {
    title: 'AI-Powered SEO & Digital Marketing Agency | SEO India Tech',
    description:
      'Global digital growth partner for AI-powered SEO, performance marketing, and technology. 14+ years serving businesses in USA, UK, Australia, and worldwide.',
  },
  '/who-we-are': {
    title: 'About SEO India Tech | AI SEO & Digital Marketing Experts',
    description:
      'Meet SEO India Tech - a global team of SEO, AI search, PPC, and technology specialists delivering measurable growth for 500+ clients since 2010.',
  },
  '/blog': {
    title: 'Digital Marketing & SEO Blog | SEO India Tech',
    description:
      'Expert insights on SEO, AI search, local SEO, content marketing, and digital growth strategies from the SEO India Tech team.',
  },
  '/industries': {
    title: 'Industry SEO Services | SEO India Tech',
    description:
      'Browse 41 specialized industry SEO programs - healthcare, home services, food and health, and professional sectors. SEO, AI Overview, GMB, PPC, and SMO.',
  },
  '/terms': {
    title: 'Terms of Service | SEO India Tech',
    description:
      'Read the terms of service for SEO India Tech digital marketing, SEO, and technology services. Understand your rights and our service commitments.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | SEO India Tech',
    description:
      'Learn how SEO India Tech collects, uses, and protects your personal data when you use our website and digital marketing services.',
  },
  '/contact-us': {
    title: 'Contact SEO India Tech | Free SEO Consultation',
    description:
      'Get in touch with SEO India Tech for AI-powered SEO, PPC, and digital marketing services. Book a free consultation with our experts today.',
  },
  '/seo-packages': {
    title: 'SEO Packages & Pricing | SEO India Tech',
    description:
      'Explore flexible SEO packages tailored for startups, small businesses, and enterprises. Transparent pricing, measurable results, and dedicated account management.',
  },
}

export function getPageSeo(path) {
  return PAGE_SEO[path] || null
}
