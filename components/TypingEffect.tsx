
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 150,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    setIsTyping(true);
  }, [text]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
        setIsTyping(false);
    }
  }, [displayedText, text, speed, isTyping]);

  return (
    <p className={`${className} transition-opacity duration-300`}>
      {displayedText}
      <span className={`inline-block w-1 h-8 md:h-10 bg-rose-500 ml-1 transition-opacity duration-500 ${isTyping ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></span>
    </p>
  );
};

export default TypingEffect;
