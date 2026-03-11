export default function LocationContent({ pageContent }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Content Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-8 md:p-12">
          <div
            className="
            text-gray-700 dark:text-gray-300
            text-justify

            [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6

            [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-4
            [&_h2]:border-l-4 [&_h2]:border-blue-600 [&_h2]:pl-4

            [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-10 [&_h3]:mb-3

            [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mt-8 [&_h4]:mb-3

            [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mt-6 [&_h5]:mb-2

            [&_h6]:text-base [&_h6]:font-semibold [&_h6]:mt-5 [&_h6]:mb-2

            [&_p]:leading-relaxed
            [&_p]:mb-6
            [&_p]:hyphens-auto

            [&_ol]:list-decimal
            [&_ol]:pl-6
            [&_ol]:mb-6

            [&_ul]:list-disc
            [&_ul]:pl-6
            [&_ul]:mb-6

            [&_li]:mb-2

            [&_strong]:text-blue-600

            [&_a]:text-blue-600
            [&_a:hover]:underline
            "
            dangerouslySetInnerHTML={{ __html: pageContent }}
          />
        </div>
      </div>
    </section>
  )
}
