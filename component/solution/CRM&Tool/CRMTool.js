import React from 'react'
import HeroSection from './HeroSection'
import WorkflowServices from './CRMToolService'
import TrustWorkflow from './TrustCRMTool'
import AutomationBenefits from '../automation/AutomationBenefits'
import CRMToolService from './CRMToolService'
import TrustCRMTool from './TrustCRMTool'

function CRMTools() {
  return (
    <>
      <HeroSection/>
      <CRMToolService/>
      <TrustCRMTool/>
     
      <AutomationBenefits/>

    </>
  )
}

export default CRMTools
