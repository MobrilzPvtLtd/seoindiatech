import Link from 'next/link'

export default function HubContentSection({ title, paragraphs, bullets, links = [] }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/30 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
          {paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              {p}
            </p>
          ))}
          {bullets?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {links?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
