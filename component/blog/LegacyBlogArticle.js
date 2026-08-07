import Image from 'next/image'
import Link from 'next/link'

export default function LegacyBlogArticle({ post }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={400}
          className="rounded-xl object-cover w-full h-72"
        />
      </div>

      <div className="mb-4 text-sm text-muted">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-heading">{post.title}</h1>

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
    </div>
  )
}
