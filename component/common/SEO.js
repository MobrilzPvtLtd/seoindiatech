import Head from 'next/head'
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '@/utils/siteConfig'

/**
 * Reusable SEO head tags: title, description, canonical, robots, Open Graph, Twitter.
 * @param {string} path - Site path e.g. "/contact-us" (used for canonical + og:url)
 */
export default function SEO({
  title,
  description,
  path = '/',
  canonical,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1',
  noindex = false,
  lcpImage,
}) {
  const canonicalUrl = canonical || absoluteUrl(path)
  const ogImage = image?.startsWith('http') ? image : absoluteUrl(image)
  const robotsContent = noindex ? 'noindex, follow' : robots

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      {lcpImage && (
        <link
          rel="preload"
          as="image"
          href={lcpImage}
          fetchPriority="high"
          media="(min-width: 768px)"
        />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
