'use client'

import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { classifyPageType, getPageTopic } from '@/utils/analytics/pageType'
import { trackFormError, trackFormStart, trackFormSubmit } from '@/utils/analytics/events'

/**
 * Hook for form analytics — fires form_start once, form_submit on success only.
 * Never sends form field values to analytics.
 */
export function useFormTracking({ formName, formType = 'contact' }) {
  const router = useRouter()
  const startedRef = useRef(false)

  const context = () => {
    const pathname = router.asPath.split('?')[0]
    const pageType = classifyPageType(pathname)
    const topic = getPageTopic(pathname)
    const base = { formName, formType, pathname }

    if (pageType === 'service') return { ...base, service: topic }
    if (pageType === 'industry') return { ...base, industry: topic }
    if (pageType === 'city') return { ...base, city: topic }
    return base
  }

  const onFormFocus = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    trackFormStart(context())
  }, [formName, formType, router.asPath])

  const onFormInteraction = onFormFocus

  const trackSubmitSuccess = useCallback(() => {
    trackFormSubmit(context())
  }, [formName, formType, router.asPath])

  const trackSubmitError = useCallback((errorType = 'submission_failed') => {
    trackFormError({ ...context(), errorType })
  }, [formName, formType, router.asPath])

  return { onFormFocus, onFormInteraction, trackSubmitSuccess, trackSubmitError }
}
