import { motion } from 'framer-motion';
import { ShoppingBag, Heart, ArrowRight, Play, Star, MapPin, Clock, Sparkles, Instagram, Truck, Gift } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import ParallaxBackground from './components/ParallaxBackground';
import ScrollReveal from './components/ScrollReveal';
import AnimatedButton from './components/AnimatedButton';
import LiquidGlassNav from './components/LiquidGlassNav';
import StickyStorySection from './components/StickyStorySection';
import StickyMarquee from './components/StickyMarquee';
import VideoShowcaseCard from './components/VideoShowcaseCard';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#1A2F1A] relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Parallax Background Leaves */}
      <ParallaxBackground />

      {/* Liquid Glass Navigation */}
      <LiquidGlassNav />

      {/* ===== FULLSCREEN VIDEO HERO SECTION ===== */}
      <section className="relative h-[85vh] sm:h-screen w-full overflow-hidden">
        {/* Video Background */}
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <source src="https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm" type="video/webm" />
        </motion.video>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A2F1A]/40 via-[#1A2F1A]/20 to-[#1A2F1A]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F1A]/30 via-transparent to-[#1A2F1A]/30" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center max-w-5xl">
            {/* Animated Badge */}
            <motion.div
              className="inline-flex items-center gap-2 liquid-glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#c4738a] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#F9F6F0]/90 text-[10px] sm:text-xs md:text-sm font-medium">Fresh blooms, delivered daily</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F9F6F0] tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Flowers that<br />
              <motion.span
                className="text-[#F9F6F0]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                speak from the
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                heart
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-[#F9F6F0]/80 text-xs sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 leading-relaxed px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Artisan bouquets, seasonal arrangements, and bespoke floral designs — 
              handcrafted with love and delivered fresh to your door.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#F9F6F0] text-[#1A2F1A] text-xs sm:text-sm font-semibold rounded-full hover:bg-[#F9F6F0]/90 shadow-xl flex items-center gap-1.5 sm:gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Shop Collection
              </motion.button>
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 liquid-glass rounded-full text-[#F9F6F0] text-xs sm:text-sm font-semibold hover:bg-white/10 flex items-center gap-1.5 sm:gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Watch our story
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-[#F9F6F0]/30 flex items-start justify-center p-1.5"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1.5 h-3 rounded-full bg-[#F9F6F0]/60"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SCROLLABLE IMAGE GALLERY ===== */}
      <section className="py-12 sm:py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-12">
          <ScrollReveal>
            <span className="font-serif italic text-base sm:text-lg text-[#1A2F1A]/50 tracking-tight">Fresh Picks</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#1A2F1A] tracking-tight mt-2">
              Trending this week
            </h2>
          </ScrollReveal>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {[
            { title: 'Garden Roses', price: '$45', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=500&fit=crop', tag: 'Best Seller' },
            { title: 'Peony Dream', price: '$65', img: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=400&h=500&fit=crop', tag: 'New' },
            { title: 'Wild Meadow', price: '$38', img: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=500&fit=crop', tag: 'Seasonal' },
            { title: 'Sunset Dahlia', price: '$55', img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=500&fit=crop', tag: 'Limited' },
            { title: 'Blush Tulips', price: '$35', img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400&h=500&fit=crop', tag: 'Popular' },
            { title: 'Lavender Fields', price: '$42', img: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&h=500&fit=crop', tag: 'Aromatic' },
            { title: 'White Orchids', price: '$78', img: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=500&fit=crop', tag: 'Premium' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex-shrink-0 w-[180px] sm:w-[280px] md:w-[320px] snap-start">
              <motion.div
                className="card-mask group cursor-hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="card-mask-overlay" />
                  <span className="absolute top-4 left-4 bg-[#F9F6F0]/90 backdrop-blur-sm text-[#1A2F1A] text-xs font-medium px-3 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                  <motion.button
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F9F6F0]/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-4 h-4 text-[#1A2F1A]" />
                  </motion.button>
                  <div className="card-mask-content">
                    <button className="w-full bg-[#F9F6F0] text-[#1A2F1A] py-3 rounded-full text-sm font-medium hover:bg-[#1A2F1A] hover:text-[#F9F6F0] transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 mt-4">
                  <h3 className="font-serif italic text-lg text-[#1A2F1A] tracking-tight">{item.title}</h3>
                  <span className="text-sm font-medium text-[#1A2F1A]/70">{item.price}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== BENTO GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 relative z-10 mobile-compact-section">
        <div className="text-center mb-8 sm:mb-16">
          <ScrollReveal>
            <span className="font-serif italic text-base sm:text-lg text-[#1A2F1A]/50 tracking-tight">Our Collection</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#1A2F1A] tracking-tight mt-2">
              Curated with care
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 auto-rows-[minmax(140px,auto)] md:auto-rows-[minmax(180px,auto)]">
          {/* Video Showcase Card */}
          <ScrollReveal className="col-span-2 lg:col-span-2 lg:row-span-3" delay={0.1}>
            <VideoShowcaseCard />
          </ScrollReveal>

          {/* Featured Image */}
          <ScrollReveal className="col-span-1 lg:col-span-1 lg:row-span-2" delay={0.2}>
            <motion.div
              className="card-mask h-full min-h-[200px] md:min-h-[350px] rounded-2xl md:rounded-3xl overflow-hidden relative cursor-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=800&fit=crop"
                alt="Romantic Roses"
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="card-mask-overlay" />
              <div className="card-mask-content">
                <p className="text-[#F9F6F0]/80 text-xs uppercase tracking-wider mb-1">Best Seller</p>
                <h3 className="font-serif italic text-2xl text-[#F9F6F0] tracking-tight">Romantic Roses</h3>
                <p className="text-[#F9F6F0]/70 text-sm mt-1">From $55</p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stats Card */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="h-full bg-[#1A2F1A] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl md:text-3xl">🌿</span>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-[#F9F6F0]">12K+</p>
                <p className="text-[#F9F6F0]/60 text-xs md:text-sm mt-1">Happy customers</p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Seasonal Video Card */}
          <ScrollReveal className="col-span-2 lg:col-span-2 lg:row-span-2" delay={0.2}>
            <motion.div
              className="h-full min-h-[200px] md:min-h-[350px] rounded-2xl md:rounded-3xl overflow-hidden relative cursor-hover group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              >
                <source src="https://cdn.mp4tourl.com/video/free/eaf960b3-7ce2-4e54-9163-29a6c872471b.webm" type="video/webm" />
              </video>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#1A2F1A]/40 group-hover:bg-[#1A2F1A]/30 transition-colors duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <motion.span
                    className="inline-flex items-center gap-2 bg-[#F9F6F0]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-[#1A2F1A]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#c4738a] rounded-full animate-pulse"></span>
                    Seasonal Special
                  </motion.span>
                </div>
                
                <div>
                  <h2 className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F9F6F0] tracking-tight">
                    Summer Bloom
                  </h2>
                  <p className="text-[#F9F6F0]/80 mt-2 max-w-sm text-sm sm:text-base">
                    Limited edition arrangements inspired by Mediterranean gardens.
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <AnimatedButton variant="secondary" hoverText="Shop Summer →">
                      Shop Summer
                    </AnimatedButton>
                  </div>
                </div>
              </div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 1px rgba(249, 246, 240, 0.1)',
                }}
                animate={{
                  boxShadow: [
                    'inset 0 0 0 1px rgba(249, 246, 240, 0.1)',
                    'inset 0 0 0 2px rgba(249, 246, 240, 0.3)',
                    'inset 0 0 0 1px rgba(249, 246, 240, 0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </ScrollReveal>

          {/* Services Card */}
          <ScrollReveal className="col-span-2 lg:col-span-1 lg:row-span-2" delay={0.4}>
            <motion.div
              className="h-full bg-gradient-to-b from-[#e8f5e9] to-[#c8e6c9] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl md:text-3xl mb-2 md:mb-4">🎀</span>
              <h3 className="font-serif italic text-base md:text-xl text-[#1A2F1A] tracking-tight">Our Services</h3>
              <ul className="mt-4 space-y-3 flex-1">
                {['Wedding Florals', 'Event Design', 'Subscriptions', 'Sympathy', 'Corporate'].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#1A2F1A]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1A2F1A]"></span>
                    {service}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-[#1A2F1A] text-sm font-medium animated-underline w-fit">
                Learn more →
              </button>
            </motion.div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="h-full bg-[#fff3e0] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-2 md:mb-3">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-xs md:text-sm">{s}</span>)}
                </div>
                <p className="text-[#1A2F1A]/70 text-xs md:text-sm italic leading-relaxed">
                  "The most beautiful bouquet I've ever received!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-3 md:mt-4">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1A2F1A]/10 flex items-center justify-center text-xs md:text-sm">S</div>
                <div>
                  <p className="text-[10px] md:text-xs font-medium text-[#1A2F1A]">Sarah M.</p>
                  <p className="text-[10px] md:text-xs text-[#1A2F1A]/60">Verified buyer</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Quick Order */}
          <ScrollReveal delay={0.5}>
            <motion.div
              className="h-full bg-[#fce4ec] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between group cursor-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Gift className="w-6 h-6 md:w-8 md:h-8 text-[#1A2F1A] group-hover:animate-bounce" />
              <div>
                <h3 className="font-serif italic text-sm md:text-lg text-[#1A2F1A] tracking-tight">Send Love</h3>
                <p className="text-[#1A2F1A]/70 text-xs md:text-sm mt-1">Same-day delivery</p>
              </div>
              <AnimatedButton variant="secondary" hoverText="Order →" className="w-fit text-xs md:text-sm py-2 md:py-3 px-3 md:px-6">
                Order Now
              </AnimatedButton>
            </motion.div>
          </ScrollReveal>

          {/* Price Card */}
          <ScrollReveal delay={0.4}>
            <motion.div
              className="h-full bg-[#F9F6F0] border border-[#1A2F1A]/10 rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between group cursor-hover"
              whileHover={{ scale: 1.02, borderColor: 'rgba(26, 47, 26, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl md:text-2xl group-hover:animate-bounce">🌹</span>
                <span className="text-[10px] md:text-xs bg-[#1A2F1A]/10 text-[#1A2F1A] px-2 py-0.5 rounded-full">Popular</span>
              </div>
              <div>
                <h3 className="font-serif italic text-sm md:text-lg text-[#1A2F1A] tracking-tight">Rose Bouquet</h3>
                <p className="text-[#1A2F1A]/60 text-[10px] md:text-xs mt-1">12 premium roses</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-base md:text-xl font-bold text-[#1A2F1A]">$55</span>
                <motion.button
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1A2F1A] text-[#F9F6F0] flex items-center justify-center text-sm md:text-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Delivery */}
          <ScrollReveal delay={0.5}>
            <motion.div
              className="h-full bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Truck className="w-6 h-6 md:w-8 md:h-8 text-[#1976d2]" />
              <div>
                <h3 className="font-serif italic text-sm md:text-lg text-[#1A2F1A] tracking-tight">Free Delivery</h3>
                <p className="text-[#1A2F1A]/70 text-xs md:text-sm mt-1">On orders over $75</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-[#1976d2]/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#1976d2] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-xs text-[#1976d2] font-medium">75%</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Instagram */}
          <ScrollReveal className="col-span-2 lg:col-span-2" delay={0.3}>
            <motion.div
              className="h-full bg-gradient-to-r from-[#f3e5f5] via-[#fce4ec] to-[#fff3e0] rounded-2xl md:rounded-3xl p-3 md:p-6 flex items-center justify-between"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h3 className="font-serif italic text-sm md:text-xl text-[#1A2F1A] tracking-tight">Follow our journey</h3>
                <p className="text-[#1A2F1A]/70 text-xs md:text-sm mt-1">@bloomandpetal • 24K</p>
              </div>
              <AnimatedButton variant="primary" hoverText="Follow →" className="text-xs md:text-sm py-2 md:py-3 px-3 md:px-6">
                <span className="flex items-center gap-1 md:gap-2">
                  <Instagram className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Follow</span>
                </span>
              </AnimatedButton>
            </motion.div>
          </ScrollReveal>

          {/* Workshop */}
          <ScrollReveal delay={0.6}>
            <motion.div
              className="h-full bg-[#f1f8e9] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between group cursor-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#689f38]" />
                <span className="text-[10px] md:text-xs bg-[#689f38]/10 text-[#689f38] px-2 py-0.5 rounded-full">New</span>
              </div>
              <div>
                <h3 className="font-serif italic text-sm md:text-lg text-[#1A2F1A] tracking-tight">Workshop</h3>
                <p className="text-[#1A2F1A]/70 text-[10px] md:text-xs mt-1">Learn arrangement</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium text-[#1A2F1A]">Sat, 10am</span>
                <button className="text-[#689f38] text-xs md:text-sm font-medium animated-underline">Book</button>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={0.7}>
            <motion.div
              className="h-full bg-[#1A2F1A] rounded-2xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-between text-[#F9F6F0] group cursor-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
              <div>
                <h3 className="font-serif italic text-sm md:text-lg tracking-tight">Visit Us</h3>
                <div className="mt-1 md:mt-2 space-y-0.5 md:space-y-1">
                  <p className="text-[#F9F6F0]/70 text-[10px] md:text-xs">Mon-Fri: 8am-7pm</p>
                  <p className="text-[#F9F6F0]/70 text-[10px] md:text-xs">Sat: 9am-6pm</p>
                  <p className="text-[#F9F6F0]/70 text-[10px] md:text-xs">Sun: 10am-4pm</p>
                </div>
              </div>
              <p className="text-[#c4738a] text-[10px] md:text-xs font-medium flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3" /> 123 Garden St
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STICKY STORY SECTION ===== */}
      <StickyStorySection />

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <ScrollReveal>
            <span className="font-serif italic text-base sm:text-lg text-[#1A2F1A]/50 tracking-tight">Kind Words</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif italic text-2xl sm:text-5xl md:text-6xl text-[#1A2F1A] tracking-tight mt-2">
              What our customers say
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { text: "Absolutely stunning arrangements! My wife was thrilled with the anniversary bouquet.", name: "James R.", role: "Loyal Customer" },
            { text: "The wedding florals were beyond our dreams. Every guest commented on how beautiful they were.", name: "Emily & Tom", role: "Wedding 2024" },
            { text: "Their weekly subscription has transformed our office space. Fresh, beautiful, always on time.", name: "Sarah K.", role: "Corporate Client" },
          ].map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="h-full bg-[#F9F6F0] border border-[#1A2F1A]/10 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between cursor-hover"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(26, 47, 26, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-3 md:mb-4">
                    {'★★★★★'.split('').map((s, j) => <span key={j} className="text-xs md:text-sm">{s}</span>)}
                  </div>
                  <p className="text-[#1A2F1A]/70 font-serif italic text-base sm:text-xl leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1A2F1A]/10">
                  <p className="text-xs sm:text-sm font-medium text-[#1A2F1A]">{testimonial.name}</p>
                  <p className="text-[10px] sm:text-xs text-[#1A2F1A]/60">{testimonial.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20 md:pb-28 relative z-10">
        <ScrollReveal>
          <motion.div
            className="relative bg-gradient-to-br from-[#1A2F1A] to-[#2d4a2d] rounded-2xl md:rounded-3xl p-6 sm:p-12 md:p-16 lg:p-20 text-center overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#F9F6F0]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 bg-[#F9F6F0]/5 rounded-full blur-2xl"></div>
            
            <span className="font-serif italic text-lg sm:text-2xl text-[#F9F6F0]/80">Ready to bloom?</span>
            <h2 className="font-serif italic text-2xl sm:text-5xl md:text-6xl text-[#F9F6F0] tracking-tight mt-2 sm:mt-4">
              Send flowers that<br />
              <span className="text-[#F9F6F0]/60">say it all</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-[#F9F6F0]/70 max-w-lg mx-auto text-sm sm:text-lg px-2">
              Order before 2pm for same-day delivery. Free shipping on orders over $75.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <AnimatedButton variant="secondary" hoverText="Shop All →" className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8">
                Shop All Flowers
              </AnimatedButton>
              <AnimatedButton variant="outline" hoverText="Subscribe →" className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8">
                Subscribe & Save
              </AnimatedButton>
            </div>
          </motion.div>
        </ScrollReveal>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1A2F1A] text-[#F9F6F0] py-10 sm:py-16 pb-20 sm:pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🌸</span>
                <span className="font-serif italic text-lg md:text-xl tracking-tight font-semibold">Bloom & Petal</span>
              </div>
              <p className="text-[#F9F6F0]/60 max-w-sm leading-relaxed text-xs sm:text-sm md:text-base">
                Bringing the beauty of nature into your home since 2009. 
                Every arrangement is a work of art.
              </p>
              <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                {['𝕏', '📷', '📌', '🎵'].map((icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F9F6F0]/10 flex items-center justify-center text-xs sm:text-sm cursor-hover"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(249, 246, 240, 0.2)' }}
                    transition={{ duration: 0.2 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4 text-[#F9F6F0]/40">Shop</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {['All Flowers', 'Seasonal', 'Subscriptions', 'Gift Cards'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#F9F6F0]/60 hover:text-[#F9F6F0] transition-colors text-xs sm:text-sm cursor-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4 text-[#F9F6F0]/40">Info</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {['About Us', 'Delivery', 'Care Guide', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#F9F6F0]/60 hover:text-[#F9F6F0] transition-colors text-xs sm:text-sm cursor-hover">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#F9F6F0]/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <p className="text-[#F9F6F0]/40 text-[10px] sm:text-sm text-center sm:text-left">© 2024 Bloom & Petal. Made with 🤍 and fresh flowers.</p>
            <p className="text-[#F9F6F0]/40 text-[10px] sm:text-sm">Privacy • Terms</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Marquee */}
      <StickyMarquee />
    </div>
  );
}
