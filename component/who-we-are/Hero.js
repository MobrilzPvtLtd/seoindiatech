import React from 'react'
import { Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="bg-white dark:bg-background pt-12 pb-8">
      <div className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 right-10 w-72 h-72 bg-primary/10 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className=" md:pt-5 max-w-7xl flex p-6 md:p-12 flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 mx-auto md:my-10">
          <div className="md:max-w-xl">
            {/* Badge/Tag */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium">
                Business Growth Solutions
              </span>
            </div>

            {/* Main Heading */}
            {/* <div className="flex flex-col items-center justify-center text-center min-h-screen"> */}
            <h3 className="text-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6">
              <span className="font-bold text-primary dark:text-accent">
                Who We Are{' '}
              </span>
              - At SEO India Tech
            </h3>
            {/* </div> */}

            {/* Description */}
            <p className="text-justify text-body text-lg leading-relaxed mb-8 max-w-2xl">
              Welcome to SEO India Tech - we are not just another digital
              agency. We are architects of growth, innovators of efficiency, and
              passionate believers in harnessing technology to transform how
              businesses operate and succeed online. Our mission is to deliver
              comprehensive, intelligent solutions that power every aspect of
              your digital journey: from idea to execution, from lead to loyal
              customer.
            </p>
            <p className="text-justify text-body text-lg leading-relaxed mb-8 max-w-2xl">
              We combine structured <b>workflow</b> design, smart{' '}
              <b>automation,</b> deep
              <b>market research,</b> expert <b>website creation,</b> and robust{' '}
              <b>promotion & advertising</b> - all unified under a powerful{' '}
              <b>CRM & management tool</b>
              strategy. This fusion allows us to build digital ecosystems that
              perform, scale, and evolve with your business.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/contact-us">
                <button className="cursor-pointer px-8 py-3.5 bg-gradient-to-r from-primary to-primary-hover dark:from-surface dark:to-background text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 transform active:scale-95">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/blog">
                <button className="hidden cursor-pointer px-8 py-3.5 border border-border text-heading dark:text-gray-200 font-medium rounded-full hover:bg-cream dark:hover:bg-gray-800 transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-muted font-medium">
                Follow us:
              </p>
              <Link
                href="https://www.facebook.com/people/SEOIndiatech/61582651577922/"
                className="flex items-center gap-2 text-body hover:text-primary dark:hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-background dark:bg-primary/15 rounded-full">
                  <Facebook
                    size={18}
                    className="text-primary dark:text-accent"
                  />
                </div>
                <span className="font-medium">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/seoindiatech/"
                className="flex items-center gap-2 text-body hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-pink-50 dark:bg-pink-900/30 rounded-full">
                  <Instagram
                    size={18}
                    className="text-pink-600 dark:text-pink-400"
                  />
                </div>
                <span className="font-medium">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/seo-india-tech/"
                className="flex items-center gap-2 text-body hover:text-primary dark:hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-background dark:bg-primary/15 rounded-full">
                  <Linkedin
                    size={18}
                    className="text-primary dark:text-accent"
                  />
                </div>
                <span className="font-medium">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full md:w-1/2 lg:w-[49%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border transition-all hover:shadow-2xl duration-300 transform hover:scale-[1.02]">
              {/* Using Next.js Image for better optimization */}
              <Image
                src="/images/whoweare/start.png"
                alt="Business Growth"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 dark:bg-primary/15 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full blur-lg"></div>

            {/* Stats badge */}
            <div className=" hidden absolute -bottom-5 right-10 bg-card dark:bg-card rounded-lg shadow-lg py-3 px-4 border border-border dark:border-border">
              <p className="text-sm text-muted mb-1">
                Trusted by
              </p>
              <p className="text-xl font-bold text-heading">
                500+ Companies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
