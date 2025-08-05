import React from 'react'

const Hero = () => {
  return (
    <div className='pt-7 max-w-7xl flex p-8 md:p-12 flex-col md:flex-row items-center justify-between mx-auto my-10'>
      <div className=''>
        <h1 className='text-black text-4xl md:text-5xl font-medium leading-tight'>Start Your <span className='font-bold'>Business</span>  &</h1>
        <p className='text-black'>In the world of digital marketing, whether you are a small business, start-up, or even a big company, we can help you grow your audience, scale your business, and optimize your working flow.</p>
        <div className='flex mt-28 gap-5'>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" className='text-blue-800'/></svg>
                <p className='text-gray-700'>Facebook</p>
            </div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram text-orange-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <p className='text-gray-700'>Instagram</p>
            </div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin text-blue-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <p className='text-gray-700'>Linkedin</p>
            </div>
        </div>
      </div>
      <img src="/images/isometric_12.jpg" alt="Followers" className="w-lg h-auto object-cover" />
    </div>
  )
}

export default Hero
