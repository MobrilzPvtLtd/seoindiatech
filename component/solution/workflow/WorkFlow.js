import React from "react";
import HeroSection from "./HeroSection";
import WorkFlowService from "./WorkflowService"; 
import AutomationBenefits from "../automation/AutomationBenefits"; 
import TrustWorkFlow from "./TrustWorkflow";




function WorkFlow() {
  return (
    <>
      <HeroSection />
      <WorkFlowService />
      <TrustWorkFlow/>
      <AutomationBenefits />
    </>
  );
}

export default WorkFlow;
