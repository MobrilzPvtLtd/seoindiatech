import React, { useState } from 'react';
import { Plus, Minus, CheckCircle } from 'lucide-react';

const Communicate = () => {
  const [showPost, setShowPost] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 gap-12">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://www.digitalyzeit.com/wp-content/uploads/2024/08/Growth-Marketing-Service-Communicate-Image-1024x655.webp"
          alt="Communicate Illustration"
          className="w-full rounded-xl shadow-lg"
        />

        {/* Toggle Button */}
        <button
          onClick={() => setShowPost(!showPost)}
          className="absolute top-4 left-4 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          {showPost ? <Minus className="w-5 h-5 text-black" /> : <Plus className="w-5 h-5 text-black" />}
        </button>

        {/* Slide Down Content */}
        {showPost && (
          <div className="absolute top-20 left-4 bg-white p-4 rounded-xl shadow-xl w-72 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2">Your Post</h3>
            <p className="text-sm text-gray-700 mb-2">
              Lorem ipsum dolor sit amet consectetur. Metus mi in et mattis at vel aliquam turpis et.
              Sed tellus tortor mus amet non placerat mattis quis.
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-700 mb-2">
              <li>Risus a fringilla tellus.</li>
              <li>Amet non placerat mattis quis.</li>
            </ol>
            {/* Social/Icons Placeholder */}
            <div className="flex gap-3 text-xl text-gray-600">
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Communicate<br />Efficiently
        </h2>
        <p className="text-gray-700 mb-6">
          Discover precisely how you’re delivering value throughout every phase of the customer experience, and take action accordingly.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-lg text-gray-800">
            <CheckCircle className="text-blue-600 w-6 h-6" />
            Write better and faster with Writing Assistant
          </li>
          <li className="flex items-center gap-3 text-lg text-gray-800">
            <CheckCircle className="text-blue-600 w-6 h-6" />
            Boost content via rescheduling
          </li>
          <li className="flex items-center gap-3 text-lg text-gray-800">
            <CheckCircle className="text-blue-600 w-6 h-6" />
            Create content—with a personal touch
          </li>
          <li className="flex items-center gap-3 text-lg text-gray-800">
            <CheckCircle className="text-blue-600 w-6 h-6" />
            Stay consistent on Instagram
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Communicate;
