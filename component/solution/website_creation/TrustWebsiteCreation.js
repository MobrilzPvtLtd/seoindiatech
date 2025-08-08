import { CheckCheck, Globe, Share2, Users, Database, Smartphone, Code, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TrustWebsiteCreation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Integration features
  const integrationFeatures = [
    {
      id: 1,
      icon: <Share2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Social Media Integration",
      description: "Connect seamlessly with all your social platforms for consistent brand presence",
    },
    {
      id: 2,
      icon: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "CRM Connection",
      description: "Capture and nurture leads directly from your website into your CRM",
    },
    {
      id: 3,
      icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Lead Management",
      description: "Assign, track and analyze leads to optimize your sales process",
    },
    {
      id: 4,
      icon: <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Mobile Optimization",
      description: "Responsive design that works perfectly across all devices",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
                <Globe className="w-4 h-4" />
                <span>Integrated Web Solutions</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                It's All in <span className="text-blue-600 dark:text-blue-400">One Place</span>
              </h3>

              <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>

              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Your website is an essential tool in today's digital world. Our services can help you integrate it with all your social media platforms seamlessly. Not only that, but we can also connect it to your CRM, which enables you to interact with your leads. This helps you nurture them and build long-lasting relationships. With our integrated software provider, you can send emails, assign leads to your team, or give them a call with ease. We aim to make your website work for you, and our services are tailored to meet your needs.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {integrationFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80 transition-all duration-300 hover:shadow-md ${hoveredCard === feature.id ? 'border-blue-200 dark:border-blue-800 shadow-md' : ''
                      }`}
                    onMouseEnter={() => setHoveredCard(feature.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    src="/images/website_creation1.png"
                    alt="Website creation and integration showing connected platforms and CRM systems"
                    width={600}
                    height={600}
                    className="object-contain bg-white dark:bg-gray-800"
                  />
                </div>
              </div>

              {/* Floating technology elements */}
              <div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'all 0.7s ease-out 0.4s'
                }}
              >
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              <div
                className="absolute bottom-10 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.7s ease-out 0.6s'
                }}
              >
                <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Integration success</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">98.5%</div>
                  </div>
                  <div className="h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Lead conversion</div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">+45%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connected platforms */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['Social Media', 'CRM', 'Email', 'Analytics', 'E-Commerce'].map((platform, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300"
                  style={{
                    transitionDelay: `${400 + (index * 100)}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Development</h4>
            <p className="text-gray-600 dark:text-gray-400">Get your website up and running quickly with our efficient process</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Seamless Integration</h4>
            <p className="text-gray-600 dark:text-gray-400">Connect all your business tools in one centralized ecosystem</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center border border-gray-200 dark:border-gray-700">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Reach</h4>
            <p className="text-gray-600 dark:text-gray-400">Expand your business with a website that connects you to customers worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}