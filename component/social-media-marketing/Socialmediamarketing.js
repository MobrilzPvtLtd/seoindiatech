import React from 'react'
import Servicehero from './Servicehero'
import Manage from './Manage'
import Ourservices from './Ourservices'
import Communicate from './Communicate'
import FAQComponent from '../common/FAQComponent'
import NetworkSection from './Network'

const Socialmediamarketing = () => {
  return (
    <div>
      <Servicehero/>
      <Manage/>
      <Ourservices/>
      <Communicate/>
      <NetworkSection/>
      <FAQComponent/>
    </div>
  )
}

export default Socialmediamarketing
