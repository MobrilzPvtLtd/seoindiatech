import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { FiArrowRight, FiCheck, FiUser, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import VisibleFaq from '@/component/common/VisibleFaq'
import SectionHeader from '@/component/ui/SectionHeader'
import { PAGE_FAQS } from '@/utils/pageFaqs'
import { useFormTracking } from '@/hooks/useFormTracking'

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false })

const FAQAndContact = () => {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', message: '' })
  const [focusedField, setFocusedField] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const [showCaptcha, setShowCaptcha] = useState(false)
  const captchaRef = useRef(null)
  const { onFormInteraction, trackSubmitSuccess, trackSubmitError } = useFormTracking({
    formName: 'faq_contact_form',
    formType: 'contact',
  })

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  useEffect(() => {
    const el = captchaRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCaptcha(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

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
      trackSubmitSuccess()
      toast.success('Message Sent Successfully!')
      setForm({ fullName: '', email: '', phone: '', message: '' })
      setPrivacyAgreed(false)
      setRecaptcha(null)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 2500)
    } catch {
      trackSubmitError()
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
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Clear answers about our SEO services, AI search programs, and how we help businesses grow online."
            align="center"
            className="mb-10 md:mb-14"
          />
          <VisibleFaq
            faqs={PAGE_FAQS.home}
            embedded
            columns={2}
            minCount={8}
            showSchema={false}
          />

          <div className="mt-10 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover px-10 py-4 text-sm font-bold text-white shadow-glow-brand transition-all hover:-translate-y-0.5"
            >
              Book Consultation Now
            </Link>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={captchaRef}
            className="contact-card relative rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl shadow-secondary/20 bg-secondary max-w-2xl mx-auto border border-white/10"
          >
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <header className="mb-5 text-center">
                <h3 className="text-2xl font-bold text-white tracking-tight">Send a message</h3>
                <p className="text-white/60 text-sm mt-1">We&apos;ll reply within one business day.</p>
              </header>

              <form className="space-y-3" onSubmit={handleSubmit} onFocus={onFormInteraction}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fields.filter((f) => f.half).map((f) => (
                    <div key={f.name} className="space-y-1">
                      <label htmlFor={`home-${f.name}`} className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                      <div
                        className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                          focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                        }`}
                      >
                        <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                        <input
                          id={`home-${f.name}`}
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
                    <label htmlFor={`home-${f.name}`} className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">{f.label}</label>
                    <div
                      className={`flex items-center gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                        focusedField === f.name ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                      }`}
                    >
                      <f.icon className="w-3.5 h-3.5 text-white/40 shrink-0" />
                      <input
                        id={`home-${f.name}`}
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
                  <label htmlFor="home-message" className="text-[10px] font-bold text-white/60 ml-1 uppercase tracking-widest">Message</label>
                  <div
                    className={`flex items-start gap-2 rounded-xl border bg-white/[0.07] px-3 py-2 transition-all ${
                      focusedField === 'message' ? 'border-white/60 bg-white/[0.12]' : 'border-white/15'
                    }`}
                  >
                    <FiMessageSquare className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                    <textarea
                      id="home-message"
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
                    id="home-privacy-agree"
                    name="privacy"
                    className="h-4 w-4 shrink-0 rounded border-white/30"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    aria-labelledby="home-privacy-label"
                    required
                  />
                  <label
                    id="home-privacy-label"
                    htmlFor="home-privacy-agree"
                    className="text-white/60 text-xs cursor-pointer"
                  >
                    I agree to the{' '}
                    <Link href="/privacy-policy" className="text-white/80 hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                {showCaptcha && (
                  <ReCAPTCHA
                    sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                    className="mx-auto"
                    onChange={setRecaptcha}
                  />
                )}

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
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQAndContact
