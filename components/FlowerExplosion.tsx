import React, { useState, useEffect } from 'react';

interface FlowerExplosionProps {
  isActive: boolean;
  onComplete?: () => void;
}

const FlowerExplosion: React.FC<FlowerExplosionProps> = ({ isActive, onComplete }) => {
  const [flowers, setFlowers] = useState<Array<{
    id: number;
    x: number;
    y: number;
    rotation: number;
    scale: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    if (isActive) {
      // Tạo 20 bông hoa với vị trí và thuộc tính ngẫu nhiên
      const newFlowers = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 0.5
      }));
      
      setFlowers(newFlowers);

      // Sau 2 giây, gọi callback hoàn thành
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setFlowers([]);
    }
  }, [isActive, onComplete]);

  if (!isActive || flowers.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute text-4xl animate-bounce"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `rotate(${flower.rotation}deg) scale(${flower.scale})`,
            animationDelay: `${flower.delay}s`,
            animationDuration: '2s'
          }}
        >
          {['🌹', '🌷', '🌸', '🌺', '🌻'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

export default FlowerExplosion;
