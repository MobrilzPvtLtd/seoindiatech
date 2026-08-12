import { PAGE_FAQS } from '../../pageFaqs'

const LOCAL_SEO_FAQS = [
  {
    question: 'What is local SEO service?',
    answer:
      'Local SEO is a set of techniques focused on boosting your visibility in local search results, Google Maps, and "near me" queries for businesses that serve specific geographic areas.',
  },
  {
    question: 'How long before local SEO results appear?',
    answer:
      'Map pack improvements often appear in 4-12 weeks. Competitive city terms may take 3-6 months with consistent GBP, citation, and content work.',
  },
  {
    question: 'Do you offer local SEO for small businesses?',
    answer:
      'Yes. We tailor local SEO for small business budgets with prioritized deliverables: GBP optimization, core service pages, citations, and review workflows.',
  },
  {
    question: 'What is included in white label local SEO services?',
    answer:
      'White label local SEO includes listing management, on-page optimization, reporting, and strategist support delivered under your agency brand.',
  },
  {
    question: 'Can local SEO help my business appear in Google Maps?',
    answer:
      'Yes. Local SEO strengthens your Google Business Profile, citations, reviews, and location pages-the primary signals for map pack rankings.',
  },
  {
    question: 'How does local SEO work with GBP optimization?',
    answer:
      'GBP is the foundation of local SEO. We align profile categories, services, photos, posts, and reviews with on-site location pages for maximum map visibility.',
  },
  {
    question: 'Can local SEO work for multi-location businesses?',
    answer:
      'Yes. We build location-specific pages, manage multiple listings, and maintain NAP consistency so each branch competes in its service area.',
  },
  {
    question: 'Do you optimize for voice and AI local search?',
    answer:
      'Yes. We structure FAQ content, concise answers, and entity signals so voice assistants and AI tools can recommend your business for local queries.',
  },
]

const AI_SEO_FAQS = [
  {
    question: 'What does an AI SEO company do?',
    answer:
      'An AI SEO company improves your site for traditional rankings and AI answer surfaces by focusing on clear content structure, entity signals, and technical health.',
  },
  {
    question: 'How are AI SEO services different from regular SEO?',
    answer:
      'AI SEO includes standard SEO plus question intent mapping, answer formatting, and signals that help ChatGPT, Gemini, and Google AI cite your pages.',
  },
  {
    question: 'What are answer engine optimization services?',
    answer:
      'AEO helps your pages appear as direct answers in AI tools and search features through concise sections, FAQ schema, and strong topical coverage.',
  },
  {
    question: 'What is generative engine optimization?',
    answer:
      'GEO structures content and entity data so generative AI systems can reference your brand when users ask for recommendations in your category.',
  },
  {
    question: 'How long does AI SEO take to show results?',
    answer:
      'Technical and structure improvements can show impact in 4-8 weeks. Competitive AI citation goals often need 3-6 months of consistent content and authority work.',
  },
  {
    question: 'Do AI SEO services include traditional SEO?',
    answer:
      'Yes. AI SEO builds on technical SEO, on-page optimization, and link earning. You cannot skip fundamentals and expect AI visibility alone.',
  },
  {
    question: 'Which businesses benefit most from AI SEO?',
    answer:
      'Service businesses, healthcare, legal, SaaS, and e-commerce brands with high research-phase queries benefit when buyers ask AI for comparisons and recommendations.',
  },
  {
    question: 'How do you measure AI SEO performance?',
    answer:
      'We track AI Overview impressions, branded search growth, FAQ rich results, assisted conversions, and citation monitoring across generative tools.',
  },
]

