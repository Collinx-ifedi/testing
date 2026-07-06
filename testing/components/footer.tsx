import { Heart, Share2, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-dark border-t border-[rgba(196,149,106,0.1)] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11 mb-11">
          {/* Brand */}
          <div>
            <div className="font-label text-2xl tracking-widest text-cream mb-2.5 block">
              <span className="text-caramel">RTR</span>
            </div>
            <p className="text-sm text-sand leading-relaxed max-w-xs mb-4">
              Rocky Trendy Realities brings curated furniture collections that transform your living spaces into sanctuaries of style and comfort.
            </p>
            <div className="flex gap-2">
              {[Share2, Mail].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-8 h-8 rounded-lg border border-[rgba(196,149,106,0.2)] flex items-center justify-center text-sand hover:bg-brown hover:text-white hover:border-brown transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-label text-sm tracking-widest text-caramel mb-3.5 uppercase">
              Shop
            </h4>
            <ul className="space-y-2">
              {['All Products', 'Sofas & Seating', 'Tables & Desks', 'Bedroom', 'Lighting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-sand hover:text-caramel transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-label text-sm tracking-widest text-caramel mb-3.5 uppercase">
              Company
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Contact', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-sand hover:text-caramel transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-label text-sm tracking-widest text-caramel mb-3.5 uppercase">
              Support
            </h4>
            <ul className="space-y-2">
              {['Help Center', 'Shipping Info', 'Returns', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-sand hover:text-caramel transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(196,149,106,0.1)] mb-7" />

        {/* Bottom */}
        <div className="flex items-center justify-between flex-wrap gap-3 text-xs text-brown">
          <p>&copy; 2024 Rocky Trendy Realities. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-caramel" fill="currentColor" />
            <span>for design lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
