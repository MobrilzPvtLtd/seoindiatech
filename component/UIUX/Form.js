import React, { useState } from 'react'
import Image from 'next/image'
import { Send, Check } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReCAPTCHA from 'react-google-recaptcha'
import Link from 'next/link'

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
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="UIUXform"
      className="bg-gradient-to-br from-cream to-background dark:from-background dark:to-secondary/40 py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        {/* Form header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 dark:bg-primary/25 text-primary dark:text-accent mb-4">
            <Check className="w-4 h-4 mr-2" /> Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Partner with Us to Create Something Remarkable
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-card dark:bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-2xl dark:shadow-primary/15">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between border border-border rounded-2xl p-6 sm:p-8 bg-card dark:bg-card">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-6 text-center md:text-left">
                Where{' '}
                <span className="text-primary dark:text-accent">
                  UI/UX Excellence
                </span>{' '}
                Meets Industry Needs
              </h2>
              <p className="text-muted mb-6 text-center md:text-left">
                From startups to enterprises, we create transformative
                experiences across diverse industries:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'E-Commerce',
                    desc:
                      'High-converting shopping experiences that maximize revenue.',
                  },
                  {
                    title: 'SaaS & Tech',
                    desc:
                      'Streamlined, intuitive interfaces for seamless adoption.',
                  },
                  {
                    title: 'Healthcare',
                    desc: 'User-friendly patient portals and medical software.',
                  },
                  {
                    title: 'Fintech & Banking',
                    desc:
                      'Secure, frictionless, and accessible digital solutions.',
                  },
                  {
                    title: 'Education',
                    desc:
                      'Engaging platforms that enhance knowledge retention.',
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
            {/* Centered image */}
            <div className="mt-8 flex justify-center">
              <div className="relative rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md h-[200px] sm:h-[250px] shadow-lg">
                <Image
                  src="/images/services/design.png"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"></div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN - FORM */}
          <form
            className="bg-background rounded-2xl p-6 sm:p-8 space-y-5 border border-border flex flex-col justify-between shadow-inner"
            action="/api/submit-form"
            onSubmit={handleSubmit}
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
                  className="mt-1.5 h-4 w-4 rounded text-body border-border text-primary focus:ring-primary dark:border-gray-600 dark:bg-surface dark:ring-offset-gray-800"
                  required
                />
                <label
                  htmlFor="privacy"
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
