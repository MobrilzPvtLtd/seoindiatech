/** Additional city location pages - appended to main locations array */

function buildCityPage(city, slugSuffix, localContext) {
  const slug = `seo-services-in-${slugSuffix}`
  return {
    slug,
    city,
    title: `SEO Services in ${city} | SEO India Tech`,
    description: `Get SEO services in ${city} to improve rankings, local visibility, and leads. Local SEO, technical fixes, and content from SEO India Tech.`,
    heading: `Best SEO Services in ${city}`,
    content: [
      `If your business in ${city} is not visible on Google, competitors capture the leads you should be winning. SEO services in ${city} help clinics, retailers, IT firms, real estate agents, restaurants, and service businesses show up when customers search on mobile and desktop. SEO India Tech builds strategies with clear steps, steady execution, and reporting you can actually understand.`,
      `Our SEO services in ${city} focus on rankings that bring real enquiries - not vanity traffic. We start with your business goals, target customers, and service areas, then build a plan covering on-page SEO, technical fixes, content, and local visibility including Google Business Profile optimization.`,
    ],
    heroImage: '/images/seo-company-1.png',
    pageContent: `
      <h2>Why SEO services in ${city} matter for local growth</h2>
      <p>${localContext} When your pages target the right search intent, SEO services in ${city} bring in people already looking for what you sell. Consistent local listings increase calls, direction requests, and form submissions.</p>

      <h2>What you get with our SEO services in ${city}</h2>
      <h3>Keyword and intent mapping</h3>
      <p>We research what your customers type into Google and structure pages so each targets a specific intent. This is the foundation for strong SEO services in ${city}.</p>

      <h3>On-page SEO that supports conversions</h3>
      <p>We improve titles, headings, internal links, and content so Google reads your pages clearly. The goal is more calls, forms, and messages - not just higher rankings.</p>

      <h3>Technical SEO fixes</h3>
      <p>Slow pages, crawl errors, and mobile issues block growth. We audit and fix technical gaps including Core Web Vitals basics, index checks, and sitemap updates.</p>

      <h3>Local SEO for ${city} map rankings</h3>
      <p>For local businesses, map rankings drive high-quality leads. We improve Google Business Profile visibility, NAP consistency, reviews, and local landing pages for key areas in ${city}.</p>

      <h2>Why businesses choose SEO India Tech in ${city}</h2>
      <ul>
        <li>14+ years of SEO delivery experience</li>
        <li>Transparent weekly reporting tied to leads and revenue</li>
        <li>White-hat methods aligned with Google guidelines</li>
        <li>AI SEO and traditional SEO under one team</li>
        <li>Dedicated account manager on every project</li>
      </ul>
    `,
    faqs: [
      {
        question: `How long does it take to see SEO results in ${city}?`,
        answer: `Most businesses see measurable improvements within 3-6 months. Competitive markets in ${city} may take longer, but we provide monthly reports so you always know where you stand.`,
      },
      {
        question: `Do you offer local SEO for Google Maps in ${city}?`,
        answer: `Yes. We optimize your Google Business Profile, local citations, reviews, and location pages to improve map pack visibility across ${city} and surrounding areas.`,
      },
      {
        question: `What industries do you serve in ${city}?`,
        answer: `We work with healthcare, real estate, e-commerce, IT, education, home services, restaurants, and more - with strategies adapted to each sector's buyer journey.`,
      },
      {
        question: `How much do SEO services cost in ${city}?`,
        answer: `Pricing depends on competition, website size, and goals. We offer flexible packages starting from affordable plans for local businesses. Contact us for a free audit and custom quote.`,
      },
      {
        question: `Can you help if I already have a website but low rankings?`,
        answer: `Yes. We audit technical SEO, content gaps, and local signals, then prioritize fixes that unblock rankings and conversions fastest.`,
      },
      {
        question: `How do I get started with SEO in ${city}?`,
        answer: `Book a free consultation. We review your site, discuss goals, and propose a prioritized roadmap with timelines and KPIs.`,
      },
    ],
  }
}

export const extraLocations = [
  buildCityPage(
    'Bangalore',
    'bangalore',
    'Bangalore is India\'s tech and startup hub with intense competition for organic search visibility.'
  ),
  buildCityPage(
    'Chennai',
    'chennai',
    'Chennai businesses compete across manufacturing, IT, healthcare, and retail - all increasingly search-driven.'
  ),
  buildCityPage(
    'Kolkata',
    'kolkata',
    'Kolkata\'s growing digital economy means more customers search online before they buy or book services.'
  ),
  buildCityPage(
    'Gurgaon',
    'gurgaon',
    'Gurgaon enterprises and local businesses need strong SEO to stand out in the competitive NCR market.'
  ),
]
