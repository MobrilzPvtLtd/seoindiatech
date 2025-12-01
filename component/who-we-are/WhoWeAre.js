import React from 'react'
import Hero from './Hero'
import Navigate from './Navigate'
import Journey from './Journey'
import TrustUs from '../common/TrustUs'
import Features from './Features'
import Solutionswho from './Solutionswho'
import Tools from './Tools'
import Audience from './Audience'
import Insightimpact from './Insightimpact'
import Services from './Services'
import WhyChoose from './WhyChoose'
import Vission from './Vission'

function WhoWeAre() {
  return (
    <div>
      <Hero />
      <Navigate />
      <Insightimpact />
      <Journey />
      <Services />
      <Solutionswho />
      <TrustUs
        title="Trust Us" 
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900"
      />
      <WhyChoose />
      <Features />
      <Vission />
      <Tools/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        buttonGradient="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-gray-800 dark:to-gray-900"
      />
      <Audience/>
    </div>
  )
}

export default WhoWeAre
