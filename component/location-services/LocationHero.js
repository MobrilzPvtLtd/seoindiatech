import PageHero from '@/component/ui/PageHero'

export default function LocationHero({ heading, content, imageSrc, imageAlt }) {
  const cityMatch = heading.match(/in (.+)$/)
  const cityForAlt = cityMatch ? cityMatch[1] : 'your city'
  const heroImage = imageSrc || '/images/seo-banner.jpg'
  const altText = imageAlt || `Professional SEO services illustration for ${cityForAlt}`

  return (
    <PageHero
      title={heading}
      image={heroImage}
      imageAlt={altText}
      primaryCta={{ label: 'Get Your Free SEO Audit', href: '/contact-us' }}
    >
      <div className="mt-2 space-y-4 text-left">
        {content?.map((para, index) => (
          <p key={index} className="text-base sm:text-lg text-body leading-relaxed text-justify">
            {para}
          </p>
        ))}
      </div>
    </PageHero>
  )
}
