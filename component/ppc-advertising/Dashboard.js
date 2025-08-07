import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-white px-4 py-12'>

      <div className='text-center mb-8'>
        <h1 className='text-gray-900 text-2xl md:text-3xl font-semibold'>
          Dedicated Dashboard for Your Business
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <Image
          src="https://www.digitalyzeit.com/wp-content/uploads/2025/03/dashboard-user-panel-template.webp"
          alt="Manage Account"
          width={1600}
          height={900}
          layout="responsive"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default Dashboard
