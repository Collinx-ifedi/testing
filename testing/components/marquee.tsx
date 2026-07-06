export function Marquee() {
  const items = [
    'Premium Quality',
    'Fast Shipping',
    'Expert Design',
    'Lifetime Support',
    'Eco-Friendly',
    'Premium Quality',
    'Fast Shipping',
    'Expert Design',
  ];

  return (
    <div className="overflow-hidden py-2.5 border-t border-b border-[rgba(196,149,106,0.1)] bg-[rgba(196,149,106,0.03)]">
      <div className="flex gap-10 animate-[mq_22s_linear_infinite] hover:pause">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="font-label text-sm tracking-widest text-brown whitespace-nowrap flex items-center gap-3"
          >
            <span>{item}</span>
            <span className="text-caramel text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
