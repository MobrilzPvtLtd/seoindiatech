import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      role: "UX Designer",
      company: "@Brello",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      testimonial: "I was looking for a way to streamline my design process and the Anima's Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael L.",
      role: "Creative Director",
      company: "@Yo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 4,
      testimonial: "The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"
    },
    {
      id: 3,
      name: "Lauren M.",
      role: "UI Designer",
      company: "@Boo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      rating: 5,
      testimonial: "Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300' 
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Star Rating at the top */}
              <div className="flex space-x-1 mb-6 justify-center">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex flex-col items-center text-center mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-blue-50 dark:ring-blue-900/30 shadow-md">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <span className="font-medium">{testimonial.role}</span> <span className="text-blue-600 dark:text-blue-400">{testimonial.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center hidden">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join over 4,000+ happy customers who have transformed their online presence
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;