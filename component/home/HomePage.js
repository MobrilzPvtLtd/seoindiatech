import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Teams from './Teams'
import Socialmediastrategies from './Socialmediastrategies'

import SEO_Today from './SEO_Today'
import SEOSolution from './SEO_Solution'
import Solutions from './Solutions'
import Testimonial from './Testimonial'

function HomePage() {
  return (
    <>
      <Hero/>
      <Teams/>
      <Services/>
      <Socialmediastrategies/>
      <Solutions/>
      <SEOSolution/>
      <SEO_Today/>
      <Testimonial/>
    </>
  )
}

export default HomePage
