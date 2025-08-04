import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Teams from './Teams'
import Socialmediastrategies from './Socialmediastrategies'
import TestimonialCarousel from './Testimonial'
import SEO_Today from './SEO_Today'

function HomePage() {
  return (
    <>
      <Hero/>
      <Teams/>
      <Services/>
      <Socialmediastrategies/>
      <SEO_Today/>
      <TestimonialCarousel/>
    </>
  )
}

export default HomePage
