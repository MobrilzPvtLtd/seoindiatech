import React from 'react'
import HeroSection from './HeroSection'
import AutomationServices from './AutomationServices'
import DigitalAutomation from './DigitalAutomation'
import AutomationBenefits from './AutomationBenefits'
import TrustAutomation from './TrustAutomation'
import TrustUs from '@/component/common/TrustUs'
import DigitalAutomationServices from './DigitalAutomationServices'
import WhyDigitalAutomation from './WhyDigitalAutomation'

function Automation() {
  return (
    <>
      <HeroSection />
      <AutomationServices />
      <DigitalAutomation />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <TrustAutomation />
      <WhyDigitalAutomation/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <AutomationBenefits />
      <DigitalAutomationServices />
    </>
  )
}

export default Automation
