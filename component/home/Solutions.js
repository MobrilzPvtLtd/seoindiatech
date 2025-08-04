import React from 'react'

const Solutions = () => {
  return (
    <div className='bg-cyan-100 p-24 '>
      <div className='flex justify-center gap-8'>
        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Digital-Marketing-Innovative-Image-1.webp" alt="Manage Account" className="w-lg h-auto object-cover rounded-2xl" />
        <div className='max-w-lg border border-solid border-black p-6 rounded-2xl'>
            <h1 className="text-4xl md:text-4xl font-bold text-blue-700 leading-tight ">
            Innovative UI/UX Solutions for You
            </h1>
            <p className='text-gray-800'>At Digitalyzeit, we harmonize creativity with functionality to design intuitive interfaces that leave a lasting impression. 
                Elevate your digital presence with user experiences that resonate deeply and effectively connect with your audience.</p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition mt-16">
                Learn more
            </button>
        </div>
      </div>
      <div className='flex justify-center gap-8 pt-14'>
        <div className='max-w-lg border border-solid border-black p-6 rounded-2xl'>
            <h1 className="text-4xl md:text-4xl font-bold text-blue-700 leading-tight ">
            Unparalleled Digital Branding Solutions
            </h1>
            <p className='text-gray-800'>At Digitalyzeit, we excel at navigating the digital landscape to fuel engagement, boost conversions, and ensure your brand’s triumph. 
                Trust us to elevate your brand to new heights.</p>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition mt-16">
                Learn more
            </button>
        </div>
        <img src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Digital-Marketing-Digital-Image-1.webp" alt="Manage Account" className="w-lg h-auto object-cover rounded-2xl" />
      </div>
    </div>
  )
}

export default Solutions
