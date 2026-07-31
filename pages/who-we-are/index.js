import React from 'react'
import WhoWeAre from '@/component/who-we-are/WhoWeAre'
import VisibleFaq from '@/component/common/VisibleFaq'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import SeoHead from '@/component/common/SeoHead'
import { getPageSeo } from '@/utils/pageSeoRegistry'

const seo = getPageSeo('/who-we-are')

function WhoWeArePage() {
  return (
    <>
      <SeoHead title={seo.title} description={seo.description} path="/who-we-are" />
      <WhoWeAre />
      <VisibleFaq faqs={PAGE_FAQS.whoWeAre} minCount={8} showSchema />
    </>
  )
}

export default WhoWeArePage
