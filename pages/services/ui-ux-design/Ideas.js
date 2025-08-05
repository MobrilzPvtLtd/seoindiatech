import React from 'react';

const Ideas = () => {
  return (
    <div className='bg-gray-200 py-20 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 mb-16'>
        
        {/* Left Column - Heading */}
        <div className='md:w-1/2'>
          <h1 className='text-green-950 text-6xl font-bold leading-tight'>
            Turn Your Ideas <br /> Into Reality
          </h1>
        </div>

        {/* Right Column - Text and Button */}
        <div className='md:w-1/2'>
          <p className='text-gray-700 text-lg mb-6'>
            A frictionless, visually stunning interface can be the difference
            between a bounce and a conversion. At <span className='font-bold'>Digitalyzeit</span>, we specialize
            in <span className='font-bold'>revolutionary UI/UX solutions</span> that captivate users and drive
            measurable success.
          </p>
          <button className='bg-green-950 text-white px-6 py-3 rounded-md text-base hover:bg-green-800 transition'>
            Let's Hear From You
          </button>
        </div>

      </div>
      <h1 className='text-7xl text-white w-full h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat'>Crafting Digital Experiences That Convert</h1>

    </div>
  );
};

export default Ideas;
