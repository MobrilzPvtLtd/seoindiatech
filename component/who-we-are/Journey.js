import React from 'react';
import { CheckCircle } from 'lucide-react';

const Journey = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="w-full lg:w-1/2">
          <img 
            src="https://www.digitalyzeit.com/wp-content/uploads/2023/12/Grey-Black-Fresh-Neutrals-Download-Page-Website-Download-Page.png" 
            alt="Journey Graphic"
            className="hidden md:block rounded-xl w-full object-cover"
          />

        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Story: A Journey of <br /> Innovation and Excellence.
          </h2>
          <p className="text-gray-700 text-lg">
            Our journey began with a vision to revolutionize the way businesses interact with the digital world. We recognized the transformative power of automation and its ability to streamline processes, boost productivity, and drive growth. With this passion, we embarked on a mission to become the trusted partner for businesses seeking to navigate the complexities of the digital landscape.
          </p>

          <div className="space-y-4">
            <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle className="text-blue-600 w-6 h-6 mr-3 mt-1" />
              <p className="text-gray-700">
                Streamline your operations, eliminate repetitive tasks, and free up your team to focus on strategic initiatives.
              </p>
            </div>
            <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle className="text-blue-600 w-6 h-6 mr-3 mt-1" />
              <p className="text-gray-700">
                Our workflow solutions optimize your operations, eliminate bottlenecks, and enhance collaboration across teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
