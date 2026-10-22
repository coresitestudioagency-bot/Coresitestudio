import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ShoppingBag, Heart, ArrowRight, Play, Star, MapPin, Clock, Sparkles, Instagram, Truck, Gift } from 'lucide-react';
import FloatingPetals from './components/FloatingPetals';
import { useScrollAnimation, useParallax, useCountUp, useStaggerAnimation } from './hooks/useAnimations';

// ===== ANIMATED BENTO CARD =====
function BentoCard({
  children,
  className = '',
  animation = 'scroll-fade-up',
  stagger = 0,
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
      className={`${animation} ${isInView ? 'in-view' : ''} ${stagger ? `stagger-${stagger}` : ''} rounded-2xl sm:rounded-3xl overflow-hidden card-hover ${className}`}
    >
      {children}
    </div>
  );
}

// ===== TEXT REVEAL =====
function TextReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useScrollAnimation(0.2);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

// ===== COUNTER =====
function Counter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(end, 2500);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl font-bold font-display text-[#2d2926]">{count}{suffix}</p>
      <p className="text-sm text-[#5a524a] mt-1 font-elegant text-base sm:text-lg">{label}</p>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const parallaxOffset = useParallax();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { containerRef: servicesRef, visibleItems } = useStaggerAnimation(5);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Shop', children: ['Bouquets', 'Single Stems', 'Seasonal', 'Gift Cards'] },
    { label: 'Services', children: ['Weddings', 'Events', 'Subscriptions', 'Workshops'] },
    { label: 'About', children: ['Our Story', 'Team', 'Sustainability'] },
    { label: 'Journal' },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f4] font-sans relative">
      {/* Floating Petals */}
      <FloatingPetals />

      {/* ===== NAVIGATION ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-[#e8e0d8]/50 shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl animate-wiggle">🌸</span>
            <span className="text-lg sm:text-xl font-serif font-bold text-[#2d2926] tracking-tight">Bloom & Petal</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="animated-underline flex items-center gap-1 text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors font-medium">
                  {item.label}
                  {item.children && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="!absolute top-full left-0 mt-2 liquid-glass rounded-xl py-3 px-2 min-w-[160px] shadow-xl animate-dropdown z-50">
                    {item.children.map((child) => (
                      <a key={child} href="#" className="block text-[#5a524a] hover:text-[#c4738a] text-sm rounded-lg hover:bg-white/5 px-3 py-2 transition-colors">
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors font-medium animated-underline">Log in</a>
            <button className="liquid-glass rounded-full px-5 py-2 text-[#2d2926] text-sm font-medium hover:bg-white/20 transition-colors">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-5 h-5">
              <Menu className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} />
              <X className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-4 right-4 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-[#faf7f4]/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-[#e8e0d8]/50">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-[#2d2926] hover:text-[#c4738a] py-3 text-base font-medium transition-colors">
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <a key={child} href="#" className="block text-[#5a524a] hover:text-[#c4738a] py-2 text-sm transition-colors">
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#e8e0d8] flex items-center gap-3">
              <a href="#" className="flex-1 text-center py-2.5 text-sm font-medium text-[#2d2926]">Log in</a>
              <button className="flex-1 bg-[#c4738a] text-white py-2.5 rounded-full text-sm font-medium">Order Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION - FULLSCREEN WITH VIDEO ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&h=1080&fit=crop"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f4] via-transparent to-transparent opacity-30" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 md:px-12">
          <div className="text-center max-w-4xl">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-6 sm:mb-8" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">Fresh blooms, delivered daily</span>
            </div>

            {/* Heading */}
            <h1
              className="animate-hero-text text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] tracking-[-0.02em]"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Flowers that<br />
              <span className="italic font-elegant font-light text-white/80">speak</span> from the{' '}
              <span className="relative inline-block">
                <span className="text-shimmer">heart</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-in-up text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto mt-6 sm:mt-8 font-elegant text-lg sm:text-xl"
              style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Artisan bouquets, seasonal arrangements, and bespoke floral designs — handcrafted with love and delivered fresh to your door.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in-up flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10"
              style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <button className="magnetic-btn px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2d2926] text-sm font-semibold rounded-full hover:bg-white/90 shadow-xl flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Shop Collection
              </button>
              <button className="magnetic-btn liquid-glass rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch our story
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCROLLABLE IMAGE GALLERY ===== */}
      <section className="py-12 sm:py-16 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <TextReveal>
                <span className="font-script text-lg sm:text-xl text-[#c4738a]">Fresh Picks</span>
              </TextReveal>
              <TextReveal delay={150}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2d2926] mt-1">
                  Trending this <span className="font-elegant italic">week</span>
                </h2>
              </TextReveal>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-sm text-[#5a524a] hover:text-[#c4738a] transition-colors font-medium">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="scroll-gallery flex gap-4 px-5 sm:px-6 pb-4">
          {[
            { title: 'Garden Roses', price: '$45', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=500&fit=crop', tag: 'Best Seller' },
            { title: 'Peony Dream', price: '$65', img: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&h=500&fit=crop', tag: 'New' },
            { title: 'Wild Meadow', price: '$38', img: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=500&fit=crop', tag: 'Seasonal' },
            { title: 'Sunset Dahlia', price: '$55', img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=500&fit=crop', tag: 'Limited' },
            { title: 'Blush Tulips', price: '$35', img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=500&fit=crop', tag: 'Popular' },
            { title: 'Lavender Fields', price: '$42', img: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=500&fit=crop', tag: 'Aromatic' },
            { title: 'White Orchids', price: '$78', img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=500&fit=crop', tag: 'Premium' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] sm:w-[300px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#2d2926] text-xs font-medium px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#c4738a] hover:text-white">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-full bg-white text-[#2d2926] py-2.5 rounded-full text-sm font-medium hover:bg-[#c4738a] hover:text-white transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between px-1">
                <h3 className="font-serif font-bold text-[#2d2926]">{item.title}</h3>
                <span className="font-display text-sm font-medium text-[#c4738a]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint for mobile */}
        <div className="sm:hidden flex items-center justify-center gap-2 mt-4 text-[#5a524a]/60 text-xs">
          <span>Swipe to explore</span>
          <ArrowRight className="w-3 h-3 animate-pulse" />
        </div>
      </section>

      {/* ===== COMPACT BENTO GRID ===== */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="text-center mb-10 sm:mb-16">
          <TextReveal>
            <span className="font-script text-lg sm:text-xl text-[#c4738a]">Our Collection</span>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d2926] mt-2">
              Curated with <span className="italic font-elegant">care</span>
            </h2>
          </TextReveal>
        </div>

        {/* Mobile: 2-col compact grid / Desktop: 4-col bento */}
        <div className="mobile-bento grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(140px,auto)] lg:auto-rows-[minmax(180px,auto)]">

          {/* Hero Card - Large */}
          <BentoCard className="mobile-span-full lg:col-span-2 lg:row-span-3" animation="scroll-fade-right" stagger={1}>
            <div className="relative h-full min-h-[280px] sm:min-h-[350px] lg:min-h-[500px] bg-gradient-to-br from-[#f5e6d3] to-[#fce4ec] p-5 sm:p-8 flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#c4738a]/10 rounded-full blur-3xl group-hover:bg-[#c4738a]/20 transition-colors duration-700"></div>
              <div className="relative z-10">
                <span className="inline-block glass px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-[#c4738a] mb-3 sm:mb-4">
                  ✨ Fresh Arrivals
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold text-[#2d2926] leading-tight">
                  Spring Garden <br className="hidden sm:block" />
                  <span className="font-elegant italic font-light">Collection</span>
                </h2>
                <p className="hidden sm:block mt-4 text-[#5a524a] text-lg max-w-md font-elegant text-xl">
                  Vibrant sunflowers, dahlias, and wildflowers that capture the essence of the season.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <button className="magnetic-btn bg-[#2d2926] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-xl">
                  Shop Now →
                </button>
                <span className="text-[#5a524a] font-elegant text-base sm:text-lg">From $45</span>
              </div>
            </div>
          </BentoCard>

          {/* Featured Image */}
          <BentoCard className="mobile-span-2 lg:col-span-1 lg:row-span-2" animation="scroll-blur" stagger={2}>
            <div className="relative h-full min-h-[200px] sm:min-h-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center img-zoom"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-white/80 text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-display">Best Seller</p>
                <h3 className="text-white font-serif text-base sm:text-xl font-bold">Romantic Roses</h3>
                <p className="text-white/70 text-xs sm:text-sm mt-1 font-elegant text-base sm:text-lg">From $55</p>
              </div>
            </div>
          </BentoCard>

          {/* Stats Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-scale" stagger={3}>
            <div className="h-full bg-[#2d2926] p-4 sm:p-6 flex flex-col justify-between">
              <span className="text-2xl sm:text-3xl animate-float">🌿</span>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-display">12K+</p>
                <p className="text-white/60 text-xs sm:text-sm mt-1 font-elegant text-sm sm:text-base">Happy customers</p>
              </div>
            </div>
          </BentoCard>

          {/* Seasonal Card */}
          <BentoCard className="mobile-span-full lg:col-span-2 lg:row-span-2" animation="scroll-fade-left" stagger={2}>
            <div className="relative h-full min-h-[200px] sm:min-h-[350px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center img-zoom"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&h=600&fit=crop)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f4]/90 via-[#faf7f4]/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-center p-5 sm:p-8">
                <span className="inline-block bg-[#c4738a] text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium mb-2 sm:mb-3 w-fit animate-pulse-soft">
                  Seasonal Special
                </span>
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#2d2926] max-w-xs">
                  Summer <span className="font-elegant italic">Bloom</span>
                </h2>
                <p className="hidden sm:block text-[#5a524a] mt-2 max-w-sm font-elegant text-lg">
                  Limited edition arrangements inspired by Mediterranean gardens.
                </p>
                <button className="magnetic-btn mt-3 sm:mt-4 bg-[#c4738a] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-lg shadow-[#c4738a]/20 w-fit">
                  Shop Summer →
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Services Card */}
          <BentoCard className="mobile-span-full lg:col-span-1 lg:row-span-2" animation="scroll-fade-up" stagger={4}>
            <div className="h-full bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] p-4 sm:p-6 flex flex-col">
              <span className="text-2xl sm:text-3xl mb-2 sm:mb-4 animate-float-slow">🎀</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2d2926]">Our Services</h3>
              <div ref={servicesRef} className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 flex-1">
                {['Wedding Florals', 'Event Design', 'Subscriptions', 'Sympathy', 'Corporate'].map((service, i) => (
                  <div
                    key={service}
                    className={`flex items-center gap-2 text-xs sm:text-sm text-[#3d3936] transition-all duration-500 ${
                      visibleItems[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50]"></span>
                    <span className="font-elegant text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
              <button className="mt-3 sm:mt-4 text-[#2e7d32] text-xs sm:text-sm font-medium animated-underline w-fit">
                Learn more
              </button>
            </div>
          </BentoCard>

          {/* Testimonial */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-bounce" stagger={3}>
            <div className="h-full bg-[#fff3e0] p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-2 sm:mb-3">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-xs sm:text-sm">{s}</span>)}
                </div>
                <p className="text-[#5a524a] text-xs sm:text-sm italic leading-relaxed font-elegant text-sm sm:text-base">
                  "The most beautiful bouquet I've ever received!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#c4738a]/20 flex items-center justify-center text-xs">S</div>
                <div>
                  <p className="text-[10px] sm:text-xs font-medium text-[#2d2926] font-display">Sarah M.</p>
                  <p className="text-[10px] sm:text-xs text-[#5a524a]">Verified buyer</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Quick Order */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-up" stagger={5}>
            <div className="h-full bg-[#fce4ec] p-4 sm:p-6 flex flex-col justify-between group">
              <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-[#c4738a] group-hover:animate-wiggle" />
              <div>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[#2d2926]">Send Love</h3>
                <p className="text-[#5a524a] text-[10px] sm:text-sm mt-1 font-elegant text-xs sm:text-base">Same-day delivery</p>
              </div>
              <button className="magnetic-btn glass text-[#c4738a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium w-fit">
                Order Now →
              </button>
            </div>
          </BentoCard>

          {/* Price Card */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-scale" stagger={4}>
            <div className="h-full bg-white border border-[#e8e0d8] p-4 sm:p-6 flex flex-col justify-between group hover:border-[#c4738a]/30 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl group-hover:animate-float">🌹</span>
                <span className="text-[10px] sm:text-xs bg-[#c4738a]/10 text-[#c4738a] px-2 py-0.5 rounded-full font-display">Popular</span>
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[#2d2926]">Rose Bouquet</h3>
                <p className="hidden sm:block text-[#5a524a] text-xs mt-1 font-elegant text-base">12 premium roses</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg sm:text-xl font-bold text-[#2d2926] font-display">$55</span>
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2d2926] text-white flex items-center justify-center text-sm hover:bg-[#c4738a] transition-colors hover:rotate-90 duration-300">
                  +
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Delivery */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-left" stagger={5}>
            <div className="h-full bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] p-4 sm:p-6 flex flex-col justify-between">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#1976d2] animate-float-slow" />
              <div>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[#2d2926]">Free Delivery</h3>
                <p className="text-[#5a524a] text-[10px] sm:text-sm mt-1 font-elegant text-xs sm:text-base">On orders over $75</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 sm:h-1.5 flex-1 bg-[#1976d2]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1976d2] rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                </div>
                <span className="text-[10px] sm:text-xs text-[#1976d2] font-medium font-display">75%</span>
              </div>
            </div>
          </BentoCard>

          {/* Instagram */}
          <BentoCard className="mobile-span-full lg:col-span-2 lg:row-span-1" animation="scroll-fade-up" stagger={3}>
            <div className="h-full bg-gradient-to-r from-[#f3e5f5] via-[#fce4ec] to-[#fff3e0] p-4 sm:p-6 flex items-center justify-between animate-gradient">
              <div>
                <h3 className="font-serif text-base sm:text-xl font-bold text-[#2d2926]">Follow our journey</h3>
                <p className="text-[#5a524a] text-xs sm:text-sm mt-1 font-elegant text-sm sm:text-lg">@bloomandpetal • 24K</p>
              </div>
              <button className="magnetic-btn bg-[#2d2926] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Follow</span>
              </button>
            </div>
          </BentoCard>

          {/* Workshop */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-bounce" stagger={6}>
            <div className="h-full bg-[#f1f8e9] p-4 sm:p-6 flex flex-col justify-between group">
              <div className="flex items-center justify-between">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#689f38] group-hover:animate-float" />
                <span className="text-[10px] sm:text-xs bg-[#689f38]/10 text-[#689f38] px-2 py-0.5 rounded-full font-display">New</span>
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[#2d2926]">Workshop</h3>
                <p className="text-[#5a524a] text-[10px] sm:text-xs mt-1 font-elegant text-xs sm:text-base">Learn arrangement</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-sm font-medium text-[#2d2926] font-display">Sat, 10am</span>
                <button className="text-[#689f38] text-[10px] sm:text-sm font-medium animated-underline">Book</button>
              </div>
            </div>
          </BentoCard>

          {/* Hours */}
          <BentoCard className="lg:col-span-1 lg:row-span-1" animation="scroll-fade-right" stagger={7}>
            <div className="h-full bg-[#2d2926] p-4 sm:p-6 flex flex-col justify-between text-white group hover:bg-[#3d3936] transition-colors duration-500">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse-soft" />
              <div>
                <h3 className="font-serif text-sm sm:text-lg font-bold">Visit Us</h3>
                <div className="mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
                  <p className="text-white/70 text-[10px] sm:text-xs font-elegant text-xs sm:text-base">Mon-Fri: 8am-7pm</p>
                  <p className="text-white/70 text-[10px] sm:text-xs font-elegant text-xs sm:text-base">Sat: 9am-6pm</p>
                  <p className="text-white/70 text-[10px] sm:text-xs font-elegant text-xs sm:text-base">Sun: 10am-4pm</p>
                </div>
              </div>
              <p className="text-[#c4738a] text-[10px] sm:text-xs font-medium font-display flex items-center gap-1">
                <MapPin className="w-3 h-3" /> 123 Garden St
              </p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ===== SECOND SCROLLABLE GALLERY - DARK ===== */}
      <section className="py-12 sm:py-16 bg-[#2d2926]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <TextReveal>
                <span className="font-script text-lg sm:text-xl text-[#c4738a]">Inspirations</span>
              </TextReveal>
              <TextReveal delay={150}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mt-1">
                  Mood <span className="font-elegant italic">board</span>
                </h2>
              </TextReveal>
            </div>
          </div>
        </div>

        <div className="scroll-gallery flex gap-3 sm:gap-4 px-5 sm:px-6 pb-4">
          {[
            { img: 'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=500&h=350&fit=crop', label: 'Romantic' },
            { img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=350&fit=crop', label: 'Classic' },
            { img: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=500&h=350&fit=crop', label: 'Dreamy' },
            { img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=500&h=350&fit=crop', label: 'Spring' },
            { img: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&h=350&fit=crop', label: 'Aromatic' },
            { img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=500&h=350&fit=crop', label: 'Elegant' },
            { img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=500&h=350&fit=crop', label: 'Bold' },
            { img: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=500&h=350&fit=crop', label: 'Wild' },
          ].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[220px] sm:w-[300px] group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <span className="text-white font-serif text-lg sm:text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-10 sm:mt-12 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="mx-6 sm:mx-8 text-white/20 font-elegant text-xl sm:text-2xl italic">
                ✿ Same Day Delivery • Sustainably Sourced • Handcrafted Daily • Freshness Guaranteed • Gift Wrapping Included
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 sm:py-20 bg-white/50 border-y border-[#e8e0d8]/50">
        <div className="max-w-5xl mx-auto px-6">
          <TextReveal>
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2d2926] mb-10 sm:mb-12">
              Trusted by <span className="font-elegant italic">thousands</span>
            </h2>
          </TextReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <Counter end={12000} suffix="+" label="Happy Customers" />
            <Counter end={500} suffix="+" label="Bouquets Weekly" />
            <Counter end={98} suffix="%" label="Freshness Rate" />
            <Counter end={15} suffix="" label="Years of Bloom" />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <TextReveal>
              <span className="font-script text-lg sm:text-xl text-[#c4738a]">Our Story</span>
            </TextReveal>
            <TextReveal delay={200}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d2926] mt-2 leading-tight">
                Where every petal tells a <span className="font-elegant italic">story</span>
              </h2>
            </TextReveal>
            <TextReveal delay={400}>
              <p className="mt-4 sm:mt-6 text-[#5a524a] font-elegant text-lg sm:text-xl leading-relaxed">
                Founded in 2009, Bloom & Petal began as a small corner shop with a big dream — 
                to bring the joy of fresh flowers into every home.
              </p>
            </TextReveal>
            <TextReveal delay={600}>
              <p className="mt-3 sm:mt-4 text-[#5a524a] font-elegant text-lg sm:text-xl leading-relaxed">
                Each arrangement is handcrafted by our team of passionate florists who believe 
                that flowers have the power to transform ordinary moments.
              </p>
            </TextReveal>
            <TextReveal delay={800}>
              <button className="magnetic-btn mt-6 sm:mt-8 bg-[#2d2926] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium shadow-xl">
                Read Our Story →
              </button>
            </TextReveal>
          </div>
          <div className="relative">
            <BentoCard animation="scroll-scale">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5]">
                <div
                  className="absolute inset-0 bg-cover bg-center img-zoom"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=750&fit=crop)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </BentoCard>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 animate-float-slow shadow-xl">
              <p className="font-script text-[#c4738a] text-sm sm:text-lg">Est. 2009</p>
              <p className="text-[10px] sm:text-xs text-[#5a524a] font-display">Crafting joy daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <TextReveal>
            <span className="font-script text-lg sm:text-xl text-[#c4738a]">Kind Words</span>
          </TextReveal>
          <TextReveal delay={200}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d2926] mt-2">
              What our <span className="font-elegant italic">customers</span> say
            </h2>
          </TextReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { text: "Absolutely stunning arrangements! My wife was thrilled with the anniversary bouquet.", name: "James R.", role: "Loyal Customer" },
            { text: "The wedding florals were beyond our dreams. Every guest commented on how beautiful they were.", name: "Emily & Tom", role: "Wedding 2024" },
            { text: "Their weekly subscription has transformed our office space. Fresh, beautiful, always on time.", name: "Sarah K.", role: "Corporate Client" },
          ].map((testimonial, i) => (
            <BentoCard key={i} animation="scroll-fade-up" stagger={(i + 1) as 1 | 2 | 3}>
              <div className="h-full bg-white border border-[#e8e0d8] rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500">
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-3 sm:mb-4">
                    {'★★★★★'.split('').map((s, j) => <span key={j} className="text-xs sm:text-sm">{s}</span>)}
                  </div>
                  <p className="text-[#5a524a] font-elegant text-base sm:text-xl leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#e8e0d8]">
                  <p className="font-display text-xs sm:text-sm font-medium text-[#2d2926]">{testimonial.name}</p>
                  <p className="text-[10px] sm:text-xs text-[#5a524a] font-elegant text-xs sm:text-base">{testimonial.role}</p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <BentoCard animation="scroll-scale">
          <div className="relative bg-gradient-to-br from-[#c4738a] to-[#a85d73] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-white/5 rounded-full blur-2xl animate-float"></div>
            
            <TextReveal>
              <span className="font-script text-xl sm:text-2xl text-white/80">Ready to bloom?</span>
            </TextReveal>
            <TextReveal delay={200}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3 sm:mt-4">
                Send flowers that <br className="hidden sm:block" />
                <span className="font-elegant italic font-light">say it all</span>
              </h2>
            </TextReveal>
            <TextReveal delay={400}>
              <p className="mt-3 sm:mt-4 text-white/80 max-w-lg mx-auto font-elegant text-base sm:text-xl">
                Order before 2pm for same-day delivery. Free shipping on orders over $75.
              </p>
            </TextReveal>
            <TextReveal delay={600}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <button className="magnetic-btn bg-white text-[#c4738a] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium shadow-xl w-full sm:w-auto">
                  Shop All Flowers
                </button>
                <button className="magnetic-btn border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">
                  Subscribe & Save
                </button>
              </div>
            </TextReveal>
          </div>
        </BentoCard>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2d2926] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <span className="font-serif text-lg sm:text-xl font-bold">Bloom & Petal</span>
              </div>
              <p className="text-white/60 font-elegant text-base sm:text-lg max-w-sm leading-relaxed">
                Bringing the beauty of nature into your home since 2009. 
                Every arrangement is a work of art.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {['𝕏', '📷', '📌', '🎵'].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-sm hover:bg-[#c4738a] transition-colors duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 text-white/40">Shop</h4>
              <ul className="space-y-2">
                {['All Flowers', 'Seasonal', 'Subscriptions', 'Gift Cards'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[#c4738a] transition-colors font-elegant text-sm sm:text-base animated-underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 text-white/40">Info</h4>
              <ul className="space-y-2">
                {['About Us', 'Delivery', 'Care Guide', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-[#c4738a] transition-colors font-elegant text-sm sm:text-base animated-underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs sm:text-sm font-elegant text-center sm:text-left">© 2024 Bloom & Petal. Made with 🤍 and fresh flowers.</p>
            <p className="text-white/40 text-xs sm:text-sm font-elegant">Privacy • Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
