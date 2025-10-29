import Promotion from '@/component/solution/promotion/Promotion'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>

      <Head>
            <title>Promotion & Ads Services India – SEOIndiatech</title>
            <meta
              name="description"
              content="SEOIndiatech provides promotion and ads services in India to boost brand visibility, attract target audiences, and drive higher engagement and conversions."
            />
            <link
              rel="canonical"
              href="https://www.seoindiatech.com/solution/promotion-and-ads"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
  <Promotion/>
    </>
  )
}
