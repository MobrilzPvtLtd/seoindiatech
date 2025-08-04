import React, { useState } from 'react';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    company: "Tech Corp",
    quote: "This service transformed our business operations. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director",
    company: "Grow Easy",
    quote: "The team was professional and delivered beyond our expectations.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Mike Johnson",
    role: "Product Manager",
    company: "Innovate Inc",
    quote: "Outstanding support and incredible results. We're thrilled!",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    company: "Future Tech",
    quote: "The solutions provided were innovative and highly effective.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialCard = ({ name, role, company, quote, image, cardClass }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden mx-2 flex flex-col h-[320px] border border-gray-200 ${cardClass}`}>
      <div className="h-16 bg-indigo-600"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <img
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200"
            src={image}
            alt={`${name}'s profile`}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm italic flex-grow">"{quote}"</p>
        <div className="flex items-center mt-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.784-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Testimonials</h1>
        <div className="relative">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, frameIndex) => (
            <div
              key={frameIndex}
              className={`flex transition-transform duration-500 ease-in-out ${
                frameIndex === currentIndex ? 'block' : 'hidden'
              }`}
            >
              {testimonials.slice(frameIndex * 3, frameIndex * 3 + 3).map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
                  <TestimonialCard
                    {...testimonial}
                    cardClass={`card card-${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none shadow-md"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 focus:outline-none shadow-md"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                } transition-colors duration-300`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;