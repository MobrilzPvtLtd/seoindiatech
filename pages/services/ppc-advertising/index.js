import SEO from '@/component/common/SEO'
import PPC from '@/component/ppc-advertising/Ppc'
import Ppc from '@/component/ppc-advertising/Ppc'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
   <>
  
    <Head>
        <title> PPC Advertising Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech provides PPC advertising services in India to drive targeted traffic, increase leads, and maximize ROI with effective paid marketing strategies."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/ppc-advertising"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   <PPC/>
   </>
  )
}
