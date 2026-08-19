/**
 * Assembles unique industry profiles into 1200+ word pages + 8-10 FAQs.
 */
import { getIndustryProfile } from './profiles'

export function buildIndustryPage(entry) {
  const profile = getIndustryProfile(entry.slug)
  if (!profile) {
    throw new Error(`Missing unique profile for industry slug: ${entry.slug}`)
  }

  const { slug, title, label, categoryTitle, heroImage } = entry
  const labelLower = label.toLowerCase()

  const description =
    profile.metaDescription ||
    `Expert ${title} from SEO India Tech - local SEO, AI search visibility, and lead-focused content for ${labelLower} businesses worldwide. Free audit.`

  const heading = profile.heading || `${title} Services`
  const content = profile.hero
  const pageContent = assemblePageHtml(entry, profile)
  const faqs = profile.faqs.slice(0, 10)

  return {
    slug,
    name: label,
    title: `${title} | SEO India Tech`,
    description,
    heading,
    content,
    heroImage,
    pageContent,
    faqs,
    categoryId: entry.categoryId,
    categoryTitle,
  }
}

function assemblePageHtml(entry, profile) {
  const { title, label } = entry
  const labelLower = label.toLowerCase()
  const kw = title

  const whyHtml = `
<h2>${profile.why.title}</h2>
${profile.why.paragraphs.map((p) => `<p>${p}</p>`).join('\n')}
`

  const servicesHtml = `
<h2>What our ${kw} program delivers</h2>
<p>Every deliverable maps to measurable outcomes for ${labelLower} businesses-calls, bookings, form fills, and pipeline-not vanity rankings alone.</p>
<ol>
${profile.services
  .map(
    (s) =>
      `<li><h3>${s.title}</h3><p>${s.body}</p></li>`
  )
  .join('\n')}
</ol>
`

  const localHtml = `
<h2>Local search strategy for ${label} brands</h2>
<p>${profile.local}</p>
<p>We align Google Business Profile categories, service areas, and on-site location signals with the neighborhoods and markets you actually serve. Review velocity, photo updates, and Q&amp;A monitoring are part of ongoing ${kw}-not one-time setup tasks. Multi-location ${labelLower} operators receive branch-level tracking, localized landing pages, and consolidated executive dashboards.</p>
`

  const complianceHtml = profile.compliance
    ? `<h2>Compliance &amp; quality standards</h2><p>${profile.compliance}</p>`
    : ''

  const technicalHtml = `
<h2>Technical SEO &amp; site performance</h2>
<p>Slow templates, broken redirects, duplicate URLs, and poor mobile usability silently drain ${labelLower} rankings. We audit crawl budget, fix Core Web Vitals issues, implement Service and FAQ schema where it matches the page, and ensure analytics capture calls, chats, and form conversions accurately. Technical health protects ${kw} gains during algorithm updates and seasonal traffic spikes.</p>
`

  const aiHtml = `
<h2>AI search &amp; answer engine visibility</h2>
<p>Patients, homeowners, and commercial buyers increasingly ask AI assistants for provider recommendations. Our ${kw} includes Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)-structuring content so your ${labelLower} brand can surface in AI Overviews, voice results, and chat-based discovery when users ask "who is the best ${labelLower} near me" or procedure-specific questions in your vertical.</p>
<p>We format service pages with concise answer blocks, FAQ schema, comparison tables, and expert-byline signals so Google AI Overviews and third-party answer engines can cite your ${labelLower} business with confidence.</p>
`

  const gmbHtml = `
<h2>Google Business Profile (GMB) optimization</h2>
<p>Map pack visibility often decides which ${labelLower} provider gets the call. We optimize categories, services, service areas, photos, posts, and review workflows so your profile ranks for high-intent local queries and converts views into calls, direction requests, and bookings.</p>
<ul>
<li><strong>Profile completeness</strong> - accurate NAP, hours, attributes, and service menus</li>
<li><strong>Review velocity</strong> - ethical review generation and response templates</li>
<li><strong>Local content</strong> - geo pages and GBP posts aligned to seasonal demand</li>
<li><strong>Performance tracking</strong> - calls, clicks, and map impressions in monthly reports</li>
</ul>
`

  const ppcHtml = `
<h2>PPC advertising for ${label} leads</h2>
<p>Organic SEO builds long-term equity, but paid search captures urgent and high-intent demand immediately. We run ${labelLower} PPC campaigns on Google and Meta with tightly matched landing pages, negative keyword governance, and conversion tracking tied to real leads-not vanity clicks.</p>
<ul>
<li><strong>Search campaigns</strong> for emergency, comparison, and "near me" intent</li>
<li><strong>Local Service Ads</strong> and call-only formats where they fit your vertical</li>
<li><strong>Retargeting</strong> to re-engage visitors who did not convert on first visit</li>
<li><strong>ROAS reporting</strong> with weekly optimization and budget recommendations</li>
</ul>
`

  const smoHtml = `
<h2>SMO &amp; social media growth</h2>
<p>Social proof influences both human buyers and search algorithms. Our Social Media Optimization (SMO) for ${labelLower} brands strengthens visibility on Instagram, Facebook, LinkedIn, and YouTube with platform-native content, engagement routines, and creative that supports trust.</p>
<ul>
<li><strong>Content calendars</strong> with educational posts, proof, and seasonal offers</li>
<li><strong>Community management</strong> - comments, DMs, and reputation monitoring</li>
<li><strong>Creative production</strong> - short-form video, carousels, and testimonial clips</li>
<li><strong>Cross-channel alignment</strong> - social campaigns synced with SEO and PPC themes</li>
</ul>
`

  const metricsHtml = `
<h2>How we measure ${kw} success</h2>
<p>Weekly reporting covers keyword visibility, organic sessions, conversion events, GBP insights, and recommended actions. We prioritize KPIs tied to revenue: qualified leads, cost-per-acquisition trends, and assisted conversions-not inflated traffic from irrelevant terms.</p>
<ul>
<li><strong>Ranking growth</strong> on priority ${labelLower} keywords and map-pack terms</li>
<li><strong>Lead volume</strong> from calls, forms, chats, and booking tools</li>
<li><strong>GBP performance</strong> - views, actions, direction requests, review sentiment</li>
<li><strong>Content impact</strong> - new pages indexed, impressions, engagement depth</li>
<li><strong>Pipeline contribution</strong> - organic-assisted deals tracked in your CRM</li>
</ul>
`

  const processHtml = `
<h2>Our ${kw} implementation process</h2>
<ul>
<li><strong>Phase 1 - Discovery (Week 1-2):</strong> Technical audit, competitor gap analysis, keyword mapping, and conversion path review for your ${labelLower} website.</li>
<li><strong>Phase 2 - Foundation (Week 3-6):</strong> Critical fixes, core service pages, GBP alignment, and tracking validation.</li>
<li><strong>Phase 3 - Growth (Month 2+):</strong> Content production, local expansion, link earning, and AI-search optimization.</li>
<li><strong>Phase 4 - Scale:</strong> Monthly reporting, seasonal campaign adjustments, and budget alignment with demand cycles in your industry.</li>
</ul>
`

  const ctaHtml = `
<h2>Why SEO India Tech for ${kw}</h2>
<p>SEO India Tech delivers 14+ years of global SEO, AI-enabled workflows, and accountable reporting for ${labelLower} brands across India, USA, UK, Australia, UAE, and Europe. Our ${kw} programs are white-hat, transparent, and built for durable growth-not shortcuts that risk your domain.</p>
<p>Book a free consultation for a customized ${kw} roadmap with timelines, KPIs, and clear next steps for your ${labelLower} business.</p>
`

  return (
    whyHtml +
    servicesHtml +
    localHtml +
    complianceHtml +
    technicalHtml +
    aiHtml +
    gmbHtml +
    ppcHtml +
    smoHtml +
    metricsHtml +
    processHtml +
    ctaHtml
  )
}
