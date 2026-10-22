import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const storyBlocks = [
  {
    title: 'Rooted in Nature',
    text: 'Founded in 2009, Bloom & Petal began as a small corner shop with a singular vision — to bring the raw, unbridled beauty of nature into every home. We believe flowers are not mere decoration; they are living poetry.',
  },
  {
    title: 'Sourced with Purpose',
    text: 'Every stem in our arrangements is ethically sourced from local growers and sustainable farms across the countryside. We work directly with artisan cultivators who share our reverence for the land.',
  },
  {
    title: 'Crafted by Hand',
    text: 'Each bouquet is composed by our team of passionate florists — artists who see every arrangement as a canvas. No two creations are alike. Every petal is placed with intention and care.',
  },
  {
    title: 'Delivered with Love',
    text: 'From our studio to your doorstep, we ensure every bloom arrives in peak condition. Because we believe the magic of flowers should be experienced at their most vibrant, most alive.',
  },
];

export default function StickyStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative" id="about">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Sticky Video Side */}
        <div className="hidden md:block relative h-screen sticky top-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: imageScale, y: imageY }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.mp4tourl.com/video/free/59ef6170-d888-4968-b0c1-a78364f8a59d.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#F9F6F0]/20" />
          </motion.div>
          
          {/* Floating badge */}
          <motion.div
            className="absolute bottom-8 left-8 liquid-glass rounded-2xl p-5"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
          >
            <p className="font-serif italic text-xl text-[#1A2F1A] tracking-tight">Est. 2009</p>
            <p className="text-xs text-[#1A2F1A]/60 mt-1">Crafting joy daily</p>
          </motion.div>
        </div>

        {/* Scrolling Text Side */}
        <div className="py-20 sm:py-32 px-6 sm:px-12 lg:px-16">
          <ScrollReveal>
            <span className="font-serif italic text-lg text-[#1A2F1A]/50 tracking-tight">Our Story</span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-[#1A2F1A] tracking-tight mt-4 leading-[1.1]">
              Where every petal tells a story
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-24">
            {storyBlocks.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="max-w-md">
                  <span className="font-serif italic text-sm text-[#1A2F1A]/40 tracking-tight">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[#1A2F1A] tracking-tight mt-2">
                    {block.title}
                  </h3>
                  <p className="text-[#1A2F1A]/70 mt-4 leading-relaxed text-base sm:text-lg">
                    {block.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile video */}
          <div className="md:hidden mt-16 rounded-3xl overflow-hidden aspect-[4/5]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.mp4tourl.com/video/free/59ef6170-d888-4968-b0c1-a78364f8a59d.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
