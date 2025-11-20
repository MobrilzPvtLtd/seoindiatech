import React from 'react'
import Seohero from './Seohero'
import Expertise from './Expertise'
import Potential from './Potential'
import Matters from './Matters'
import Branding from './Branding'
import Form from './Form'
import SEOServicesSection from './SEOServicesSection'
import LocalAndEcommerceSEO from './LocalAndEcommerceSEO'

const SEO = () => {
  return (
    <>
      <Seohero/>
      <Expertise/>
      <Potential/>
      <LocalAndEcommerceSEO/>
      <Matters/>
      <Branding/>
      <Form/>
      <SEOServicesSection/>
    </>
  )
}

export default SEO
