import React from 'react'
import HeroSection from './HeroSection'
import WorkflowServices from './CRMToolService'
import TrustWorkflow from './TrustCRMTool'
import AutomationBenefits from '../automation/AutomationBenefits'
import CRMToolService from './CRMToolService'
import TrustCRMTool from './TrustCRMTool'
import TrustUs from '@/component/common/TrustUs'
import CRMPlatform from './CRMPlatform'
import WhyCRM from './WhyCRM'

function CRMTools() {
  return (
    <>
      <HeroSection />
      <CRMToolService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <TrustCRMTool />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <CRMPlatform />
      <AutomationBenefits />
      <WhyCRM />

    </>
  )
}

export default CRMTools
