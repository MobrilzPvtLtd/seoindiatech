import React from 'react'
import HeroSection from './HeroSection'
import PromotionService from './PromotionService'
import TrustPromotion from './TrustPromotion'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustUs from '@/component/common/TrustUs'

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
      // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <TrustPromotion />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
      // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <AutomationBenefits />


    </>
  )
}

export default Promotion
