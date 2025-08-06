import React from "react";

const ContactUsSection = () => (
    <section className="max-w-7xl mx-auto py-20 px-5">
        {/* Top Heading */}
        <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">Contact Us</h1>
            <p className="text-gray-500 text-xl">
                Fill out the form and one of our sales team will contact you within 24 hours
            </p>
        </div>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Form Card */}
            <div>
                <div className="bg-white  rounded-2xl border border-gray-200 shadow-xl p-8 relative transition-all hover:shadow-2xl">
                    <div className="absolute -top-16 w-full left-1/2 -translate-x-1/2  text-center py-6 rounded-full font-bold text-lg">
                        Relax and let us do the heavy lifting
                    </div>
                    {/* Floating Title */}
                    <form className="mt-10 space-y-6" onSubmit={e => e.preventDefault()}>
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="fullname">Full Name <span className="text-red-600">*</span></label>
                            <input
                                id="fullname"
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full border-b-2 border-gray-200 focus:border-blue-600 transition py-2 px-1 bg-transparent outline-none text-base"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email Address <span className="text-red-600">*</span></label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder="you@email.com"
                                className="w-full border-b-2 border-gray-200 focus:border-blue-600 transition py-2 px-1 bg-transparent outline-none text-base"
                            />
                        </div>
                        {/* Phone */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="phone">
                                <span className="flex items-center">
                                    Phone Number <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                required
                                placeholder="Your phone number"
                                className="w-full border-b-2 border-gray-200 focus:border-blue-600 transition py-2 px-1 bg-transparent outline-none text-base"
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                maxLength={180}
                                placeholder="How can we help you?"
                                className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-blue-600 transition resize-none text-base"
                            ></textarea>
                            <div className="text-xs text-gray-400 text-right mt-1">0 / 180</div>
                        </div>
                        {/* reCAPTCHA placeholder */}
                        <div className="flex items-center gap-3 mt-2">
                            <input type="checkbox" id="recaptcha" className="accent-blue-600" disabled />
                            <img
                                src="images/contactusbanner.png"
                                alt="reCAPTCHA"
                                className="h-8"
                            />
                            <span className="ml-2 text-xs text-gray-400">
                                Privacy - Terms
                            </span>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-2 inline-block text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 font-semibold px-8 py-2 rounded-full shadow transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Right: Side Info */}
            <div className="flex flex-col items-center lg:items-start">
                {/* Illustration */}
                <img
                    src="images/contactusbanner.png"
                    alt="Contact illustration"
                    className="mb-8 w-fit rounded-xl max-w-full drop-shadow-lg"
                />
                {/* Contact Info Card */}
                <div className="bg-gray-50 rounded-xl shadow-md px-8 py-7 w-full ">
                    <span className="text-lg font-semibold text-blue-700 block mb-4">
                        Already a client, or need direct help? <br className="hidden md:block" />Contact us directly:
                    </span>
                    <div className="mb-5 flex gap-3 items-start">
                        <span className="inline-flex items-center justify-center bg-white shadow text-blue-600 rounded-full w-9 h-9">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5M8.25 12h7.5M8.25 16.5h3.75" />
                            </svg>
                        </span>
                        <div>
                            <div className="text-gray-700 text-sm mb-1">Use the phone number to make a quick call</div>
                            <div className="flex justify-between">
                                <a href="tel:+201111772948" className="text-blue-700 block hover:text-blue-900 font-medium">+20 1111772948</a>
                                <a href="tel:+6282279400935" className="text-blue-700 block  hover:text-blue-900 font-medium">+6282279400935</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className="inline-flex items-center justify-center bg-white shadow text-blue-600 rounded-full w-9 h-9">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4M12 16V8" />
                            </svg>
                        </span>
                        <div>
                            <div className="text-gray-700 text-sm mb-1">Send us a direct email</div>
                            <a href="mailto:Info@digitalyzeit.com" className="text-blue-700 hover:text-blue-900 font-medium">Info@digitalyzeit.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactUsSection;