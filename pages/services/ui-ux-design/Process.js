import React from 'react'

const Process = () => {
  return (
    <div className='bg-gray-200 py-20'>
      <h1 className='text-green-950 text-6xl font-bold leading-tight px-8 md:px-36 mb-8'>
        Our Proven UI/UX Design<br /> Process
      </h1>
      <p className='text-gray-900 text-left px-8 md:px-36 max-w-7xl mb-16'>
        At <span className='text-blue-700 font-bold'>SEO India Tech,</span> we don’t just design, we innovate. Our process ensures every touchpoint enhances user engagement and drives business results.
      </p>

      <div className='px-8 md:px-36 mb-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Card 1 */}
        <div className='bg-white shadow-md rounded-xl p-8 border border-black transform hover:scale-105 transition duration-500 '>
          <h2 className='text-green-950 text-2xl font-bold mb-4'>Deep-Dive Research & Strategy</h2>
          <p className='text-gray-700 mb-4'>
            We analyze user behaviors, industry trends, and competitor landscapes to develop a UI/UX strategy tailored to your audience.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>Data-driven user research</li>
            <li>Competitor benchmarking</li>
            <li>Persona creation & journey mapping</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className='bg-white shadow-md rounded-xl p-8 border border-black transform hover:scale-105 transition duration-500'>
          <h2 className='text-green-950 text-2xl font-bold mb-4'>Interactive Wireframing & Prototyping</h2>
          <p className='text-gray-700 mb-4'>
            We visualize the user journey and interactions before development, ensuring an effortless experience.
          </p>
          <ul className='list-disc list-inside text-gray-700 space-y-1'>
            <li>User flow architecture</li>
            <li>Low & high-fidelity wireframes</li>
            <li>Clickable prototypes for real-world testing</li>
          </ul>
        </div>
      </div>

      <div className='px-8 md:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  {/* Card 1 */}
  <div className='bg-white shadow-md rounded-xl p-8 border border-black transform transition duration-500 hover:scale-105 animate-fade-up'>
    <h2 className='text-green-950 text-2xl font-bold mb-4'>Bespoke UI Design That Engages</h2>
    <p className='text-gray-700 mb-4'>
      Our UI designs are more than just beautiful—they’re purpose-driven and strategically crafted to enhance usability.
    </p>
    <ul className='list-disc list-inside text-gray-700 space-y-1'>
      <li>Custom UI with a brand-focused aesthetic</li>
      <li>Mobile-first & responsive designs</li>
      <li>Consistency across platforms for seamless interactions</li>
    </ul>
  </div>

  {/* Card 2 */}
  <div className='bg-white shadow-md rounded-xl p-8 border border-black transform transition duration-500 hover:scale-105 animate-fade-up'>
    <h2 className='text-green-950 text-2xl font-bold mb-4'>Optimization & Performance Testing</h2>
    <p className='text-gray-700 mb-4'>
      We rigorously test and refine to ensure peak performance, accessibility, and user satisfaction.
    </p>
    <ul className='list-disc list-inside text-gray-700 space-y-1'>
      <li>A/B testing to maximize conversions</li>
      <li>User behavior analysis & heatmaps</li>
      <li>Ongoing UX optimization for continuous improvement</li>
    </ul>
  </div>

  {/* Card 3 */}
  <div className='bg-white shadow-md rounded-xl p-4 border flex items-center justify-center border-black transform transition duration-500 hover:scale-105 animate-fade-up'>
    <img
      src='https://www.digitalyzeit.com/wp-content/uploads/2025/02/UX-design-768x1365.webp'
      alt='Team Meeting'
      className='rounded-lg w-full object-cover max-h-72'
    />
  </div>
</div>

    </div>
  )
}

export default Process
