import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Leaf1({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0C50 0 0 40 0 80C0 110 22 140 50 140C78 140 100 110 100 80C100 40 50 0 50 0Z" fill="currentColor" />
      <path d="M50 20V120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function Leaf2({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 0C40 0 0 30 0 65C0 95 18 120 40 120C62 120 80 95 80 65C80 30 40 0 40 0Z" fill="currentColor" />
      <path d="M40 15V105" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

function Leaf3({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="45" rx="28" ry="43" fill="currentColor" />
      <path d="M30 5V85" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

interface LeafConfig {
  Component: React.FC<{ className?: string }>;
  top: string;
  left: string;
  size: string;
  speed: number;
  rotate: number;
  color: string;
}

const leaves: LeafConfig[] = [
  { Component: Leaf1, top: '10%', left: '5%', size: '120px', speed: 0.3, rotate: 25, color: '#2d5a2d' },
  { Component: Leaf2, top: '25%', left: '85%', size: '90px', speed: 0.5, rotate: -15, color: '#3d6b3d' },
  { Component: Leaf3, top: '45%', left: '10%', size: '70px', speed: 0.7, rotate: 45, color: '#4a7a4a' },
  { Component: Leaf1, top: '75%', left: '8%', size: '100px', speed: 0.6, rotate: 60, color: '#2d5a2d' },
  { Component: Leaf2, top: '85%', left: '88%', size: '80px', speed: 0.35, rotate: -45, color: '#3d6b3d' },
];

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf, i) => {
        const LeafComponent = leaf.Component;
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, leaf.speed * -500]
        );
        const rotate = useTransform(
          scrollYProgress,
          [0, 1],
          [leaf.rotate, leaf.rotate + leaf.speed * 60]
        );

        return (
          <motion.div
            key={i}
            className="parallax-leaf"
            style={{
              top: leaf.top,
              left: leaf.left,
              width: leaf.size,
              height: leaf.size,
              y,
              rotate,
              color: leaf.color,
            }}
          >
            <LeafComponent className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
