import React from 'react'

const Services = () => {
return (
<div className='grid md:grid-cols-3 gap-6 mt-32 max-w-7xl mx-auto px-4'>

{/* Left two columns for cards */}
<div className='md:col-span-2 grid grid-cols-2 gap-6'>
{[
{
title: 'Search Engine Optimization',
desc: "SEO: Boost your website’s visibility and rank higher on search engines with our expert SEO strategies."
},
{
title: 'Social Media Marketing',
desc: "Enhance your brand’s online presence and engage your audience through effective social media strategies."
},
{
title: 'Pay-Per-Click (PPC) Advertising',
desc: "Drive targeted traffic and maximize your ROI with our strategic PPC campaigns."
},
{
title: 'Content Marketing',
desc: "Create compelling and relevant content that resonates with your audience and establishes your brand’s authority."
},
{
title: 'Email Marketing',
desc: "Reach your audience directly with personalized email campaigns designed to nurture leads and drive conversions."
},
{
title: 'Web Design and Development',
desc: "Develop a visually stunning and user-friendly website that reflects your brand and converts visitors into customers."
},
].map((service, index) => (
<div key={index} className='bg-red-400 text-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform'>
<h2 className='text-xl font-bold mb-2 text-black'>{service.title}</h2>
<p className='text-sm'>{service.desc}</p>
</div>
))}
</div>

{/* Right side description card */}
<div className='bg-black text-white p-8 rounded-xl'>
<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Our Services</h1>
<p className='mb-8 text-sm leading-relaxed'>
At Digitalyzeit, we offer a comprehensive suite of digital marketing solutions designed to elevate your brand and drive
measurable success. Our services are tailored to meet your unique business needs, leveraging the latest technology and
industry best practices to ensure optimal results. Explore how our expertise can transform your digital presence and
achieve your strategic goals.
</p>
<button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 hover:border-none hover:text-black transition duration-200 border border-white">Ready to call</button>
</div>
</div>
)
}

export default Services