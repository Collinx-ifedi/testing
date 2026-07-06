'use client';

import { ArrowRight } from 'lucide-react';

export function Categories() {
  const categories = [
    { id: 1, name: 'Living Room', count: '124 items', featured: true },
    { id: 2, name: 'Bedroom', count: '87 items' },
    { id: 3, name: 'Dining', count: '52 items' },
    { id: 4, name: 'Office', count: '96 items' },
    { id: 5, name: 'Outdoor', count: '43 items' },
    { id: 6, name: 'Lighting', count: '156 items' },
    { id: 7, name: 'Décor', count: '203 items' },
  ];

  return (
    <section id="categories" className="bg-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="sec-eyebrow mb-3">
            <span>SHOP BY CATEGORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Explore Our <em className="italic text-caramel">Collections</em>
          </h2>
          <p className="text-base text-sand max-w-md leading-relaxed">
            Discover furniture tailored to every room in your home. Each category features carefully selected pieces.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer border border-[rgba(196,149,106,0.1)] transition-all duration-400 group ${
                cat.featured && idx === 0 ? 'sm:col-span-2 aspect-video' : 'aspect-video lg:aspect-square'
              }`}
            >
              {/* Background - gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-brown via-dark to-espresso group-hover:scale-108 transition-transform duration-600" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,5,0,0.88)] via-[rgba(13,5,0,0.2)] to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-sand tracking-widest mb-2">{cat.count}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold text-caramel group-hover:gap-2.5 transition-all">
                  Shop Now
                  <ArrowRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
