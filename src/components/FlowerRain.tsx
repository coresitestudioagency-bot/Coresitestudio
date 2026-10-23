import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

export default function FlowerRain() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initialPetals: Petal[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 15,
      rotation: Math.random() * 360,
      sway: (Math.random() - 0.5) * 200,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute top-0"
            style={{
              left: `${petal.x}%`,
              fontSize: `${petal.size}px`,
            }}
            initial={{
              y: '-10vh',
              x: 0,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: '110vh',
              x: petal.sway,
              rotate: petal.rotation + 720,
              opacity: [0, petal.opacity, petal.opacity, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.1, 0.8, 1],
            }}
          >
            {petal.emoji}
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-[2] overflow-hidden">
        <div className="relative h-20 sm:h-24">
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-[#F9F6F0]/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-2 pb-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.span
                key={`pile-${i}`}
                className="inline-block"
                style={{
                  fontSize: `${Math.random() * 10 + 10}px`,
                  transform: `rotate(${Math.random() * 60 - 30}deg)`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{
                  delay: 2 + i * 0.2,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {flowerEmojis[i % flowerEmojis.length]}
              </motion.span>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end px-4 pb-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={`pile2-${i}`}
                className="inline-block"
                style={{
                  fontSize: `${Math.random() * 8 + 8}px`,
                  transform: `rotate(${Math.random() * 90 - 45}deg)`,
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{
                  delay: 3 + i * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {flowerEmojis[(i + 3) % flowerEmojis.length]}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
