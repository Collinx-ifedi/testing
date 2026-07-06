'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: 'Absolutely stunning pieces! The quality is exceptional and the delivery was incredibly fast. My living room has never looked better.',
      author: 'Sarah Mitchell',
      role: 'Interior Designer',
      rating: 5,
    },
    {
      id: 2,
      text: 'The customer service team went above and beyond to help me find the perfect sofa. Highly recommended to anyone looking for quality furniture.',
      author: 'James Chen',
      role: 'Home Enthusiast',
      rating: 5,
    },
    {
      id: 3,
      text: 'Best investment I made for my home. The comfort and durability are unmatched. Worth every penny!',
      author: 'Emma Rodriguez',
      role: 'Homeowner',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-espresso py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="sec-eyebrow mb-3">
            <span>CUSTOMER REVIEWS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Loved by <em className="italic text-caramel">Thousands</em>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-650 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full px-8 py-12 bg-dark border border-[rgba(196,149,106,0.1)] rounded-3xl hover:border-[rgba(196,149,106,0.28)] transition-colors duration-300"
              >
                <div className="text-caramel text-lg mb-5">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="font-display italic text-lg text-cream leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brown to-caramel flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-cream">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-sand">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[rgba(196,149,106,0.25)] text-caramel hover:bg-brown hover:border-brown hover:text-white transition-all flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded ${
                  idx === currentSlide
                    ? 'bg-caramel w-6 h-1.5'
                    : 'bg-[rgba(196,149,106,0.25)] w-1.5 h-1.5'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[rgba(196,149,106,0.25)] text-caramel hover:bg-brown hover:border-brown hover:text-white transition-all flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
