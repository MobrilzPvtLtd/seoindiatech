import Link from 'next/link'
import SeoHead from '@/component/common/SeoHead'

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | SEO India Tech"
        description="The page you requested could not be found. Browse our SEO services, blog, or contact us for help."
        path="/404"
        noindex
      />
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-background px-6 pt-32 pb-16">
        <div className="max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">Page not found</h1>
          <p className="text-muted text-lg mb-8">
            The URL may have changed or the page no longer exists. Try one of these paths instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors"
            >
              Homepage
            </Link>
            <Link
              href="/services/seo"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-heading font-semibold rounded-full hover:border-primary transition-colors"
            >
              SEO Services
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-heading font-semibold rounded-full hover:border-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
