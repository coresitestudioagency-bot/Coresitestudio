import { useState, useEffect, useRef } from 'react';
import FloatingPetals from './components/FloatingPetals';
import Marquee from './components/Marquee';
import { useScrollAnimation, useParallax, useCountUp, useStaggerAnimation } from './hooks/useAnimations';

// ===== ANIMATED BENTO CARD =====
function BentoCard({ 
  children, 
  className = '', 
  animation = 'scroll-fade-up', 
  stagger = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  animation?: string;
  stagger?: number;
}) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${animation} ${isInView ? 'in-view' : ''} ${stagger ? `stagger-${stagger}` : ''} rounded-3xl overflow-hidden card-hover ${className}`}
    >
      {children}
    </div>
  );
}

// ===== ANIMATED TEXT REVEAL =====
function TextReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

// ===== COUNTER COMPONENT =====
function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end, 2500);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold font-display text-[#2d2926]">
        {count}{suffix}
      </p>
      <p className="text-sm text-[#5a524a] mt-1 font-elegant text-lg">{label}</p>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const parallaxOffset = useParallax();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { containerRef: servicesRef, visibleItems } = useStaggerAnimation(5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f4] font-sans relative">
      {/* Floating Petals Background */}
      <FloatingPetals />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#e8e0d8]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-wiggle">🌸</span>
            <span className="text-xl font-serif font-bold text-[#2d2926]">Bloom & Petal</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Services', 'About', 'Journal'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="animated-underline text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>
          <button className="magnetic-btn bg-[#c4738a] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-[#c4738a]/20">
            Order Now
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax background shapes */}
        <div
          className="absolute top-20 right-10 w-72 h-72 bg-[#c4738a]/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#e8b4c8]/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#f5e6d3]/40 rounded-full blur-2xl"
          style={{ transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <TextReveal delay={200}>
            <span className="inline-block font-script text-2xl text-[#c4738a] mb-4">
              ✿ Handcrafted with love ✿
            </span>
          </TextReveal>

          <TextReveal delay={400}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#2d2926] leading-[0.9] mt-4">
              Flowers that<br />
              <span className="text-shimmer italic font-elegant font-light">speak</span> from the{' '}
              <span className="relative inline-block">
                heart
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#c4738a" strokeWidth="3" strokeLinecap="round" className="animate-draw-line" style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: 'draw-line 1.5s ease forwards 1s' }} />
                </svg>
              </span>
            </h1>
          </TextReveal>

          <TextReveal delay={600}>
            <p className="mt-8 text-lg sm:text-xl text-[#5a524a] max-w-2xl mx-auto font-elegant text-2xl leading-relaxed">
              Artisan bouquets, seasonal arrangements, and bespoke floral designs — 
              delivered fresh to your door every morning.
            </p>
          </TextReveal>

          <TextReveal delay={800}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="magnetic-btn bg-[#2d2926] text-white px-8 py-4 rounded-full text-sm font-medium shadow-xl group">
                <span className="flex items-center gap-2">
                  Explore Collection
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </button>
              <button className="flex items-center gap-3 text-[#5a524a] hover:text-[#c4738a] transition-colors text-sm font-medium group">
                <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow group-hover:scale-110 transform duration-300">
                  ▶
                </span>
                Watch our story
              </button>
            </div>
          </TextReveal>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-[#c4738a]/30 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-[#c4738a]/50 animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE SECTION ===== */}
      <section className="py-8 border-y border-[#e8e0d8]/50 overflow-hidden">
        <Marquee 
          text="🌹 Fresh Roses  •  🌷 Tulips  •  🌻 Sunflowers  •  💐 Bouquets  •  🌸 Peonies  •  🌺 Orchids  •  ✿ Seasonal  •  🌿 Greenery" 
          className="text-xl font-elegant text-[#5a524a]/60"
        />
      </section>

      {/* ===== BENTO GRID SECTION ===== */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <TextReveal>
            <span className="font-script text-xl text-[#c4738a]">Our Collection</span>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2926] mt-2">
              Curated with <span className="italic font-elegant">care</span>
            </h2>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* Hero Card - Large */}
          <BentoCard className="lg:col-span-2 lg:row-span-3" animation="scroll-fade-right" stagger={1}>
            <div className="relative h-full min-h-[500px] bg-gradient-to-br from-[#f5e6d3] to-[#fce4ec] p-8 flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c4738a]/10 rounded-full blur-3xl group-hover:bg-[#c4738a]/20 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8b4c8]/20 rounded-full blur-2xl animate-float-slow"></div>
              <div className="relative z-10">
                <span className="inline-block glass px-3 py-1 rounded-full text-xs font-medium text-[#c4738a] mb-4">
                  ✨ Fresh Arrivals
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2926] leading-tight">
                  Spring Garden <br/>
                  <span className="font-elegant italic font-light">Collection</span>
                </h2>
                <p className="mt-4 text-[#5a524a] text-lg max-w-md font-elegant text-xl">
                  Vibrant sunflowers, dahlias, and wildflowers that capture the essence of the season.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4">
                <button className="magnetic-btn bg-[#2d2926] text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl">
                  Shop Now →
                </button>
                <span className="text-[#5a524a] font-elegant text-lg">From $45</span>
              </div>
            </div>
          </BentoCard>

          {/* Featured Image Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-2" animation="scroll-blur" stagger={2}>
            <div className="relative h-full min-h-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center img-zoom"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/80 text-xs uppercase tracking-wider mb-1 font-display">Best Seller</p>
                <h3 className="text-white font-serif text-xl font-bold">Romantic Roses</h3>
                <p className="text-white/70 text-sm mt-1 font-elegant text-lg">From $55</p>
              </div>
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-scale" stagger={3}>
            <div className="h-full bg-[#2d2926] p-6 flex flex-col justify-between">
              <span className="text-3xl animate-float">🌿</span>
              <div>
                <p className="text-3xl font-bold text-white font-display">12K+</p>
                <p className="text-white/60 text-sm mt-1 font-elegant text-lg">Happy customers this year</p>
              </div>
              <div className="flex -space-x-2">
                {['🌹', '🌷', '🌻', '💐'].map((emoji, i) => (
                  <span key={i} className="w-8 h-8 rounded-full bg-[#3d3936] flex items-center justify-center text-sm border-2 border-[#2d2926] hover:scale-125 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Seasonal Card */}
          <BentoCard className="lg:col-span-2 lg:row-span-2" animation="scroll-fade-left" stagger={2}>
            <div className="relative h-full min-h-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center img-zoom"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=600&fit=crop)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f4]/90 via-[#faf7f4]/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center p-8">
                <span className="inline-block bg-[#c4738a] text-white px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit animate-pulse-soft">
                  Seasonal Special
                </span>
                <h2 className="text-3xl font-serif font-bold text-[#2d2926] max-w-xs">
                  Summer <span className="font-elegant italic">Bloom</span>
                </h2>
                <p className="text-[#5a524a] mt-2 max-w-sm font-elegant text-lg">
                  Limited edition arrangements inspired by Mediterranean gardens.
                </p>
                <button className="magnetic-btn mt-4 bg-[#c4738a] text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-[#c4738a]/20 w-fit">
                  Shop Summer →
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Services Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-2" animation="scroll-fade-up" stagger={4}>
            <div className="h-full bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] p-6 flex flex-col">
              <span className="text-3xl mb-4 animate-float-slow">🎀</span>
              <h3 className="font-serif text-xl font-bold text-[#2d2926]">Our Services</h3>
              <div ref={servicesRef} className="mt-4 space-y-3 flex-1">
                {['Wedding Florals', 'Event Design', 'Weekly Subscriptions', 'Sympathy Arrangements', 'Corporate Events'].map((service, i) => (
                  <div
                    key={service}
                    className={`flex items-center gap-2 text-sm text-[#3d3936] transition-all duration-500 ${
                      visibleItems[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]"></span>
                    <span className="font-elegant text-lg">{service}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-[#2e7d32] text-sm font-medium animated-underline w-fit">
                Learn more
              </button>
            </div>
          </BentoCard>

          {/* Testimonial Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-bounce" stagger={3}>
            <div className="h-full bg-[#fff3e0] p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-3 animate-pulse-soft">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-[#5a524a] text-sm italic leading-relaxed font-elegant text-lg">
                  "The most beautiful bouquet I've ever received!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-[#c4738a]/20 flex items-center justify-center text-sm">S</div>
                <div>
                  <p className="text-xs font-medium text-[#2d2926] font-display">Sarah M.</p>
                  <p className="text-xs text-[#5a524a]">Verified buyer</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Quick Order Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-up" stagger={5}>
            <div className="h-full bg-[#fce4ec] p-6 flex flex-col justify-between group">
              <span className="text-3xl group-hover:animate-wiggle">💌</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Send Love</h3>
                <p className="text-[#5a524a] text-sm mt-1 font-elegant text-base">Same-day delivery before 2pm</p>
              </div>
              <button className="magnetic-btn glass text-[#c4738a] px-4 py-2 rounded-full text-sm font-medium w-fit">
                Order Now →
              </button>
            </div>
          </BentoCard>

          {/* Price Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-scale" stagger={4}>
            <div className="h-full bg-white border border-[#e8e0d8] p-6 flex flex-col justify-between group hover:border-[#c4738a]/30 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl group-hover:animate-float">🌹</span>
                <span className="text-xs bg-[#c4738a]/10 text-[#c4738a] px-2 py-0.5 rounded-full font-display">Popular</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Rose Bouquet</h3>
                <p className="text-[#5a524a] text-xs mt-1 font-elegant text-base">12 premium roses, wrapped with love</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-[#2d2926] font-display">$55</span>
                <button className="w-8 h-8 rounded-full bg-[#2d2926] text-white flex items-center justify-center text-lg hover:bg-[#c4738a] transition-colors hover:rotate-90 duration-300">
                  +
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Delivery Info Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-left" stagger={5}>
            <div className="h-full bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] p-6 flex flex-col justify-between">
              <span className="text-3xl animate-float-slow">🚚</span>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Free Delivery</h3>
                <p className="text-[#5a524a] text-sm mt-1 font-elegant text-base">On orders over $75</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-[#1976d2]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1976d2] rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
                <span className="text-xs text-[#1976d2] font-medium font-display">75%</span>
              </div>
            </div>
          </BentoCard>

          {/* Instagram Card */}
          <BentoCard className="lg:col-span-2 lg:row-span-1" animation="scroll-fade-up" stagger={3}>
            <div className="h-full bg-gradient-to-r from-[#f3e5f5] via-[#fce4ec] to-[#fff3e0] p-6 flex items-center justify-between animate-gradient">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2d2926]">Follow our journey</h3>
                <p className="text-[#5a524a] text-sm mt-1 font-elegant text-lg">@bloomandpetal • 24K followers</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:grid grid-cols-3 gap-1">
                  {['🌸', '🌺', '🌻', '🌷', '💐', '🌹'].map((e, i) => (
                    <span key={i} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-sm hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>{e}</span>
                  ))}
                </div>
                <button className="magnetic-btn bg-[#2d2926] text-white px-4 py-2 rounded-full text-sm font-medium">
                  Follow
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Workshop Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-bounce" stagger={6}>
            <div className="h-full bg-[#f1f8e9] p-6 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <span className="text-2xl group-hover:animate-float">🎓</span>
                <span className="text-xs bg-[#689f38]/10 text-[#689f38] px-2 py-0.5 rounded-full font-display">New</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2d2926]">Floral Workshop</h3>
                <p className="text-[#5a524a] text-xs mt-1 font-elegant text-base">Learn the art of arrangement</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#2d2926] font-display">Next: Sat, 10am</span>
                <button className="text-[#689f38] text-sm font-medium animated-underline">Book</button>
              </div>
            </div>
          </BentoCard>

          {/* Hours Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-right" stagger={7}>
            <div className="h-full bg-[#2d2926] p-6 flex flex-col justify-between text-white group hover:bg-[#3d3936] transition-colors duration-500">
              <span className="text-2xl animate-pulse-soft">🕐</span>
              <div>
                <h3 className="font-serif text-lg font-bold">Visit Us</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-white/70 text-xs font-elegant text-base">Mon - Fri: 8am - 7pm</p>
                  <p className="text-white/70 text-xs font-elegant text-base">Saturday: 9am - 6pm</p>
                  <p className="text-white/70 text-xs font-elegant text-base">Sunday: 10am - 4pm</p>
                </div>
              </div>
              <p className="text-[#c4738a] text-xs font-medium font-display">📍 123 Garden Street</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-20 bg-white/50 border-y border-[#e8e0d8]/50">
        <div className="max-w-5xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-center text-3xl sm:text-4xl font-serif font-bold text-[#2d2926] mb-12">
              Trusted by <span className="font-elegant italic">thousands</span>
            </h2>
          </TextReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={12000} suffix="+" label="Happy Customers" />
            <Counter end={500} suffix="+" label="Bouquets Weekly" />
            <Counter end={98} suffix="%" label="Freshness Rate" />
            <Counter end={15} suffix="" label="Years of Bloom" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal>
              <span className="font-script text-xl text-[#c4738a]">Our Story</span>
            </TextReveal>
            <TextReveal delay={200}>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2926] mt-2 leading-tight">
                Where every petal tells a <span className="font-elegant italic">story</span>
              </h2>
            </TextReveal>
            <TextReveal delay={400}>
              <p className="mt-6 text-[#5a524a] font-elegant text-xl leading-relaxed">
                Founded in 2009, Bloom & Petal began as a small corner shop with a big dream — 
                to bring the joy of fresh flowers into every home. Today, we source the finest 
                seasonal blooms from local growers and international farms alike.
              </p>
            </TextReveal>
            <TextReveal delay={600}>
              <p className="mt-4 text-[#5a524a] font-elegant text-xl leading-relaxed">
                Each arrangement is handcrafted by our team of passionate florists who believe 
                that flowers have the power to transform ordinary moments into extraordinary memories.
              </p>
            </TextReveal>
            <TextReveal delay={800}>
              <button className="magnetic-btn mt-8 bg-[#2d2926] text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl">
                Read Our Story →
              </button>
            </TextReveal>
          </div>
          <div className="relative">
            <BentoCard animation="scroll-scale">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-cover bg-center img-zoom"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=750&fit=crop)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </BentoCard>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 animate-float-slow shadow-xl">
              <p className="font-script text-[#c4738a] text-lg">Est. 2009</p>
              <p className="text-xs text-[#5a524a] font-display">Crafting joy daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECOND MARQUEE ===== */}
      <section className="py-6 bg-[#2d2926] overflow-hidden">
        <Marquee 
          text="✿ Same Day Delivery  •  🌿 Sustainably Sourced  •  💐 Handcrafted Daily  •  🌸 Freshness Guaranteed  •  🎀 Gift Wrapping Included  •  ✿"
          className="text-lg font-display text-white/40"
        />
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <TextReveal>
            <span className="font-script text-xl text-[#c4738a]">Kind Words</span>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2926] mt-2">
              What our <span className="font-elegant italic">customers</span> say
            </h2>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { text: "Absolutely stunning arrangements! My wife was thrilled with the anniversary bouquet. Will definitely order again.", name: "James R.", role: "Loyal Customer" },
            { text: "The wedding florals were beyond our dreams. Every guest commented on how beautiful they were. Thank you!", name: "Emily & Tom", role: "Wedding 2024" },
            { text: "Their weekly subscription has transformed our office space. Fresh, beautiful, and always on time.", name: "Sarah K.", role: "Corporate Client" },
          ].map((testimonial, i) => (
            <BentoCard key={i} animation="scroll-fade-up" stagger={i + 1 as 1 | 2 | 3}>
              <div className="h-full bg-white border border-[#e8e0d8] rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-4">
                    {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                  <p className="text-[#5a524a] font-elegant text-xl leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#e8e0d8]">
                  <p className="font-display text-sm font-medium text-[#2d2926]">{testimonial.name}</p>
                  <p className="text-xs text-[#5a524a] font-elegant text-base">{testimonial.role}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <BentoCard animation="scroll-scale">
          <div className="relative bg-gradient-to-br from-[#c4738a] to-[#a85d73] rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>
            
            <TextReveal>
              <span className="font-script text-2xl text-white/80">Ready to bloom?</span>
            </TextReveal>
            <TextReveal delay={200}>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-4">
                Send flowers that <br/>
                <span className="font-elegant italic font-light">say it all</span>
              </h2>
            </TextReveal>
            <TextReveal delay={400}>
              <p className="mt-4 text-white/80 max-w-lg mx-auto font-elegant text-xl">
                Order before 2pm for same-day delivery. Free shipping on orders over $75.
              </p>
            </TextReveal>
            <TextReveal delay={600}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="magnetic-btn bg-white text-[#c4738a] px-8 py-4 rounded-full font-medium shadow-xl">
                  Shop All Flowers
                </button>
                <button className="magnetic-btn border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
                  Subscribe & Save
                </button>
              </div>
            </TextReveal>
          </div>
        </BentoCard>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2d2926] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <span className="font-serif text-xl font-bold">Bloom & Petal</span>
              </div>
              <p className="text-white/60 font-elegant text-lg max-w-sm leading-relaxed">
                Bringing the beauty of nature into your home since 2009. 
                Every arrangement is a work of art.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {['𝕏', '📷', '📌', '🎵'].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#c4738a] transition-colors duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm font-medium uppercase tracking-wider mb-4 text-white/40">Shop</h4>
              <ul className="space-y-2">
                {['All Flowers', 'Seasonal', 'Subscriptions', 'Gift Cards', 'Occasions'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[#c4738a] transition-colors font-elegant text-lg animated-underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-medium uppercase tracking-wider mb-4 text-white/40">Info</h4>
              <ul className="space-y-2">
                {['About Us', 'Delivery', 'Care Guide', 'Workshops', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[#c4738a] transition-colors font-elegant text-lg animated-underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm font-elegant text-base">© 2024 Bloom & Petal. Made with 🤍 and fresh flowers.</p>
            <p className="text-white/40 text-sm font-elegant text-base">Privacy Policy • Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
