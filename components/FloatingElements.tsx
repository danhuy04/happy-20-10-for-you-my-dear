
import React from 'react';

interface FloatingElementsProps {
  count: number;
  element: React.ReactNode;
  animationName: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ count, element, animationName }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-1">
      {Array.from({ length: count }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
        };
        return (
          <div key={i} className={`absolute bottom-[-10%] ${animationName}`} style={style}>
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
