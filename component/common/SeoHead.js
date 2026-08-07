import SEO from './SEO'
import JsonLd from './JsonLd'

/**
 * Standard page head: meta tags + optional JSON-LD schema.
 * Use on every page for consistent SEO, OG, Twitter, and canonical tags.
 */
export default function SeoHead({
  title,
  description,
  path = '/',
  canonical,
  image,
  type = 'website',
  noindex = false,
  schema,
  lcpImage,
  publishedTime,
  modifiedTime,
  author,
}) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        path={path}
        canonical={canonical}
        image={image}
        type={type}
        noindex={noindex}
        lcpImage={lcpImage}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        author={author}
      />
      <JsonLd data={schema} />
    </>
  )
}
