import { buildOrganizationNode } from '@/utils/schemaBuilders'
import { buildSpeakableSpecification } from '@/utils/aiSeo'

const MEDICAL_SPECIALTY_MAP = {

  'plastic-surgery-seo': 'PlasticSurgery',

  'dentist-seo': 'Dentistry',

  'orthodontist-seo': 'Orthodontics',

  'optometrist-seo': 'Optometry',

  'fertility-clinic-seo': 'ReproductiveMedicine',

  'doctor-physician-seo': 'Physician',

  'physiotherapy-seo': 'Physiotherapy',

  'chiropractor-seo': 'Chiropractic',

}



export default function PremiumIndustrySchema({ content, url }) {

  const faqEntities = content.faq.items.map((faq) => ({

    '@type': 'Question',

    name: faq.question,

    acceptedAnswer: { '@type': 'Answer', text: faq.answer },

  }))



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

      itemListElement: [

        {

          '@type': 'ListItem',

          position: 1,

          name: 'Home',

          item: 'https://www.seoindiatech.com/',

        },

        {

          '@type': 'ListItem',

          position: 2,

          name: 'Industries',

          item: 'https://www.seoindiatech.com/industries',

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

      serviceType: `${content.name} SEO`,

      provider: { '@id': 'https://www.seoindiatech.com/#organization' },

      areaServed: ['India', 'United States', 'United Kingdom', 'Australia', 'UAE', 'Canada'],

    },

    {

      '@type': 'FAQPage',

      '@id': `${url}#faq`,

      isPartOf: { '@id': `${url}#webpage` },

      mainEntity: faqEntities,

    },

  ]



  if (content.isHealthcare && MEDICAL_SPECIALTY_MAP[content.slug]) {

    graph.push({

      '@type': 'MedicalBusiness',

      '@id': `${url}#medicalbusiness`,

      name: `SEO India Tech | ${content.name} SEO Services`,

      description: content.seo.description,

      url,

      medicalSpecialty: MEDICAL_SPECIALTY_MAP[content.slug],

      provider: { '@id': 'https://www.seoindiatech.com/#organization' },

    })

  }



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


