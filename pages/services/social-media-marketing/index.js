import React from 'react'
import Servicehero from './Servicehero'
import Manage from './Manage'
import Ourservices from './Ourservices'
import Communicate from './Communicate'
import Network from './Network'
import FAQComponent from '@/component/common/FAQComponent'

export default function index() {
  return (
    <>
      <Servicehero />
      <Manage />
      <Ourservices/>
      <Communicate/>
      <Network/>
      <FAQComponent />
    </>
  )
}
