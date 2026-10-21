import { useState, useEffect } from 'react';

function BentoCard({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`rounded-3xl overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {

  return (
    <div className="min-h-screen bg-[#faf7f4] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f4]/80 backdrop-blur-lg border-b border-[#e8e0d8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-serif font-bold text-[#2d2926]">Bloom & Petal</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors">Shop</a>
            <a href="#services" className="text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors">Services</a>
            <a href="#about" className="text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors">About</a>
            <a href="#contact" className="text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors">Contact</a>
          </div>
          <button className="bg-[#c4738a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#a85d73] transition-colors shadow-lg shadow-[#c4738a]/20">
            Order Now
          </button>
        </div>
      </nav>

      {/* Main Bento Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* Hero Card - Large */}
          <BentoCard className="lg:col-span-2 lg:row-span-3 group" delay={100}>
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-[#f5e6d3] to-[#fce4ec] p-8 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4738a]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8b4c8]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <span className="inline-block bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#c4738a] mb-4">
                  ✨ Fresh Arrivals
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#2d2926] leading-tight">
                  Flowers that speak from the heart
                </h1>
                <p className="mt-4 text-[#5a524a] text-lg max-w-md">
                  Handcrafted bouquets made with love, delivered fresh to your door every morning.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <button className="bg-[#2d2926] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1a1715] transition-all hover:scale-105 shadow-xl">
                  Explore Collection
                </button>
                <button className="flex items-center gap-2 text-[#5a524a] hover:text-[#c4738a] transition-colors text-sm font-medium">
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">▶</span>
                  Watch our story
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Featured Image Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-2 group" delay={200}>
            <div
              className="relative h-full min-h-[350px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Best Seller</p>
                <h3 className="text-white font-serif text-xl font-bold">Spring Garden Mix</h3>
                <p className="text-white/70 text-sm mt-1">From $45</p>
              </div>
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={300}>
            <div className="h-full bg-[#2d2926] p-6 flex flex-col justify-between">
              <span className="text-3xl">🌿</span>
              <div>
                <p className="text-3xl font-bold text-white">12K+</p>
                <p className="text-white/60 text-sm mt-1">Happy customers this year</p>
              </div>
              <div className="flex -space-x-2">
                {['🌹', '🌷', '🌻', '💐'].map((emoji, i) => (
                  <span key={i} className="w-8 h-8 rounded-full bg-[#3d3936] flex items-center justify-center text-sm border-2 border-[#2d2926]">
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Seasonal Card */}
          <BentoCard className="lg:col-span-2 lg:row-span-2 group" delay={400}>
            <div
              className="relative h-full min-h-[350px] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=600&fit=crop)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f4]/90 via-[#faf7f4]/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center p-8">
                <span className="inline-block bg-[#c4738a] text-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                  Seasonal Special
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#2d2926] max-w-xs">
                  Summer Bloom Collection
                </h2>
                <p className="text-[#5a524a] mt-2 max-w-sm">
                  Vibrant sunflowers, dahlias, and wildflowers that capture the essence of summer.
                </p>
                <button className="mt-4 bg-[#c4738a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#a85d73] transition-colors w-fit shadow-lg shadow-[#c4738a]/20">
                  Shop Summer →
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Services Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-2" delay={500}>
            <div className="h-full bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] p-6 flex flex-col">
              <span className="text-3xl mb-4">🎀</span>
              <h3 className="font-serif text-xl font-bold text-[#2d2926]">Our Services</h3>
              <ul className="mt-4 space-y-3 flex-1">
                {['Wedding Florals', 'Event Design', 'Weekly Subscriptions', 'Sympathy Arrangements', 'Corporate Events'].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#3d3936]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]"></span>
                    {service}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-[#2e7d32] text-sm font-medium hover:underline">
                Learn more →
              </button>
            </div>
          </BentoCard>

          {/* Testimonial Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={600}>
            <div className="h-full bg-[#fff3e0] p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-[#5a524a] text-sm italic leading-relaxed">
                  "The most beautiful bouquet I've ever received. Every petal was perfect!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#c4738a]/20 flex items-center justify-center text-sm">S</div>
                <div>
                  <p className="text-xs font-medium text-[#2d2926]">Sarah M.</p>
                  <p className="text-xs text-[#5a524a]">Verified buyer</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Quick Order Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={650}>
            <div className="h-full bg-[#fce4ec] p-6 flex flex-col justify-between">
              <span className="text-3xl">💌</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Send Love</h3>
                <p className="text-[#5a524a] text-sm mt-1">Same-day delivery available for orders before 2pm</p>
              </div>
              <button className="bg-white/80 backdrop-blur-sm text-[#c4738a] px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
                Order Now →
              </button>
            </div>
          </BentoCard>

          {/* Price Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={700}>
            <div className="h-full bg-white border border-[#e8e0d8] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🌹</span>
                <span className="text-xs bg-[#c4738a]/10 text-[#c4738a] px-2 py-0.5 rounded-full">Popular</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Rose Bouquet</h3>
                <p className="text-[#5a524a] text-xs mt-1">12 premium roses, wrapped with love</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#2d2926]">$55</span>
                <button className="w-8 h-8 rounded-full bg-[#2d2926] text-white flex items-center justify-center text-lg hover:bg-[#c4738a] transition-colors">
                  +
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Delivery Info Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={750}>
            <div className="h-full bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] p-6 flex flex-col justify-between">
              <span className="text-3xl">🚚</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Free Delivery</h3>
                <p className="text-[#5a524a] text-sm mt-1">On all orders over $75 within the city</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 flex-1 bg-[#1976d2]/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-[#1976d2] rounded-full"></div>
                </div>
                <span className="text-xs text-[#1976d2] font-medium">75%</span>
              </div>
            </div>
          </BentoCard>

          {/* Instagram Card */}
          <BentoCard className="lg:col-span-2 lg:row-span-1" delay={800}>
            <div className="h-full bg-gradient-to-r from-[#f3e5f5] via-[#fce4ec] to-[#fff3e0] p-6 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2d2926]">Follow our journey</h3>
                <p className="text-[#5a524a] text-sm mt-1">@bloomandpetal • 24K followers</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-3 gap-1">
                  {['🌸', '🌺', '🌻', '🌷', '💐', '🌹'].map((e, i) => (
                    <span key={i} className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-sm">{e}</span>
                  ))}
                </div>
                <button className="bg-[#2d2926] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#c4738a] transition-colors">
                  Follow
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Workshop Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={850}>
            <div className="h-full bg-[#f1f8e9] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🎓</span>
                <span className="text-xs bg-[#689f38]/10 text-[#689f38] px-2 py-0.5 rounded-full">New</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Floral Workshop</h3>
                <p className="text-[#5a524a] text-xs mt-1">Learn the art of arrangement</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2d2926]">Next: Sat, 10am</span>
                <button className="text-[#689f38] text-sm font-medium hover:underline">Book →</button>
              </div>
            </div>
          </BentoCard>

          {/* Hours Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" delay={900}>
            <div className="h-full bg-[#2d2926] p-6 flex flex-col justify-between text-white">
              <span className="text-2xl">🕐</span>
              <div>
                <h3 className="font-serif text-lg font-bold">Visit Us</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-white/70 text-xs">Mon - Fri: 8am - 7pm</p>
                  <p className="text-white/70 text-xs">Saturday: 9am - 6pm</p>
                  <p className="text-white/70 text-xs">Sunday: 10am - 4pm</p>
                </div>
              </div>
              <p className="text-[#c4738a] text-xs font-medium">📍 123 Garden Street</p>
            </div>
          </BentoCard>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-[#e8e0d8]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="font-serif font-bold text-[#2d2926]">Bloom & Petal</span>
          </div>
          <p className="text-sm text-[#5a524a]">© 2024 Bloom & Petal. Made with 🤍 and fresh flowers.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-[#e8e0d8] flex items-center justify-center text-sm hover:bg-[#c4738a] hover:text-white transition-colors">𝕏</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#e8e0d8] flex items-center justify-center text-sm hover:bg-[#c4738a] hover:text-white transition-colors">📷</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#e8e0d8] flex items-center justify-center text-sm hover:bg-[#c4738a] hover:text-white transition-colors">📌</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
