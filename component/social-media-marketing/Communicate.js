import React, { useState } from 'react';
import { Plus, Minus, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Communicate = () => {
  const [showPost, setShowPost] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900 pt-4 pb-8">
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 gap-12">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Service-Communicate-Image-1024x655.webp"
              alt="Communicate Illustration"
              width={1024}
              height={655}
              className="w-full"
            />
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setShowPost(!showPost)}
            className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            aria-label={showPost ? "Hide post details" : "Show post details"}
          >
            {showPost ? 
              <Minus className="w-5 h-5 text-gray-900 dark:text-white" /> : 
              <Plus className="w-5 h-5 text-gray-900 dark:text-white" />
            }
          </button>

          {/* Slide Down Content */}
          {showPost && (
            <div className="absolute top-20 left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl w-72 transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your Post</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Lorem ipsum dolor sit amet consectetur. Metus mi in et mattis at vel aliquam turpis et.
                Sed tellus tortor mus amet non placerat mattis quis.
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 mb-2">
                <li>Risus a fringilla tellus.</li>
                <li>Amet non placerat mattis quis.</li>
              </ol>
              {/* Social/Icons Placeholder */}
              <div className="flex gap-3 text-xl text-gray-600 dark:text-gray-400">
                <span>📍</span>
                <span>📅</span>
                <span>🌐</span>
                <span>💬</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Communicate<br />Efficiently
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We help you uncover how you provide value at every stage of the customer journey, enabling you to strategically respond for maximum impact.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              Enhance Your Writing with Our Advanced Assistant
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              Boost Content Performance with Strategic Rescheduling
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              Crafting content with a personal touch.
            </li>
            <li className="flex items-center gap-3 text-lg text-gray-800 dark:text-gray-200">
              <CheckCircle className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              Maintain Consistency on Instagram
            </li>
          </ul>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Communicate;