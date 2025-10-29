import SEO from '@/component/SEO/SEO'
import Automation from '@/component/solution/automation/Automation'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>

      <Head>
        <title>Digital Automation Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers digital automation services in India to streamline processes, boost efficiency, and enhance business productivity effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/solution/automation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <Automation/>
    </>
  )
}
