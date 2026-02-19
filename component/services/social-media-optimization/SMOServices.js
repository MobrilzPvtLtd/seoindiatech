import React from 'react'

export default function SMOServices() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            What social media optimization services cover
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-justify">
            Social media optimization services focus on improving your accounts
            and content so you get better reach, engagement, and leads. The work
            usually includes:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: '1. Profile setup and cleanup',
              desc:
                'We review your bio, username, category, website link, highlights, and contact details. We fix gaps and keep the message clear. This is one of the fastest ways social media optimization services improve trust.',
            },
            {
              title: '2. Brand look and tone',
              desc:
                'You need a consistent style across posts, covers, and story templates. As part of digital branding services, we align fonts, colors, and design rules. Your audience should recognize you without reading the name.',
            },
            {
              title: '3. Content planning and posting routine',
              desc:
                'A good calendar reduces guesswork. We plan post types such as tips, product posts, customer stories, reels, carousels, and quick updates. Social media optimization services also include timing, frequency, and content mix based on what performs.',
            },
            {
              title: '4. Hashtag and keyword support for social platforms',
              desc:
                'Social platforms behave like search engines now. We add practical keywords in captions, titles, and profile sections. This helps your posts show up for people searching your service.',
            },
            {
              title: '5. Engagement work that feels real',
              desc:
                'Replies, comments, and message handling matter. A social media optimization agency should not ignore this part. We help you build a response style, FAQ replies, and quick templates so conversations stay active.',
            },
            {
              title: '6. Basic tracking and reporting',
              desc:
                'You should know what worked and why. We track growth, reach, saves, clicks, profile visits, and leads. Then we adjust the next month plan. Social media optimization services work best when you keep improving small things every week.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Floating Number Badge */}
              {/* <div className="absolute -top-5 left-6 w-12 h-12 flex items-center justify-center text-sm font-bold text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                {index + 1}
              </div> */}

              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
