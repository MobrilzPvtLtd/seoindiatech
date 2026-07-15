import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { MdTimer, MdVerified, MdLock } from 'react-icons/md'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'

const services = [
  'Digital Marketing',
  'Mobile App Development',
  'Search Engine Optimization (SEO)',
  'Web Design & Development',
  'Social Media Marketing',
  'Pay per Click',
  'Custom Software Development',
]

const NewHero = () => {
  const [text, setText] = useState('')
  const [serviceIndex, setServiceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = services[serviceIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setServiceIndex((prev) => (prev + 1) % services.length)
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1))
      }, isDeleting ? 80 : 150)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, serviceIndex])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/90 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl dark:bg-blue-900/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-50/40 rounded-full blur-3xl dark:bg-indigo-900/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-blue-50/20 rounded-full blur-3xl dark:bg-blue-900/5 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-100/80 dark:border-blue-800/40 px-4 py-1.5 rounded-full shadow-sm shadow-blue-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
                India's Trusted SEO Agency
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Grow Your Business with{' '}
              <span className="text-blue-600">Result-Driven</span>
              <br />
              <span className="inline-block h-[1.2em] overflow-hidden align-bottom">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {text}
                </span>
                <span className="text-blue-600 animate-pulse font-light">|</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
              We help businesses rank higher, get more traffic, generate quality leads, and increase revenue with customized strategies.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2.5">
              {['Increase Organic Traffic', 'Generate Quality Leads', 'Maximize ROI & Revenue'].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white dark:bg-slate-800/80 px-4 py-2 rounded-full border border-slate-100/80 dark:border-slate-700/60 shadow-sm shadow-slate-200/20 dark:shadow-slate-900/20"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Trusted by{' '}
                <span className="font-bold text-slate-900 dark:text-white">500+</span> Businesses
              </span>
              <span className="w-px h-5 bg-slate-200 dark:bg-slate-700" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                ⚡ 4.9/5 Rating
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link href="/contactus">
                <button className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2.5 text-sm tracking-wide">
                  GET FREE SEO AUDIT
                  <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </Link>
              <Link href="/contactus">
                <button className="cursor-pointer bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-300 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-0.5 active:scale-95 shadow-md border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5 text-sm tracking-wide">
                  <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                  TALK TO EXPERT
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="bg-white dark:bg-slate-800/90 rounded-2xl shadow-2xl shadow-slate-200/40 dark:shadow-slate-900/60 p-7 border border-slate-100 dark:border-slate-700/60 backdrop-blur-sm">
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Get Your <span className="text-orange-500">FREE Proposal</span>
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Fill in the details below</p>
                </div>

                <form className="space-y-3.5">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Business Name*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                  />
                  <input
                    type="url"
                    placeholder="Website URL*"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                  />

                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm transition-all cursor-pointer">
                    <option value="">Select Services Needed</option>
                    <option value="seo">SEO Services</option>
                    <option value="ppc">PPC Advertising</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="content">Content Marketing</option>
                    <option value="email">Email Marketing</option>
                    <option value="web">Web Development</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 active:scale-95 text-sm tracking-wide"
                  >
                    GET FREE PROPOSAL
                  </button>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-4 pt-1 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MdTimer className="w-3.5 h-3.5" />
                      Response within 24 Hrs
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MdLock className="w-3.5 h-3.5" />
                      No Obligation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MdVerified className="w-3.5 h-3.5" />
                      100% Confidential
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero