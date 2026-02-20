import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SMOHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 md:py-28 transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-8">
              Social Media Optimization Company in India
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-base text-justify md:text-lg leading-relaxed mb-6">
              People scroll fast. If your profile looks incomplete or your posts
              feel random, they move on. Social media optimization services help
              you stay consistent, look credible, and get more action from the
              right audience. This is not only about posting more. It is about
              posting with a plan, keeping your brand look consistent, and
              improving each profile so visitors know what you do in seconds.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base text-justify md:text-lg leading-relaxed">
              <Link
                href="/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                SEO India Tech
              </Link>{' '}
              works as a social media optimization company that supports brands
              across platforms like Instagram, Facebook, LinkedIn, X, YouTube,
              and Pinterest. If you want an SMO partner that understands Indian
              audiences, we also work as a social media optimization company in
              India with processes built for local markets, regional language
              needs, and fast changing trends.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-xl transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl"></div>

              <Image
                src="/images/services/Apex-SMO-Services.png"
                alt="Social Media Optimization Services"
                width={700}
                height={700}
                quality={100}
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
