import React, { useState } from 'react'
import { Phone, Mail, Send, MapPin, Clock } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import Image from 'next/image'

const ContactUsSection = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formState.fullName.trim() !== '' &&
      formState.email.trim() !== '' &&
      formState.phone.trim() !== '' &&
      formState.message.trim() !== '' &&
      privacyAgreed &&
      recaptcha !== null
    )
  }

  // Submit handler for Strapi API
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      await response.json()
      toast.success('Message Sent Successfully!')
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      })
      setPrivacyAgreed(false)
      setRecaptcha(null)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-background dark:to-surface pt-[140px] pb-20 px-4 sm:px-6">
      <ToastContainer />
      {/* Top Heading */}
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full text-sm font-medium mb-4">
          Get In Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-heading mb-6">
          Let's Start a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-accent">
            Conversation
          </span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Fill out the form and one of our experts will contact you within 24
          hours
        </p>
      </div>
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto md:pl-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Form Card */}
        <div className="relative">
          <div className="absolute z-10 -top-5 left-1/2 transform -translate-x-1/2 bg-primary dark:bg-primary text-white px-6 py-2 rounded-full font-medium text-sm shadow-lg">
            We're here to help you succeed
          </div>

          <div className="bg-card dark:bg-card rounded-2xl border border-border shadow-xl p-8 transition-all hover:shadow-2xl relative z-1">
            <form className="mt-6 space-y-6" action="/api/submit-form" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  className="block text-body font-semibold mb-2"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formState.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-heading dark:text-gray-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-body font-semibold mb-2"
                  htmlFor="email"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="you@email.com"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-heading dark:text-gray-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-body font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formState.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full border-b-2 border-gray-200 dark:border-gray-600 focus:border-primary dark:focus:border-blue-400 transition py-2 px-1 bg-transparent outline-none text-heading dark:text-gray-200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-body font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  maxLength={180}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 dark:border-gray-600 rounded-lg p-3 outline-none focus:border-primary dark:focus:border-blue-400 transition resize-none text-heading dark:text-gray-200 bg-white dark:bg-surface"
                ></textarea>
                <div className="text-xs text-muted text-right mt-1">
                  {formState.message.length} / 180
                </div>
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-center gap-3 mt-2">
                <label className="flex items-center gap-3 text-muted text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <a
                      href="/privacy-policy"
                      className="text-primary dark:text-accent hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* ReCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
                className="mx-auto"
                onChange={setRecaptcha}
              />

              <div>
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-primary-hover hover:from-primary-hover hover:to-primary font-medium px-8 py-3 rounded-full hover:cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-primary/10 dark:bg-primary/15 rounded-full opacity-70 blur-xl"></div>
          <div className="absolute -z-10 -top-4 -left-4 w-20 h-20 bg-primary/10 dark:bg-purple-900/20 rounded-full opacity-70 blur-lg"></div>
        </div>

        {/* Right: Side Info */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Illustration */}
          <div className="mb-8 w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/contactusbanner.png"  // Add leading slash
              alt="Contact illustration"
              width={600}
              height={400}  // Adjust based on your actual image dimensions
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contact Info Card */}
          <div className="bg-card dark:bg-card rounded-xl shadow-md border border-border dark:border-border px-10 py-5 w-full max-w-md">
            <h3 className="text-xl font-bold text-heading mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-body font-medium mb-1">
                    Phone Numbers
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+201111772948"
                      className="text-primary dark:text-accent block hover:text-primary dark:hover:text-accent transition-colors"
                    >
                      +91-8076676731
                    </a>
                    {/* <a
                      href="tel:+6282279400935"
                      className="hidden text-primary dark:text-accent block hover:text-primary dark:hover:text-accent transition-colors"
                    >
                      +62 822 7940 0935
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-body font-medium mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:sales@seoindiatech.com"
                    className="text-primary dark:text-accent hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    sales@seoindiatech.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-body font-medium mb-1">
                    Office Address
                  </div>
                  <p className="text-muted">
                    E 160, E Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar
                    Pradesh 201301
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start hidden">
                <div className="p-3 bg-background dark:bg-primary/15 text-primary dark:text-accent rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-body font-medium mb-1">
                    Business Hours
                  </div>
                  <p className="text-muted">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
