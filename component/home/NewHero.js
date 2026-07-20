import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import HeroContactForm from './HeroContactForm'
import gsap from 'gsap'

const services = [
  'Digital Marketing',
  'Mobile App Development',
  'Search Engine Optimization (SEO)',
  'Web Design & Development',
  'Social Media Marketing',
  'Pay per Click',
  'Custom Software Development',
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
  const bgRef = useRef(null)

  // Typewriter effect
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

  // GSAP floating orbs animation
  useEffect(() => {
    if (!bgRef.current) return

    const ctx = gsap.context(() => {
      const orbEls = bgRef.current.querySelectorAll('.orb')
      const dotEls = bgRef.current.querySelectorAll('.dot')

      // Large orbs — slow drift + pulse
      orbEls.forEach((el, i) => {
        const xRange = 40 + i * 20
        const yRange = 30 + i * 15
        const driftDuration = 18 + i * 4
        const pulseDuration = 10 + i * 3

        // Drift
        gsap.to(el, {
          x: `random(-${xRange}, ${xRange})`,
          y: `random(-${yRange}, ${yRange})`,
          duration: driftDuration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.5,
        })

        // Scale pulse
        gsap.to(el, {
          scale: `random(0.8, 1.25)`,
          duration: pulseDuration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 2,
        })

        // Opacity breathing
        gsap.to(el, {
          opacity: `random(0.12, 0.3)`,
          duration: pulseDuration * 1.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.8,
        })
      })

      // Small dots — faster, tighter movement
      dotEls.forEach((el, i) => {
        const xRange = 15 + i * 5
        const yRange = 12 + i * 4
        const duration = 10 + i * 2

        gsap.to(el, {
          x: `random(-${xRange}, ${xRange})`,
          y: `random(-${yRange}, ${yRange})`,
          duration: duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.8,
        })

        gsap.to(el, {
          scale: `random(0.6, 1.5)`,
          opacity: `random(0.2, 0.55)`,
          duration: duration * 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 1.2,
        })
      })
    }, bgRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/90 overflow-hidden">
      {/* GSAP Animated Background */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {orbs.map((orb) => (
          <div
            key={orb.className}
            className={`orb absolute rounded-full opacity-20 will-change-transform ${orb.className}`}
            style={orb.style}
          />
        ))}
        {dots.map((dot) => (
          <div
            key={dot.className}
            className={`dot absolute rounded-full will-change-transform ${dot.className}`}
            style={{ ...dot.style, filter: 'blur(1.5px)' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100/80 dark:border-blue-800/40 px-4 py-1.5 rounded-full shadow-sm shadow-blue-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-300 tracking-wider uppercase">
                India&apos;s Trusted SEO Agency
              </span>
            </div>

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
            <div className="flex flex-wrap gap-2.5">
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
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewHero
