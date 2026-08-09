import React, { useState } from 'react'
import { MdTimer, MdVerified, MdLock } from 'react-icons/md'
import { Send } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useFormTracking } from '@/hooks/useFormTracking'

const HeroContactForm = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptcha, setRecaptcha] = useState(null)
  const [privacyAgreed, setPrivacyAgreed] = useState(false)
  const { onFormInteraction, trackSubmitSuccess, trackSubmitError } = useFormTracking({
    formName: 'hero_contact_form',
    formType: 'contact',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

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
      trackSubmitSuccess()
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
      trackSubmitError()
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md h-full">
      <ToastContainer />
      <div className="h-full bg-card dark:bg-card/90 rounded-2xl shadow-2xl shadow-gray-200/40 dark:shadow-gray-900/60 p-5 border border-border dark:border-border/60 backdrop-blur-sm flex flex-col">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-heading">
            Get Your <span className="text-primary">FREE Proposal</span>
          </h3>
          <p className="text-[11px] text-muted mt-0.5">Fill in the details below</p>
        </div>

        <form className="space-y-3 flex-1 flex flex-col" onSubmit={handleSubmit} onFocus={onFormInteraction}>
          <input
            id="fullName"
            type="text"
            required
            value={formState.fullName}
            onChange={handleInputChange}
            placeholder="Full Name*"
            className="w-full px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-surface/50 text-heading placeholder:text-gray-400 dark:placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />

          <input
            id="email"
            type="email"
            required
            value={formState.email}
            onChange={handleInputChange}
            placeholder="Email Address*"
            className="w-full px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-surface/50 text-heading placeholder:text-gray-400 dark:placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />

          <input
            id="phone"
            type="tel"
            required
            value={formState.phone}
            onChange={handleInputChange}
            placeholder="Phone Number*"
            className="w-full px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-surface/50 text-heading placeholder:text-gray-400 dark:placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
          />

          <textarea
            id="message"
            rows={2}
            required
            value={formState.message}
            onChange={handleInputChange}
            placeholder="How can we help you?*"
            className="w-full px-3 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-surface/50 text-heading placeholder:text-gray-400 dark:placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all resize-none"
          />

          <div className="flex items-center gap-2 pt-0.5">
            <label className="flex items-center gap-2 text-muted text-[11px] cursor-pointer">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-border text-primary focus:ring-primary"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                required
              />
              <span>
                I agree to the{' '}
                <a href="#" className="text-primary dark:text-accent hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          <ReCAPTCHA
            sitekey="6LdktHIrAAAAALQqNXDH1NVAbwgm0YVsQVEuC9ij"
            onChange={setRecaptcha}
          />

          <button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
          >
            <Send size={16} />
            {isSubmitting ? 'Sending...' : 'GET FREE PROPOSAL'}
          </button>

          <div className="flex flex-wrap justify-center gap-3 text-[10px] text-muted mt-auto pt-2">
            <span className="flex items-center gap-1">
              <MdTimer className="w-3 h-3" />
              24 Hrs Response
            </span>
            <span className="flex items-center gap-1">
              <MdLock className="w-3 h-3" />
              No Obligation
            </span>
            <span className="flex items-center gap-1">
              <MdVerified className="w-3 h-3" />
              100% Confidential
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HeroContactForm
