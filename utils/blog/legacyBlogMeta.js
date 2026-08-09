/**
 * Cluster metadata and enrichment for legacy blog posts (Phase 5).
 */
import { getBlogAnswerFirst } from '../seo/answerFirstContent.js'

const LEGACY_META = {
  'how-google-ai-overviews-are-changing-seo': {
    cluster: 'AI SEO',
    serviceLinks: ['/services/ai-seo', '/services/seo', '/services/answer-engine-optimization'],
    relatedBlogSlugs: [
      'google-ai-overviews-changing-business-seo',
      'what-is-ai-seo-why-business-needs-it',
      'chatgpt-seo-ai-search-organic-traffic',
    ],
  },
  'what-is-ai-seo-why-business-needs-it': {
    cluster: 'AI SEO',
    serviceLinks: ['/services/ai-seo', '/services/generative-engine-optimization', '/services/answer-engine-optimization'],
    relatedBlogSlugs: [
      'ai-seo-vs-traditional-seo-2026',
      'geo-generative-engine-optimization-guide',
      'google-ai-overviews-changing-business-seo',
    ],
  },
  'ppc-vs-seo-which-is-better': {
    cluster: 'Content Marketing',
    serviceLinks: ['/services/ppc-advertising', '/services/seo', '/services/digital-marketing'],
    relatedBlogSlugs: ['seo-roi-calculator-measure-success', 'local-vs-national-vs-international-seo'],
  },
  'local-seo-guide-indian-businesses-2026': {
    cluster: 'Local SEO',
    serviceLinks: ['/services/local-seo-service', '/services/gbp-optimization', '/services/small-business-seo'],
    relatedBlogSlugs: [
      'google-business-profile-optimization-guide',
      'local-seo-checklist-multi-location-europe',
      'seo-checklist-small-businesses-europe',
    ],
  },
  'seo-for-restaurants-local-diners': {
    cluster: 'Local SEO',
    serviceLinks: ['/services/local-seo-service', '/services/gbp-optimization'],
    industryLinks: ['/industries/catering-seo'],
    relatedBlogSlugs: ['google-business-profile-optimization-guide', 'local-seo-guide-indian-businesses-2026'],
  },
  'ecommerce-seo-checklist-india': {
    cluster: 'E-Commerce SEO',
    serviceLinks: ['/services/e-commerce-seo', '/services/seo', '/services/content-marketing'],
    relatedBlogSlugs: ['technical-seo-checklist-enterprise-websites', 'content-marketing-strategy-qualified-leads'],
  },
  'how-to-choose-best-seo-agency-india': {
    cluster: 'International SEO',
    serviceLinks: ['/services/seo', '/seo-packages', '/contact-us'],
    relatedBlogSlugs: ['choose-best-seo-agency-europe', 'complete-eeat-guide-business-websites'],
  },
  'youtube-business-marketing-2026': {
    cluster: 'Content Marketing',
    serviceLinks: ['/services/social-media-marketing', '/services/content-marketing', '/services/digital-marketing'],
    relatedBlogSlugs: ['content-marketing-strategy-qualified-leads'],
  },
}

const LEGACY_FAQS = {
  'what-is-ai-seo-why-business-needs-it': [
    {
      question: 'What is AI SEO in simple terms?',
      answer:
        'AI SEO is the practice of optimizing your website so both traditional search engines and AI answer tools can understand, trust, and cite your content. It builds on normal SEO with clearer definitions, FAQs, and entity signals.',
    },
    {
      question: 'Do I still need traditional SEO if I focus on AI SEO?',
      answer:
        'Yes. Technical health, quality content, and authority still matter for rankings. AI SEO adds answer-ready formatting—it does not replace fundamentals.',
    },
    {
      question: 'How do I get started with AI SEO?',
      answer:
        'Audit your top pages, add direct answers under key headings, expand FAQs with real customer questions, and ensure author and business information is visible. SEO India Tech offers dedicated AI SEO programs if you want expert support.',
    },
  ],
  'ppc-vs-seo-which-is-better': [
    {
      question: 'Is PPC or SEO better for a new business?',
      answer:
        'PPC is better when you need leads immediately or want to test demand. SEO is better when you want compounding traffic and lower cost per lead over time. Many businesses use PPC for short-term wins and SEO for long-term growth.',
    },
    {
      question: 'Can PPC and SEO work together?',
      answer:
        'Yes. Paid ads can capture high-intent demand while SEO builds organic visibility. Shared landing pages, keyword insights, and unified reporting improve both channels.',
    },
    {
      question: 'How long does SEO take compared to PPC?',
      answer:
        'PPC can generate traffic as soon as campaigns go live. SEO typically needs several months before meaningful organic growth, depending on competition and site health.',
    },
  ],
  'how-google-ai-overviews-are-changing-seo': [
    {
      question: 'Will Google AI Overviews reduce website traffic?',
      answer:
        'They can reduce clicks for some queries, especially simple informational ones. Businesses that provide unique expertise, original examples, and clear answers can still earn visibility and branded discovery.',
    },
    {
      question: 'How should small businesses adapt to AI Overviews?',
      answer:
        'Focus on helpful, specific content, strengthen E-E-A-T signals, use FAQ sections for genuine questions, and keep Google Business Profile accurate if you serve local customers.',
    },
  ],
}

export function enrichLegacyPost(post) {
  const meta = LEGACY_META[post.slug]
  if (!meta) return post

  const answerFirst =
    getBlogAnswerFirst(post.slug, {
      title: post.title,
      primaryKeyword: post.category,
    }) || null

  return {
    ...post,
    cluster: meta.cluster,
    serviceLinks: meta.serviceLinks,
    industryLinks: meta.industryLinks || [],
    relatedBlogSlugs: meta.relatedBlogSlugs,
    relatedSlugs: meta.relatedBlogSlugs,
    answerFirst: answerFirst?.question ? answerFirst : undefined,
    faqs: post.faqs?.length ? post.faqs : LEGACY_FAQS[post.slug] || [],
  }
}

export function getLegacyClusterMap() {
  return LEGACY_META
}
