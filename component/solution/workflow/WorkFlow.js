import React from 'react'
import HeroSection from './HeroSection'
import WorkFlowService from './WorkflowService'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustWorkFlow from './TrustWorkflow'
import TrustUs from '@/component/common/TrustUs'
import WorkflowAutomationSection from './WorkflowAutomationSection'
import WorkflowMarketResearch from './WorkflowMarketResearch'
import MarketingWorkflowSection from './MarketingWorkflowSection'

function WorkFlow() {
  return (
    <>
      <HeroSection />
      <WorkFlowService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <TrustWorkFlow />
      <WorkflowAutomationSection />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <WorkflowMarketResearch />
      <AutomationBenefits />
      <MarketingWorkflowSection />
    </>
  )
}

export default WorkFlow
