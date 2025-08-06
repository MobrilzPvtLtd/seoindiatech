import Blog from '@/component/blog/Blog'
import React from 'react'
import Ideas from './Ideas'
import Why from './Why'
import Process from './Process'
import Branding from './Branding'
import Form from './Form'

function page() {
  return (
   <div>
       <Ideas/>
       <Why/>
       <Process/>
       <Branding/>
       <Form/>
   </div>
  )
}

export default page
