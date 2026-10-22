import { motion } from 'framer-motion';

export default function StickyMarquee() {
  const items = [
    '✿ FRESH BLOOMS',
    '✿ DELIVERED DAILY',
    '✿ HANDCRAFTED WITH LOVE',
    '✿ SAME-DAY SHIPPING',
    '✿ SUSTAINABLY SOURCED',
    '✿ FREE OVER $75',
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1A2F1A] py-3 overflow-hidden"
    >
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            {items.map((item, j) => (
              <span
                key={j}
                className="font-serif italic text-sm sm:text-base text-[#F9F6F0]/80 tracking-tight"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
