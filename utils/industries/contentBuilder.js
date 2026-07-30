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
<p>Slow templates, broken redirects, duplicate URLs, and poor mobile usability silently drain ${labelLower} rankings. We audit crawl budget, fix Core Web Vitals issues, implement schema (Service, LocalBusiness, FAQ where appropriate), and ensure analytics capture calls, chats, and form conversions accurately. Technical health protects ${kw} gains during algorithm updates and seasonal traffic spikes.</p>
`

  const aiHtml = `
<h2>AI search &amp; answer engine visibility</h2>
<p>Patients, homeowners, and commercial buyers increasingly ask AI assistants for provider recommendations. Our ${kw} includes Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO)-structuring content so your ${labelLower} brand can surface in AI Overviews, voice results, and chat-based discovery when users ask "who is the best ${labelLower} near me" or procedure-specific questions in your vertical.</p>
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
    metricsHtml +
    processHtml +
    ctaHtml
  )
}
