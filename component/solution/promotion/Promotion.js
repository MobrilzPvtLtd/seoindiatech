import React from 'react'
import HeroSection from './HeroSection'
import PromotionService from './PromotionService'
import TrustPromotion from './TrustPromotion'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustUs from '@/component/common/TrustUs'
import PromotionalStrategies from './PromotionalStrategies'
import IntegratedPromotionSection from './IntegratedPromotionSection'
import TrustedAdvertisingCompany from './TrustedAdvertisingCompany'

function Promotion() {
  return (
    <>
      <HeroSection />
      <PromotionService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <PromotionalStrategies />
      <TrustPromotion />
      <TrustedAdvertisingCompany/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <AutomationBenefits />
      <IntegratedPromotionSection/>


    </>
  )
}

export default Promotion
