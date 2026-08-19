import { buildOrganizationNode } from '@/utils/schemaBuilders'
import { buildSpeakableSpecification } from '@/utils/aiSeo'

const SITE_URL = 'https://www.seoindiatech.com'

/**
 * Industry landing pages are agency Service offers — not LocalBusiness/MedicalBusiness locations.
 * MedicalBusiness caused GSC/audit errors (missing address, invalid provider, medicalSpecialty).
 */
export default function PremiumIndustrySchema({ content, url }) {
  const faqEntities = content.faq.items.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  }))

  const serviceNode = {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: content.hero.h1,
    description: content.seo.description,
    url,
    serviceType: `${content.name} SEO`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: ['India', 'United States', 'United Kingdom', 'Australia', 'UAE', 'Canada'],
    mainEntityOfPage: { '@id': `${url}#webpage` },
  }

  if (content.isHealthcare) {
    serviceNode.audience = {
      '@type': 'BusinessAudience',
      audienceType: `${content.name} practices and healthcare providers`,
    }
    serviceNode.category = 'Healthcare SEO Services'
  }

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'SEO India Tech',
      inLanguage: 'en-IN',
    },
    buildOrganizationNode(),
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumbs`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Industries',
          item: `${SITE_URL}/industries`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: content.name,
          item: url,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: content.seo.title,
      description: content.seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: { '@id': `${url}#service` },
      inLanguage: 'en-IN',
      speakable: buildSpeakableSpecification(),
    },
    serviceNode,
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

  const schema = {
    '@context': 'https://schema.org',
    '@graph': graph,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
