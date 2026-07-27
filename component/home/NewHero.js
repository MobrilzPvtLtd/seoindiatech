import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import HeroContactForm from './HeroContactForm'
import { motion } from 'framer-motion'

const services = [
  'Digital Marketing',
  'Mobile App Development',
  'Search Engine Optimization (SEO)',
  'Web Design & Development',
  'Social Media Marketing',
  'Pay per Click',
  'Custom Software Development',
]

const orbAnimations = [
  { x: [-30, 30, -20], y: [-25, 25, -15], scale: [0.85, 1.15, 0.9], opacity: [0.15, 0.28, 0.15], duration: 20, delay: 0 },
  { x: [-25, 35, -15], y: [-20, 30, -10], scale: [0.9, 1.2, 0.85], opacity: [0.12, 0.25, 0.12], duration: 24, delay: 1 },
  { x: [-35, 20, -25], y: [-15, 20, -20], scale: [0.8, 1.1, 0.9], opacity: [0.14, 0.22, 0.14], duration: 22, delay: 2 },
]

const dotAnimations = [
  { x: [-12, 12], y: [-10, 10], scale: [0.7, 1.4], opacity: [0.25, 0.5], duration: 12, delay: 0 },
  { x: [-10, 15], y: [-8, 12], scale: [0.6, 1.3], opacity: [0.3, 0.55], duration: 14, delay: 0.8 },
  { x: [-14, 10], y: [-12, 8], scale: [0.8, 1.5], opacity: [0.2, 0.45], duration: 11, delay: 1.6 },
  { x: [-8, 12], y: [-10, 14], scale: [0.7, 1.2], opacity: [0.25, 0.4], duration: 13, delay: 2.4 },
  { x: [-11, 9], y: [-9, 11], scale: [0.65, 1.35], opacity: [0.28, 0.48], duration: 15, delay: 3.2 },
]

const orbs = [
  { className: 'orb-1', style: { width: '22rem', height: '22rem', top: '-8%', left: '-10%', background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(99,102,241,0.12) 60%, transparent 80%)', filter: 'blur(70px)' } },
  { className: 'orb-2', style: { width: '16rem', height: '16rem', top: '20%', right: '-5%', background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.1) 60%, transparent 80%)', filter: 'blur(60px)' } },
  { className: 'orb-3', style: { width: '18rem', height: '18rem', bottom: '-5%', left: '30%', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.1) 60%, transparent 80%)', filter: 'blur(65px)' } },
]

const dots = [
  { className: 'dot-1', style: { width: '10px', height: '10px', top: '15%', left: '20%', background: 'rgba(59,130,246,0.4)' } },
  { className: 'dot-2', style: { width: '7px', height: '7px', top: '60%', left: '8%', background: 'rgba(6,182,212,0.45)' } },
  { className: 'dot-3', style: { width: '8px', height: '8px', top: '30%', right: '15%', background: 'rgba(99,102,241,0.4)' } },
  { className: 'dot-4', style: { width: '6px', height: '6px', bottom: '20%', right: '25%', background: 'rgba(59,130,246,0.35)' } },
  { className: 'dot-5', style: { width: '9px', height: '9px', bottom: '35%', left: '45%', background: 'rgba(139,92,246,0.4)' } },
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
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/90 overflow-hidden pt-12">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {orbs.map((orb, i) => (
          <motion.div
            key={orb.className}
            className={`absolute rounded-full opacity-20 will-change-transform ${orb.className}`}
            style={orb.style}
            animate={{
              x: orbAnimations[i].x,
              y: orbAnimations[i].y,
              scale: orbAnimations[i].scale,
              opacity: orbAnimations[i].opacity,
            }}
            transition={{
              duration: orbAnimations[i].duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: orbAnimations[i].delay,
            }}
          />
        ))}
        {dots.map((dot, i) => (
          <motion.div
            key={dot.className}
            className={`absolute rounded-full will-change-transform ${dot.className}`}
            style={{ ...dot.style, filter: 'blur(1.5px)' }}
            animate={{
              x: dotAnimations[i].x,
              y: dotAnimations[i].y,
              scale: dotAnimations[i].scale,
              opacity: dotAnimations[i].opacity,
            }}
            transition={{
              duration: dotAnimations[i].duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: dotAnimations[i].delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[60%] space-y-7">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-gray-900 dark:text-white leading-[1.12] tracking-tight">
              Grow Your Business with{' '}
              <span className="text-blue-600">Result-Driven</span>
              <br />
              <span className="inline-block align-bottom">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {text}
                </span>
                <span className="text-blue-600 animate-pulse font-light">|</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              We help businesses rank higher, get more traffic, generate quality leads, and increase revenue with customized strategies.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap lg:flex-nowrap gap-2.5">
              {['Increase Organic Traffic', 'Generate Quality Leads', 'Maximize ROI & Revenue'].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800/80 px-4 py-2 rounded-full border border-gray-100/80 dark:border-gray-700/60 shadow-sm shadow-gray-200/20 dark:shadow-gray-900/20"
                >
                  <FaCheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{feature}</span>
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
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by{' '}
                <span className="font-bold text-gray-900 dark:text-white">500+</span> Businesses
              </span>
              <span className="w-px h-5 bg-gray-200 dark:bg-gray-700" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                4.9/5 Rating
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link href="/contact-us">
                <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 border border-blue-700/20 flex items-center gap-2.5 text-sm">
                  GET FREE SEO AUDIT
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="cursor-pointer bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 shadow-md border border-gray-200/80 dark:border-gray-700 flex items-center gap-2.5 text-sm">
                  <HiOutlineChatBubbleLeftRight className="w-4 h-4" />
                  TALK TO EXPERT
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero
