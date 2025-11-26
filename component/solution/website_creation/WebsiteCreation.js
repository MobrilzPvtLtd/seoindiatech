import React from 'react'
import HeroSection from './HeroSection'
import WebsiteCreationService from './WebsiteCreationservice'
import TrustWebsiteCreation from './TrustWebsiteCreation'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustUs from '@/component/common/TrustUs'
import AboutWork from './AboutWork'
import SolutionImpact from './SolutionImpact'

function WebsiteCreation() {
  return (
    <>
      <HeroSection />
      <WebsiteCreationService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <TrustWebsiteCreation />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <AboutWork />
      <AutomationBenefits />
      <SolutionImpact />
    </>
  )
}

export default WebsiteCreation
