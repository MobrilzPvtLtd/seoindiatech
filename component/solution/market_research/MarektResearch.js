import React from 'react'
import HeroSection from './HeroSection'
import MarketResearchService from './MarketResearchService'
import TrustMarketResearch from './TrustMarketResearch'
import AutomationBenefits from '../automation/AutomationBenefits'
import TrustUs from '@/component/common/TrustUs'
import BoostBrandStrategy from './BoostBrandStrategy'
import WhyMarketResearch from './WhyMarketResearch'
import MarketStrategy from './MarketStrategy'

function MarektResearch() {
  return (
    <>

      <HeroSection />
      <MarketResearchService />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <TrustMarketResearch />
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-cream to-background dark:from-background dark:to-surface"
        buttonGradient="bg-gradient-to-r from-primary to-secondary dark:from-surface dark:to-background"
      />
      <BoostBrandStrategy />
      <AutomationBenefits />
      <WhyMarketResearch />
      <MarketStrategy />
    </>
  )
}

export default MarektResearch
