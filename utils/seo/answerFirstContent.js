/**
 * Selective answer-first blocks for AI/search clarity (40–80 words where natural).
 * Used on priority service and blog pages only.
 */

const SERVICE_ANSWERS = {
  seo: {
    question: 'What are SEO services?',
    answer:
      'SEO services improve how a website ranks in organic search results on Google and Bing. SEO India Tech delivers technical audits, keyword strategy, content, link building, and reporting so businesses earn qualified traffic from high-intent searches—not just clicks.',
    takeaways: [
      'Combines technical health, content, and authority signals',
      'Supports both traditional rankings and AI answer discovery',
      'Measured with leads, revenue, and visibility KPIs',
    ],
  },
  'ai-seo': {
    question: 'What is AI SEO?',
    answer:
      'AI SEO optimizes your website and content for both traditional search rankings and AI-generated answers in Google AI Overviews, ChatGPT, Gemini, and similar tools. It combines solid technical SEO with concise definitions, FAQ structure, entity clarity, and citation-ready content.',
    takeaways: [
      'Builds on traditional SEO fundamentals',
      'Structures pages for AI summaries and citations',
      'Pairs with GEO and AEO for generative search',
    ],
  },
  'answer-engine-optimization': {
    question: 'What is Answer Engine Optimization (AEO)?',
    answer:
      'Answer Engine Optimization (AEO) formats content so conversational AI and voice assistants can extract clear, accurate answers. SEO India Tech uses direct response paragraphs, structured FAQs, definitions, and comparison sections that match how people ask questions in natural language.',
    takeaways: [
      'Targets featured answers and AI-generated summaries',
      'Uses question-based headings and scannable structure',
      'Complements SEO and GEO programs',
    ],
  },
  'generative-engine-optimization': {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer:
      'Generative Engine Optimization (GEO) helps your brand appear in answers produced by generative AI systems such as ChatGPT, Perplexity, and Gemini. It focuses on entity signals, topical depth, trustworthy sourcing, and content structures that models can reference when recommending providers.',
    takeaways: [
      'Improves discoverability in generative AI tools',
      'Relies on E-E-A-T, originality, and clear expertise',
      'Works alongside classic SEO and AEO',
    ],
  },
  'local-seo-service': {
    question: 'What is local SEO?',
    answer:
      'Local SEO helps businesses appear in Google Maps, the local pack, and location-based organic results when nearby customers search for services. SEO India Tech optimizes Google Business Profile, citations, reviews, and city landing pages to drive calls, visits, and bookings.',
    takeaways: [
      'Critical for service-area and multi-location brands',
      'GBP, NAP consistency, and reviews are core signals',
      'Pairs with localized content and conversion tracking',
    ],
  },
  'gbp-optimization': {
    question: 'What is Google Business Profile optimization?',
    answer:
      'Google Business Profile (GBP) optimization improves how your business appears on Google Maps and local search—categories, services, photos, posts, reviews, and Q&A. SEO India Tech aligns GBP data with your website and citations so customers find accurate information and convert.',
    takeaways: [
      'Directly influences map pack visibility',
      'Requires ongoing review and post management',
      'Must match website NAP and service pages',
    ],
  },
  'e-commerce-seo': {
    question: 'What is e-commerce SEO?',
    answer:
      'E-commerce SEO optimizes product pages, categories, filters, and site architecture so online stores rank for commercial searches and convert visitors. SEO India Tech handles technical crawlability, unique product content, schema markup, and internal linking at catalog scale.',
    takeaways: [
      'Focuses on product discoverability and category growth',
      'Fixes duplicate content, thin descriptions, and speed issues',
      'Connects organic traffic to revenue tracking',
    ],
  },
  'content-marketing': {
    question: 'What is SEO content marketing?',
    answer:
      'SEO content marketing creates useful, search-aligned articles, guides, and landing pages that attract qualified visitors and support conversions. SEO India Tech plans topics from keyword intent, builds topical authority, and integrates content with technical SEO and internal links.',
    takeaways: [
      'Targets buyer questions across the funnel',
      'Supports rankings, AI citations, and lead generation',
      'Measured by traffic quality and conversions—not word count',
    ],
  },
  'small-business-seo': {
    question: 'What is small business SEO?',
    answer:
      'Small business SEO helps local and growing companies compete online with focused keyword targets, Google Business Profile work, on-page improvements, and affordable monthly programs. SEO India Tech prioritizes the fixes that produce leads fastest for limited budgets.',
    takeaways: [
      'Lean roadmap with clear monthly deliverables',
      'Local visibility and trust signals matter most early',
      'Scales as revenue and competition increase',
    ],
  },
  'international-seo': {
    question: 'What Is International SEO and Who Needs It?',
    answer:
      'International SEO helps businesses rank in target countries and languages—not just in their home market. SEO India Tech builds hreflang-ready site structures, country-specific keyword plans, and technical foundations so each market can be discovered independently without thin doorway pages or duplicated geo clones.',
    takeaways: [
      'Indian exporters and brands targeting USA, UK, Europe, and other export markets',
      'Businesses needing distinct keyword research per country—not translated copies of domestic pages',
      'Sites scaling globally with hreflang, URL structure, and reporting separated by country or language',
    ],
  },
}

