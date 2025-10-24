import WebsiteCreation from '@/component/solution/website_creation/WebsiteCreation'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
     <Head>
            <title>Website Creation Services India– SEOIndiatech</title>
            <meta
              name="description"
              content="SEOIndiatech offers website creation services in India, building responsive, user-friendly, and SEO-optimized websites to enhance your online presence."
            />
            <link
              rel="canonical"
              href="https://www.seoindiatech.com/solution/website-creation/"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
   <WebsiteCreation/>
    </>
  )
}
