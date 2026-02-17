import Image from 'next/image'
import { useRouter } from 'next/router'
import posts from '@/utlis/BlogPost'
import Link from 'next/link'

export default function BlogDetail() {
  const router = useRouter()
  const { slug } = router.query

  const post = posts.find((p) => p.slug === slug)
  const recent = posts.filter((p) => p.slug !== slug).slice(0, 4)

  if (!post) return null

  const handleRecentClick = (slug) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Blog Content */}
        <div className="mb-10">
          <div className="mb-6">
            <Image
              src={post.image}
              alt={post.title}
              width={900}
              height={400}
              className="rounded-xl object-cover w-full h-72"
            />
          </div>

          <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* FULL CONTENT */}
          <div className="space-y-6 text-lg">
            {post.content?.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p
                    key={index}
                    className="leading-relaxed text-justify text-gray-700 dark:text-gray-300"
                  >
                    {block.text}

                    {block.link && (
                      <Link href={block.link.url}>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                          {block.link.text}
                        </span>
                      </Link>
                    )}

                    {block.textAfter}
                  </p>
                )
              }

              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold mt-10 text-gray-900 dark:text-white"
                  >
                    {block.text}
                  </h2>
                )
              }

              if (block.type === 'list') {
                return (
                  <ul
                    key={index}
                    className="list-disc pl-6 space-y-2 text-justify text-gray-700 dark:text-gray-300"
                  >
                    {block.items.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )
              }

              if (block.type === 'ordered-list') {
                return (
                  <ol
                    key={index}
                    className="list-decimal pl-6 space-y-2 text-justify text-gray-700 dark:text-gray-300"
                  >
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

        {/* Recent Posts Below Blog */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Recent Posts
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recent.map((item) => (
              <div
                key={item.slug}
                onClick={() => handleRecentClick(item.slug)}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full h-40 mb-4"
                />

                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  {item.category}
                </span>

                <h4 className="mt-3 font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
