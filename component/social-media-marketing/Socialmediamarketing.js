import React from 'react'
import Servicehero from './Servicehero'
import Manage from './Manage'
import Ourservices from './Ourservices'
import Communicate from './Communicate'
import FAQComponent from '../common/FAQComponent'
import NetworkSection from './Network'
import WhyChooseSocialMedia from './WhyChooseSocialMedia'
import SocialMediaBenefits from './SocialMediaBenefits'
import IndustriesWeServe from './IndustriesServe'
import SocialMediaCTA from './SocialMediaCTA'

const Socialmediamarketing = () => {
  return (
    <div>
      <Servicehero/>
      <Manage/>
      <Ourservices/>
      <Communicate/>
      <WhyChooseSocialMedia/>
      <SocialMediaBenefits/>
      <IndustriesWeServe/>
      <SocialMediaCTA/>
      <NetworkSection/>
      <FAQComponent/>
    </div>
  )
}

export default Socialmediamarketing
