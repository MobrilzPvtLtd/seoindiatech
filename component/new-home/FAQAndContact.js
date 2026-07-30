import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlus, FiCheck, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'

const faqs = [
  {
    question: 'What is AI-powered digital marketing? How is it different from traditional marketing?',
    answer:
      'Traditional marketing relies heavily on manual work across research, content, and reporting. We use AI strategically to accelerate analysis, automate repetitive tasks, and optimize campaigns in real time - while specialists guide every decision for better outcomes at lower cost.',
  },
  {
    question: 'What services does SEO INDIA TECH offer?',
    answer:
      'We offer AI SEO, enterprise SEO, technical SEO, local & international SEO, Google Ads, Meta Ads, content marketing, web development, UI/UX design, CRO, ORM, and marketing automation - all under one global growth partner.',
  },
  {
    question: 'Why should a business work with an AI-powered digital marketing agency?',
    answer:
      'AI is no longer optional for competitive online growth. An AI-enabled agency helps you move faster on research, content, and optimization - so you scale visibility, leads, and revenue without multiplying headcount or vendor chaos.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most clients see measurable improvements within 3-6 months. Competitive industries may take longer, but we provide transparent weekly reporting so you always know where rankings, traffic, and leads stand.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We serve clients across USA, UK, Australia, Europe, UAE, Canada, and worldwide - with timezone-aligned communication and localized strategies for each market.',
  },
  {
    question: 'What kind of results can I expect from SEO INDIA TECH?',
    answer:
      'Outcomes depend on your industry and starting point, but clients typically see improved rankings, higher organic traffic, better lead quality, and clearer ROI from paid campaigns - tracked weekly against agreed KPIs.',
  },
  {
    question: 'How do you report performance and ROI?',
    answer:
      'Weekly dashboards cover keyword rankings, organic traffic, leads, conversions, and campaign spend. A dedicated account manager walks you through every report with clear actions - not vanity metrics.',
  },
  {
    question: 'What makes SEO INDIA TECH different from other agencies?',
    answer:
      'We combine AI-powered SEO, full-stack digital marketing, and custom technology in one accountable team - 14+ years of delivery, transparent reporting, and enterprise-grade execution with startup agility.',
  },
  {
    question: 'Do you offer white-label or reseller SEO programs?',
    answer:
      'Yes. We partner with agencies and resellers worldwide with white-label SEO, reporting, and delivery models - so you can scale client work without building an in-house SEO department.',
  },
  {
    question: 'Which industries do you specialize in?',
    answer:
      'We serve e-commerce, SaaS, healthcare, real estate, education, finance, home services, startups, and more - with playbooks adapted to each sector\'s buyer journey and compliance needs.',
  },
  {
    question: 'Can you help if I already have a website but low conversions?',
    answer:
      'Yes. We audit technical SEO, page speed, UX, offer clarity, and funnel flow - then fix what blocks conversions while scaling traffic from search and paid channels.',
  },
  {
    question: 'How do I get started with SEO INDIA TECH?',
    answer:
      'Book a free consultation call. We\'ll review your goals, audit your current presence, and propose a prioritized roadmap with timelines, KPIs, and the right mix of SEO, media, and technology.',
  },
]

const FAQAndContact = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', message: '' })
  const [openIndex, setOpenIndex] = useState(0)
  const [focusedField, setFocusedField] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const isFormValid = () =>
    form.fullName.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.message.trim() !== '' &&
    privacyAgreed &&
    recaptcha !== null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('Form submission failed')
      await response.json()
      toast.success('Message Sent Successfully!')
      setForm({ fullName: '', email: '', phone: '', message: '' })
      setPrivacyAgreed(false)
      setRecaptcha(null)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2500)
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fields = [
    { name: 'fullName', label: 'Name', placeholder: 'Enter your full name', icon: FiUser, type: 'text', half: true },
    { name: 'phone', label: 'Phone', placeholder: 'Phone number', icon: FiPhone, type: 'tel', half: true },
    { name: 'email', label: 'Email', placeholder: 'email@example.com', icon: FiMail, type: 'email', half: false },
  ]

  return (
    <section id="faq" className="relative bg-[#f8f9fc] dark:bg-background overflow-hidden">
      <ToastContainer />

      {/* FAQ - centered two-column grid */}
      <div className="section-padding border-b border-border/40 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-heading tracking-tight">
              FAQs{' '}
              <span className="text-muted font-semibold">(Frequently Asked Questions)</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              Clear answers to help you understand our digital marketing solutions better.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-2xl bg-white dark:bg-card border border-border/50 dark:border-white/10 shadow-[0_4px_24px_-8px_rgba(42,37,93,0.12)] hover:shadow-[0_8px_30px_-8px_rgba(42,37,93,0.16)] transition-shadow duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-[15px] font-semibold text-heading leading-snug pr-2">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-primary dark:text-accent pt-0.5">
                      <FiPlus
                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed text-muted border-t border-border/40 dark:border-white/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
            >
              Book Consultation Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Contact form */}
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="contact-card relative rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-secondary/20 bg-secondary max-w-2xl mx-auto border border-white/10"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <header className="mb-5 text-center">
                <h3 className="text-2xl font-bold text-white tracking-tight">Send a message</h3>
                <p className="text-white/60 text-sm mt-1">We&apos;ll reply within one business day.</p>
              </header>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fields.filter((f) => f.half).map((f) => (
                    <div key={f.name} className="space-y-1">
                      <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                      <div
                        className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                          focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                        }`}
                      >
                        <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                        <input
                          type={f.type}
                          name={f.name}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(f.name)}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-transparent text-xs text-white placeholder-white/40 outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {fields.filter((f) => !f.half).map((f) => (
                  <div key={f.name} className="space-y-1">
                    <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                    <div
                      className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                        focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                      }`}
                    >
                      <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      <input
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={form[f.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(f.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent text-xs text-white placeholder-white/40 outline-none"
                      />
                    </div>
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">Message</label>
                  <div
                    className={`flex items-start gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                      focusedField === 'message' ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                    }`}
                  >
                    <FiMessageSquare className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      maxLength={500}
                      rows={3}
                      className="w-full resize-none bg-transparent text-xs text-white placeholder-white/40 outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/30"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    required
                  />
                  <span className="text-white/60 text-xs">
                    I agree to the{' '}
                    <Link href="/privacy-policy" className="text-white/80 hover:underline">Privacy Policy</Link>
                  </span>
                </div>

                <ReCAPTCHA
                  sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                  className="mx-auto"
                  onChange={setRecaptcha}
                />

                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="group/btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-6 py-3.5 text-sm font-bold text-white transition-all hover:shadow-glow-brand disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : submitted ? (
                    <>Message sent <FiCheck className="h-4 w-4" /></>
                  ) : (
                    <>Send message <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQAndContact
