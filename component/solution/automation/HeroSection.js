import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [activeBot, setActiveBot] = useState(0);

  // Cycle through different bot states for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBot((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <> 
    <div className=" bg-white"/>
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Digital
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Digital automation is the key to eliminating repetitive tasks, reducing human errors, 
                and accelerating workflows. By integrating AI-driven processes, robotic process 
                automation (RPA), and intelligent business automation tools, we help businesses:
              </p>
            </div>

            <div className="space-y-6">
              <div className="group hover:bg-blue-50 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Increase Efficiency
                </h3>
                <p className="text-gray-600">
                  Automate routine tasks and optimize workflows to save time and resources.
                </p>
              </div>

              <div className="group hover:bg-green-50 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reduce Costs
                </h3>
                <p className="text-gray-600">
                  Minimize operational expenses by reducing manual labor and increasing precision.
                </p>
              </div>

              <div className="group hover:bg-purple-50 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Enhance Customer Experience
                </h3>
                <p className="text-gray-600">
                  Deliver seamless interactions with automated chatbots, email workflows, and personalized marketing.
                </p>
              </div>

              <div className="group hover:bg-yellow-50 p-4 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Improve Scalability
                </h3>
                <p className="text-gray-600">
                  Scale effortlessly with cloud-based automation solutions tailored to your business growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center items-center">
           <Image 
                src={`/images/herobg.jpg`}
                alt="Automation Bot"
                width={300}
                height={300}
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-lg shadow-lg"
                />
           
          </div>
        </div>
      </div>
    </>
  );
}