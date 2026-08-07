import { buildOrganizationNode } from '@/utils/schemaBuilders'
import { buildSpeakableSpecification } from '@/utils/aiSeo'

export default function PremiumServiceSchema({ content, url }) {
  const faqEntities = content.faq.items.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))

  const breadcrumbs = content.hero.breadcrumbs || []
  const breadcrumbItems = breadcrumbs
    .filter((b) => b.href)
    .map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.label,
      item: b.href.startsWith('http') ? b.href : `https://www.seoindiatech.com${b.href}`,
    }))

  if (breadcrumbItems.length) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: breadcrumbItems.length + 1,
      name: content.name,
      item: url,
    })
  }

  const graph = [
    {
      '@type': 'WebSite',
      '@id': 'https://www.seoindiatech.com/#website',
      url: 'https://www.seoindiatech.com/',
      name: 'SEO India Tech',
      inLanguage: 'en-IN',
    },
    buildOrganizationNode(),
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: breadcrumbItems.length
        ? breadcrumbItems
        : [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.seoindiatech.com/' },
            { '@type': 'ListItem', position: 2, name: content.name, item: url },
          ],
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: content.seo.title,
      description: content.seo.description,
      isPartOf: { '@id': 'https://www.seoindiatech.com/#website' },
      about: { '@id': 'https://www.seoindiatech.com/#organization' },
      inLanguage: 'en-IN',
      speakable: buildSpeakableSpecification(),
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: content.hero.h1,
      description: content.seo.description,
      serviceType: content.name,
      provider: { '@id': 'https://www.seoindiatech.com/#organization' },
      areaServed: ['India', 'United States', 'United Kingdom', 'Australia', 'UAE', 'Canada'],
      url,
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': `${url}#webpage` },
      mainEntity: faqEntities,
    },
  ]

  if (content.process?.steps?.length) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#process`,
      name: content.process.title,
      description: content.process.subtitle,
      step: content.process.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
