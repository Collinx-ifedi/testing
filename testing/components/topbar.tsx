'use client';

import { useState } from 'react';
import { ChevronDown, ShoppingCart, Menu } from 'lucide-react';

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 0));
  }

  return (
    <nav
      id="topbar"
      className={`fixed top-0 left-0 right-0 z-100 px-6 py-3.5 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? 'bg-[rgba(13,5,0,0.92)] backdrop-blur-xl border-b border-[rgba(196,149,106,0.15)]'
          : ''
      }`}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="flex flex-col gap-1.5 w-7 cursor-pointer p-1 lg:hidden">
          <span className="h-0.5 bg-caramel rounded transition-all duration-300"></span>
          <span className="h-0.5 bg-caramel rounded transition-all duration-300"></span>
          <span className="h-0.5 bg-caramel rounded transition-all duration-300"></span>
        </button>
        <div className="font-label text-xl tracking-widest text-cream">
          <span className="text-caramel">RTR</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-1">
        <a href="#" className="px-3.5 py-2 rounded-md text-xs font-medium text-sand hover:text-caramel hover:bg-[rgba(196,149,106,0.07)] transition-all">
          Home
        </a>
        <div className="relative group">
          <button className="px-3.5 py-2 rounded-md text-xs font-medium text-sand hover:text-caramel hover:bg-[rgba(196,149,106,0.07)] transition-all flex items-center gap-1.5">
            Shop
            <ChevronDown className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
          </button>
          <div className="absolute top-full left-0 min-w-[220px] bg-dark border border-[rgba(196,149,106,0.18)] rounded-2xl p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 shadow-2xl z-50">
            <a href="#" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs text-sand hover:bg-[rgba(196,149,106,0.1)] hover:text-caramel transition-all">
              All Products
            </a>
            <a href="#" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs text-sand hover:bg-[rgba(196,149,106,0.1)] hover:text-caramel transition-all">
              Sofas &amp; Seating
            </a>
            <a href="#" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-xs text-sand hover:bg-[rgba(196,149,106,0.1)] hover:text-caramel transition-all">
              Tables &amp; Desks
            </a>
          </div>
        </div>
        <a href="#" className="px-3.5 py-2 rounded-md text-xs font-medium text-sand hover:text-caramel hover:bg-[rgba(196,149,106,0.07)] transition-all">
          Categories
        </a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2.5">
        <button className="relative p-1 cursor-pointer">
          <ShoppingCart className="w-5 h-5 stroke-caramel" strokeWidth={1.8} />
          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-caramel text-espresso text-xs font-bold flex items-center justify-center">
            0
          </div>
        </button>
        <button className="hidden px-4 py-2 rounded-full text-xs font-semibold text-sand border border-[rgba(196,149,106,0.3)] hover:border-caramel hover:text-caramel transition-all sm:block">
          Sign In
        </button>
        <button className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-br from-brown to-caramel shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}
