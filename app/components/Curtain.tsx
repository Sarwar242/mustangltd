'use client';

import { useEffect, useRef, useState } from 'react';

interface CurtainProps {
  active: boolean;
  phase: 'open' | 'close';
  duration?: number; // ms
  darkness?: number; // 0..1 opacity for panels
  onComplete?: () => void;
}

export default function Curtain({ active, phase, duration = 2500, darkness = 0.6, onComplete }: CurtainProps) {
  const [animateOpen, setAnimateOpen] = useState(true); // true means panels are off-screen
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Clear any previous timers
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    // Immediately set animation direction based on phase
    if (phase === 'open') {
      setAnimateOpen(true);
    } else {
      setAnimateOpen(false);
    }

    if (onComplete) {
      timeoutRef.current = window.setTimeout(onComplete, duration);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [phase, duration, onComplete]);

  const panelStyle: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    backgroundColor: `rgba(0,0,0,${darkness})`,
  };

  // Visibility: when not active, keep panels open and non-interactive
  const containerStyle: React.CSSProperties = {
    pointerEvents: 'none',
    opacity: active ? 1 : 0,
  };

  return (
    <div style={containerStyle}>
      <div
        className="fixed top-0 left-0 w-1/2 h-screen z-[9999] will-change-transform transition-transform"
        style={{
          ...panelStyle,
          transform: animateOpen ? 'translateX(-100%)' : 'translateX(0%)',
        }}
      />
      <div
        className="fixed top-0 right-0 w-1/2 h-screen z-[9999] will-change-transform transition-transform"
        style={{
          ...panelStyle,
          transform: animateOpen ? 'translateX(100%)' : 'translateX(0%)',
        }}
      />
    </div>
  );
} 