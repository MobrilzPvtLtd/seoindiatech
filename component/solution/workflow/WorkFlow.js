import React from "react";
import HeroSection from "./HeroSection";
import WorkFlowService from "./WorkflowService";
import AutomationBenefits from "../automation/AutomationBenefits";
import TrustWorkFlow from "./TrustWorkflow";
import TrustUs from "@/component/common/TrustUs";
import WorkflowAutomationSection from "./WorkflowAutomationSection";
import WorkflowMarketResearch from "./WorkflowMarketResearch";
import MarketingWorkflowSection from "./MarketingWorkflowSection";




function WorkFlow() {
  return (
    <>
      <HeroSection />
      <WorkFlowService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <TrustWorkFlow />
       <WorkflowAutomationSection/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-gray-800 dark:to-gray-900"
      />
      <WorkflowMarketResearch/>
      <AutomationBenefits />
       <MarketingWorkflowSection/>

     
    </>
  );
}

export default WorkFlow;
