import React from 'react'
import ReputationHero from './ReputationHero'
import ReputationFAQ from './ReputationFAQ'
import ServiceCovers from './ServiceCovers'
import ORMServices from './ORMServices'
import ORMInfoSection from './ORMInfoSection'
import OurProcess from './OurProcess'
import ORMServiceFit from './ORMServiceFit'

export default function OnlineReputation() {
  return (
    <>
      <ReputationHero/>
      <ServiceCovers/>
      <ORMServices/>
      <ORMInfoSection/>
      <OurProcess/>
      <ORMServiceFit/>
      <ReputationFAQ/>
    </>
  )
}
