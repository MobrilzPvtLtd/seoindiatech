import React from 'react'
import Socialmediamarketing from '@/component/social-media-marketing/Socialmediamarketing'
import SEO from '@/component/SEO/SEO'
import Head from 'next/head'

export default function index() {
  return (
    <>
   
      <Head>
        <title> Social Media Marketing Services India – SEOIndiatech</title>
        <meta
          name="description"
          content="SEOIndiatech offers expert social media marketing services in India to grow your brand, engage audiences, and boost online visibility effectively."
        />
        <link
          rel="canonical"
          href="https://www.seoindiatech.com/services/social-media-marketing/"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Socialmediamarketing/>
    </>
  )
}
