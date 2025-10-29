import SEO from '@/component/SEO/SEO'
import WorkFlow from '@/component/solution/workflow/WorkFlow'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <>
    
  
      <Head>
        <title>Workflow Process Services India– SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers workflow process services in India to optimize operations, improve efficiency, and streamline business tasks for better productivity."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/solution/workflow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <WorkFlow/> 
    </>
  )
}
