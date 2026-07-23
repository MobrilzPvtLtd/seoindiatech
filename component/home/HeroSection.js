'use client'
 
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
 
const HERO_IMAGE = "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
const services = ['SEO', 'Digital Marketing', 'Web Development', 'Pay per Click', 'Social Media']
 
const NewHero = () => {
  const [text, setText] = useState('')
  const [serviceIndex, setServiceIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  useEffect(() => {
    const currentService = services[serviceIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentService.substring(0, text.length + 1))
        if (text === currentService) setIsDeleting(true)
      } else {
        setText(currentService.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setServiceIndex((prev) => (prev + 1) % services.length)
        }
      }
    }, isDeleting ? 100 : 150)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, serviceIndex])
 
  const companyCards = [
    { type: 'stat', label: '80%+', desc: 'ENRICHMENT COVERAGE', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Vanta_logo.svg' },
    { type: 'logo', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg', name: 'Perplexity' },
    { type: 'logo', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg', name: 'Notion' },
    { type: 'quote', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', text: '"In our first AI Hackathon week, we unlocked data across YouTube, Ads, Cloud..."' },
    { type: 'stat', label: '2x', desc: 'DEMOS FROM COLD EMAIL', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Rippling_logo.svg' },
    { type: 'logo', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg', name: 'HubSpot' },
    { type: 'stat', label: '3x', desc: 'REPLY RATE', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Verkada_logo.svg' },
  ]
 
  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[750px] w-full flex items-end px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-black/45 z-10" />
        </div>
 
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-end pb-52 md:pb-60">
          {/* Headline and Desc (scaled down) */}
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Grow Your Business <br /> with <span className="text-emerald-400">Result-Driven</span> <br />
              <span className="inline-block">
                {text}<span className="animate-pulse text-emerald-400 ml-1">|</span>
              </span>
            </h1>
            <p className="text-white/90 text-base md:text-lg font-medium max-w-lg mb-8 leading-relaxed">
              We help businesses rank higher, get more traffic, generate quality leads, and increase revenue with customized strategies.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Increase Organic Traffic', 'Generate Quality Leads', 'Maximize ROI'].map((pill) => (
                <div key={pill} className="bg-white/10 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-[10px]" />
                  <span className="text-white text-[10px] font-bold tracking-wide">{pill}</span>
                </div>
              ))}
            </div>
          </div>
 
          {/* CTA Button */}
          <div className="md:col-span-4 flex md:justify-end">
            <Link href="#">
              <button className="bg-white text-black px-9 py-4 rounded-full font-bold text-base flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Start free trial <FaArrowRight className="text-xs" />
              </button>
            </Link>
          </div>
        </div>
      </section>
 
      {/* RE-SIZED COMPANIES SECTION (Bigger & Taller) */}
      <section className="relative z-20 px-4 md:px-12 lg:px-24 -mt-40 pb-20">
        <div className="bg-white rounded-[50px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] py-16 overflow-hidden border border-gray-50">
          
          <div className="text-center mb-14 px-6">
            <p className="text-gray-500 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Trusted by more than <span className="font-bold text-gray-900">500,000+ leading GTM teams</span>.
              Inspired by our <span className="font-bold text-gray-900">customers</span>. Built with <span className="font-bold text-gray-900">love</span>.
            </p>
          </div>
 
          {/* Marquee with taller cards (h-48) */}
          <div className="relative flex overflow-x-hidden">
            <div className="flex animate-marquee-loop whitespace-nowrap py-4">
              {[...companyCards, ...companyCards, ...companyCards].map((card, idx) => (
                <div
                  key={idx}
                  className={`inline-block mx-4 bg-[#F9FAFB] border border-gray-100 rounded-3xl p-8 h-48 flex flex-col justify-between
                    ${card.type === 'quote' ? 'min-w-[480px]' : 'min-w-[260px]'}`}
                >
                  <div className="flex justify-between items-start">
                    <img src={card.logo} alt="" className="h-6 object-contain grayscale opacity-60" />
                    <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-50">
                        <FaArrowRight className="text-gray-400 -rotate-45 text-[9px]" />
                    </div>
                  </div>
 
                  {card.type === 'stat' && (
                    <div className="mt-auto">
                      <div className="text-4xl font-black text-gray-900 tracking-tight">{card.label}</div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">{card.desc}</div>
                    </div>
                  )}
 
                  {card.type === 'quote' && (
                    <p className="text-[13px] text-gray-600 whitespace-normal mt-auto leading-relaxed font-medium italic">
                      {card.text}
                    </p>
                  )}
 
                  {card.type === 'logo' && (
                    <div className="mt-auto text-[10px] font-black text-gray-300 tracking-[0.3em] uppercase">{card.name}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <style jsx global>{`
        @keyframes marquee-loop {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-loop {
          animation: marquee-loop 60s linear infinite;
        }
      `}</style>
    </div>
  )
}
 
export default NewHero