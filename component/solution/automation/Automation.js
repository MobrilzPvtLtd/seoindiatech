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
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <TrustAutomation />
      <WhyDigitalAutomation/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <AutomationBenefits />
      <DigitalAutomationServices />
    </>
  )
}

export default Automation
