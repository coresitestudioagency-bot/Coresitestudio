import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  sway: number;
  emoji: string;
  opacity: number;
}

const flowerEmojis = ['🌸', '🌺', '🌷', '🌹', '💮', '🏵️', '✿', '❀'];

function petalCount() {
  if (typeof window === 'undefined') return 8;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
  return window.innerWidth < 768 ? 6 : 10;
}

export default function FlowerRain() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const count = petalCount();
    const initialPetals: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      sway: (Math.random() - 0.5) * 120,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      opacity: Math.random() * 0.4 + 0.3,
    }));
    setPetals(initialPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="flower-fall absolute top-0"
            style={{
              left: `${petal.x}%`,
              fontSize: `${petal.size}px`,
              opacity: petal.opacity,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              ['--sway' as string]: `${petal.sway}px`,
              ['--spin' as string]: `${petal.rotation + 360}deg`,
            }}
          >
            {petal.emoji}
          </span>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-[2] overflow-hidden">
        <div className="relative h-16 sm:h-20">
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-[#F9F6F0]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-2 pb-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`pile-${i}`}
                className="inline-block opacity-50"
                style={{
                  fontSize: `${10 + (i % 4) * 2}px`,
                  transform: `rotate(${(i * 17) % 50 - 25}deg)`,
                }}
              >
                {flowerEmojis[i % flowerEmojis.length]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
