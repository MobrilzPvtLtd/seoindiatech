import React, { useState } from 'react';
import { Plus, Minus, CheckCircle, MapPin, Calendar, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Communicate = () => {
  const [showPost, setShowPost] = useState(false);

  return (
    <section className="bg-white dark:bg-background pt-4 pb-8">
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 gap-12">
        {/* Left Section */}
        <div className="relative w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg ">
            <Image
              src="/images/services/copywriting.png"
              alt="Communicate Illustration"
              width={1024}
              height={655}
              className="w-full"
            />
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setShowPost(!showPost)}
            className="absolute top-4 left-4 bg-card dark:bg-card p-2 rounded-full shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
            aria-label={showPost ? "Hide post details" : "Show post details"}
          >
            {showPost ? 
              <Minus className="w-5 h-5 text-heading" /> : 
              <Plus className="w-5 h-5 text-heading" />
            }
          </button>

          {/* Slide Down Content */}
          {showPost && (
            <div className="absolute top-20 left-4 bg-card dark:bg-card p-4 rounded-xl shadow-xl w-72 transition-all duration-300 border border-border dark:border-border">
              <h3 className="text-lg font-semibold mb-2 text-heading">Your Post</h3>
              <p className="text-sm text-body mb-2">
                Lorem ipsum dolor sit amet consectetur. Metus mi in et mattis at vel aliquam turpis et.
                Sed tellus tortor mus amet non placerat mattis quis.
              </p>
              <ol className="list-decimal list-inside text-sm text-body mb-2">
                <li>Risus a fringilla tellus.</li>
                <li>Amet non placerat mattis quis.</li>
              </ol>
              {/* Social/Icons Placeholder */}
              <div className="flex gap-3 text-muted">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <Globe className="w-5 h-5" aria-hidden="true" />
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Communicate<br />Efficiently
          </h2>
          <p className="text-body mb-6">
            We help you uncover how you provide value at every stage of the customer journey, enabling you to strategically respond for maximum impact.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-lg text-heading dark:text-gray-200">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6" />
              Enhance Your Writing with Our Advanced Assistant
            </li>
            <li className="flex items-center gap-3 text-lg text-heading dark:text-gray-200">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6" />
              Boost Content Performance with Strategic Rescheduling
            </li>
            <li className="flex items-center gap-3 text-lg text-heading dark:text-gray-200">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6" />
              Crafting content with a personal touch.
            </li>
            <li className="flex items-center gap-3 text-lg text-heading dark:text-gray-200">
              <CheckCircle className="text-primary dark:text-accent w-6 h-6" />
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