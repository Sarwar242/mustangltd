'use client';

import { ReactNode, useEffect, useState } from 'react';

interface SlideTransitionProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down' | 'curtain';
  duration?: number;
  isVisible: boolean;
}

export default function SlideTransition({ 
  children, 
  direction = 'curtain', 
  duration = 1500,
  isVisible 
}: SlideTransitionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let raf = 0;
    if (direction === 'curtain') {
      if (isVisible) {
        // Start with curtains closed, then open on next frame
        setIsAnimating(false);
        raf = requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      } else {
        // Closing: bring curtains back to center to cover
        setIsAnimating(false);
      }
    } else {
      setIsAnimating(isVisible);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isVisible, direction]);

  // Curtain effect - split screen slides from middle
  if (direction === 'curtain') {
    return (
      <div className="relative w-full h-full">
        {/* Content stays visible; curtains animate over it */}
        <div className="relative">
          {children}
        </div>

        {/* Curtains overlay - fixed to ensure full-viewport cover */}
        <div className="pointer-events-none">
          {/* Left curtain */}
          <div
            className="fixed top-0 left-0 w-1/2 h-screen z-[9999] will-change-transform transition-transform bg-black/60"
            style={{
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: isAnimating ? 'translateX(-100%)' : 'translateX(0%)'
            }}
          />
          {/* Right curtain */}
          <div
            className="fixed top-0 right-0 w-1/2 h-screen z-[9999] will-change-transform transition-transform bg-black/60"
            style={{
              transitionDuration: `${duration}ms`,
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: isAnimating ? 'translateX(100%)' : 'translateX(0%)'
            }}
          />
        </div>
      </div>
    );
  }

  // Original slide transitions for backward compatibility
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
      className={`transition-all ease-out transform ${getTransformClass()} will-change-transform`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  );
} 