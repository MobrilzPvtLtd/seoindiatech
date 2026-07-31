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
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <TrustWebsiteCreation />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <AboutWork />
      <AutomationBenefits />
      <SolutionImpact />
    </>
  )
}

export default WebsiteCreation
