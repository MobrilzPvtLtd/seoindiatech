import Link from 'next/link'

export default function SeoPackageContent() {
  return (
    <>
      <section className="bg-white dark:bg-background py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-heading mb-6 text-center">
            Flexible SEO Packages for Every Business Stage
          </h2>
          <p className="text-muted leading-relaxed mb-5">
            Choosing the right SEO package can feel overwhelming when every agency promises rankings. At SEO India Tech, our packages are built around what actually moves the needle: technical health, keyword-targeted content, authoritative backlinks, and local visibility where it matters. Each tier scales with your ambition - from a new local business establishing its first online presence to an enterprise brand competing nationally.
          </p>
          <p className="text-muted leading-relaxed mb-5">
            Our Starter package is ideal for businesses launching their SEO journey. Growth adds competitive keyword targeting and expanded content. Platinum includes advanced link building, e-commerce optimization, and multi-location support. The Dedicated package gives you a full SEO team - strategist, content writer, and technical specialist - working exclusively on your account.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Every package includes transparent monthly reporting, a dedicated account manager, and strategies aligned with Google&apos;s guidelines. No black-hat shortcuts. No vanity metrics. We track rankings, organic traffic, leads, and revenue impact so you always know what your investment delivers.{' '}
            <Link href="/contact-us" className="text-primary dark:text-accent font-semibold hover:underline">
              Request a custom quote
            </Link>{' '}
            or compare plans in the table above.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { stat: '500+', label: 'Clients served' },
              { stat: '14+', label: 'Years experience' },
              { stat: 'Weekly', label: 'Progress reports' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-background dark:bg-primary/15 p-5">
                <div className="text-2xl font-bold text-primary dark:text-accent">{item.stat}</div>
                <div className="text-sm text-muted mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
