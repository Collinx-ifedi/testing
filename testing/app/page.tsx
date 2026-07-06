import { TopBar } from '@/components/topbar';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { Categories } from '@/components/categories';
import { Products } from '@/components/products';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <main className="relative">
      <TopBar />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <Testimonials />
      <Footer />
    </main>
  );
}
