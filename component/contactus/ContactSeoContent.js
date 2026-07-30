import Link from 'next/link'
import { CheckCircle, MapPin } from 'lucide-react'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

const services = [
  { label: 'AI SEO Services', href: '/services/ai-seo' },
  { label: 'Local SEO', href: '/services/local-seo-service' },
  { label: 'PPC Advertising', href: '/services/ppc-advertising' },
  { label: 'Content Marketing', href: '/services/content-marketing' },
  { label: 'SEO Packages', href: '/seo-packages' },
  { label: 'Industry SEO', href: '/industries' },
]

const cities = [
  { label: 'Delhi', href: '/seo-services/seo-services-in-delhi' },
  { label: 'Mumbai', href: '/seo-services/seo-services-in-mumbai' },
  { label: 'Noida', href: '/seo-services/seo-services-in-noida' },
  { label: 'Bangalore', href: '/seo-services/seo-services-in-bangalore' },
  { label: 'Chennai', href: '/seo-services/seo-services-in-chennai' },
  { label: 'Hyderabad', href: '/seo-services/seo-services-in-hyderabad' },
]

export default function ContactSeoContent() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5">
                Talk to India&apos;s AI-Powered SEO &amp; Digital Marketing Experts
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                SEO India Tech is a full-service digital growth agency based in Noida, serving businesses across India and worldwide. Whether you need SEO, PPC, content marketing, or a complete digital strategy, our team delivers measurable results with transparent weekly reporting.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With 14+ years of experience and 500+ clients served, we help local businesses, e-commerce brands, SaaS companies, and enterprises turn search visibility into real revenue. Book a free consultation and get a clear roadmap with timelines, KPIs, and the right mix of services for your goals.
              </p>
              <ul className="space-y-3">
                {[
                  'Free website audit and strategy call',
                  'Dedicated account manager on every project',
                  'White-hat, Google-compliant SEO only',
                  'Weekly performance dashboards',
                  'Services in English with India and global timezone support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services you can enquire about</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-medium text-gray-800 dark:text-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                SEO services by city
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-full border border-gray-200 dark:border-gray-700 px-4 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisibleFaq faqs={PAGE_FAQS.contact} />
    </>
  )
}
