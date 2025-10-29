import WhoWeAre from '@/component/who-we-are/WhoWeAre'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
      <Head>
        <title> Know us – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital branding services in India to enhance your brand identity, online presence, and audience engagement effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/who-we-are"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <WhoWeAre/>
    </>
  )
}

export default index
