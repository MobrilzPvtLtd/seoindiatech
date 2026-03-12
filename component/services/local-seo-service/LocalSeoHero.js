import Image from "next/image";
import Link from "next/link";

export default function LocalSeoHero() {
  return (
    <section className="relative w-full py-24 px-6 bg-white dark:bg-gray-950 overflow-hidden">

      {/* gradient blobs */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* CONTENT */}
        <div className="space-y-7 z-10">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Local SEO Service Company –{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Local SEO Services That Drive Results
            </span>
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">

            <p>
              If you run a business that serves local customers, you need strong
              local SEO services. Local search matters for small stores,
              clinics, shops, and service providers. At{" "}
              <Link
                href="/"
                className="font-medium text-sky-600 dark:text-sky-400 hover:underline"
              >
                SEO India Tech
              </Link>{" "}
              we focus on local SEO service work that helps you show up when
              your customers search online.
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

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center items-center">

          {/* gradient shape behind image */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-blue-500/30 to-indigo-500/30 rounded-full blur-2xl"></div>

          {/* floating badge */}
          <div className="absolute top-8 left-8 bg-white dark:bg-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            #1 Local SEO
          </div>

          {/* image */}
          <Image
            src="/images/services/local-seo.jpg"
            alt="Local SEO Service Company"
            width={520}
            height={520}
            className="relative z-10 object-contain transform rotate-2 hover:rotate-0 transition duration-500"
            priority
          />

        </div>
      </div>
    </section>
  );
}