const GBP_FAQS = [
  {
    question: 'What is Google Business Profile optimization?',
    answer:
      'GBP optimization improves your Google Business Profile completeness, categories, services, photos, posts, reviews, and Q&A so you rank higher in map results.',
  },
  {
    question: 'How is GBP optimization different from local SEO?',
    answer:
      'GBP optimization focuses on your map listing. Local SEO includes GBP plus website pages, citations, and content that support broader local organic visibility.',
  },
  {
    question: 'How long until GBP optimization shows results?',
    answer:
      'Profile improvements and review velocity can move map visibility within 2-8 weeks depending on competition and current profile health.',
  },
  {
    question: 'Do you manage Google Business Profile posts and photos?',
    answer:
      'Yes. We maintain posting cadence, seasonal offers, service highlights, and photo updates that improve engagement and ranking signals.',
  },
  {
    question: 'Can GBP optimization increase phone calls?',
    answer:
      'Yes. Optimized categories, services, hours, and review trust directly increase call, direction, and website click actions from your profile.',
  },
  {
    question: 'Do you help with negative Google reviews?',
    answer:
      'We provide ethical response frameworks and reputation workflows. We do not use fake reviews or policy-violating tactics.',
  },
  {
    question: 'Is GBP optimization important for multi-location brands?',
    answer:
      'Yes. Each location needs a distinct, fully optimized listing with consistent branding and localized proof to compete in its market.',
  },
  {
    question: 'How do GBP and local SEO work together?',
    answer:
      'GBP drives map pack visibility while your website reinforces service keywords, location pages, and conversions. Both must align for best results.',
  },
]

const GENERIC_SERVICE_FAQ_TEMPLATES = (name, label) => [
  {
    question: `What is ${name}?`,
    answer: `${name} is a strategic program from SEO India Tech that improves visibility, trust, and conversions through data-driven digital marketing tailored to your business goals.`,
  },
  {
    question: `How long does ${name.toLowerCase()} take to show results?`,
    answer: `Timelines vary by competition and starting point. Most clients see measurable progress within 8-16 weeks with consistent execution and reporting.`,
  },
  {
    question: `How much does ${name.toLowerCase()} cost?`,
    answer: `Pricing depends on scope, competition, and deliverables. We provide transparent packages and custom proposals after a free audit.`,
  },
  {
    question: `Do you offer ${name.toLowerCase()} for international clients?`,
    answer: `Yes. We serve clients in India, USA, UK, Australia, UAE, and worldwide with market-specific strategies.`,
  },
  {
    question: `How is SEO India Tech different for ${label}?`,
    answer: `14+ years of experience, dedicated strategists, white-hat methods, AI-ready content, and weekly reporting-not generic outsourced packages.`,
  },
  {
    question: `Can ${name.toLowerCase()} work with our existing marketing team?`,
    answer: `Yes. We collaborate with in-house teams and agencies, integrating tracking, content workflows, and campaign alignment.`,
  },
  {
    question: `What KPIs should we track for ${label}?`,
    answer: `We focus on leads, conversions, cost per acquisition, visibility on priority terms, and revenue impact-not vanity traffic alone.`,
  },
  {
    question: `How do we start ${name.toLowerCase()} with SEO India Tech?`,
    answer: `Book a free consultation. We audit your current presence, outline gaps, and deliver a prioritized roadmap with timelines and KPIs.`,
  },
]

export const SERVICE_FAQ_MAP = {
  'local-seo-service': PAGE_FAQS.localSeo,
  'technical-seo': PAGE_FAQS.technicalSeo,
  'ai-seo': AI_SEO_FAQS,
  'gbp-optimization': GBP_FAQS,
  'content-marketing': PAGE_FAQS.contentMarketing,
  'ppc-advertising': PAGE_FAQS.ppcAdvertising,
  'pay-per-click': PAGE_FAQS.ppcAdvertising,
  'social-media-marketing': PAGE_FAQS.socialMediaMarketing,
  'digital-branding': PAGE_FAQS.digitalBranding,
  'ui-ux-design': PAGE_FAQS.uiUxDesign,
}

export function getServiceFaqs(entry) {
  const base = SERVICE_FAQ_MAP[entry.slug] || GENERIC_SERVICE_FAQ_TEMPLATES(entry.name, entry.name.toLowerCase())
  const merged = [...base]
  const extras = GENERIC_SERVICE_FAQ_TEMPLATES(entry.name, entry.name.toLowerCase())

  for (const faq of extras) {
    if (merged.length >= 20) break
    if (!merged.some((f) => f.question === faq.question)) merged.push(faq)
  }

  return merged.slice(0, 20).map((f) => ({
    question: f.question.replace(/^Q\d+\.\s*/i, ''),
    answer: f.answer,
  }))
}
