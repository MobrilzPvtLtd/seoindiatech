import Link from 'next/link'
import { CheckCircle, MapPin } from 'lucide-react'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'

const services = [
  { label: 'SEO Services India', href: '/services/seo' },
  { label: 'Technical SEO', href: '/services/technical-seo' },
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
      <section className="bg-white dark:bg-background py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-heading mb-5">
                Contact SEO India Tech for a Free Consultation
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                SEO India Tech is a full-service digital growth agency based in Noida, serving businesses across India and worldwide. Use this page to book a consultation, request a quote, or ask about a specific project.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                For our primary{' '}
                <Link href="/services/seo" className="text-primary hover:underline font-medium">
                  SEO services in India
                </Link>
                , including technical SEO, content, and local programs, visit the SEO services hub—not this contact page.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Book a free consultation for timelines, deliverables, and the right mix of services for your goals. For service details and pricing context, see our{' '}
                <Link href="/seo-packages" className="text-primary hover:underline font-medium">
                  SEO packages
                </Link>
                {' '}page or the SEO services hub linked above.
              </p>
              <ul className="space-y-3">
                {[
                  'Free website audit and strategy call',
                  'Dedicated account manager on every project',
                  'White-hat, Google-compliant SEO only',
                  'Weekly performance dashboards',
                  'Services in English with India and global timezone support',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-body text-sm">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading mb-4">Services you can enquire about</h3>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-lg border border-border px-4 py-3 text-sm font-medium text-heading dark:text-gray-200 hover:border-blue-400 hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold text-heading mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                SEO services by city
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-body hover:border-blue-400 hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisibleFaq faqs={PAGE_FAQS.contact} minCount={8} showSchema />
    </>
  )
}
