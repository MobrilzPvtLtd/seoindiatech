import Image from 'next/image'

export default function LocalSeoHero() {
  return (
    <section
      className="w-full py-24 px-6 
                 bg-gray-50 dark:bg-gray-950 
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* CONTENT */}
        <div className="order-1">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-8
                       text-gray-900 dark:text-white"
          >
            Local SEO Service Company –{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Local SEO Services That Drive Results
            </span>
          </h1>

          <div
            className="space-y-6 text-lg leading-relaxed 
                       text-gray-700 dark:text-gray-300 
                       text-justify"
          >
            <p>
              If you run a business that serves local customers, you need strong
              local SEO services. Local search matters for small stores,
              clinics, shops, and service providers. At SEO India Tech we focus
              on local SEO service work that helps you show up when your
              customers search online.
            </p>

            <p>
              We are a local SEO service company with years of hands-on
              experience in local SEO marketing services. We help your business
              show in local search results, maps, and directories. Our team uses
              proven methods that match what people actually search for. Our
              goal is simple. We want your business to be easy to find when
              customers search for what you offer.
            </p>

            <p>
              With the right local SEO services, your business can get more foot
              traffic, calls, and online orders. People trust results that
              appear close to them. We make sure your business appears for the
              right searches.
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-2 flex justify-center mt-10 md:mt-0">
          <div className="relative">
            {/* Soft Background Layer */}
            <div
              className="absolute inset-0 bg-blue-100 
                         dark:bg-blue-900/20 
                         rounded-3xl -rotate-3 scale-105"
            ></div>

            <div
              className="relative bg-white dark:bg-gray-900 
                         p-8 rounded-3xl shadow-xl 
                         border border-gray-200 dark:border-gray-800"
            >
              <Image
                src="/images/services/Local-SEO-Company.png"
                alt="Local SEO Service Company"
                width={500}
                height={500}
                className="w-full max-w-md h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
