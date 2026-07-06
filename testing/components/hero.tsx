'use client';

import Image from 'next/image';
import { ArrowRight, Sofa, Zap, Heart } from 'lucide-react';

export function Hero() {
  const heroCards = [
    { id: 1, width: 210, height: 270, delay: 0, image: '/placeholder-1.jpg' },
    { id: 2, width: 175, height: 215, delay: 2, image: '/placeholder-2.jpg' },
    { id: 3, width: 135, height: 155, delay: 4, image: '/placeholder-3.jpg' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center py-28 px-6"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(139,94,60,0.18)] via-transparent to-espresso pointer-events-none" />

      {/* SVG Background */}
      <svg
        className="absolute -right-[5%] top-[5%] w-[52%] opacity-[0.06] pointer-events-none max-md:-right-[18%] max-md:top-[28%] max-md:w-[88%] max-md:opacity-[0.04]"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10">
          <div className="sec-eyebrow mb-5">
            <span>CURATED COLLECTIONS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-cream mb-6">
            Elevate Your <em className="italic text-caramel block">Living Space</em>
          </h1>

          <p className="text-base text-sand max-w-md leading-relaxed mb-8">
            Discover the perfect blend of luxury and comfort with our handpicked furniture collection. Transform your home into a sanctuary of style.
          </p>

          {/* CTAs */}
          <div className="flex gap-3.5 flex-wrap items-center mb-9">
            <button className="cta-primary">
              Shop Now
            </button>
            <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-caramel border-b border-[rgba(196,149,106,0.35)] hover:border-sand hover:text-sand hover:gap-2.5 transition-all">
              Browse Collections
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 flex-wrap">
            <div>
              <span className="font-label text-3xl text-caramel tracking-wider block">10K+</span>
              <span className="text-xs text-sand uppercase tracking-widest">Happy Customers</span>
            </div>
            <div>
              <span className="font-label text-3xl text-caramel tracking-wider block">500+</span>
              <span className="text-xs text-sand uppercase tracking-widest">Products</span>
            </div>
            <div>
              <span className="font-label text-3xl text-caramel tracking-wider block">4.9★</span>
              <span className="text-xs text-sand uppercase tracking-widest">Avg Rating</span>
            </div>
          </div>
        </div>

        {/* Right Visual - Floating Cards */}
        <div className="relative h-96 flex justify-center items-center hidden lg:flex">
          {heroCards.map((card, idx) => (
            <div
              key={card.id}
              className="float-card"
              style={{
                width: `${card.width}px`,
                height: `${card.height}px`,
                top: idx === 0 ? '8%' : idx === 1 ? '38%' : 'auto',
                left: idx === 0 ? '4%' : idx === 2 ? '32%' : 'auto',
                right: idx === 1 ? '4%' : 'auto',
                bottom: idx === 2 ? '4%' : 'auto',
                animationDelay: `-${card.delay}s`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-caramel to-brown flex items-center justify-center text-white text-sm font-bold">
                Featured Item {card.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
