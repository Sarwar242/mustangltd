'use client';

import { ReactNode, useEffect, useState } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  isVisible: boolean;
}

export default function SlideTransition({ 
  children, 
  direction = 'right', 
  duration = 500,
  isVisible 
}: SlideTransitionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  const getTransformClass = () => {
    switch (direction) {
      case 'left':
        return isAnimating ? 'translate-x-0' : '-translate-x-full';
      case 'right':
        return isAnimating ? 'translate-x-0' : 'translate-x-full';
      case 'up':
        return isAnimating ? 'translate-y-0' : '-translate-y-full';
      case 'down':
        return isAnimating ? 'translate-y-0' : 'translate-y-full';
      default:
        return isAnimating ? 'translate-x-0' : 'translate-x-full';
    }
  };

  return (
    <div 
      className={`transition-all duration-500 ease-in-out ${getTransformClass()}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
} 