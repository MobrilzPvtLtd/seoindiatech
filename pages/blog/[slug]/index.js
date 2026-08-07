import SeoHead from '@/component/common/SeoHead'
import BlogPostSchema from '@/component/blog/BlogPostSchema'
import PremiumBlogArticle from '@/component/blog/PremiumBlogArticle'
import LegacyBlogArticle from '@/component/blog/LegacyBlogArticle'
import posts from '@/utils/BlogPost'
import { absoluteUrl } from '@/utils/siteConfig'
import Link from 'next/link'

export default function BlogDetailPage({ post }) {
  if (!post) {
    return (
      <>
        <SeoHead title="Page Not Found" description="The requested blog post could not be found." path="/blog" noindex />
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-background pt-32">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-heading mb-4">404</h1>
          <p className="text-muted text-lg mb-8">Blog post not found.</p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full"
          >
            Back to Blog
          </Link>
        </div>
      </section>
      </>
    )
  }

  const pagePath = `/blog/${post.slug}`
  const pageUrl = absoluteUrl(pagePath)
  const isPremium = Boolean(post.premium)

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDesc}
        path={pagePath}
        image={post.image}
        type="article"
        publishedTime={post.datePublished}
        modifiedTime={post.dateModified || post.datePublished}
        author={post.author?.name}
        lcpImage={post.image}
      />
      <BlogPostSchema post={post} url={pageUrl} />
      <section className="bg-white dark:bg-background pt-32 pb-16 px-4 md:px-8">
        {isPremium ? <PremiumBlogArticle post={post} /> : <LegacyBlogArticle post={post} />}
      </section>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { notFound: true }
  return { props: { post } }
}
