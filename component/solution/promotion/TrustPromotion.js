import { CheckCheck, Megaphone, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TrustPromotion() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('promotion');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      category: 'promotion',
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Increased Brand Visibility',
      description: 'Reaches wider audiences across multiple channels and touchpoints'
    },
    {
      category: 'promotion',
      icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Enhanced Brand Perception',
      description: 'Creates positive associations and strengthens brand positioning'
    },
    {
      category: 'advertising',
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Targeted Messaging',
      description: 'Delivers specific messages to precisely defined audience segments'
    },
    {
      category: 'advertising',
      icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: 'Measurable Results',
      description: 'Provides clear metrics and ROI for marketing investments'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-white/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300/30 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                <span>Marketing Essentials</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Why <span className="text-blue-600 dark:text-blue-400">Promotion</span> - Why <span className="text-blue-600 dark:text-blue-400">Advertising</span>
              </h3>

              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                <button
                  className={`pb-2 px-4 text-base md:text-lg font-medium transition-colors duration-300 ${activeTab === 'promotion'
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('promotion')}
                >
                  Promotion
                </button>
                <button
                  className={`pb-2 px-4 text-base md:text-lg font-medium transition-colors duration-300 ${activeTab === 'advertising'
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  onClick={() => setActiveTab('advertising')}
                >
                  Advertising
                </button>
              </div>

              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === 'promotion' && (
                  <div className={`space-y-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-justify text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                      Promotion involves all the activities a company undertakes to present and communicate the value of its products or services to the target market. It includes advertising, personal selling, sales promotions, public relations, and direct marketing. The primary goal of promotion is to influence customers' buying behavior and create a positive perception of the brand.
                    </p>

                    <div className="space-y-3 pt-2">
                      {benefits.filter(b => b.category === 'promotion').map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
                          <div className="flex-shrink-0 p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{benefit.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'advertising' && (
                  <div className={`space-y-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                      Advertising is a specific form of promotion that involves paying for space or time in a medium to deliver a message about a product, service, or brand. It is a non-personal communication method that uses various channels such as print, television, radio, online platforms, social media, and more. Advertising aims to reach a wide audience, create brand awareness, generate interest, and stimulate demand.
                    </p>

                    <div className="space-y-3 pt-2">
                      {benefits.filter(b => b.category === 'advertising').map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700">
                          <div className="flex-shrink-0 p-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{benefit.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
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
          <div className={`transform transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main image with glow effect */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 dark:opacity-40 blur-xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/promotion.png"
                    alt="Promotion and advertising visual showing marketing campaigns and strategies"
                    width={600}
                    height={600}
                    className="object-cover bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex justify-between">
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+156%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Brand Awareness</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">+92%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Conversion Rate</div>
                </div>
                <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="text-center px-3">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.8x</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">ROI</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-blue-600 dark:text-blue-400">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4" />
                  <span>Strategic Marketing</span>
                </div>
              </div>
            </div>

            {/* Marketing channels pills */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['Social Media', 'Email', 'Content', 'SEO', 'PPC', 'PR'].map((channel, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  style={{
                    transitionDelay: `${400 + (index * 100)}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {channel}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}