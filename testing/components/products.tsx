'use client';

import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export function Products() {
  const [filters, setFilters] = useState<string[]>(['all']);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const filterOptions = ['All Products', 'Sofas', 'Chairs', 'Tables', 'Lighting'];

  const products = [
    { id: 1, name: 'Luxury Sofa', category: 'Sofas', price: 1299, oldPrice: 1599, badge: 'New' },
    { id: 2, name: 'Modern Chair', category: 'Chairs', price: 399, oldPrice: null, badge: null },
    { id: 3, name: 'Dining Table', category: 'Tables', price: 699, oldPrice: 899, badge: 'Sale' },
    { id: 4, name: 'Floor Lamp', category: 'Lighting', price: 199, oldPrice: null, badge: 'New' },
    { id: 5, name: 'Sectional Set', category: 'Sofas', price: 1899, oldPrice: 2299, badge: null },
    { id: 6, name: 'Accent Table', category: 'Tables', price: 299, oldPrice: 399, badge: 'Sale' },
  ];

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  return (
    <section id="products" className="bg-espresso py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="sec-eyebrow mb-3">
            <span>FEATURED COLLECTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
            Best <em className="italic text-caramel">Sellers</em>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                filters.includes(filter.toLowerCase())
                  ? 'bg-brown border-brown text-white'
                  : 'border-[rgba(196,149,106,0.18)] text-sand hover:bg-brown hover:border-brown hover:text-white'
              }`}
              onClick={() => setFilters([filter.toLowerCase()])}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-dark border border-[rgba(196,149,106,0.1)] rounded-2xl overflow-hidden transition-all duration-400 group hover:shadow-2xl hover:border-[rgba(196,149,106,0.28)] hover:-translate-y-2.5"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brown to-dark">
                <div className="w-full h-full bg-gradient-to-br from-caramel/20 to-brown/20 group-hover:scale-107 transition-transform duration-600" />

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-label text-xs tracking-widest ${
                      product.badge === 'Sale'
                        ? 'bg-sale text-white'
                        : 'bg-caramel text-dark'
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full border border-[rgba(196,149,106,0.2)] flex items-center justify-center transition-all duration-200 ${
                    wishlist.has(product.id)
                      ? 'bg-brown border-brown text-white'
                      : 'bg-[rgba(13,5,0,0.7)] text-sand hover:bg-brown hover:border-brown hover:text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={wishlist.has(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="font-label text-xs tracking-widest text-brown mb-2 uppercase">
                  {product.category}
                </div>
                <h3 className="font-display text-lg font-bold text-cream mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-sand leading-relaxed mb-3">
                  Premium comfort meets modern style in this stunning piece.
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between gap-2">
                  <div className="font-label text-2xl text-caramel tracking-wide">
                    ${product.price}
                    {product.oldPrice && (
                      <small className="text-xs text-brown line-through ml-1">
                        ${product.oldPrice}
                      </small>
                    )}
                  </div>
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-br from-brown to-caramel text-white font-bold text-xs tracking-widest transition-all duration-200 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
