import React from 'react';
import { Star } from 'lucide-react';

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
        className={`w-5 h-5 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Profile Section */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonial.role} {testimonial.company}
                </p>
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  "{testimonial.testimonial}"
                </p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;