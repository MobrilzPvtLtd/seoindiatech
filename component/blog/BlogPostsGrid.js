import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import posts from '@/utils/BlogPost'

const BlogPostsGrid = () => (
  <section className="pt-[140px] pb-16 md:pb-20 px-4 md:px-8 bg-white dark:bg-background transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background dark:bg-secondary/40/60 border border-primary/20 dark:border-primary/40/30 rounded-full text-sm font-medium text-primary dark:text-accent mb-6">
          <span className="w-2 h-2 bg-primary dark:bg-accent rounded-full" />
          Blog
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-4">
          Latest Insights
        </h1>
        <h2 className="sr-only">SEO and digital marketing articles</h2>
        <div className="w-20 h-1.5 bg-primary dark:bg-primary rounded-full mx-auto mb-6"></div>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Keep your business future-ready with fresh strategies and smart tools.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, idx) => (
          <Link key={idx} href={`/blog/${post.slug}`} className="group block">
            <article className="relative bg-card dark:bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 dark:hover:border-primary/40 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
              {/* Image */}
              {post.image && (
                <div className="relative h-56 overflow-hidden bg-secondary/10">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="inline-flex items-center px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-600/30 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Read More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date || 'Jan 2025'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime || '5 min read'}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-heading mb-3 leading-snug line-clamp-2 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {post.desc}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-accent group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default BlogPostsGrid
