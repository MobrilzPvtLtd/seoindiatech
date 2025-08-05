import React from 'react'
import Hero from './Hero'
import Navigate from './Navigate'
import Journey from './Journey'
import TrustUs from '../common/TrustUs'

function WhoWeAre() {
  return (
    <div>
      <Hero />
      <Navigate />
      <Journey />
      <TrustUs
        title="Trust Us"
        subtitle="We Know Our Stuff!"
        buttonText="Let Us Help"
        bgGradient="bg-gradient-to-br from-slate-50 to-blue-200"
        // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />


      <TrustUs
        title="Ready to get started?"
        buttonText="Contact Us Now!"
        bgGradient="bg-gradient-to-br from-slate-50 to-blue-200"
        // buttonGradient="bg-gradient-to-r from-purple-600 to-pink-600"
      />

    </div>
  )
}

export default WhoWeAre
