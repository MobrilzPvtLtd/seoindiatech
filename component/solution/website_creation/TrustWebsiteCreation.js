import {
  CheckCheck,
  Globe,
  Share2,
  Users,
  Database,
  Smartphone,
  Code,
  Zap,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function TrustWebsiteCreation() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  // Integration features
  const integrationFeatures = [
    {
      id: 1,
      icon: <Share2 className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Social Media Integration',
      description:
        'Integrate your website with all social platforms for a consistent and unified brand presence.',
    },
    {
      id: 2,
      icon: <Users className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'CRM Connection',
      description:
        'Integrate your website with CRM to capture and cultivate leads effectively.',
    },
    {
      id: 3,
      icon: <Database className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Lead Management',
      description:
        'Track and manage leads efficiently to enhance your overall sales performance.',
    },
    {
      id: 4,
      icon: <Smartphone className="w-5 h-5 text-primary dark:text-accent" />,
      title: 'Mobile Optimization',
      description:
        'Responsive design ensures seamless performance and appearance across all devices and screen sizes.',
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 px-6 bg-background relative overflow-hidden">
      {/* Robust Development &amp; Content Integration */}
      <div className="mb-16">
        <div className="bg-background dark:bg-primary/15 border border-primary/20 dark:border-primary/40 rounded-2xl p-6 md:p-10 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-heading text-center mb-6">
            Robust Development &amp; Content Integration
          </h3>

          <p className="text-body text-center max-w-4xl mx-auto mb-10 leading-relaxed">
            Behind every great website is solid development. Our technical team
            builds your site using the optimal technology stack - from CMS
            platforms like WordPress to custom frameworks - ensuring your site
            is fast, stable, secure, and scalable. We write clean, maintainable
            code that supports seamless functionality across devices and
            platforms.
            <br />
            <br />
            Content is king - but only when it's structured, organized, and
            optimized. We craft content layouts, integrate multimedia, and
            ensure a consistent tone that aligns with your brand. Every page,
            section, and call-to-action is strategically placed to maximize
            engagement and conversions.
          </p>

          {/* Timeline / Flow (Optional, can add key points if needed) */}
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary/30 dark:border-primary/30 pl-6 space-y-10">
              {/* Example: You can add steps or leave empty if no sub-points */}
            </div>
          </div>
        </div>
      </div>

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
                <Globe className="w-4 h-4" />
                <span>Integrated Web Solutions</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-heading mb-6 leading-tight">
                It's All in{' '}
                <span className="text-primary dark:text-accent">
                  One Place
                </span>
              </h3>

              <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-6"></div>

              <p className="text-justify text-body text-base md:text-lg leading-relaxed mb-8">
                Your website is a crucial tool in today's digital landscape. Our
                services help you seamlessly integrate it with all your social
                media platforms, ensuring consistent engagement across channels.
                Additionally, we connect your website to your CRM, allowing you
                to efficiently manage leads, nurture relationships, and track
                interactions. With our integrated software solutions, you can
                send emails, assign tasks to team members, or make calls
                directly from the system. We focus on making your website work
                effectively for your business, offering tailored services
                designed to meet your unique goals and requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {integrationFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`p-4 rounded-lg border border-border dark:border-border bg-gray-50 dark:bg-card/80 transition-all duration-300 hover:shadow-md ${
                      hoveredCard === feature.id
                        ? 'border-primary/30 dark:border-primary/40 shadow-md'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(feature.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-heading mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-muted text-sm">
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
                    src="/images/website_creation1.png"
                    alt="Website creation and integration showing connected platforms and CRM systems"
                    width={600}
                    height={600}
                    className="object-contain bg-card dark:bg-card"
                  />
                </div>
              </div>

              {/* Floating technology elements */}
              <div
                className="absolute -top-4 -right-4 bg-card dark:bg-card p-3 rounded-full shadow-lg border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'all 0.7s ease-out 0.4s',
                }}
              >
                <Code className="w-6 h-6 text-primary dark:text-accent" />
              </div>

              <div
                className="absolute bottom-10 -left-4 bg-card dark:bg-card p-3 rounded-full shadow-lg border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.7s ease-out 0.6s',
                }}
              >
                <Zap className="w-6 h-6 text-primary dark:text-accent" />
              </div>

              {/* Stats card overlay */}
              <div className="absolute -bottom-6 right-0 left-0 mx-auto w-4/5 bg-card dark:bg-card p-4 rounded-xl shadow-lg border border-border">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-muted">
                      Integration success
                    </div>
                    <div className="text-xl font-bold text-primary dark:text-accent">
                      98.5%
                    </div>
                  </div>
                  <div className="h-10 w-px bg-gray-200 dark:bg-surface"></div>
                  <div>
                    <div className="text-sm text-muted">
                      Lead conversion
                    </div>
                    <div className="text-xl font-bold text-primary dark:text-accent">
                      +45%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connected platforms */}
            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {['Social Media', 'CRM', 'Email', 'Analytics', 'E-Commerce'].map(
                (platform, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-card dark:bg-card rounded-full shadow border border-border text-sm font-medium text-body"
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(10px)',
                      transition: 'all 0.5s ease-out',
                    }}
                  >
                    {platform}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card dark:bg-card p-6 rounded-xl shadow-md text-center border border-border">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-heading mb-2">
              Fast Development
            </h4>
            <p className="text-muted">
              Our efficient workflow ensures your website is up and running in
              minimal time.
            </p>
          </div>

          <div className="bg-card dark:bg-card p-6 rounded-xl shadow-md text-center border border-border">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-heading mb-2">
              Seamless Integration
            </h4>
            <p className="text-muted">
              Centralize your business tools to streamline operations and
              improve collaboration.
            </p>
          </div>

          <div className="bg-card dark:bg-card p-6 rounded-xl shadow-md text-center border border-border">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-semibold text-heading mb-2">
              Global Reach
            </h4>
            <p className="text-muted">
              Grow your business with a website that reaches and connects with
              customers globally.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {/* Left Column */}
          <div className="bg-gradient-to-r from-cream to-blue-100 dark:from-primary/15 dark:to-secondary/20 border border-primary/30 dark:border-primary/40 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-heading text-center mb-6">
              SEO, Local SEO &amp; Digital Branding Services Support
            </h3>

            <p className="text-heading dark:text-gray-300 text-center leading-relaxed">
              A beautiful website is just the start. To truly succeed online,
              you need visibility. That's where our <b>local SEO services,</b>{' '}
              <a
                href="https://www.seoindiatech.com/services/digital-branding"
                className="text-primary underline"
              >
                digital branding services,
              </a>{' '}
              and ongoing optimization come in. From metadata and keyword
              optimization to technical SEO and local search strategies, we
              ensure your website is discoverable by the right audience.
              <br />
              <br />
              Our integrated approach - combining website development with SEO
              and branding - means you don't just get a website; you get a
              digital marketing powerhouse. This end-to-end offering is what
              sets our top website creation services apart.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-gradient-to-r from-cream to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-primary/20 dark:border-purple-800 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-heading text-center mb-6">
              Quality Assurance, Launch &amp; Maintenance
            </h3>

            <p className="text-heading dark:text-gray-300 text-center leading-relaxed">
              Before your site goes live, we perform extensive testing across
              devices, browsers, and screen sizes. We check functionality,
              performance, security, and accessibility - ensuring a seamless
              user experience.
              <br />
              <br />
              Once launched, we don't just walk away. We offer continuous
              maintenance and updates to keep your website secure, fast, and
              current with evolving technologies. This ongoing support reflects
              our commitment to providing professional website creation services
              that remain relevant and effective long after launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
