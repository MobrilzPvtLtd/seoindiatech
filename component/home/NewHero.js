import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaStar, FaCheckCircle } from 'react-icons/fa'
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
    <div className="px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Main Hero Section */}
        <div className="p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative rounded-2xl bg-gradient-to-r from-white to-sky-50 dark:from-gray-900 dark:to-gray-800">
          {/* Decorative right image - top right */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-[35%] pointer-events-none">
            <div className="h-full w-full relative">
              <img src="/images/herobg.jpg" alt="hero decorative" className="h-full w-full object-cover opacity-95 rounded-bl-3xl" />
              <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent rounded-bl-3xl"></div>
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full lg:w-[45%] space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight md:leading-snug text-center md:text-left">
              Grow Your Business with Result-Driven
              <br />
              <span className="inline-block h-[2.8em] overflow-hidden leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">{text}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse text-xl md:text-2xl lg:text-3xl font-normal">|</span>
              </span>
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl md:max-w-2xl text-center md:text-left">
              We help businesses rank higher, get more traffic, generate quality leads, and increase revenue with customized strategies.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap gap-6 py-2">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">Increase Organic Traffic</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">Generate Quality Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">Maximize ROI &amp; Revenue</span>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/80 backdrop-blur px-4 py-2 rounded-full w-fit border border-gray-200 dark:border-gray-700">
              <FaStar className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Trusted by <span className="font-bold text-blue-600 dark:text-blue-400">500+</span> Businesses
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contactus">
                <button className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform active:scale-95 shadow-md border border-orange-600/20">
                  GET FREE SEO AUDIT
                </button>
              </Link>
              <Link href="/contactus">
                <button className="cursor-pointer bg-white text-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform active:scale-95 shadow-md border border-blue-700/10 flex items-center gap-2">
                  <HiOutlineChatBubbleLeftRight className="w-5 h-5" />
                  TALK TO SEO EXPERT
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[25%] lg:w-[320px] z-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-5 border border-gray-200 dark:border-gray-700 max-w-sm mx-auto lg:ml-auto max-h-[480px] overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                Get Your <span className="text-orange-500">FREE Proposal</span>
              </h3>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Business Name*"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <input
                  type="url"
                  placeholder="Website URL*"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />

                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm">
                  <option value="">Services Needed</option>
                  <option value="seo">SEO Services</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="content">Content Marketing</option>
                  <option value="email">Email Marketing</option>
                  <option value="web">Web Development</option>
                </select>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform active:scale-95 shadow-md border border-orange-600/20 text-sm"
                >
                  GET FREE PROPOSAL
                </button>

                {/* Trust Badges with Icons */}
                <div className="flex flex-wrap justify-center gap-3 pt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MdTimer className="w-4 h-4" />
                    Response within 30 Minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MdLock className="w-4 h-4" />
                    No Obligation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MdVerified className="w-4 h-4" />
                    100% Confidential
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewHero