import { BLOG_CATALOG, getBlogCatalogEntry } from './blogCatalog.js'

const SERVICE_LABELS = {
  '/services/seo': 'SEO services',
  '/services/ai-seo': 'AI SEO services',
  '/services/generative-engine-optimization': 'generative engine optimization (GEO)',
  '/services/answer-engine-optimization': 'answer engine optimization (AEO)',
  '/services/local-seo-service': 'local SEO services',
  '/services/gbp-optimization': 'GBP optimization',
  '/services/content-marketing': 'content marketing services',
  '/services/online-reputation-management': 'online reputation management',
  '/services/small-business-seo': 'small business SEO',
  '/services/ui-ux-design': 'UI/UX design services',
  '/seo-packages': 'SEO packages',
  '/industries': 'industry SEO programs',
  '/blog': 'SEO insights blog',
  '/contact-us': 'free SEO audit',
}

const INDUSTRY_LABELS = {
  '/industries/realtor-seo': 'realtor SEO',
  '/industries/dentist-seo': 'dentist SEO',
  '/industries/hvac-seo': 'HVAC SEO',
  '/industries/plastic-surgery-seo': 'plastic surgery SEO',
  '/industries/doctor-physician-seo': 'physician SEO',
  '/industries/personal-injury-seo': 'personal injury SEO',
  '/industries/plumber-seo': 'plumber SEO',
  '/industries/architect-seo': 'architect SEO',
  '/industries/cpa-firm-seo': 'CPA firm SEO',
  '/industries/interior-designer-seo': 'interior designer SEO',
  '/industries/home-builder-and-remodeler-seo': 'home builder SEO',
}

function labelForHref(href, map) {
  if (map[href]) return map[href]
  const slug = href.split('/').filter(Boolean).pop()
  return slug ? slug.replace(/-/g, ' ') : href
}

function anchor(href, text) {
  return `<a href="${href}" class="text-primary font-semibold hover:underline">${text}</a>`
}

function uniqueHrefs(hrefs) {
  return [...new Set(hrefs.filter(Boolean))]
}

function getRelatedSlugs(entry) {
  if (entry.relatedBlogSlugs?.length) return entry.relatedBlogSlugs

  const clusterMates = BLOG_CATALOG.filter(
    (b) => b.cluster === entry.cluster && b.slug !== entry.slug
  ).map((b) => b.slug)

  const serviceMates = BLOG_CATALOG.filter(
    (b) =>
      b.slug !== entry.slug &&
      (b.serviceLinks || []).some((l) => (entry.serviceLinks || []).includes(l))
  )
    .map((b) => b.slug)
    .slice(0, 2)

  return uniqueHrefs([...clusterMates, ...serviceMates]).slice(0, 4)
}

export function enrichTopicWithLinks(entry, topic) {
  const services = uniqueHrefs(entry.serviceLinks || [])
    .slice(0, 3)
    .map((href) => anchor(href, labelForHref(href, SERVICE_LABELS)))

  const industries = uniqueHrefs(entry.industryLinks || [])
    .slice(0, 2)
    .map((href) => anchor(href, labelForHref(href, INDUSTRY_LABELS)))

  const relatedSlugs = getRelatedSlugs(entry)
  const relatedArticles = relatedSlugs
    .map((slug) => getBlogCatalogEntry(slug))
    .filter(Boolean)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      href: `/blog/${post.slug}`,
    }))

  const linkBits = []
  if (services.length) linkBits.push(`our ${services.join(', ')}`)
  if (industries.length) {
    linkBits.push(
      `industry programs such as ${industries.join(' and ')}`
    )
  }

  const internalLinkIntro =
    linkBits.length > 0
      ? `As you read, you may also want to explore ${linkBits.join(', and ')}.`
      : null

  const relatedListItems = relatedArticles.map(
    (post) => `${anchor(post.href, post.title)}`
  )

  return {
    ...topic,
    internalLinkIntro,
    relatedArticles,
    relatedListItems,
  }
}
