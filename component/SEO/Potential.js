import Image from 'next/image'
import React from 'react'

const Potential = () => {
  return (
    <div className="bg-gray-200 px-6 py-20 text-center">
      <h1 className="text-3xl md:text-6xl max-w-6xl font-bold leading-snug text-black text-center mx-auto">
        Our SEO Expertise: A Data-Driven Approach to Growth
      </h1>

      <div className="flex justify-center mt-16">
        <Image
          src="https://www.digitalyzeit.com/wp-content/uploads/2025/02/SEO-agency.webp"
          alt="Manage Account"
          width={900}
          height={600}
          className="w-full max-w-4xl rounded-3xl border border-gray-300 object-contain shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  )
}

export default Potential
