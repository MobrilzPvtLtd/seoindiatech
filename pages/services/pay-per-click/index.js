import React from 'react'
import Head from 'next/head'
import PPC from '@/component/services/pay-per-click/PPC'

export default function PayPerPage() {
  return (
    <>
      <Head>
        <title>Pay Per Click Services | SEO India Tech</title>
        <meta
          name="description"
          content="Run high-performing pay per click campaigns for maximum ROI. Expert PPC management services by SEO India Tech."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/pay-per-click"
        />
      </Head>
      <PPC />
    </>
  )
}
