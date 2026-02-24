import React from 'react'
import Image from 'next/image'

export default function GEOHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content Section */}
        <div className="space-y-6">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            <span className="text-blue-600 dark:text-blue-400">Generative Engine Optimization</span> Agency
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            Search is changing fast. People now ask AI tools instead of typing simple queries into search engines. These tools work like an answer engine. They scan trusted content and show direct answers. If your website is not ready for this shift, you may miss traffic.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            This is where generative engine optimization strategies help your brand stay visible.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            A reliable generative engine optimization company focuses on making your content useful for AI driven search results. AI systems look for clear answers, structured content, and trusted data. When your content meets these needs, your brand has a better chance to appear in AI responses.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
            As a digital marketing company in India, we help businesses adjust their content for AI based discovery. Our team works as an AI SEO company that understands how AI tools read and rank web content.
          </p>

        </div>

        {/* Image Section */}
        <div className="relative w-full h-80 sm:h-96 md:h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/5 blur-3xl rounded-full"></div>
          
          <Image
            src="/images/services/geo.png"
            alt="Generative Engine Optimization"
            fill
            className="object-contain relative z-10 drop-shadow-xl"
            priority
          />
        </div>

      </div>
    </section>
  )
}