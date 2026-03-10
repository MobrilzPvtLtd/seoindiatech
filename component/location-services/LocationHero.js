import Image from "next/image";

export default function LocationHero({ heading, content, imageSrc }) {
  // Extract city from heading for better alt text (e.g. "Best SEO Services in Chandigarh" → "Chandigarh")
  const cityMatch = heading.match(/in (.+)$/);
  const cityForAlt = cityMatch ? cityMatch[1] : "your city";

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* LEFT - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {heading}
            </h1>

            <p
              className="
                text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300
                text-left sm:text-justify
                hyphens-auto
              "
            >
              {content}
            </p>

            <div className="pt-6">
              <a
                href="/contactus"
                className="inline-flex items-center px-7 py-3.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
              >
                Get Your Free SEO Audit →
              </a>
            </div>
          </div>

          {/* RIGHT - Dynamic Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-950/60 ring-1 ring-gray-200 dark:ring-gray-800">
              <Image
                src={imageSrc}
                alt={`Professional SEO services illustration for ${cityForAlt} - digital growth and search optimization`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}