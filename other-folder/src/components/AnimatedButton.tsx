import React, { ReactNode, memo } from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: ReactNode;
  hoverText?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

const AnimatedButton = memo(({
  children,
  hoverText,
  className = '',
  variant = 'primary',
  onClick,
}: AnimatedButtonProps) => {
  const variants = {
    primary: 'bg-[#1A2F1A] text-[#F9F6F0] hover:bg-[#2d4a2d]',
    secondary: 'bg-[#F9F6F0] text-[#1A2F1A] border border-[#1A2F1A]/20 hover:bg-[#1A2F1A] hover:text-[#F9F6F0]',
    outline: 'border border-[#1A2F1A]/30 text-[#1A2F1A] hover:bg-[#1A2F1A] hover:text-[#F9F6F0]',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`btn-roll relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="btn-roll-text">{children}</span>
      {hoverText && (
        <span className="btn-roll-text-hover">{hoverText}</span>
      )}
    </motion.button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
