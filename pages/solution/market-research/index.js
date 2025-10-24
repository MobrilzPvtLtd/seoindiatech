import MarektResearch from '@/component/solution/market_research/MarektResearch'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
     <Head>
            <title>Market Research Services India– SEOIndiatech</title>
            <meta
              name="description"
              content="SEOIndiatech provides market research services in India, delivering insights and analytics to help businesses make informed decisions and drive growth."
            />
            <link
              rel="canonical"
              href="https://www.seoindiatech.com/solution/market-research/"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
    <MarektResearch/>
    </>
  )
}
