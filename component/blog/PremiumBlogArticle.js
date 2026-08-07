import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

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

function renderBlock(block, index, tocItems) {
  switch (block.type) {
    case 'paragraph':
      return renderParagraph(block, index)
    case 'heading':
      return (
        <h2
          key={index}
          id={block.text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
          className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-heading scroll-mt-28"
        >
          {block.text}
        </h2>
      )
    case 'subheading':
      return (
        <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-heading">
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
        <div key={index} className="overflow-x-auto my-8 rounded-xl border border-border">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-primary/5">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-bold text-heading">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-body">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'quick-answer':
      return (
        <div
          key={index}
          className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 my-8"
        >
          <p className="text-sm font-bold uppercase tracking-wide text-primary mb-2">
            Quick Answer
          </p>
          <p className="text-lg font-medium text-heading leading-relaxed">{block.text}</p>
        </div>
      )
    case 'stats':
      return (
        <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {block.items.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )
    case 'image':
      return (
        <figure key={index} className="my-8">
          <div className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden">
            <Image src={block.src} alt={block.alt} fill className="object-cover" />
          </div>
          {block.alt && (
            <figcaption className="text-sm text-muted mt-2 text-center">{block.alt}</figcaption>
          )}
        </figure>
      )
    case 'toc':
      return (
        <nav key={index} className="rounded-xl border border-border bg-card p-6 my-6">
          <p className="font-bold text-heading mb-3">On this page</p>
          <ol className="list-decimal pl-5 space-y-2 text-primary">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )
    case 'faq-intro':
      return (
        <p key={index} className="text-body text-lg mb-4">
          {block.text}
        </p>
      )
    case 'cta':
      return (
        <div
          key={index}
          className="my-10 rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-center text-white"
        >
          <p className="text-xl font-bold mb-4">Ready to grow organic leads?</p>
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-primary hover:bg-accent transition-colors"
          >
            {block.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )
    default:
      return null
  }
}

export default function PremiumBlogArticle({ post }) {
  const tocItems = (post.content || [])
    .filter((b) => b.type === 'heading' && b.text !== 'Table of Contents')
    .map((b) => ({
      text: b.text,
      id: b.text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    }))

  return (
    <article className="max-w-4xl mx-auto">
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.images?.[0]?.alt || post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

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

      <div className="space-y-5 blog-article-body">
        {post.content?.map((block, index) => renderBlock(block, index, tocItems))}
      </div>

      {post.faqs?.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-heading mb-6">FAQ</h2>
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
                <p className="mt-3 text-body leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
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
