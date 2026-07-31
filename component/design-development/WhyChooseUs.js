import React from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    title: 'User-First Approach',
    desc: 'Every design and development decision is based on real user behavior and business objectives.',
  },
  {
    title: 'Creative & Technical Excellence',
    desc: 'Our team combines creative design thinking with deep technical expertise for outstanding results.',
  },
  {
    title: 'End-to-End Solutions',
    desc: 'From concept and design to development, testing, and launch - we handle everything under one roof.',
  },
  {
    title: 'Fast & Performant',
    desc: 'We build optimized, high-performance digital products that load fast and scale easily.',
  },
  {
    title: 'Secure & Reliable',
    desc: 'Security best practices and reliable architecture ensure your digital assets are protected.',
  },
  {
    title: 'Cost-Effective',
    desc: 'High-quality design and development solutions tailored to fit businesses of all sizes.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left Side - Heading + Text */}
          <div className="w-full md:w-5/12 md:sticky md:top-28">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-background dark:bg-secondary/40/60 border border-primary/20 dark:border-primary/40/30 rounded-full text-sm font-medium text-primary dark:text-accent mb-6">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                SEO India Tech
              </span>{' '}
              for Design & Development?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We are a trusted design and development company delivering
              high-performance digital solutions backed by research, creativity,
              and innovation. Our commitment to quality sets us apart.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Right Side - Reasons List */}
          <div className="w-full md:w-7/12">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-6 rounded-2xl border border-border dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/40 hover:bg-background/50 dark:hover:bg-blue-950/20 transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/25 flex items-center justify-center group-hover:bg-primary-hover group-hover:scale-110 transition-all duration-300">
                    <Check className="w-5 h-5 text-primary dark:text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-heading mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
