import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    role: "UX Designer",
    company: "@Brello",
    avatar: "/images/sarah.png",
    rating: 5,
    testimonial: "The Anima Landing Page UI Kit saved me hours with its intuitive design and easy customization. It's a fantastic resource that streamlines workflow, enhances creativity, and ensures professional results. I highly recommend it to designers and teams!"
  },
  {
    id: 2,
    name: "Michael L.",
    role: "Creative Director",
    company: "@Yo",
    avatar: "/images/michael.png",
    rating: 4,
    testimonial: "The Landing Page UI Kit has transformed my agency's workflow. Its pre-designed templates and components allow us to deliver projects faster while maintaining consistency and quality. It has truly streamlined our process and improved client satisfaction."
  },
  {
    id: 3,
    name: "Lauren M.",
    role: "UI Designer",
    company: "@Boo",
    avatar: "/images/lauren.png",
    rating: 5,
    testimonial: "Anima's Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."
  },
  {
    id: 4,
    name: "James R.",
    role: "Marketing Head",
    company: "@Vivo",
    avatar: "/images/sarah.png",
    rating: 5,
    testimonial: "Excellent service and outstanding results. The team delivered beyond our expectations with a clear strategy and transparent reporting throughout the process."
  },
  {
    id: 5,
    name: "Emily W.",
    role: "Founder",
    company: "@Zeta",
    avatar: "/images/lauren.png",
    rating: 5,
    testimonial: "Professional, responsive, and results-oriented. Our organic traffic doubled within three months. Highly recommended for any business looking to grow online."
  }
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`w-4 h-4 ${index < rating
          ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300'
          : 'text-gray-300 dark:text-gray-600'
        }`}
    />
  ));
};

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 relative shrink-0 snap-center w-[calc(100%-2rem)] md:w-[calc(33.333%-1.34rem)]">
    <div className="absolute -top-3 -left-3 bg-blue-100 dark:bg-blue-900 rounded-full p-2">
      <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    </div>
    <div className="flex space-x-1 mb-6 justify-center">
      {renderStars(testimonial.rating)}
    </div>
    <div className="mb-6">
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center text-sm">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
    </div>
    <div className="flex flex-col items-center text-center mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-blue-50 dark:ring-blue-900/30 shadow-md relative">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={64}
          height={64}
          className="object-cover"
          style={{ width: '100%', height: '100%' }}
          loading="lazy"
        />
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
        {testimonial.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        <span className="font-medium">{testimonial.role}</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">{testimonial.company}</span>
      </p>
    </div>
  </div>
);

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const update = () => setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // GSAP scroll animation
  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
      )

      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children.length ? cardsRef.current.children : cardsRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', immediateRender: false,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' } }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [itemsPerView])

  const shouldSlide = testimonials.length > itemsPerView;

  const scrollToNext = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[0];
    if (!card) return;

    const cardWidth = card.offsetWidth + 32;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (!shouldSlide || isUserScrolling) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(scrollToNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [shouldSlide, scrollToNext, isUserScrolling]);

  const handleUserScrollStart = () => {
    setIsUserScrolling(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
  };

  const handleUserScrollEnd = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 3000);
  };

  return (
    <div ref={sectionRef} className="bg-gray-50 dark:bg-gray-800 py-14 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600 dark:text-gray-400">
            Hear from our satisfied customers about their experience with our products and services.
          </p>
        </div>

        {shouldSlide ? (
          <div
            ref={(el) => { scrollRef.current = el; cardsRef.current = el; }}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-3 px-4 touch-pan-x snap-x snap-mandatory"
            onTouchStart={handleUserScrollStart}
            onTouchEnd={handleUserScrollEnd}
            onMouseDown={handleUserScrollStart}
            onMouseUp={handleUserScrollEnd}
            onMouseLeave={handleUserScrollEnd}
          >
            {[...testimonials, ...testimonials.slice(0, itemsPerView)].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
