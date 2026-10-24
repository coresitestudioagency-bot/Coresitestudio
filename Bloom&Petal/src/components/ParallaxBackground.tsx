import React from 'react';

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

const leaves = [
  { Component: Leaf1, top: '10%', left: '5%', size: '120px', rotate: 25, color: '#2d5a2d' },
  { Component: Leaf2, top: '25%', left: '85%', size: '90px', rotate: -15, color: '#3d6b3d' },
  { Component: Leaf3, top: '45%', left: '10%', size: '70px', rotate: 45, color: '#4a7a4a' },
  { Component: Leaf1, top: '75%', left: '8%', size: '100px', rotate: 60, color: '#2d5a2d' },
  { Component: Leaf2, top: '85%', left: '88%', size: '80px', rotate: -45, color: '#3d6b3d' },
];

export default function ParallaxBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf, i) => {
        const LeafComponent = leaf.Component;
        return (
          <div
            key={i}
            className="parallax-leaf"
            style={{
              top: leaf.top,
              left: leaf.left,
              width: leaf.size,
              height: leaf.size,
              transform: `rotate(${leaf.rotate}deg)`,
              color: leaf.color,
            }}
          >
            <LeafComponent className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}
