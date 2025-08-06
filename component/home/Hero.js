import React from 'react';

const Hero = () => {
return (
<div className='bg-cyan-100 dark:bg-amber-800 border border-gray-300 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-7xl mx-auto my-10'>

{/* Left Content */}
<div className="max-w-xl space-y-4 w-full md:w-1/2">
<span className="inline-block bg-white shadow-md border rounded-full px-4 py-1 text-sm font-medium text-black">
⭐ Digital Marketing
</span>
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
Empowering Your Digital <span className="text-blue-700">Journey</span>
</h1>
<p className="text-gray-700 text-base md:text-lg">
Digitalyzeit is a digital marketing agency that empowers startups and
established enterprises to grow and thrive online. We help businesses
achieve lasting success through innovative strategies and tailored
solutions. Our team of experts crafts customized strategies that
resonate with your target audience and drive meaningful results.
</p>
<button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
Get started now
</button>
</div>

{/* Right Images (Half Screen) */}
<div className="mt-8 md:mt-0 grid grid-cols-2 gap-4 w-full md:w-1/2">
{/* Card 1 */}
<div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
<img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-1.webp" alt="Manage Account" className="w-full h-auto object-cover" />
</div>

{/* Card 2 */}
<div className="bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300">
<img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-4.webp" alt="Followers" className="w-full h-auto object-cover" />
</div>

{/* Card 3 */}
<div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
<img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-2.webp" alt="Work" className="w-full h-auto object-cover" />
<img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-3.webp" alt="Likes" className="w-full h-auto object-cover border-t" />
</div>

{/* Card 4 */}
<div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
<img src="https://www.digitalyzeit.com/wp-content/uploads/2024/07/Growth-Marketing-Hero-Image-5.webp" alt="Post" className="w-full h-auto object-cover" />
</div>
</div>
</div>
)
}

export default Hero;