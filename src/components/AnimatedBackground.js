import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const BUBBLES = [
  { size: 220, x: 10, y: 15, speed: 0.7, opacity: 0.32 },
  { size: 140, x: 70, y: 30, speed: 1.1, opacity: 0.22 },
  { size: 180, x: 40, y: 70, speed: 0.9, opacity: 0.28 },
  { size: 110, x: 80, y: 80, speed: 1.3, opacity: 0.18 },
  { size: 90,  x: 25, y: 60, speed: 1.5, opacity: 0.16 },
];

const SPARKLES = 18;

export default function AnimatedBackground() {
  const bgRef = useRef();
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = e => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouse.current = {
        x: e.clientX / w,
        y: e.clientY / h,
      };
      if (bgRef.current) bgRef.current.style.setProperty('--mx', mouse.current.x);
      if (bgRef.current) bgRef.current.style.setProperty('--my', mouse.current.y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="animated-bg" ref={bgRef}>
      {BUBBLES.map((b, i) => (
        <div
          key={i}
          className="animated-bg__bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            top: `${b.y}%`,
            opacity: b.opacity,
            animationDuration: `${10 + b.speed * 8}s`,
            filter: 'blur(2px)',
            background: 'radial-gradient(circle at 30% 30%, #3b82f6 60%, #60a5fa 100%)',
            '--parallax': b.speed,
          }}
        />
      ))}
      {[...Array(SPARKLES)].map((_, i) => (
        <div key={i} className="animated-bg__sparkle" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
        }} />
      ))}
    </div>
  );
} 