const BLOG_ANSWERS = {
  'seo-trends-european-businesses-2026': {
    question: 'What SEO trends matter for European businesses in 2026?',
    answer:
      'European businesses in 2026 should prioritize AI search visibility, multilingual and hreflang SEO, strong E-E-A-T signals, local map presence, and technical performance. Search is shifting toward AI summaries, so concise answers, structured FAQs, and entity-rich content are as important as classic rankings.',
  },
  'ai-seo-vs-traditional-seo-2026': {
    question: 'What is the difference between AI SEO and traditional SEO?',
    answer:
      'Traditional SEO focuses on ranking web pages in search results through technical health, content, and links. AI SEO adds answer formatting, entity clarity, and citation-ready structure so Google AI Overviews and tools like ChatGPT can understand and reference your brand. Most businesses need both.',
  },
  'google-ai-overviews-changing-business-seo': {
    question: 'How are Google AI Overviews changing SEO?',
    answer:
      'Google AI Overviews summarize answers at the top of search results, which can reduce clicks to websites but increases the value of being cited as a source. Businesses should publish clear, expert-led content, FAQ sections, and strong E-E-A-T signals so Google can trust and reference their pages.',
  },
  'geo-generative-engine-optimization-guide': {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer:
      'GEO is the practice of structuring content so generative AI systems can discover, understand, and cite your brand when users ask questions. It includes topical depth, original insights, definitions, FAQs, internal links, and trustworthy sourcing—without replacing fundamental SEO and technical site health.',
  },
  'chatgpt-seo-ai-search-organic-traffic': {
    question: 'How does ChatGPT and AI search affect organic traffic?',
    answer:
      'AI search tools answer questions directly, which can shift some traffic away from traditional blue-link clicks. However, brands with authoritative, well-structured content can still earn referrals, branded discovery, and citations. Track AI referral traffic and keep investing in helpful, original content.',
  },
  'technical-seo-checklist-enterprise-websites': {
    question: 'What is technical SEO for enterprise websites?',
    answer:
      'Technical SEO for enterprise sites ensures search engines can crawl, index, and understand large, complex websites. Priorities include site architecture, Core Web Vitals, canonicalization, index bloat control, structured data, log analysis, and governance across teams, markets, and staging environments.',
  },
  'local-seo-checklist-multi-location-europe': {
    question: 'What is multi-location local SEO in Europe?',
    answer:
      'Multi-location local SEO in Europe aligns Google Business Profile listings, NAP data, localized landing pages, and reviews for each branch while managing language and country variations. Consistent location signals and unique local content help each office rank in its service area.',
  },
  'google-business-profile-optimization-guide': {
    question: 'How do you optimize a Google Business Profile?',
    answer:
      'Optimize GBP by completing categories and services, adding accurate hours and service areas, uploading real photos, posting updates, collecting reviews, and responding professionally. Match GBP details with your website and citations so Google trusts your business data across local search.',
  },
  'complete-eeat-guide-business-websites': {
    question: 'What is E-E-A-T for business websites?',
    answer:
      'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness—quality signals Google uses especially for YMYL topics. Demonstrate it with clear authorship, accurate facts, transparent business information, reputable sources, and content that reflects real experience.',
  },
  'local-vs-national-vs-international-seo': {
    question: 'What is the difference between local, national, and international SEO?',
    answer:
      'Local SEO targets nearby customers via Maps and city searches. National SEO competes across a country for broader keywords. International SEO adds hreflang, market-specific content, and technical setup for multiple countries or languages. The right approach depends on where your customers actually search.',
  },
  'what-is-ai-seo-why-business-needs-it': {
    question: 'What is AI SEO and why does your business need it?',
    answer:
      'AI SEO optimizes content for both traditional search rankings and AI answer systems like Google AI Overviews and ChatGPT. Businesses need it because search is shifting toward summarized answers—clear definitions, FAQs, and trustworthy expertise help you stay visible when users do not click through to multiple sites.',
  },
  'ppc-vs-seo-which-is-better': {
    question: 'Is PPC or SEO better for your business?',
    answer:
      'PPC is better when you need immediate visibility or want to test demand with paid ads. SEO is better for compounding organic traffic and lower long-term cost per lead. Most businesses use PPC for short-term wins and SEO for sustainable growth—they are complementary, not either-or.',
  },
  'how-google-ai-overviews-are-changing-seo': {
    question: 'How are Google AI Overviews changing SEO?',
    answer:
      'Google AI Overviews place AI-generated summaries above traditional search results. SEO now includes earning citations inside the overview box as well as ranking in blue links. Clear answers, structured headings, and helpful content improve your chances of being featured as a trusted source.',
  },
}

export function getServiceAnswerFirst(slug, serviceName) {
  if (SERVICE_ANSWERS[slug]) return SERVICE_ANSWERS[slug]

  const label = serviceName || slug.replace(/-/g, ' ')
  return {
    question: `What is ${label}?`,
    answer: `${serviceName} from SEO India Tech helps businesses improve search visibility, trust, and conversions through strategy, implementation, and transparent reporting tailored to your market and goals.`,
    takeaways: [
      'Integrates with SEO, content, and analytics',
      'Delivered with weekly KPI reporting',
      'Aligned to leads and revenue—not vanity metrics',
    ],
  }
}

export function getBlogAnswerFirst(slug, entry) {
  if (BLOG_ANSWERS[slug]) return BLOG_ANSWERS[slug]

  if (!entry) return null

  return {
    question: `What should businesses know about ${entry.primaryKeyword || entry.title}?`,
    answer: `${entry.title}. This guide from SEO India Tech explains practical steps, common mistakes, and what to prioritize next for businesses targeting organic and AI search visibility.`,
  }
}

export function getHubAnswerFirst(hubSlug, hubTitle, childTitles = []) {
  const children = childTitles.length ? childTitles.join(', ') : 'specialized programs'
  return {
    question: `What ${hubTitle.toLowerCase()} does SEO India Tech provide?`,
    answer: `SEO India Tech offers ${children} with integrated strategy, white-hat execution, AI-ready content structure, and weekly reporting. Programs are designed for businesses that need measurable growth across search, content, and conversion channels.`,
    takeaways: childTitles.slice(0, 3).map((t) => `${t} with dedicated strategists`),
  }
}
