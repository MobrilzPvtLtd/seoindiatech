import React from 'react'
import Hero from './Hero'
import Navigate from './Navigate'
import Journey from './Journey'
import TrustUs from '../common/TrustUs'
import Features from './Features'
import Solutionswho from './Solutionswho'
import Tools from './Tools'
import Audience from './Audience'

function WhoWeAre() {
  return (
    <div>
      <Hero />
      <Navigate />
      <Journey />
      <Solutionswho />
      <TrustUs
        title="Trust Us" 
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <Features />
      <Tools/>
      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800"
        // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />
      <Audience/>
    </div>
  )
}

export default WhoWeAre
