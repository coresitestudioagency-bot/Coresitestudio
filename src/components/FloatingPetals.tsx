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
    const newPetals: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.4 + 0.1,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
