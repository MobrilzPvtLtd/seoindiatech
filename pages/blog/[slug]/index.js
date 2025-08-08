"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import posts from "@/utlis/BlogPost";

export default function BlogDetail() {
  const router = useRouter();
  // Get slug from URL
  const slug =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").pop()
      : "";

  // Find the blog post by slug
  const post = posts.find((p) => p.slug === slug);
   
  // Recent blogs (excluding current)
  const recent = posts.filter((p) => p.slug !== slug).slice(0, 4);

  // if (!post) return <div className="p-10 text-center">Loading...</div>;

  // Example: programmatic navigation
  const handleRecentClick = (slug) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-8">
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Main Blog Content */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <Image
            src={post?.image}
            alt={post?.title}
            width={900}
            height={400}
            className="rounded-xl object-cover w-full h-72"
          />
        </div>
        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            {post?.category}
          </span>
          <span>{post?.date}</span>
          <span>{post?.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {post?.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {post?.desc}
        </p>
        {/* Add more detailed content here if available */}
       
      </div>
      {/* Sidebar: Recent Blogs */}
      <aside>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            Recent Posts
          </h3>
          <ul className="space-y-4">
            {recent.map((item) => (
              <li
                key={item.slug}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleRecentClick(item.slug)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div>
                  <span className="font-semibold text-blue-700 dark:text-blue-400 hover:underline">
                    {item.title.length > 40
                      ? item.title.slice(0, 40) + "..."
                      : item.title}
                  </span>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
    </section>
  );
}