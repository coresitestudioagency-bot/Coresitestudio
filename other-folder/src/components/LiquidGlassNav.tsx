import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Shop', children: ['Bouquets', 'Single Stems', 'Seasonal', 'Gift Cards'] },
  { label: 'Services', children: ['Weddings', 'Events', 'Subscriptions', 'Workshops'] },
  { label: 'About', children: ['Our Story', 'Team', 'Sustainability'] },
  { label: 'Journal' },
];

const LiquidGlassNav = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 sm:left-6 sm:right-6 z-50"
    >
      <div className="max-w-6xl mx-auto liquid-glass rounded-full px-5 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl sm:text-2xl">🌸</span>
          <span className="font-serif italic text-base sm:text-lg text-[#1A2F1A] tracking-tight font-semibold">
            Bloom & Petal
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm text-[#1A2F1A]/70 hover:text-[#1A2F1A] transition-colors font-medium">
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
              </button>
              <AnimatePresence>
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 liquid-glass rounded-2xl py-3 px-2 min-w-[160px] shadow-xl"
                  >
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block text-[#1A2F1A]/70 hover:text-[#1A2F1A] text-sm rounded-xl hover:bg-[#1A2F1A]/5 px-3 py-2 transition-colors"
                      >
                        {child}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm text-[#1A2F1A]/70 hover:text-[#1A2F1A] transition-colors font-medium">
            Log in
          </a>
          <button className="bg-[#1A2F1A] text-[#F9F6F0] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#2d4a2d] transition-colors">
            Order Now
          </button>
        </div>

        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-[#1A2F1A]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-[#1A2F1A]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 mx-4 liquid-glass rounded-3xl p-6 shadow-2xl"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href="#" className="block text-[#1A2F1A] hover:text-[#1A2F1A]/70 py-3 text-base font-medium transition-colors">
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 pb-2">
                      {item.children.map((child) => (
                        <a key={child} href="#" className="block text-[#1A2F1A]/60 hover:text-[#1A2F1A] py-2 text-sm transition-colors">
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#1A2F1A]/10 flex items-center gap-3">
              <a href="#" className="flex-1 text-center py-2.5 text-sm font-medium text-[#1A2F1A]">Log in</a>
              <button className="flex-1 bg-[#1A2F1A] text-[#F9F6F0] py-2.5 rounded-full text-sm font-medium">Order Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

LiquidGlassNav.displayName = 'LiquidGlassNav';

export default LiquidGlassNav;
