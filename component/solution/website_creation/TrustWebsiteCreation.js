import { CheckCheck } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TrustWebsiteCreation() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Automation benefits data
  const automationBenefits = [
    {
      id: 1,
      text: "Centralized Data Management",
      color: "text-blue-600"
    },
    {
      id: 2,
      text: "Improved Customer Relationships",
      color: "text-green-600"
    },
    {
      id: 3,
      text: "Enhanced Communication",
      color: "text-purple-600"
    },
    {
      id: 4,
      text: "Increased Productivity",
      color: "text-orange-600"
    },
    {
      id: 5,
      text: "Strategic Decision-Making",
      color: "text-green-600"
    },
    {
      id: 6,
      text: "Scalability and Growth",
      color: "text-teal-600"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <section className="bg-gray-200 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Trust Us
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                We Know Our Stuff!
              </h2>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
              Let Us Help
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                 It's all in one place
                </h3>
                <div className="">
              
                  <p className='text-gray-600  text-justify'> Your website is an essential tool in today’s digital world. Our services can help you integrate it with all your social media platforms seamlessly. Not only that, but we can also connect it to your CRM, which enables you to interact with your leads. This helps you nurture them and build long-lasting relationships. With our integrated software provider, you can send emails, assign leads to your team, or give them a call with ease. We aim to make your website work for you, and our services are tailored to meet your needs. </p>
                 
                </div>
              </div>
            </div>
            {/* Right Side - Illustration */}
            <div className={`flex justify-center items-center transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Image
                src="/images/website_creation1.png"
                alt="Workflow Illustration"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Ready to get started?
              </h2>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
              Contact Us Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}