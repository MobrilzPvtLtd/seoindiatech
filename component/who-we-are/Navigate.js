import React from 'react';
import { Star } from 'lucide-react';

const Navigate = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="flex-1 space-y-4">
          <div className="flex space-x-2 text-yellow-500">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-6 h-6" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Navigating the <br />
            Digital Landscape <br />
            with Digitalyzeit
          </h2>
          <p className="text-lg text-gray-600">
            In the ever-evolving digital realm, success hinges on understanding
            the intricacies of automation, market research, workflow building,
            and advertising. At Digitalyzeit, we’ve mastered these elements,
            empowering businesses with over a decade of expertise and a proven
            track record of serving over 1000 clients with unwavering efficiency
            and precision.
          </p>
        </div>

        <div className="flex-1">
          <img src="https://www.digitalyzeit.com/wp-content/uploads/2023/11/Untitled-3-1024x540.png" alt="Navigate with Digitalyzeit" className="rounded-xl w-full object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Navigate;
