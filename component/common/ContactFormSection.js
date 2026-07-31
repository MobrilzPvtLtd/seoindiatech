import React, { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'
import PageSection from '@/component/ui/PageSection'
import SectionHeader from '@/component/ui/SectionHeader'

const inputClass =
  'w-full rounded-xl border border-border bg-white p-3 text-body focus:outline-none focus:ring-2 focus:ring-primary/40 dark:bg-card dark:text-heading'

export default function ContactFormSection({ title, description, industries }) {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const isFormValid = () =>
    form.email.trim() !== '' &&
    form.fullName.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.privacy &&
    recaptcha !== null

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
      toast.success('Request submitted successfully!')
      setForm({ email: '', fullName: '', phone: '', message: '', privacy: false })
      setRecaptcha(null)
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const defaultIndustries = [
    { title: 'E-Commerce', desc: 'High-converting online stores with seamless shopping experiences.' },
    { title: 'SaaS & Tech', desc: 'Scalable web applications with intuitive interfaces.' },
    { title: 'Healthcare', desc: 'User-friendly patient portals and medical software.' },
    { title: 'Education', desc: 'Engaging e-learning platforms and management systems.' },
    { title: 'Startups', desc: 'MVP development and rapid prototyping for quick market entry.' },
  ]

  const items = industries || defaultIndustries

  return (
    <PageSection
      id="contact-form"
      variant="gradient"
      padding="default"
      className="relative"
    >
      <ToastContainer />
      <SectionHeader
        badge="Get In Touch"
        title={title || "Let's Build Something Great Together"}
        description={description}
        align="center"
        className="mb-10"
      />

      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-card p-6 shadow-premium sm:p-10 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-cream/50 p-6 sm:p-8 dark:bg-surface/50">
          <div>
            <h3 className="mb-6 text-center font-heading text-2xl font-bold text-heading sm:text-3xl md:text-left">
              Where <span className="text-primary dark:text-accent">Expertise Meets Excellence</span>
            </h3>
            <p className="mb-6 text-center text-muted md:text-left">
              From startups to enterprises, we deliver transformative digital solutions across diverse industries:
            </p>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <p className="text-sm leading-relaxed text-body">
                    <span className="font-semibold text-heading">{item.title}</span>
                    <span className="text-muted"> — {item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="flex flex-col justify-between space-y-5 rounded-2xl border border-border bg-background p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            {[
              { id: 'contact-email', label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
              { id: 'contact-fullName', label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'John', required: true },
              { id: 'contact-phone', label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+1 (555) 123-4567', required: true },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="mb-1 block font-medium text-body">
                  {field.label} <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            ))}

            <div>
              <label htmlFor="contact-message" className="mb-1 block font-medium text-body">
                How can we help?
              </label>
              <textarea
                id="contact-message"
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="contact-privacy"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                required
              />
              <label htmlFor="contact-privacy" className="text-sm text-muted">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline dark:text-accent">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms" className="text-primary hover:underline dark:text-accent">
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
              className="btn-brand w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
              <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted">We&apos;ll get back to you within 24–48 hours</p>
          </div>
        </form>
      </div>
    </PageSection>
  )
}
