import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import BlogRelatedResources from './BlogRelatedResources'
import GeoQuickAnswer from '@/component/industry-premium/GeoQuickAnswer'
import posts from '@/utils/BlogPost'
import { getBlogRelatedResources } from '@/utils/internalLinks'
import { getBlogArticleImageClasses } from '@/utils/blog/blogImageUtils'
function renderParagraph(block, index) {
  if (block.link) {
    return (
      <p key={index} className="leading-relaxed text-body text-lg">
        {block.text}
        <Link href={block.link.url} className="text-primary font-semibold hover:underline">
          {block.link.text}
        </Link>
        {block.textAfter}
      </p>
    )
  }
  if (block.html) {
    return (
      <p
        key={index}
        className="leading-relaxed text-body text-lg"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    )
  }
  return (
    <p key={index} className="leading-relaxed text-body text-lg">
      {block.text}
    </p>
  )
}

function renderBlock(block, index) {
  switch (block.type) {
    case 'paragraph':
      return renderParagraph(block, index)
    case 'heading':
      return (
        <h2 key={index} className="text-2xl font-semibold mt-10 text-heading">
          {block.text}
        </h2>
      )
    case 'subheading':
      return (
        <h3 key={index} className="text-xl font-semibold mt-8 text-heading">
          {block.text}
        </h3>
      )
    case 'list':
      return (
        <ul key={index} className="list-disc pl-6 space-y-2 text-body text-lg">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )
    case 'ordered-list':
      return (
        <ol key={index} className="list-decimal pl-6 space-y-2 text-body text-lg">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      )
    case 'table':
      return (
        <div key={index} className="overflow-x-auto my-6">
          <table className="min-w-full border border-border text-left text-sm">
            <thead className="bg-cream/80">
              <tr>
                {block.headers.map((header) => (
                  <th key={header} className="border border-border px-4 py-3 font-semibold text-heading">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-border px-4 py-3 text-body">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function PremiumBlogArticle({ post }) {
  const relatedResources = getBlogRelatedResources(post, posts)
  const imageClasses = getBlogArticleImageClasses(post.image)

  return (    <article className="max-w-4xl mx-auto">
      <div className={imageClasses.wrapper}>
        <Image
          src={post.image}
          alt={post.images?.[0]?.alt || post.title}
          width={1200}
          height={630}
          className={imageClasses.image}
          priority
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <div className="mb-4 text-sm text-muted">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-heading">{post.title}</h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8 pb-8 border-b border-border">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {post.date || post.datePublished}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </span>
        {post.author && (
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <Link href={post.author.url} className="hover:text-primary">
              {post.author.name}
            </Link>
            , {post.author.jobTitle}
          </span>
        )}
      </div>

      {post.answerFirst && (
        <div className="mb-8">
          <GeoQuickAnswer data={post.answerFirst} />
        </div>
      )}

      <div className="space-y-6 blog-article-body">
        {post.content?.map((block, index) => renderBlock(block, index))}
      </div>

      {post.faqs?.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-heading mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {post.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-card p-5"
              >
                <summary className="cursor-pointer font-semibold text-heading list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-body leading-relaxed text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <BlogRelatedResources data={relatedResources} />

      <div className="mt-12 flex flex-wrap gap-3">        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-bold hover:bg-primary-hover"
        >
          Get Free SEO Audit
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/seo-packages"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary font-bold hover:bg-primary/5"
        >
          View SEO Packages
        </Link>
      </div>
    </article>
  )
}
