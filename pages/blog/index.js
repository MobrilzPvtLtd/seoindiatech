import Blog from '@/component/blog/Blog'
import Head from 'next/head'
import React from 'react'

function page() {
  return (
    <>
      <Head>
        <title> Blog in India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital branding services in India to enhance your brand identity, online presence, and audience engagement effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   <Blog/>
    </>
  )
}

export default page
