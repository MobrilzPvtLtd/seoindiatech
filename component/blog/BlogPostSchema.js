import { SITE_URL, ORGANIZATION } from '@/utils/siteConfig'
import { BLOG_AUTHOR } from '@/utils/blog/blogAuthor'

export default function BlogPostSchema({ post, url }) {
  const faqEntities = (post.faqs || []).map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'SEO India Tech',
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'SEO India Tech',
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: ORGANIZATION.logo },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.metaTitle,
      description: post.metaDesc,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.metaDesc,
      image: `${SITE_URL}${post.image}`,
      url,
      datePublished: post.datePublished,
      dateModified: post.dateModified || post.datePublished,
      author: {
        '@type': 'Person',
        name: post.author?.name || BLOG_AUTHOR.name,
        url: post.author?.url || BLOG_AUTHOR.url,
        jobTitle: post.author?.jobTitle || BLOG_AUTHOR.jobTitle,
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      articleSection: post.category,
      keywords: post.keywords?.primary,
      inLanguage: 'en-IN',
    },
  ]

  if (faqEntities.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqEntities,
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  )
}
