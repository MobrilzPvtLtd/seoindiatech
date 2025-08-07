import React from 'react'
import HeroSection from './HeroSection'
import WorkflowServices from './CRMToolService'
import TrustWorkflow from './TrustCRMTool'
import AutomationBenefits from '../automation/AutomationBenefits'
import CRMToolService from './CRMToolService'
import TrustCRMTool from './TrustCRMTool'
import TrustUs from '@/component/common/TrustUs'

function CRMTools() {
  return (
    <>
      <HeroSection />
      <CRMToolService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
      // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <TrustCRMTool />
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

export default CRMTools
