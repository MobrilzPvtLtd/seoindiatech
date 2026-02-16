import React from "react";
import {
  FiSearch,
  FiHelpCircle,
  FiEdit3,
  FiLayout,
  FiSettings,
  FiGlobe,
} from "react-icons/fi";

export default function AiSeoServices() {
  return (
    <section className="relative w-full py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What you get from our AI SEO services
          </h3>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-justify">
            As an ai SEO company, we deliver AI SEO services that cover technical fixes, content planning, and ongoing improvements. Here is what our AI SEO agency usually includes.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-2xl group-hover:scale-110 transition">
                <FiSearch />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Site and content audit
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We review technical health, indexing issues, internal links, page speed basics, and content gaps. We also check how AI summaries treat your pages and where they miss context.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white text-2xl group-hover:scale-110 transition">
                <FiHelpCircle />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Keyword and question mapping
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We group keywords by intent, then build question sets that match how people search today. This supports ai SEO strategy and answer engine optimization services at the same time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-2xl group-hover:scale-110 transition">
                <FiEdit3 />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Content upgrades that read like a human wrote them
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We rewrite or expand key pages using simple language and short sentences. We remove fluff. We add clear definitions, steps, and examples where needed. This helps AI tools pick the right lines from your page.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white text-2xl group-hover:scale-110 transition">
                <FiLayout />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                On page improvements
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We improve titles, headings, internal links, and topic coverage. The goal is to make each page clear about what it offers. A strong ai SEO company keeps pages focused. One page should solve one main intent.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 text-white text-2xl group-hover:scale-110 transition">
                <FiSettings />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technical SEO support
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We fix crawl paths, redirects, canonical issues, sitemap checks, and core technical items that block growth. We also add structured data where it fits.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-2xl group-hover:scale-110 transition">
                <FiGlobe />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                AEO and GEO support
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              We provide answer engine optimization services and GEO help as part of a complete plan. If you need a generative engine optimization agency approach, we build pages that AI systems can cite with confidence. That includes clear sections, short answers, and strong topic consistency.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
