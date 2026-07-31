import { CheckCheck, Megaphone, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TrustPromotion() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('promotion')

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const benefits = [
    {
      category: 'promotion',
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Increased Brand Visibility',
      description:
        'Reaches broader audiences through diverse channels and multiple customer touchpoints.',
    },
    {
      category: 'promotion',
      icon: <Award className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Enhanced Brand Perception',
      description:
        'Builds positive brand associations and reinforces strong market positioning.',
    },
    {
      category: 'advertising',
      icon: <TrendingUp className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Targeted Messaging',
      description:
        'Communicates targeted messages directly to well-defined audience segments.',
    },
    {
      category: 'advertising',
      icon: <Award className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Measurable Results',
      description:
        'Offers measurable results and a clear return on marketing investments.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-card dark:bg-card rounded-2xl border border-border p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                <span>Marketing Essentials</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-heading mb-6 leading-tight">
                <span className="text-primary dark:text-accent">
                  Promotion & Advertising
                </span>{' '}
                -Keys to Brand Growth
              </h3>

              <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-6"></div>

              {/* Tab Navigation */}
              <div className="flex border-b border-border mb-6">
                <button
                  className={`pb-2 px-4 text-base md:text-lg font-medium transition-colors duration-300 ${
                    activeTab === 'promotion'
                      ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-blue-400'
                      : 'text-muted hover:text-body dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('promotion')}
                >
                  Promotion
                </button>
                <button
                  className={`pb-2 px-4 text-base md:text-lg font-medium transition-colors duration-300 ${
                    activeTab === 'advertising'
                      ? 'text-primary dark:text-accent border-b-2 border-primary dark:border-blue-400'
                      : 'text-muted hover:text-body dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab('advertising')}
                >
                  Advertising
                </button>
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'promotion' && (
                  <div
                    className={`space-y-6 transition-opacity duration-300 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-justify text-body text-base md:text-lg leading-relaxed">
                      Promotion encompasses various strategies and activities
                      aimed at showcasing a product or service's value to the
                      target audience. It includes advertising, sales
                      promotions, personal selling, public relations, and direct
                      marketing, all working together to shape positive brand
                      perception and drive customer purchase decisions.
                    </p>

                    <div className="space-y-3 pt-2">
                      {benefits
                        .filter((b) => b.category === 'promotion')
                        .map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-card/80 rounded-lg border border-border dark:border-border"
                          >
                            <div className="flex-shrink-0 p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-heading">
                                {benefit.title}
                              </h4>
                              <p className="text-muted text-sm">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {activeTab === 'advertising' && (
                  <div
                    className={`space-y-6 transition-opacity duration-300 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-body text-base md:text-lg leading-relaxed">
                      Advertising is a paid, non-personal form of promotion used
                      to communicate messages about a product, service, or brand
                      through various channels such as print, television, radio,
                      digital platforms, and social media. Its main objectives
                      are to build brand awareness, spark interest, and drive
                      customer demand.
                    </p>

                    <div className="space-y-3 pt-2">
                      {benefits
                        .filter((b) => b.category === 'advertising')
                        .map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-card/80 rounded-lg border border-border dark:border-border"
                          >
                            <div className="flex-shrink-0 p-1.5 bg-primary/10 dark:bg-primary/20 rounded-full">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-heading">
                                {benefit.title}
                              </h4>
                              <p className="text-muted text-sm">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div
            className={`transform transition-all duration-700 ease-out delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-30 dark:opacity-40 blur-xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/promotion.png"
                    alt="Promotion and advertising visual showing marketing campaigns and strategies"
                    width={600}
                    height={600}
                    className="object-cover bg-card dark:bg-card"
                  />
                </div>
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-card dark:bg-card p-4 rounded-xl shadow-lg border border-border flex justify-between">
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-primary dark:text-accent">
                    +156%
                  </div>
                  <div className="text-xs text-muted">
                    Brand Awareness
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-surface"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-primary dark:text-accent">
                    +92%
                  </div>
                  <div className="text-xs text-muted">
                    Conversion Rate
                  </div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-surface"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-primary dark:text-accent">
                    4.8x
                  </div>
                  <div className="text-xs text-muted">
                    ROI
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-card dark:bg-card px-4 py-2 rounded-full shadow-lg border border-border text-sm font-medium text-primary dark:text-accent">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4" />
                  <span>Strategic Marketing</span>
                </div>
              </div>
            </div>

            {/* Marketing channels pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['Social Media', 'Email', 'Content', 'SEO', 'PPC', 'PR'].map(
                (channel, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-card dark:bg-card rounded-full shadow border border-border text-sm font-medium text-body"
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(10px)',
                      transition: 'all 0.5s ease-out',
                    }}
                  >
                    {channel}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
