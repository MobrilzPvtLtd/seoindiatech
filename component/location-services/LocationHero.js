import Image from 'next/image'

export default function LocationHero({ heading, content, imageSrc }) {
  const cityMatch = heading.match(/in (.+)$/)
  const cityForAlt = cityMatch ? cityMatch[1] : 'your city'

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {heading}
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-indigo-400 rounded"></div>

            {content.map((para, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
              >
                {para}
              </p>
            ))}

            <div className="pt-4">
              <a
                href="/contactus"
                className="inline-block px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900 rounded-lg transition"
              >
                Get Your Free SEO Audit →
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src={imageSrc}
                alt={`Professional SEO services illustration for ${cityForAlt}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
