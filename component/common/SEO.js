

import React from 'react'

function SEO({title, description, canonical}) {
  return (
   <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <link rel="canonical" href={canonical} />
    </Head>
  )
}

export default SEO

