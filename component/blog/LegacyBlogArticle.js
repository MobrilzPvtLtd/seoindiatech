import Image from 'next/image'
import Link from 'next/link'
import BlogRelatedResources from './BlogRelatedResources'
import GeoQuickAnswer from '@/component/industry-premium/GeoQuickAnswer'
import posts from '@/utils/BlogPost'
import { getBlogRelatedResources } from '@/utils/internalLinks'
import { getBlogArticleImageClasses } from '@/utils/blog/blogImageUtils'

export default function LegacyBlogArticle({ post }) {
  const relatedResources = getBlogRelatedResources(post, posts)
  const imageClasses = getBlogArticleImageClasses(post.image)

  return (
    <div className="max-w-4xl mx-auto">
      <div className={imageClasses.wrapper}>
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className={imageClasses.image}
        />
      </div>

      <div className="mb-4 text-sm text-muted">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-heading">{post.title}</h1>

      {post.answerFirst?.question && <GeoQuickAnswer data={post.answerFirst} />}

      <div className="space-y-6 text-lg">
        {post.content?.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index} className="leading-relaxed text-body">
                {block.text}
                {block.link && (
                  <Link href={block.link.url} className="text-primary font-semibold hover:underline">
                    {block.link.text}
                  </Link>
                )}
                {block.textAfter}
              </p>
            )
          }
          if (block.type === 'heading') {
            return (
              <h2 key={index} className="text-2xl font-semibold mt-10 text-heading">
                {block.text}
              </h2>
            )
          }
          if (block.type === 'subheading') {
            return (
              <h3 key={index} className="text-xl font-semibold mt-8 text-heading">
                {block.text}
              </h3>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={index} className="list-disc pl-6 space-y-2 text-body">
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )
          }
          if (block.type === 'ordered-list') {
            return (
              <ol key={index} className="list-decimal pl-6 space-y-2 text-body">
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            )
          }
          return null
        })}
      </div>

      {post.faqs?.length > 0 && (
        <div className="mt-12 border-t border-border pt-10">
          <h2 className="text-2xl font-semibold mb-6 text-heading">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-heading mb-2">{faq.question}</h3>
                <p className="text-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <BlogRelatedResources data={relatedResources} />
    </div>
  )
}
