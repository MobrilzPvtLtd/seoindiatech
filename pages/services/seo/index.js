import SEO from '@/component/SEO/SEO'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
     
        <Head>
        <title> Expert SEO Services in India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert SEO services in India to improve website rankings, increase organic traffic, & boost online visibility for sustainable business growth."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/seo/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SEO/>
    </>
  )
}

export default index
