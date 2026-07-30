import SeoHead from '@/component/common/SeoHead'
import { getPageSeo } from '@/utils/pageSeoRegistry'
import Blog from '@/component/blog/Blog'

const seo = getPageSeo('/blog')

export default function BlogPage() {
  return (
    <>
      <SeoHead title={seo.title} description={seo.description} path="/blog" />
      <Blog />
    </>
  )
}
