import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  emoji: string;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const emojis = ['🌸', '🩷', '✿', '❀', '🌺'];
    // Fewer petals on mobile for performance
    const count = window.innerWidth < 768 ? 6 : 10;
    const newPetals: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 14 + 8,
      duration: Math.random() * 12 + 18,
      delay: Math.random() * 25,
      opacity: Math.random() * 0.3 + 0.08,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {petal.emoji}
        </span>
      ))}
    </div>
  );
}
