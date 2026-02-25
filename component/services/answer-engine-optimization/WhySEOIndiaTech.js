import Link from 'next/link'
import React from 'react'

export default function WhySEOIndiaTech() {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why SEO India Tech is a fit
            </h4>

            <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                You need clear work, clear reporting, and content that sounds
                human. You also need a team that understands India based
                competition and local intent.
              </p>

              <p>
                Brands choose us because we work like a digital marketing
                company in India that focuses on outcomes, not buzzwords. If you
                are also looking for a local SEO service company, our team can
                align AEO pages with location pages and maps signals. We also
                support{' '}
                <Link
                  href="/services/local-seo-service"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  local SEO services India
                </Link>{' '}
                for businesses that want more calls and walk ins.
              </p>

              <p className="font-medium text-gray-900 dark:text-white pt-3">
                AEO works best when it connects to the full funnel
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Awareness questions',
                  'Comparison questions',
                  'Decision questions',
                  'Support questions after purchase',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-2 py-2 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="pt-2">We build your content to match each stage.</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Who should invest in AEO answer engine optimization services
            </h5>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              AEO is a strong fit if:
            </p>

            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {[
                'You sell services and people ask many questions before contacting you',
                'You compete in crowded search results',
                'You want visibility in AI overviews and voice results',
                'You publish content but it does not rank or convert',
                'You need a structured content system your team can scale',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <p>
                If you want to stay visible as search keeps changing, answer
                engine optimization is now part of the baseline. You can treat
                it as a one time upgrade, or you can treat it as an ongoing
                system. Either way, the page structure and schema work you do
                now will keep paying off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
