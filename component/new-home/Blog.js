import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import posts from '@/utils/BlogPost'
import ScribbleText from '@/component/ui/ScribbleText'

const latestPosts = posts.slice(0, 2)

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-premium mb-5">
          <Image
            src={post.image || '/images/home/logo1.png'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <time className="text-sm text-muted">{formatDate()}</time>
        <h3 className="mt-2 text-lg md:text-xl font-bold text-heading leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-muted line-clamp-3">
          {post.desc}
        </p>
      </Link>
    </motion.article>
  )
}

const Blog = () => {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-heading sm:text-4xl md:text-[2.75rem]">
            Our{' '}
            <ScribbleText className="text-primary italic" scribbleColor="#6B2E88">
              Latest
            </ScribbleText>{' '}
            Blogs
          </h2>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
          >
            View All
          </Link>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {latestPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
