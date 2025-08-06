import React from "react";
import HeroSection from "./HeroSection";
import WorkFlowService from "./WorkflowService"; 
import AutomationBenefits from "../automation/AutomationBenefits"; 
import TrustWorkflow from "./TrustWorkFlow";

function WorkFlow() {
  return (
    <>
      <HeroSection />
      <WorkFlowService />
      <TrustWorkflow />
      <AutomationBenefits />
    </>
  );
}

export default WorkFlow;
