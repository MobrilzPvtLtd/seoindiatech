import React, { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import { useFormTracking } from '@/hooks/useFormTracking'

const CTA = () => {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)
  const { onFormInteraction, trackSubmitSuccess, trackSubmitError } = useFormTracking({
    formName: 'design_development_form',
    formType: 'service_inquiry',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const isFormValid = () => {
    return (
      form.email.trim() !== '' &&
      form.fullName.trim() !== '' &&
      form.phone.trim() !== '' &&
      form.privacy &&
      recaptcha !== null
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy) {
      toast.error('You must agree to the Privacy Policy and Terms of Service.')
      return
    }
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form }),
      })
      if (!response.ok) throw new Error('Submission failed')
      trackSubmitSuccess()
      toast.success('Request submitted successfully!')
      setForm({
        email: '',
        fullName: '',
        phone: '',
        message: '',
        privacy: false,
      })
      setRecaptcha(null)
    } catch (err) {
      trackSubmitError()
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="DDform"
      className="bg-gradient-to-br from-cream to-background dark:from-background dark:to-secondary/40 py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/25 text-primary dark:text-accent mb-4">
            <Check className="w-4 h-4 mr-2" /> Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Let&apos;s Build Something Great Together
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-card dark:bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-2xl dark:shadow-primary/15">
          <div className="flex flex-col justify-between border border-border rounded-2xl p-6 sm:p-8 bg-card dark:bg-card">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-6 text-center md:text-left">
                Where{' '}
                <span className="text-primary dark:text-accent">
                  Design Meets Development
                </span>{' '}
                Excellence
              </h2>
              <p className="text-muted mb-6 text-center md:text-left">
                From startups to enterprises, we deliver transformative digital
                solutions across diverse industries:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'E-Commerce',
                    desc: 'High-converting online stores with seamless shopping experiences.',
                  },
                  {
                    title: 'SaaS & Tech',
                    desc: 'Scalable web applications with intuitive interfaces.',
                  },
                  {
                    title: 'Healthcare',
                    desc: 'User-friendly patient portals and medical software.',
                  },
                  {
                    title: 'Education',
                    desc: 'Engaging e-learning platforms and management systems.',
                  },
                  {
                    title: 'Startups',
                    desc: 'MVP development and rapid prototyping for quick market entry.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-4 h-4 bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-heading">
                        {item.title}
                      </span>{' '}
                      <span className="text-muted">
                        - {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form
            className="bg-background rounded-2xl p-6 sm:p-8 space-y-5 border border-border flex flex-col justify-between shadow-inner"
            action="/api/submit-form"
            onSubmit={handleSubmit}
            onFocus={onFormInteraction}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="dd-email"
                  className="block font-medium mb-1 text-body"
                >
                  Email{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="dd-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none dark:text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="dd-fullName"
                  className="block font-medium mb-1 text-body"
                >
                  Full Name{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="dd-fullName"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none dark:text-white"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="dd-phone"
                  className="block font-medium mb-1 text-body"
                >
                  Phone Number{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="dd-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none dark:text-white"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="dd-message"
                  className="block font-medium mb-1 text-body"
                >
                  How can we help?
                </label>
                <textarea
                  id="dd-message"
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white text-body dark:bg-card border border-border focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none resize-none dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="dd-privacy"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="mt-1.5 h-4 w-4 rounded text-body border-border text-primary focus:ring-primary dark:border-gray-600 dark:bg-surface dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="dd-privacy"
                  className="ml-2 text-sm text-muted"
                >
                  I agree to the{' '}
                  <Link
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    Terms of Service
                  </Link>
                </label>
              </div>

              <ReCAPTCHA
                sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                className="mx-auto"
                onChange={setRecaptcha}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="cursor-pointer w-full bg-primary hover:bg-primary-hover dark:bg-primary-hover dark:hover:bg-primary-hover text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center group disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-muted mt-3">
                We&apos;ll get back to you within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CTA
