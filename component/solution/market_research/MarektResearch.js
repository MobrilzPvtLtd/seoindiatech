import React from 'react'
import HeroSection from './HeroSection'
import MarketResearchService from './MarketResearchService'
import TrustMarketResearch from './TrustMarketResearch'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustUs from '@/component/common/TrustUs'

function MarektResearch() {
  return (
    <>

      <HeroSection />
      <MarketResearchService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
      // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <TrustMarketResearch />
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

export default MarektResearch
