import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'
import HomePage from '@/component/home/HomePage'
import SEO from '@/component/SEO/SEO'
import Head from 'next/head'
import NewHero from '@/component/home/NewHero'
import WhyChooseSection from '@/component/home/WhyChooseSection'
import OurServicesSection from '@/component/home/OurServicesSection'
import OurSEOProcess from '@/component/home/OurSEOProcess'
import AverageClientResults from '@/component/home/AverageClientResults'
import IndustriesSection from '@/component/home/IndustriesSection'
import BlogSection from '@/component/home/BlogSection'
import Testimonial from '@/component/home/Testimonial'
import Teams from '@/component/home/Teams'
import FAQSection from '@/component/home/FAQSection'
import SEOSolution from '@/component/home/SEO_Solution'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.seoindiatech.com/#organization',
        name: 'SEO India Tech',
        url: 'https://www.seoindiatech.com/',
        logo:
          'https://www.seoindiatech.com/wp-content/uploads/2024/01/logo.png',
        description:
          'SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-XXXXXXXXXX',
          contactType: 'Customer Service',
          areaServed: 'Worldwide',
        },
        sameAs: [
          'https://www.facebook.com/people/SEOIndiatech/',
          'https://www.instagram.com/seoindiatech/',
          'https://x.com/seoindiatech411',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.seoindiatech.com/#breadcrumbs',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.seoindiatech.com/',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.seoindiatech.com/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does SEO India Tech provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO India Tech offers SEO services, digital marketing, content creation, website development, branding, and performance marketing solutions for businesses of all sizes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I choose SEO India Tech?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'SEO India Tech provides performance based  strategies, transparent reporting, affordable pricing, and expert support to help businesses grow online.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with international clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes, SEO India Tech works with clients worldwide across various industries, delivering tailored solutions for effective online visibility.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <Head>
        <title>Expert SEO & Digital Marketing Services - SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert SEO & digital marketing services in India, boosting your website traffic, rankings, and online visibility for measurable results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <link rel="canonical" href="https://www.seoindiatech.com" />

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>
      <NewHero />
      <WhyChooseSection />
      <OurServicesSection />
      <section className="bg-white dark:bg-gray-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-100/60 dark:border-blue-800/30 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
                How We Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Proven Process &{' '}
              <span className="text-blue-600 dark:text-blue-400">Client Results</span>
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-base max-w-lg mx-auto">
              A systematic approach to SEO that delivers measurable growth for every client.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
            <OurSEOProcess />
            <AverageClientResults />
          </div>
        </div>
      </section>
      <SEOSolution/>
      <IndustriesSection />
      <BlogSection />
      <Testimonial />
      <Teams />
      <FAQSection />
    </>
  )
}
