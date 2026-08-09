import React, { useState } from 'react'
import {
  Mail,
  User,
  Phone,
  Briefcase,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Send,
} from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from "react-google-recaptcha";
import { useFormTracking } from '@/hooks/useFormTracking'

const Form = () => {
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
    formName: 'seo_service_form',
    formType: 'service_inquiry',
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      form.email.trim() !== '' &&
      form.fullName.trim() !== '' &&
      form.phone.trim() !== '' &&
      form.privacy &&
      recaptcha !== null
    )
  }

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.privacy) {
      toast.error('You must agree to the Privacy Policy and Terms of Service.')
      return
    }
    setIsSubmitting(true)
    try {
      // Replace with your Strapi endpoint
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

  const benefits = [
    {
      title: 'Proven Track Record',
      description:
        'Our SEO strategies deliver real results, helping businesses achieve exponential growth.',
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
    },
    {
      title: 'Customized Strategies',
      description:
        'We craft strategies unique to your business, audience, and objectives-no cookie-cutter approaches.',
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
    },
    {
      title: 'Ethical, White-Hat SEO',
      description:
        'We use proven best practices to secure long-term rankings safely, with zero risk of penalties.',
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
    },
    {
      title: 'Transparency & Reporting',
      description:
        'We keep you in the loop with thorough reporting, so you can track every SEO success.',
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
    },
    {
      title: 'Holistic Digital Marketing Expertise',
      description:
        'Maximize your digital impact with SEO integrated alongside content, design, and paid campaigns.',
      icon: (
        <CheckCircle className="w-5 h-5 text-primary dark:text-accent" />
      ),
    },
  ]

  return (
    <section
      id="Form"
      className="bg-gradient-to-br from-cream to-white dark:from-blue-950/30 dark:to-gray-900/80 py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <ToastContainer />
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/20/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-background/70 dark:bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-card dark:bg-card rounded-2xl p-6 sm:p-10 border border-border shadow-xl relative z-10">
          {/* LEFT COLUMN - BENEFITS */}
          <div className="flex flex-col justify-center rounded-2xl p-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20/40 text-primary dark:text-accent rounded-full text-sm font-medium mb-6 w-fit">
              <span>Why Choose Us</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-6 text-center md:text-left">
              Why Choose SEO India Tech for SEO?
            </h2>

            <div className="w-20 h-1 bg-primary dark:bg-primary rounded-full mb-8 hidden md:block"></div>

            <div className="space-y-5 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold text-heading">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-background dark:bg-primary/15 p-4 rounded-lg border border-primary/20 dark:border-primary/40 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary dark:bg-primary-hover rounded-full text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <p className="text-primary dark:text-accent text-sm font-medium">
                  Fill out the form to get a personalized SEO strategy for your
                  business
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <form
            className="bg-background rounded-2xl p-6 sm:p-8 space-y-5 border border-border flex flex-col justify-between shadow-inner"
            action="/api/submit-form"
            onSubmit={handleSubmit}
            onFocus={onFormInteraction}
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium mb-1 text-body"
                >
                  Email{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="email"
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
                  htmlFor="fullName"
                  className="block font-medium mb-1 text-body"
                >
                  Full Name{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="fullName"
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
                  htmlFor="phone"
                  className="block font-medium mb-1 text-body"
                >
                  Phone Number{' '}
                  <span className="text-red-600 dark:text-red-400">*</span>
                </label>
                <input
                  id="phone"
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
                  htmlFor="message"
                  className="block font-medium mb-1 text-body"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
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
                  id="privacy"
                  name="privacy"
                  checked={form.privacy}
                  onChange={handleChange}
                  className="mt-1.5 h-4 w-4 rounded text-body border-border focus:ring-primary dark:border-gray-600 dark:bg-surface dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="privacy"
                  className="ml-2 text-sm text-muted"
                >
                  I agree to the{' '}
                  <a
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="text-primary dark:text-accent hover:underline"
                  >
                    Terms of Service
                  </a>
                </label>
              </div>

              <ReCAPTCHA
                sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                className="mx-auto"
                onChange={setRecaptcha}
              />
            </div>
            {/* Submit Button at the bottom */}
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
                We'll get back to you within 24-48 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form