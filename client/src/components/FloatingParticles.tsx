import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
  size: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const emojis = ['❤️', '💕', '✨', '🌙', '⭐', '🎀', '💝'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 20 + Math.random() * 30,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute text-center"
          style={{
            left: `${particle.left}%`,
            bottom: '-50px',
            fontSize: `${particle.size}px`,
            animation: `particle-float ${particle.duration}s ease-in forwards`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
